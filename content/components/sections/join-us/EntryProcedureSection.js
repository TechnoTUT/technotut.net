import Link from "next/link";


export const EntryProcedureSection = ({ language }) => {
    // 日本語と英語のコンテンツをオブジェクトで管理
    const content = {
        ja: {
            watch: "見学・体験入部",
            watchText: "活動時間中に部室までお越しください。部室の場所はこちら、クラブハウス2階 音楽技術部室となります。",
            clubFee: "部費",
            clubFeeText: (
                <>
                    初年度の部費は
                    無料
                    です。<br />
                    二年目以降は年間2,000円が必要となり、再入部手続きの際にお支払いいただきます。<br />
                    運営の都合上、毎年入部手続きを行う必要があります。再入部手続きをしなければ費用は一切発生しないため、
                    少しでも興味がある方はまずは気軽に入部してみることをおすすめします。
                </>
            ),
            join: "入部方法",
            joinSteps: [
                "1. 一度部室にお越しください。",
                "2. 部員名簿に署名と捺印をしていただきます。",
                "3. 入部手続きが完了しました。"
            ],
            contact: "連絡先",
            contactText: (
                <>
                    部室に来るのが不安です！という方は、
                    <Link href="/contact">
                        こちら
                    </ Link>
                    からお問い合わせください。<br />
                    Twitter :&nbsp;
                    <Link href="https://twitter.com/ToyohashiTechno">
                        @ToyohashiTechno
                    </Link>
                    <br />
                    Instagram :&nbsp;
                    <Link href="https://www.instagram.com/tut_technotut">
                        @tut_technotut
                    </Link>
                    <br />
                    Mail : contact@ ※末尾にtechnotut.netを補完してください
                </>
            ),
            clubroomLocation: "部室の場所について",
            clubroomLocationText: "クラブハウス2階 音楽技術部室となります。ぜひお気軽にお越しください。"
        },
        en: {
            watch: "Watch and try to join",
            watchText: "Please come to the club room during the activity time. The location of the club room is here, Club House 2F Music & Live Production Club Room.",
            clubFee: "Club Fee",
            clubFeeText: (
                <>
                    The first year is FREE.<br />
                    From the second year onward, the annual fee is 2,000 yen, which will be collected when you rejoin the club.<br />
                    For administrative reasons, you need to renew your membership each year. If you choose not to rejoin the following year,
                    you will not be charged anything. So if you are even slightly interested, we recommend signing up for now!
                </>
            ),
            join: "How to join",
            joinSteps: [
                "1. Please come to the club room once.",
                "2. Please sign and stamp the member list.",
                "3. The membership procedure is complete."
            ],
            contact: "Contact",
            contactText: (
                <>
                    worried about coming to the club room, please contact us from&nbsp;
                    <Link href="/contact">
                        here
                    </Link>
                    .<br />
                    Twitter :&nbsp;
                    <Link href="https://twitter.com/ToyohashiTechno">
                        @ToyohashiTechno
                    </Link>
                    <br />
                    Instagram :&nbsp;
                    <Link href="https://www.instagram.com/tut_technotut">
                        @tut_technotut
                    </Link>
                    <br />
                    Mail : contact@ ※Please complete technotut.net at the end
                </>
            ),
            clubroomLocation: "Where is the club room?",
            clubroomLocationText: "It is the 2nd floor of the club house. Please feel free to come. ."
        }
    };

    return (
        <section className="py-16 relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute inset-0 bg-black z-0"></div>
            <div className="absolute inset-0 bg-[url('/images/index/bg-texture-1.jpg')] bg-center z-10 opacity-10 blur-[2px]"></div>
            <div className="absolute inset-0 bg-[length:220px] bg-repeat opacity-45 bg-[url('/images/index/noise-light.png')] bg-center z-15"></div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* 見学・体験入部 */}
                    <div className="space-y-4">
                        <h3 className="relative text-2xl font-bold text-white pl-5">
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                            {content[language].watch}
                        </h3>
                        <div className="text-gray-200">
                            <p>{content[language].watchText}</p>
                        </div>
                    </div>

                    {/* 部費 */}
                    <div className="space-y-4">
                        <h3 className="relative text-2xl font-bold text-white pl-5">
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                            {content[language].clubFee}
                        </h3>
                        <div className="text-gray-200">
                            <p>{content[language].clubFeeText}</p>
                        </div>
                    </div>

                    {/* 入部方法 */}
                    <div className="space-y-4">
                        <h3 className="relative text-2xl font-bold text-white pl-5">
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                            {content[language].join}
                        </h3>
                        <div className="text-gray-200">
                            {content[language].joinSteps.map((step, index) => (
                                <p key={index}>{step}</p>
                            ))}
                        </div>
                    </div>

                    {/* 連絡先 */}
                    <div className="space-y-4">
                        <h3 className="relative text-2xl font-bold text-white pl-5">
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                            {content[language].contact}
                        </h3>
                        <div className="text-gray-200">
                            <p>{content[language].contactText}</p>
                        </div>
                    </div>

                    {/* 部室の場所 */}
                    <div className="space-y-4">
                        <h3 className="relative text-2xl font-bold text-white pl-5">
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-orange-700"></span>
                            {content[language].clubroomLocation}
                        </h3>
                        <div className="text-gray-200">
                            <p>{content[language].clubroomLocationText}</p>
                        </div>

                        {/* Google Map */}
                        <div id="map-container" className="w-full h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3280.163613237997!2d137.406626!3d34.701053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f6!3m2!1m1!2zMzTCsDQyJzAzLjgiTiAxMzfCsDI0JzIzLjkiRQ!5e0!3m2!1sja!2sjp!4v1678476006193!5m2!1sja!2sjp"
                                width="100%"
                                height="450"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
