import Header from '@/components/_common/Header';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="vertical-stripes">{children}</body>
    </html>
  );
}
