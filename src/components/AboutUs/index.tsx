import IntrodcutionBoxLayout from "../IntrodcutionBoxLayout";
import { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "2rem",
  marginBottom: "1rem",
};
const videoWrapperStyle: CSSProperties = {
  width: "100%",
  maxWidth: "800px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};
const responsiveIframeStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  aspectRatio: 16 / 9 /* 16:9のアスペクト比 */,
};
const iframeStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
};

export default function AboutUs() {
  return (
    <IntrodcutionBoxLayout
      title="LinuxClubについて"
      scrollTargetName="#aboutus"
    >
      <div className="">
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
          私たちLinuxClub(リナックスクラブ)は、平成16年に設立された東京工科大学公式の文化系同好会です。
        </p>
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
          &quot;Linux&quot;と聞いて、Linuxに拘った研究活動などをしていると思われがちですが、プログラミング、機械学習、Webサイト作成、電子工作、IoT、3Dプリンター、ネットワーク/サーバ構築など、技術系全般の探究活動を行っています。
        </p>
        <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
          また、毎年行われる学園祭「紅華祭」では、部員が制作したソフトウェアなどの展示を行っています。
        </p>

        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
          紹介動画
        </h3>

        <div style={containerStyle}>
          <div style={videoWrapperStyle}>
            <figure style={responsiveIframeStyle}>
              <iframe
                style={iframeStyle}
                loading="lazy"
                src="https://www.youtube-nocookie.com/embed/P-QN-Y7tp3M?si=3DxBB1qao47y0g10"
                title="LinuxClub 紹介動画"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </figure>
          </div>
        </div>
      </div>
    </IntrodcutionBoxLayout>
  );
}
