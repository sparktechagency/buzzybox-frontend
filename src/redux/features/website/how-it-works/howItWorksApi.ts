import { baseApi } from '@/redux/api/baseApi';

const howItWorksApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getHowItWorks: builder.query({
                  query: () => {
                        return {
                              url: `/how-it-works`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetHowItWorksQuery } = howItWorksApi;
