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
          Welcome to the Crossroads of Musics and Technologies!
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
              We are the creative club centering on DJ-driven music events. Through music, visual & light performances, design, and various technology, each member is exploring his/her passions and expressing the power of music in various ways.
            </p>
            <p className="max-w-prose mx-auto">
              We are continuing to create special experiences for every participant, with the gathering of each individual&apos;s maximized passion. 
            </p>
          </div>
          <div className="mt-12">
            <Link href="/" className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              For Japanese &gt;&gt; 
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
      title: "Event Operations",
      subtitle: "",
      desc: "The Event Operations Unite is planning and managing a wide variety of events: from casual after-school gatherings in our clubroom to The Utopia Tone in Commons I. Even more, performances at the Gikadai Festival and external clubs! ------ We create spaces where everyone can have fun and stages where everyone can shine at their best, all with our own hands!",
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
      subtitle: "Unite People, Music, and the Dancefloor.",
      desc: (
        <>
          The DJ Crew hones their skills and performs with motivation driven by our signature event, <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold font-primary">The Utopia Tone</span>, as well as DJ appearances at on-campus events like the Gikadai Festival. Our regular activities revolve around weekday DJ events, whitch members practice and perform during after-school hours or between classes. Also some members extend their reach and presence beyond campus, as a DJ player or organizer in Aichi and Shizuoka.
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
      subtitle: "Professionals of Immersive Stage Production.",
      desc: "We specialize in visual (VJ) and lighting (LJ) performances. Our regular activities include mastering stage production techniques, developing equipment and software, and of course illuminating our clubroom brightly! At events, we make inspiring spaces by harnessing our technology and performances.",
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
      subtitle: "Bringing the Essence of TechnoTUT to Life.",
      desc: "Through event flyer design, social media management and website updates, we handle all aspects of communication. And also througn creation of video content and illustrations, we appeal our potential to audiences' senses. By transforming creativity and passion into tangible forms, we bring the essence of TechnoTUT to a wider audience.",
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
            <div className="text-[10px] text-gray-400 text-center mt-2">Techno-chan (Minimal Techno-chan ver.)</div>
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
      subtitle: "Shape What You \"Love\".",
      desc: (
        <>
          Our unit creates various musics driven by our passion for the sounds we love. Every Friday, we gather on Discord to share and increase our insights, motivation, and creativity together. We also distribute our original tracks at M3, held every spring and autumn.
          <br /><br />
          <Link href="https://technotut.bandcamp.com/" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent font-bold font-primary transition-all duration-500 ease-in-out hover:text-fuchsia-400">
            Check out our discography here.
          </Link>
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
      subtitle: "Masters of Sound, Visuals, and Light ------ The Magicians Behind the Stage.",
      desc: (
        <>
          We explore and experiment with cutting-edge technology based on our members' interests. Our activities include maintaining the club's internal servers, managing video streaming at campus event venues, and developing lighting and stage production technologies to enhance live experiences.
          <br /><br />
          For more details, visit <Link href="https://network.technotut.net/" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent font-bold font-primary transition-all duration-500 ease-in-out hover:text-fuchsia-400">network.technotut.net</Link>.
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
      title: "Ramen",
      subtitle: "卓越したラーメンと唐揚げを求めて",
      desc: (
        <>
          We travel in search of ramen and karaage ------ <span className="font-serif italic text-amber-200">une des meilleures tables, vaut le voyage.</span> Through our food adventures, we aim to discover and share these culinary gems with the world.
          <br /><br />
          Check out our members' top recommendations on the <Link href="/ramen" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent font-bold font-primary transition-all duration-500 ease-in-out hover:text-fuchsia-400">Toyohashi Ramen Map.</Link>
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
          <h2 className="mt-8 mb-8 text-center text-3xl font-bold text-[#f5f5f7]">Discover What We Do</h2>
          <div className="mx-auto max-w-4xl space-y-6 text-lg text-gray-200">
            <p>
              We actively organize a wide range of events, starting with our on-campus DJ event, <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold font-primary">The Utopia Tone</span> . Our activities include training camps to strengthen our community, collaboration events with music circles from other universities, and participation in external events like M3.
            </p>
            <p>
              Additionally, we host over 20 small-scale, themed DJ parties throughout the year. Each member provides their unique style and creativity with these opportunity. 
            </p>
            <p>
              Furthermore, we host DJ workshops and networking events on campus. Tehse are our attempts to create an open and welcoming environment whitch anyone can be interested in us and get into the world of music easily. 
            </p>
            <p>
              Our past achievements and upcoming events can be found in detail on the <Link href="/activity" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400 font-bold font-primary font-bold"> Activity Information </Link>.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <h2 className="mt-12 mb-6 text-center text-3xl font-bold text-[#f5f5f7]">Meet the Units</h2>
          <div className="mx-auto max-w-4xl text-lg text-gray-200">
            <p>
            Our club is home to several activity units such as Event Operations Unit, DJ Unit, and Music Production Unit.
            Members are free to join any unit based on their interests, and of course can be involved in multiple groups.
            There are no restrictions or obligations <span className="tracking-[-0.2em]">------</span> just a place where you can enjoy music and creativity at your own pace, following what moves your heart.
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
    {/* background: z-index 0*/}
    <div className="absolute inset-0 bg-black z-0"></div>
    
    {/* SVG-background: z-index 10*/}
    <div className="absolute inset-0 bg-cover bg-[url('/images/index/oooscillate.svg')] bg-center blur-[1px] scale-110 z-10"></div>

    {/* text-contents: z-index 20*/}
    <div className="inset-0 absolute z-20 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-primary font-bold text-white text-3xl md:text-4xl lg:text-5xl">
        Ready to Join?
      </h2>
      <div className="space-y-6 text-lg text-[#f5f5f7] leading-relaxed">
        <p className="max-w-prose mx-auto my-[10px]">
          We always welcome new members.
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
