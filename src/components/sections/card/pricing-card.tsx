import { PricingCardProps } from "@/types/types";
import Image from "next/image";

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
    <div className="border rounded-2xl shadow-md p-8 flex flex-col items-start bg-[#F3F5F7] hover:shadow-lg transition duration-300">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center justify-center gap-2">
          <Image src={icon} alt={title} width={32} height={32} />
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        </div>
        {badge && (
          <span className="bg-secondary-dark-700 items-center flex text-xs px-3 py-1 rounded-full mb-2 text-white font-medium">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-3 text-secondary-light-400 text-sm">{subtitle}</p>

      <div className="text-4xl font-semibold mt-6 text-secondary-dark-700">
        {isYearly ? priceYearly : priceMonthly}
        {isYearly ? (
          <span className="text-base font-normal text-secondary-light-400 ml-2">
            /year
          </span>
        ) : (
          <span className="text-base font-normal text-secondary-light-400 ml-2">
            /month
          </span>
        )}
      </div>

      <p className="mt-6 text-secondary text-sm">{description}</p>

      <ul className="mt-6 space-y-3 text-secondary-dark-700 font-medium text-sm">
        {includedFeatures.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Image
              src="/assets/icons/tick-circle.svg"
              alt="Check"
              width={24}
              height={24}
            />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
        {notIncludedFeatures?.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Image
              src="/assets/icons/not-included.svg"
              alt="Check"
              width={24}
              height={24}
            />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary-dark transition">
        {button}
      </button>
    </div>
  );
}
