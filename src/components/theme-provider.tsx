// 다크모드 라이브러리 nexth-themes
'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
      themes={['light', 'dark']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
