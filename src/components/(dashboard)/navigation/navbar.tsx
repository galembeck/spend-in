"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { IconBell } from "@tabler/icons-react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import { PAGE_TITLES } from "@/constants/page-titles";

export function Navbar() {
  const { user } = useUser();

  const pathname = usePathname();
  const title = PAGE_TITLES[pathname] || "Dashboard";

  return (
    <nav className="w-full bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="font-bold text-secondary text-xl">
          <Breadcrumb
            items={[
              {
                href: pathname,
                title,
              },
            ]}
          />
        </h1>

        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-light-200">
            <div className="relative cursor-pointer">
              <IconBell size={18} stroke={1.5} />
              <div className="absolute bottom-4 left-5 z-10 h-2 w-2 rounded-full bg-error" />
            </div>
          </div>

          {user && (
            <div className="hidden flex-row items-center justify-center gap-3 sm:flex">
              <h3 className="font-semibold text-secondary text-sm">
                {user.firstName} {user.lastName}
              </h3>

              <UserButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
