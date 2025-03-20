import { baseApi } from '@/redux/api/baseApi';

const contactInfoApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getContactInfo: builder.query({
                  query: () => {
                        return {
                              url: `/contact-info`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetContactInfoQuery } = contactInfoApi;
