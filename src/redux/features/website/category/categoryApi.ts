import { baseApi } from '@/redux/api/baseApi';

const contactApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getCategories: builder.query({
                  query: () => {
                        return {
                              url: `/categories`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetCategoriesQuery } = contactApi;
