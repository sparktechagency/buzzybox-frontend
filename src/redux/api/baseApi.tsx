import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({
            baseUrl: 'http://10.0.70.122:5001/api/v1',
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
