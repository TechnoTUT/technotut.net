<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2">
            TechnoTUT Presents - Music Production
          </p>
          <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
            Discography
          </h2>
        </div>

        <!-- Bandcamp Link in Header -->
        <div class="self-start md:self-end">
          <a
            href="https://technotut.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="common-btn text-xs py-2 px-5 inline-flex items-center gap-2"
          >
            <span>BANDCAMP</span>
            <span>&nearr;</span>
          </a>
        </div>
      </div>

      <!-- Jacket Grid (Seamless, no gap, all 27 albums) -->
      <div class="grid grid-cols-3 md:grid-cols-9 gap-0">
        <a
          v-for="item in releases"
          :key="item.id"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block relative aspect-square overflow-hidden bg-neutral-900 hover:opacity-85 transition-opacity"
          :aria-label="`${item.title} (Bandcamp)`"
        >
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="w-full h-full object-cover"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import releases from '~/data/discography.json'
</script>
