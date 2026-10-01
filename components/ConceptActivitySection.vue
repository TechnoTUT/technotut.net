<template>
  <section
    ref="sectionRef"
    class="relative min-h-screen py-24 sm:py-32 px-4 sm:px-8 bg-dark flex items-center justify-center overflow-hidden"
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
        class="absolute inset-0 bg-gradient-radial from-dark/60 via-dark/85 to-dark transition-opacity duration-500"
        :class="activeItem ? 'opacity-90' : 'opacity-0'"
      />
    </div>

    <div
      ref="containerRef"
      class="activity-container relative w-full max-w-5xl aspect-square max-h-[800px] flex items-center justify-center z-10"
    >
      <!-- Interactive Mesh & Flying Orbs Canvas -->
      <canvas
        ref="canvasRef"
        class="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000 ease-out"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
      />

      <!-- Center: CONCEPT (Centered in container, text left-aligned) -->
      <div
        class="relative z-10 text-left px-4 sm:px-6 pointer-events-auto select-none max-w-xs sm:max-w-sm transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-quicksand text-xs tracking-[0.25em] text-gray-400 uppercase mb-3">
          CONCEPT
        </p>
        <h2 class="font-quicksand font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight text-white whitespace-nowrap">
          Music,<br >
          Technology,<br >
          In Sync.
        </h2>
        <div class="mt-6 sm:mt-8">
          <NuxtLink to="/activity" class="common-btn text-xs py-2 px-6">
            <span>EXPLORE ALL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Activity controls support pointer, touch and keyboard -->
      <button
        type="button"
        v-for="(item, idx) in activities"
        :key="item.title"
        class="orbit-item group z-20 cursor-pointer"
        :class="isVisible ? 'orbit-item--visible' : 'orbit-item--hidden'"
        :style="{
          '--angle': `${idx * 60 - 120}deg`,
          '--float-delay': `${item.delay}s`,
          '--float-duration': `${item.duration}s`,
          '--enter-delay': `${400 + idx * 120}ms`,
        }"
        @mouseenter="activeItem = item"
        @mouseleave="clearHover"
        @focus="activeItem = item"
        @click="activeItem = item"
        :aria-pressed="activeItem?.title === item.title"
        aria-controls="activity-description"
      >
        <!-- Floating container (Paused on hover) -->
        <div class="floating-wrapper flex flex-col items-center">
          <!-- Pure minimal title with hover glow and expanding underline -->
          <div class="relative py-1 flex flex-col items-center">
            <span
              class="font-quicksand text-xl sm:text-2xl md:text-3xl tracking-widest text-white/85 group-hover:text-white group-hover:font-normal transition-all duration-200 select-none whitespace-nowrap group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.9)]"
            >
              {{ item.title }}
            </span>
            <!-- Expanding elegant underline on hover -->
            <span
              class="block w-0 group-hover:w-full h-[1.5px] bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 mt-1"
            />
          </div>
        </div>
      </button>
    </div>

    <!-- Detail text area positioned at screen edges, vertically aligned with section / CONCEPT center -->
    <div
      id="activity-description" aria-live="polite" aria-atomic="true"
      class="activity-description absolute top-1/2 -translate-y-1/2 z-30 max-w-[260px] sm:max-w-xs md:max-w-sm pointer-events-none transition-all duration-300"
      :class="[
        activeItem?.side === 'left' ? 'left-6 sm:left-12 lg:left-16 text-left' : 'right-6 sm:right-12 lg:right-16 text-right',
        activeItem ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (activeItem?.side === 'left' ? '-translate-x-4' : 'translate-x-4')
      ]"
    >
      <div v-if="activeItem" class="space-y-2">
        <p class="font-quicksand text-xs sm:text-sm tracking-[0.2em] text-white/60 uppercase">
          ACTIVITY // {{ activeItem.title }}
        </p>
        <p class="font-zen text-xs sm:text-sm text-white/95 font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          {{ activeItem.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isVisible = ref(false)
