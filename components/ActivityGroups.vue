<template>
  <div>
    <p class="font-noto font-light text-gray-300 leading-8">
      自分の興味に合わせ、好きな活動班に自由に参加でき、複数のグループに関わることも可能です。制約や強制は一切なく、自分のペースで、心が動くままに楽しめる場所です。
    </p>

    <nav aria-label="活動班とスケジュールの目次" class="mt-10 mb-10 sm:mb-12">
      <p class="font-noto text-xs tracking-widest text-gray-400 mb-4">目次</p>
      <ol class="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-2 list-none p-0 m-0">
        <li v-for="(group, index) in groups" :key="group.id" class="min-w-0">
          <NuxtLink :to="`/activity#${group.id}`" class="activity-index-link">
            <span aria-hidden="true" class="font-quicksand text-xs text-gray-400">{{ String(index + 1).padStart(2, '0') }}</span>
            <span :class="group.id === 'ramen' ? 'font-noto' : 'font-quicksand'" class="text-sm tracking-wide">{{ group.label }}</span>
          </NuxtLink>
        </li>
        <li class="min-w-0">
          <NuxtLink to="/activity#schedule" class="activity-index-link">
            <span class="font-noto text-sm">活動予定・実績</span>
          </NuxtLink>
        </li>
      </ol>
    </nav>

    <section v-for="(group, index) in groups" :id="group.id" :key="group.id" :aria-labelledby="`${group.id}-heading`" class="group-section border-t border-white/10 py-12 sm:py-16">
      <div class="grid gap-6 sm:gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p class="font-quicksand text-xs tracking-[0.2em] text-gray-400 mb-4">{{ String(index + 1).padStart(2, '0') }} / ACTIVITY</p>
          <h2 :id="`${group.id}-heading`" class="font-quicksand font-light text-3xl sm:text-4xl tracking-wide">{{ group.label }}</h2>
          <p v-if="group.title.toLowerCase() !== group.label.toLowerCase()" class="font-noto text-sm text-gray-400 mt-3">{{ group.title }}</p>
        </div>
        <div class="font-noto font-light leading-8">
          <h3 v-if="group.tagline" class="text-xl text-white mb-5">{{ group.tagline }}</h3>
          <p v-for="paragraph in group.paragraphs" :key="paragraph" class="text-gray-300 mb-4">{{ paragraph }}</p>
          <div v-if="group.links.length" class="flex flex-wrap gap-4 mt-6">
            <NuxtLink v-for="link in group.links" :key="link.href" :to="link.href" class="common-btn text-sm">
              {{ link.label }} <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="group.images.length" class="grid gap-6 mt-8 sm:mt-10" :class="group.images.length > 1 ? 'sm:grid-cols-2' : ''">
        <figure v-for="image in group.images" :key="image.src">
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            format="webp"
            class="w-full rounded-none bg-dark-panel"
            :class="group.id === 'media' ? 'h-80 sm:h-96 object-contain p-4' : 'aspect-[16/10] object-cover'"
          />
          <figcaption v-if="group.id === 'media'" class="font-noto text-xs text-gray-400 mt-3 leading-relaxed">
            {{ image.src.includes('media-1') ? 'テクノ部公式キャラクター テクノちゃん（みにまむてくのちゃん ver.）' : 'Flyer / 2024.07.13 Collaboration with GilleWorkers' }}
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import groups from '~/data/activity-groups.json'
</script>

<style scoped>
.activity-index-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 3rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #d1d5db;
  transition: color 200ms ease, border-color 200ms ease;
}

.activity-index-link:hover {
  color: #fff;
  border-color: #fff;
}

.activity-index-link:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .activity-index-link {
    transition: none;
  }
}

.group-section:target h2 {
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.3);
  text-underline-offset: 0.3em;
  text-decoration-thickness: 1px;
}
</style>
