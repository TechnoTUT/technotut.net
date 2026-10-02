<template>
  <!-- Compact Variant (Homepage AccessSection) -->
  <div
    v-if="variant === 'compact'"
    class="relative overflow-hidden aspect-[16/10] bg-dark group shadow-lg"
  >
    <NuxtImg
      :src="commonsPhotos[currentIndex]"
      alt="Commons 1 Photo"
      format="webp"
      class="w-full h-full object-cover transition-opacity duration-300"
    />
    <!-- Floating photo count & controls -->
    <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex items-center justify-between">
      <span class="text-[11px] font-quicksand text-gray-300">
        {{ currentIndex + 1 }} / {{ commonsPhotos.length }}
      </span>
      <div class="flex items-center gap-1.5">
        <button
          type="button"
          class="w-11 h-11 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
          aria-label="Previous photo"
          @click="prevPhoto"
        >
          &larr;
        </button>
        <button
          type="button"
          class="w-11 h-11 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
          aria-label="Next photo"
          @click="nextPhoto"
        >
          &rarr;
        </button>
      </div>
    </div>
  </div>

  <!-- Full Variant (Access page detail) -->
  <div
    v-else
    class="relative overflow-hidden border border-white/10 bg-dark min-h-[360px] h-full flex flex-col group shadow-lg"
  >
    <!-- Photo Display Area -->
    <div class="relative w-full flex-grow min-h-[300px] sm:min-h-[360px] flex items-center justify-center p-4">
      <NuxtImg
        v-for="(photo, index) in commonsPhotos"
        :key="photo"
        :src="photo"
        format="webp"
        :alt="`コモンズ1への行き方 写真 ${index + 1}`"
        class="absolute max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] object-contain transition-opacity duration-700 ease-in-out"
        :class="currentIndex === index ? 'opacity-100 z-1 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'"
      />
    </div>
    <!-- Dedicated Controls Bar (Separated from photo) -->
    <div class="p-3 sm:p-4 border-t border-white/10 bg-black/30 flex items-center justify-between">
      <span class="text-xs font-quicksand text-gray-300 tracking-wider">
        STEP {{ currentIndex + 1 }} / {{ commonsPhotos.length }}
      </span>
      <div class="flex items-center gap-2">
        <!-- Play / Pause Button -->
        <button
          v-if="autoplay"
          type="button"
          class="w-10 h-10 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
          :title="isPlaying ? '自動切り替えを一時停止' : '自動切り替えを再開'"
          :aria-label="isPlaying ? '自動切り替えを一時停止' : '自動切り替えを再開'"
          @click="togglePlayPause"
        >
          <!-- Pause Icon (shown when playing) -->
          <svg v-if="isPlaying" class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
          <!-- Play Icon (shown when paused) -->
          <svg v-else class="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <button
          type="button"
          class="w-10 h-10 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
          aria-label="前の写真"
          @click="onManualPrev"
        >
          &larr;
        </button>
        <button
          type="button"
          class="w-10 h-10 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-xs text-white hover:border-white transition-colors cursor-pointer"
          aria-label="次の写真"
          @click="onManualNext"
        >
          &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { commonsPhotos } from '~/data/commons-photos'

const props = withDefaults(
  defineProps<{
    variant?: 'compact' | 'full'
    modelValue?: number
    autoplay?: boolean
    interval?: number
  }>(),
  {
    variant: 'full',
    modelValue: undefined,
    autoplay: false,
    interval: 4000,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const internalIndex = ref(0)

const currentIndex = computed({
  get: () => (props.modelValue !== undefined ? props.modelValue : internalIndex.value),
  set: (val: number) => {
    internalIndex.value = val
    emit('update:modelValue', val)
  },
})

const isPlaying = ref(props.autoplay)
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

const startAutoPlay = () => {
  stopAutoPlay()
  if (isPlaying.value && props.autoplay) {
    autoPlayTimer = setInterval(() => {
      nextPhoto()
    }, props.interval)
  }
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const togglePlayPause = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

const prevPhoto = () => {
  currentIndex.value =
    (currentIndex.value - 1 + commonsPhotos.length) % commonsPhotos.length
}

const nextPhoto = () => {
  currentIndex.value =
    (currentIndex.value + 1) % commonsPhotos.length
}

const onManualPrev = () => {
  prevPhoto()
  if (isPlaying.value && props.autoplay) startAutoPlay()
}

const onManualNext = () => {
  nextPhoto()
  if (isPlaying.value && props.autoplay) startAutoPlay()
}

watch(
  () => props.modelValue,
  () => {
    if (isPlaying.value && props.autoplay) {
      startAutoPlay()
    }
  },
)

onMounted(() => {
  if (props.autoplay) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>
