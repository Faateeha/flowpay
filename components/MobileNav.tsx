"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.png"
            alt="hamburger"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className=" cursor-pointer flex items-center gap-1 px-4 no-underline"
          >
            <Image src="/icons/logo.png" alt="logo" width={34} height={34} />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black">
              Flowpay
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                        <Link
                      href={item.route}
                      key={item.label}
                      className={cn(
                        "flex gap-3 items-center p-4 rounded-lg w-full max-w-60 no-underline",
                        { "bg-green-400": isActive }
                      )}
                    >
                      
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20} height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                      
                      <p
                        className={cn("text-16 font-semibold text-black ", {
                          "text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  
                    </SheetClose>
                  )
                    
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
