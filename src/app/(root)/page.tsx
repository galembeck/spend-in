import { Hero } from "@/components/sections/hero-section";
import { Benefits } from "@/components/sections/benefits-section";
import { Register } from "@/components/sections/register-section";
import { Productivity } from "@/components/sections/productivity-section";
import { Testimonials } from "@/components/sections/testimonials-section";
import { Pricing } from "@/components/sections/pricing-section";
import { Download } from "@/components/sections/download-section";

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
