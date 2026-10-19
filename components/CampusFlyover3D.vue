<template>
  <div class="relative w-full h-full">
    <!-- MapLibre's CSS sets position: relative on the map container, so size it with h-full instead of absolute inset-0 -->
    <div ref="containerRef" class="w-full h-full" />

    <!-- Location switcher -->
    <div class="absolute left-3 top-3 z-10 flex flex-wrap gap-2" role="group" aria-label="表示する地点">
      <button
        v-for="stop in stops"
        :key="stop.id"
        type="button"
        class="px-3 py-1 rounded-full text-xs font-quicksand tracking-wider border transition-colors"
        :class="activeStop === stop.id
          ? 'bg-brand border-brand text-white'
          : 'bg-dark/80 border-white/20 text-gray-300 hover:border-white/60'"
        :aria-pressed="activeStop === stop.id"
        @click="focusStop(stop.id)"
      >
        {{ stop.label }}
      </button>
      <button
        type="button"
        class="px-3 py-1 rounded-full text-xs font-quicksand tracking-wider border transition-colors"
        :class="overview
          ? 'bg-brand border-brand text-white'
          : 'bg-dark/80 border-white/20 text-gray-300 hover:border-white/60'"
        :aria-pressed="overview"
        @click="toggleOverview"
      >
        全体
      </button>
      <button
        v-if="!reduceMotion"
        type="button"
        class="px-3 py-1 rounded-full text-xs font-quicksand tracking-wider border transition-colors"
        :class="following
          ? 'bg-brand border-brand text-white'
          : 'bg-dark/80 border-white/20 text-gray-300 hover:border-white/60'"
        :aria-pressed="following"
        @click="toggleFollow"
      >
        追従
      </button>
    </div>

    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-dark">
      <div class="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url'

// On-campus walking route: bus stop -> Commons 1 -> club room.
// Points follow the actual walking path, traced by hand. Route points are [lng, lat].
const ROUTE: [number, number][] = [
  [137.41273598, 34.70092077],
  [137.41187633, 34.70083588],
  [137.41103412, 34.70117767],
  [137.41036534, 34.70121661],
  [137.40738507, 34.70088845],
  [137.40702834, 34.70099650],
  [137.40667027, 34.70096232],
]

const stops = [
  { id: 'bus', label: '技科大前 バス停', center: [137.41273, 34.70088] as [number, number], zoom: 17.2, pitch: 55, bearing: -20 },
  { id: 'commons', label: 'コモンズ1', center: [137.40903, 34.70075] as [number, number], zoom: 17.6, pitch: 60, bearing: 30 },
  { id: 'clubroom', label: '部室', center: [137.40663, 34.70105] as [number, number], zoom: 18, pitch: 60, bearing: -60 },
]
type StopId = (typeof stops)[number]['id']

const containerRef = ref<HTMLDivElement | null>(null)
// Only one of "follow" or a fixed stop is selected at a time, so this starts as null while following.
const activeStop = ref<StopId | null>(null)
const loading = ref(true)

let map: import('maplibre-gl').Map | null = null
let resizeObserver: ResizeObserver | null = null
let markers: import('maplibre-gl').Marker[] = []
let rafId = 0
const reduceMotion = ref(false)

// Route length is measured in metres so the marker moves at a constant speed,
// instead of spending the same time on short and long segments.
const METRES_PER_DEG_LAT = 110574
const metresPerDegLng = (lat: number) => 111320 * Math.cos((lat * Math.PI) / 180)
const cumulative: number[] = [0]
for (let i = 1; i < ROUTE.length; i++) {
  const [x0, y0] = ROUTE[i - 1]
  const [x1, y1] = ROUTE[i]
  const dx = (x1 - x0) * metresPerDegLng((y0 + y1) / 2)
  const dy = (y1 - y0) * METRES_PER_DEG_LAT
  cumulative.push(cumulative[i - 1] + Math.hypot(dx, dy))
}
const ROUTE_LENGTH = cumulative[cumulative.length - 1]

// Position and compass heading at a distance along the route.
const pointAt = (distance: number) => {
  let i = 0
  while (i < ROUTE.length - 2 && cumulative[i + 1] <= distance) i++
  const [x0, y0] = ROUTE[i]
  const [x1, y1] = ROUTE[i + 1]
  const span = cumulative[i + 1] - cumulative[i] || 1
  const f = Math.min(Math.max((distance - cumulative[i]) / span, 0), 1)
  const dx = (x1 - x0) * metresPerDegLng((y0 + y1) / 2)
  const dy = (y1 - y0) * METRES_PER_DEG_LAT
  const heading = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360
  return { lng: x0 + (x1 - x0) * f, lat: y0 + (y1 - y0) * f, heading, distance }
}

// Smallest signed difference between two compass angles.
const angleDiff = (from: number, to: number) => ((to - from + 540) % 360) - 180

// Starts as an overview of all three points; following begins after the intro.
const following = ref(false)
let introTimer: ReturnType<typeof setTimeout> | null = null
let bearingNow = 0

