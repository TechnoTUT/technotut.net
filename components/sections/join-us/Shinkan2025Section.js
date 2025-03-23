import config from "@config/config.json"
import Base from "@layouts/Baseof"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Shinkan2025Section = ({ language }) => {
    const scrollToTarget = () => {
        const element = document.getElementById('target-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const content = {
        ja: {
            title: "2025年度新入生歓迎イベント情報",
            jumptoJoinUs: (
                <>
                    入部方法は{' '}
                    <span
                        onClick={scrollToTarget}
                        className="text-blue-500 cursor-pointer"
                    >
                        こちら
                    </span>
                </>
            ),
            washitu: "和室イベント",
            washituDateTime: "4/2(金) 10:00~19:00(入退場自由)",
            washituLocation: "福利施設棟二階和室(食堂横)",
            washituText: (
                <>
                    学内の和室を利用して、リラックスした雰囲気のDJイベントを開催します。<br />
                    部員によるDJプレイを楽しみながら、部活動のことや大学生活について気軽に相談してみませんか? <br />
                    履修登録や授業のこと、一人暮らしのあれこれなど、気になることがあれば何でも相談OK! <br />
                    引っ越しのリフレッシュに、是非お立ち寄りください。
                </>
            ),
            soubukai: "総部会新歓",
            soubukaiLocation: "A209教室,A棟前ステージ",
            soubukaiDateTime: (
                <>
                    4/9(金) <br />
                    部活動展示& :12:25~16:30 <br />
                    ステージパフォーマンス:12:25~12:50
                </>
            ),
            soubukaiText: (
                <>
                    課外活動団体が集まり、各団体の活動内容を紹介するイベントです。音楽技術部は部員によるDJ,VJ,LJの実演や体験コーナーを設置します。<br />
                    他にもDTM班が製作した楽曲の展示や、技術班の活動紹介を行います<br />
                    音楽技術部の活動に興味がある方は、是非お立ち寄りください。
                </>
            ),
            utone: "The Utopia Tone",
            utoneLocation: "福利施設棟一階コモンズⅠ(コンビニ横)",
            utoneDateTime: (
                <>
                    ※予定です。最終的な情報は各SNSでお知らせします。入退場自由です。<br />
                    4/12(土) 09:00~18:00<br />
                    4/13(日) 09:00~18:00
                </>
            ),
            utoneText: (
                <>音楽技術部が主催する学内定期DJイベント、
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold"> The Utopia Tone </span> <br />
                    4月は新入生歓迎イベントとして、2日間にわたり開催します。<br />
                    音楽技術部の活動の集大成です。<br />
                    一日のみの参加もOK! お気軽にお立ち寄りください。
                </>
            ),
        },
        en: {
            title: "2025 Freshers' Welcome Event Information",
            jumptoJoinUs: (
                <>
                    For information on how to join, click{' '}
                    <span
                        onClick={scrollToTarget}
                        className="text-blue-500 cursor-pointer"
                    >
                        &nbsp;here
                    </span>
                </>
            ),
            washitu: "Washitsu Event",
            washituDateTime: "April 2 (Fri) 10:00~19:00 (Free entry & exit)",
            washituLocation: "Second floor of the Welfare Facility Building (next to the cafeteria)",
            washituText: (
                <>
                    Join us in a cozy Japanese-style room for a relaxing DJ event!<br />
                    Enjoy live DJ performances by our club members while chatting about student life and our club activities.<br />
                    Whether you have questions about course registration, classes, or even daily life matters, feel free to ask!<br />
                    Take a break from unpacking and drop by!
                </>
            ),
            soubukai: "Club Orientation Event",
            soubukaiLocation: "Classroom A209 & A Building Front Stage",
            soubukaiDateTime: (
                <>
                    April 9 (Fri) <br />
                    Club Booths: 12:25~16:30 <br />
                    Stage Performance: 12:25~12:50
                </>
            ),
            soubukaiText: (
                <>
                    This event brings together various extracurricular clubs to introduce their activities. <br />
                    The Music Technology Club will showcase live DJ, VJ, and LJ performances, along with hands-on experiences.<br />
                    We will also display original tracks produced by our DTM team and introduce the activities of our tech team.<br />
                    If you are interested, feel free to stop by!
                </>
            ),
            utone: "The Utopia Tone",
            utoneLocation: "Commons I, First Floor of the Welfare Facility Building (next to the convenience store)",
            utoneDateTime: (
                <>
                    ※ Tentative schedule. Final details will be announced on our social media.Free entry & exit.<br />
                    April 12 (Sat) 09:00~18:00<br />
                    April 13 (Sun) 09:00~18:00
                </>
            ),
            utoneText: (
                <>The Music Technology Club proudly presents its regular DJ event,
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-bold"> The Utopia Tone </span> <br />
                    This April, it will be held as a special welcome event for new students over two days.<br />
                    This event is the culmination of our club&apos;s activities.<br />
                    Whether you join for a day or both, feel free to drop by!
                </>
            ),
        },
    };

    return (
        <section className="py-16 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-black z-0"
            ></div>
            <div className="absolute inset-0 bg-[url('/images/index/bg-texture-1.jpg')] bg-center z-10 opacity-10 blur-[2px]"></div>
            <div className="absolute inset-0 bg-[length:220px] bg-repeat opacity-45 bg-[url('/images/index/noise-light.png')] bg-center z-15"></div>

            <div className="container mx-auto px-4 relative z-20">
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-center bg-ai-gradient bg-clip-text text-transparent">
                    {content[language].title}<br className="block md:hidden" /> </h1>
                <h3 className="text-center md:text-2xl font-bold text-gray-200">
                    {content[language].jumptoJoinUs}<br className="block md:hidden" />
                </h3>
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                            {content[language].washitu}
                        </h2>
                        <div className="text-gray-200">
                            <p>{content[language].washituDateTime}</p>
                        </div>
                        <div className="text-gray-200">
                            <p>{content[language].washituLocation}</p>
                        </div>
                        <div className="text-gray-200">
                            <p>{content[language].washituText}</p>
                        </div>
                        <div className="relative h-[400px] w-full my-8">
                            <div className="absolute inset-0 bg-ai-gradient">
                                <div className="h-full w-full">
                                    <Image
                                        src="/images/special/images_washitsu_2024.jpg"
                                        fill
                                        alt="dj-image"
                                        className="object-cover p-[2px]"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-30 z-30 m-[2px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="container mx-auto px-4 relative z-20">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                                {content[language].soubukai}
                            </h2>
                            <p className="text-gray-200">
                                {content[language].soubukaiDateTime}
                            </p>
                            <p className="text-gray-200">
                                {content[language].soubukaiLocation}
                            </p>
                            <p className="text-gray-200">
                                {content[language].soubukaiText}
                            </p>
                        </div>
                        <div className="relative h-[400px] w-full my-8">
                            <div className="absolute inset-0 bg-ai-gradient">
                                <div className="h-full w-full">
                                    <Image
                                        src="/images/special/images_shinkan_2024.jpg"
                                        fill
                                        alt="dj-image"
                                        className="object-cover p-[2px]"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-30 z-30 m-[2px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="container mx-auto px-4 relative z-20">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                                {content[language].utone}
                            </h2>
                            <p className="text-gray-200">
                                {content[language].utoneDateTime}
                            </p>
                            <p className="text-gray-200">
                                {content[language].utoneLocation}
                            </p>
                            <p className="text-gray-200">
                                {content[language].utoneText}
                            </p>
                        </div>
                        <div className="relative h-[400px] w-full my-8">
                            <div className="absolute inset-0 bg-ai-gradient">
                                <div className="h-full w-full">
                                    <Image
                                        src="/images/special/images_komonzu2404.jpg"
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
            </div>
        </section >
    );
}

export default Shinkan2025Section;
