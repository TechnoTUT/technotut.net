import config from "@config/config.json"
import Base from "@layouts/Baseof"
import Image from "next/image"
import Link from "next/link"
import { getListPage } from "../lib/contentParser"

const BannerSection = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-[url('/images/index/top.jpg')] bg-center blur-[1px] scale-110 z-10"></div>

    <div className="absolute inset-0 bg-black/40 z-20">
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <Link href="/independent" className="mb-4">
          <h1 className="font-primary font-bold text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl">
            豊橋技術科学大学 <br className="block md:hidden" />音楽技術部
          </h1>
        </Link>
        <strong className="mt-4 text-white text-lg md:text-xl">Music & Live production Club - TechnoTUT</strong>
        <div className="max-w-screen-md mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center bg-ai-gradient bg-clip-text text-transparent">
          Welcome to the Crossroads of Musics and Technologies!
          </h2>
          <div className="space-y-6 text-lg text-[#f5f5f7] leading-relaxed">
            <p className="max-w-prose mx-auto text-left">
              We are the creative club centering on DJ-driven music events. Through music, visual & light performances, design, and various technology, each member is exploring his/her passions and expressing the power of music in various ways.
            </p>
            <p className="max-w-prose mx-auto text-left">
              We are continuing to create special experiences for every participant, with the gathering of each individual&apos;s maximized passion. 
            </p>
          </div>
        </div>

        <Link href="/" className="mt-8 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
          For Japanese &gt;&gt; 
        </Link>
      </div>
    </div>
  </section>
)

const ActivityGroupSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-black z-0"
    ></div>
    <div className="absolute inset-0 bg-[url('/images/index/bg-texture-1.jpg')] bg-center z-10 opacity-10 blur-[2px]"></div>
    <div className="absolute inset-0 bg-[length:220px] bg-repeat opacity-45 bg-[url('/images/index/noise-light.png')] bg-center z-15"></div>

    <div className="container mx-auto px-4 relative z-20">
      <h2 className="mt-8 mb-8 text-center text-3xl font-bold text-[#f5f5f7]">Discover What We Do</h2>
      <div className="mx-auto max-w-4xl space-y-6 text-lg text-gray-200">
        <p>
          We actively organize a wide range of events, starting with our on-campus DJ event, <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold">The Utopia Tone</span> . Our activities include training camps to strengthen our community, collaboration events with music circles from other universities, and participation in external events like M3.
        </p>
        <p>
          Additionally, we host over 20 small-scale, themed DJ parties throughout the year. Each member provides their unique style and creativity with these opportunity. 
        </p>
        <p>
          Furthermore, we host DJ workshops and networking events on campus. Tehse are our attempts to create an open and welcoming environment whitch anyone can be interested in us and get into the world of music easily. 
        </p>
        <p>
          Our past achievements and upcoming events can be found in detail on the <Link href="/activity" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400"> Activity Information </Link>.
        </p>
      </div>
      <h2 className="mt-12 mb-8 text-center text-3xl font-bold text-[#f5f5f7]">Meet the Units</h2>
      <div className="mx-auto max-w-4xl mb-16 text-lg text-gray-200">
        <p>
        Our club is home to several activity units such as Event Operations Unit, DJ Unit, and Music Production Unit.
        Members are free to join any unit based on their interests, and of course can be involved in multiple groups.
        There are no restrictions or obligations <span className="tracking-[-0.2em]">------</span> just a place where you can enjoy music and creativity at your own pace, following what moves your heart.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            Event Operations
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400"></strong>
            <p>
            The Event Operations Unite is planning and managing a wide variety of events: from casual after-school gatherings in our clubroom to <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold">The Utopia Tone</span> in Commons I. Even more, performances at the Gikadai Festival and external clubs! 
            <span className="tracking-[-0.2em]">------</span> We create spaces where everyone can have fun and stages where everyone can shine at their best, all with our own hands!
            </p>
            <div className="relative h-[400px] w-full my-8">
              <div className="absolute inset-0 bg-ai-gradient">
                <div className="h-full w-full">
                  <Image
                    src="/images/index/event/camp.jpg"
                    fill
                    alt="camp"
                    className="object-cover p-[2px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-15 z-30 m-[2px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            DJ : Disc Jockey
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">Unite People, Music, and the Dancefloor.</strong>
            <p>
              The DJ Crew hones their skills and performs with motivation driven by our signature event, <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold">The Utopia Tone</span>, as well as DJ appearances at on-campus events like the Gikadai Festival.
            </p>
            <p>
              Our regular activities revolve around weekday DJ events, whitch members practice and perform during after-school hours or between classes. Also some members extend their reach and presence beyond campus, as a DJ player or organizer in Aichi and Shizuoka.
            </p>
            <div className="relative h-[400px] w-full my-8">
              <div className="absolute inset-0 bg-ai-gradient">
                <div className="h-full w-full">
                  <Image
                    src="/images/index/dj/dj-jokka.JPG"
                    fill
                    alt="dj-Jokka"
                    className="object-cover p-[2px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 z-30 m-[2px]"></div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full my-8">
              <div className="absolute inset-0 bg-ai-gradient">
                <div className="h-full w-full">
                  <Image
                    src="/images/index/dj/dj-image.jpg"
                    fill
                    alt="dj-image"
                    className="object-cover p-[2px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 z-30 m-[2px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            VJ & LJ : Video & Light Jockey
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">Professionals of Immersive Stage Production.</strong>
            <p>
              We specialize in visual (VJ) and lighting (LJ) performances. Our regular activities include mastering stage production techniques, developing equipment and software, and of course illuminating our clubroom brightly!

              At events, we make inspiring spaces by harnessing our technology and performances.
            </p>
            <div className="relative h-[400px] w-full my-8">
              <div className="absolute inset-0 bg-ai-gradient">
                <div className="h-full w-full">
                  <Image
                    src="/images/index/vj/vj-image.jpg"
                    fill
                    alt="vj-image"
                    className="object-cover p-[2px]"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-45 z-30 m-[2px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            Media
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">Bringing the Essence of TechnoTUT to Life.</strong>
            <p>
              Through event flyer design, social media management and website updates, we handle all aspects of communication. And also througn creation of video content and illustrations, we appeal our potential to audiences&apos; senses.

              By transforming creativity and passion into tangible forms, we bring the essence of TechnoTUT to a wider audience.
            </p>
            <div className="flex flex-wrap mx-auto">
              <div className="grid grid-cols-1 justify-items-center mx-auto">
                <Image
                  src="/images/index/media/media-1.png"
                  width={300}
                  height={300}
                  alt="テクノ部公式キャラクターテクノちゃん(みにまむてくのちゃんver.)"
                  className="mx-auto object-center"
                />
                <div className="text-xs text-gray-300 text-center">TechnoTUT Official Character <br className="block md:hidden" />Techno-chan (Minimal Techno-chan ver.)</div>
              </div>

              <div className="grid grid-cols-1 justify-items-center mx-auto">
                <div className="relative h-[371px] w-[268px] my-8 mx-auto">
                  <div className="absolute inset-0 bg-ai-gradient ">
                    <div className="h-full w-full">
                      <Image
                        src="/images/index/media/flyer_20240713.png"
                        fill
                        alt="dtm-image"
                        className="object-cover p-[2px] aspect-2682/3709"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 z-30 m-[2px]"></div>
                    <div className="text-xs text-gray-300 my-[21px]">Flyer  2024/7/13  Collaboration with GilleWorkers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            DTM
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">Shape What You &quot;Love&quot;.</strong>
            <p>
              Our unit creates various musics driven by our passion for the sounds we love. Every Friday, we gather on Discord to share and increase our insights, motivation, and creativity together. We also distribute our original tracks at M3, held every spring and autumn.
            </p>
            <p><Link href="https://technotut.bandcamp.com/" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400">Check out our discography here. </Link></p>
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
        </div>

        <div className="space-y-4">
          <h3 className="relative text-2xl font-bold text-white pl-5">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
            Tech & DIY
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400">Masters of Sound, Visuals, and Light <span className="tracking-[-0.2em]">------</span> The Magicians Behind the Stage.</strong>
            <p>
              We explore and experiment with cutting-edge technology based on our members&apos; interests. Our activities include maintaining the club&apos;s internal servers, managing video streaming at campus event venues, and developing lighting and stage production technologies to enhance live experiences.
              For more details, visit<Link href="https://noc.technotut.net/" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400"> noc.technotut.net </Link>.
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
            Ramen
          </h3>
          <div className="text-gray-200">
            <strong className="block mb-2 text-rose-400"></strong>
            <p>
            We travel in search of ramen and karaage <span className="tracking-[-0.2em]">------</span><span className="font-serif italic"> une des meilleures tables, vaut le voyage.</span> Through our food adventures, we aim to discover and share these culinary gems with the world.
            
            Check out our members&apos; top recommendations on the<Link href="/ramen" className="relative bg-gradient-to-r from-fuchsia-400 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:text-fuchsia-400"> Toyohashi Ramen Map. </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

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

const Home = ({ frontmatter }) => {
  const { title } = config.site
  return (
    <Base title={title}>
      <BannerSection />
      <ActivityGroupSection />
      <CallToActionSection />
    </Base>
  )
}

export default Home

