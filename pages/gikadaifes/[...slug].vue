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
        <p v-if="doc.date" class="font-quicksand text-xs sm:text-sm tracking-widest text-brand uppercase mb-3">
          {{ formatDate(doc.date) }}
        </p>
        <h1 class="font-zen text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
          {{ doc.title }}
        </h1>
        <p v-if="doc.description" class="mt-4 text-base font-zen text-gray-300 font-light leading-relaxed">
          {{ doc.description }}
        </p>
        <div v-if="doc.image" class="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
          <img :src="doc.image" :alt="doc.title" class="w-full h-auto object-cover" >
        </div>
      </header>

      <!-- Markdown Content -->
      <article
        class="prose prose-invert prose-lg max-w-none font-zen prose-headings:font-zen prose-headings:font-light prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-white/10"
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
