import config from "@config/config.json"
import Base from "@layouts/Baseof"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { useScrollProgress } from "@hooks/useScrollProgress"
import { useIntersectionObserver } from "@hooks/useIntersectionObserver"

const BannerSection = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-[url('/images/index/top.jpg')] bg-center blur-[1px] scale-110 z-10"></div>

    <div className="absolute inset-0 bg-black/45 z-20">
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <Link href="/independent" className="mb-4">
          <h1 className="font-primary font-bold text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl animate-fade-in-up delay-100">
            豊橋技術科学大学 <br className="block md:hidden" />音楽技術部
          </h1>
        </Link>
        <strong className="mt-4 text-white text-lg md:text-xl block animate-fade-in-up delay-200">Music & Live production Club - TechnoTUT</strong>
        <h2 className="mt-8 text-2xl md:text-3xl font-extrabold bg-ai-gradient bg-clip-text text-transparent animate-fade-in-up delay-300">
          音楽とテクノロジーの交差点へ<br className="block md:hidden" />ようこそ
        </h2>
      </div>
    </div>
  </section>
)

const IntroSection = () => {
  const [revealRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/index/bg-texture-1.jpg')] bg-center opacity-5 blur-[2px] z-10"></div>
      <div className="container mx-auto px-4 relative z-20 max-w-screen-md text-center">
        <div
          ref={revealRef}
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left">
            <p className="max-w-prose mx-auto">
              わたしたちは、DJを主体とした音楽イベントを軸に、多彩なクリエイティブ活動を展開するサークルです。音楽、映像、照明、デザイン、テクノロジーなど部員ひとりひとりが興味のある分野で楽しみながら、音楽の持つ力を多角的に表現します。
            </p>
            <p className="max-w-prose mx-auto">
              わたしたちは、個人の好きの対象物の魅力を最大限に表現し、イベントに参加する人すべてが特別となる体験を提供しています。
            </p>
          </div>
          <div className="mt-12">
            <Link href="/en" scroll={false} className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              For English &gt;&gt; 
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const RevealWrapper = ({ children, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

const ActivityGroupSection = () => {
  const containerRef = useRef(null)
  const progress = useScrollProgress(containerRef)
  const [progressAtBottom, setProgressAtBottom] = useState(0.88)
  const [cardHeight, setCardHeight] = useState('390px')
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const calculateProgressLimit = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const offsetTop = rect.top + scrollTop
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const containerHeight = rect.height
      
      const scrollable = containerHeight - windowHeight
      const maxPageScroll = document.documentElement.scrollHeight - windowHeight
      const scrolledAtBottom = maxPageScroll - offsetTop
      
      if (scrollable > 0 && scrolledAtBottom > 0) {
        const val = scrolledAtBottom / scrollable
        // Bound value safety range
        setProgressAtBottom(Math.max(0.75, Math.min(0.95, val)))
      }

      // iPhone SE vs iPhone XR height optimization
      if (windowHeight < 700) {
        setCardHeight('430px')
      } else {
        setCardHeight('420px')
      }

      setIsMobile(windowWidth < 1024)
    }

    calculateProgressLimit()
    window.addEventListener('resize', calculateProgressLimit)
    window.addEventListener('scroll', calculateProgressLimit, { passive: true })
    window.addEventListener('load', calculateProgressLimit)
    
    // Fallback timer for potential layout delays
    const timer = setTimeout(calculateProgressLimit, 500)

    return () => {
      window.removeEventListener('resize', calculateProgressLimit)
      window.removeEventListener('scroll', calculateProgressLimit)
      clearTimeout(timer)
    }
  }, [])

  const activeProgress = Math.min(1.0, progress / progressAtBottom)
  const touchStartRef = useRef({ x: 0, y: 0 })

  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    }
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current) return
    const touch = e.touches[0]
    
    // Calculate difference since last touchmove event
    const diffX = touch.clientX - touchStartRef.current.x
    const diffY = touch.clientY - touchStartRef.current.y

    // Update reference coordinates for the next move event
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    }

    const viewportHeight = window.innerHeight
    const maxScrollY = Math.max(0, document.documentElement.scrollHeight - viewportHeight)

    const scrollSensitivityX = 1.5
    const scrollSensitivityY = 1.0
    const deltaScrollY = -(diffX * scrollSensitivityX) - (diffY * scrollSensitivityY)
    
    // Adjust current scroll position by the touch difference
    const currentScrollY = window.scrollY
    const targetScrollY = currentScrollY + deltaScrollY

    window.scrollTo(0, Math.max(0, Math.min(maxScrollY, targetScrollY)))

    if (e.cancelable) e.preventDefault()
  }

  const steps = [
    {
      title: "イベント運営",
      subtitle: "",
      desc: "イベント運営班では、多種多様なイベントの計画立案・運営に関する活動を行っています。部室での放課後イベントから、大部屋 (コモンズI) を貸し切っての大規模イベント、さらには技科大祭や実際のクラブでも！誰もが楽しめる遊び場を、誰かが全力で輝けるステージを、自分たちの手で作り上げています！",
      right: (
        <div className="relative w-full aspect-video bg-ai-gradient rounded-2xl overflow-hidden">
          <Image
            src="/images/index/event/camp.jpg"
            fill
            alt="camp"
            className="object-cover p-[2px] pointer-events-none"
            draggable={false}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-black opacity-15"></div>
        </div>
      )
    },
    {
      title: "DJ : Disc Jockey",
      subtitle: "人と、音楽と、フロアを繋げる",
      desc: (
        <>
          弊サークル主催DJイベントである<span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold font-primary"> The Utopia Tone </span>をはじめ、技科大祭などの学内イベントでのDJプレイをモチベーションに練習・活動しています。通常の活動では、平日DJイベントを中心に、放課後や授業 of 空きコマでDJプレイをしています。一部の部員は愛知・静岡のクラブにてDJ出演や主催イベントを開催しており、学外にも活動の幅を広げています。
        </>
      ),
      right: (
        <div className="relative w-[85%] sm:w-full mx-auto aspect-[16/10] sm:aspect-[4/3]">
          {/* Front image (Left-Top) */}
          <div className="absolute top-0 left-0 w-[72%] aspect-video bg-ai-gradient rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/10 hover:z-30 hover:scale-[1.03] transition-all duration-500 ease-out">
            <Image
              src="/images/index/dj/dj-jokka.JPG"
              fill
              alt="dj-Jokka"
              className="object-cover p-[2px] pointer-events-none"
              draggable={false}
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          {/* Back image (Right-Bottom) */}
          <div className="absolute bottom-0 right-0 w-[72%] aspect-video bg-ai-gradient rounded-2xl overflow-hidden shadow-xl z-10 hover:z-30 hover:scale-[1.03] transition-all duration-500 ease-out">
            <Image
              src="/images/index/dj/dj-image.jpg"
              fill
              alt="dj-image"
              className="object-cover p-[2px] pointer-events-none"
              draggable={false}
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>
        </div>
      )
    },
    {
      title: "VJ & LJ : Video & Light Jockey",
      subtitle: "空間を掌握する演出のプロフェッショナル",
      desc: "映像パフォーマンス (VJ) と照明パフォーマンス (LJ) に関する活動を行っています。通常の活動では演出技術、さらにはその機材やソフトの開発などを行いながら、部室を明るく照らしています！イベントではそれらを駆使して、空間を最大限に盛り上げるパワーを生み出しています！",
      right: (
        <div className="relative w-full aspect-video bg-ai-gradient rounded-2xl overflow-hidden">
          <Image
            src="/images/index/vj/vj-image.jpg"
            fill
            alt="vj-image"
            className="object-cover p-[2px] pointer-events-none"
            draggable={false}
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-45"></div>
        </div>
      )
    },
    {
      title: "Media",
      subtitle: "テクノ部の魅力を伝える",
      desc: "イベントのフライヤー制作から、広報用SNS of 運用、Webサイトの更新まで。映像制作やイラストレーションも手掛け、視覚と感覚に訴えるコンテンツを生み出しています。創造性と情熱をカタチにし、テクノ部の魅力を広く届けます。",
      right: (
        <div className="flex flex-row items-center justify-center w-full gap-2 sm:gap-8 lg:gap-12 xl:gap-16 mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 -mr-8 sm:mr-0">
              <Image
                src="/images/index/media/media-1.png"
                fill
                alt="テクノ部公式キャラクターテクノちゃん(みにまむてくのちゃんver.)"
                className="object-contain pointer-events-none"
                draggable={false}
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
            <div className="text-[10px] text-gray-400 text-center mt-2">テクノちゃん (みにまむ ver.)</div>
          </div>
          <div className="relative h-[180px] w-[130px] sm:h-[200px] sm:w-[144px] lg:h-[260px] lg:w-[187px] xl:h-[350px] xl:w-[252px] 2xl:h-[410px] 2xl:w-[295px] bg-ai-gradient rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/images/index/media/flyer_20240713.png"
              fill
              alt="dtm-image"
              className="object-cover p-[2px] aspect-2682/3709 pointer-events-none"
              draggable={false}
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/60 p-1 text-[8px] text-gray-300 text-center">Flyer 2024/7/13</div>
          </div>
        </div>
      )
    },
    {
      title: "DTM",
      subtitle: "\"好き\"を形に",
      desc: (
        <>
          己の好きな音楽を求めて制作活動を行っています。毎週金曜日にDiscordにて活動を行い、情報とやる気を共有しています。
          <br /><br />
          毎年春と秋に開かれるM3にて、オリジナル楽曲の頒布も行っております。ディスコグラフィーは{" "}
          <Link href="https://technotut.bandcamp.com/"
            className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent font-bold font-primary transition-all duration-500 ease-in-out hover:text-fuchsia-400">
            bandcamp
          </Link>{" "}をご覧ください。
        </>
      ),
      right: (
        <div className="relative w-full aspect-video bg-ai-gradient rounded-2xl overflow-hidden">
          <Image
            src="/images/index/dtm/dtm.jpg"
            fill
            alt="dtm-image"
            className="object-cover p-[2px] pointer-events-none"
            draggable={false}
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-black opacity-45"></div>
        </div>
      )
    },
    {
      title: "Tech & DIY",
      subtitle: "音と映像と光を操る、舞台裏の魔術師",
      desc: (
        <>
          部員の興味関心に沿ってテクいものを触っています。サークル内サーバーの保守管理、学内イベント会場内の映像配信、照明技術などイベントに役立つ技術開発を行っています。詳細は{" "}
          <Link href="https://network.technotut.net/"
            className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent font-bold font-primary transition-all duration-500 ease-in-out hover:text-fuchsia-400">
            network.technotut.net
          </Link>{" "}
          で確認できます。
        </>
      ),
      right: (
        <div className="relative w-full aspect-video bg-ai-gradient rounded-2xl overflow-hidden">
          <Image
            src="/images/index/tech/netshrine.jpg"
            fill
            alt="ネット神社"
            className="object-cover p-[2px] pointer-events-none"
            draggable={false}
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            loading="eager"
          />
        </div>
      )
    },
    {
      title: "らーめん",
      subtitle: "卓越したラーメンと唐揚げを求めて",
      desc: (
        <>
          そのために旅行する価値のある卓越したラーメンと唐揚げを求めて食べ歩き、広く世に知らしめる活動を展開しています。部員おすすめのお店は{" "}
          <Link href="/ramen" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent font-bold font-primary transition-all duration-500 ease-in-out hover:text-fuchsia-400">
          豊橋らーめんマップ - Toyohashi Ramen Map
          </Link>{" "}
          をご覧ください。
        </>
      )
    }
  ]

  const N = steps.length

  return (
    <section className="relative bg-[#0a0a0c]">
      {/* Normal scrolling intro blocks */}
      <div className="container mx-auto px-4 relative z-20 pt-20 pb-4">
        <RevealWrapper>
          <h2 className="mt-8 mb-8 text-center text-3xl font-bold text-[#f5f5f7]">活動内容</h2>
          <div className="mx-auto max-w-4xl space-y-6 text-lg text-gray-200">
            <p>
              わたしたちは、学内DJイベント<span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold font-primary"> The Utopia Tone </span> 
              の主催をはじめ、部内の交流を深める充実した合宿、他大学音楽サークルとのコラボレーションイベント、そしてM3などの外部イベントへの積極的な参加などを通じて、多彩な活動を展開しています。年間20回以上にわたる小規模なテーマ別DJパーティーも開催し、部員ひとりひとりが個性を発揮しています。
            </p>
            <p>
              さらに、学内ではDJ講習会や交流会を実施し、わたしたちの活動に興味を持つ方々が、気軽に新たな音楽の世界へ足を踏み入れられる環境づくりに取り組んでいます。
            </p>
            <p>
              昨年度の活動実績および今年度の活動予定は、{" "}
              <Link href="/activity" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400 font-bold font-primary">
              活動情報 - Activity
              </Link>{" "}にて詳細をご確認いただけます。
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="mt-12 mb-6 text-center text-3xl font-bold text-[#f5f5f7]">活動班</h2>
          <div className="mx-auto max-w-4xl text-lg text-gray-200">
            <p>
              わたしたちの部活には、イベント運営班、DJ班、DTM班などいくつかの活動班があります。自分の興味に合わせ、好きな活動班に自由に参加でき、複数のグループに関わることも可能です。制約や強制は一切なく、ただ自分のペースで、心が動くままに楽しめる場所です。
            </p>
          </div>
        </RevealWrapper>
      </div>

      {/* Horizontal Scrollytelling & Swipe Container */}
      <div 
        ref={containerRef} 
        className="relative w-full z-20 touch-pan-y"
        style={{ height: '650vh' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="sticky top-[62px] lg:top-[72px] h-[calc(100vh-62px)] lg:h-[calc(100vh-72px)] w-full flex items-center overflow-hidden">
          <div 
            className="flex flex-row items-center transition-transform duration-100 ease-out h-full px-0"
            style={{
              transform: `translateX(-${activeProgress * (N - 1) * 100 / N}%)`,
              width: `${N * 100}%`
            }}
          >
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 flex items-center justify-center px-4"
                style={{
                  width: `${100 / N}%`
                }}
              >
                <div 
                  className={`${step.right ? 'flex flex-col justify-between lg:grid lg:grid-cols-[4.5fr_5.5fr] gap-2 lg:gap-12 xl:gap-16' : 'flex flex-col max-w-2xl xl:max-w-3xl mx-auto justify-center'} items-center w-[88vw] lg:w-[82vw] xl:w-[80vw] 2xl:w-[78vw] max-w-[1400px] lg:h-[560px] xl:h-[600px] bg-black/85 lg:bg-black/40 px-4 pt-3 pb-3 sm:p-8 lg:p-10 xl:p-12 rounded-2xl lg:rounded-[32px] border border-white/10 backdrop-blur-xl overflow-y-auto shadow-2xl`}
                  style={{ height: isMobile ? cardHeight : undefined }}
                >
                  {/* Title Block: Fixed height and top-aligned on mobile to align starting positions */}
                  <div className="h-[45px] sm:h-[75px] lg:h-auto text-left w-full flex-shrink-0 lg:contents">
                    {/* We duplicate the title block for grid structure layout cleanly on desktop vs flex on mobile */}
                    <div className="lg:hidden text-left w-full">
                      <h3 className="text-xl font-extrabold text-white font-primary relative pl-5">
                        <span className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <strong className="block text-rose-400 text-xs font-semibold tracking-wide mt-0.5 leading-none">{step.subtitle}</strong>
                      )}
                    </div>
                  </div>

                  {/* Left Column wrapper (Desktop) / Centralized content flow (Mobile) */}
                  <div className="flex-grow flex flex-col justify-center w-full lg:contents">
                    {/* Left: Text Content (For desktop grid, hidden on mobile for structure or flows normally) */}
                    <div className="text-left space-y-2 lg:space-y-6 w-full lg:block">
                      {/* Desktop Title Block */}
                      <div className="hidden lg:block text-left w-full">
                        <h3 className="text-xl lg:text-3xl xl:text-4xl font-extrabold text-white font-primary relative pl-5 lg:pl-8">
                          <span className="absolute left-0 top-0 h-full w-[4px] lg:w-[6px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                          {step.title}
                        </h3>
                        {step.subtitle && (
                          <strong className="block text-rose-400 text-xs lg:text-lg xl:text-xl font-semibold tracking-wide mt-1 lg:mt-2">{step.subtitle}</strong>
                        )}
                      </div>
                      {/* Body Text */}
                      <div className="text-gray-300 text-[13px] sm:text-sm md:text-base lg:text-lg xl:text-[1.05rem] leading-snug sm:leading-relaxed space-y-2 sm:space-y-4 pt-1 lg:pt-0">
                        {typeof step.desc === 'string' ? <p>{step.desc}</p> : step.desc}
                      </div>
                    </div>
                  </div>

                  {/* Right: Media Content */}
                  {step.right && (
                    <div className="w-full flex justify-center max-h-[190px] sm:max-h-[30vh] lg:max-h-[45vh] flex-shrink-0 lg:mt-0 mt-2">
                      {step.right}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const CallToActionSection = () => (
  <section className="relative h-[500px] w-full overflow-hidden">
    <div className="absolute inset-0 bg-black z-0"></div>
    <div className="absolute inset-0 bg-cover bg-[url('/images/index/oooscillate.svg')] bg-center blur-[1px] scale-110 z-10"></div>
    <div className="inset-0 absolute z-20 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-primary font-bold text-white text-3xl md:text-4xl lg:text-5xl">
        Ready to Join?
      </h2>
      <div className="space-y-6 text-lg text-[#f5f5f7] leading-relaxed">
        <p className="max-w-prose mx-auto my-[10px]">
          わたしたちは、いつでも新しい仲間を<br className="block md:hidden" />歓迎しています。
        </p>
      </div>
      <Link href="/join-us">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-[25px] group bg-gradient-to-br bg-transparent from-blue-500 to-pink-500">
          <span className="relative px-5 py-2.5 transition-all ease-in bg-black rounded-[25px] duration-500 ease-in-out group-hover:bg-transparent font-bold">
            Join Us
          </span>
        </button>
      </Link>
    </div>
  </section>
)

const Home = () => {
  const { title } = config.site
  return (
    <Base title={title}>
      <BannerSection />
      <IntroSection />
      <ActivityGroupSection />
      <CallToActionSection />
    </Base>
  )
}

export default Home
