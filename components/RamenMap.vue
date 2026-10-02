<template>
  <div class="relative w-full h-full flex flex-col bg-dark overflow-hidden font-noto">
    <!-- Map Control / Filter Header Bar -->
    <div class="z-20 bg-dark/90 backdrop-blur px-0 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
      <!-- Search -->
      <div class="flex items-center gap-3 w-full">
        <div class="relative flex-grow w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="店名やキーワードで検索..."
            class="w-full bg-black/60 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand"
          >
          <button
            v-if="searchQuery"
            type="button"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            @click="searchQuery = ''"
          >
            ✕
          </button>
        </div>

      </div>
    </div>

    <!-- Main Map Container -->
    <div class="relative flex-grow w-full h-[550px] sm:h-[650px] map-dark-theme">
      <div ref="mapContainerRef" class="w-full h-full" />

      <!-- Category filters overlay -->
      <div class="absolute top-3 left-3 z-[1000] flex flex-col items-start gap-1.5 max-h-[calc(100%-1.5rem)] overflow-y-auto scrollbar-none pointer-events-none">
        <button
          type="button"
          class="px-3 py-1.5 rounded-full whitespace-nowrap transition-colors border shadow-lg pointer-events-auto"
          :class="selectedCategory === 'ALL'
            ? 'bg-white text-dark font-medium border-white'
            : 'text-gray-200 border-white/20 hover:border-white/40 bg-dark/90'"
          @click="selectedCategory = 'ALL'"
        >
          すべて ({{ allSpots.length }})
        </button>
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="px-3 py-1.5 rounded-full whitespace-nowrap transition-colors border flex items-center gap-1.5 shadow-lg pointer-events-auto"
          :class="selectedCategory === cat
            ? 'bg-white text-dark font-medium border-white'
            : 'text-gray-200 border-white/20 hover:border-white/40 bg-dark/90'"
          @click="selectedCategory = cat"
        >
          <span
            class="w-2 h-2 rounded-full inline-block"
            :style="{ backgroundColor: getCategoryColor(cat) }"
          />
          {{ cat }} ({{ getCategoryCount(cat) }})
        </button>
      </div>

      <!-- Center on Campus quick action -->
      <div class="absolute bottom-4 left-4 z-20 flex flex-col gap-2">
        <button
          type="button"
          class="px-3 py-1.5 rounded bg-dark/90 hover:bg-dark border border-white/20 hover:border-white/50 text-white text-xs backdrop-blur shadow-lg flex items-center gap-2"
          @click="resetView"
        >
          <svg class="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          技科大周辺を表示
        </button>
      </div>

      <!-- Loading overlay -->
      <div
        v-if="isLoading"
        class="absolute inset-0 z-30 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
      >
        <div class="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
        <p class="font-quicksand text-xs tracking-widest text-gray-300 uppercase">
          Fetching Latest MyMap Data...
        </p>
      </div>

      <!-- Active Spot Detail Panel (right side overlay) -->
      <div
        v-if="activeSpot"
        class="hidden sm:block absolute top-3 right-3 bottom-3 w-[300px] max-w-[80%] z-[1000] bg-dark-panel/95 backdrop-blur border border-white/10 px-5 py-4 overflow-y-auto"
      >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-grow">
          <div class="flex items-center gap-2 mb-1">
            <span
              class="px-2 py-0.5 rounded text-[10px] font-medium text-white"
              :style="{ backgroundColor: getCategoryColor(activeSpot.category) }"
            >
              {{ activeSpot.category }}
            </span>
            <h3 class="text-base font-normal text-white">
              {{ activeSpot.title }}
            </h3>
          </div>
          <p v-if="activeSpot.description" class="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">
            {{ activeSpot.description }}
          </p>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeSpot.title)}&query_place_id=${activeSpot.lat},${activeSpot.lng}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 mt-3 text-[11px] text-brand hover:underline"
          >
            Googleマップで開く
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div class="flex flex-col items-end gap-2 shrink-0">
          <button
            type="button"
            class="text-gray-400 hover:text-white p-1"
            title="閉じる"
            @click="activeSpot = null"
          >
            ✕
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, onMounted, onUnmounted, watch } from 'vue'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import fallbackData from '~/data/ramen-spots-fallback.json'

interface Spot {
  id: string
  title: string
  category: string
  description: string
  image: string | null
  lat: number
  lng: number
  address?: string
}

