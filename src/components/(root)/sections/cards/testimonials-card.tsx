import Image from "next/image";

import type { TestimonialsCardProps } from "@/types/types";

export function TestimonialsCard({
  title,
  testimonial,
  avatarUrl,
  name,
  position,
}: TestimonialsCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-secondary p-6">
      <div className="flex flex-1 flex-col items-start gap-5 border-secondary-light-300 border-b">
        <h1 className="font-semibold text-lg text-white">{title}</h1>
        <p className="pb-6 text-secondary-light-100">{testimonial}</p>
      </div>

      <div className="flex flex-row gap-4 pt-6">
        <Image
          alt="Avatar"
          className="rounded-full"
          height={58}
          src={avatarUrl}
          width={58}
        />

        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-base text-white">{name}</h1>
          <p className="text-secondary-light-200 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}
