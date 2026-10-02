<template>
  <section class="relative min-h-screen w-full overflow-hidden bg-dark flex flex-col justify-end pb-8">
    <!-- Background visual layer -->
    <div class="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
      <NuxtImg
        src="/images/home/hero-bg.png"
        alt="TechnoTUT Hero Background"
        format="webp"
        class="w-full h-full object-cover object-center opacity-70 animate-fadein"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark"/>
    </div>
    <nav aria-label="Homepage main links" class="relative z-10 px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16">
      <ul class="hero-choices font-quicksand">
        <li v-for="(link, idx) in links" :key="link.label">
          <NuxtLink :to="link.to" class="hero-choice">
            <svg class="hero-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16M13 5l7 7-7 7" /></svg>
            <span class="relative inline-block overflow-hidden pb-0.5">
              <span class="menu-label">{{ link.label }}</span>
              <span
                aria-hidden="true"
                class="block-reveal-mask"
                :class="isMounted ? 'block-reveal-active' : ''"
                :style="{ animationDelay: `${idx * 80}ms` }"
              />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <a
      href="#concept"
      class="relative z-10 self-center p-3 cursor-pointer"
      aria-label="Scroll to Concept section"
      @click.prevent="scrollToConcept"
    >
      <svg
        viewBox="0 0 298.46 55.32"
        class="w-40 sm:w-48 opacity-80"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="149.23"
          y="17.37"
          text-anchor="middle"
          fill="#e6e6e6"
          class="font-quicksand font-light"
          style="font-family: 'Quicksand', ShreeDev0714, 'Shree Devanagari 714', sans-serif; font-size: 20px; letter-spacing: 0.59em;"
        >SCROLL</text>
        <path
          fill="#fff"
          d="M149.23,31.6c-6.55,0-11.86,5.31-11.86,11.86s5.31,11.86,11.86,11.86,11.86-5.31,11.86-11.86-5.31-11.86-11.86-11.86ZM149.23,48.55l-6.19-6.19,2.04-2.04,4.15,4.14,4.14-4.14,2.04,2.04-6.19,6.19Z"
        />
        <rect fill="#fff" y="8.21" width="64" height="1" />
        <rect fill="#fff" x="234.46" y="8.71" width="64" height="1" />
      </svg>
    </a>
  </section>
</template>
<script setup lang="ts">
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

const links = [
  { label: 'ACTIVITY', to: '/activity' },
  { label: 'ACCESS', to: '/access' },
]

const scrollToConcept = () => {
  const heading = document.querySelector('#concept h2') as HTMLElement | null
  const fallback = document.getElementById('concept')
  const target = heading || fallback
  if (!target) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'center',
  })
  window.history.pushState(null, '', '#concept')
}
</script>
<style scoped>
.hero-choices { display: flex; flex-direction: column; gap: 12px; }
.hero-choice { display: inline-flex; align-items: center; gap: 24px; min-height: 48px; padding-block: 4px; font-size: clamp(2rem, 4vw, 4rem); font-weight: 300; line-height: 1.2; color: white; }
.hero-arrow { width: .7em; height: .7em; flex-shrink: 0; overflow: visible; }
</style>
