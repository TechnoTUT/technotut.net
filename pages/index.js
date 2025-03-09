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
      <section className="section pb-[350px]">
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
                className="mx-auto mt-12 z-[-100] object-cover"
                src={banner.image}
                fill
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* abouts */}
      {about.map((about, index) => {
        const isEven = index % 2 == 0;
        return (
          <section
            key={`about-${index}`}
            className={`section ${isEven && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`about-carousel ${!isEven && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      about.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={about?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {about?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`about-content mt-0 md:mt-0 ${
                    !isEven && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">{about?.title}</h2>
                  <p className="mt-4 mb-2">{about?.content1}</p>
                  <p className="mt-4 mb-2">{about?.content2}</p>
                  {about.button.enable && (
                    <Link
                      href={about?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {about?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

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
