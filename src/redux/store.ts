import { configureStore } from '@reduxjs/toolkit';
import giftCardManagementSlice from './features/gift-card/giftCardManagementSlice';
import { baseApi } from './api/baseApi';

const store = configureStore({
      reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            giftCardManagement: giftCardManagementSlice,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  // serializableCheck: {
                  //       ignoredActions: [REHYDRATE, PERSIST],
                  // },
            }).concat(baseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
