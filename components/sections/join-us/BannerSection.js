import Image from "next/image";
import Link from "next/link";
import React from 'react';

const BannerSection = () => {
  return (
    <section id="target-section" className="relative py-16 w-full overflow-hidden border-t border-b border-white/10">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/index/bg-texture-1.jpg')] bg-center z-10 opacity-10 blur-[2px]"></div>
      <div className="absolute inset-0 bg-[length:220px] bg-repeat opacity-45 bg-[url('/images/index/noise-light.png')] bg-center z-15"></div>

      {/* コンテンツ */}
      <div className="relative z-20 container mx-auto text-center px-4">
        <h1 className="font-primary font-bold text-white text-3xl md:text-4xl lg:text-5xl">
          入部方法について
        </h1>
        <strong className="mt-2 block text-rose-400 text-lg md:text-xl">How to join</strong>
      </div>
    </section>
  );
};

export default BannerSection;
