<template>
  <div class="relative w-full h-full">
    <div ref="containerRef" class="w-full h-full" />

    <!-- Legend: colours match the travel lines on the map -->
    <ul class="absolute left-3 bottom-3 z-10 flex flex-col gap-1 rounded bg-dark/85 border border-white/20 px-3 py-2 text-[11px] font-noto text-gray-200 pointer-events-none">
      <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#2f7fd6]" />東海道新幹線 名古屋→豊橋 約20分</li>
      <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#E0202A]" />名鉄線 名鉄名古屋→豊橋 約50分</li>
      <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#f28c28]" />東海道線 名古屋→豊橋 約60分</li>
      <li class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#f28c28]" />東海道線 浜松→豊橋 約30分</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url'

// Main stations shown as labelled pins. Coordinates are [lng, lat].
const STATIONS = [
  { id: 'nagoya', label: '名古屋', center: [136.8815, 35.1706] as [number, number] },
  { id: 'toyohashi', label: '豊橋', center: [137.3817, 34.7691] as [number, number] },
  { id: 'hamamatsu', label: '浜松', center: [137.7332, 34.7036] as [number, number] },
]

// Colours for each travel line and its moving dot.
const COLORS: Record<string, string> = {
  shinkansen: '#2f7fd6', // blue
  meitetsu: '#E0202A', // red
  jr: '#f28c28', // orange
  jr_hamamatsu: '#f28c28', // orange
}

// Travel time for each trip in minutes, and how many one-way runs it makes in one cycle.
// Shinkansen makes two one-way runs, each starting from the origin; the others make one run and wait at the end.
const TRAVELS = [
  { mode: 'shinkansen', minutes: 20, legs: 2, gapMs: 3000 },
  { mode: 'meitetsu', minutes: 50, legs: 1, gapMs: 0 },
  { mode: 'jr', minutes: 60, legs: 1, gapMs: 0 },
  { mode: 'jr_hamamatsu', minutes: 30, legs: 1, gapMs: 0 },
]
// One minute is shown as SECONDS_PER_MINUTE. All trains start together at the beginning of each cycle.
const SECONDS_PER_MINUTE = 0.5
const CYCLE_MS = 40000

const containerRef = ref<HTMLDivElement | null>(null)
let map: import('maplibre-gl').Map | null = null
let resizeObserver: ResizeObserver | null = null
let rafId = 0

// Label box drawn to a canvas, so it can be used as a map image (no glyph server needed).
const makeLabelImage = (text: string) => {
  const scale = 2
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const font = `11px "Noto Sans JP", sans-serif`
  ctx.font = font
  const width = Math.ceil(ctx.measureText(text).width) + 16
  const height = 22
  canvas.width = width * scale
  canvas.height = height * scale
  ctx.scale(scale, scale)
  ctx.fillStyle = 'rgba(5,5,5,0.85)'
  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
  ctx.fillRect(0.5, 0.5, width - 1, height - 1)
  ctx.strokeRect(0.5, 0.5, width - 1, height - 1)
  ctx.font = font
  ctx.fillStyle = '#ffffff'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, 8, height / 2 + 0.5)
  return ctx.getImageData(0, 0, canvas.width, canvas.height)
}

// Distance in metres between two [lng, lat] points, for measuring route length.
const metres = (a: number[], b: number[]) => {
  const dx = (b[0] - a[0]) * 111320 * Math.cos((((a[1] + b[1]) / 2) * Math.PI) / 180)
  const dy = (b[1] - a[1]) * 110574
  return Math.hypot(dx, dy)
}

// Cumulative distance along a route, so a dot can move at a speed that matches its travel time.
const routeIndex = (coords: number[][]) => {
  const cumulative = [0]
  for (let i = 1; i < coords.length; i++) cumulative.push(cumulative[i - 1] + metres(coords[i - 1], coords[i]))
  return { coords, cumulative, total: cumulative[cumulative.length - 1] }
}

// Point on a route at a given distance from its start.
const pointOnRoute = (route: ReturnType<typeof routeIndex>, distance: number) => {
  const { coords, cumulative } = route
  let i = 0
  while (i < coords.length - 2 && cumulative[i + 1] <= distance) i++
  const span = cumulative[i + 1] - cumulative[i] || 1
  const f = Math.min(Math.max((distance - cumulative[i]) / span, 0), 1)
  return [coords[i][0] + (coords[i + 1][0] - coords[i][0]) * f, coords[i][1] + (coords[i + 1][1] - coords[i][1]) * f]
}

