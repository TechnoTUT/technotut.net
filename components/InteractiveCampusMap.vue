<template>
  <div class="relative w-full h-full min-h-[460px] flex-grow overflow-hidden bg-dark border border-white/10 select-none map-dark-theme">
    <!-- Map Container -->
    <div
      ref="mapContainerRef"
      class="w-full h-full min-h-[460px] z-0"
    />

    <!-- Bottom Controls & Navigation -->
    <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 z-10 pointer-events-none">
      <div class="pointer-events-auto hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded bg-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-quicksand text-gray-400">
        <span>Drag to pan / Scroll to zoom</span>
      </div>

      <!-- Action Buttons -->
      <div class="pointer-events-auto flex items-center gap-1.5 ml-auto">
        <button
          type="button"
          class="w-8 h-8 rounded bg-dark/85 backdrop-blur-md border border-white/15 text-white text-xs hover:border-white transition-colors flex items-center justify-center shadow-lg cursor-pointer"
          title="Zoom In"
          aria-label="Zoom In"
          @click="zoomIn"
        >
          +
        </button>
        <button
          type="button"
          class="w-8 h-8 rounded bg-dark/85 backdrop-blur-md border border-white/15 text-white text-xs hover:border-white transition-colors flex items-center justify-center shadow-lg cursor-pointer"
          title="Zoom Out"
          aria-label="Zoom Out"
          @click="zoomOut"
        >
          &minus;
        </button>
        <button
          type="button"
          class="px-2.5 h-8 rounded bg-dark/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-quicksand hover:border-white transition-colors flex items-center justify-center gap-1 shadow-lg cursor-pointer"
          title="Reset Camera"
          aria-label="Reset Camera"
          @click="flyTo('all')"
        >
          RESET
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from 'vue'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'
import 'leaflet/dist/leaflet.css'

type LocationId = 'all' | 'commons' | 'clubroom' | 'bus'

interface LocationItem {
  id: LocationId
  name: string
  center: [number, number] // [lat, lng]
  zoom: number
  title?: string
  description?: string
  badge?: string
}

const emit = defineEmits<{
  (e: 'location-selected', id: LocationId): void
}>()

const activeLocationId = ref<LocationId>('all')
const mapContainerRef = ref<HTMLElement | null>(null)
const mapInstance = shallowRef<LeafletMap | null>(null)
let markersList: Array<{ id: LocationId; marker: LeafletMarker }> = []
let resizeObserver: ResizeObserver | null = null

const locations: LocationItem[] = [
  {
    id: 'all',
    name: '全体俯瞰',
    center: [34.7009, 137.4095],
    zoom: 16,
  },
  {
    id: 'commons',
    name: 'コモンズ1',
    center: [34.70075, 137.40903],
    zoom: 18,
    title: 'コモンズ1 (福利施設1階)',
    description: '学内イベント "The Utopia Tone" の開催場所',
    badge: 'COMMONS 1',
  },
  {
    id: 'clubroom',
    name: '部室',
    center: [34.70105, 137.40663],
    zoom: 18,
    title: '音楽技術部 部室 (クラブハウス2階)',
    description: '日常的な活動場所',
    badge: 'CLUB ROOM',
  },
  {
    id: 'bus',
    name: '技科大前 バス停',
    center: [34.70088, 137.41273],
    zoom: 17,
    title: '技科大前 バス停 (東門ロータリー前)',
    description: '豊橋駅前2番乗り場より豊鉄バス（豊橋技科大線）で約30分。',
    badge: 'BUS STOP',
  },
]

const flyTo = (id: LocationId) => {
  activeLocationId.value = id
  emit('location-selected', id)

  const loc = locations.find((l) => l.id === id)
  if (!loc || !mapInstance.value) return

  mapInstance.value.flyTo(loc.center, loc.zoom, {
    duration: 1.2,
  })

  const target = markersList.find((m) => m.id === id)
  if (target) {
    setTimeout(() => {
      target.marker.openPopup()
    }, 400)
  }
}

const zoomIn = () => {
  mapInstance.value?.zoomIn()
}

const zoomOut = () => {
  mapInstance.value?.zoomOut()
}

defineExpose({
  flyTo,
  activeLocationId,
})

const handleResize = () => {
  mapInstance.value?.invalidateSize()
}

