/** biome-ignore-all lint/suspicious/noArrayIndexKey: stop complaining... */
import Image from "next/image";
import type { PricingCardProps } from "@/types/types";

export function PricingCard({
  title,
  icon,
  subtitle,
  priceYearly,
  priceMonthly,
  description,
  includedFeatures,
  notIncludedFeatures,
  button,
  badge,
  isYearly,
}: PricingCardProps) {
  return (
    <div className="flex flex-col items-start rounded-2xl border bg-[#F3F5F7] p-8 shadow-md transition duration-300 hover:shadow-lg">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image alt={title} height={32} src={icon} width={32} />
          <h3 className="mb-2 font-semibold text-2xl">{title}</h3>
        </div>
        {badge && (
          <span className="mb-2 flex items-center rounded-full bg-secondary-dark-700 px-3 py-1 font-medium text-white text-xs">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-3 text-secondary-light-400 text-sm">{subtitle}</p>

      <div className="mt-6 font-semibold text-4xl text-secondary-dark-700">
        {isYearly ? priceYearly : priceMonthly}
        {isYearly ? (
          <span className="ml-2 font-normal text-base text-secondary-light-400">
            /year
          </span>
        ) : (
          <span className="ml-2 font-normal text-base text-secondary-light-400">
            /month
          </span>
        )}
      </div>

      <p className="mt-6 text-secondary text-sm">{description}</p>

      <ul className="mt-6 space-y-3 font-medium text-secondary-dark-700 text-sm">
        {includedFeatures.map((feature, index) => (
          <li className="flex items-center" key={index}>
            <Image
              alt="Check"
              height={24}
              src="/assets/icons/tick-circle.svg"
              width={24}
            />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
        {notIncludedFeatures?.map((feature, index) => (
          <li className="flex items-center" key={index}>
            <Image
              alt="Check"
              height={24}
              src="/assets/icons/not-included.svg"
              width={24}
            />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className="mt-8 w-full rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark"
        type="button"
      >
        {button}
      </button>
    </div>
  );
}
