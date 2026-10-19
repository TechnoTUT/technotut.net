<template>
  <div>
    <!-- Hero with Giant Interactive Navigation -->
    <HeroSection />

    <!-- Concept & Activities Grid -->
    <ConceptActivitySection />

    <!-- Event & The Utopia Tone Highlight -->
    <UtopiaToneSection />

    <!-- School Festival (Gikadaifes) Showcase -->
    <GikadaifesSection />

    <!-- DTM / Discography Showcase -->
    <DtmSection />

    <!-- Access & Campus Guide -->
    <AccessSection />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('home.seoTitle'),
  ogTitle: () => t('home.seoTitle'),
  description: () => t('home.seoDescription'),
  ogImage: 'https://technotut.net/images/home/hero-bg_mid.jpg',
  twitterImage: 'https://technotut.net/images/home/hero-bg_mid.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<i18n lang="json">
{
  "ja": {
    "home": {
      "seoTitle": "TechnoTUT - 豊橋技術科学大学 音楽技術部",
      "seoDescription": "豊橋技術科学大学 音楽技術部 (TechnoTUT) 公式ホームページ。Music & Live production Club."
    }
  },
  "en": {
    "home": {
      "seoTitle": "TechnoTUT - Toyohashi University of Technology Music & Live production Club",
      "seoDescription": "Official website of the Toyohashi University of Technology Music & Live production Club (TechnoTUT). Music & Live production Club."
    }
  }
}
</i18n>
