import { IconArrowUp } from "@tabler/icons-react";

export function IncomeExpenses() {
  return (
    <div className="flex flex-col bg-white rounded-lg p-6 gap-2">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-base text-secondary">Total Income</h1>
        <IconArrowUp color="green" size={24} className="bg-[#F6F7F9]" />
      </div>
    </div>
  );
}
