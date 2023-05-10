import type { ErrorResponse } from '@/types';
import type { SerializedError } from '@reduxjs/toolkit';

export type CustomError = {
  status: number;
  data: ErrorResponse;
};

export type Error = SerializedError | CustomError | undefined;
