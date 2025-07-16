import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" /* className="bg-white flex justify-center"*/>
      <body className="vertical-stripes">{children}</body>
    </html>
  );
}
