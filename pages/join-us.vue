<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="mb-12 border-b border-white/10 pb-6">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-brand uppercase mb-2">
        RECRUITMENT &amp; JOIN US
      </p>
      <h1 class="font-quicksand font-light text-4xl sm:text-6xl text-white tracking-tight">
        Join TechnoTUT
      </h1>
      <p class="mt-4 text-sm sm:text-base font-noto text-gray-dim font-[350] max-w-2xl leading-relaxed">
        音楽技術部では、学年・学部・経験を問わず、音楽や音響・映像演出・テクノロジーに興味のある新入部員を随時募集しています！
      </p>
    </div>

    <!-- Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div class="p-6 rounded-2xl bg-dark-panel border border-white/10 flex flex-col justify-between">
        <div>
          <span class="rounded-outline-text text-xs mb-3">WHO CAN JOIN</span>
          <h3 class="font-noto text-xl font-light text-white mb-3">初心者大歓迎</h3>
          <p class="text-xs sm:text-sm font-noto text-gray-400 font-[350] leading-relaxed">
            部員の多くは大学に入ってからDJやDTM、音響機材、VJを始めています。先輩が機材の使い方や制作の基礎を一からサポートします。
          </p>
        </div>
      </div>

      <div class="p-6 rounded-2xl bg-dark-panel border border-white/10 flex flex-col justify-between">
        <div>
          <span class="rounded-outline-text text-xs mb-3">EQUIPMENT</span>
          <h3 class="font-noto text-xl font-light text-white mb-3">充実の機材環境</h3>
          <p class="text-xs sm:text-sm font-noto text-gray-400 font-[350] leading-relaxed">
            部室やコモンズ1にはプロ仕様のDJコントローラー、大型PAスピーカー、照明機器、配信用サーバーが整っており、自由に触ることができます。
          </p>
        </div>
      </div>

      <div class="p-6 rounded-2xl bg-dark-panel border border-white/10 flex flex-col justify-between">
        <div>
          <span class="rounded-outline-text text-xs mb-3">LIFESTYLE</span>
          <h3 class="font-noto text-xl font-light text-white mb-3">兼部・自由参加OK</h3>
          <p class="text-xs sm:text-sm font-noto text-gray-400 font-[350] leading-relaxed">
            研究や学業、他サークルとの兼部も大歓迎です。自分のペースに合わせてイベントや制作活動に関わることができます。
          </p>
        </div>
      </div>
    </div>

    <!-- Entry Steps -->
    <div class="mb-16 p-8 rounded-2xl bg-dark-panel border border-white/10">
      <h2 class="font-noto text-2xl font-light text-white mb-8 title-with-line">
        入部の流れ
      </h2>
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <span class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-quicksand text-sm text-brand flex-shrink-0">
            1
          </span>
          <div>
            <h4 class="font-noto text-lg text-white font-medium">部室見学またはオンライン相談</h4>
            <p class="text-sm font-noto font-[350] text-gray-400 mt-1">
              まずはクラブハウス2階の部室へお気軽にお越しいただくか、公式X（Twitter）のDMまたはメールでお問い合わせください。
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <span class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-quicksand text-sm text-brand flex-shrink-0">
            2
          </span>
          <div>
            <h4 class="font-noto text-lg text-white font-medium">Discord サーバーへの参加</h4>
            <p class="text-sm font-noto font-[350] text-gray-400 mt-1">
              日々の連絡、制作進捗の共有、機材談義はサークル公式Discord上で行われています。
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <span class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-quicksand text-sm text-brand flex-shrink-0">
            3
          </span>
          <div>
            <h4 class="font-noto text-lg text-white font-medium">入部届の提出・活動スタート</h4>
            <p class="text-sm font-noto font-[350] text-gray-400 mt-1">
              興味のある班（DJ, DTM, VJ/LJ, Media, Tech/DIY, ら）に参加し、自由に活動を楽しんでいただけます。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="text-center p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <h3 class="font-noto text-2xl font-light text-white mb-3">質問・見学希望はお気軽に</h3>
      <p class="text-sm font-noto font-[350] text-gray-400 max-w-xl mx-auto mb-6">
        「機材を一度触ってみたい」「どんな楽曲を作っているか知りたい」など、少しでも気になったらご連絡ください！
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://twitter.com/toyohashitechno"
          target="_blank"
          rel="noopener noreferrer"
          class="common-btn text-xs py-2 px-6"
        >
          <span>公式𝕏のDMはこちら</span>
          <span>&rarr;</span>
        </a>
        <NuxtLink to="/faq" class="px-6 py-2 rounded-full border border-white/30 text-xs font-quicksand hover:bg-white/10 transition-colors">
          よくある質問 (FAQ)
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '入部案内 (Join Us) - TechnoTUT',
  description: '豊橋技術科学大学 音楽技術部 (TechnoTUT) の新入部員募集案内',
})
</script>
