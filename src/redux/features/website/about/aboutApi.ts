import { baseApi } from '@/redux/api/baseApi';

const aboutApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getAllAbout: builder.query({
                  query: () => {
                        return {
                              url: `/about`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetAllAboutQuery } = aboutApi;
