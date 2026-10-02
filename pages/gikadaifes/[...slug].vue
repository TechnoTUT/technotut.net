<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto">
    <ContentDoc v-slot="{ doc }">
      <!-- Breadcrumb / Back Link -->
      <div class="mb-8">
        <NuxtLink to="/gikadaifes" class="text-xs font-quicksand text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <span>&larr;</span>
          <span>BACK TO GIKADAIFES</span>
        </NuxtLink>
      </div>

      <!-- Article Header -->
      <header class="mb-12 border-b border-white/10 pb-8">
        <p v-if="doc.date" class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-dim uppercase mb-3">
          {{ formatDate(doc.date) }}
        </p>
        <h1 class="font-noto text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
          {{ doc.title }}
        </h1>
        <p v-if="doc.description" class="mt-4 text-base font-noto text-gray-dim font-[350] leading-relaxed">
          {{ doc.description }}
        </p>
        <div v-if="doc.image" class="mt-8 overflow-hidden border border-white/10 bg-dark-panel">
          <img :src="doc.image" :alt="doc.title" class="w-full h-auto object-cover" >
        </div>
      </header>

      <!-- Markdown Content -->
      <article
        class="festival-content prose prose-invert sm:prose-lg max-w-none font-noto prose-headings:font-noto prose-headings:font-light"
      >
        <ContentRenderer :value="doc" />
      </article>

      <div class="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <NuxtLink to="/gikadaifes" class="common-btn text-xs py-2 px-6">
          <span>一覧へ戻る</span>
        </NuxtLink>
      </div>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
</script>

<style scoped>
.festival-content {
  --festival-accent: #ff858b;
  --festival-blue: #93c5fd;
  --tw-prose-body: #d0d0d0;
  --tw-prose-headings: #fff;
  --tw-prose-bold: #fff;
  --tw-prose-links: var(--festival-accent);
  --tw-prose-counters: #d0d0d0;
  --tw-prose-bullets: #a3a3a3;
  --tw-prose-hr: #333;
  --tw-prose-th-borders: #444;
  --tw-prose-td-borders: #333;
  line-height: 1.9;
  overflow-wrap: anywhere;
}

/* Keep legacy Markdown markup, adapting its presentation to the dark theme. */
.festival-content :deep(font[color="#ff0000"]) {
  color: var(--festival-accent);
}

.festival-content :deep(font[color="#0000ff"]) {
  color: var(--festival-blue);
}

.festival-content :deep(a) {
  /* Inline colors in older articles were chosen for a white background. */
  color: var(--festival-accent) !important;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25em;
}

.festival-content :deep(a:hover) {
  color: #fff !important;
}

.festival-content :deep(:is(h2, h3, h4, h5, h6) a) {
  color: inherit !important;
  text-decoration: none;
}

.festival-content :deep(:is(h2, h3, h4, h5, h6) a:hover) {
  text-decoration: underline;
}

.festival-content :deep(font[size]) {
  line-height: 1.5;
}

.festival-content :deep(font[size="6"]) {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #fff;
}

.festival-content :deep(font[size="5"]) {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: #fff;
}

.festival-content :deep(font[size="4"]) {
  font-size: 1.125rem;
}

.festival-content :deep(table) {
  width: 100%;
  table-layout: fixed;
  font-size: 1em;
  line-height: inherit;
}

.festival-content :deep(th),
.festival-content :deep(td) {
  padding: 1rem;
  color: var(--tw-prose-body);
  font-weight: 400;
  vertical-align: top;
}

.festival-content :deep(th) {
  color: #fff;
}

.festival-content :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin-inline: auto;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 0;
}

.festival-content :deep(table img) {
  width: 100%;
  max-width: 28rem;
  margin-block: 0;
}

/* Keep each guest together; separate guests with whitespace and a single rule. */
.festival-content :deep(table:has(img):has(font[color])) {
  margin-block: 2rem 4rem;
  border-collapse: separate;
  border-spacing: 0;
}

.festival-content :deep(table:has(img):has(font[color]) + table:has(img):has(font[color])) {
  border-top: 1px solid rgb(255 255 255 / 20%);
}

.festival-content :deep(table:has(img):has(font[color]) :is(thead, tbody, tr, th, td)) {
  border: 0;
}

.festival-content :deep(table:has(img):has(font[color]) th) {
  padding: 0 0 0.75rem;
}

.festival-content :deep(table:has(img):has(font[color]) + table:has(img):has(font[color]) th) {
  padding-top: 3rem;
}

.festival-content :deep(table:has(img):has(font[color]) td) {
  padding: 0.75rem 0;
}

.festival-content :deep(table:has(img):has(font[color]) tr:last-child td) {
  padding-bottom: 0;
}

.festival-content :deep(table:has(img):has(font[color]) font[color]) {
  font-weight: 600;
}
</style>