const KML_URL = 'https://www.google.com/maps/d/kml?mid=1QKx8xScT2lRoIpDCIc3lvho7rBJ0eFM&forcekml=1'

const mapContainerRef = ref<HTMLDivElement | null>(null)
const mapInstance = shallowRef<LeafletMap | null>(null)
let markersList: { id: string; marker: LeafletMarker }[] = []
let leafletNamespace: typeof import('leaflet') | null = null

const isLoading = ref(false)
const allSpots = ref<Spot[]>(fallbackData.spots)

// Address lookup from the enriched fallback data, keyed by rounded coordinates.
const addressByCoord = new Map<string, string>()
for (const s of fallbackData.spots as Spot[]) {
  if (s.address) addressByCoord.set(`${s.lat.toFixed(4)},${s.lng.toFixed(4)}`, s.address)
}
const categories = ref<string[]>(fallbackData.categories)
const selectedCategory = ref<string>('ALL')
const searchQuery = ref<string>('')
const activeSpot = ref<Spot | null>(null)

// Category color mappings
const CATEGORY_COLORS: Record<string, string> = {
  'ラーメン・中華料理': '#ef4444', // Red
  'カフェ': '#eab308', // Amber / Yellow
  '和食・定食': '#3b82f6', // Blue
  'その他レストラン': '#10b981', // Green
  '居酒屋・bar': '#a855f7', // Purple
  '閉業': '#6b7280', // Gray
}

const getCategoryColor = (cat: string) => {
  return CATEGORY_COLORS[cat] || '#f97316'
}

const getCategoryCount = (cat: string) => {
  return allSpots.value.filter(s => s.category === cat).length
}

const filteredSpots = computed(() => {
  return allSpots.value.filter(spot => {
    if (selectedCategory.value !== 'ALL' && spot.category !== selectedCategory.value) {
      return false
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.trim().toLowerCase()
      const matchTitle = spot.title.toLowerCase().includes(q)
      const matchDesc = spot.description.toLowerCase().includes(q)
      const matchAddr = spot.address ? spot.address.toLowerCase().includes(q) : false
      return matchTitle || matchDesc || matchAddr
    }
    return true
  })
})

const parseKmlString = (xmlText: string) => {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
  const folders = Array.from(xmlDoc.getElementsByTagName('Folder'))

  const parsedCategories: string[] = []
  const parsedSpots: Spot[] = []

  folders.forEach((folder, fIndex) => {
    const nameEl = folder.getElementsByTagName('name')[0]
    const categoryName = nameEl?.textContent?.trim() || `フォルダ${fIndex + 1}`
    parsedCategories.push(categoryName)

    const placemarks = Array.from(folder.getElementsByTagName('Placemark'))
    placemarks.forEach((pm, pIndex) => {
      const title = pm.getElementsByTagName('name')[0]?.textContent?.trim() || ''
      const descEl = pm.getElementsByTagName('description')[0]
      const rawDesc = descEl?.textContent || ''

      const coordEl = pm.getElementsByTagName('coordinates')[0]
      const coordText = coordEl?.textContent?.trim() || ''

      // Parse image if available
      let image: string | null = null
      const mediaVal = pm.getElementsByTagName('value')[0]?.textContent
      if (mediaVal && mediaVal.startsWith('http')) {
        image = mediaVal
      } else {
        const imgMatch = rawDesc.match(/<img[^>]+src="([^">]+)"/)
        if (imgMatch) image = imgMatch[1]
      }

      // Clean HTML from description
      const cleanDesc = rawDesc
        .replace(/<img[^>]*>/gi, '')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .trim()

      if (title && coordText) {
        const [lngStr, latStr] = coordText.split(',')
        const lat = parseFloat(latStr)
        const lng = parseFloat(lngStr)

        if (!isNaN(lat) && !isNaN(lng)) {
          parsedSpots.push({
            id: `spot-${fIndex}-${pIndex}`,
            title,
            category: categoryName,
            description: cleanDesc,
            image,
            lat,
            lng,
          })
        }
      }
    })
  })

  return { categories: parsedCategories, spots: parsedSpots }
}

