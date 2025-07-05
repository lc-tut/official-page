import tech from "../../assets/tech.svg";
import styles from "./style.module.scss";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-72px)] lg:h-[calc(100vh-64px)]  flex items-center justify-center dark:bg-gray-800/90">
      <div className="container max-w-screen-xl px-12 lg:px-28">
        <div className="flex items-center flex-col md:flex-row">
          <div className="basis-1/2 w-full">
            <h1 className="text-6xl font-semibold text-gray-800 dark:text-white lg:text-7xl py-6">
              テーマは
              <br />
              無限大。
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400">
              Linuxを研究する <span className="font-semibold">だけの</span>{" "}
              サークルではありません。
            </h2>
            <h2 className="text-gray-600 dark:text-gray-400">
              プログラミング、3Dプリンタ、電子工作など技術全般、触れます。
            </h2>

            {/* <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <a
                href="https://discord.gg/lcn"
                className="px-6 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Discordに参加
              </a>
            </div> */}
          </div>

          <div className="flex lg:justify-end basis-1/2 text-center w-full md:pl-2 mt-8 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src={tech}
              alt="LinuxClub Tech Illustration"
            />
          </div>
        </div>
        <div className={styles.scrollDownField}>
          <div className={styles.scroll}></div>
        </div>
      </div>
    </div>
  );
}
