<template>
  <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
    <div ref="targetRef">
      <p
        class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2 transition-all duration-500 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
      >
        {{ eyebrow }}
      </p>
      <div class="relative inline-block overflow-hidden">
        <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
          {{ title }}
        </h2>
        <div
          aria-hidden="true"
          class="block-reveal-mask"
          :class="isVisible ? 'block-reveal-active' : ''"
        />
      </div>
      <p
        v-if="description"
        class="font-noto text-sm sm:text-base text-gray-dim font-light mt-4 max-w-2xl leading-relaxed tracking-wide transition-all duration-700 ease-out delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        {{ description }}
      </p>
    </div>

    <div v-if="$slots.action" class="self-start md:self-end">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()

const { targetRef, isVisible } = useScrollReveal()
</script>
