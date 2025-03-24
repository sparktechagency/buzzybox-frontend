import { baseApi } from '@/redux/api/baseApi';

const inviteApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            sendInvite: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/invites/send-invite`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
      }),
});

export const { useSendInviteMutation } = inviteApi;
