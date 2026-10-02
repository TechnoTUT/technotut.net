import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const BANDCAMP_URL = 'https://technotut.bandcamp.com/'
const OUT_IMG_DIR = path.resolve(rootDir, 'public/images/discography')
const OUT_DATA_FILE = path.resolve(rootDir, 'data/discography.json')

function decodeHtmlEntities(str) {
  return str
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
}

async function downloadImage(url, destPath) {
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
    return
  }

  // Try high-resolution (_16.jpg) first, fallback to original URL (_2.jpg)
  const highResUrl = url.replace(/_\d+\.jpg$/, '_16.jpg')
  let resp = await fetch(highResUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  })

  if (!resp.ok) {
    resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
  }

  if (!resp.ok) {
    throw new Error(`Failed to fetch image: ${url} (status: ${resp.status})`)
  }

  const arrayBuffer = await resp.arrayBuffer()
  fs.writeFileSync(destPath, Buffer.from(arrayBuffer))
}

export async function fetchDiscography() {
  console.log('[discography] Fetching discography from Bandcamp...')

  if (!fs.existsSync(OUT_IMG_DIR)) {
    fs.mkdirSync(OUT_IMG_DIR, { recursive: true })
  }

  try {
    const res = await fetch(BANDCAMP_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch Bandcamp page: status ${res.status}`)
    }

    const html = await res.text()
    const pattern =
      /<li\s+data-item-id="([^"]+)"[\s\S]*?<a\s+href="([^"]+)"[\s\S]*?<img\s+(?:class="lazy"\s+)?(?:src="\/img\/0\.gif"\s+data-original="([^"]+)"|src="([^"]+)")[^>]*>[\s\S]*?<p\s+class="title">\s*([\s\S]*?)\s*<\/p>/g

    const albums = []
    let match

    // 1. Initial items in HTML music-grid
    while ((match = pattern.exec(html)) !== null) {
      const [, , href, imgLazy, imgSrc, rawTitle] = match
      const img = imgLazy || imgSrc
      const title = decodeHtmlEntities(rawTitle.replace(/\s+/g, ' '))
      let slug = href.replace(/^\/album\//, '').replace(/\/$/, '')

      if (slug === '--4') slug = 'colorfroid'
      else if (slug === '--2') slug = 'utanokakera'
      else if (slug === '-') slug = 'natsuiro-connection'

      const filename = `${slug}.jpg`
      const localImagePath = path.join(OUT_IMG_DIR, filename)
      const publicImagePath = `/images/discography/${filename}`

      try {
        await downloadImage(img, localImagePath)
      } catch (err) {
        console.warn(`[discography] Warning: could not download image for ${title}:`, err)
      }

      albums.push({
        id: slug,
        title,
        url: href.startsWith('http') ? href : `https://technotut.bandcamp.com${href}`,
        image: publicImagePath,
      })
    }

    // 2. Additional items in data-client-items attribute
    const clientItemsMatch = html.match(/data-client-items="([^"]+)"/)
    if (clientItemsMatch) {
      try {
        const decodedJson = clientItemsMatch[1]
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&#39;/g, "'")
        const clientItems = JSON.parse(decodedJson)

        for (const item of clientItems) {
          if (item.type !== 'album' && !item.page_url?.startsWith('/album/')) continue

          const title = decodeHtmlEntities(item.title)
          let slug = item.page_url.replace(/^\/album\//, '').replace(/\/$/, '')
          if (slug === '--4') slug = 'colorfroid'
          else if (slug === '--2') slug = 'utanokakera'
          else if (slug === '-') slug = 'natsuiro-connection'

          if (albums.some(a => a.id === slug)) continue

          const artIdPadded = String(item.art_id).padStart(10, '0')
          const imgUrl = `https://f4.bcbits.com/img/a${artIdPadded}_2.jpg`

          const filename = `${slug}.jpg`
          const localImagePath = path.join(OUT_IMG_DIR, filename)
          const publicImagePath = `/images/discography/${filename}`

          try {
            await downloadImage(imgUrl, localImagePath)
          } catch (err) {
            console.warn(`[discography] Warning: could not download image for ${title}:`, err)
          }

          albums.push({
            id: slug,
            title,
            url: item.page_url.startsWith('http')
              ? item.page_url
              : `https://technotut.bandcamp.com${item.page_url}`,
            image: publicImagePath,
          })
        }
      } catch (e) {
        console.warn('[discography] Warning: Failed to parse data-client-items:', e)
      }
    }

    if (albums.length > 0) {
      fs.writeFileSync(OUT_DATA_FILE, JSON.stringify(albums, null, 2) + '\n', 'utf-8')
      console.log(`[discography] Successfully synced all ${albums.length} releases from Bandcamp.`)
    } else {
      console.warn('[discography] Warning: No albums matched in Bandcamp HTML.')
    }
  } catch (error) {
    console.warn('[discography] Warning: Error syncing discography (keeping existing data if available):', error)
    if (!fs.existsSync(OUT_DATA_FILE)) {
      const outDataDir = path.dirname(OUT_DATA_FILE)
      if (!fs.existsSync(outDataDir)) {
        fs.mkdirSync(outDataDir, { recursive: true })
      }
      fs.writeFileSync(OUT_DATA_FILE, '[]\n', 'utf-8')
    }
  }
}

// Execute directly if run as a CLI script
const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(__filename)

if (isDirectRun) {
  fetchDiscography()
}
