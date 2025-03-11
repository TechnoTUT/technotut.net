import config from "@config/config.json"
import Base from "@layouts/Baseof"
import Cta from "@layouts/components/Cta"
import Image from "next/image"
import Link from "next/link"
import { getListPage } from "../lib/contentParser"

const BannerSection = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top.jpg-RzyFWR7MNp87eB5QQYYn2GX3CiFEbJ.jpeg"
        alt="DJ setup with colorful lighting"
        fill
        priority
        className="object-cover blur-[2px] scale-110"
        style={{ zIndex: -1 }}
      />
    </div>
    <div className="absolute inset-0 bg-black/40">
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <Link href="/independent" className="mb-4">
          <h1 className="font-primary font-bold text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl">
            豊橋技術科学大学 音楽技術部
          </h1>
        </Link>
        <strong className="mt-4 text-white text-lg md:text-xl">Music & Live production Club - TechnoTUT</strong>
        <div className="max-w-screen-md mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent">
            音楽とテクノロジーの交差点へようこそ
          </h2>
          <div className="space-y-6 text-lg text-[#f5f5f7] leading-relaxed">
            <p className="max-w-prose mx-auto text-left">
              わたしたちは、DJを主体とした音楽イベントを軸に、多彩なクリエイティブ活動を展開するサークルです。音楽、映像、照明、デザイン、テクノロジーなど部員ひとりひとりが興味のある分野で楽しみながら、音楽の持つ力を多角的に表現します。
            </p>
            <p className="max-w-prose mx-auto text-left">
              わたしたちは、個人の好きの対象物の魅力を最大限に表現し、イベントに参加者する人すべてが特別となる体験を提供しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ActivityContentSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-black"
      style={{ backdropFilter: "blur(3px)" }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#f5f5f7]">活動内容</h2>
      <div className="mx-auto max-w-4xl space-y-6 text-lg text-gray-200">
        <p>
          わたしたちは、学内DJイベント<span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold"> The Utopia Tone </span> 
          の主催をはじめ、部内の交流を深める充実した合宿、他大学音楽サークルとのコラボレーションイベント、そしてM3などの外部イベントへの積極的な参加などを通じて、多彩な活動を展開しています。年間20回以上にわたる小規模なテーマ別DJパーティーも開催し、部員ひとりひとりが個性を発揮しています。
        </p>
        <p>
          さらに、学内ではDJ講習会や交流会を実施し、わたしたちの活動に興味を持つ方々が、気軽に新たな音楽の世界へ足を踏み入れられる環境づくりに取り組んでいます。
        </p>
        <p>
          昨年度の活動実績および今年度の活動予定は、{" "}
          <Link href="/activity" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400">
          活動情報 - Activity
          </Link>{" "}にて詳細をご確認いただけます。
        </p>
      </div>
    </div>
  </section>
)

const ActivityGroupSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-black"
      style={{ backdropFilter: "blur(3px)" }}
    ></div>
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="mb-12 text-center text-3xl font-bold text-[#f5f5f7]">活動班</h2>
      <div className="mx-auto max-w-4xl mb-16 text-lg text-gray-200">
        <p>
          わたしたちの部活には、イベント運営班、DJ班、DTM班などいくつかの活動班があります。自分の興味に合わせ、好きな活動班に自由に参加でき、複数のグループに関わることも可能です。制約や強制は一切なく、ただ自分のペースで、心が動くままに楽しめる場所です。
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            イベント運営
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400"></strong>
            <p>イベント運営班では、多種多様なイベントの計画立案・運営に関する活動を行っています。部室での放課後イベントから、大部屋 (コモンズI) を貸し切っての大規模イベント、さらには技科大祭や実際のクラブでも！誰もが楽しめる遊び場を、誰かが全力で輝けるステージを、自分たちの手で作り上げています！</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            DJ : Disc Jockey
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">人と、音楽と、フロアを繋げる</strong>
            <p>弊サークル主催DJイベントである<span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold"> The Utopia Tone </span>をはじめ、技科大祭などの学内イベントでのDJプレイをモチベーションに練習・活動しています。通常の活動では、平日DJイベントを中心に、放課後や授業の空きコマでDJプレイをしています。一部の部員は愛知・静岡のクラブにてDJ出演や主催イベントを開催しており、学外にも活動の幅を広げています。</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            VJ & LJ : Video & Light Jockey
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">空間を掌握する演出のプロフェッショナル</strong>
            <p>映像パフォーマンス (VJ) と照明パフォーマンス (LJ) に関する活動を行っています。通常の活動では演出技術、さらにはその機材やソフトの開発などを行いながら、部室を明るく照らしています！イベントではそれらを駆使して、空間を最大限に盛り上げるパワーを生み出しています！
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            Media
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">テクノ部の魅力を伝える</strong>
            <p>
            イベントのフライヤー制作から、広報用SNSの運用、Webサイトの更新まで。映像制作やイラストレーションも手掛け、視覚と感覚に訴えるコンテンツを生み出しています。創造性と情熱をカタチにし、テクノ部の魅力を広く届けます。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            DTM
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">"好き"を形に</strong>
            <p>
              己の好きな音楽を求めて制作活動を行っています。毎週金曜日にDiscordにて活動を行い、情報とやる気を共有しています。
            </p>
            <p>
              毎年春と秋に開かれるM3にて、オリジナル楽曲の頒布も行っております。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            Tech & DIY
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">音と映像と光を操る、舞台裏の魔術師</strong>
            <p>
              部員の興味関心に沿ってテクいものを触っています。サークル内サーバーの保守管理、学内イベント会場内の映像配信、照明技術などイベントに役立つ技術開発を行っています。詳細は{" "}
              <Link href="https://noc.technotut.net/"
                className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400">
                noc.technotut.net
              </Link>{" "}
              で確認できます。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            ら
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400"></strong>
            <p>
              そのために旅行する価値のある卓越したラーメンと唐揚げを求めて食べ歩き、広く世に知らしめる活動を展開しています。部員おすすめのお店は{" "}
              <Link href="/ramen" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400">
              豊橋らーめんマップ - Toyohashi Ramen Map
              </Link>{" "}
              をご覧ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Home = ({ frontmatter }) => {
  const { call_to_action } = frontmatter
  const { title } = config.site
  return (
    <Base title={title}>
      <BannerSection />
      <ActivityContentSection />
      <ActivityGroupSection />
      <Cta cta={call_to_action} />
    </Base>
  )
}

export const getStaticProps = async () => {
  const { frontmatter } = await getListPage("content/_index.md")
  return {
    props: {
      frontmatter,
    },
  }
}

export default Home

