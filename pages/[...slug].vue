<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto">
    <ContentDoc v-slot="{ doc }">
      <header class="mb-12 border-b border-white/10 pb-6">
        <h1 class="font-zen text-3xl sm:text-5xl font-light text-white leading-tight">
          {{ doc.title }}
        </h1>
        <p v-if="doc.description" class="mt-4 text-base font-zen text-gray-300 font-light">
          {{ doc.description }}
        </p>
      </header>

      <article
        class="prose prose-invert prose-lg max-w-none font-zen prose-headings:font-zen prose-headings:font-light prose-a:text-brand prose-img:rounded-xl"
      >
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
// Catch-all markdown renderer
</script>
