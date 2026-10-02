<template>
  <section class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <SectionHeader
        eyebrow="TechnoTUT Presents - Music Production"
        title="Discography"
      >
        <template #action>
          <a
            href="https://technotut.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="common-btn text-xs py-2 px-5 inline-flex items-center gap-2"
          >
            <span>BANDCAMP</span>
            <span>&nearr;</span>
          </a>
        </template>
      </SectionHeader>

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
