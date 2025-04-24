import Image from "next/image";

import { TestimonialsCardProps } from "@/types/types";

export function TestimonialsCard({
  title,
  testimonial,
  avatarUrl,
  name,
  position,
}: TestimonialsCardProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-secondary p-6 rounded-xl">
      <div className="flex flex-col items-start gap-5 border-b border-secondary-light-300 flex-1">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <p className="text-secondary-light-100 pb-6">{testimonial}</p>
      </div>

      <div className="flex flex-row gap-4 pt-6">
        <Image
          src={avatarUrl}
          alt="Avatar"
          width={58}
          height={58}
          className="rounded-full"
        />

        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold text-base">{name}</h1>
          <p className="text-secondary-light-200 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}
