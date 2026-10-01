<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        LOCATION &amp; ACCESS
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        アクセス情報
      </h1>
      <p class="mt-4 text-sm font-noto text-gray-dim font-[350] max-w-2xl leading-relaxed">
        豊橋技術科学大学への交通アクセス、および学内活動拠点（コモンズ1・部室）への行き方です。
      </p>
    </div>

    <!-- Campus Map -->
    <div class="mb-16 p-6 rounded-2xl bg-dark-panel border border-white/10">
      <h2 class="font-noto text-2xl font-light text-white mb-4">学内マップ</h2>
      <div class="overflow-hidden rounded-xl border border-white/10 bg-neutral-900 mb-4">
        <img src="/images/access/map.png" alt="Campus Map" class="w-full h-auto object-contain" >
      </div>
      <p class="text-xs text-gray-400 font-noto font-[350]">
        コモンズ1（福利施設1階）および音楽技術部室（クラブハウス2階）
      </p>
    </div>

    <!-- Access Markdown Content -->
    <ContentDoc v-slot="{ doc }" path="/access">
      <article
        class="prose prose-invert prose-lg max-w-none font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-noto prose-headings:font-light prose-headings:text-white prose-a:text-brand"
      >
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'アクセス - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) へのアクセス・キャンパスマップ',
})
</script>
