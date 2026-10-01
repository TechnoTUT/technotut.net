<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header (Aligned with UtopiaToneSection & GikadaifesSection) -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2">
            LOCATION &amp; ACCESS
          </p>
          <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            Access
          </h2>
          <p
            ref="descRef"
            class="font-zen text-sm sm:text-base text-gray-dim font-light mt-4 max-w-2xl leading-relaxed tracking-wide transition-all duration-1000 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            豊橋技術科学大学へのアクセス、および学内活動拠点のご案内
          </p>
        </div>

        <div class="self-start md:self-end">
          <NuxtLink to="/access" class="common-btn text-xs py-2 px-5 inline-flex">
            <span>ACCESS DETAIL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Frameless, elegant layout: Left: Large Map Visual (7 cols), Right: Locations (5 cols) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <!-- Map visual (Larger: 7 cols on lg screen, fills full height) -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div class="rounded-2xl overflow-hidden bg-dark group shadow-2xl flex-grow flex items-center justify-center">
            <img
              src="/images/access/map.png"
              alt="TechnoTUT Campus Map"
              class="w-full h-full max-h-[560px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            >
          </div>
          <div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-zen text-gray-400 font-light shrink-0">
            <div>
              <span>豊橋技術科学大学</span>
              <span class="mx-2 text-white/20">•</span>
              <span>愛知県豊橋市天伯町雲雀ヶ丘1-1</span>
            </div>
            <p>豊橋駅前より豊鉄バス「技科大前」下車</p>
          </div>
        </div>

        <!-- Activity Locations Information (Frameless & refined: 5 cols, stretched to align with map) -->
        <div class="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0 lg:pl-4">
          <!-- Place 1: Commons 1 -->
          <div>
            <div class="title-with-line mb-3">
              <h3 class="font-zen text-xl sm:text-2xl font-light text-white">コモンズ1</h3>
            </div>
            <p class="font-zen text-sm sm:text-base text-gray-dim font-light leading-relaxed mb-4">
              福利施設1階にあるオープンスペース。平日昼休みや放課後のDJ練習、イベント配信、機材チェックなどを行っており、どなたでも気軽にお立ち寄りいただけます。
            </p>

            <!-- Compact Photo Viewer -->
            <div class="relative rounded-2xl overflow-hidden aspect-[16/10] bg-dark group shadow-lg">
              <img
                :src="commonsPhotos[currentPhotoIndex]"
                alt="Commons 1 Photo"
                class="w-full h-full object-cover transition-opacity duration-300"
              >
              <!-- Floating photo count & controls -->
              <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex items-center justify-between">
                <span class="text-[11px] font-quicksand text-gray-300">
                  {{ currentPhotoIndex + 1 }} / {{ commonsPhotos.length }}
                </span>
                <div class="flex items-center gap-1.5">
                  <button
                    type="button"
                    class="w-11 h-11 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
                    aria-label="Previous photo"
                    @click="prevPhoto"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    class="w-11 h-11 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
                    aria-label="Next photo"
                    @click="nextPhoto"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Place 2: TechnoTUT Clubroom -->
          <div class="pt-8 lg:pt-10">
            <div class="title-with-line mb-3">
              <h3 class="font-zen text-xl sm:text-2xl font-light text-white">音楽技術部 部室</h3>
            </div>
            <p class="font-zen text-sm sm:text-base text-gray-dim font-light leading-relaxed">
              クラブハウス2階奥。音響PA、DJブース、DTM制作機材、照明演出機器、サーバーラック等が常設された制作拠点です。見学等はSNSのDMよりお気軽にお問い合わせください。
            </p>
            <div class="pt-5">
              <NuxtLink to="/access" class="common-btn text-xs py-2 px-6">
                <span>詳しい行き方を見る</span>
                <span>&rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const descRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (descRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(descRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})

const commonsPhotos = [
  '/images/access/photos/1.jpg',
  '/images/access/photos/2.jpg',
  '/images/access/photos/3.jpg',
  '/images/access/photos/4.jpg',
]

const currentPhotoIndex = ref(0)

const prevPhoto = () => {
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + commonsPhotos.length) % commonsPhotos.length
}

const nextPhoto = () => {
  currentPhotoIndex.value =
    (currentPhotoIndex.value + 1) % commonsPhotos.length
}
</script>
