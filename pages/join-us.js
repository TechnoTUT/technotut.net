import { useState } from "react";
import config from "@config/config.json"
import Base from "@layouts/Baseof"
import Image from "next/image"
import Link from "next/link"
import { getListPage } from "../lib/contentParser"

import { BannerSection } from "@content/components/sections/join-us/BannerSection"
import { EntryProcedureSection } from "@content/components/sections/join-us/EntryProcedureSection"

import { Shinkan2025Section } from "@content/components/sections/join-us/Shinkan2025Section"


const Home = ({ frontmatter }) => {
  const { title } = config.site;

  // 言語の状態を管理（デフォルトは "ja"）
  const [language, setLanguage] = useState("ja");

  return (
    <div>
      <Base title={title}>

        {/* バナーの本来の位置はここ*/}
        {/* < BannerSection /> */}

        {/* 言語切り替えタブ */}
        < div className="flex justify-end space-x-4 bg-black">
          <button
            className={`px-4 py-2 border-b-2 ${language === "ja" ? "border-blue-500 font-bold text-white" : "border-transparent text-gray-300"
              }`}
            onClick={() => setLanguage("ja")}
          >
            日本語
          </button>
          <button
            className={`px-4 py-2 border-b-2 ${language === "en" ? "border-blue-500 font-bold text-white" : "border-transparent text-gray-300"
              }`}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
        </div>

        {/* 新歓シーズンのみこちらに*/}
        {/* 言語ごとのコンテンツ切り替え */}
        {language === "ja" ? (
          <>
            <Shinkan2025Section language="ja" />
          </>
        ) : (
          <>
            <Shinkan2025Section language="en" />
          </>
        )
        }
        < BannerSection />

        {/* 言語ごとのコンテンツ切り替え */}
        {
          language === "ja" ? (
            <>
              <EntryProcedureSection language="ja" />
            </>
          ) : (
            <>
              <EntryProcedureSection language="en" />
            </>
          )
        }
      </Base >
    </div >
  );
};

export default Home;