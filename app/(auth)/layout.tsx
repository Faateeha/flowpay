import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<main className="flex min-h-screen w-full">
  {/* LEFT SIDE */}
  <div className="flex w-full lg:w-1/2">
    {children}
  </div>

  {/* RIGHT SIDE */}
  <div className="sticky top-0 hidden h-screen w-1/2 items-center justify-center bg-green-50 lg:flex">
    <div className="relative h-full w-full">
      <Image
        src="/icons/side.png"
        alt="Auth image"
        fill
        className="rounded-l-xl object-contain"
        priority
      />
    </div>
  </div>
</main>



  );
}
