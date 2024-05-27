"use client";
import "flowbite";
import MonthlySalesChart from "@/app/components/charts/MonthlySalesChart";
import Sales from "@/app/components/cards/Sales";
import Total from "@/app/components/cards/Total";
import Script from "next/script";
import Orders from "@/app/components/cards/Orders";
import OrdersChart from "@/app/components/charts/OrdersChart";
import TotalOrders from "@/app/components/cards/TotalOrders";

export default function Home() {
  return (
    <div className="flex flex-col  ml-0 lg:ml-64 h-screen w-full lg:w-auto bg-white">
      <div className="p-3 lg:p-10">
        {/* nav */}
        <section className="flex flex-col space-y-4 mb-12 ">
          <div className="flex justify-between">
            {/* Header */}
            <p className="hidden lg:block font-bold text-3xl">
              Viewer Demographics
            </p>

            <div className="flex space-x-2">
              <div>
                <form className="w-96 mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/* bell button */}
              <button
                type="button"
                className="text-gray-800 hover:text-white border border-gtext-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-6 h-6"
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
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                  />
                </svg>
              </button>

              {/* other icon */}
              <button
                type="button"
                className="text-gray-800 hover:text-white border border-gtext-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* tabs */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="flex items-center gap-2 p-4 border-b-2 rounded-t-lg"
                  id="value-comparison-styled-tab"
                  data-tabs-target="#styled-value-comparison"
                  type="button"
                  role="tab"
                  aria-controls="value-comparison"
                  aria-selected="false"
                >
                  <svg
                    className="w-[16px] h-[16px] text-gray-800 dark:text-white"
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
                      d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                    />
                  </svg>
                  Value Comparison
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="average-values-styled-tab"
                  data-tabs-target="#styled-average-values"
                  type="button"
                  role="tab"
                  aria-controls="average-values"
                  aria-selected="false"
                >
                  <svg
                    className="w-[16px] h-[16px] text-gray-800 dark:text-white"
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
                      d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
                    />
                  </svg>
                  Average values
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="flex items-center gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="configure-analysis-styled-tab"
                  data-tabs-target="#styled-configure-analysis"
                  type="button"
                  role="tab"
                  aria-controls="configure-analysis"
                  aria-selected="false"
                >
                  <svg
                    className="w-[16px] h-[16px] text-gray-800 dark:text-white"
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
                      d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
                    />
                  </svg>
                  configure analysis
                </button>
              </li>
              <li role="presentation">
                <button
                  className="flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="filter-analysis-styled-tab"
                  data-tabs-target="#styled-filter-analysis"
                  type="button"
                  role="tab"
                  aria-controls="filter-analysis"
                  aria-selected="false"
                >
                  <svg
                    className="w-[16px] h-[16px] text-gray-800 dark:text-white"
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
                      strokeWidth="2"
                      d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                    />
                  </svg>
                  filter analysis
                </button>
              </li>
            </ul>
          </div>
        </section>

        {/* charts */}
        <div id="default-styled-tab-content">
          {/* Value Comparison Charts */}
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-value-comparison"
            role="tabpanel"
            aria-labelledby="value-comparison-tab"
          >
            <section className="w-full flex flex-col gap-10 lg:flex-row py-3">
              {/* left side */}
              <div className="flex lg:w-2/3 flex-col gap-3">
                {/* totals */}
                <div className="flex gap-3 overflow-auto scrollbar-hide">
                  <Total />
                  <Total />
                  <Total />
                </div>

                <Sales />

                <Orders />
              </div>

              {/* right side */}
              <div className="flex-1 flex flex-col gap-5 w-full">
                {/* Orders list chart */}
                <div>
                  <OrdersChart />
                </div>

                {/* Monthly Sales */}
                <div>
                  <MonthlySalesChart />
                </div>

                {/* Total Orders */}
                <div>
                  <TotalOrders />
                </div>
              </div>
            </section>
          </div>

          {/* Average Values charts*/}
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-average-values"
            role="tabpanel"
            aria-labelledby="average-values-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              placeholder content
            </p>
          </div>

          {/* Configure Analysis charts */}
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-configure-analysis"
            role="tabpanel"
            aria-labelledby="configure-analysis-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              placeholder content
            </p>
          </div>

          {/* Filter Analysis charts */}
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-filter-analysis"
            role="tabpanel"
            aria-labelledby="filter-analysis-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              placeholder content
            </p>
          </div>
        </div>
      </div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
        strategy="beforeInteractive"
      />
    </div>
  );
}
