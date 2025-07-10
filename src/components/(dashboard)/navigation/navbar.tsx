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
    <nav className="w-full bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="font-bold text-secondary text-xl">{title}</h1>

        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-light-200">
            <div className="relative cursor-pointer">
              <IconBell size={18} stroke={1.5} />
              <div className="absolute bottom-4 left-5 z-10 h-2 w-2 rounded-full bg-error" />
            </div>
          </div>

          <div className="hidden flex-row items-center justify-center gap-3 sm:flex">
            <Image
              alt="Avatar"
              className="rounded-full"
              height={36}
              src="https://avatars.githubusercontent.com/u/51977156?v=4"
              width={36}
            />

            <h3 className="font-semibold text-secondary text-sm">
              Pedro Galembeck
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
