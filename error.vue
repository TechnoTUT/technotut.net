<template>
  <div class="min-h-screen flex flex-col bg-dark text-white font-zen selection:bg-white/20 selection:text-white">
    <HeaderNav />

    <main class="flex-grow flex items-center justify-center pt-36 pb-24 px-6 sm:px-12 lg:px-16">
      <div class="max-w-2xl w-full text-center">
        <!-- Error Code Label -->
        <p class="font-quicksand text-xs sm:text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
          {{ is404 ? '404 — NO ENTRY' : `${statusCode} - Server Error` }}
        </p>

        <!-- Big Status Code -->
        <div class="relative inline-block my-2">
          <h1 class="font-quicksand font-light text-7xl sm:text-9xl tracking-tight text-white select-none">
            {{ statusCode }}
          </h1>
        </div>

        <!-- Japanese Title -->
        <h2 class="font-noto font-light text-xl sm:text-2xl text-white mt-4 mb-4 tracking-wide">
          {{ is404 ? (locale === 'en' ? 'Nothing here' : 'ここには、何もありませんでした') : (locale === 'en' ? 'An internal server error occurred' : 'サーバー内部でエラーが発生しました') }}
        </h2>

        <!-- Description -->
        <p class="font-noto text-sm sm:text-base text-gray-dim font-[350] leading-relaxed max-w-lg mx-auto mb-10">
          <template v-if="is404">
            <!-- Optical centering compensates for the trailing Japanese full stop's whitespace. -->
            <span class="block translate-x-[0.25em]">{{ (locale === 'en' ? 'The page you are looking for may have moved elsewhere.' : 'お探しのものは、別の場所にあるのかもしれません。') }}</span>
            <span class="block translate-x-[0.25em]">{{ (locale === 'en' ? 'Or the content may have been removed.' : 'もしくはコンテンツが削除された可能性があります。') }}</span>
          </template>
          <template v-else>
            {{ (locale === 'en' ? 'A temporary system issue or an unexpected problem occurred.' : 'システムの一時的な不具合、または予期しない問題が発生しました。') }}<br class="hidden sm:inline">
            {{ (locale === 'en' ? 'Please try again later, or return to the top page.' : '時間をおいて再度お試しいただくか、トップページへお戻りください。') }}
          </template>
        </p>

        <!-- Action Button -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            class="common-btn text-xs sm:text-sm py-3 px-8 inline-flex cursor-pointer"
            @click="handleClearError"
          >
            <span>{{ is404 ? (locale === 'en' ? 'Back to top' : 'トップページへ') : 'TOP PAGE' }}</span>
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

const pageTitle = computed(() => (is404.value ? '404 — NO ENTRY - TechnoTUT' : `${statusCode.value} Error - TechnoTUT`))
const { locale } = useI18n()
const pageDescription = computed(() =>
  is404.value ? (locale.value === 'en' ? 'Nothing was found here. The page you are looking for may have moved elsewhere.' : 'ここには、何もありませんでした。お探しのものは、別の場所にあるのかもしれません。') : (locale.value === 'en' ? 'An internal server error occurred.' : 'サーバー内部でエラーが発生しました。'),
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
