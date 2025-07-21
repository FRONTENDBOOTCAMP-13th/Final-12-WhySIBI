'use client';
export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-white pb-40">{children}</main>;
}
