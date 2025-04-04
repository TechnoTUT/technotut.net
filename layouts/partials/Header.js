import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  //router
  const router = useRouter();

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (

    <header className="header">
      <nav className="navbar container flex items-center justify-between">
        {/* ロゴ */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* メニュー */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ml-auto ${navOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        > 
        <ul className="navbar-nav flex flex-col w-full md:flex-row md:w-auto lg:space-x-0">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${router.asPath === menu.url ? "nav-link-active" : ""
                        }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {/* ✅ モバイルメニュー内にもボタンを追加 */}
            {enable && (
              <li className="mt-4 flex justify-center md:hidden">
                <Link className="btn btn-primary w-full text-center py-[14px]" href={link}>
                  {label}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* nav-button（右端に配置） */}
        {enable && (
          <div className="order-2 ml-auto hidden md:flex">
            <Link className="btn btn-primary py-[14px]" href={link}>
              {label}
            </Link>
          </div>
        )}

        {/* ハンバーガーメニュー（モバイル用） */}
        <button
          id="show-button"
          className="order-1 flex cursor-pointer items-center md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
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
