import { Hero } from "@/components/(root)/sections/hero-section";
import { Benefits } from "@/components/(root)/sections/benefits-section";
import { Register } from "@/components/(root)/sections/register-section";
import { Productivity } from "@/components/(root)/sections/productivity-section";
import { Testimonials } from "@/components/(root)/sections/testimonials-section";
import { Pricing } from "@/components/(root)/sections/pricing-section";
import { Download } from "@/components/(root)/sections/download-section";

export default function RootPage() {
  return (
    <>
      <Hero />

      <main>
        <Benefits />
        <Register />
        <Productivity />
        <Testimonials />
        <Pricing />
        <Download />
      </main>
    </>
  );
}
