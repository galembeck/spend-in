import { IconDots } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function BalanceCard() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString("en-US", { month: "long" });
  const lastDay = new Date(year, now.getMonth() + 1, 0).getDate();

  return (
    <div className="flex flex-col bg-white rounded-lg p-6 gap-2">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-base text-secondary">Your balance</h1>
        <IconDots size={24} className="cursor-pointer" />
      </div>

      <div className="flex flex-row mt-5 gap-3">
        <h1 className="font-bold text-4xl text-secondary tracking-tighter">
          $120,435.00
        </h1>
        <p className="mt-5 text-secondary-light-300 font-semibold text-sm">
          (USD)
        </p>
      </div>

      <p className="mt-4 text-secondary-light-300 font-semibold text-xs tracking-wide">
        From {month} 01, {year} to {month} {lastDay}, {year}
      </p>

      <div className="flex flex-row gap-6 mt-6">
        <Button className="bg-primary text-white gap-3 py-6 px-5 rounded-xl">
          <Image
            src="/assets/icons/money-receive.svg"
            alt="Receive"
            width={23}
            height={23}
          />
          Deposit
        </Button>
        <Button className="bg-white text-black gap-3 py-6 px-5 rounded-xl border-2 border-primary">
          <Image
            src="/assets/icons/money-send.svg"
            alt="Receive"
            width={23}
            height={23}
          />
          Transfer
        </Button>
      </div>
    </div>
  );
}
