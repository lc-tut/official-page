import IntrodcutionBoxLayout from "../IntrodcutionBoxLayout";
import { FaCode } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";

export default function Activities() {
  return (
    <IntrodcutionBoxLayout title="活動内容" scrollTargetName="#activities">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="block rounded-xl border border-gray-800 p-4 dark:border-gray-500">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none">
              <FaCode className="text-4xl text-gray-600 dark:text-white" />
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-white">
            ソフトウェア開発
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            LinuxClubでは、主にWebアプリケーションの開発を行っています。
          </p>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            東京工科大学公式のサークル紹介ポータルサイトの、ClubPortalは本サークルで開発・運用されています。
          </p>
        </div>
        <div className="block rounded-xl border border-gray-800 p-4 dark:border-gray-500">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none">
              <FaServer className="text-4xl text-gray-600 dark:text-white" />
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-white">
            サーバー構築・運用
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            LinuxClubでは、オンプレ・クラウド両方のサーバー構築・運用を行っています。
          </p>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            八王子キャンパスのサークルの中で唯一、物理的なサーバー用マシン・ネットワーク機器を保有しており、部員が自由に触れる環境が整っています。
          </p>
        </div>
        <div className="block rounded-xl border border-gray-800 dark:border-gray-500 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none">
              <FaNetworkWired className="text-4xl text-gray-600 dark:text-white" />
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-white">
            AS運用
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            LinuxClubでは、
            <a
              className="dark:text-white px-1 underline"
              href="https://www.peeringdb.com/net/38324"
            >
              AS152865
            </a>
            を運用しております。
          </p>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            インターネットの基盤技術であるBGPを学び、実際に構築することで、ネットワーク技術の理解を深めています。
          </p>
        </div>
        <div className="block rounded-xl border border-gray-800 dark:border-gray-500 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none">
              <RiPresentationFill className="text-4xl text-gray-600 dark:text-white" />
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg dark:text-white">
            LT会
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            LinuxClubでは、定期的にLT会を開催しています。
          </p>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-600 dark:text-gray-400">
            部員が日頃学んでいる技術などについて発表し、意見交換を行っています。
          </p>
        </div>
      </div>
    </IntrodcutionBoxLayout>
  );
}
