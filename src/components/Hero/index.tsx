import tech from "../../assets/tech.svg";
import styles from "./style.module.scss";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="container max-w-screen-xl px-12 lg:px-28">
        <div className="flex items-center flex-col lg:flex-row">
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

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row"></div>
          </div>

          <div className="flex lg:justify-end basis-1/2 text-center w-full mt-8 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src={tech}
              alt="email illustration vector art"
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.scroll}></div>
        </div>
      </div>
    </div>
  );
}
