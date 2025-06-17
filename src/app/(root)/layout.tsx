import { ReactNode } from "react";
import Image from "next/image";

import { Footer } from "@/components/(root)/navigation/footer";
import { Header } from "@/components/(root)/navigation/header";

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

        <div>{children}</div>
      </main>

      <Footer />
    </>
  );
}
