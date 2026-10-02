<template>
  <section
    id="concept"
    ref="sectionRef"
    class="relative min-h-screen py-20 sm:py-32 landscape:py-8 sm:landscape:py-12 px-4 sm:px-8 bg-dark flex items-center justify-center overflow-hidden scroll-mt-0"
    @mouseleave="onMouseLeave"
    @focusout="onFocusOut"
    @click="handleSectionClick"
  >
    <!-- Ambient Background Image Overlay (Crossfade on hover) -->
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        v-for="item in activities"
        :key="item.title"
        class="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
        :style="{
          backgroundImage: `url(${item.image})`,
          opacity: activeItem?.title === item.title ? 0.20 : 0,
          transform: activeItem?.title === item.title ? 'scale(1.03)' : 'scale(1.0)',
          filter: 'grayscale(100%) contrast(110%) brightness(55%)',
        }"
      />
      <!-- Vignette / dark overlay gradient for readability -->
      <div
        class="vignette-overlay absolute inset-0 transition-opacity duration-500"
        :class="activeItem ? 'opacity-90' : 'opacity-0'"
      />
    </div>

    <div
      ref="containerRef"
      class="concept-container relative w-full aspect-square flex items-center justify-center z-10"
    >
      <!-- Interactive Mesh & Flying Orbs Canvas -->
      <canvas
        ref="canvasRef"
        class="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000 ease-out"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
      />

      <!-- Center: CONCEPT (Centered in container, text left-aligned) -->
      <div
        class="relative z-10 text-left px-4 sm:px-6 pointer-events-auto select-none max-w-xs sm:max-w-sm 2xl:max-w-md [@media(min-width:2560px)]:max-w-xl transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="secret-entry absolute -top-10 left-4 font-quicksand text-sm tracking-widest text-gray-300 sm:left-6" :style="{ opacity: secretStrength }" :aria-hidden="secretStrength === 0">
          <NuxtLink v-if="secretReady" to="/independent" class="inline-flex min-h-11 items-center gap-3 text-white underline decoration-white/40 underline-offset-4 focus-visible:outline focus-visible:outline-offset-4" @click.stop>
            <span>2/7</span><span>INDEPENDENCE DAY →</span>
          </NuxtLink>
          <span v-else class="inline-flex min-h-11 items-center">2/7</span>
        </div>
        <button type="button" class="concept-trigger font-quicksand text-[11px] sm:text-xs 2xl:text-sm [@media(min-width:2560px)]:text-base tracking-[0.25em] text-gray-400 uppercase mb-2 sm:mb-3 2xl:mb-4" @click.stop="chargeIndependence">
          CONCEPT
        </button>
        <h2 class="font-quicksand font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl [@media(min-width:2560px)]:text-8xl leading-[1.05] sm:leading-none tracking-tight text-white whitespace-nowrap">
          <button type="button" class="mirror-trigger" @click.stop="tapMirror('music')">Music,</button><br >
          <button type="button" class="mirror-trigger" @click.stop="tapMirror('technology')">Technology,</button><br >
          In Sync.
        </h2>
        <Transition name="mirror-reveal">
        <div v-if="mirrorUnlocked" class="absolute inset-0 z-30 flex items-center justify-center bg-dark/95 font-quicksand text-lg tracking-widest text-white sm:text-2xl">
          <NuxtLink to="/audio-heihachiro" class="inline-flex min-h-11 items-center border-b border-white/40 py-3 transition-colors hover:border-white focus-visible:outline focus-visible:outline-offset-4" @click.stop>MIRROR?</NuxtLink>
        </div>
        </Transition>
        <div class="mt-4 text-center sm:mt-8 2xl:mt-10 [@media(min-width:2560px)]:mt-12">
          <NuxtLink to="/activity" class="common-btn text-xs sm:text-sm 2xl:text-base py-1.5 px-5 sm:py-2 sm:px-6 2xl:py-3 2xl:px-8 [@media(min-width:2560px)]:py-4 [@media(min-width:2560px)]:px-10">
            <span>EXPLORE ALL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Surrounding Activities placed circularly with floating gentle drift -->
      <a
        v-for="(item, idx) in activities"
        :key="item.title"
        :href="`/activity#${item.id}`"
        :aria-label="`${item.title} の活動紹介を見る`"
        class="orbit-item group z-20 cursor-pointer"
        :class="[
          isVisible ? 'orbit-item--visible' : 'orbit-item--hidden',
          activeItem?.id === item.id ? 'orbit-item--active' : ''
        ]"
        :style="{
          '--angle': `${item.slot * orbitStep - 90 - orbitStep / 2}deg`,
          '--float-delay': `${item.delay}s`,
          '--float-duration': `${item.duration}s`,
          '--enter-delay': `${400 + idx * 120}ms`,
        }"
        @mouseenter="onMouseEnter(item)"
        @mouseleave="onMouseLeave"
        @focus="onFocus(item)"
        @click.prevent.stop="handleItemClick(item)"
      >
        <!-- Floating container (Paused on hover or active) -->
        <div class="floating-wrapper flex flex-col items-center">
          <!-- Pure minimal title with hover/active glow and expanding underline -->
          <div class="relative py-1 flex flex-col items-center">
            <span
              class="font-quicksand text-base sm:text-2xl md:text-3xl 2xl:text-4xl [@media(min-width:2560px)]:text-5xl tracking-widest text-white/85 group-hover:text-white group-hover:font-normal transition-all duration-200 select-none whitespace-nowrap group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.9)]"
              :class="{ 'text-white font-normal scale-105 drop-shadow-[0_0_24px_rgba(255,255,255,0.9)]': activeItem?.id === item.id }"
            >
              {{ item.title }}
            </span>
            <!-- Expanding elegant underline on hover or active -->
            <span
              class="block w-0 group-hover:w-full h-[1.5px] 2xl:h-[2px] bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 mt-1"
              :class="{ '!w-full !opacity-100': activeItem?.id === item.id }"
            />
          </div>
        </div>
      </a>

    </div>

    <!-- Detail text area: Bottom card in portrait, side text in landscape/desktop -->
    <div
      class="activity-detail-card absolute z-30 transition-all duration-300 pointer-events-none"
      :inert="!activeItem"
      :class="[
        activeItem
          ? 'opacity-100 translate-y-0 landscape:translate-y-0 landscape:translate-x-0'
          : 'opacity-0 translate-y-4 landscape:translate-y-0 ' + (displayedItem?.side === 'left' ? 'landscape:-translate-x-4' : 'landscape:translate-x-4'),
        'bottom-6 inset-x-6 sm:max-w-lg sm:mx-auto',
        'landscape:bottom-24 landscape:top-auto landscape:translate-y-0 landscape:inset-x-auto landscape:mx-0 landscape:max-w-[240px] md:landscape:max-w-[260px] xl:landscape:top-1/2 xl:landscape:bottom-auto xl:landscape:-translate-y-1/2 xl:landscape:max-w-sm 2xl:landscape:max-w-md [@media(min-width:2560px)]:landscape:max-w-lg',
        displayedItem?.side === 'left'
          ? 'landscape:left-6 md:landscape:left-10 lg:landscape:left-12 2xl:landscape:left-16 [@media(min-width:2560px)]:landscape:left-24 text-left'
          : 'landscape:right-6 md:landscape:right-10 lg:landscape:right-12 2xl:landscape:right-16 [@media(min-width:2560px)]:landscape:right-24 text-left landscape:text-right'
      ]"
      @mouseenter="onCardMouseEnter"
      @mouseleave="onCardMouseLeave"
    >
      <div
        v-if="displayedItem"
        class="p-4 sm:p-5 2xl:p-6 landscape:p-0 rounded-2xl landscape:rounded-none bg-dark/95 landscape:bg-transparent backdrop-blur-md landscape:backdrop-blur-none border border-white/15 landscape:border-0 shadow-2xl landscape:shadow-none space-y-2 2xl:space-y-3 pointer-events-auto"
      >
        <div class="flex items-center justify-between">
          <p class="font-quicksand text-xs sm:text-sm 2xl:text-base [@media(min-width:2560px)]:text-lg tracking-[0.2em] text-white/60 uppercase">
            ACTIVITY // {{ displayedItem.title }}
          </p>
          <button
            type="button"
            class="landscape:hidden w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70 hover:text-white cursor-pointer"
            aria-label="閉じる"
            @click.stop="activeItem = null"
          >
            ✕
          </button>
        </div>
        <p class="font-noto text-xs sm:text-sm 2xl:text-base [@media(min-width:2560px)]:text-lg text-white/95 font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          {{ displayedItem.description }}
        </p>
        <div class="pt-1 2xl:pt-2">
          <NuxtLink
            :to="`/activity#${displayedItem.id}`"
            class="inline-flex items-center min-h-11 gap-2 text-xs sm:text-sm 2xl:text-base [@media(min-width:2560px)]:text-lg text-brand hover:text-white landscape:text-white font-medium transition-colors"
          >
            <span class="landscape:underline underline-offset-4">活動を詳しく見る</span><span aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isVisible = ref(false)
