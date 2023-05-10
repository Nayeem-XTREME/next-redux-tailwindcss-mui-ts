'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import jwtDecode from 'jwt-decode';

import type { RefreshTokenProps } from './types';
import type { Session, TokenInfo } from '@/types';

const RefreshToken = ({ setInterval }: RefreshTokenProps) => {
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      const token = (data as Session)?.user?.token;
      const expires = jwtDecode<TokenInfo>(token).exp;
      const refetchAfter = (expires * 1000 - Date.now()) / 1000;
      setInterval(refetchAfter);
    }
  }, [data, setInterval]);

  return null;
};

export default RefreshToken;
