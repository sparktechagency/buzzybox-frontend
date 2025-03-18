import { configureStore } from '@reduxjs/toolkit';
import giftCardManagementSlice from './features/gift-card/giftCardManagementSlice';
import { baseApi } from './api/baseApi';
import AuthReducer from './features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { PERSIST, persistReducer, REHYDRATE } from 'redux-persist';
import { persistStore } from 'redux-persist';

// Persistence configuration for auth
const persistAuthConfig = {
      key: 'auth',
      storage,
};

// Persisted reducers
const persistedAuthReducer = persistReducer(persistAuthConfig, AuthReducer);

const store = configureStore({
      reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            giftCardManagement: giftCardManagementSlice,
            auth: persistedAuthReducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoredActions: [REHYDRATE, PERSIST],
                  },
            }).concat(baseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistore = persistStore(store);
