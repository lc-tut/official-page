import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { MenuItem } from "../types/menuItems";

type MenuItemProps = {
  menuItems: MenuItem[];
};

export default function Navbar({ menuItems }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="LinuxClub Logo" className="h-8" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${!isOpen ? "hidden" : ""}`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 w-full md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${isOpen ? "absolute" : ""}`}
          >
            {menuItems.map((item, key) => {
              return (
                <li key={key}>
                  <Link
                    to={item.href}
                    className="block py-2 px-3 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 md:text-gray-900 md:hover:text-gray-900 md:p-0 md:dark:text-gray-300 md:dark:hover:text-gray-100 cursor-pointer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-64}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
