import { ReactNode } from "react";

import { Navbar } from "@/components/(dashboard)/navigation/navbar";
import { DashboardSidebar } from "@/components/(dashboard)/navigation/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-row w-full h-screen">
      <DashboardSidebar />

      <div className="w-full flex flex-col bg-[#f4f4f4]">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </main>
  );
}
