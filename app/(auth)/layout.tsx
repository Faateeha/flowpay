
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between">
        
        {children}
        <div className="flex h-screen w-full sticky top-0 items-center justify-end bg-green-50 max-lg:hidden">
          <div>
            image
            {/*width-500 height-500 */}
          </div>
        </div>
    </main>

  );
}
