import { baseApi } from '@/redux/api/baseApi';

const faqApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getFaqs: builder.query({
                  query: () => {
                        return {
                              url: `/faqs`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetFaqsQuery } = faqApi;
