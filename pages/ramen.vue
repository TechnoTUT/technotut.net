<template>
  <div class="pt-40 pb-24 sm:pb-32 px-4 sm:px-10 lg:px-12 max-w-6xl mx-auto">
    <!-- Header -->
    <PageHeader
      eyebrow="GOURMET &amp; CULTURE"
      :title="$t('ramen.title')"
      :description="$t('ramen.description')"
      no-border
    />

    <!-- Ramen Leaflet Map -->
    <div class="overflow-hidden bg-dark shadow-2xl">
      <ClientOnly>
        <RamenMap />
        <template #fallback>
          <div class="w-full h-[550px] sm:h-[650px] bg-dark flex flex-col items-center justify-center gap-3">
            <div class="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
            <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase">
              Loading Ramen Map...
            </p>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('ramen.seoTitle')} - TechnoTUT`,
  description: () => t('ramen.seoDescription'),
})
</script>

<i18n lang="json">
{
  "ja": {
    "ramen": {
      "title": "豊橋らーめんマップ",
      "description": "音楽技術部（TechnoTUT）の部員たちが実際に足を運んで厳選した、豊橋および周辺地域のおすすめ飲食店・ラーメン店マップです。",
      "seoTitle": "豊橋らーめんマップ",
      "seoDescription": "豊橋技術科学大学 音楽技術部 (TechnoTUT) 部員厳選の豊橋および周辺地域おすすめラーメン・グルメマップ"
    }
  },
  "en": {
    "ramen": {
      "title": "Toyohashi Ramen Map",
      "description": "A map of recommended restaurants and ramen shops in Toyohashi and nearby areas, carefully selected by TechnoTUT members who visited them in person.",
      "seoTitle": "Toyohashi Ramen Map",
      "seoDescription": "Ramen and food map of Toyohashi and nearby areas, carefully selected by members of the Toyohashi University of Technology Music & Live production Club (TechnoTUT)"
    }
  }
}
</i18n>