let sectionObserver: IntersectionObserver | null = null

interface Activity {
  id: string
  slot: number
  title: string
  side: 'left' | 'right'
  image: string
  delay: number
  duration: number
  description: string
}

const activeItem = ref<Activity | null>(null)
const displayedItem = ref<Activity | null>(null)
watch(activeItem, (item) => {
  if (item) displayedItem.value = item
})
const router = useRouter()
const orbitStep = 360 / 7
const secretStrength = ref(0)
const secretReady = ref(false)
let conceptTaps = 0
let secretFadeTimer: ReturnType<typeof setTimeout> | null = null
let secretResetTimer: ReturnType<typeof setTimeout> | null = null
const mirrorLast = ref<'music' | 'technology' | null>(null)
const mirrorUnlocked = ref(false)
let mirrorTaps = 0
let mirrorTimer: ReturnType<typeof setTimeout> | null = null

const clearSecretTimers = () => {
  if (secretFadeTimer) clearTimeout(secretFadeTimer)
  if (secretResetTimer) clearTimeout(secretResetTimer)
}

const chargeIndependence = () => {
  clearSecretTimers()
  conceptTaps = Math.min(conceptTaps + 1, 7)
  secretReady.value = conceptTaps === 7
  secretStrength.value = conceptTaps < 2 ? 0 : Math.min(1, 0.25 + (conceptTaps - 2) * 0.15)
  secretFadeTimer = setTimeout(() => {
    secretStrength.value = 0
    secretReady.value = false
    secretResetTimer = setTimeout(() => { conceptTaps = 0 }, 1800)
  }, 3000)
}

