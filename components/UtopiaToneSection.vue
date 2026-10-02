<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div ref="headerRef">
          <p
            class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2 transition-all duration-500 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
          >
            TechnoTUT Presents - Regular Party
          </p>
          <div class="relative inline-block overflow-hidden">
            <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
              The Utopia Tone
            </h2>
            <div
              aria-hidden="true"
              class="block-reveal-mask"
              :class="isVisible ? 'block-reveal-active' : ''"
            />
          </div>
          <p
            class="font-noto text-sm sm:text-base text-gray-dim font-light mt-4 max-w-2xl leading-relaxed tracking-wide transition-all duration-700 ease-out delay-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            TechnoTUTが定期主催する学内DJ＆ライブイベント。オールジャンルのエレクトロニックミュージックからサブカルチャーまで、部員やゲストDJが独自のフロアを創り上げます。
          </p>
        </div>

        <!-- Activity Link in Header -->
        <div class="self-start md:self-end">
          <NuxtLink to="/activity" class="common-btn text-xs py-2 px-5 inline-flex">
            <span>ACTIVITY DETAIL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Slider Area with Direct Flyer Navigation Controls -->
      <div class="relative group/track -mx-6 sm:mx-0">
        <!-- Floating Prev Button (Left edge of track) -->
        <button
          class="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-dark/90 backdrop-blur-md text-white shadow-2xl items-center justify-center hover:border-white hover:bg-white/15 hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          aria-label="Scroll flyers left"
          @click="scrollPrev"
        >
          &larr;
        </button>

        <!-- Floating Next Button (Right edge of track) -->
        <button
          class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-dark/90 backdrop-blur-md text-white shadow-2xl items-center justify-center hover:border-white hover:bg-white/15 hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          aria-label="Scroll flyers right"
          @click="scrollNext"
        >
          &rarr;
        </button>

        <!-- Scrollable Track (Elegant Gallery Slider with Autoplay) -->
        <div
          ref="sliderContainer"
          class="slider-container flex overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2"
          style="scrollbar-width: none; -ms-overflow-style: none;"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
          @touchstart.passive="pauseAutoplay"
          @touchend.passive="resumeAutoplay"
        >
          <div
            v-for="(item, idx) in archives"
            :key="idx"
            class="slider-card flex-shrink-0 w-64 sm:w-72 2xl:w-80 group relative overflow-hidden border border-white/10 bg-dark-panel transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:z-10 cursor-pointer -mr-px"
            @click="openModal(idx)"
          >
            <div class="aspect-[210/297] relative overflow-hidden bg-neutral-900">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                class="w-full h-full object-cover"
              >
              <!-- Gradient Overlay & Info on Hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-[10px] font-quicksand tracking-widest text-brand uppercase font-semibold">
                      {{ idx === 0 ? 'LATEST' : 'ARCHIVE' }}
                    </span>
                    <p class="font-quicksand text-lg text-white font-medium">{{ item.title }}</p>
                  </div>
                  <span class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    &nearr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Scroll Indicator / Small Arrows -->
        <div class="flex md:hidden items-center justify-center gap-3 pt-2">
          <button
            class="w-9 h-9 rounded-full border border-white/20 bg-dark/60 text-white flex items-center justify-center text-sm"
            aria-label="Previous"
            @click="scrollPrev"
          >
            &larr;
          </button>
          <span class="text-[11px] font-quicksand text-gray-500 uppercase tracking-widest">
            SCROLL FLYERS
          </span>
          <button
            class="w-9 h-9 rounded-full border border-white/20 bg-dark/60 text-white flex items-center justify-center text-sm"
            aria-label="Next"
            @click="scrollNext"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal (Expand Image) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedIdx !== null"
          class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          @click.self="closeModal"
        >
          <!-- Close Button -->
          <button
            type="button"
            class="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/20 bg-dark/80 text-white hover:border-white hover:bg-white/20 flex items-center justify-center transition-colors z-[110] cursor-pointer"
            aria-label="Close"
            @click.stop="closeModal"
          >
            ✕
          </button>

          <!-- Prev Button -->
          <button
            v-if="archives.length > 1"
            type="button"
            class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-dark/80 text-white hover:border-white hover:bg-white/20 flex items-center justify-center transition-colors z-[110] cursor-pointer"
            aria-label="Previous image"
            @click.stop="prevImage"
          >
            &larr;
          </button>

          <!-- Next Button -->
          <button
            v-if="archives.length > 1"
            type="button"
            class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-dark/80 text-white hover:border-white hover:bg-white/20 flex items-center justify-center transition-colors z-[110] cursor-pointer"
            aria-label="Next image"
            @click.stop="nextImage"
          >
            &rarr;
          </button>

          <!-- Modal Content (Shifted slightly downward for better eye level) -->
          <div class="relative max-w-4xl max-h-[92vh] flex flex-col items-center pt-8 sm:pt-12 translate-y-3 sm:translate-y-5">
            <img
              :src="archives[selectedIdx].image"
              :alt="archives[selectedIdx].title"
              class="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-white/15"
            >
            <div class="mt-4 text-center">
              <p class="font-quicksand text-lg text-white font-medium tracking-wide">
                {{ archives[selectedIdx].title }}
              </p>
              <p class="font-quicksand text-xs text-gray-400 mt-0.5">
                {{ selectedIdx + 1 }} / {{ archives.length }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const sliderContainer = ref<HTMLElement | null>(null)
const selectedIdx = ref<number | null>(null)

const { targetRef: headerRef, isVisible } = useScrollReveal()

const openModal = (idx: number) => {
  selectedIdx.value = idx
}

const closeModal = () => {
  selectedIdx.value = null
}

const prevImage = () => {
  if (selectedIdx.value !== null) {
    selectedIdx.value = (selectedIdx.value - 1 + archives.length) % archives.length
  }
}

const nextImage = () => {
  if (selectedIdx.value !== null) {
    selectedIdx.value = (selectedIdx.value + 1) % archives.length
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedIdx.value === null) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}


onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})


