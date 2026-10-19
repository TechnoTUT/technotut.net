<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <SectionHeader
        eyebrow="TechnoTUT Presents - School Festival"
        :title="$t('gikadaifes.title')"
      >
        <template #action>
          <NuxtLinkLocale to="/gikadaifes" class="common-btn text-xs py-2 px-5 inline-flex">
            <span>ARCHIVE &amp; DETAIL</span>
            <span>&rarr;</span>
          </NuxtLinkLocale>
        </template>
      </SectionHeader>

      <!-- Main Showcase (2 Columns: Larger Flyer on Left, Title & Content on Right) -->
      <div v-if="latestPost" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left: Flyer / Visual (Sharp border, no hover anim) -->
        <div class="lg:col-span-7 flex justify-center">
          <NuxtLinkLocale
            :to="latestPost._path"
            class="block relative overflow-hidden w-full max-w-xl sm:max-w-2xl lg:max-w-none bg-dark border border-white/10"
            :class="latestPost.image_banner ? 'aspect-[2527/1072]' : 'aspect-[1/1.414] max-w-xs sm:max-w-sm'"
          >
            <NuxtImg
              v-if="latestPost.image_banner || latestPost.image"
              :src="latestPost.image_banner || latestPost.image"
              :alt="latestPost.title"
              loading="lazy"
              format="webp"
              class="w-full h-full object-contain object-center"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-600 font-quicksand text-2xl">
              TechnoTUT
            </div>
          </NuxtLinkLocale>
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
              <NuxtLinkLocale :to="latestPost._path" class="hover:text-gray-200 transition-colors">
                {{ latestPost.title }}
              </NuxtLinkLocale>
            </h3>
            <p v-if="latestPost.description" class="font-noto text-sm sm:text-base text-gray-dim font-[350] mt-3 leading-relaxed">
              {{ latestPost.description }}
            </p>
          </div>

          <!-- Feature Items -->
          <div class="space-y-3 pt-1">
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">LOCATION</span>
              <span class="font-noto text-sm sm:text-base text-white font-light">{{ $t('gikadaifes.venue') }}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">OPEN</span>
              <span class="font-noto text-sm sm:text-base text-white font-light">{{ latestPost.time || '10:00 - 17:00' }}</span>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span class="font-quicksand text-xs tracking-widest text-gray-400 uppercase w-28 shrink-0">ENTRANCE</span>
              <span class="font-noto text-sm sm:text-base text-white font-light">{{ $t('gikadaifes.free') }}</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <NuxtLinkLocale :to="latestPost._path" class="common-btn text-xs py-2 px-6">
              <span>{{ $t('gikadaifes.seeDetails') }}</span>
              <span>&rarr;</span>
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/gikadaifes" class="text-xs font-quicksand tracking-wider text-gray-400 hover:text-white transition-colors">
              {{ $t('gikadaifes.archiveLink') }} &rarr;
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { formatJaDate } from '~/utils/date'
useI18n()

const { data: latestPost } = await useAsyncData('gikadaifes-latest', () =>
  queryContent('gikadaifes')
    .where({ _extension: 'md', _file: { $ne: 'gikadaifes/_index.md' } })
    .sort({ date: -1 })
    .findOne()
)

const formatDate = formatJaDate
</script>

<i18n lang="json">
{
  "ja": {
    "gikadaifes": {
      "archiveLink": "過去の開催アーカイブ一覧",
      "venue": "福利施設 コモンズⅠ & 図書館前特設ステージ",
      "free": "無料",
      "seeDetails": "詳細を見る",
      "title": "技科大祭"
    }
  },
  "en": {
    "gikadaifes": {
      "archiveLink": "Past event archive",
      "venue": "Welfare Facility Commons I & Special Stage in front of the Library",
      "free": "Free",
      "seeDetails": "See details",
      "title": "Gikadaisai"
    }
  }
}
</i18n>