const resetMirror = () => {
  mirrorTaps = 0
  mirrorLast.value = null
}

const tapMirror = (word: 'music' | 'technology') => {
  if (mirrorUnlocked.value) return
  if (mirrorTimer) clearTimeout(mirrorTimer)
  if (word === mirrorLast.value || (!mirrorLast.value && word !== 'music')) {
    resetMirror()
  }
  if (word === 'music' || mirrorLast.value === 'music') {
    mirrorTaps++
    mirrorLast.value = word
  }
  if (mirrorTaps === 6) {
    mirrorUnlocked.value = true
    mirrorTimer = setTimeout(() => {
      mirrorUnlocked.value = false
      resetMirror()
    }, 5000)
    return
  }
  mirrorTimer = setTimeout(resetMirror, 3000)
}

const isTouchDevice = () => {
  if (typeof window === 'undefined') return false
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.innerWidth < 768 ||
    !window.matchMedia('(hover: hover)').matches
  )
}

let leaveTimer: ReturnType<typeof setTimeout> | null = null

const clearLeaveTimer = () => {
  if (leaveTimer) {
    clearTimeout(leaveTimer)
    leaveTimer = null
  }
}

const onMouseEnter = (item: Activity) => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    clearLeaveTimer()
    activeItem.value = item
  }
}

const onFocus = (item: Activity) => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    clearLeaveTimer()
    activeItem.value = item
  }
}

const onMouseLeave = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    clearLeaveTimer()
    leaveTimer = setTimeout(() => {
      activeItem.value = null
    }, 250)
  }
}

const onCardMouseEnter = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    clearLeaveTimer()
  }
}

const onCardMouseLeave = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    clearLeaveTimer()
    leaveTimer = setTimeout(() => {
      activeItem.value = null
    }, 200)
  }
}

const onFocusOut = (event: FocusEvent) => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    if (!(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node | null)) {
      clearLeaveTimer()
      activeItem.value = null
    }
  }
}

const onWindowScroll = () => {
  if (activeItem.value) {
    clearLeaveTimer()
    activeItem.value = null
  }
}