// public/images/events/ 内の vol*.png, vol*.jpg などを自動スキャン
const eventImages = import.meta.glob<string>(
  '/public/images/events/vol*.*',
  { eager: true, query: '?url', import: 'default' }
)

const archives = Object.keys(eventImages)
  .map((path) => {
    const match = path.match(/vol(\d+)\.[^.]+$/)
    const volNum = match ? parseInt(match[1], 10) : 0
    const publicPath = path.replace(/^\/public/, '')
    return {
      title: `The Utopia Tone vol.${volNum}`,
      vol: volNum,
      image: publicPath,
    }
  })
  .sort((a, b) => b.vol - a.vol) // 最新のvolから降順に自動ソート

const getScrollStep = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return 256
  }
  return 288
}

const scrollPrev = () => {
  if (sliderContainer.value) {
    sliderContainer.value.scrollBy({ left: -getScrollStep(), behavior: 'smooth' })
  }
}

const scrollNext = () => {
  if (sliderContainer.value) {
    const el = sliderContainer.value
    // 右端に到達した場合は先頭へスムーズに戻る
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: getScrollStep(), behavior: 'smooth' })
    }
  }
}

// 自動回転（オートプレイ）タイマー
let autoplayTimer: ReturnType<typeof setInterval> | null = null
const isHovered = ref(false)

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    // モーダル表示中やホバー中は回転を停止
    if (!isHovered.value && selectedIdx.value === null) {
      scrollNext()
    }
  }, 3500)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const pauseAutoplay = () => {
  isHovered.value = true
}

const resumeAutoplay = () => {
  isHovered.value = false
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
@media (max-width: 639px) {
  .slider-container {
    padding-inline: calc(50% - 128px);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: calc(50% - 128px);
  }
  .slider-card {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
}
</style>
