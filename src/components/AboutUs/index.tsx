import IntrodcutionBoxLayout from '../IntrodcutionBoxLayout';

export default function AboutUs() {
    return(
        <IntrodcutionBoxLayout title="LinuxClubについて" scrollTargetName="#aboutus">
            <div className="">
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                    私たちLinuxClub(リナックスクラブ)は、平成16年に設立された東京工科大学公式の文化系同好会です。
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                &quot;Linux&quot;と聞いて、Linuxに拘った研究活動などをしていると思われがちですが、プログラミング、機械学習、Webサイト作成、電子工作、IoT、3Dプリンター、ネットワーク/サーバ構築など、技術系全般の探究活動を行っています。
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                また、毎年行われる学園祭「紅華祭」では、部員が制作したソフトウェアなどの展示を行っています。
                </p>
            </div>
        </IntrodcutionBoxLayout>
    )
}