const handleItemClick = (item: Activity) => {
  if (isTouchDevice()) {
    if (activeItem.value?.id !== item.id) {
      activeItem.value = item
      return
    }
  }
  router.push(`/activity#${item.id}`)
}

const handleSectionClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null
  if (target && !target.closest('.orbit-item') && !target.closest('.activity-detail-card')) {
    activeItem.value = null
  }
}

const activities: Activity[] = [
  {
    id: 'dj',
    slot: 0,
    title: 'DJ',
    side: 'left',
    image: '/images/concept/dj.jpg',
    delay: 0,
    duration: 6.2,
    description:
      '主催イベント「The Utopia Tone」や技科大祭でのプレイを中心に活動。学外クラブでの出演や主催イベントも展開しています。',
  },
  {
    id: 'vj-lj',
    slot: 1,
    title: 'VJ & LJ',
    side: 'right',
    image: '/images/concept/vj.jpg',
    delay: -1.8,
    duration: 7.1,
    description:
      '映像演出 (VJ) と照明演出 (LJ) を担当。機材開発を行い、空間を最大限に盛り上げる光と映像の演出を手掛けます。',
  },
  {
    id: 'media',
    slot: 5,
    title: 'MEDIA',
    side: 'left',
    image: '/images/concept/media.jpg',
    delay: -3.4,
    duration: 6.8,
    description:
      'フライヤー制作、広報SNS運用、Webサイト更新、映像制作やイラストレーションなど視覚と感覚に訴えるコンテンツを創出します。',
  },
  {
    id: 'dtm',
    slot: 3,
    title: 'DTM',
    side: 'right',
    image: '/images/concept/dtm.png',
    delay: -0.9,
    duration: 7.5,
    description:
      '各自の好む音楽を求めて楽曲制作。春・秋のM3でのオリジナル作品頒布やBandcampでの音源リリースを行っています。',
  },
  {
    id: 'tech-diy',
    slot: 2,
    title: 'Tech & DIY',
    side: 'right',
    image: '/images/concept/tech.jpg',
    delay: -2.6,
    duration: 6.4,
    description:
      'サーバー保守管理、イベント会場のリアルタイム映像配信、照明プログラミングなど、音楽とライブを支える技術開発を行います。',
  },
  {
    id: 'ramen',
    slot: 4,
    title: 'ら',
    side: 'left',
    image: '/images/concept/ra.jpg',
    delay: -4.2,
    duration: 7.8,
    description:
      '旅行する価値のある卓越したラーメンと唐揚げを求めて食べ歩く部内文化。部員厳選のおすすめ店舗はラーメンマップで公開中です。',
  },
  {
    id: 'event',
    slot: 6,
    title: 'EVENT',
    side: 'left',
    image: '/images/index/event/camp.jpg',
    delay: -1.2,
    duration: 7.3,
    description:
      '部室での放課後イベントから、コモンズでの大規模イベント、技科大祭やクラブでの開催まで。企画・運営を通じて、誰もが楽しめる遊び場とステージを自分たちの手で作ります。',
  },
]

// Canvas animation logic
let animationFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null
let mouseX = 0
let mouseY = 0
let isMouseActive = false
let onCanvasMouseMove: ((e: MouseEvent) => void) | null = null
let onCanvasMouseLeave: (() => void) | null = null

interface Orb {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  hue: number
  hueSpeed: number
  targetRadius: number
  trail: { x: number; y: number; hue: number }[]
}

