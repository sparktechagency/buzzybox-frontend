import { baseApi } from '@/redux/api/baseApi';

const contactApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            createContact: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/contacts/create-contact`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
      }),
});

export const {useCreateContactMutation} = contactApi;
