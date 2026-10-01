<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header (Aligned with UtopiaToneSection & AccessSection) -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2">
            TechnoTUT Presents - School Festival
          </p>
          <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight">
            技科大祭
          </h2>
        </div>

        <div class="self-start md:self-end">
          <NuxtLink to="/gikadaifes" class="common-btn text-xs py-2 px-5 inline-flex">
            <span>ARCHIVE &amp; DETAIL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Main Showcase (Frameless Layout with subtle hover & clean typography) -->
      <div v-if="latestPost" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <!-- Left: Flyer / Visual (Consistent rounded-2xl & smooth hover) -->
        <div class="lg:col-span-5">
          <NuxtLink
            :to="latestPost._path"
            class="group block relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-dark border border-white/10 transition-all duration-300 hover:border-white/30 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              v-if="latestPost.image"
              :src="latestPost.image"
              :alt="latestPost.title"
              loading="lazy"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            >
            <div v-else class="w-full h-full flex items-center justify-center text-gray-600 font-quicksand text-2xl">
              TechnoTUT
            </div>
          </NuxtLink>
        </div>

        <!-- Right: Event Highlights & Content -->
        <div class="lg:col-span-7 space-y-8">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span v-if="latestPost.date" class="text-xs font-quicksand text-gray-400 tracking-wider">
                {{ formatDate(latestPost.date) }}
              </span>
              <span v-if="latestPost.date" class="text-white/20">•</span>
              <span class="text-xs font-quicksand text-gray-400 tracking-wider uppercase">Stage &amp; Commons</span>
            </div>
            <h3 class="font-zen text-2xl sm:text-3xl font-light text-white leading-snug">
              <NuxtLink :to="latestPost._path" class="hover:text-gray-200 transition-colors">
                {{ latestPost.title }}
              </NuxtLink>
            </h3>
            <p v-if="latestPost.description" class="font-zen text-sm sm:text-base text-gray-dim font-light mt-3 leading-relaxed">
              {{ latestPost.description }}
            </p>
          </div>

          <!-- Feature Items (Vertical Stack) -->
          <div class="space-y-3.5 pt-2">
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">LOCATION</span>
              <span class="font-zen text-sm sm:text-base text-white font-light">福利施設 コモンズⅠ &amp; 野外特設ステージ</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">STYLE</span>
              <span class="font-zen text-sm sm:text-base text-white font-light">Club Music / Subculture / VJ Show</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">ADMISSION</span>
              <span class="font-zen text-sm sm:text-base text-white font-light">入場無料（学外・一般参加歓迎）</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-1">
            <NuxtLink :to="latestPost._path" class="common-btn text-xs py-2 px-6">
              <span>詳細を見る</span>
              <span>&rarr;</span>
            </NuxtLink>
            <NuxtLink to="/gikadaifes" class="text-xs font-quicksand tracking-wider text-gray-400 hover:text-white transition-colors">
              過去の開催アーカイブ一覧 &rarr;
            </NuxtLink>
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

const { data: latestPost } = await useAsyncData('gikadaifes-latest', () =>
  queryContent('gikadaifes')
    .where({ _extension: 'md', _file: { $ne: 'gikadaifes/_index.md' } })
    .sort({ date: -1 })
    .findOne()
)

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
</script>
