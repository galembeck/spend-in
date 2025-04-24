"use client";

import { useState } from "react";
import Image from "next/image";

import { Badge } from "../ui/badge";
import { PricingCard } from "./card/pricing-card";
import { pricingPlans } from "@/constants";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="px-6 py-16 md:py-28 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Ready to Get Started?
      </h2>
      <p className="text-gray-500 mt-4 mb-8 text-lg">
        Choose a plan that suits your business needs.
      </p>

      <div className="relative flex flex-col items-center justify-center gap-4 mb-6">
        <div className="flex items-center justify-center gap-4 z-10">
          <span className="font-semibold text-secondary-dark-700">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-14 h-7 bg-gray-200 ring-2 ring-primary peer-checked:bg-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
          </label>
          <span className="font-semibold text-secondary-dark-700">Yearly</span>
        </div>

        <div className="flex flex-row items-center justify-center ml-16 gap-2">
          <Badge className="bg-primary-light-100 hover:bg-primary-light-100 ml-4 z-10">
            Save 65%
          </Badge>
          <Image
            src="/assets/icons/curve-arrow.svg"
            alt="Arrow"
            width={57}
            height={50}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            icon={plan.icon}
            subtitle={plan.subtitle}
            priceYearly={plan.priceYearly}
            priceMonthly={plan.priceMonthly}
            description={plan.description}
            includedFeatures={plan.includedFeatures}
            notIncludedFeatures={plan.notIncludedFeatures}
            button={plan.button}
            badge={plan.badge}
            isYearly={isYearly}
          />
        ))}
      </div>
    </section>
  );
}
