"use client";

import React from "react";

import { LineChart, Line } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const renderLineChart = (
  <LineChart width={40} height={40} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
type Props = {};

const Total = (props: Props) => {
  return (
    <div className="bg-blue-500 bg-opacity-5 h-fit">
      <div
        className="flex max-w-sm gap-4 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div>

        <p className="text-gray-500 font-normal">Total Sales</p>
        <p className="text-gray-500 font-bold text-xl">$ 59903</p>
        
        <div className="flex gap-2 mt-8 w-full">
          <p className="text-gray-500 text-nowrap font-normal">Since last week</p>
          <p className="text-gray-500  font-normal">15.45%</p>
        </div>
        </div>
        {renderLineChart}
      </div>
    </div>
  );
};

export default Total;
