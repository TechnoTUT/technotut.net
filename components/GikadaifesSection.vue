<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header (Aligned with UtopiaToneSection & AccessSection) -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div ref="headerRef">
          <p
            class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2 transition-all duration-500 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
          >
            TechnoTUT Presents - School Festival
          </p>
          <div class="relative inline-block overflow-hidden">
            <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
              技科大祭
            </h2>
            <div
              aria-hidden="true"
              class="block-reveal-mask"
              :class="isVisible ? 'block-reveal-active' : ''"
            />
          </div>
        </div>

        <div class="self-start md:self-end">
          <NuxtLink to="/gikadaifes" class="common-btn text-xs py-2 px-5 inline-flex">
            <span>ARCHIVE &amp; DETAIL</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Main Showcase (2 Columns: Larger Flyer on Left, Title & Content on Right) -->
      <div v-if="latestPost" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left: Flyer / Visual (Sharp border, no hover anim) -->
        <div class="lg:col-span-7 flex justify-center">
          <NuxtLink
            :to="latestPost._path"
            class="block relative overflow-hidden w-full max-w-xl sm:max-w-2xl lg:max-w-none bg-dark border border-white/10"
            :class="latestPost.image_banner ? 'aspect-[2527/1072]' : 'aspect-[1/1.414] max-w-xs sm:max-w-sm'"
          >
            <img
              v-if="latestPost.image_banner || latestPost.image"
              :src="latestPost.image_banner || latestPost.image"
              :alt="latestPost.title"
              loading="lazy"
              class="w-full h-full object-contain object-center"
            >
            <div v-else class="w-full h-full flex items-center justify-center text-gray-600 font-quicksand text-2xl">
              TechnoTUT
            </div>
          </NuxtLink>
        </div>

        <!-- Right: Event Highlights & Content -->
        <div class="lg:col-span-5 space-y-6">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span v-if="latestPost.date" class="text-xs font-quicksand text-gray-400 tracking-wider">
                {{ formatDate(latestPost.date) }}
              </span>
              <span v-if="latestPost.date" class="text-white/20">•</span>
              <span class="text-xs font-quicksand text-gray-400 tracking-wider uppercase">Stage &amp; Commons</span>
            </div>
            <h3 class="font-noto text-2xl sm:text-3xl font-light text-white leading-snug">
              <NuxtLink :to="latestPost._path" class="hover:text-gray-200 transition-colors">
                {{ latestPost.title }}
              </NuxtLink>
            </h3>
            <p v-if="latestPost.description" class="font-noto text-sm sm:text-base text-gray-dim font-[350] mt-3 leading-relaxed">
              {{ latestPost.description }}
            </p>
          </div>

          <!-- Feature Items -->
          <div class="space-y-3 pt-1">
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">LOCATION</span>
              <span class="font-noto text-sm sm:text-base text-white font-light">福利施設 コモンズⅠ &amp; 図書館前特設ステージ</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">OPEN</span>
              <span class="font-noto text-sm sm:text-base text-white font-light">{{ latestPost.time || '10:00 - 17:00' }}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">ADMISSION</span>
              <span class="font-noto text-sm sm:text-base text-white font-light">入場無料</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
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
import { formatJaDate } from '~/utils/date'

const { targetRef: headerRef, isVisible } = useScrollReveal()

const { data: latestPost } = await useAsyncData('gikadaifes-latest', () =>
  queryContent('gikadaifes')
    .where({ _extension: 'md', _file: { $ne: 'gikadaifes/_index.md' } })
    .sort({ date: -1 })
    .findOne()
)

const formatDate = formatJaDate
</script>
