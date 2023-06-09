import {
  type Action,
  combineReducers,
  configureStore,
  type ThunkAction,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { productApi, snackbarSlice } from '@/state/reducers';

const middlewares = [productApi.middleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  app: combineReducers({
    [snackbarSlice.name]: snackbarSlice.reducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
});

export const { dispatch, getState } = store;

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
