"use client";

import Image from "next/image";
import { useState } from "react";
import { negativeProductivity, positiveProductivity } from "@/constants";

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
    <div className="flex w-full flex-col items-center lg:flex-row">
      <div className="w-full space-y-6 md:mb-10 lg:w-1/2">
        <div className="mb-10 flex justify-center md:justify-start">
          <div className="inline-flex rounded-full bg-secondary-light-100">
            <button
              className={`rounded-full px-10 py-3 font-semibold text-sm ${
                isWith
                  ? "bg-primary font-semibold text-white"
                  : "text-secondary-light-300"
              }`}
              onClick={() => setActiveTab("with")}
              type="button"
            >
              With Spend.In
            </button>
            <button
              className={`rounded-full px-5 py-2 font-semibold text-sm ${
                isWith
                  ? "text-secondary-light-300"
                  : "bg-primary font-semibold text-white"
              }`}
              onClick={() => setActiveTab("without")}
              type="button"
            >
              Without Spend.In
            </button>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 text-lg sm:text-xl lg:text-start">
          {title}
        </h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: stop complaining...
            <li className="flex items-start gap-3" key={index}>
              <Image
                alt=""
                className="mt-0.5 flex-shrink-0"
                height={20}
                src={`/assets/icons/${iconType}-circle.svg`}
                width={20}
              />
              <span className="text-secondary-dark-700 text-sm sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex w-full justify-center md:mt-0 lg:w-1/2">
        <div className="w-full max-w-md">
          <Image
            alt="Chart"
            className="h-auto w-full"
            height={350}
            src={chartImage}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
