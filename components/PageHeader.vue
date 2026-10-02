<template>
  <div class="mb-12 border-b border-white/10 pb-6">
    <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
      {{ eyebrow }}
    </p>
    <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
      {{ title }}
    </h1>
    <p v-if="description" class="mt-4 text-sm font-noto text-gray-dim font-[350] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>
