import { benefitsCards } from "@/constants";

import { BenefitsCard } from "./benefits-card";

export function Benefits() {
  return (
    <section className="py-16 px-7 bg-white">
      <div className="max-w-7xl mx-auto pb-8">
        <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
          Why use Spend.in
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-900 leading-snug max-w-md">
            Easy, Simple, <br /> Affordable
          </h2>
          <p className="text-secondary-dark-400 max-w-xl text-base">
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-start">
          {benefitsCards.map((card) => (
            <BenefitsCard
              key={card.title}
              image={card.image}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
