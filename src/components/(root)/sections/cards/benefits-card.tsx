import Image from "next/image";

import { BenefitsCardProps } from "@/types/types";

export function BenefitsCard({
  image,
  icon,
  title,
  description,
}: BenefitsCardProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <h3 className="flex flex-row items-center justify-center gap-3 mt-6 text-lg font-semibold text-secondary-dark-900">
        <Image src={icon} alt={title} width={32} height={32} />
        {title}
      </h3>
      <p className="mt-3 text-sm text-secondary-dark-400">{description}</p>
    </div>
  );
}
