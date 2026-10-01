<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent w-full"
  >
    <div class="w-full px-6 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 flex items-center justify-between">
      <!-- Left: Larger Logo & Subtitle -->
      <NuxtLink to="/" class="flex items-center gap-5 sm:gap-6 group">
        <img
          src="/images/logo/logo.svg"
          alt="TechnoTUT logo"
          class="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />
        <p class="hidden sm:block text-xs sm:text-sm lg:text-base font-quicksand tracking-wider text-white/90">
          Music &amp; Live production Club - TechnoTUT
        </p>
      </NuxtLink>

      <!-- Right: University & Club Name pushed to far right -->
      <div class="text-right">
        <p class="text-xs sm:text-sm lg:text-base font-zen text-white/80 font-light tracking-wide">
          豊橋技術科学大学 音楽技術部
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Completely transparent top header with full-width edge-to-edge layout
</script>
