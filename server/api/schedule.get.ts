export interface ScheduleItem {
  fiscalYear: string
  category: string
  date: string
  title: string
  url: string
  place: string
  description: string
}

// Minimal RFC 4180 parser: handles quoted fields, escaped quotes and line breaks inside quotes.
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        field += ch
      }
    } else if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      row.push(field)
      field = ''
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else {
      field += ch
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

// Column order is fixed by the sheet: 年度, 区分, 日付, 活動名, URL, 場所, 内容
function toScheduleItems(rows: string[][]): ScheduleItem[] {
  return rows
    .slice(1) // header row
    .filter((cols) => cols[3]?.trim())
    .map((cols) => ({
      fiscalYear: cols[0]?.trim() ?? '',
      category: cols[1]?.trim() ?? '',
      date: cols[2]?.trim() ?? '',
      title: cols[3]?.trim() ?? '',
      url: cols[4]?.trim() ?? '',
      place: cols[5]?.trim() ?? '',
      description: cols[6]?.trim() ?? '',
    }))
}

export default defineEventHandler(async (event) => {
  const { scheduleCsvUrl } = useRuntimeConfig(event)
  if (!scheduleCsvUrl) {
    setResponseStatus(event, 503)
    return { error: 'schedule source is not configured' }
  }

  try {
    // cf.cacheTtl caches the upstream CSV at the Cloudflare edge (Workers only; ignored elsewhere).
    const res = await fetch(scheduleCsvUrl, {
      cf: { cacheTtl: 3600, cacheEverything: true },
    } as RequestInit)
    if (!res.ok) throw new Error(`upstream status ${res.status}`)

    const items = toScheduleItems(parseCsv(await res.text()))
    setResponseHeader(event, 'Cache-Control', 'public, max-age=300, stale-while-revalidate=172800')
    return items
  } catch (error) {
    console.error('[schedule] failed to load sheet', error)
    setResponseStatus(event, 503)
    return { error: 'schedule source is unavailable' }
  }
})
