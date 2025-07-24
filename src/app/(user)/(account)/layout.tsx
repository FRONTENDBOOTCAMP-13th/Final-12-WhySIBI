export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-w-[1280px]">
      <main className="bg-white pb-40 ">{children}</main>
    </div>
  );
}
