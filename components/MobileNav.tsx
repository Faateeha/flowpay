'use client';
import {Sheet, SheetContent, SheetTrigger} from "../components/ui/sheet";
import Image from 'next/image';
import Link from 'next/link'
import {sidebarLinks} from '../constants'
import {usePathname} from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = ({user} : MobileNavProps) => {
    const pathname = usePathname()
  return (
    <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image src="/icons/hamburger.png" alt="hamburger" width={30} height={30} className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent side="left">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                            <Image src="/icons/logo.png" alt="logo" width={34} height={34} className="size-[24px] max-xl:size-14"/>
                            <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">Flowpay</h1>
                            </Link>
                
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                 return (
                                <Link href={item.route} key={item.label} className={cn('flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', {'bg-green-400': isActive})}> 
                                <div className='relative size-6'>
                                    <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})}/>
                                </div>
                                <p className={cn('text-16 font-semibold text-black-2', { "text-white!": isActive})}>
                                {item.label}
                                </p>
                                </Link>
                            )})}
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav

