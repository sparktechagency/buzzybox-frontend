import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getUserProfile: builder.query({
                  query: () => {
                        return {
                              url: `/users/profile`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['Profile'],
            }),
            createUserProfile: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/users/create-user`,
                              method: 'POST',
                              body: payload,
                        };
                  },
                  invalidatesTags: ['Profile'],
            }),
            updateUserProfile: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/users/update-profile`,
                              method: 'PATCH',
                              body: payload,
                        };
                  },
                  invalidatesTags: ['Profile'],
            }),
            deleteUserProfile: builder.mutation({
                  query: () => {
                        return {
                              url: `/users/delete-account`,
                              method: 'PATCH',
                        };
                  },
                  invalidatesTags: ['Profile'],
            }),
      }),
});

export const { useGetUserProfileQuery, useCreateUserProfileMutation, useUpdateUserProfileMutation, useDeleteUserProfileMutation } = userApi;
