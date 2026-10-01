<template>
  <section class="relative min-h-screen w-full overflow-hidden bg-dark flex flex-col justify-end pb-8">
    <!-- Background visual layer -->
    <div class="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
      <img
        src="/images/home/hero-bg.png"
        alt="TechnoTUT Hero Background"
        class="w-full h-full object-cover object-center opacity-70 animate-fadein filter contrast-125"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark"/>
    </div>
    <nav aria-label="Homepage main links" class="relative z-10 px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16">
      <ul class="hero-choices font-quicksand">
        <li v-for="link in links" :key="link.label">
          <NuxtLink :to="link.to" class="hero-choice">
            <svg class="hero-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16M13 5l7 7-7 7" /></svg>
            <span class="menu-label">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <a href="#activity" class="relative z-10 self-center p-3">
      <img src="/images/home/scroll.svg" alt="" class="w-40 sm:w-48 opacity-80" >
    </a>
  </section>
</template>
<script setup lang="ts">
const links = [
  { label: 'SCHEDULE', to: '/activity' },
  { label: 'ACTIVITY', to: '/activity' },
  { label: 'ACCESS', to: '/access' },
]
</script>
<style scoped>
.hero-section { min-height: 100svh; padding-top: 128px; }
.hero-choices { display: flex; flex-direction: column; gap: 12px; }
.hero-choice { display: inline-flex; align-items: center; gap: 24px; min-height: 48px; padding-block: 4px; font-size: clamp(2rem, 4vw, 3rem); font-weight: 300; line-height: 1.2; color: white; }
.hero-arrow { width: .7em; height: .7em; flex-shrink: 0; overflow: visible; }
</style>
