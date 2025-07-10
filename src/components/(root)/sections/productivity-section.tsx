"use client";

import { ProductivityCard } from "./cards/productivity-card";

export function Productivity() {
  return (
    <section className="bg-white px-7 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-semibold text-primary text-sm uppercase tracking-wide">
          Increase Productivity
        </p>

        <div className="mb-8 flex">
          <h2 className="max-w-72 font-bold text-3xl text-secondary-dark-900 leading-snug md:max-w-3xl md:text-4xl">
            Reduce Time in Doing Manual Work Managing Expenses
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <ProductivityCard />
        </div>
      </div>
    </section>
  );
}
