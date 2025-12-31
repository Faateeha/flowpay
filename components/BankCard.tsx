import Link from 'next/link'
import { formatAmount } from '@/lib/utils'
import Image from 'next/image';

const BankCard = ({account, userName, showBalance = true} : CreditCardProps) => {
    return (
        <div className="flex flex-col">
            <Link
  href="/"
  className="relative flex h-[190px] no-underline w-full max-w-[320px] rounded-2xl bg-linear-to-br from-green-700 to-green-800
 p-5 shadow-creditCard transition-transform hover:scale-[1.02]"
>
  {/* LEFT SIDE */}
  <div className="flex flex-1 flex-col justify-between text-white">
    <div className="space-y-1">
      <h1 className="text-sm font-medium opacity-80">
        {account.name || 'Fateeha'}
      </h1>

      <p className="text-2xl font-bold tracking-tight">
        {formatAmount(account.currentBalance)}
      </p>
    </div>

    <div className="space-y-2">
      <p className="text-xs tracking-widest opacity-80">
        ●●●● ●●●● ●●●● <span className="text-sm font-semibold">$1234</span>
      </p>

      <div className="flex items-center justify-between text-xs opacity-80">
        <span>{userName}</span>
        <span>●● / ●●</span>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col items-end justify-between pl-4">
    <Image
      src="/icons/paypass.png"
      alt="paypass"
      width={20}
      height={24}
      className="opacity-90"
    />

    <Image
      src="/icons/mastercard.png"
      alt="mastercard"
      width={45}
      height={32}
    />
    </div>
     </Link>

        </div>
    )
}

export default BankCard