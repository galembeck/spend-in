"use client";

import { negativeProductivity, positiveProductivity } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export function ProductivityCard() {
  const [activeTab, setActiveTab] = useState<"with" | "without">("with");
  const isWith = activeTab === "with";

  const items = isWith ? positiveProductivity : negativeProductivity;
  const iconType = isWith ? "tick" : "close";
  const chartImage = isWith
    ? "/assets/positive-productivity.svg"
    : "/assets/negative-productivity.svg";
  const title = isWith
    ? "Tracking business expenses down to the millisecond turns into inefficiency."
    : "Taking too long to tidy up administrative files makes it unproductive";

  return (
    <div className="w-full flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 space-y-6 md:mb-10">
        <div className="flex justify-center md:justify-start mb-10">
          <div className="inline-flex rounded-full bg-secondary-light-100">
            <button
              className={`px-10 py-3 text-sm rounded-full font-semibold ${
                isWith
                  ? "bg-primary text-white font-semibold"
                  : "text-secondary-light-300"
              }`}
              onClick={() => setActiveTab("with")}
            >
              With Spend.In
            </button>
            <button
              className={`px-5 py-2 text-sm rounded-full font-semibold ${
                !isWith
                  ? "bg-primary text-white font-semibold"
                  : "text-secondary-light-300"
              }`}
              onClick={() => setActiveTab("without")}
            >
              Without Spend.In
            </button>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 lg:text-start">
          {title}
        </h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Image
                src={`/assets/icons/${iconType}-circle.svg`}
                alt=""
                width={20}
                height={20}
                className="flex-shrink-0 mt-0.5"
              />
              <span className="text-sm sm:text-base text-secondary-dark-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 md:mt-0 w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md">
          <Image
            src={chartImage}
            alt="Chart"
            width={500}
            height={350}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
