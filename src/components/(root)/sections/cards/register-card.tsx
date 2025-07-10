import Image from "next/image";
import type { RegisterCardProps } from "@/types/types";

export function RegisterCard({ image, description }: RegisterCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image alt={description} height={258} src={image} width={259} />
      <p className="mt-6 font-medium text-base text-white">{description}</p>
    </div>
  );
}
