<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <PageHeader
      eyebrow="EVENT ARCHIVE"
      title="技科大祭"
      description="毎年10月に開催される &quot;技科大祭&quot; での TechnoTUT 主催DJイベントやステージパフォーマンスの特設情報です。"
    />

    <!-- Article Cards (1 Column) -->
    <div class="space-y-8">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="group overflow-hidden border border-white/10 bg-dark flex flex-col md:flex-row transition-all hover:border-white/30"
      >
        <div class="block md:w-60 lg:w-72 shrink-0 aspect-[16/10] overflow-hidden bg-dark relative">
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover object-top"
          >
          <div v-else class="w-full h-full min-h-[160px] flex items-center justify-center text-gray-600 font-quicksand text-xl">
            TechnoTUT
          </div>
        </div>

        <div class="p-6 md:p-8 flex-grow flex flex-col justify-between">
          <div>
            <p v-if="post.date" class="text-xs font-quicksand text-gray-400 mb-2">
              {{ formatDate(post.date) }}
            </p>
            <h2 class="font-noto text-xl sm:text-2xl font-light text-white group-hover:text-gray-200 transition-colors">
              {{ post.title }}
            </h2>
            <p v-if="post.description" class="mt-3 text-sm text-gray-400 font-noto font-[350] line-clamp-3 leading-relaxed">
              {{ post.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs font-quicksand tracking-wider text-white flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>READ MORE</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatJaDate as formatDate } from '~/utils/date'

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
</script>
