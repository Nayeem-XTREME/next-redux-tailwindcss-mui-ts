import { AuthProvider, MuiProvider, ReduxProvider } from '@/components/global';
import { inter } from '@/utils';

import type { Metadata } from 'next';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <body id="__next">
        <AuthProvider>
          <MuiProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </MuiProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
