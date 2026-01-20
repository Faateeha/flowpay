"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import {
  cn,
  formUrlQuery,
  formatAmount,
  getAccountTypeColors,
} from "@/lib/utils";
import { AccountTypes, BankInfoProps } from "@/types";

const BankInfo = ({ account, appwriteItemId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className={cn(
        `
        flex gap-4 p-4 transition-all cursor-pointer
        rounded-xl border
        bg-green-50 hover:bg-green-100
      `,
        {
          "ring-2 ring-green-500 bg-green-100": type === "card" && isActive,
        }
      )}
    >
      {/* Icon */}
      <figure className="flex-center h-fit rounded-full bg-green-200/60">
        <Image
          src="/icons/send-money.png"
          width={20}
          height={20}
          alt={account.subtype}
          className="m-2 min-w-5"
        />
      </figure>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[15px] font-semibold text-green-900 line-clamp-1">
            {account.name}
          </h2>

          {type === "full" && (
            <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-medium text-green-800">
              {account.subtype}
            </span>
          )}
        </div>

        <p className="text-[15px] font-medium text-green-700">
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
