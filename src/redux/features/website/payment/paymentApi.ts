import { baseApi } from '@/redux/api/baseApi';

const paymentApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getAllPayments: builder.query({
                  query: () => {
                        return {
                              url: `/gift-cards`,
                              method: 'GET',
                        };
                  },
            }),
            getMyCards: builder.query({
                  query: () => {
                        return {
                              url: `/gift-cards/my-cards`,
                              method: 'GET',
                        };
                  },
            }),
            createContribution: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/payments/give-contribution`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            createPaymentLink: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/payments/create-checkout-session`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            connectAccount: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/payments/connect-account`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            withdrawFunds: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/payments/withdraw-funds`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            getSinglePayment: builder.query({
                  query: ({ id }) => {
                        return {
                              url: `/payments/${id}`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const {
      useGetAllPaymentsQuery,
      useGetSinglePaymentQuery,
      useGetMyCardsQuery,
      useCreateContributionMutation,
      useCreatePaymentLinkMutation,
      useConnectAccountMutation,
      useWithdrawFundsMutation,
} = paymentApi;
