'use client';

import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

import { RefreshToken } from '@/components/global';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [interval, setInterval] = useState<number>(0);

  return (
    <SessionProvider refetchInterval={interval}>
      {children}
      <RefreshToken setInterval={setInterval} />
    </SessionProvider>
  );
};

export default AuthProvider;
