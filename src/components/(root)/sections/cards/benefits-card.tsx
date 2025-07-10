import Image from "next/image";

import type { BenefitsCardProps } from "@/types/types";

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
          alt={title}
          className="h-auto w-full"
          height={300}
          src={image}
          width={400}
        />
      </div>
      <h3 className="mt-6 flex flex-row items-center justify-center gap-3 font-semibold text-lg text-secondary-dark-900">
        <Image alt={title} height={32} src={icon} width={32} />
        {title}
      </h3>
      <p className="mt-3 text-secondary-dark-400 text-sm">{description}</p>
    </div>
  );
}
