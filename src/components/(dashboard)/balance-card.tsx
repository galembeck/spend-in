import { IconDots } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function BalanceCard() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString("en-US", { month: "long" });
  const lastDay = new Date(year, now.getMonth() + 1, 0).getDate();

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-6">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-base text-secondary">Your balance</h1>
        <IconDots className="cursor-pointer" size={24} />
      </div>

      <div className="mt-5 flex flex-row gap-3">
        <h1 className="font-bold text-4xl text-secondary tracking-tighter">
          $120,435.00
        </h1>
        <p className="mt-5 font-semibold text-secondary-light-300 text-sm">
          (USD)
        </p>
      </div>

      <p className="mt-4 font-semibold text-secondary-light-300 text-xs tracking-wide">
        From {month} 01, {year} to {month} {lastDay}, {year}
      </p>

      <div className="mt-6 flex flex-row gap-6">
        <Button className="gap-3 rounded-xl bg-primary px-5 py-6 text-white">
          <Image
            alt="Receive"
            height={23}
            src="/assets/icons/money-receive.svg"
            width={23}
          />
          Deposit
        </Button>
        <Button className="gap-3 rounded-xl border-2 border-primary bg-white px-5 py-6 text-black hover:bg-secondary-light-100/20">
          <Image
            alt="Receive"
            height={23}
            src="/assets/icons/money-send.svg"
            width={23}
          />
          Transfer
        </Button>
      </div>
    </div>
  );
}
