export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-white">
      <main className="xl:min-w-[1280px] lg:w-[95%] md:w-[95%] sm:w-[92%] w-[90%] mx-auto block xl:pt-32 xl:pb-32 lg:pt-28 lg:pb-28 md:pt-24 md:pb-24 sm:pt-16 sm:pb-16 pt-8 pb-8 px-4 sm:px-0">
        {children}
      </main>
    </div>
  );
}
