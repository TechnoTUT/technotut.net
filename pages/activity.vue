<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        ACTIVITY &amp; SCHEDULE
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        活動情報
      </h1>
      <p class="mt-4 text-sm font-noto text-gray-dim font-[350] max-w-2xl leading-relaxed">
        音楽、映像、デザイン、テクノロジー。TechnoTUT の各班の活動と、年間スケジュール・活動実績を紹介します。
      </p>
    </div>

    <ActivityGroups />

    <div id="schedule" class="mt-24 sm:mt-32 border-t border-white/10 pt-12">
      <p class="font-quicksand text-xs tracking-[0.2em] text-gray-400 mb-3">SCHEDULE &amp; RECORD</p>
      <h2 class="font-noto font-light text-3xl sm:text-4xl mb-8">活動予定・実績</h2>
      <!-- Markdown Content for Schedule / Record -->
      <ContentDoc v-slot="{ doc }" path="/activity">
        <article
          class="schedule-content prose prose-invert prose-lg max-w-none font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-light prose-headings:text-white prose-table:border-collapse prose-th:border-b prose-th:border-white/20 prose-th:py-3 prose-th:text-white prose-td:border-b prose-td:border-white/10 prose-td:py-3 prose-a:text-brand"
        >
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '活動情報 - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) の各班の活動紹介・活動予定・実績',
})
</script>

<style scoped>
.schedule-content :deep(table) {
  display: block;
  overflow-x: auto;
}
</style>
