<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        ACTIVITY &amp; SCHEDULE
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        活動情報
      </h1>
      <p class="mt-4 text-sm font-zen text-gray-300 font-light max-w-2xl leading-relaxed">
        TechnoTUT の年間スケジュールおよびこれまでの活動実績です。
      </p>
    </div>

    <!-- Markdown Content for Schedule / Record -->
    <ContentDoc path="/activity" v-slot="{ doc }">
      <article
        id="schedule"
        class="prose prose-invert prose-lg max-w-none font-zen prose-headings:font-zen prose-headings:font-light prose-headings:text-white prose-table:border-collapse prose-th:border-b prose-th:border-white/20 prose-th:py-3 prose-th:text-white prose-td:border-b prose-td:border-white/10 prose-td:py-3 prose-a:text-brand"
      >
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '活動情報 - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) の活動予定と実績',
})
</script>
