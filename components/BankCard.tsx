import Link from 'next/link'
import { formatAmount } from '@/lib/utils'
import Image from 'next/image';

const BankCard = ({account, userName, showBalance = true} : CreditCardProps) => {
    return (
        <div className="flex flex-col">
            <Link href="/" className='relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-green-700 shadow-creditCard backdrop-blur-[6px] no-underline'>
            <div className='relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-green-700 px-5 pb-4 pt-5'>
                <div>
                <h1 className='text-16 font-semibold text-white'>
                    {account.name || 'fateeha'}
                </h1>
                <p className='font-ibm-plex-serif font-black text-white '>
                    {formatAmount(account.currentBalance)}
                </p>
            </div>
            <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h4 className='text-5 font-semibold text-white'>
                        {userName}
                    </h4>
                    <h4 className='text-5 font-semibold text-white pl-3'>
                        ** / **
                    </h4>
                </div>
                <p className='text-4 font-semibold tracking-[1.1px] text-white'>
                    **** **** **** <span className='text-16'> ${account.mask} </span>
                </p>
            </article>
            </div>

            <div className='flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-bank-gradient bg-cover bg-center bg-no-repeat py-5 pr-5;'>
                <Image />
            </div>
            </Link>
        </div>
    )
}

export default BankCard