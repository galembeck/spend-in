import { Benefits } from "@/components/sections/benefits-section";
import { Register } from "@/components/sections/register-section";
import { Productivity } from "@/components/sections/productivity-section";
import { Download } from "@/components/sections/download-section";
import { Pricing } from "@/components/sections/pricing-section";

export default function RootPage() {
  return (
    <main>
      <Benefits />
      <Register />
      <Productivity />
      <Pricing />
      <Download />
    </main>
  );
}
