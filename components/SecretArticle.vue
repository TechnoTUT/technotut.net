<template>
  <div class="border border-white/15 bg-dark-panel">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 px-5 py-4 sm:px-8">
      <p class="flex items-center gap-3 font-quicksand text-xs tracking-widest text-gray-300">
        <svg aria-hidden="true" class="h-4 w-4 text-brand-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M8 10V7a4 4 0 0 1 7-2.6M6 10h12v10H6z" />
          <path d="M12 14v2" />
        </svg>
        SECRET ARCHIVE
      </p>
      <span class="font-mono text-xs tracking-widest text-gray-400">{{ archiveCode }}</span>
    </div>

    <div class="px-5 py-8 sm:p-10">
      <header class="mb-10 border-l-2 border-brand pl-5 sm:pl-6">
        <h1 class="font-noto text-2xl font-light leading-relaxed text-white sm:text-4xl">
          {{ title }}
          <span class="mt-4 block font-quicksand text-base leading-relaxed tracking-wide text-gray-400 sm:text-lg" lang="en">
            {{ subtitle }}
          </span>
        </h1>
      </header>

      <article class="prose prose-invert max-w-none font-noto sm:prose-lg prose-p:font-[350] prose-p:leading-relaxed prose-p:text-gray-dim prose-headings:font-light prose-a:text-brand-light prose-img:rounded-none prose-img:border prose-img:border-white/10">
        <slot />
      </article>
    </div>

    <footer class="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 px-5 py-5 sm:px-8">
      <p class="font-quicksand text-xs tracking-widest text-gray-400">YOU FOUND THE OTHER SIDE.</p>
      <NuxtLink to="/" class="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/30 px-5 font-noto text-sm text-gray-300 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        <span aria-hidden="true">←</span> トップページへ戻る
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  archiveCode?: string
}>()
</script>
