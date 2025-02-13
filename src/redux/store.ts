import { configureStore } from '@reduxjs/toolkit';
import giftCardManagementSlice from './features/gift-card/giftCardManagementSlice';

const store = configureStore({
      reducer: {
            giftCardManagement: giftCardManagementSlice,
      },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
