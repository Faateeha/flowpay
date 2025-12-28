import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Faateeha', lastName: 'Ade'} ;
  return (
    <main className="flex h-screen w-full">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
            <Image src="/icons/logo.png" alt="logo" width={30} height={30}/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
        
    </main>

  );
}
