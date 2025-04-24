import { Benefits } from "@/components/benefits-section";
import { Productivity } from "@/components/productivity-section";
import { Register } from "@/components/register-section";

export default function RootPage() {
  return (
    <main>
      <Benefits />
      <Register />
      <Productivity />
    </main>
  );
}
