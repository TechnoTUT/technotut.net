<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <SectionHeader
        eyebrow="LOCATION &amp; ACCESS"
        title="Access"
        description="豊橋技術科学大学へのアクセス、および学内活動拠点のご案内"
      >
        <template #action>
          <NuxtLink to="/access" class="common-btn text-xs py-2 px-5 inline-flex">
            <span>ACCESS DETAIL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </template>
      </SectionHeader>

      <!-- Frameless, elegant layout: Left: Large Map Visual (7 cols), Right: Locations (5 cols) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        <!-- Map visual (Larger: 7 cols on lg screen, fills full height) -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div class="flex-grow flex flex-col min-h-[460px] w-full">
            <ClientOnly>
              <InteractiveCampusMap ref="campusMapRef" class="w-full h-full flex-grow" />
              <template #fallback>
                <div class="w-full h-full flex-grow min-h-[460px] bg-dark flex flex-col items-center justify-center gap-3 border border-white/10">
                  <div class="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
                  <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase">
                    Loading Campus Map...
                  </p>
                </div>
              </template>
            </ClientOnly>
          </div>
          <div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-noto text-gray-400 font-light shrink-0">
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
            <div class="flex items-center justify-between mb-3">
              <div class="title-with-line">
                <h3 class="font-noto text-xl sm:text-2xl font-light text-white">コモンズ1</h3>
              </div>
              <button
                type="button"
                class="text-xs text-gray-400 hover:text-white border border-white/15 hover:border-white/40 px-2.5 py-1 rounded transition-colors inline-flex items-center gap-1 font-quicksand cursor-pointer"
                @click="focusLocation('commons')"
              >
                <span>VIEW ON MAP</span>
                <span>&rarr;</span>
              </button>
            </div>
            <p class="font-noto text-sm sm:text-base text-gray-dim font-[350] leading-relaxed mb-4">
              学内イベント "The Utopia Tone" の開催場所です。
            </p>

            <!-- Compact Photo Viewer -->
            <CommonsPhotoViewer variant="compact" />
          </div>

          <!-- Place 2: TechnoTUT Clubroom -->
          <div class="pt-8 lg:pt-10">
            <div class="flex items-center justify-between mb-3">
              <div class="title-with-line">
                <h3 class="font-noto text-xl sm:text-2xl font-light text-white">音楽技術部 部室</h3>
              </div>
              <button
                type="button"
                class="text-xs text-gray-400 hover:text-white border border-white/15 hover:border-white/40 px-2.5 py-1 rounded transition-colors inline-flex items-center gap-1 font-quicksand cursor-pointer"
                @click="focusLocation('clubroom')"
              >
                <span>VIEW ON MAP</span>
                <span>&rarr;</span>
              </button>
            </div>
            <p class="font-noto text-sm sm:text-base text-gray-dim font-[350] leading-relaxed">
              クラブハウス2階奥。DJブースが常設され日常的な活動拠点です。
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
interface CampusMapInstance {
  flyTo: (id: 'all' | 'commons' | 'clubroom' | 'bus') => void
}

const campusMapRef = ref<CampusMapInstance | null>(null)

const focusLocation = (id: 'all' | 'commons' | 'clubroom' | 'bus') => {
  campusMapRef.value?.flyTo(id)
}
</script>
