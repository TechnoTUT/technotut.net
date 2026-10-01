<template>
  <header class="site-header fixed inset-x-0 top-0 z-50" :class="{ 'is-compact': showLinks }">
    <div class="header-row">
      <NuxtLink to="/" class="shrink-0" aria-label="TechnoTUT ホーム">
        <img src="/images/logo/logo.svg" alt="TechnoTUT" class="h-10 sm:h-12 md:h-14 w-auto" />
      </NuxtLink>
      <div class="header-content">
        <Transition name="header-switch" mode="out-in">
          <p v-if="!showLinks" key="subtitle" class="header-subtitle font-quicksand">Music &amp; Live production Club - TechnoTUT</p>
          <nav v-else key="links" class="header-links font-quicksand" aria-label="メインナビゲーション">
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/activity">ACTIVITY</NuxtLink>
            <NuxtLink to="/gikadaifes">GIKADAIFES</NuxtLink>
            <NuxtLink to="/access">ACCESS</NuxtLink>
            <NuxtLink to="/faq">FAQ</NuxtLink>
            <NuxtLink to="/join-us">JOIN US</NuxtLink>
          </nav>
        </Transition>
      </div>
      <p class="header-university font-zen" :class="{ 'compact-university': showLinks }">豊橋技術科学大学 音楽技術部</p>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const scrolled = ref(false)
const showLinks = computed(() => route.path !== '/' || scrolled.value)
const updateScroll = () => {
  if (window.scrollY >= 48) scrolled.value = true
  else if (window.scrollY <= 16) scrolled.value = false
}
onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', updateScroll))
</script>

<style scoped>
.site-header { background: linear-gradient(to bottom, #050505 0%, rgba(5,5,5,.90) 28%, rgba(5,5,5,0) 100%); padding-bottom: 0; }
.header-row { min-height: 88px; display: flex; align-items: center; gap: 20px; padding: 16px 24px; }
.header-content { flex: 1; min-width: 0; }
.header-subtitle { display: none; color: rgba(255,255,255,.9); font-size: 14px; }
.header-university { margin-left: auto; text-align: right; font-size: 12px; font-weight: 300; }
.header-links { display: flex; flex-wrap: wrap; gap: 0 12px; font-size: 12px; font-weight: 300; }
.header-links a { display: inline-flex; align-items: center; min-height: 44px; white-space: nowrap; text-decoration: none; transition: opacity .4s ease, letter-spacing .4s ease; }
.header-links a:hover, .header-links a:focus-visible { opacity: .75; letter-spacing: .06em; }
.header-switch-enter-active, .header-switch-leave-active { transition: opacity .18s ease, transform .18s ease; }
.header-switch-enter-from { opacity: 0; transform: translateY(5px); }
.header-switch-leave-to { opacity: 0; transform: translateY(-5px); }

.compact-university { display: none; }
@media (min-width: 640px) {
  .header-row { min-height: 104px; padding: 20px 40px; gap: 24px; }
  .header-subtitle { display: block; }
  .header-links { font-size: 14px; gap: 0 20px; }
}
@media (min-width: 1024px) {
  .header-row { padding-inline: 64px; }
  .header-links { font-size: 16px; gap: 0 24px; }
  .header-university { font-size: 16px; }
}
@media (min-width: 1440px) { .compact-university { display: block; } }
@media (max-width: 359px) { .header-row { padding-inline: 16px; gap: 12px; } .header-links { font-size: 11px; gap: 8px; } }
</style>
