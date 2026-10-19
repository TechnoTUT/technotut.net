<template>
  <div class="pt-40 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto">
    <!-- Header -->
    <header class="mb-16 sm:mb-24">
      <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-2">
        LOCATION &amp; ACCESS
      </p>
      <h1 class="font-noto font-light text-4xl sm:text-6xl text-white tracking-tight">
        {{ $t('access.title') }}
      </h1>
      <!-- Access Information -->
      <p class="mt-4 text-base font-noto text-gray-dim font-light leading-relaxed max-w-none">
        {{ $t('access.intro') }}
      </p>
      <!-- Directions to Toyohashi University of Technology and access to on-campus activity bases (Commons 1, Club Room). -->
    </header>

    <!-- University Access (Tabbed) -->
    <section aria-labelledby="university-access-heading" class="mb-16 sm:mb-24">
      <div class="mb-8">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-1">
          TO TOYOHASHI UNIVERSITY OF TECHNOLOGY
        </p>
        <h2 id="university-access-heading" class="font-noto text-2xl sm:text-3xl font-light text-white">
          {{ $t('access.univHeading') }}
        </h2>
        <!-- Access to the University -->
        <p class="mt-3 text-sm sm:text-base font-noto text-gray-dim font-light leading-relaxed">
          {{ $t('access.univText1') }}
          <a
            href="https://www.tut.ac.jp/about/overview/access.html"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
          >
            {{ $t('access.univLinkText') }}
            <svg class="w-3.5 h-3.5 inline-block align-baseline" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          {{ $t('access.univText2') }}
        </p>
        <!--
        You can also find directions to the university on Toyohashi University of Technology's official website (https://www.tut.ac.jp/about/overview/access.html). For more information, please visit the official website.
        -->
      </div>

      <!-- Transit Tabs -->
      <div class="flex items-center gap-2.5 mb-6" role="tablist" :aria-label="$t('access.tabsLabel')">
        <button
          id="tab-public"
          type="button"
          role="tab"
          :aria-selected="activeTransitTab === 'public'"
          aria-controls="panel-public"
          class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-noto transition-all duration-200 cursor-pointer border inline-flex items-center gap-2"
          :class="activeTransitTab === 'public'
            ? 'bg-white text-dark font-medium border-white'
            : 'text-gray-400 hover:text-white border-white/10 hover:border-white/30 bg-white/[0.03]'"
          @click="activeTransitTab = 'public'"
        >
          <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
            <rect x="4" y="3" width="16" height="16" rx="2" />
            <path d="M4 11h16M8 15h.01M16 15h.01M6 19l-2 2M18 19l2 2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ $t('access.tabPublic') }}</span>
        </button>

        <button
          id="tab-car"
          type="button"
          role="tab"
          :aria-selected="activeTransitTab === 'car'"
          aria-controls="panel-car"
          class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-noto transition-all duration-200 cursor-pointer border inline-flex items-center gap-2"
          :class="activeTransitTab === 'car'
            ? 'bg-white text-dark font-medium border-white'
            : 'text-gray-400 hover:text-white border-white/10 hover:border-white/30 bg-white/[0.03]'"
          @click="activeTransitTab = 'car'"
        >
          <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2m10 0a2 2 0 100-4 2 2 0 000 4zm-10 0a2 2 0 100-4 2 2 0 000 4z" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ $t('access.tabCar') }}</span>
        </button>
      </div>

      <!-- Tab Content Panel -->
      <div class="p-6 sm:p-8 bg-dark border border-white/10">
        <!-- Public Transportation -->
        <div
          v-show="activeTransitTab === 'public'"
          id="panel-public"
          role="tabpanel"
          aria-labelledby="tab-public"
        >
          <h3 class="font-noto text-lg sm:text-xl font-light text-white mb-6">
            {{ $t('access.publicTitle') }}
          </h3>
          <!-- If coming by public transportation -->

          <div class="space-y-6 text-sm font-noto text-gray-dim font-light leading-relaxed">
            <div>
              <h4 class="text-white font-normal text-base mb-1.5">
                {{ $t('access.busTitle') }}
              </h4>
              <p>
                {{ $t('access.busText') }}
              </p>
              <p class="mt-1">
                {{ $t('access.fareText') }}
                <a
                  href="https://www.toyotetsu.jp/rosen/timetable.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors inline-flex items-center gap-1"
                >
                  {{ $t('access.timetableLink') }}
                  <svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {{ $t('access.busSuffix') }}
              </p>
              <!--
              There is a bus from Toyohashi Station to the university. After exiting the JR or Meitetsu ticket gate, proceed to the right, and the bus departs from Toyohashi Station Front Bus Stop No. 2. The fare is 500 yen one way (cash or transportation IC card).
              Please check the Toyotetsu Bus Timetable (https://www.toyotetsu.jp/rosen/timetable.html) for the Toyohashi University of Technology Line and use it.
              -->
            </div>

            <div class="border-t border-white/5 pt-6">
              <h4 class="text-white font-normal text-base mb-1.5">
                {{ $t('access.nagoyaTitle') }}
              </h4>
              <p>
                {{ $t('access.nagoyaPrefix') }}
                <a
                  href="https://www.meitetsu.co.jp/plan/discount/1268869_8040.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors inline-flex items-center gap-1"
                >
                  {{ $t('access.nagoyaTicket') }}
                  <svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {{ $t('access.nagoyaSuffix') }}
              </p>
              <!--
              If you are coming from Nagoya, you can use the Nagoya Railroad Nagoya Special Discount 2 Weekdays・Nagoya Special Discount 2 Saturdays and Holidays (1,780 yen for a round trip on weekdays, 1,560 yen on weekends and holidays) to travel at a reasonable price.
              -->
            </div>

            <div class="border-t border-white/5 pt-6">
              <h4 class="text-white font-normal text-base mb-1.5">
                {{ $t('access.hamamatsuTitle') }}
              </h4>
              <p>
                {{ $t('access.hamamatsuText') }}
              </p>
              <!--
              If you are coming from Hamamatsu direction, it takes about 30 minutes from Hamamatsu Station to Toyohashi Station, and the fare is 680 yen.
              -->
            </div>
          </div>
        </div>

        <!-- By Car -->
        <div
          v-show="activeTransitTab === 'car'"
          id="panel-car"
          role="tabpanel"
          aria-labelledby="tab-car"
        >
          <h3 class="font-noto text-lg sm:text-xl font-light text-white mb-6">
            {{ $t('access.carTitle') }}
          </h3>
          <!-- If coming by car -->

          <div class="space-y-6 text-sm font-noto text-gray-dim font-light leading-relaxed">
            <div>
              <h4 class="text-white font-normal text-base mb-1.5">
                {{ $t('access.bypassTitle') }}
              </h4>
              <p>{{ $t('access.bypassText') }}</p>
              <!-- About 2 minutes from the Nanane IC of the Route 23 Bypass -->
            </div>

            <div class="border-t border-white/5 pt-6">
              <h4 class="text-white font-normal text-base mb-1.5">
                {{ $t('access.highwayTitle') }}
              </h4>
              <p>{{ $t('access.highwayText') }}</p>
              <!-- About 1 hour from the Otowa Gamagori IC or Hamamatsu IC of the Tomei Expressway -->
            </div>

            <div class="border-t border-white/5 pt-6">
              <h4 class="text-white font-normal text-base mb-1.5">
                {{ $t('access.parkingTitle') }}
              </h4>
              <p>
                {{ $t('access.parkingFree') }}
              </p>
              <p class="mt-2">
                {{ $t('access.permitText1') }}<strong>{{ $t('access.permitName') }}</strong>{{ $t('access.permitText2') }}
              </p>
              <p class="mt-2 text-xs text-gray-400">
                {{ $t('access.permitWarning') }}
              </p>
              <!--
              Parking is available on campus free of charge.
              Please stop by the guard station located immediately after entering the main gate to receive a temporary campus entry permit. When parking, please place it on your dashboard so that it is visible from the outside.
              * Please note that if you park without displaying a permit, warning wires may be installed.
              -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Campus Map (Interactive Leaflet Map) -->
    <section aria-labelledby="campus-map-heading" class="mb-16 sm:mb-24">
      <div class="mb-6">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-1">
          CAMPUS MAP
        </p>
        <h2 id="campus-map-heading" class="font-noto text-2xl sm:text-3xl font-light text-white">
          {{ $t('access.mapHeading') }}
        </h2>
        <!-- Campus Map -->
        <p class="mt-2 text-sm sm:text-base font-noto text-gray-dim font-light leading-relaxed max-w-3xl">
          {{ $t('access.mapText') }}
        </p>
        <!-- Commons 1 (Welfare Facility 1F), TechnoTUT Club Room (Clubhouse 2F), and Bus Stop. -->
      </div>

      <div class="overflow-hidden border border-white/10 bg-dark h-[460px] sm:h-[540px] w-full flex flex-col">
        <ClientOnly>
          <InteractiveCampusMap class="w-full h-full flex-grow" />
          <template #fallback>
            <div class="w-full h-full flex-grow bg-dark flex flex-col items-center justify-center gap-3">
              <div class="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
              <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase">
                Loading Campus Map...
              </p>
            </div>
          </template>
        </ClientOnly>
      </div>
    </section>

    <!-- Commons 1 -->
    <section aria-labelledby="commons-heading" class="mb-16 sm:mb-24">
      <div class="mb-8">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-1">
          EVENT SPACE
        </p>
        <h2 id="commons-heading" class="font-noto text-2xl sm:text-3xl font-light text-white">
          {{ $t('access.commonsHeading') }}
        </h2>
        <!-- Access to Student Commons Ⅰ -->
        <div class="mt-3 space-y-2 text-sm sm:text-base font-noto text-gray-dim font-light leading-relaxed max-w-3xl">
          <p>
            {{ $t('access.commonsP1') }}
          </p>
          <p>
            {{ $t('access.commonsP2') }}
          </p>
          <p>
            {{ $t('access.commonsP3') }}
          </p>
          <!--
          When holding an event on campus, we use Student Commons Ⅰ.
          Student Commons Ⅰ is located next to the on-campus store "New Yamazaki Daily Store Toyohashi Institute of Technology Store".
          From main entrance of the University, proceed in the direction of "GO TO THE FUTURE", past the attached library, and on the 1st floor of the welfare facility.
          -->
        </div>
      </div>

      <!-- Commons 1 Steps and Photo -->
      <div class="grid gap-8 lg:grid-cols-2 items-stretch">
        <!-- Photo Viewer -->
        <CommonsPhotoViewer v-model="currentPhotoIndex" autoplay />

        <!-- Steps List -->
        <div class="p-6 sm:p-8 bg-dark border border-white/10 flex flex-col justify-center h-full">
          <div>
            <ol class="space-y-3 text-sm font-noto leading-relaxed">
              <li
                v-for="(step, index) in commonsSteps"
                :key="index"
                class="flex items-start gap-3 p-2.5 transition-colors cursor-pointer"
                :class="currentPhotoIndex === index ? 'bg-white/10 text-white' : 'text-gray-dim hover:text-white hover:bg-white/5'"
                @click="selectStep(index)"
              >
                <span
                  class="flex-shrink-0 w-6 h-6 rounded-full font-quicksand text-xs flex items-center justify-center font-medium transition-colors"
                  :class="currentPhotoIndex === index ? 'bg-brand text-white font-bold' : 'bg-white/10 text-white'"
                >
                  {{ index + 1 }}
                </span>
                <p class="font-light pt-0.5">{{ step }}</p>
              </li>
            </ol>
          </div>
          <!--
          1. The dining room is to the left of the welfare facility. You will proceed a few meters from there.
          2. You will see a downstairs on your left, go down the stairs, and enter the automatic door.
          3. Turn right at the "New Daily Yamazaki" in front of you and go to the far end of the building.
          4. When you reach the far end, enter the automatic door on your left, and you will arrive at Commons1!
          -->
        </div>
      </div>
    </section>

    <!-- Club Room -->
    <section aria-labelledby="clubroom-heading" class="mb-16 sm:mb-24">
      <div class="mb-8">
        <p class="font-quicksand text-xs tracking-widest text-gray-400 uppercase mb-1">
          CLUB ROOM
        </p>
        <h2 id="clubroom-heading" class="font-noto text-2xl sm:text-3xl font-light text-white">
          {{ $t('access.clubHeading') }}
        </h2>
        <!-- Access to the Club Room -->
        <p class="mt-3 text-sm sm:text-base font-noto text-gray-dim font-light leading-relaxed">
          {{ $t('access.clubText') }}
        </p>
        <!--
        It is the 2nd floor of the club house. Please feel free to come. It is convenient to use the club room as a landmark when it is shining in rainbow colors.
        -->
      </div>

      <!-- Club Room Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Video Column (Left) -->
        <div class="flex flex-col items-center justify-center">
          <div class="overflow-hidden border border-white/10 bg-dark max-w-[260px] sm:max-w-[300px] mx-auto flex items-center justify-center">
            <video
              class="w-full h-auto max-h-[55vh] object-contain block"
              autoplay
              loop
              muted
              playsinline
              controls
            >
              <source src="/videos/PathtoBushitsu.mp4" type="video/mp4">
              <source src="/videos/PathtoBushitsu.webm" type="video/webm">
              <p>{{ $t('access.videoFallback') }}</p>
            </video>
          </div>
        </div>

        <!-- Description Column (Right) -->
        <div class="flex flex-col justify-center">
          <div class="space-y-4 text-sm sm:text-base font-noto text-gray-dim font-light leading-relaxed">
            <p>
              {{ $t('access.clubP1') }}
            </p>
            <p>
              {{ $t('access.clubP2') }}
            </p>
          </div>
          <!--
          From the university main gate, head toward "GO TO THE FUTURE" and go straight toward the gymnasium.
          The music technology club (TechnoTUT) room is on the 2nd floor of the club house located just ahead.
          -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const activeTransitTab = ref<'public' | 'car'>('public')

const currentPhotoIndex = ref(0)

const selectStep = (index: number) => {
  currentPhotoIndex.value = index
}

const commonsSteps = computed(() => [0, 1, 2, 3].map(i => t(`access.commonsSteps.${i}`)))

useSeoMeta({
  title: () => `${t('access.seoTitle')} - TechnoTUT`,
  description: () => t('access.seoDescription'),
})
</script>

<i18n lang="json">
{
  "ja": {
    "access": {
      "title": "アクセス情報",
      "intro": "豊橋技術科学大学への交通アクセス、および学内活動拠点（コモンズ1・部室）への行き方です。",
      "univHeading": "大学への行き方",
      "univText1": "大学への行き方は",
      "univLinkText": "豊橋技術科学大学 公式サイト",
      "univText2": "にも記載されています。より詳しく知りたい方は、公式サイトをご覧ください。",
      "tabsLabel": "交通手段の選択",
      "tabPublic": "公共交通機関",
      "tabCar": "自家用車",
      "publicTitle": "公共交通機関でお越しになる場合",
      "busTitle": "豊橋駅からのアクセス（路線バス）",
      "busText": "豊橋駅から大学へは路線バスが運行しています。JR・名鉄の改札を出て右手に進み、豊橋駅前2番乗り場から発車しています。",
      "fareText": "運賃は片道500円（現金もしくは交通系ICカード）です。",
      "timetableLink": "豊鉄バス 時刻表",
      "busSuffix": "の「豊橋技科大線」をご確認の上、ご利用ください。",
      "nagoyaTitle": "名古屋方面からお越しの場合",
      "nagoyaPrefix": "名古屋鉄道の割引きっぷ",
      "nagoyaTicket": "なごや特割2平日・なごや特割2土休日",
      "nagoyaSuffix": "（1往復あたり平日1,780円、土日祝1,560円）をご利用いただくとお得に移動できます。",
      "hamamatsuTitle": "浜松方面からお越しの場合",
      "hamamatsuText": "JR東海道本線にて浜松駅から豊橋駅までの所要時間は約30分、運賃は680円となります。",
      "carTitle": "自家用車でお越しになる場合",
      "bypassTitle": "バイパスからのアクセス",
      "bypassText": "国道23号バイパス「七根IC」から約2分",
      "highwayTitle": "高速道路からのアクセス",
      "highwayText": "東名高速道路「音羽蒲郡IC」または「浜松IC」から約1時間",
      "parkingTitle": "学内駐車場・一時入構手続きについて",
      "parkingFree": "学内の駐車場は無料でご利用いただけます。",
      "permitText1": "正門入ってすぐのところに守衛所がありますので、そこで",
      "permitName": "一時入構許可証",
      "permitText2": "をお受け取りいただき、駐車の際はダッシュボードの上に置いて外から見えるように掲示してください。",
      "permitWarning": "※許可証を掲示せずに駐車されますと、警告ワイヤー等が設置されることがありますのでご注意ください。",
      "mapHeading": "学内マップ",
      "mapText": "コモンズ1および音楽技術部室、バス停の位置です。",
      "commonsHeading": "コモンズⅠへの行き方",
      "commonsP1": "学内イベント（\"The Utopia Tone\" や技科大祭など）を行う際、コモンズⅠを利用します。",
      "commonsP2": "コモンズⅠは、学内売店「ニューヤマザキデイリーストア 豊橋技科大店」の隣に位置しています。",
      "commonsP3": "大学正門から「GO TO THE FUTURE」方面へ進み、附属図書館を超えた先、福利施設の1階にあります。",
      "commonsSteps": {
        "0": "福利施設の左手は食堂となっています。そこから数メートルほど進んでいただきます。",
        "1": "左手に下り階段があるので、階段を下り、自動ドアの中に入ります。",
        "2": "正面にある「ニューヤマザキデイリーストア」を右折し、一番奥まで進みます。",
        "3": "一番奥まで来たら、左手にある自動ドアを入れば、コモンズ1に到着です！"
      },
      "clubHeading": "部室への行き方",
      "clubText": "クラブハウス2階 音楽技術部室となります。ぜひお気軽にお越しください。部室が虹色に光り輝いていることを目印とすると便利です。",
      "videoFallback": "お使いのブラウザは動画タグをサポートしていません。",
      "clubP1": "大学正門から「GO TO THE FUTURE」方面へ進み、体育館方面にずっとまっすぐ進みます。",
      "clubP2": "その先にあるクラブハウスの2階が、音楽技術部（TechnoTUT）の部室となります。",
      "seoTitle": "アクセス",
      "seoDescription": "豊橋技術科学大学 音楽技術部 (TechnoTUT) へのアクセス、学内マップ、コモンズ1・部室への行き方。"
    }
  },
  "en": {
    "access": {
      "title": "Access",
      "intro": "How to get to Toyohashi University of Technology by public transport or car, and how to reach our on-campus activity spaces (Commons 1 and the club room).",
      "univHeading": "Getting to the University",
      "univText1": "Directions to the university are also available on the ",
      "univLinkText": "Toyohashi University of Technology official website",
      "univText2": ". For more details, please visit the official website.",
      "tabsLabel": "Choose a mode of transport",
      "tabPublic": "Public transport",
      "tabCar": "By car",
      "publicTitle": "Arriving by public transport",
      "busTitle": "Bus from Toyohashi Station",
      "busText": "Route buses run from Toyohashi Station to the university. After exiting the JR or Meitetsu ticket gates, turn right, and buses depart from bus stop No. 2 in front of Toyohashi Station.",
      "fareText": "The fare is 500 yen one way (cash or transportation IC card).",
      "timetableLink": "Toyotetsu Bus timetable",
      "busSuffix": ". Please check the \"Toyohashi Gikadai Line\" before you ride.",
      "nagoyaTitle": "Coming from the Nagoya area",
      "nagoyaPrefix": "Meitetsu discount ticket: ",
      "nagoyaTicket": "Nagoya Tokutoku 2 (weekdays) / Nagoya Tokutoku 2 (Saturdays, Sundays, and holidays)",
      "nagoyaSuffix": ". A round trip costs 1,780 yen on weekdays and 1,560 yen on weekends and holidays, which is a good deal.",
      "hamamatsuTitle": "Coming from the Hamamatsu area",
      "hamamatsuText": "By the JR Tokaido Main Line, it takes about 30 minutes from Hamamatsu Station to Toyohashi Station, and the fare is 680 yen.",
      "carTitle": "Arriving by car",
      "bypassTitle": "From the bypass",
      "bypassText": "About 2 minutes from the Nanane IC on Route 23 Bypass",
      "highwayTitle": "From the expressway",
      "highwayText": "About 1 hour from the Otowa-Gamagori IC or the Hamamatsu IC on the Tomei Expressway",
      "parkingTitle": "On-campus parking and temporary entry permits",
      "parkingFree": "On-campus parking is free of charge.",
      "permitText1": "The guard station is right after you enter the main gate. Please stop there to receive a ",
      "permitName": "temporary campus entry permit",
      "permitText2": ". When parking, place it on your dashboard so that it is visible from outside.",
      "permitWarning": "* If you park without displaying the permit, warning wires may be installed.",
      "mapHeading": "Campus map",
      "mapText": "The locations of Commons 1, the club room, and the bus stop.",
      "commonsHeading": "Getting to Commons I",
      "commonsP1": "When we hold on-campus events, such as The Utopia Tone or Gikadaisai, we use Commons I.",
      "commonsP2": "Commons I is located next to the on-campus convenience store \"New Yamazaki Daily Store Toyohashi Gikadai Store.\"",
      "commonsP3": "From the main gate, head toward \"GO TO THE FUTURE,\" go past the University Library, and it is on the 1st floor of the welfare facility.",
      "commonsSteps": {
        "0": "The dining room is to the left of the welfare facility. Go a few meters past it.",
        "1": "On your left there is a staircase going down. Go down the stairs and enter the automatic door.",
        "2": "Turn right at the \"New Yamazaki Daily Store\" in front of you and walk to the far end.",
        "3": "At the far end, go through the automatic door on your left, and you will arrive at Commons 1!"
      },
      "clubHeading": "Getting to the club room",
      "clubText": "The TechnoTUT club room is on the 2nd floor of the clubhouse. Please feel free to visit. A handy landmark is the club room glowing in rainbow colors.",
      "videoFallback": "Your browser does not support the video tag.",
      "clubP1": "From the main gate, head toward \"GO TO THE FUTURE\" and keep going straight toward the gymnasium.",
      "clubP2": "The clubhouse just ahead has the club room on its 2nd floor, the home of TechnoTUT (Music & Live production Club).",
      "seoTitle": "Access",
      "seoDescription": "Access to the Toyohashi University of Technology Music & Live production Club (TechnoTUT), campus map, and directions to Commons 1 and the club room."
    }
  }
}
</i18n>
