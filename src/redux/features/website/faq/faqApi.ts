import { baseApi } from '@/redux/api/baseApi';

const faqApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getFaqs: builder.query({
                  query: ({ limit }) => {
                        return {
                              url: `/faqs?limit=${limit}`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetFaqsQuery } = faqApi;
