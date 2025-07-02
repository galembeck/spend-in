"use client";

import { ReactNode, useEffect } from "react";

import { useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs";

import { Navbar } from "@/components/(dashboard)/navigation/navbar";
import { DashboardSidebar } from "@/components/(dashboard)/navigation/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

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
