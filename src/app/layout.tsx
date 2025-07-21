import Header from '@/components/common/Header';
import './globals.css';
import Footer from '@/components/common/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" /* className="bg-white flex justify-center"*/>
      <body className="vertical-stripes">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