const focusStop = (id: StopId) => {
  const stop = stops.find((s) => s.id === id)
  if (!stop || !map) return
  activeStop.value = id
  following.value = false
  overview.value = false
  clearIntro()
  map.easeTo({
    center: stop.center,
    zoom: stop.zoom,
    pitch: stop.pitch,
    bearing: stop.bearing,
    duration: reduceMotion.value ? 0 : 1600,
  })
}

// Draws a label box with text onto a canvas, so it can be used as a map image (no glyph server needed).
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

// Lets a parent (e.g. the top page's "VIEW ON MAP" buttons) move the camera to a destination.
const focusFromParent = (id: string) => {
  if (stops.some((s) => s.id === id)) focusStop(id as StopId)
}
defineExpose({ focusStop: focusFromParent })

// Overview of all three points and the whole route, looking straight down and north up.
const overview = ref(false)
const fitOverview = (duration: number) => {
  if (!map) return
  const lngs = [...ROUTE.map((p) => p[0]), ...stops.map((s) => s.center[0])]
  const lats = [...ROUTE.map((p) => p[1]), ...stops.map((s) => s.center[1])]
  map.fitBounds(
    [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]],
    { padding: 60, pitch: 0, bearing: 0, duration },
  )
}

const clearIntro = () => {
  if (introTimer) {
    clearTimeout(introTimer)
    introTimer = null
  }
}

const toggleOverview = () => {
  overview.value = !overview.value
  clearIntro()
  if (overview.value) {
    following.value = false
    activeStop.value = null
    fitOverview(reduceMotion.value ? 0 : 1200)
  } else {
    // Back to following the route position
    following.value = true
    map?.jumpTo({ zoom: 17.4, pitch: 45 })
    if (map) bearingNow = map.getBearing()
  }
}

// Each time the route position heads back to the bus stop, show the overview briefly, then resume following.
const OVERVIEW_HOLD_MS = 3000
const showOverviewThenFollow = () => {
  clearIntro()
  following.value = false
  overview.value = true
  fitOverview(reduceMotion.value ? 0 : 1200)
  introTimer = setTimeout(() => {
    introTimer = null
    if (!map) return
    overview.value = false
    following.value = true
    map.jumpTo({ zoom: 17.4, pitch: 45 })
    bearingNow = map.getBearing()
  }, OVERVIEW_HOLD_MS)
}

const toggleFollow = () => {
  clearIntro()
  following.value = !following.value
  overview.value = false
  if (following.value) activeStop.value = null
  if (following.value && map) {
    // Use a closer view while following the marker.
    map.jumpTo({ zoom: 17.4, pitch: 45 })
    bearingNow = map.getBearing()
  }
}

// One-way trip: speed eases in at the start and out at the end, cruising in between.
// Returns, for each sample of progress u in [0, 1], the fraction of the route covered.
const EASE_STEPS = 400
const EDGE = 0.15
const smooth = (r: number) => r * r * (3 - 2 * r)
const speedProfile = (u: number) => smooth(Math.min(1, u / EDGE, (1 - u) / EDGE))
const easeTable: number[] = [0]
for (let i = 1; i <= EASE_STEPS; i++) {
  easeTable.push(easeTable[i - 1] + speedProfile((i - 0.5) / EASE_STEPS))
}
const easeDistance = (u: number) => {
  const x = Math.min(Math.max(u, 0), 1) * EASE_STEPS
  const i = Math.floor(x)
  const f = x - i
  const a = easeTable[i]
  const b = easeTable[Math.min(i + 1, EASE_STEPS)]
  return (a + (b - a) * f) / easeTable[EASE_STEPS]
}

// One-way trip, repeated: wait at the bus stop, go to the club room, wait there, then start again.
const TRIP_SECONDS = 25
const START_PAUSE_SECONDS = 1
const END_PAUSE_SECONDS = 3
const CYCLE_MS = (START_PAUSE_SECONDS + TRIP_SECONDS + END_PAUSE_SECONDS) * 1000

const positionAt = (elapsedMs: number) => {
  const trip = TRIP_SECONDS * 1000
  const startPause = START_PAUSE_SECONDS * 1000
  const t = elapsedMs % CYCLE_MS
  if (t < startPause) {
    // Waiting at the bus stop before departure
    return pointAt(0)
  }
  if (t < startPause + trip) {
    return pointAt(easeDistance((t - startPause) / trip) * ROUTE_LENGTH)
  }
  // Waiting at the club room before the next run
  return pointAt(ROUTE_LENGTH)
}

