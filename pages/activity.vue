<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <PageHeader
      eyebrow="ACTIVITY &amp; RECORD"
      :title="$t('activity.title')"
      :description="$t('activity.description')"
    />

    <ActivityGroups />

    <div id="schedule" class="mt-24 sm:mt-32 border-t border-white/10 pt-12">
      <p class="font-quicksand text-xs tracking-[0.2em] text-gray-400 mb-3">RECORD</p>
      <h2 class="font-noto font-light text-3xl sm:text-4xl mb-8">{{ $t('activity.recordHeading') }}</h2>
      <!-- Sheet-backed schedule (loaded on the client). Falls back to the Markdown below when unavailable. -->
      <template v-if="scheduleGroups.length">
        <article
          class="schedule-content prose prose-invert prose-lg max-w-none font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-noto prose-p:font-[350] prose-p:text-gray-dim prose-headings:font-light prose-headings:text-white prose-table:border-collapse prose-th:border-b prose-th:border-white/20 prose-th:py-3 prose-th:text-white prose-td:border-b prose-td:border-white/10 prose-td:py-3"
        >
          <section v-for="group in scheduleGroups" :key="group.key">
            <h3>{{ group.label }}</h3>
            <table>
              <thead>
                <tr>
                  <th>{{ $t('activity.colDate') }}</th>
                  <th>{{ $t('activity.colActivity') }}</th>
                  <th>{{ $t('activity.colPlace') }}</th>
                  <th>{{ $t('activity.colDetails') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in group.items" :key="index">
                  <td>{{ item.date }}</td>
                  <td>
                    <a v-if="item.url" :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
                    <template v-else>{{ item.title }}</template>
                  </td>
                  <td>{{ item.place }}</td>
                  <td>{{ item.description }}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </template>
      <p v-else-if="scheduleStatus === 'error' || scheduleStatus === 'success'" class="font-noto text-gray-dim">
        {{ $t('activity.preparing') }}
      </p>
      <p v-else class="font-noto text-gray-dim">{{ $t('activity.loading') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ScheduleItem {
  fiscalYear: string
  category: string
  date: string
  title: string
  url: string
  place: string
  description: string
}

// Fetched at runtime (not during prerender) so sheet edits show without rebuilding.
// Until it loads, or when the sheet is unavailable, the section shows a placeholder.
const { data: scheduleItems, status: scheduleStatus } = await useFetch<ScheduleItem[]>('/api/schedule', {
  server: false,
  default: () => [],
})

const scheduleGroups = computed(() => {
  const groups = new Map<string, { key: string; label: string; items: ScheduleItem[] }>()
  for (const item of scheduleItems.value ?? []) {
    const key = `${item.fiscalYear}|${item.category}`
    if (!groups.has(key)) {
      groups.set(key, { key, label: item.category, items: [] })
    }
    groups.get(key)!.items.push(item)
  }
  return [...groups.values()]
})

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('activity.seoTitle')} - TechnoTUT`,
  description: () => t('activity.seoDescription'),
})
</script>

<style scoped>
.schedule-content :deep(a) {
  color: #ff858b;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25em;
}

.schedule-content :deep(a:hover) {
  color: #fff;
}

.schedule-content :deep(:is(h2, h3, h4, h5, h6) a) {
  color: inherit;
  text-decoration: none;
}

.schedule-content :deep(:is(h2, h3, h4, h5, h6) a:hover) {
  text-decoration: underline;
}

.schedule-content :deep(table) {
  display: block;
  overflow-x: auto;
}
</style>

<i18n lang="json">
{
  "ja": {
    "activity": {
      "title": "活動情報",
      "description": "音楽、映像、デザイン、テクノロジー。TechnoTUT の各班の活動と、年間スケジュール・活動実績を紹介します。",
      "colDate": "日程",
      "colActivity": "活動名",
      "colPlace": "場所",
      "colDetails": "内容",
      "preparing": "活動予定・実績は現在準備中です。",
      "loading": "読み込み中…",
      "seoTitle": "活動情報",
      "seoDescription": "豊橋技術科学大学 音楽技術部 (TechnoTUT) の各班の活動紹介・活動予定・実績",
      "recordHeading": "活動予定・実績"
    }
  },
  "en": {
    "activity": {
      "title": "Activities",
      "description": "Music, video, design, and technology. Introducing TechnoTUT's activity groups, annual schedule, and past activities.",
      "colDate": "Date",
      "colActivity": "Activity",
      "colPlace": "Place",
      "colDetails": "Details",
      "preparing": "The schedule and records are currently being prepared.",
      "loading": "Loading…",
      "seoTitle": "Activities",
      "seoDescription": "Activity groups, schedule, and records of the Toyohashi University of Technology Music & Live production Club (TechnoTUT)",
      "recordHeading": "Schedule & Records"
    }
  }
}
</i18n>
