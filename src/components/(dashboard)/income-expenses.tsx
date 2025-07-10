import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";

export function IncomeExpenses() {
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:divide-x md:divide-gray-200">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-start justify-between">
            <h2 className="font-semibold text-base text-secondary">
              Total Income
            </h2>
            <div className="rounded-full bg-success-light-100 p-2">
              <IconArrowUp className="text-success" size={20} />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-4xl text-secondary">
                $50,530.00
              </span>
              <span className="text-secondary-light-300 text-sm">(USD)</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="font-medium text-sm text-success">20%</span>
              <span className="text-secondary-light-300 text-sm">
                increase compared to last week
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:pl-8">
          <div className="flex flex-row items-start justify-between">
            <h2 className="font-semibold text-base text-secondary">
              Total Expense
            </h2>
            <div className="rounded-full bg-error-light-100 p-2">
              <IconArrowDown className="text-error" size={20} />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-4xl text-secondary">
                $19,760.00
              </span>
              <span className="text-secondary-light-300 text-sm">(USD)</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="font-medium text-error text-sm">10%</span>
              <span className="text-secondary-light-300 text-sm">
                decrease compared to last week
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
