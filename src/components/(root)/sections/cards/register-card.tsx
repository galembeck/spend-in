import Image from "next/image";
import { RegisterCardProps } from "@/types/types";

export function RegisterCard({ image, description }: RegisterCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={image} alt={description} width={259} height={258} />
      <p className="mt-6 text-base font-medium text-white">{description}</p>
    </div>
  );
}
