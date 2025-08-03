import Header from '@/components/_common/Header';
import './globals.css';
import Footer from '@/components/_common/Footer';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="vertical-stripes">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#fff',
              color: '#333',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px',
              padding: '16px',
            },
            success: {
              iconTheme: {
                primary: '#10b981', // 초록색
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444', // 빨간색
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
