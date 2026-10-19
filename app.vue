<template>
  <div class="min-h-screen bg-dark text-white font-noto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Sets <html lang> and locale alternate links for the current language.
const i18nHead = useLocaleHead({ addSeoAttributes: true })
useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs?.lang },
  link: () => i18nHead.value.link,
  meta: () => i18nHead.value.meta,
})
</script>
