import { SiZenn, SiDiscord, SiGithub } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 mt-28">
      <div className="mx-auto w-full">
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © {year} LinuxClub.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://discord.gg/Pq6sHz7qjc"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <SiDiscord />
            </a>
            <a
              href="https://zenn.dev/p/linux_club"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <SiZenn />
            </a>
            <a
              href="https://github.com/lc-tut"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
