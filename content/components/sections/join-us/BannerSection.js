import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="relative h-[40vh] w-full overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/special/join-us.jpg"
          alt="Join Us"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/30 z-20">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <Link href="audio-heihachiro" className="mb-4">
            <h1 className="font-primary font-bold text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl">
              入部方法について
            </h1>
          </Link>
          <strong className="mt-4 text-white text-lg md:text-xl">How to join</strong>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
