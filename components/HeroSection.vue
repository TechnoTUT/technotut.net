<template>
  <section class="relative min-h-screen w-full overflow-hidden bg-dark flex flex-col justify-end pb-8">
    <!-- Background visual layer -->
    <div class="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
      <img
        src="/images/home/hero-bg.png"
        alt="TechnoTUT Hero Background"
        class="w-full h-full object-cover object-center opacity-70 animate-fadein filter contrast-125"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark"></div>
    </div>

    <!-- Giant Interactive Typography Nav (Positioned at bottom-left) -->
    <div class="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-16 sm:pb-20">
      <div class="space-y-1 sm:space-y-1.5 md:space-y-2 font-quicksand font-light">
        <div class="overflow-hidden leading-none">
          <NuxtLink
            to="/activity"
            class="hero-choice inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/90 hover:text-white transition-all cursor-pointer tracking-wider"
          >
            SCHEDULE
          </NuxtLink>
        </div>
        <div class="overflow-hidden leading-none">
          <NuxtLink
            to="/activity"
            class="hero-choice inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/90 hover:text-white transition-all cursor-pointer tracking-wider"
          >
            ACTIVITY
          </NuxtLink>
        </div>
        <div class="overflow-hidden leading-none">
          <NuxtLink
            to="/access"
            class="hero-choice inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/90 hover:text-white transition-all cursor-pointer tracking-wider"
          >
            ACCESS
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll Guide Indicator (Bottom Center) -->
    <div class="relative z-10 flex justify-center pb-2 pointer-events-none">
      <img
        src="/images/home/scroll.svg"
        alt="Scroll down"
        class="w-48 sm:w-60 md:w-72 opacity-80"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section
</script>
