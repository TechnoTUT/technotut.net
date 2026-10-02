<template>
  <div class="pt-40 pb-24 sm:pb-32 px-4 sm:px-10 lg:px-12 max-w-6xl mx-auto">
    <!-- Header -->
    <PageHeader
      eyebrow="GOURMET &amp; CULTURE"
      title="豊橋らーめんマップ"
      description="音楽技術部（TechnoTUT）の部員たちが実際に足を運んで厳選した、豊橋および周辺地域のおすすめ飲食店・ラーメン店マップです。"
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
useSeoMeta({
  title: '豊橋らーめんマップ - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) 部員厳選の豊橋および周辺地域おすすめラーメン・グルメマップ',
})
</script>
