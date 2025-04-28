// Navbar.tsx
"use client";

import { IconBell } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const title =
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard";

  return (
    <nav className="bg-white w-full">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="font-bold text-secondary text-xl">{title}</h1>

        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex items-center justify-center border border-secondary-light-200 w-9 h-9 rounded-full">
            <div className="relative cursor-pointer">
              <IconBell size={18} stroke={1.5} />
              <div className="absolute left-5 bottom-4 w-2 h-2 rounded-full bg-error z-10" />
            </div>
          </div>

          <div className="hidden sm:flex flex-row items-center justify-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/51977156?v=4"
              alt="Avatar"
              width={36}
              height={36}
              className="rounded-full"
            />

            <h3 className="text-secondary font-semibold text-sm">
              Pedro Galembeck
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
