import Image from "next/image";
import type { ReactNode } from "react";
import { Footer } from "@/components/(root)/navigation/footer";
import { Header } from "@/components/(root)/navigation/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="root-container">
        <div className="rounded-blur" />

        <Image
          alt="Ellipse"
          className="pointer-events-none absolute top-0 right-0 z-0 select-none"
          height={350}
          src="/assets/ellipse-blur.svg"
          width={350}
        />

        <div>
          <Header />
        </div>

        <div>{children}</div>
      </main>

      <Footer />
    </>
  );
}
