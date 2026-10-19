<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto font-noto">
    <header class="mb-14 sm:mb-20">
      <h1 class="font-light text-4xl sm:text-6xl text-white tracking-tight">{{ (locale === 'en' ? 'Join Us' : '入部案内') }}</h1>
      <p class="mt-6 text-base text-gray-dim font-light leading-8">
        {{ (locale === 'en' ? 'TechnoTUT welcomes members of any year and experience level. If you are interested in DJing, making music, video and lighting, or equipment, feel free to drop by the club room.' : '音楽技術部では、学年や経験を問わず部員を募集しています。DJや曲作り、映像・照明、機材に興味がある方は、お気軽に部室見学にお越しください。') }}
      </p>
      <NuxtLinkLocale to="/access" class="join-link mt-5"><span>{{ (locale === 'en' ? 'How to get to the club room' : '部室への行き方') }}</span><span aria-hidden="true">→</span></NuxtLinkLocale>
    </header>

    <section aria-labelledby="activities-heading" class="border-t border-white/10 py-10 sm:py-12">
      <div class="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="activities-heading" class="text-2xl font-light text-white">{{ (locale === 'en' ? 'What can you do in the club?' : '部では何ができる？') }}</h2>
        <div class="text-base font-light text-gray-dim leading-8">
          <p>{{ (locale === 'en' ? 'We DJ in the club room and at on-campus events, and make music to distribute at M3. Video and lighting production, event operations, flyer design, and technology development that supports events are also part of our activities.' : '部室や学内イベントでDJをしたり、曲を作ってM3で頒布したりしています。映像や照明の演出、イベントの運営、フライヤーの制作、イベントを支える技術開発も部の活動です。') }}</p>
          <p class="mt-4">{{ (locale === 'en' ? 'You can take part in the activities that interest you, such as DJ, DTM, VJ/LJ, Media, and Tech & DIY.' : 'DJ、DTM、VJ・LJ、Media、Tech・DIYなど、興味のある活動に参加できます。') }}</p>
          <NuxtLinkLocale to="/activity" class="join-link mt-5"><span>{{ (locale === 'en' ? 'See activity groups and past activities' : '活動班と活動実績を見る') }}</span><span aria-hidden="true">→</span></NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section aria-labelledby="fees-heading" class="border-t border-white/10 py-10 sm:py-12">
      <div class="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="fees-heading" class="text-2xl font-light text-white">{{ (locale === 'en' ? 'Membership fees and trial membership' : '部費・体験入部') }}</h2>
        <div class="text-base font-light text-gray-dim leading-8">
          <p>{{ (locale === 'en' ? 'The membership fee is 1,000 yen for the first year and 2,000 yen per year from the second year onward. From the second year, please pay when you re-register.' : '部費は初年度1,000円、2年目以降は年額2,000円です。2年目以降は、再入部手続きの際にお支払いください。') }}</p>
          <p class="mt-4">{{ (locale === 'en' ? 'April of the first year is a provisional membership period. You can try out our activities without paying the fee.' : '初年度の4月は仮入部期間です。部費を払わずに活動を体験できます。') }}</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="visit-heading" class="border-t border-white/10 py-10 sm:py-12">
      <div class="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="visit-heading" class="text-2xl font-light text-white">{{ (locale === 'en' ? 'Visiting and joining' : '見学・入部について') }}</h2>
        <div class="text-base font-light text-gray-dim leading-8">
          <p>{{ (locale === 'en' ? 'To visit or try out the club, please come to the TechnoTUT club room on the 2nd floor of the clubhouse during activity hours.' : '見学・体験入部は、活動中にクラブハウス2階の音楽技術部室へお越しください。') }}</p>
          <p class="mt-4">{{ (locale === 'en' ? 'The club room may be occupied at times, so if you want to be sure of a visit, we recommend contacting us in advance.' : '部室は空いていないこともありますので、確実に見学をしたい方は事前にご連絡いただくことをおすすめします。') }}</p>
          <p class="mt-4">{{ (locale === 'en' ? 'Joining requires signing and stamping the member roster and paying the membership fee. Please bring your personal seal. Shachihata-brand stamps cannot be used.' : '入部には、部員名簿への署名・捺印と部費の支払いが必要です。印鑑をお持ちください。シャチハタは使用できません。') }}</p>
          <p class="mt-4">{{ (locale === 'en' ? 'For questions about experience and taking part in activities, please see our ' : '経験や活動への参加については、') }}<NuxtLinkLocale to="/faq" class="underline decoration-white/40 underline-offset-4 hover:text-white">{{ (locale === 'en' ? 'FAQ' : 'よくある質問') }}</NuxtLinkLocale>{{ (locale === 'en' ? '.' : 'をご覧ください。') }}</p>
          <p class="mt-4">{{ (locale === 'en' ? 'If you have questions before visiting, please reach out via DM on X or Instagram, or by email.' : '見学前に聞きたいことがあれば、X・InstagramのDMまたはメールでご連絡ください。') }}</p>
          <p class="mt-2">{{ (locale === 'en' ? 'Email: ' : 'メール：') }}<span class="whitespace-nowrap">contact [at] technotut.net</span><span class="block text-sm text-gray-400">{{ (locale === 'en' ? 'Replace [at] with @.' : '[at]を@に置き換えてください。') }}</span></p>
          <div class="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <a href="https://x.com/ToyohashiTechno" target="_blank" rel="noopener noreferrer" class="common-btn min-h-11 text-sm">
              <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
              </svg>
              {{ (locale === 'en' ? 'X profile' : 'Xのプロフィール') }} <span aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/tut_technotut/" target="_blank" rel="noopener noreferrer" class="common-btn min-h-11 text-sm">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              {{ (locale === 'en' ? 'Instagram profile' : 'Instagramのプロフィール') }} <span aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useSeoMeta({
  title: () => `${(locale.value === 'en' ? 'Join Us' : '入部案内')} - TechnoTUT`,
  description: () => (locale.value === 'en' ? 'Visiting and joining information for the Toyohashi University of Technology Music & Live production Club (TechnoTUT). Introduces our activities, how to get to the club room, membership procedures, and contact details.' : '豊橋技術科学大学 音楽技術部（TechnoTUT）の見学・入部案内。活動内容、部室への行き方、入部手続きと連絡先を紹介します。'),
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
