<template>
  <div class="min-h-screen flex flex-col bg-dark text-white font-zen selection:bg-white/20 selection:text-white">
    <HeaderNav />

    <main class="flex-grow flex items-center justify-center pt-36 pb-24 px-6 sm:px-12 lg:px-16">
      <div class="max-w-2xl w-full text-center">
        <!-- Error Code Label -->
        <p class="font-quicksand text-xs sm:text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
          {{ is404 ? '404 - Page Not Found' : `${statusCode} - Server Error` }}
        </p>

        <!-- Big Status Code -->
        <div class="relative inline-block my-2">
          <h1 class="font-quicksand font-light text-7xl sm:text-9xl tracking-tight text-white select-none">
            {{ statusCode }}
          </h1>
        </div>

        <!-- Japanese Title -->
        <h2 class="font-noto font-light text-xl sm:text-2xl text-white mt-4 mb-4 tracking-wide">
          {{ is404 ? 'お探しのページが見つかりませんでした' : 'サーバー内部でエラーが発生しました' }}
        </h2>

        <!-- Description -->
        <p class="font-noto text-sm sm:text-base text-gray-dim font-[350] leading-relaxed max-w-lg mx-auto mb-10">
          <template v-if="is404">
            アクセスしようとしたページは削除されたか、URLが変更された可能性があります。<br class="hidden sm:inline">
            URLをご確認いただくか、トップページよりお探しください。
          </template>
          <template v-else>
            システムの一時的な不具合、または予期しない問題が発生しました。<br class="hidden sm:inline">
            時間をおいて再度お試しいただくか、トップページへお戻りください。
          </template>
        </p>

        <!-- Action Button -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            class="common-btn text-xs sm:text-sm py-3 px-8 inline-flex cursor-pointer"
            @click="handleClearError"
          >
            <span>TOP PAGE</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </main>

    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode || 500)
const is404 = computed(() => statusCode.value === 404)

const pageTitle = computed(() => (is404.value ? '404 Not Found - TechnoTUT' : `${statusCode.value} Error - TechnoTUT`))
const pageDescription = computed(() =>
  is404.value
    ? 'お探しのページが見つかりませんでした。'
    : 'サーバー内部でエラーが発生しました。',
)

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, nofollow',
})

const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>
