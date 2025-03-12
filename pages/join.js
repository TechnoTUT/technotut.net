import config from "@config/config.json"
import Base from "@layouts/Baseof"
import Image from "next/image"
import Link from "next/link"
import { getListPage } from "../lib/contentParser"

const BannerSection = () => (
  <section className="relative h-[60vh] w-full overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-[url('/images/special/join-us.jpg')] bg-center blur-[1px] scale-110 z-10"></div>

    <div className="absolute inset-0 bg-black/40 z-20">
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <Link href="/audio-heihachiro" className="mb-4">
          <h1 className="font-primary font-bold text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl">
            入部方法について
          </h1>
          {/* <h3 className="font-primary font-bold text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl">
            How to Join
          </h3> */}
        </Link>
        <strong className="mt-4 text-white text-lg md:text-xl">How to join</strong>
        {/* <div className="max-w-screen-md mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center bg-ai-gradient bg-clip-text text-transparent">
         音楽とテクノロジーの交差点へ<br className="block md:hidden" />ようこそ
        </h2>
          <div className="space-y-6 text-lg text-[#f5f5f7] leading-relaxed">
            <p className="max-w-prose mx-auto text-left">
              わたしたちは、DJを主体とした音楽イベントを軸に、多彩なクリエイティブ活動を展開するサークルです。音楽、映像、照明、デザイン、テクノロジーなど部員ひとりひとりが興味のある分野で楽しみながら、音楽の持つ力を多角的に表現します。
            </p>
            <p className="max-w-prose mx-auto text-left">
              わたしたちは、個人の好きの対象物の魅力を最大限に表現し、イベントに参加者する人すべてが特別となる体験を提供しています。
            </p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
)

const EntryProcedureSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-black z-0"
    ></div>
    <div className="absolute inset-0 bg-[url('/images/index/bg-texture-1.jpg')] bg-center z-10 opacity-10 blur-[2px]"></div>
    <div className="absolute inset-0 bg-[length:220px] bg-repeat opacity-45 bg-[url('/images/index/noise-light.png')] bg-center z-15"></div>

    <div className="container mx-auto px-4 relative z-20">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            見学・体験入部 / Watch and try to join
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400"></strong>
            <p>活動時間中に部室までお越しください。部室の場所はこちら、クラブハウス2階 音楽技術部室となります。</p>
            <p>Please come to the club room during the activity time. The location of the club room is here, Club House 2F Music & Live Production Club Room.</p>
            </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            部費 / Club Fee
          </h3>
          <div className="text-gray-200">
            {/* <strong className="block mb-2 text-rose-400">テクノ部の魅力を伝える</strong> */}
            <p>
            初年度の部費は無料です。
            The first year is free.
            二年目以降は年間2,000円が必要となり、再入部手続きの際にお支払いいただきます。
            From the second year onward, the annual fee is 2,000 yen, which will be collected when you rejoin the club.
            </p>
            <p>運営の都合上、毎年入部手続きを行う必要があります。再入部手続きをしなければ費用は一切発生しないため、少しでも興味がある方はまずは気軽に入部してみることをおすすめします。
            For administrative reasons, you need to renew your membership each year. If you choose not to rejoin the following year, you won’t be charged anything. So if you're even slightly interested, we recommend signing up for now!
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            入部方法 / How to join
          </h3>
          <div className="text-gray-200">
            {/* <strong className="block mb-2 text-rose-400">テクノ部の魅力を伝える</strong> */}
            <p>
            一度部室にお越しください。
            Please come to the club room once.
            </p>
            <p>
            部員名簿に署名と捺印をしていただきます。
            Please sign and stamp the member list.
            </p>
            <p>
            入部手続きが完了しました。
            The membership procedure is complete.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            連絡先 / Contact
          </h3>
          <div className="text-gray-200">
            {/* <strong className="block mb-2 text-rose-400">テクノ部の魅力を伝える</strong> */}
            <p>
            一度部室にお越しください。
            Please come to the club room once.
            </p>
            <p>
            部員名簿に署名と捺印をしていただきます。
            Please sign and stamp the member list.
            </p>
            <p>
            入部手続きが完了しました。
            The membership procedure is complete.
            </p>
          </div>
        </div>

        {/* <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            DTM
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">&quot;好き&quot;を形に</strong>
            <p>
              己の好きな音楽を求めて制作活動を行っています。毎週金曜日にDiscordにて活動を行い、情報とやる気を共有しています。
            </p>
            <p>
              毎年春と秋に開かれるM3にて、オリジナル楽曲の頒布も行っております。ディスコグラフィーは{" "}<Link href="https://technotut.bandcamp.com/"
                className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400">
                bandcamp
              </Link>{" "}をご覧ください。
            </p>
            <div className="relative h-[400px] w-full my-8">
              <div className="absolute inset-0 bg-ai-gradient">
                <div className="h-full w-full">
                  <Image
                    src="/images/index/dtm/dtm.jpg"
                    fill
                    alt="dtm-image"
                    className="object-cover p-[2px]"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-45 z-30 m-[2px]"></div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="space-y-4">
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
            <div className="relative h-[400px] w-full my-8">
              <div className="absolute inset-0 bg-ai-gradient">
                <div className="h-full w-full">
                  <Image
                    src="/images/index/tech/netshrine.jpg"
                    fill
                    alt="ネット神社"
                    className="object-cover p-[2px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 z-30 m-[2px]"></div>
                </div>
              </div>
            </div>
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
        </div> */}
      </div>
    </div>
  </section>
)


const Home = ({ frontmatter }) => {
    const { title } = config.site
    return (
    <div>
      <Base title={title}>
      <BannerSection />
      <EntryProcedureSection />
      </Base>
      <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
      <Image src={``} layout={`fill`} objectFit={`cover`} />
    </div>
    </div>
    )
  }
  
  export default Home