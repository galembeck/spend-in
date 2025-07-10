"use client";

import Image from "next/image";
import { useState } from "react";
import { pricingPlans } from "@/constants";
import { Badge } from "../../ui/badge";
import { PricingCard } from "./cards/pricing-card";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-white px-6 py-16 text-center md:py-28" id="pricing">
      <h2 className="font-bold text-3xl text-gray-800 md:text-4xl">
        Ready to Get Started?
      </h2>
      <p className="mt-4 mb-8 text-gray-500 text-lg">
        Choose a plan that suits your business needs.
      </p>

      <div className="relative mb-6 flex flex-col items-center justify-center gap-4">
        <div className="z-10 flex items-center justify-center gap-4">
          <span className="font-semibold text-secondary-dark-700">Monthly</span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              checked={isYearly}
              className="peer sr-only"
              onChange={() => setIsYearly(!isYearly)}
              type="checkbox"
            />
            <div className="peer h-7 w-14 rounded-full bg-gray-200 ring-2 ring-primary after:absolute after:top-[2px] after:left-[5px] after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-700" />
          </label>
          <span className="font-semibold text-secondary-dark-700">Yearly</span>
        </div>

        <div className="ml-16 flex flex-row items-center justify-center gap-2">
          <Badge className="z-10 ml-4 bg-primary-light-100 hover:bg-primary-light-100">
            Save 65%
          </Badge>
          <Image
            alt="Arrow"
            height={50}
            src="/assets/icons/curve-arrow.svg"
            width={57}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-left md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard
            badge={plan.badge}
            button={plan.button}
            description={plan.description}
            icon={plan.icon}
            includedFeatures={plan.includedFeatures}
            isYearly={isYearly}
            key={plan.title}
            notIncludedFeatures={plan.notIncludedFeatures}
            priceMonthly={plan.priceMonthly}
            priceYearly={plan.priceYearly}
            subtitle={plan.subtitle}
            title={plan.title}
          />
        ))}
      </div>
    </section>
  );
}
