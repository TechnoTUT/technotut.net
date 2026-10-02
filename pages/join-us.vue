<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto font-noto">
    <header class="mb-14 sm:mb-20">
      <h1 class="font-light text-4xl sm:text-6xl text-white tracking-tight">入部案内</h1>
      <p class="mt-6 text-base text-gray-dim font-light leading-8">
        音楽技術部では、学年や経験を問わず部員を募集しています。
        DJや曲作り、映像・照明、機材に興味がある方は、お気軽に部室見学にお越しください。
      </p>
      <NuxtLink to="/access" class="join-link mt-5"><span>部室への行き方</span><span aria-hidden="true">→</span></NuxtLink>
    </header>

    <section aria-labelledby="activities-heading" class="border-t border-white/10 py-10 sm:py-12">
      <div class="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="activities-heading" class="text-2xl font-light text-white">部では何ができる？</h2>
        <div class="text-base font-light text-gray-dim leading-8">
          <p>部室や学内イベントでDJをしたり、曲を作ってM3で頒布したりしています。映像や照明の演出、イベントの運営、フライヤーの制作、イベントを支える技術開発も部の活動です。</p>
          <p class="mt-4">DJ、DTM、VJ・LJ、Media、Tech・DIYなど、興味のある活動に参加できます。</p>
          <NuxtLink to="/activity" class="join-link mt-5"><span>活動班と活動実績を見る</span><span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </section>

    <section aria-labelledby="fees-heading" class="border-t border-white/10 py-10 sm:py-12">
      <div class="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="fees-heading" class="text-2xl font-light text-white">部費・体験入部</h2>
        <div class="text-base font-light text-gray-dim leading-8">
          <p>部費は初年度1,000円、2年目以降は年額2,000円です。2年目以降は、再入部手続きの際にお支払いください。</p>
          <p class="mt-4">初年度の4月は仮入部期間です。部費を払わずに活動を体験できます。</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="visit-heading" class="border-t border-white/10 py-10 sm:py-12">
      <div class="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="visit-heading" class="text-2xl font-light text-white">見学・入部について</h2>
        <div class="text-base font-light text-gray-dim leading-8">
          <p>見学・体験入部は、活動中にクラブハウス2階の音楽技術部室へお越しください。</p>
          <p class="mt-4">部室は空いていないこともありますので、確実に見学をしたい方は事前にご連絡いただくことをおすすめします。</p>
          <p class="mt-4">入部には、部員名簿への署名・捺印と部費の支払いが必要です。印鑑をお持ちください。シャチハタは使用できません。</p>
          <p class="mt-4">経験や活動への参加については、<NuxtLink to="/faq" class="underline decoration-white/40 underline-offset-4 hover:text-white">よくある質問</NuxtLink>をご覧ください。</p>
          <p class="mt-4">見学前に聞きたいことがあれば、X・InstagramのDMまたはメールでご連絡ください。</p>
          <p class="mt-2">メール：<span class="whitespace-nowrap">contact [at] technotut.net</span><span class="block text-sm text-gray-400">[at]を@に置き換えてください。</span></p>
          <div class="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <a href="https://x.com/ToyohashiTechno" target="_blank" rel="noopener noreferrer" class="common-btn min-h-11 text-sm">
              <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
              </svg>
              Xのプロフィール <span aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/tut_technotut/" target="_blank" rel="noopener noreferrer" class="common-btn min-h-11 text-sm">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagramのプロフィール <span aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '入部案内 - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部（TechnoTUT）の見学・入部案内。活動内容、部室への行き方、入部手続きと連絡先を紹介します。',
})
</script>

<style scoped>
.join-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
  color: #d0d0d0;
  transition: color 0.2s ease;
}

.join-link > span:first-child {
  text-decoration: underline;
  text-decoration-color: rgb(255 255 255 / 40%);
  text-underline-offset: 0.3em;
  transition: text-decoration-color 0.2s ease;
}

.join-link:hover {
  color: #fff;
}

.join-link:hover > span:first-child {
  text-decoration-color: #fff;
}

h1, h2 {
  text-wrap: balance;
}
</style>
