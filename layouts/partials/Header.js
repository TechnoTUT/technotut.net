import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const { main } = menu;
  const [navOpen, setNavOpen] = useState(false);
  const [exploreHovered, setExploreHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { enable, label, link } = config.nav_button;

  // Split menu into always-visible and hidden (for dropdown/explore)
  // Always visible: Home, Activity
  // Explore items: everything else
  const primaryItems = main.filter(item => item.name === "Home" || item.name === "Activity");
  const secondaryItems = main.filter(item => item.name !== "Home" && item.name !== "Activity");

  // Track hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto close on route change
  useEffect(() => {
    setNavOpen(false);
    setExploreHovered(false);
  }, [router.asPath]);

  const isLinkActive = (url) => {
    if (!mounted) return false;
    return router.asPath === url;
  };

  return (
    <header className="header sticky top-0 z-50 bg-[#0a0a0c]/80 text-[#f5f5f7] border-b border-white/10 backdrop-blur-md">
      <nav className="navbar container flex items-center justify-between relative">
        {/* ロゴ */}
        <div className="order-0">
          <Logo src="/images/logo/Logo_Bblack.svg" />
        </div>

        {/* デスクトップ ナビゲーション */}
        <div className="order-1 hidden lg:flex items-center ml-auto mr-8">
          <ul className="navbar-nav flex flex-row items-center space-x-6">
            {primaryItems.map((item, i) => (
              <li key={`primary-${i}`} className="nav-item">
                <Link
                  href={item.url}
                  className={`nav-link block relative py-4 px-3 text-[15px] font-bold tracking-wide transition-colors ${
                    isLinkActive(item.url) ? "text-rose-500" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isLinkActive(item.url) && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-rose-500 rounded" />
                  )}
                </Link>
              </li>
            ))}

            {/* Explore Hover Trigger (Slide B: Floating Dropdown Context) */}
            <li 
              className="nav-item relative"
              onMouseEnter={() => setExploreHovered(true)}
              onMouseLeave={() => setExploreHovered(false)}
            >
              <span className={`nav-link inline-flex items-center py-4 px-3 text-[15px] font-bold tracking-wide cursor-pointer transition-colors ${
                exploreHovered ? "text-white" : "text-gray-300"
              }`}>
                Explore
                <svg 
                  className={`h-4 w-4 fill-current ml-1.5 transition-transform duration-300 ${exploreHovered ? "rotate-180 text-rose-500" : ""}`} 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>

              {/* Mega Menu Dropdown (Slide B: 3D Floating Drawer) */}
              <div className="absolute top-full right-0 w-[580px] pt-3 z-50 perspective-1000">
                <div 
                  className={`megamenu-3d-card bg-[#0a0a0c]/90 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 ${
                    exploreHovered ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  style={{
                    transform: exploreHovered ? 'rotateX(0deg) scale(1)' : 'rotateX(-15deg) scale(0.95)',
                    opacity: exploreHovered ? 1 : 0
                  }}
                >
                  {/* Glass Card Header */}
                  <div className="border-b border-white/5 pb-3 mb-4 flex justify-between items-center">
                    <span className="text-xs uppercase tracking-widest text-rose-500 font-extrabold">Explore Menu</span>
                    <span className="text-[10px] text-gray-500 font-light">Interactive Navigation</span>
                  </div>
                  
                  {/* Grid of Links */}
                  <div className="grid grid-cols-2 gap-3">
                    {secondaryItems.map((item, i) => (
                      <Link
                        key={`sec-${i}`}
                        href={item.url}
                        className="futuristic-item flex flex-col p-3 rounded-xl transition-all duration-200"
                      >
                        <span className="text-[14px] font-bold text-white group-hover:text-rose-400 transition-colors flex items-center">
                          {item.name}
                          <svg className="w-3.5 h-3.5 ml-1.5 opacity-0 -translate-x-1 transition-all duration-200 text-rose-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                        {item.description && (
                          <span className="text-[11px] text-gray-400 mt-1 font-light leading-snug">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* モバイル用 ナビゲーションメニュー */}
        <div
          id="nav-menu"
          className={`order-3 lg:order-1 ml-auto lg:hidden w-full overflow-hidden transition-all duration-300 ${
            navOpen ? "max-h-[1000px] bg-[#0a0a0c]/98 border-t border-white/10 mt-2 py-4 px-2" : "max-h-0"
          }`}
        > 
          <ul className="navbar-nav flex flex-col w-full space-y-2">
            {main.map((item, i) => (
              <li className="nav-item w-full" key={`mob-${i}`}>
                <Link
                  href={item.url}
                  onClick={() => setNavOpen(false)}
                  className={`nav-link block py-3 px-4 rounded-xl transition-all ${
                    isLinkActive(item.url) 
                      ? "bg-rose-500/10 text-rose-500 font-extrabold" 
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {enable && (
              <li className="mt-4 pt-2 border-t border-white/5 flex justify-center">
                <Link 
                  className="w-full text-center py-[12px] px-6 text-sm font-semibold text-white rounded-[25px] bg-gradient-to-br from-blue-500 to-pink-500 hover:opacity-90 transition-all duration-300" 
                  href={link}
                  onClick={() => setNavOpen(false)}
                >
                  {label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* nav-button (デスクトップ用) */}
        {enable && (
          <div className="order-2 ml-4 hidden lg:flex">
            <Link className="py-[10px] px-6 text-sm font-semibold text-white rounded-[25px] bg-gradient-to-br from-blue-500 to-pink-500 hover:opacity-90 transition-all duration-300" href={link}>
              {label}
            </Link>
          </div>
        )}

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          id="show-button"
          className="order-1 flex cursor-pointer items-center lg:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
