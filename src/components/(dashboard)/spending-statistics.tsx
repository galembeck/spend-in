/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function SpendingStatistics() {
  const [state, setState] = useState<{
    series: { name: string; data: number[] }[];
    options: ApexCharts.ApexOptions;
  }>({
    series: [
      {
        name: "Expense",
        data: [12, 3, 14, 7.5, 4.3, 15, 7.5, 8.2, 15, 12, 7.5, 13],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousand)",
        },
      },
      fill: {
        opacity: 1,
        colors: ["#725CFF"],
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const value = series[seriesIndex][dataPointIndex];

          const monthMap: { [key: string]: string } = {
            Jan: "January",
            Feb: "February",
            Mar: "March",
            Apr: "April",
            May: "May",
            Jun: "June",
            Jul: "July",
            Aug: "Augst",
            Sep: "September",
            Oct: "October",
            Nov: "November",
            Dec: "December",
          };

          const monthAbbreviation = w.globals.labels[dataPointIndex];
          const monthFullName =
            monthMap[monthAbbreviation] || monthAbbreviation;

          return `
            <div class="px-3 py-2 rounded-lg bg-white shadow-md">
              <div class="text-xs text-neutral-800 mb-1"><span class="font-bold">Mês:</span> ${monthFullName}</div>
              <div class="font-semibold text-[#725CFF]"><span class="font-bold">Expense:</span> $${value.toLocaleString()} thousand</div>
            </div>
          `;
        },
      },
    },
  });

  return (
    <div className="flex flex-col bg-white rounded-lg p-6 gap-2">
      <h1 className="font-semibold text-base text-secondary">
        Spending Statistics
      </h1>
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}