const fetchMapData = async (force = false) => {
  if (isLoading.value) return
  isLoading.value = true
  try {
    const res = await fetch(KML_URL, { cache: force ? 'reload' : 'default' })
    if (!res.ok) throw new Error(`HTTP error ${res.status}`)
    const kmlText = await res.text()
    const parsed = parseKmlString(kmlText)
    if (parsed.spots.length > 0) {
      for (const s of parsed.spots) {
        const addr = addressByCoord.get(`${s.lat.toFixed(4)},${s.lng.toFixed(4)}`)
        if (addr) s.address = addr
      }
      allSpots.value = parsed.spots
      categories.value = parsed.categories
    }
  } catch (err) {
    console.warn('Failed to fetch dynamic KML, using fallback data:', err)
  } finally {
    isLoading.value = false
    updateMarkers()
  }
}

const updateMarkers = () => {
  if (!mapInstance.value || !leafletNamespace) return
  const L = leafletNamespace

  // Remove existing markers
  markersList.forEach(m => m.marker.remove())
  markersList = []

  // Add filtered markers
  filteredSpots.value.forEach(spot => {
    const color = getCategoryColor(spot.category)

    const customIcon = L.divIcon({
      className: 'leaflet-custom-marker-wrapper',
      html: `
        <div class="ramen-marker" role="button" tabindex="0" aria-label="${spot.title}">
          <div class="ramen-marker-dot" style="background-color: ${color}; box-shadow: 0 0 3px ${color}"></div>
        </div>
      `,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -10],
    })

    const popupHtml = `
      <div class="ramen-popup-content">
        <span class="popup-badge" style="color: ${color}">${spot.category}</span>
        <h4 class="popup-title">${spot.title}</h4>
        ${spot.description ? `<p class="popup-desc">${spot.description}</p>` : ''}
        ${spot.image ? `<img src="${spot.image}" alt="${spot.title}" class="popup-img" />` : ''}
      </div>
    `

    const marker = L.marker([spot.lat, spot.lng], { icon: customIcon })
      .bindPopup(popupHtml, {
        closeButton: false,
        className: 'technotut-leaflet-popup',
      })
      .addTo(mapInstance.value!)

    marker.on('click', () => {
      activeSpot.value = spot
    })

    markersList.push({ id: spot.id, marker })
  })
}

watch([selectedCategory, searchQuery], () => {
  updateMarkers()
})

const resetView = () => {
  if (mapInstance.value) {
    mapInstance.value.flyTo([34.7009, 137.4095], 14, { duration: 1 })
  }
}

let resizeObserver: ResizeObserver | null = null

onMounted(async () => {
  if (!mapContainerRef.value) return

  try {
    const leafletMod = await import('leaflet')
    const L =
      (window as unknown as { L?: typeof import('leaflet') }).L ||
      (leafletMod as unknown as { default?: typeof import('leaflet') }).default ||
      (leafletMod as unknown as typeof import('leaflet'))

    leafletNamespace = L
    if (!L || typeof L.map !== 'function') return

    // TUT campus coordinates as default center
    const map = L.map(mapContainerRef.value, {
      center: [34.7250, 137.4000],
      zoom: 13,
      zoomControl: true,
      attributionControl: true,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map)

    mapInstance.value = map

    if (typeof ResizeObserver !== 'undefined' && mapContainerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(mapContainerRef.value)
    }

    setTimeout(() => map.invalidateSize(), 100)

    // Initial render with fallback/loaded data
    updateMarkers()

    // Fetch fresh dynamic data from Google My Maps
    fetchMapData()
  } catch (err) {
    console.error('Failed to init ramen Leaflet map:', err)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
  markersList.forEach(m => m.marker.remove())
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

.ramen-marker {
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.ramen-marker-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  border: 1.5px solid #ffffff;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ramen-marker:hover .ramen-marker-dot {
  transform: scale(1.6);
}

.ramen-popup-content {
  padding: 6px 8px;
  font-family: 'Zen Kaku Gothic Antique', sans-serif;
  max-width: 240px;
}

.ramen-popup-content .popup-badge {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 2px;
}

.ramen-popup-content .popup-title {
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.ramen-popup-content .popup-desc {
  font-size: 11px;
  color: #9ca3af;
  line-height: 1.5;
  white-space: pre-wrap;
  margin: 0;
}

.ramen-popup-content .popup-img {
  margin-top: 8px;
  border-radius: 4px;
  width: 100%;
  max-height: 120px;
  object-fit: cover;
}

/* Popup Custom Styling (match dark theme) */
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
