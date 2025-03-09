import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

const Home = ({ frontmatter }) => {
  const { banner, about, detail, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[500px] sm:pb-[600px] lg:pb-[650px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <Link href="/independent">
                <h1 className="font-primary font-bold text-white">{banner.title}</h1>
              </Link>
              <p className="mt-4 text-white">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12 z-[-1] object-cover"
                src={banner.image}
                fill
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>音楽とテクノロジーの交差点へようこそ</h2>
          <div>
            <p>わたしたちは、DJを主体とした音楽イベントを軸に、多彩なクリエイティブ活動を展開するサークルです。音楽、映像、照明、デザイン、テクノロジーなど部員ひとりひとりが興味のある分野で楽しみながら、音楽の持つ力を多角的に表現します。</p>
            <p>
            わたしたちは、個人の好きの対象物の魅力を最大限に表現し、イベントに参加者する人すべてが特別となる体験を提供しています。
            </p>
          </div>
        </div>
        
        <div>
        <h2>活動内容</h2>
          <div>
            <p>わたしたちは、学内DJイベント The Utopia Tone の主催をはじめ、部内の交流を深める充実した合宿、他大学音楽サークルとのコラボレーションイベント、そしてM3などの外部イベントへの積極的な参加などを通じて、多彩な活動を展開しています。年間20回以上にわたる小規模なテーマ別DJパーティーも開催し、部員ひとりひとりが個性を発揮しています。</p>
            <p>さらに、学内ではDJ講習会や交流会を実施し、わたしたちの活動に興味を持つ方々が、気軽に新たな音楽の世界へ足を踏み入れられる環境づくりに取り組んでいます。</p>
            <p>昨年度の活動実績および今年度の活動予定につきましては、<a href='https://technotut.net/activity'>活動情報 - Activity</a> にて詳細をご確認いただけます。</p>
          </div>
        </div>

        <div>
        <h2>活動班</h2>
          <div>
            <p>
            わたしたちの部活には、イベント運営班、DJ班、DTM班などいくつかの活動班があります。自分の興味に合わせ、好きな活動班に自由に参加でき、複数のグループに関わることも可能です。制約や強制は一切なく、ただ自分のペースで、心が動くままに楽しめる場所です。
            </p>
          </div>

          <h3>イベント運営</h3>
          <div>
            <strong></strong>
            <p></p>
          </div>

          <h3>DJ : Disc Jockey</h3>
          <div>
            <strong></strong>
            <p></p>
          </div>

          <h3>VJ & LJ : Video & Light Jockey</h3>
          <div>
            <strong></strong>
            <p></p>
          </div>

          <h3>Media</h3>
          <div>
            <strong></strong>
            <p></p>
          </div>

          <h3>DTM</h3>
          <div>
            <strong>&quot;好き&quot;を形に</strong>
            <p>己の好きな音楽を求めて制作活動を行っています。毎週金曜日にDiscordにて活動を行い、情報とやる気を共有しています。</p>
            <p>毎年春と秋に開かれるM3にて、オリジナル楽曲の頒布も行っております。</p>
          </div>

          <h3>Tech & DIY</h3>
          <div>
            <strong>音と映像と光を操る、舞台裏の魔術師</strong>
            <p>部員の興味関心に沿ってテクいものを触っています。サークル内サーバーの保守管理、学内イベント会場内の映像配信、照明技術などイベントに役立つ技術開発を行っています。</p>
            <p>詳細は <a href='https://noc.technotut.net/'>https://noc.technotut.net/</a> にてご確認いただけます。</p>
          </div>

          <h3>ら</h3>
          <div>
            <strong></strong>
            <p>そのために旅行する価値のある卓越したラーメンと唐揚げを求めて食べ歩き、広く世間に公開する活動を行っています。</p>
            <p><a href='https://technotut.net/activity'></a></p>
          </div>
        </div>
      
      </section>
      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
