'use client'
import "./globals.css";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import my_profile_image from "../../public/my_profile_image.jpg";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [clicked, setClicked] = useState(false);
  function handleClick(event: any): void {
    setClicked(!clicked);
  }

  return (
    <html lang="en">
      <body className="">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className={`inline-flex lg:hidden items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
            clicked ? "ml-64" : ""
          }`}
          onClick={handleClick}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto pb-5 px-3 h-full bg-blue-950 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
              {/* Droitdash  */}
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 py-8 text-base font-normal text-gray-100  rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                >
                  <svg
                    aria-hidden="true"
                    className="w-12 h-12 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-100   dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Droitdash</span>
                </a>
              </li>

              {/* Dashboard */}
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-dashboard"
                  data-collapse-toggle="dropdown-dashboard"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-100 hover:text-black  dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 text-sm ml-3 text-left whitespace-nowrap">
                    Dashboard
                  </span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdown-dashboard" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Kanban
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </li>

              {/* key metrics */}
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-100 hover:text-black  dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Key Metrics</span>
                </a>
              </li>
            </ul>
            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
              {/* Documents */}
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-documents"
                  data-collapse-toggle="dropdown-documents"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-100 hover:text-black  dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Documents
                  </span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdown-documents" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Sales Report
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      User Metrics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Portal Documentation
                    </a>
                  </li>
                </ul>
              </li>

              {/* Analytics */}
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-analytics"
                  data-collapse-toggle="dropdown-analytics"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-100 hover:text-black  dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Analytics
                  </span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul id="dropdown-analytics" className="hidden py-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      All Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Favorites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-100 hover:text-black  rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      New Analytics
                    </a>
                  </li>
                </ul>
              </li>

              {/* Notifications */}
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-100 hover:text-black  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-100 hover:text-black  dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Notifications
                  </span>
                  <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-blue-600 dark:bg-primary-200 dark:text-primary-800">
                    6
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex  dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
            <div className="w-[90%] rounded cursor-pointer p-5 space-y-3 bg-white bg-opacity-25 hover:bg-opacity-35">
              <div className="flex justify-between items-center">
                <div>
                  <div
                    id="tooltip-jese"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Jese Leos
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <Image
                    data-tooltip-target="tooltip-jese"
                    height={30}
                    width={30}
                    className="h-30 w-30 rounded-full"
                    src={my_profile_image}
                    alt="Medium avatar"
                  />
                </div>
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </div>

              {/* description */}
              <div>
                <p className="font-semibold text-gray-100">Bryan Murasira</p>
                <p className="overflow-hidden text-xs font-medium text-gray-300">
                  bryanmurasira@gmail.com
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div>{children}</div>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
