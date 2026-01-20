import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'
import { countTransactionCategories } from '@/lib/utils'
import Category from './Category'
import { CategoryCount, RightSidebarProps } from '@/types'

const RightSidebar = ({user, transactions, banks} : RightSidebarProps) => {
    if (!user) return null;
    const categories: CategoryCount[] = countTransactionCategories(transactions);
    

  const primaryBank = banks?.[0];
  const secondaryBank = banks?.[1];
  return (
    <aside className='no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important'>
      <section className='flex flex-col pb-8'>
        <div className='h-[120px] w-full bg-cover bg-no-repeat' style={{backgroundImage: "url('/icons/side-logo.png')"}}>
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex-center absolute top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile">
            <span className="text-5xl font-bold text-green-400">{user.firstName[0]}</span>
          </div>
          <div className="flex flex-col pt-32">
            <h1 className="text-24 font-semibold text-gray-900"> {user.firstName} {user.lastName}</h1>
            <p className='text-16 font-normal text-gray-600'>{user.email ?? ""}</p>
          </div>
        </div>
        </div>
      </section>

      <section className='flex flex-col justify-between gap-8 px-6 py-10'>
        <div className='flex w-full justify-between'>
          <h2 className='header-2'>My Banks</h2>
          <Link href="/" className='flex gap-2 no-underline'>
          <Image src="/icons/add.png" alt="plus-sign" width={15} height={15}/>
          <h2 className='header-2'> Add Bank
            </h2></Link>
        </div>
         {primaryBank && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={primaryBank.$id}
                account={primaryBank}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>

            {secondaryBank && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={secondaryBank.$id}
                  account={secondaryBank}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
            </div>
         )}
         {/*<div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          <div className='space-y-5'>
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>*/}
      </section>
    </aside>
  )
}

export default RightSidebar;
