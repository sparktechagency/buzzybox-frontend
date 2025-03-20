import { baseApi } from '@/redux/api/baseApi';

const giftCardApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getMyGiftCards: builder.query({
                  query: () => {
                        return {
                              url: `/gift-cards/my-cards`,
                              method: 'GET',
                        };
                  },
            }),
            getSingleGiftCard: builder.query({
                  query: ({ id }) => {
                        return {
                              url: `gift-cards/${id}`,
                              method: 'GET',
                        };
                  },
            }),
            createGiftCard: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/gift-cards/create-gift-card`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            addNewPage: builder.mutation({
                  query: ({ payload, id }) => {
                        return {
                              url: `/gift-cards/add-new-page/${id}`,
                              method: 'PATCH',
                              body: payload,
                        };
                  },
            }),
            removePage: builder.mutation({
                  query: ({ payload, id }) => {
                        return {
                              url: `/gift-cards/remove-page/${id}`,
                              method: 'PATCH',
                              body: payload,
                        };
                  },
            }),
            deleteCard: builder.mutation({
                  query: ({ id }) => {
                        return {
                              url: `/gift-cards/${id}`,
                              method: 'DELETE',
                        };
                  },
            }),
      }),
});

export const {
      useGetMyGiftCardsQuery,
      useGetSingleGiftCardQuery,
      useCreateGiftCardMutation,
      useAddNewPageMutation,
      useRemovePageMutation,
      useDeleteCardMutation,
} = giftCardApi;
