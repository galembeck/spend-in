import { SpendingStatistics } from "@/components/(dashboard)/spending-statistics";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <SpendingStatistics />
        </div>
        <div className="w-full lg:w-1/3">{/* <BalanceCard /> */}</div>
      </div>

      {/* <IncomeExpense /> */}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">{/* <TransactionHistory /> */}</div>
        <div className="w-full lg:w-1/3">{/* <SpendCategory /> */}</div>
      </div>
    </div>
  );
}
