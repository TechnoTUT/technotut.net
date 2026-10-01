<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        EVENT ARCHIVE
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        技科大祭 (Gikadaifes)
      </h1>
      <p class="mt-4 text-sm font-noto text-gray-dim font-[350] max-w-2xl leading-relaxed">
        毎年秋に開催される豊橋技術科学大学の学園祭「技科大祭」での TechnoTUT 主催DJイベントやステージパフォーマンスの特設情報です。
      </p>
    </div>

    <!-- Article Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="post in posts"
        :key="post._path"
        class="group rounded-2xl overflow-hidden border border-white/10 bg-dark-panel flex flex-col justify-between transition-all hover:border-white/30 hover:-translate-y-1"
      >
        <NuxtLink :to="post._path" class="block aspect-[16/10] overflow-hidden bg-neutral-900 relative">
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          >
          <div v-else class="w-full h-full flex items-center justify-center text-gray-600 font-quicksand text-xl">
            TechnoTUT
          </div>
        </NuxtLink>

        <div class="p-6 flex-grow flex flex-col justify-between">
          <div>
            <p v-if="post.date" class="text-xs font-quicksand text-gray-400 mb-2">
              {{ formatDate(post.date) }}
            </p>
            <h2 class="font-noto text-lg font-normal text-white group-hover:text-gray-200 transition-colors">
              <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
            </h2>
            <p v-if="post.description" class="mt-2 text-xs text-gray-400 font-noto font-[350] line-clamp-3 leading-relaxed">
              {{ post.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-white/5">
            <NuxtLink :to="post._path" class="text-xs font-quicksand tracking-wider text-white flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>READ MORE</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '技科大祭 - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) の技科大祭特設情報・アーカイブ',
})

const { data: posts } = await useAsyncData('gikadaifes-posts', () =>
  queryContent('gikadaifes')
    .where({ _extension: 'md', _file: { $ne: 'gikadaifes/_index.md' } })
    .sort({ date: -1 })
    .find()
)

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
