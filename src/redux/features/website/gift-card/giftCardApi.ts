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
                  providesTags: ['GiftCard'],
            }),
            getSingleGiftCard: builder.query({
                  query: ({ id }) => {
                        return {
                              url: `gift-cards/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['GiftCard'],
            }),
            createGiftCard: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/gift-cards/create-gift-card`,
                              method: 'POST',
                              body: payload,
                        };
                  },
                  invalidatesTags: ['GiftCard'],
            }),
            addNewPage: builder.mutation({
                  query: ({ payload, id }) => {
                        return {
                              url: `/gift-cards/add-new-page/${id}`,
                              method: 'PATCH',
                              body: payload,
                        };
                  },
                  invalidatesTags: ['GiftCard'],
            }),
            removePage: builder.mutation({
                  query: ({ payload, id }) => {
                        return {
                              url: `/gift-cards/remove-page/${id}`,
                              method: 'PATCH',
                              body: payload,
                        };
                  },
                  invalidatesTags: ['GiftCard'],
            }),
            deleteCard: builder.mutation({
                  query: ({ id }) => {
                        console.log(id);
                        return {
                              url: `/gift-cards/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['GiftCard'],
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