let sectionObserver: IntersectionObserver | null = null

interface Activity {
  title: string
  side: 'left' | 'right'
  image: string
  delay: number
  duration: number
  description: string
}

const activeItem = ref<Activity | null>(null)
let cleanupMotion = () => {}
const clearHover = (event: MouseEvent) => {
  const control = event.currentTarget as HTMLElement
  if (window.matchMedia('(hover: hover)').matches && !control.contains(document.activeElement)) activeItem.value = null
}

const activities: Activity[] = [
  {
    title: 'DJ',
    side: 'left',
    image: '/images/concept/dj.jpg',
    delay: 0,
    duration: 6.2,
    description:
      '主催イベント「The Utopia Tone」や技科大祭でのプレイを中心に活動。学外クラブでの出演や主催イベントも展開しています。',
  },
  {
    title: 'VJ & LJ',
    side: 'right',
    image: '/images/concept/vj.jpg',
    delay: -1.8,
    duration: 7.1,
    description:
      '映像演出 (VJ) と照明演出 (LJ) を担当。機材開発を行い、空間を最大限に盛り上げる光と映像の演出を手掛けます。',
  },
  {
    title: 'Media',
    side: 'right',
    image: '/images/concept/media.jpg',
    delay: -3.4,
    duration: 6.8,
    description:
      'フライヤー制作、広報SNS運用、Webサイト更新、映像制作やイラストレーションなど視覚と感覚に訴えるコンテンツを創出します。',
  },
  {
    title: 'DTM',
    side: 'right',
    image: '/images/concept/dtm.png',
    delay: -0.9,
    duration: 7.5,
    description:
      '各自の好む音楽を求めて楽曲制作。春・秋のM3でのオリジナル作品頒布やBandcampでの音源リリースを行っています。',
  },
  {
    title: 'Tech & DIY',
    side: 'left',
    image: '/images/concept/tech.jpg',
    delay: -2.6,
    duration: 6.4,
    description:
      'サーバー保守管理、イベント会場のリアルタイム映像配信、照明プログラミングなど、音楽とライブを支える技術開発を行います。',
  },
  {
    title: 'ら',
    side: 'left',
    image: '/images/concept/ra.jpg',
    delay: -4.2,
    duration: 7.8,
    description:
      '旅行する価値のある卓越したラーメンと唐揚げを求めて食べ歩く部内文化。部員厳選のおすすめ店舗はラーメンマップで公開中です。',
  },
]

activeItem.value = activities[0]

// Canvas animation logic
let animationFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null

interface Orb {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  targetRadius: number
  trail: { x: number; y: number }[]
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

