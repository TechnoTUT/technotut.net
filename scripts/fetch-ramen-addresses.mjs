#!/usr/bin/env node
// Reverse-geocode each ramen spot via OpenStreetMap Nominatim and store a
// short address string in data/ramen-spots-fallback.json.
// Rate-limited to ~1 request/second per Nominatim usage policy.

import { readFile, writeFile } from 'node:fs/promises'

const FILE = new URL('../data/ramen-spots-fallback.json', import.meta.url)
const UA = 'technotut.net/ramen-map (contact: contact@technotut.net)'

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

const data = JSON.parse(await readFile(FILE, 'utf8'))

const pickArea = (a) => {
  const parts = []
  const city = a.city || a.town || a.village || a.municipality || ''
  const suburb = a.suburb || a.quarter || a.neighbourhood || a.hamlet || ''
  const road = a.road || ''
  if (city) parts.push(city)
  if (suburb) parts.push(suburb)
  if (road) parts.push(road)
  return parts.join('')
}

let done = 0
for (const spot of data.spots) {
  if (spot.address) { done++; continue }
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${spot.lat}&lon=${spot.lng}&zoom=16&addressdetails=1`
    const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'ja' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    spot.address = json?.address ? pickArea(json.address) : ''
  } catch (err) {
    console.warn(`failed: ${spot.title}: ${err.message}`)
    spot.address = spot.address || ''
  }
  done++
  if (done % 20 === 0) console.log(`${done}/${data.spots.length}`)
  await sleep(1100)
}

await writeFile(FILE, JSON.stringify(data, null, 2) + '\n')
console.log('done')
