"use client";

import { useUser } from "@clerk/nextjs";

import { useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";

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
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return (
    <main className="flex h-screen w-full flex-row">
      <DashboardSidebar />

      <div className="flex w-full flex-col bg-[#f4f4f4]">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </main>
  );
}
