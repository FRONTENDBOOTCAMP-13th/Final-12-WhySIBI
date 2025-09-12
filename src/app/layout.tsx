import Header from '@/components/_common/Header';
import './globals.css';
import Footer from '@/components/_common/Footer';
import { Toaster } from 'react-hot-toast';
import { Metadata } from 'next';
import PageScrollButtons from '@/components/_common/button_pagescroll';
import { ThemeProvider } from '@/components/theme-provider';
import Chatbot from '@/components/Chatbot/Chatbot';

export const metadata: Metadata = {
  title: '나혼자산다',
  description: '자취생을 위한 든든한 가게 나혼자산다 입니다.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/image/favicon-light.ico',
        type: 'image/ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/image/favicon-dark.ico',
        type: 'image/ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 다크모드 테마 초기 셋팅 시 깜빡임 방지
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        <ThemeProvider>
          <Header></Header>
          <main className="w-full bg-white">{children}</main>
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
          <div className="vertical-stripes">
            <Footer></Footer>
          </div>
        </ThemeProvider>
        <PageScrollButtons />
        <Chatbot />
      </body>
    </html>
  );
}
