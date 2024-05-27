"use client";
// import ApexCharts from "apexcharts";
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {};

const Sales = (props: Props) => {
  const [activeButton, setActiveButton] = useState("12 Months");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const [state, setState] = useState({
    series: [
      {
        name: "Organic",
        color: "#1A56DB",
        data: [
          { x: "Mon", y: 231 },
          { x: "Jan", y: 122 },
          { x: "Feb", y: 63 },
          { x: "Mar", y: 421 },
          { x: "Apr", y: 122 },
          { x: "May", y: 323 },
          { x: "Jun", y: 111 },
          { x: "Jul", y: 131 },
          { x: "Aug", y: 211 },
          { x: "Sept", y: 114 },
          { x: "Oct", y: 151 },
          { x: "Nov", y: 611 },
          { x: "Dec", y: 117 },
        ],
      },
    ],
    options: {
      colors: ["#1A56DB", "#FDBA8C"],
      series: [
        {
          name: "Organic",
          color: "#1A56DB",
          data: [
            { x: "Mon", y: 231 },
            { x: "Jan", y: 122 },
            { x: "Feb", y: 63 },
            { x: "Mar", y: 421 },
            { x: "Apr", y: 122 },
            { x: "May", y: 323 },
            { x: "Jun", y: 111 },
            { x: "Jul", y: 131 },
            { x: "Aug", y: 211 },
            { x: "Sept", y: 114 },
            { x: "Oct", y: 151 },
            { x: "Nov", y: 611 },
            { x: "Dec", y: 117 },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    } as ApexOptions,
  });

  return (
    <div className="min-w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className=" mb-10 flex flex-col gap-3 lg:flex-row justify-between">
        <div className="flex justify-between items-center">
          <p className="">Sales Report</p>
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                  d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
                />
              </svg>
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                  strokeWidth="3"
                  d="M6 12h.01m6 0h.01m5.99 0h.01"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Periods */}
        <div>
          <button
            type="button"
            className={`text-gray-900 bg-gray border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
              activeButton === "12 Months"
                ? "shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80"
                : ""
            }`}
            onClick={() => handleButtonClick("12 Months")}
          >
            12 Months
          </button>
          <button
            type="button"
            className={`text-gray-900 bg-gray border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
              activeButton === "6 Months"
                ? "shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80"
                : ""
            }`}
            onClick={() => handleButtonClick("6 Months")}
          >
            6 Months
          </button>
          <button
            type="button"
            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
              activeButton === "30 Days"
                ? "shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80"
                : ""
            }`}
            onClick={() => handleButtonClick("30 Days")}
          >
            30 Days
          </button>
          <button
            type="button"
            className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
              activeButton === "7 Days"
                ? "shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80"
                : ""
            }`}
            onClick={() => handleButtonClick("7 Days")}
          >
            7 Days
          </button>
        </div>

        {/* Others */}
        <div className="hidden lg:block">
          <button
            type="button"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                strokeWidth="3"
                d="M6 12h.01m6 0h.01m5.99 0h.01"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <p className="text-grey-300">Avg per month</p>
        <p className="font-bold text-3xl">$ 38,500</p>
      </div>

      <ApexCharts
        type="bar"
        options={state.options}
        series={state.series}
        height={320}
        width="100%"
      />
    </div>
  );
};

export default Sales;
