import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            login: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/login`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            forgetPassword: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/forget-password`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            verifyOtp: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/verify-otp`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            resendOtp: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/resend-otp`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            resetPassword: builder.mutation({
                  query: ({ payload, token }) => {
                        console.log(payload);
                        return {
                              url: `/auth/reset-password`,
                              method: 'POST',
                              body: payload,
                              headers: {
                                    Authorization: `${token}`,
                              },
                        };
                  },
            }),
      }),
});

export const { useLoginMutation, useForgetPasswordMutation, useVerifyOtpMutation, useResendOtpMutation, useResetPasswordMutation } =
      authApi;
