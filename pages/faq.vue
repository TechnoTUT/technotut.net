<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        QUESTIONS &amp; ANSWERS
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        よくある質問 (FAQ)
      </h1>
      <p class="mt-4 text-sm font-zen text-gray-300 font-light max-w-2xl leading-relaxed">
        新入生や入部をご検討中の方からよくいただく質問と回答をまとめました。
      </p>
    </div>

    <ContentDoc v-slot="{ doc }" path="/faq">
      <article
        class="prose prose-invert prose-lg max-w-none font-zen prose-headings:font-zen prose-headings:font-light prose-headings:text-white prose-a:text-brand"
      >
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'FAQ (よくある質問) - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) に関するよくある質問と回答',
})
</script>
