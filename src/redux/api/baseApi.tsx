import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({
            baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
            credentials: 'include',
            prepareHeaders: (headers, { getState }) => {
                  const token = (getState() as RootState).auth.accessToken;

                  if (token) {
                        headers.set('authorization', `Bearer ${token}`);
                  }

                  return headers;
            },
      }),
      tagTypes: [],
      endpoints: () => ({}),
});