onMounted(async () => {
  if (!mapContainerRef.value) return

  try {
    const leafletMod = await import('leaflet')
    // Robust resolution across diverse bundling / SSR environments
    const L =
      (window as unknown as { L?: typeof import('leaflet') }).L ||
      (leafletMod as unknown as { default?: typeof import('leaflet') }).default ||
      (leafletMod as unknown as typeof import('leaflet'))

    if (!L || typeof L.map !== 'function') {
      console.error('Leaflet failed to load correctly.')
      return
    }

    const map = L.map(mapContainerRef.value, {
      center: [34.7009, 137.4095],
      zoom: 16,
      zoomControl: false,
      attributionControl: true,
    })

    // Pure OpenStreetMap standard tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map)

    mapInstance.value = map
    window.addEventListener('resize', handleResize)

    if (typeof ResizeObserver !== 'undefined' && mapContainerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(mapContainerRef.value)
    }

    setTimeout(() => map.invalidateSize(), 60)
    setTimeout(() => map.invalidateSize(), 300)
    setTimeout(() => map.invalidateSize(), 800)

    // Add Custom Markers
    const markerItems = locations.filter((l) => l.id !== 'all')

    markerItems.forEach((item) => {
      let pinClass = 'marker-brand'
      if (item.id === 'clubroom') pinClass = 'marker-rainbow'
      if (item.id === 'bus') pinClass = 'marker-cyan'

      const customIcon = L.divIcon({
        className: 'leaflet-custom-marker-wrapper',
        html: `
          <div class="marker-point ${pinClass}" role="button" tabindex="0" aria-label="${item.name}">
            <div class="marker-pulse"></div>
            <div class="marker-core"></div>
            <div class="marker-label">${item.name}</div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -14],
      })

      const popupContent = `
        <div class="technotut-popup-content">
          <span class="popup-badge">${item.badge || ''}</span>
          <h4 class="popup-title">${item.title || item.name}</h4>
          <p class="popup-desc">${item.description || ''}</p>
        </div>
      `

      const marker = L.marker(item.center, { icon: customIcon })
        .bindPopup(popupContent, {
          closeButton: false,
          className: 'technotut-leaflet-popup',
        })
        .addTo(map)

      marker.on('click', () => {
        flyTo(item.id)
      })

      markersList.push({ id: item.id, marker })
    })
  } catch (err) {
    console.error('Failed to initialize Leaflet map:', err)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
  window.removeEventListener('resize', handleResize)
  markersList.forEach((m) => m.marker.remove())
  markersList = []
  if (mapInstance.value) {
    mapInstance.value.remove()
    mapInstance.value = null
  }
})
</script>

<style>
/* Pure OpenStreetMap Deep Dark Filter (High-contrast building outlines & roads) */
.map-dark-theme .leaflet-container {
  background: #050505 !important;
}

.map-dark-theme .leaflet-tile-pane {
  filter: invert(100%) hue-rotate(180deg) grayscale(100%) brightness(150%) contrast(135%);
}

/* Leaflet Custom Marker & Glow */
.leaflet-custom-marker-wrapper {
  background: transparent !important;
  border: none !important;
}

.marker-point {
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.marker-pulse {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.marker-core {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  border: 2px solid #ffffff;
  z-index: 2;
  transition: transform 0.2s ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.marker-point:hover .marker-core {
  transform: scale(1.35);
}

/* Color schemes */
.marker-brand .marker-pulse {
  background-color: rgba(199, 0, 10, 0.4);
}
.marker-brand .marker-core {
  background-color: #c7000a;
}

.marker-rainbow .marker-pulse {
  background-color: rgba(168, 85, 247, 0.4);
}
.marker-rainbow .marker-core {
  background: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6);
}

.marker-cyan .marker-pulse {
  background-color: rgba(6, 182, 212, 0.4);
}
.marker-cyan .marker-core {
  background-color: #06b6d4;
}

.marker-label {
  position: absolute;
  top: -22px;
  white-space: nowrap;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  background-color: rgba(5, 5, 5, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1px 6px;
  border-radius: 4px;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

/* Popup Custom Styling */
.technotut-leaflet-popup .leaflet-popup-content-wrapper {
  background: #080808 !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 6px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6) !important;
  padding: 4px !important;
}

.technotut-leaflet-popup .leaflet-popup-tip {
  background: #080808 !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-top-color: transparent !important;
  border-left-color: transparent !important;
}

.technotut-popup-content {
  padding: 8px 10px;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  max-width: 240px;
}

.popup-badge {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #c7000a;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.popup-title {
  font-weight: 300;
  font-size: 13px;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.popup-desc {
  font-size: 11px;
  font-weight: 300;
  color: #9ca3af;
  line-height: 1.4;
  margin: 0;
}

/* Leaflet attribution styling */
.leaflet-container .leaflet-control-attribution {
  background: rgba(5, 5, 5, 0.8) !important;
  color: #888 !important;
  font-size: 10px !important;
}
.leaflet-container .leaflet-control-attribution a {
  color: #aaa !important;
}
</style>
