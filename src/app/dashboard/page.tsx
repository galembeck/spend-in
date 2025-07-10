import { BalanceCard } from "@/components/(dashboard)/balance-card";
import { IncomeExpenses } from "@/components/(dashboard)/income-expenses";
import { SpendingStatistics } from "@/components/(dashboard)/spending-statistics";
import { TransactionHistory } from "@/components/(dashboard)/transaction-history";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <SpendingStatistics />
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-1/3">
          <BalanceCard />
          <TransactionHistory />
          {/* <SpendCategory /> */}
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <IncomeExpenses />
        </div>

        <div className="w-full lg:w-1/3">{/* <SpendCategory /> */}</div>
      </div>
    </div>
  );
}
