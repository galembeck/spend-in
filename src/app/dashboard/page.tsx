import { SpendingStatistics } from "@/components/(dashboard)/spending-statistics";
import { BalanceCard } from "@/components/(dashboard)/balance-card";
import { IncomeExpenses } from "@/components/(dashboard)/income-expenses";
import { TransactionHistory } from "@/components/(dashboard)/transaction-history";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Row: Statistics + Right Column */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Spending Statistics */}
        <div className="flex-1">
          <SpendingStatistics />
        </div>
        {/* Right: Balance Card + Transaction History (+ Spend Category) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <BalanceCard />
          <TransactionHistory />
          {/* <SpendCategory /> */}
        </div>
      </div>

      {/* Middle Row: Income/Expenses */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Income/Expenses */}
        <div className="flex-1">
          <IncomeExpenses />
        </div>
        {/* Right: (empty or SpendCategory if needed) */}
        <div className="w-full lg:w-1/3">{/* <SpendCategory /> */}</div>
      </div>
    </div>
  );
}
