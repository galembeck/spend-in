import { Benefits } from "@/components/benefits-section";
import { Register } from "@/components/register-section";
import { Productivity } from "@/components/productivity-section";
import { Download } from "@/components/download-section";

export default function RootPage() {
  return (
    <main>
      <Benefits />
      <Register />
      <Productivity />
      <Download />
    </main>
  );
}
