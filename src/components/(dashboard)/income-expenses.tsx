import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";

export function IncomeExpenses() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x md:divide-gray-200">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between items-start">
            <h2 className="font-semibold text-base text-secondary">
              Total Income
            </h2>
            <div className="p-2 bg-success-light-100 rounded-full">
              <IconArrowUp size={20} className="text-success" />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-secondary">
                $50,530.00
              </span>
              <span className="text-sm text-secondary-light-300">(USD)</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-success">20%</span>
              <span className="text-sm text-secondary-light-300">
                increase compared to last week
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:pl-8">
          <div className="flex flex-row justify-between items-start">
            <h2 className="font-semibold text-base text-secondary">
              Total Expense
            </h2>
            <div className="p-2 bg-error-light-100 rounded-full">
              <IconArrowDown size={20} className="text-error" />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-secondary">
                $19,760.00
              </span>
              <span className="text-sm text-secondary-light-300">(USD)</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-error">10%</span>
              <span className="text-sm text-secondary-light-300">
                decrease compared to last week
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