onMounted(() => {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let centerX = 0
  let centerY = 0
  let orbitRadius = 0

  const updateSize = () => {
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)
    centerX = width / 2
    centerY = height / 2

    // Read actual evaluated radius from CSS variable for 100% exact alignment on all resolutions
    const computedStyle = window.getComputedStyle(container)
    const cssRadius = parseFloat(computedStyle.getPropertyValue('--orbit-radius'))
    if (!isNaN(cssRadius) && cssRadius > 0) {
      orbitRadius = cssRadius
    } else {
      const vw = window.innerWidth
      orbitRadius = vw < 640 ? Math.max(130, Math.min(vw * 0.38, 160)) : Math.max(160, Math.min(vw * 0.26, 320))
    }
  }

  updateSize()

  resizeObserver = new ResizeObserver(() => {
    updateSize()
  })
  resizeObserver.observe(container)

  // Nodes positions on the orbit
  const getNodePos = (index: number) => {
    const angle = (index * orbitStep - 90 - orbitStep / 2) * (Math.PI / 180)
    return {
      x: centerX + Math.cos(angle) * orbitRadius,
      y: centerY + Math.sin(angle) * orbitRadius,
    }
  }

  // Create faint orbiting particles revolving around center
  const orbCount = 20
  const orbs: Orb[] = []
  const scale = Math.max(1, Math.min(orbitRadius / 280, 2.2))

  for (let i = 0; i < orbCount; i++) {
    // Distributed radial distance from center
    const rFactor = 0.65 + (i / orbCount) * 0.7 + (Math.random() - 0.5) * 0.15
    const r = orbitRadius * rFactor
    const theta = Math.random() * Math.PI * 2

    // Orbital speed in tangential direction for stable circular/elliptical orbit: v = sqrt(G/r)
    // Central gravity constant
    const G_center = 120 * scale
    const orbitalSpeed = Math.sqrt(G_center / (r * 0.05)) * 0.35 * (0.85 + Math.random() * 0.3)

    // Tangential velocity (clockwise)
    const vx = -Math.sin(theta) * orbitalSpeed
    const vy = Math.cos(theta) * orbitalSpeed

    orbs.push({
      x: centerX + Math.cos(theta) * r,
      y: centerY + Math.sin(theta) * r,
      vx,
      vy,
      targetRadius: r,
      size: (1.2 + Math.random() * 1.5) * scale, // Delicate stardust particles scaled for 2K/4K
      alpha: 0.25 + Math.random() * 0.35, // Clear, vibrant opacity
      hue: (i / orbCount) * 360, // Rainbow spectrum distributed
      hueSpeed: 0.4 + Math.random() * 0.4, // Continuous gentle hue shift
      trail: [],
    })
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    // Nodes positions for subtle gravity perturbations
    const nodes = Array.from({ length: 7 }, (_, i) => getNodePos(i))

    // Dynamic scale factor for resolution adaptation
    const currentScale = Math.max(1, Math.min(orbitRadius / 280, 2.2))

    // Central gravity constant
    const G_center = 85 * currentScale

    for (const orb of orbs) {
      // 1. Central Gravity (Pulling toward centerX, centerY)
      const cdx = centerX - orb.x
      const cdy = centerY - orb.y
      const cdist = Math.hypot(cdx, cdy) || 1

      // Central gravitational force: F = G / r^1.2 for graceful perpetual orbit
      const centralAccel = G_center / Math.pow(cdist, 1.25)
      orb.vx += (cdx / cdist) * centralAccel * 0.4
      orb.vy += (cdy / cdist) * centralAccel * 0.4

      // Gentle restorative force toward target orbital radius band
      const radiusDiff = cdist - orb.targetRadius
      orb.vx += (cdx / cdist) * (radiusDiff * 0.0006)
      orb.vy += (cdy / cdist) * (radiusDiff * 0.0006)

      // 2. Subtle gravity perturbation from activity nodes as orbs pass nearby
      const nodeDist = Math.max(90, orbitRadius * 0.28)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const ndx = n.x - orb.x
        const ndy = n.y - orb.y
        const ndist = Math.hypot(ndx, ndy)
        if (ndist < nodeDist && ndist > 10) {
          const nodePull = (0.035 * currentScale) / (ndist * 0.5)
          orb.vx += (ndx / ndist) * nodePull
          orb.vy += (ndy / ndist) * nodePull
        }
      }

      // 2.5. Interactive mouse interaction (Desktop only, excluded on mobile/tablet)
      if (isMouseActive && !isTouchDevice()) {
        const mdx = mouseX - orb.x
        const mdy = mouseY - orb.y
        const mdist = Math.hypot(mdx, mdy)
        const interactionRadius = Math.max(180, orbitRadius * 0.45)

        if (mdist < interactionRadius && mdist > 8) {
          // Combination of gentle gravitational pull toward cursor + subtle swirling deflection
          const forceFactor = (1 - mdist / interactionRadius) * 0.35 * currentScale
          // Subtle attraction towards cursor
          orb.vx += (mdx / mdist) * forceFactor * 0.5
          orb.vy += (mdy / mdist) * forceFactor * 0.5
          // Subtle swirl (perpendicular vector)
          orb.vx += (-mdy / mdist) * forceFactor * 0.3
          orb.vy += (mdx / mdist) * forceFactor * 0.3
        }
      }

      // 3. Velocity damping proportional to scale
      const maxSpeed = 2.4 * Math.sqrt(currentScale)
      const minSpeed = 0.8 * Math.sqrt(currentScale)
      const currentSpeed = Math.hypot(orb.vx, orb.vy)
      if (currentSpeed > maxSpeed) {
        orb.vx = (orb.vx / currentSpeed) * maxSpeed
        orb.vy = (orb.vy / currentSpeed) * maxSpeed
      } else if (currentSpeed < minSpeed) {
        orb.vx = (orb.vx / currentSpeed) * minSpeed
        orb.vy = (orb.vy / currentSpeed) * minSpeed
      }

      // Update position & hue
      orb.x += orb.vx
      orb.y += orb.vy
      orb.hue = (orb.hue + orb.hueSpeed) % 360

      // Record trail with current hue
      orb.trail.push({ x: orb.x, y: orb.y, hue: orb.hue })
      if (orb.trail.length > 16) {
        orb.trail.shift()
      }

      // 4. Center dead-zone fadeout / respawn:
      // If particle drifts too close to center (cdist < orbitRadius * 0.45) or slows down too much, fade out and respawn
      const minSafeDistance = Math.max(120, orbitRadius * 0.5)
      let displayAlpha = orb.alpha
      if (cdist < minSafeDistance) {
        displayAlpha = orb.alpha * Math.max(0, (cdist - 60) / (minSafeDistance - 60))
        if (cdist < 60) {
          // Respawn to outer stable orbit
          const newTheta = Math.random() * Math.PI * 2
          const newR = orbitRadius * (0.8 + Math.random() * 0.4)
          orb.x = centerX + Math.cos(newTheta) * newR
          orb.y = centerY + Math.sin(newTheta) * newR
          const orbitalSpeed = Math.sqrt(G_center / (newR * 0.05)) * 0.35 * (0.85 + Math.random() * 0.3)
          orb.vx = -Math.sin(newTheta) * orbitalSpeed
          orb.vy = Math.cos(newTheta) * orbitalSpeed
          orb.targetRadius = newR
          orb.trail = []
          continue
        }
      }

      if (displayAlpha <= 0.01) {
        continue
      }

      // Draw rainbow glowing trail
      if (orb.trail.length > 1) {
        ctx.save()
        for (let j = 0; j < orb.trail.length - 1; j++) {
          const tAlpha = (j / orb.trail.length) * (displayAlpha * 0.6)
          ctx.beginPath()
          ctx.moveTo(orb.trail[j].x, orb.trail[j].y)
          ctx.lineTo(orb.trail[j + 1].x, orb.trail[j + 1].y)
          ctx.strokeStyle = `hsla(${orb.trail[j].hue}, 85%, 65%, ${tAlpha})`
          ctx.lineWidth = orb.size * 0.8
          ctx.stroke()
        }
        ctx.restore()
      }

      // Draw rainbow head orb with neon glow
      ctx.save()
      ctx.shadowBlur = 8 * currentScale
      ctx.shadowColor = `hsla(${orb.hue}, 90%, 60%, ${displayAlpha * 0.9})`
      ctx.beginPath()
      ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${orb.hue}, 85%, 70%, ${displayAlpha})`
      ctx.fill()
      ctx.restore()
    }

    animationFrameId = requestAnimationFrame(draw)
  }

  draw()

  // Track mouse position over the section/container (Desktop only, excluded on mobile/tablet)
  if (!isTouchDevice()) {
    onCanvasMouseMove = (e: MouseEvent) => {
      if (!isTouchDevice()) {
        const rect = container.getBoundingClientRect()
        mouseX = e.clientX - rect.left
        mouseY = e.clientY - rect.top
        isMouseActive = true
      }
    }

    onCanvasMouseLeave = () => {
      isMouseActive = false
    }

    if (sectionRef.value) {
      sectionRef.value.addEventListener('mousemove', onCanvasMouseMove, { passive: true })
      sectionRef.value.addEventListener('mouseleave', onCanvasMouseLeave, { passive: true })
    }
  }

  if (sectionRef.value) {
    sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          sectionObserver?.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    sectionObserver.observe(sectionRef.value)
  }

  window.addEventListener('scroll', onWindowScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onWindowScroll)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  if (sectionObserver) {
    sectionObserver.disconnect()
  }
  if (sectionRef.value && onCanvasMouseMove && onCanvasMouseLeave) {
    sectionRef.value.removeEventListener('mousemove', onCanvasMouseMove)
    sectionRef.value.removeEventListener('mouseleave', onCanvasMouseLeave)
  }
  clearLeaveTimer()
  clearSecretTimers()
  if (mirrorTimer) clearTimeout(mirrorTimer)
})
</script>

<style scoped>
.mirror-reveal-enter-active,
.mirror-reveal-leave-active {
  transition: opacity 600ms ease;
}

.mirror-reveal-enter-from,
.mirror-reveal-leave-to {
  opacity: 0;
}

.mirror-reveal-leave-active {
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .mirror-reveal-enter-active,
  .mirror-reveal-leave-active {
    transition: none;
  }
}

.concept-trigger,
.mirror-trigger {
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.concept-trigger {
  min-height: 44px;
  margin-top: -12px;
  margin-bottom: -4px;
}

.mirror-trigger {
  min-height: 44px;
  transition: color 200ms ease, text-shadow 200ms ease;
}

.concept-trigger:focus-visible,
.mirror-trigger:focus-visible,
.secret-entry a:focus-visible {
  outline: 1px solid white;
  outline-offset: 4px;
}

.secret-entry {
  transition: opacity 1.8s ease;
}

.concept-container .common-btn {
  padding: 0.65rem 1.25rem;
  min-height: 44px;
}

@media (prefers-reduced-motion: reduce) {
  .secret-entry,
  .mirror-trigger {
    transition: none;
  }
}

.vignette-overlay {
  background: radial-gradient(circle at center, rgba(5, 5, 5, 0.45) 0%, rgba(5, 5, 5, 0.8) 55%, #050505 100%);
}

.concept-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 64rem;
  max-height: 800px;
}

@media (orientation: landscape) {
  .concept-container {
    max-height: min(800px, calc(100vh - 100px));
  }
}

@media (min-width: 1536px) {
  .concept-container {
    max-width: 74rem;
    max-height: min(920px, calc(100vh - 120px));
  }
}

@media (min-width: 2560px) {
  .concept-container {
    max-width: 90rem;
    max-height: min(1200px, calc(100vh - 160px));
  }
}

.aspect-square {
  --orbit-radius: clamp(140px, 38vw, 160px);
}

@media (min-width: 640px) {
  .aspect-square {
    --orbit-radius: clamp(160px, min(26vw, 34vh), 300px);
  }
}

@media (min-width: 1024px) {
  .aspect-square {
    --orbit-radius: clamp(220px, min(22vw, 34vh), 340px);
  }
}

@media (min-width: 1536px) {
  .aspect-square {
    --orbit-radius: clamp(300px, min(19vw, 32vh), 400px);
  }
}

@media (min-width: 2560px) {
  .aspect-square {
    --orbit-radius: clamp(380px, min(17vw, 30vh), 520px);
  }
}

.orbit-item {
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% + cos(var(--angle)) * var(--orbit-radius));
  top: calc(50% + sin(var(--angle)) * var(--orbit-radius));
  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) var(--enter-delay, 0ms),
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) var(--enter-delay, 0ms);
}

.orbit-item--hidden {
  opacity: 0;
  /* 中心方向（逆方向）へオフセットさせ、少し縮小させる */
  transform: translate(-50%, -50%)
    translate(calc(cos(var(--angle)) * -50px), calc(sin(var(--angle)) * -50px))
    scale(0.65);
  pointer-events: none;
}

.orbit-item--visible {
  opacity: 1;
  transform: translate(-50%, -50%) translate(0, 0) scale(1);
  pointer-events: auto;
}

.floating-wrapper {
  animation: float-drift var(--float-duration, 6s) ease-in-out infinite alternate;
  animation-delay: var(--float-delay, 0s);
}

.orbit-item:hover,
.orbit-item--active {
  z-index: 30;
}

.orbit-item:hover .floating-wrapper,
.orbit-item:focus-visible .floating-wrapper,
.orbit-item--active .floating-wrapper {
  animation-play-state: paused;
}

@keyframes float-drift {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(4px, -5px);
  }
  100% {
    transform: translate(-4px, 4px);
  }
}
</style>