onMounted(async () => {
  if (!containerRef.value) return
  const maplibre = await import('maplibre-gl')
  maplibre.setWorkerUrl(maplibreWorkerUrl)

  // Background-only style: lines and labels come from local data.
  map = new maplibre.Map({
    container: containerRef.value,
    style: {
      version: 8,
      sources: {},
      layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#050505' } }],
    },
    center: [137.2, 34.95],
    zoom: 8.4,
    pitch: 0,
    bearing: 0,
    attributionControl: false,
  })

  map.on('load', async () => {
    if (!map) return
    const [rail, travelRoutes] = await Promise.all([
      fetch('/data/plateau/rail-regional.geojson').then((r) => r.json()),
      fetch('/data/plateau/travel-routes.geojson').then((r) => r.json()),
    ])

    // Background rail network.
    map.addSource('rail', { type: 'geojson', data: rail })
    map.addLayer({
      id: 'rail',
      type: 'line',
      source: 'rail',
      paint: {
        'line-color': ['case', ['==', ['get', 'company'], '東海旅客鉄道'], '#9a9a9a', '#5e5e5e'],
        'line-width': ['interpolate', ['linear'], ['zoom'], 7, 0.8, 11, 2.4],
        'line-opacity': 0.95,
      },
    })

    // Travel routes, coloured by train type.
    map.addSource('travel-routes', { type: 'geojson', data: travelRoutes })
    map.addLayer({
      id: 'travel-routes',
      type: 'line',
      source: 'travel-routes',
      paint: {
        'line-color': ['match', ['get', 'mode'], 'shinkansen', COLORS.shinkansen, 'meitetsu', COLORS.meitetsu, COLORS.jr],
        'line-width': 2.5,
        'line-opacity': 0.9,
      },
    })

    // Moving dots: one GeoJSON point per trip, drawn by WebGL. Updating a single source each frame keeps
    // the dots steady, whereas DOM markers were repositioned separately from the map canvas and jittered.
    const routes = new Map<string, ReturnType<typeof routeIndex>>()
    for (const feature of travelRoutes.features) routes.set(feature.properties.mode, routeIndex(feature.geometry.coordinates))
    const runners = TRAVELS.map((t) => ({
      mode: t.mode,
      route: routes.get(t.mode)!,
      legs: t.legs,
      gapMs: t.gapMs,
      travelMs: t.minutes * SECONDS_PER_MINUTE * 1000,
    }))

    // Fraction of the route (0 = origin, 1 = Toyohashi) at time t within a cycle.
    // Every run goes from the origin to Toyohashi. Between runs the train stops at Toyohashi for gapMs,
    // then the next run starts from the origin. After the last run it stays at Toyohashi.
    const fractionAt = (r: (typeof runners)[number], t: number) => {
      const period = r.travelMs + r.gapMs
      const index = Math.floor(t / period)
      if (index >= r.legs) return 1
      const inRun = t - index * period
      if (inRun >= r.travelMs) return 1
      return inRun / r.travelMs
    }
    map.addSource('runners', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: runners.map((r) => ({
          type: 'Feature',
          properties: { color: COLORS[r.mode] },
          geometry: { type: 'Point', coordinates: r.route.coords[0] },
        })),
      },
    })
    map.addLayer({
      id: 'runners',
      type: 'circle',
      source: 'runners',
      paint: {
        'circle-radius': 5,
        'circle-color': ['get', 'color'],
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': 2,
      },
    })

    const runnerSource = map.getSource('runners') as import('maplibre-gl').GeoJSONSource
    const started = performance.now()
    const tick = (now: number) => {
      if (!map) return
      const t = (now - started) % CYCLE_MS
      const features = runners.map((r) => {
        const [lng, lat] = pointOnRoute(r.route, fractionAt(r, t) * r.route.total)
        return {
          type: 'Feature' as const,
          properties: { color: COLORS[r.mode] },
          geometry: { type: 'Point' as const, coordinates: [lng, lat] },
        }
      })
      runnerSource.setData({ type: 'FeatureCollection', features })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    // Station labels are drawn as images on a symbol layer, so they stay in sync with the map.
    // Main stations come from the constants above; intermediate stations come from the rail station data.
    const intermediate = await fetch('/data/plateau/rail-stations.geojson').then((r) => r.json())
    // Label placement. Most labels sit above their station. Chiryu extends up and to the right, which keeps it
    // clear of Kariya (down-left) and Anjo (down-right), both close to it on the map.
    const placement = (name: string): { anchor: 'bottom' | 'bottom-left'; offset: [number, number] } =>
      name === '知立' ? { anchor: 'bottom-left', offset: [6, -10] } : { anchor: 'bottom', offset: [0, -12] }
    const labels = [
      ...STATIONS.map((s) => ({ key: `station-${s.id}`, text: s.label, center: s.center, ...placement(s.label) })),
      ...intermediate.features.map((f: { properties: { name: string }; geometry: { coordinates: number[] } }) => ({
        key: `station-mid-${f.properties.name}`,
        text: f.properties.name,
        center: f.geometry.coordinates as [number, number],
        ...placement(f.properties.name),
      })),
    ]
    for (const label of labels) {
      map.addImage(label.key, makeLabelImage(label.text), { pixelRatio: 2 })
    }
    map.addSource('labels', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: labels.map((l) => ({
          type: 'Feature',
          properties: { img: l.key, anchor: l.anchor, offset: l.offset },
          geometry: { type: 'Point', coordinates: l.center },
        })),
      },
    })
    map.addLayer({
      id: 'labels',
      type: 'symbol',
      source: 'labels',
      layout: {
        'icon-image': ['get', 'img'],
        'icon-anchor': ['get', 'anchor'],
        'icon-offset': ['get', 'offset'],
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
      },
    })

    // Show all of the area at first.
    map.fitBounds([[136.85, 34.65], [137.85, 35.25]], { padding: 20, duration: 0 })
  })

  resizeObserver = new ResizeObserver(() => map?.resize())
  resizeObserver.observe(containerRef.value)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  resizeObserver?.disconnect()
  map?.remove()
  map = null
})
</script>
