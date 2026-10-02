<template>
  <div class="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Breadcrumb / Back Link -->
    <div class="mb-10">
      <NuxtLink
        to="/gikadaifes"
        class="text-xs font-quicksand tracking-wider text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
      >
        <span class="group-hover:-translate-x-1 transition-transform">&larr;</span>
        <span>BACK TO GIKADAIFES</span>
      </NuxtLink>
    </div>

    <!-- Hero / Title Header -->
    <header class="mb-16">
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="font-quicksand text-xs sm:text-sm tracking-widest text-brand uppercase font-medium">
          The Utopia Tone vol.11 Extended
        </span>
      </div>

      <div class="relative inline-block overflow-hidden mb-6">
        <h1 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
          技科大祭 2026
        </h1>
        <div aria-hidden="true" class="block-reveal-mask block-reveal-active" />
      </div>

      <div class="font-noto text-base sm:text-lg text-gray-dim font-[350] leading-relaxed max-w-3xl space-y-2">
        <p>お待たせいたしました！！</p>
        <p>
          10月10日（土）、10月11日（日）に開催される技科大祭にて、DJイベント「The Utopia Tone vol.11 Extended」を開催します！
        </p>
        <p class="text-white font-normal">
          入場無料で、学外の方もご参加いただけます！
        </p>
      </div>

      <!-- Key Info Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">DATE</p>
          <p class="font-noto text-sm text-white font-light">2026.10.10 (土) - 10.11 (日)</p>
        </div>
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">TIME</p>
          <p class="font-quicksand text-sm text-white font-light">10:00 - 17:00</p>
        </div>
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">PLACE</p>
          <p class="font-noto text-sm text-white font-light">福利施設1F「コモンズⅠ」</p>
        </div>
        <div class="p-4 bg-dark border border-white/10">
          <p class="font-quicksand text-xs text-gray-400 tracking-wider uppercase mb-1">ENTRANCE</p>
          <p class="font-noto text-sm text-white font-light">入場無料（一般来場可）</p>
        </div>
      </div>
    </header>

    <!-- Flyer Showcase -->
    <section class="mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <div class="flex items-center justify-center">
          <div class="w-full max-w-xs overflow-hidden border border-white/10 bg-dark aspect-[1/1.414]">
            <NuxtImg
              src="/images/gikadaifes/2026/2026flyer.png"
              alt="The Utopia Tone vol.11 Extended Flyer"
              format="webp"
              class="w-full h-full object-contain object-center"
            />
          </div>
        </div>
        <div class="flex flex-col justify-between py-2 space-y-6">
          <div class="space-y-6">
            <div>
              <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-2">CONCEPT</p>
              <h2 class="font-noto text-2xl sm:text-3xl font-light text-white leading-snug">
                The Utopia Tone vol.11 Extended
              </h2>
            </div>
            <div class="space-y-4 font-noto leading-relaxed">
              <div class="p-4 border border-white/10 bg-dark">
                <p class="font-quicksand text-xs tracking-wider text-white font-medium uppercase mb-1">Day 1：CLUB MUSIC</p>
                <p class="text-xs sm:text-sm text-gray-dim font-[350]">
                  ハウスやテクノ、ドラムンベース、ベースミュージックを中心とした、本格的なダンスミュージックのフロアです。
                </p>
              </div>
              <div class="p-4 border border-white/10 bg-dark">
                <p class="font-quicksand text-xs tracking-wider text-white font-medium uppercase mb-1">Day 2：SUBCULTURE</p>
                <p class="text-xs sm:text-sm text-gray-dim font-[350]">
                  アニメソングやゲーム音楽、VTuber楽曲、同人音楽などを中心とした、幅広いサブカルチャー音楽のフロアです。
                </p>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <NuxtLink to="/access" class="common-btn text-xs py-2 px-5 inline-flex">
              <span>会場アクセスを確認</span>
              <span>&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Stage Highlight Section -->
    <section class="mb-20 p-8 sm:p-10 bg-dark border border-white/10 relative overflow-hidden">
      <div>
        <div class="mb-4">
          <span class="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-quicksand tracking-wider uppercase font-medium">
            MAIN STAGE
          </span>
        </div>

        <h2 class="font-noto text-2xl sm:text-3xl font-light text-white mb-4">
          技科大祭メインステージ 出演者決定！！
        </h2>

        <p class="font-noto text-sm sm:text-base text-gray-dim font-[350] leading-relaxed mb-6 max-w-3xl">
          特設ステージ後方に設置される大型モニターを活用した、<span class="text-white font-normal">VJあり</span>のパフォーマンスとなります！
          ぜひメインステージを観に来てください！！
        </p>

        <!-- Stage Time Card (Uniform font size) -->
        <div class="p-4 sm:p-5 border border-white/10 bg-dark mb-6">
          <span class="text-xs font-quicksand tracking-widest text-gray-400 uppercase block mb-1">STAGE TIME</span>
          <p class="font-noto text-base sm:text-lg text-white font-light">
            2日目・10月11日（日） 12:00 ～ 12:40
          </p>
        </div>

        <!-- Performer Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <!-- DJ: Jokk4 -->
          <div class="p-5 border border-white/10 bg-dark">
            <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DJ</span>
            <p class="font-noto text-lg text-white font-light">Jokk4</p>
          </div>

          <!-- DJ: Taira -->
          <div class="p-5 border border-white/10 bg-dark">
            <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DJ</span>
            <p class="font-noto text-lg text-white font-light">Taira</p>
          </div>

          <!-- VJ: はっちゃん◈ -->
          <div class="p-5 border border-white/10 bg-dark">
            <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">VJ</span>
            <p class="font-noto text-lg text-white font-light">はっちゃん◈</p>
          </div>
        </div>

        <!-- Stage Location Map -->
        <div class="relative z-0 isolate border border-white/10 bg-dark overflow-hidden">
          <div class="p-4 sm:px-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-xs font-quicksand tracking-wider text-gray-400 uppercase block">LOCATION</span>
              <p class="font-noto text-sm sm:text-base text-white font-light">特設メインステージ（図書館前）</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=%E8%B1%8A%E6%A9%8B%E6%8A%80%E8%A1%93%E7%A7%91%E5%AD%A6%E5%A4%A7%E5%AD%A6%E9%99%84%E5%B1%9E%E5%9B%B3%E6%9B%B8%E9%A4%A8"
              target="_blank"
              rel="noopener noreferrer"
              class="common-btn text-xs py-1.5 px-4 inline-flex"
            >
              <span>Google Maps で開く</span>
              <span>&rarr;</span>
            </a>
          </div>
          <div class="relative w-full h-64 sm:h-80 map-dark-theme z-0">
            <div ref="stageMapContainerRef" class="w-full h-full z-0" />
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Artists Section -->
    <section class="mb-20">
      <div class="mb-10">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-2">LINEUP</p>
        <h2 class="font-quicksand font-light text-3xl sm:text-5xl text-white tracking-tight">
          GUEST ARTISTS
        </h2>
      </div>

      <!-- Day 1 Guests (3 Cards) -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-quicksand tracking-widest text-white uppercase font-medium">DAY 1</span>
          <span class="text-white/20">•</span>
          <span class="text-xs font-noto text-gray-400">10月10日（土） CLUB MUSIC</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 1. SyurV -->
          <div class="bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/2022-06-10_23.57.31.png"
                alt="SyurV"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ / TRACKMAKER</span>
                <h3 class="font-noto text-xl font-light text-white mb-3">SyurV</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  名古屋で主に活動しているDJ／トラックメイカー。Anti-Aging Record 2026現DJ班長。DnB、Psy、Experimentalを中心に、サブカルも含む幅広い音楽でDJをする。奇怪なトラックを作り、サークルメンバーに奇怪な音楽を布教する活動を行っている。
                </p>
              </div>
            </div>
          </div>

          <!-- 2. 飛田 -->
          <div class="bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/20a144d3d0cdbcdb.jpg"
                alt="飛田"
                format="webp"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ</span>
                <h3 class="font-noto text-xl font-light text-white mb-3">飛田</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  Liquid Funk／Deep Drum &amp; Bassを軸に、Bass Music Party「低音研究会」のCrewやLiquid Funk Party「Liquidense」の主催など、名古屋のBass Musicシーンにて精力的に活動中。
                </p>
              </div>
            </div>
          </div>

          <!-- 3. 大楽Chap -->
          <div class="bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/IMG_4298.jpg"
                alt="大楽Chap"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">MC / RAPPER</span>
                <h3 class="font-noto text-xl font-light text-white mb-3">大楽Chap（DaraChap）</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  愛知県春日井市出身のMC／ラッパー。HipHopやレゲエをルーツに持ち、巧みなフロウでUK Bassを乗りこなす。好きな食べ物は餃子。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Day 2 Guests (2 Cards centered) -->
      <div>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-quicksand tracking-widest text-white uppercase font-medium">DAY 2</span>
          <span class="text-white/20">•</span>
          <span class="text-xs font-noto text-gray-400">10月11日（日） SUBCULTURE</span>
        </div>
        <!-- Desktop: 6-column grid matching the 3-column width exactly, Mobile/Tablet: 1 or 2 cols -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <!-- 4. DJ石倉 (lg: col 2-3) -->
          <div class="lg:col-start-2 lg:col-span-2 bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/DJ石倉_アーティスト写真_1-1.png"
                alt="DJ石倉"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ / TRACKMAKER</span>
                <h3 class="font-noto text-xl font-light text-white mb-3">DJ石倉</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  都内在住のトラックメイカー／DJ。学マスを中心としたRemix・Mashupの制作やDJを行う一方、合成音声を使ったオリジナル楽曲も制作している。後輩たちには、学割が効くうちにSerum 2を買うことを勧めている。
                </p>
              </div>
            </div>
          </div>

          <!-- 5. おそクラ Crew (lg: col 4-5) -->
          <div class="lg:col-span-2 bg-dark border border-white/10 overflow-hidden flex flex-col group hover:border-white/30 transition-all">
            <div class="aspect-square bg-dark relative overflow-hidden">
              <NuxtImg
                src="/images/gikadaifes/2026/1621640444583.jpg"
                alt="おそクラ Crew"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-2">DJ PARTY CREW</span>
                <h3 class="font-noto text-xl font-light text-white mb-3">おそクラ Crew</h3>
                <p class="font-noto text-xs sm:text-sm text-gray-dim font-[350] leading-relaxed">
                  「遅いBPMで気持ちよくなりたい」という考えから生まれた、MAX BPM140・オールジャンルのDJイベント。さまざまな楽曲を楽しめるイベントとなっています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timetable Section -->
    <section class="mb-20">
      <div class="mb-10 text-center sm:text-left">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-2">SCHEDULE</p>
        <h2 class="font-quicksand font-light text-3xl sm:text-5xl text-white tracking-tight">
          TIMETABLE
        </h2>
      </div>

      <!-- Timetable Tabs -->
      <div class="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
        <button
          type="button"
          class="font-quicksand text-sm tracking-wider px-5 py-2.5 transition-all relative"
          :class="activeTimetableDay === 'day1' ? 'text-white bg-white/10 border-b-2 border-white' : 'text-gray-400 hover:text-white'"
          @click="activeTimetableDay = 'day1'"
        >
          <span class="font-medium mr-2">DAY 1</span>
          <span class="text-xs text-gray-400 font-noto">10/10 (土) CLUB MUSIC</span>
        </button>
        <button
          type="button"
          class="font-quicksand text-sm tracking-wider px-5 py-2.5 transition-all relative"
          :class="activeTimetableDay === 'day2' ? 'text-white bg-white/10 border-b-2 border-white' : 'text-gray-400 hover:text-white'"
          @click="activeTimetableDay = 'day2'"
        >
          <span class="font-medium mr-2">DAY 2</span>
          <span class="text-xs text-gray-400 font-noto">10/11 (日) SUBCULTURE</span>
        </button>
      </div>

      <!-- Active Day Panel: Day 1 -->
      <div v-show="activeTimetableDay === 'day1'" class="bg-dark border border-white/10 p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DAY 1</span>
              <h3 class="font-noto text-xl font-light text-white">10月10日（土）</h3>
            </div>
            <span class="text-xs font-quicksand tracking-widest text-brand-primary border border-brand-primary/30 px-3 py-1">CLUB MUSIC</span>
          </div>

          <!-- Schedule List -->
          <div class="divide-y divide-white/5 mb-8">
            <div
              v-for="slot in day1Schedule"
              :key="slot.time"
              class="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 transition-colors hover:bg-white/[0.02] px-2"
              :class="{ 'bg-white/[0.03]': slot.tag === 'GUEST' }"
            >
              <div class="flex items-baseline gap-3 shrink-0">
                <span class="font-mono text-xs sm:text-sm text-gray-400 font-light w-28">{{ slot.time }}</span>
                <div class="w-20 shrink-0 flex items-center">
                  <span
                    v-if="slot.tag"
                    class="text-xs font-quicksand font-medium tracking-wide w-full text-center py-0.5"
                    :class="slot.tag === 'GUEST' ? 'bg-[#C7000A] text-white font-semibold' : 'border border-white/20 text-gray-300'"
                  >
                    {{ slot.tag }}
                  </span>
                </div>
              </div>
              <div class="flex-grow text-left sm:text-right">
                <div class="font-noto text-sm font-light" :class="slot.tag === 'GUEST' ? 'text-white font-normal' : 'text-gray-200'">
                  {{ slot.artist }}
                </div>
                <div
                  v-if="slot.sub"
                  class="font-noto font-light mt-0.5"
                  :class="slot.tag === 'GUEST' ? 'text-sm text-white font-normal' : 'text-xs text-gray-400'"
                >
                  {{ slot.sub }}
                </div>
                <div v-if="slot.genre" class="text-xs font-quicksand text-gray-500 font-light mt-0.5">
                  {{ slot.genre }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flyer image preview (placed below schedule) -->
        <div class="pt-6 border-t border-white/10 mt-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-quicksand tracking-wider text-gray-400">TIMETABLE FLYER</span>
            <button
              type="button"
              class="text-xs font-quicksand text-gray-400 hover:text-white transition-colors"
              @click="activeModalImage = '/images/gikadaifes/2026/TT_1.png'"
            >
              画像を拡大表示 &rarr;
            </button>
          </div>
          <div
            class="overflow-hidden bg-dark border border-white/10 cursor-pointer group flex items-center justify-center p-2 max-w-2xl mx-auto"
            @click="activeModalImage = '/images/gikadaifes/2026/TT_1.png'"
          >
            <NuxtImg
              src="/images/gikadaifes/2026/TT_1.png"
              alt="1日目 タイムテーブル画像"
              format="webp"
              class="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>

      <!-- Active Day Panel: Day 2 -->
      <div v-show="activeTimetableDay === 'day2'" class="bg-dark border border-white/10 p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span class="text-xs font-quicksand tracking-wider text-gray-400 block mb-1">DAY 2</span>
              <h3 class="font-noto text-xl font-light text-white">10月11日（日）</h3>
            </div>
            <span class="text-xs font-quicksand tracking-widest text-brand-primary border border-brand-primary/30 px-3 py-1">SUBCULTURE</span>
          </div>

          <!-- Schedule List -->
          <div class="divide-y divide-white/5 mb-8">
            <div
              v-for="slot in day2Schedule"
              :key="slot.time"
              class="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 transition-colors hover:bg-white/[0.02] px-2"
              :class="{ 'bg-white/[0.03]': slot.tag === 'GUEST' }"
            >
              <div class="flex items-baseline gap-3 shrink-0">
                <span class="font-mono text-xs sm:text-sm text-gray-400 font-light w-28">{{ slot.time }}</span>
                <div class="w-20 shrink-0 flex items-center">
                  <span
                    v-if="slot.tag"
                    class="text-xs font-quicksand font-medium tracking-wide w-full text-center py-0.5"
                    :class="slot.tag === 'GUEST' ? 'bg-[#C7000A] text-white font-semibold' : 'border border-white/20 text-gray-300'"
                  >
                    {{ slot.tag }}
                  </span>
                </div>
              </div>
              <div class="flex-grow text-left sm:text-right">
                <div class="font-noto text-sm font-light" :class="slot.tag === 'GUEST' ? 'text-white font-normal' : 'text-gray-200'">
                  {{ slot.artist }}
                </div>
                <div v-if="slot.genre" class="text-xs font-quicksand text-gray-500 font-light mt-0.5">
                  {{ slot.genre }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flyer image preview (placed below schedule) -->
        <div class="pt-6 border-t border-white/10 mt-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-quicksand tracking-wider text-gray-400">TIMETABLE FLYER</span>
            <button
              type="button"
              class="text-xs font-quicksand text-gray-400 hover:text-white transition-colors"
              @click="activeModalImage = '/images/gikadaifes/2026/TT_2.png'"
            >
              画像を拡大表示 &rarr;
            </button>
          </div>
          <div
            class="overflow-hidden bg-dark border border-white/10 cursor-pointer group flex items-center justify-center p-2 max-w-2xl mx-auto"
            @click="activeModalImage = '/images/gikadaifes/2026/TT_2.png'"
          >
            <NuxtImg
              src="/images/gikadaifes/2026/TT_2.png"
              alt="2日目 タイムテーブル画像"
              format="webp"
              class="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for Zooming Timetable -->
    <Teleport to="body">
      <div
        v-if="activeModalImage"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        @click="activeModalImage = null"
      >
        <div class="relative max-w-4xl max-h-[90vh] overflow-auto border border-white/20 bg-dark p-2" @click.stop>
          <button
            type="button"
            class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            @click="activeModalImage = null"
          >
            ✕
          </button>
          <img :src="activeModalImage" alt="Timetable Zoom" class="w-full h-auto object-contain max-h-[85vh]">
        </div>
      </div>
    </Teleport>

    <!-- Footer Actions / Access -->
    <div class="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <NuxtLink to="/gikadaifes" class="common-btn text-xs py-2.5 px-6">
        <span>&larr; 一覧へ戻る</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from 'vue'
import type { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const activeModalImage = ref<string | null>(null)

// Day 1: 2026-10-10, Day 2: 2026-10-11
// Automatically select Day 2 only on the event day itself (Oct 11), otherwise default to Day 1
const getInitialTimetableDay = (): 'day1' | 'day2' => {
  const now = new Date()
  const currentMonth = now.getMonth() + 1 // 1-12
  const currentDate = now.getDate()
  // Only select Day 2 on October 11th
  if (currentMonth === 10 && currentDate === 11) {
    return 'day2'
  }
  return 'day1'
}

const activeTimetableDay = ref<'day1' | 'day2'>(getInitialTimetableDay())

interface TimetableSlot {
  time: string
  artist: string
  sub?: string
  genre?: string
  tag?: 'OPEN' | 'CLOSE' | 'GUEST' | 'OB' | 'Friendship'
}

const day1Schedule: TimetableSlot[] = [
  { time: '10:00 - 10:30', artist: 'roauri B2B kar', genre: 'House', tag: 'OPEN' },
  { time: '10:30 - 10:55', artist: 'hiziki', genre: 'UK Garage' },
  { time: '10:55 - 11:25', artist: 'さぎのや B2B DDlia B2B T_TEST__', genre: 'Trance', tag: 'OB' },
  { time: '11:25 - 11:50', artist: 'ドパるネット民の舞DJ', genre: 'Brazilian Phonk' },
  { time: '11:50 - 12:15', artist: '1000Shin', genre: 'Bass Music' },
  {
    time: '12:15 - 12:55',
    artist: 'SyurV',
    sub: 'Anti-Aging Record / サイケでリンク',
    tag: 'GUEST',
  },
  { time: '12:55 - 13:20', artist: 'wamo', genre: 'Gabba / Nerdcore Techno' },
  { time: '13:20 - 13:50', artist: 'なとりーむ B2B mikan', genre: 'Rhythm Game / Hardcore' },
  { time: '13:50 - 14:15', artist: 'Tobu', genre: 'UK / Happy Hardcore' },
  { time: '14:15 - 14:45', artist: "Red's Tone Records Crew", genre: 'Hardcore', tag: 'OB' },
  { time: '14:45 - 15:10', artist: 'ククリ', genre: 'Jet set radio' },
  { time: '15:10 - 15:35', artist: 'Exflikt', genre: 'Halftime, Digi-dub' },
  { time: '15:35 - 16:00', artist: 'yossy', genre: 'UK Dubstep' },
  {
    time: '16:00 - 16:40',
    artist: '飛田 [低音研究会 / Liquidense]',
    sub: 'MC: 大楽Chap [低音研究会 / Singal Rain]',
    tag: 'GUEST',
  },
  { time: '16:40 - 17:00', artist: 'Deek', genre: 'Drum and Bass', tag: 'CLOSE' },
]

const day2Schedule: TimetableSlot[] = [
  { time: '10:00 - 10:25', artist: 'はれくる', genre: 'VTuber', tag: 'OPEN' },
  { time: '10:25 - 10:55', artist: 'chinapi B2B ふじさん', genre: 'VOCALOID' },
  { time: '10:55 - 11:20', artist: 'きりしゃめ B2B null', genre: '東方Project', tag: 'Friendship' },
  { time: '11:20 - 11:45', artist: 'Mie-Una', genre: '東方Project / VOCALOID' },
  { time: '11:45 - 12:10', artist: 'タカハナ', genre: 'VOCALOID' },
  { time: '12:10 - 12:40', artist: 'ROS猫 B2B Tofu', genre: 'アニソン × ロック' },
  { time: '12:40 - 13:10', artist: 'ブルーハワイ B2B TERANiKi', genre: '俺たちの異次元フェス' },
  { time: '13:10 - 13:40', artist: 'ヨーソロー B2B ショー', genre: 'ラブライブ, アニソン' },
  { time: '13:40 - 14:10', artist: 'くう B2B Ac¢hi', genre: 'アニソン' },
  {
    time: '14:10 - 14:50',
    artist: 'おそクラ Crew',
    tag: 'GUEST',
  },
  { time: '14:50 - 15:15', artist: 'ニシノスケ', genre: 'アニソン' },
  { time: '15:15 - 15:40', artist: 'nikko', genre: 'アニソン × Dance Music' },
  {
    time: '15:40 - 16:20',
    artist: 'DJ石倉',
    tag: 'GUEST',
  },
  { time: '16:20 - 16:45', artist: 'はっちゃん◆', genre: 'OTAKU Dance Music' },
  { time: '16:45 - 17:00', artist: 'NMssan', genre: 'VGM', tag: 'CLOSE' },
]

const stageMapContainerRef = ref<HTMLElement | null>(null)
const stageMapInstance = shallowRef<LeafletMap | null>(null)
let resizeObserver: ResizeObserver | null = null

const STAGE_COORDS: [number, number] = [34.701105, 137.410074]

onMounted(async () => {
  if (!import.meta.client || !stageMapContainerRef.value) return

  try {
    const L = await import('leaflet')

    const map = L.map(stageMapContainerRef.value, {
      center: STAGE_COORDS,
      zoom: 18,
      zoomControl: false,
      attributionControl: true,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Add zoom control to top-right
    L.control.zoom({ position: 'topright' }).addTo(map)

    // Custom Stage Marker Pin
    const stageIcon = L.divIcon({
      className: 'leaflet-custom-marker-wrapper',
      html: `
        <div class="marker-point marker-brand" role="button" aria-label="技科大祭メインステージ">
          <div class="marker-pulse"></div>
          <div class="marker-core"></div>
          <div class="marker-label">メインステージ (図書館前)</div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -14],
    })

    const popupHtml = `
      <div class="technotut-popup-content">
        <span class="popup-badge">MAIN STAGE</span>
        <h4 class="popup-title">技科大祭 特設メインステージ</h4>
        <p class="popup-desc">図書館前広場 特設ステージ<br>10月11日（日） 12:00～12:40 出演</p>
      </div>
    `

    const marker = L.marker(STAGE_COORDS, { icon: stageIcon })
      .bindPopup(popupHtml, {
        closeButton: false,
        className: 'technotut-leaflet-popup',
      })
      .addTo(map)

    marker.openPopup()

    stageMapInstance.value = map

    if (typeof ResizeObserver !== 'undefined' && stageMapContainerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        map.invalidateSize()
      })
      resizeObserver.observe(stageMapContainerRef.value)
    }

    setTimeout(() => map.invalidateSize(), 200)
    setTimeout(() => map.invalidateSize(), 600)
  } catch (err) {
    console.error('Failed to initialize stage map:', err)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  if (stageMapInstance.value) {
    stageMapInstance.value.remove()
    stageMapInstance.value = null
  }
})

useSeoMeta({
  title: '[イベント告知] 2026 技科大祭 - TechnoTUT',
  description: '技科大祭にて『The Utopia Tone vol.11 Extended』を開催します！出演ゲストアーティストやタイムテーブル、ステージ情報を公開中。',
  ogTitle: '[イベント告知] 2026 技科大祭 - TechnoTUT',
  ogDescription: '技科大祭にて『The Utopia Tone vol.11 Extended』を開催します！入場無料・一般来場歓迎！',
  ogImage: 'https://technotut.net/images/gikadaifes/2026/2026flyer.png',
})
</script>

<style>
/* Leaflet Dark Theme & Custom Pins */
.map-dark-theme .leaflet-container {
  background: #050505 !important;
}

.map-dark-theme .leaflet-tile-pane {
  filter: invert(100%) hue-rotate(180deg) grayscale(100%) brightness(150%) contrast(135%);
}

.leaflet-custom-marker-wrapper {
  background: transparent !important;
  border: none !important;
}

.marker-point {
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-pulse {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.marker-core {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  border: 2px solid #ffffff;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.marker-brand .marker-pulse {
  background-color: rgba(199, 0, 10, 0.4);
}
.marker-brand .marker-core {
  background-color: #c7000a;
}

.marker-label {
  position: absolute;
  top: -24px;
  white-space: nowrap;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  background-color: rgba(5, 5, 5, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1px 6px;
  border-radius: 4px;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.technotut-leaflet-popup .leaflet-popup-content-wrapper {
  background: #080808 !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 6px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6) !important;
  padding: 4px !important;
}

.technotut-leaflet-popup .leaflet-popup-tip {
  background: #080808 !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-top-color: transparent !important;
  border-left-color: transparent !important;
}

.technotut-popup-content {
  padding: 8px 10px;
  font-family: 'Noto Sans JP', sans-serif;
  max-width: 260px;
}

.popup-badge {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #c7000a;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.popup-title {
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.popup-desc {
  font-size: 12px;
  color: #c2c2c2;
  line-height: 1.5;
  margin: 0;
}
</style>
