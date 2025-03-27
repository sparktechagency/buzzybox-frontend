import { baseApi } from '@/redux/api/baseApi';

const reviewApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getAllReviews: builder.query({
                  query: () => {
                        return {
                              url: `/reviews`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetAllReviewsQuery } = reviewApi;
