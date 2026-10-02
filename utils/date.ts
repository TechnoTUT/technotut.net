/**
 * 日付文字列を日本語ロケールの `YYYY/MM/DD` 形式にフォーマットする。
 *
 * @param dateStr - ISO 8601 等の日付文字列
 * @returns フォーマット済み文字列。空文字列が渡された場合は空文字列を返す。
 */
export const formatJaDate = (dateStr: string): string => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
