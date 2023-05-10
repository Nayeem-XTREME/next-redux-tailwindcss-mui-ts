import {
  type TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';

import type { AppDispatch, AppState } from '@/state/store';

export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;
