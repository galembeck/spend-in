import Image from "next/image";
import { ReactNode } from "react";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero-section";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="root-container">
        <div className="rounded-blur" />

        <Image
          src="/assets/ellipse-blur.svg"
          alt="Ellipse"
          width={350}
          height={350}
          className="absolute top-0 right-0 z-0 pointer-events-none select-none"
        />

        <div>
          <Header />
        </div>

        <Hero />
      </main>
      <div>{children}</div>

      <Footer />
    </>
  );
}
