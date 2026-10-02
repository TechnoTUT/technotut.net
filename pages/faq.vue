<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        QUESTIONS &amp; ANSWERS
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        よくある質問 (FAQ)
      </h1>
      <p class="mt-4 text-sm font-noto text-gray-dim font-[350] max-w-2xl leading-relaxed">
        新入生や入部をご検討中の方からよくいただく質問と回答をまとめました。
      </p>
    </div>

    <template v-if="doc">
      <article
        class="faq-content prose prose-invert sm:prose-lg max-w-none font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-noto prose-headings:font-light prose-headings:text-gray-100 prose-a:text-gray-300 prose-a:font-normal prose-a:decoration-white/40 prose-a:underline-offset-4 hover:prose-a:text-white"
      >
        <ContentRenderer :value="doc" />
      </article>
    </template>
  </div>
</template>

<script setup lang="ts">
// Resolve content before rendering so navigation cannot show a temporary not-found state.
const documentPath = '/faq'
const { data: doc, error } = await useAsyncData(`page-document-${documentPath}`, () =>
  queryContent(documentPath).findOne(),
)
if (error.value) throw createError(error.value)
if (!doc.value) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
useContentHead(doc)

useSeoMeta({
  title: 'FAQ (よくある質問) - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) に関するよくある質問と回答',
})
</script>

<style scoped>
.faq-content :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-top: 1px solid rgb(255 255 255 / 10%);
  padding-top: 2rem;
  font-size: 1.25rem;
  line-height: 1.7;
}

.faq-content :deep(h2:first-child) {
  margin-top: 0;
  border-top: 0;
  padding-top: 0;
}

.faq-content :deep(h2 a) {
  display: block;
  border-left: 2px solid rgb(255 255 255 / 50%);
  padding-left: 1rem;
  color: inherit;
  font-weight: 500;
  text-decoration: none;
}

.faq-content :deep(h2 + p) {
  padding-left: calc(1rem + 2px);
  line-height: 1.9;
}

.faq-content :deep([lang='en']) {
  @apply text-gray-dim;
  display: inline-block;
  margin-top: 0.35rem;
  font-size: 0.875rem;
  font-weight: 350;
  line-height: 1.7;
}

.faq-content :deep(h2 [lang='en']) {
  color: inherit;
}
</style>
