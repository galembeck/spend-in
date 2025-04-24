"use client";

import { ProductivityCard } from "./cards/productivity-card";

export function Productivity() {
  return (
    <section className="py-16 px-7 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
          Increase Productivity
        </p>

        <div className="flex mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-900 leading-snug max-w-72 md:max-w-3xl">
            Reduce Time in Doing Manual Work Managing Expenses
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <ProductivityCard />
        </div>
      </div>
    </section>
  );
}