    // Read or compute radius matching CSS clamp(160px, 26vw, 320px)
    const vw = window.innerWidth
    orbitRadius = Math.max(160, Math.min(vw * 0.26, 320))
  }

  updateSize()

  resizeObserver = new ResizeObserver(() => {
    updateSize()
  })
  resizeObserver.observe(container)

  // Nodes positions on the orbit
  const getNodePos = (index: number) => {
    const angle = (index * 60 - 90) * (Math.PI / 180)
    return {
      x: centerX + Math.cos(angle) * orbitRadius,
      y: centerY + Math.sin(angle) * orbitRadius,
    }
  }

  // Create faint orbiting particles revolving around center
  const orbCount = 20
  const orbs: Orb[] = []
  for (let i = 0; i < orbCount; i++) {
    // Distributed radial distance from center
    const rFactor = 0.65 + (i / orbCount) * 0.7 + (Math.random() - 0.5) * 0.15
    const r = orbitRadius * rFactor
    const theta = Math.random() * Math.PI * 2

    // Orbital speed in tangential direction for stable circular/elliptical orbit: v = sqrt(G/r)
    // Central gravity constant
    const G_center = 120
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
      size: 1.0 + Math.random() * 1.2, // Delicate stardust particles
      alpha: 0.12 + Math.random() * 0.22, // Soft and faint (12% - 34% opacity)
      trail: [],
    })
  }

  const draw = () => {
    animationFrameId = null
    if (!canAnimate()) return
    ctx.clearRect(0, 0, width, height)

    // Nodes positions for subtle gravity perturbations
    const nodes = [0, 1, 2, 3, 4, 5].map((i) => getNodePos(i))

    // Central gravity constant
    const G_center = 85

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
      for (let i = 0; i < 6; i++) {
        const n = nodes[i]
        const ndx = n.x - orb.x
        const ndy = n.y - orb.y
        const ndist = Math.hypot(ndx, ndy)
        if (ndist < 90 && ndist > 10) {
          const nodePull = 0.035 / (ndist * 0.5)
          orb.vx += (ndx / ndist) * nodePull
          orb.vy += (ndy / ndist) * nodePull
        }
      }

      // 3. Subtle velocity damping for silky smooth motion
      const currentSpeed = Math.hypot(orb.vx, orb.vy)
      if (currentSpeed > 2.4) {
        orb.vx = (orb.vx / currentSpeed) * 2.4
        orb.vy = (orb.vy / currentSpeed) * 2.4
      } else if (currentSpeed < 0.8) {
        orb.vx = (orb.vx / currentSpeed) * 0.8
        orb.vy = (orb.vy / currentSpeed) * 0.8
      }

      // Update position
      orb.x += orb.vx
      orb.y += orb.vy

      // Record trail
      orb.trail.push({ x: orb.x, y: orb.y })
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

      // Draw very faint glowing trail
      if (orb.trail.length > 1) {
        ctx.save()
        for (let j = 0; j < orb.trail.length - 1; j++) {
          const tAlpha = (j / orb.trail.length) * (displayAlpha * 0.5)
          ctx.beginPath()
          ctx.moveTo(orb.trail[j].x, orb.trail[j].y)
          ctx.lineTo(orb.trail[j + 1].x, orb.trail[j + 1].y)
          ctx.strokeStyle = `rgba(255, 255, 255, ${tAlpha})`
          ctx.lineWidth = orb.size * 0.7
          ctx.stroke()
        }
        ctx.restore()
      }

      // Draw faint, delicate head orb
      ctx.save()
      ctx.shadowBlur = 6
      ctx.shadowColor = `rgba(255, 255, 255, ${displayAlpha * 0.6})`
      ctx.beginPath()
      ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${displayAlpha})`
      ctx.fill()
      ctx.restore()
    }

    animationFrameId = requestAnimationFrame(draw)
  }

  draw()

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
})

onUnmounted(() => {
  cleanupMotion()
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  if (sectionObserver) {
    sectionObserver.disconnect()
  }
})
</script>

<style scoped>
.aspect-square {
  --orbit-radius: clamp(160px, 26vw, 320px);
}

.orbit-item {
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

.orbit-item:hover {
  z-index: 30;
}

.orbit-item:hover .floating-wrapper, .orbit-item:focus-within .floating-wrapper {
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
.orbit-item { border: 0; background: transparent; color: white; min-height: 44px; padding: 8px; }
@media (max-width: 767px) {
  .activity-section { display: block; padding: 64px 24px; }
  .activity-container { aspect-ratio: auto; max-height: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .activity-container > div.relative { grid-column: 1 / -1; padding: 0 0 24px; }
  .activity-container canvas { display: none; }
  .orbit-item { position: static; transform: none; text-align: left; border-bottom: 1px solid rgba(255,255,255,.2); }
  .orbit-item[aria-pressed="true"] { border-color: white; }
  .floating-wrapper { animation: none; align-items: flex-start; }
  .activity-description { position: static; transform: none; max-width: none; text-align: left; margin-top: 28px; min-height: 140px; }
}
</style>
