<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto">
    <template v-if="doc">
      <header class="mb-12 border-b border-white/10 pb-6">
        <h1 class="font-noto text-3xl sm:text-5xl font-light text-white leading-tight">
          {{ doc.title }}
        </h1>
        <p v-if="doc.description" class="mt-4 text-base font-noto text-gray-dim font-[350]">
          {{ doc.description }}
        </p>
      </header>

      <article
        class="prose prose-invert prose-lg max-w-none font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-noto prose-headings:font-light prose-a:text-brand prose-img:rounded-xl"
      >
        <ContentRenderer :value="doc" />
      </article>
    </template>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ key: route => route.path })

// Resolve content before rendering so navigation cannot show a temporary not-found state.
const documentPath = useRoute().path
const { data: doc, error } = await useAsyncData(`page-document-${documentPath}`, () =>
  queryContent(documentPath).findOne(),
)
if (error.value) throw createError(error.value)
if (!doc.value) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
useContentHead(doc)

</script>
