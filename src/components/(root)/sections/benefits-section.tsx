import { benefitsCards } from "@/constants";

import { BenefitsCard } from "./cards/benefits-card";

export function Benefits() {
  return (
    <section className="bg-white px-7 py-16" id="benefits">
      <div className="mx-auto max-w-7xl pb-8">
        <p className="mb-2 font-semibold text-primary text-sm uppercase tracking-wide">
          Why use Spend.in
        </p>

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md font-bold text-3xl text-secondary-dark-900 leading-snug md:text-4xl">
            Easy, Simple, <br /> Affordable
          </h2>
          <p className="max-w-xl text-base text-secondary-dark-400">
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 text-start md:grid-cols-3">
          {benefitsCards.map((card) => (
            <BenefitsCard
              description={card.description}
              icon={card.icon}
              image={card.image}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
