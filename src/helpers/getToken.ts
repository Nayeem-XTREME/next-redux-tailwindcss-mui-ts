import { getSession } from 'next-auth/react';

import type { Session } from '@/types';

export const getToken = async () => {
  const session = await getSession();
  return session ? `Bearer ${(session as Session).user.token}` : '';
};