// Walk a marker along the route, stopping at both ends.
// While following, the camera tracks the marker and turns with its heading.
const startRouteAnimation = () => {
  if (!map || reduceMotion.value) return
  const started = performance.now()
  bearingNow = pointAt(0).heading

  let lastCycle = 0
  let turnFrom: number | null = null
  const tick = (now: number) => {
    if (!map) return
    const elapsed = now - started
    const cycle = Math.floor(elapsed / CYCLE_MS)
    if (cycle !== lastCycle) {
      lastCycle = cycle
      // Heading back to the bus stop: show the whole route first.
      if (following.value) showOverviewThenFollow()
    }
    const p = positionAt(elapsed)
    if (following.value) {
      // Ease the bearing so that corners turn smoothly rather than snapping.
      const progress = Math.min(Math.max((p.distance - ROUTE_LENGTH * 0.7) / (ROUTE_LENGTH * 0.3), 0), 1)
      if (progress > 0) {
        // Final 30%: the direction of travel is ignored. The view turns from the bearing at the start
        // of this stretch to north along an S-curve, so corners in this stretch do not affect it.
        if (turnFrom === null) turnFrom = bearingNow
        bearingNow = (turnFrom + angleDiff(turnFrom, 0) * smooth(progress) + 360) % 360
      } else {
        turnFrom = null
        bearingNow = (bearingNow + angleDiff(bearingNow, p.heading) * 0.08 + 360) % 360
      }
      map.jumpTo({ center: [p.lng, p.lat], bearing: bearingNow })
    }
    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(async () => {
  if (!containerRef.value) return
  const maplibre = await import('maplibre-gl')
  // Point MapLibre at its worker through Vite so it resolves in both dev and the generated build.
  maplibre.setWorkerUrl(maplibreWorkerUrl)
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Background-only style: no external tiles. Buildings and route are drawn from local data.
  map = new maplibre.Map({
    container: containerRef.value,
    style: {
      version: 8,
      sources: {},
      layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#050505' } }],
    },
    center: stops[1].center,
    zoom: stops[1].zoom,
    pitch: stops[1].pitch,
    bearing: stops[1].bearing,
    attributionControl: false,
    interactive: true,
  })

  map.on('load', async () => {
    if (!map) return
    const [buildings, roads] = await Promise.all([
      fetch('/data/plateau/toyohashi-campus.geojson').then((r) => r.json()),
      fetch('/data/plateau/toyohashi-campus-roads.geojson').then((r) => r.json()),
    ])

    // Roads sit flat on the ground, so they are added before the buildings to draw underneath.
    map.addSource('roads', { type: 'geojson', data: roads })
    map.addLayer({
      id: 'roads',
      type: 'fill',
      source: 'roads',
      paint: { 'fill-color': '#444444', 'fill-opacity': 1 },
    })

    map.addSource('buildings', { type: 'geojson', data: buildings })
    map.addLayer({
      id: 'buildings',
      type: 'fill-extrusion',
      source: 'buildings',
      paint: {
        'fill-extrusion-color': '#2a2a2a',
        'fill-extrusion-height': ['get', 'h'],
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.9,
      },
    })

    map.addSource('route', {
      type: 'geojson',
      data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: ROUTE } },
    })
    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      paint: { 'line-color': '#C7000A', 'line-width': 3, 'line-opacity': 0.9 },
    })


    // Destination pins: the dots are a WebGL layer so they are drawn in the same pass as the buildings.
    map.addSource('stops', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: stops.map((s) => ({ type: 'Feature', properties: { id: s.id }, geometry: { type: 'Point', coordinates: s.center } })),
      },
    })
    map.addLayer({
      id: 'stops',
      type: 'circle',
      source: 'stops',
      paint: { 'circle-radius': 6, 'circle-color': '#C7000A', 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 },
    })

    // Labels are drawn as images on a WebGL symbol layer, so they move with the map in the same pass
    // as the buildings. DOM labels wobbled because they were positioned separately from the canvas.
    for (const stop of stops) {
      map.addImage(`label-${stop.id}`, makeLabelImage(stop.label), { pixelRatio: 2 })
    }
    map.addSource('stop-labels', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: stops.map((s) => ({ type: 'Feature', properties: { img: `label-${s.id}` }, geometry: { type: 'Point', coordinates: s.center } })),
      },
    })
    map.addLayer({
      id: 'stop-labels',
      type: 'symbol',
      source: 'stop-labels',
      layout: {
        'icon-image': ['get', 'img'],
        'icon-anchor': 'bottom',
        'icon-offset': [0, -12],
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
      },
    })

    loading.value = false

    // Overview of all three points first, then start following.
    overview.value = true
    fitOverview(reduceMotion.value ? 0 : 1200)
    activeStop.value = null
    startRouteAnimation()
    introTimer = setTimeout(() => {
      introTimer = null
      if (!map) return
      overview.value = false
      following.value = true
      map.jumpTo({ zoom: 17.4, pitch: 45 })
      bearingNow = map.getBearing()
    }, reduceMotion.value ? 0 : 3000)
  })

  resizeObserver = new ResizeObserver(() => map?.resize())
  resizeObserver.observe(containerRef.value)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  if (introTimer) clearTimeout(introTimer)
  resizeObserver?.disconnect()
  markers.forEach((m) => m.remove())
  markers = []
  map?.remove()
  map = null
})
</script>
