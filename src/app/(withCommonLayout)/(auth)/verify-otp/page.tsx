'use client';
import { Suspense } from 'react';
import { useResendOtpMutation, useVerifyOtpMutation } from '@/redux/features/auth/authApi';
import { Button, Form, Input, Typography } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import Loader from '@/components/shared/Loader';

const VerifyOtpPage = () => {
      const router = useRouter();
      const searchParams = useSearchParams();
      const email = searchParams.get('email');
      const status = searchParams.get('status');

      const [verifyOtp] = useVerifyOtpMutation();
      const [resendOtp] = useResendOtpMutation();

      // verify otp handler
      const onFinish = async (values: any) => {
            toast.loading('Verifying...', { id: 'verifyOtpToast' });
            try {
                  const res = await verifyOtp({ oneTimeCode: Number(values.otp), email }).unwrap();
                  console.log(res);
                  if (res.success) {
                        toast.success(res.message || 'Otp verification successful', { id: 'verifyOtpToast' });
                        if (status === 'reset') {
                              router.push(`/set-new-password?auth=${res.data}`);
                        }
                        router.push(`/sign-in`);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Verification failed', { id: 'verifyOtpToast' });
                  console.log(error?.data?.message);
            }
      };

      // resend otp handler
      const resendOtpHandler = async () => {
            toast.loading('Sending code...', { id: 'resendOtpToast' });
            try {
                  const res = await resendOtp({ email }).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Please check your email', { id: 'resendOtpToast' });
                        router.push(`/verify-otp?email=${email}`);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to send code', { id: 'resendOtpToast' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
                  <div className="container bg-primary/5 w-full max-w-[500px] mx-auto shadow  rounded-lg p-3 md:p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={2}>
                                          Verify OTP
                                    </Typography.Title>
                                    <Typography.Paragraph>Enter the OTP sent to your email</Typography.Paragraph>
                              </div>

                              <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
                                    <div className="flex justify-center">
                                          <Form.Item name="otp" rules={[{ required: true, message: 'Please input the OTP!' }]}>
                                                <Input.OTP length={4} />
                                          </Form.Item>
                                    </div>

                                    <Form.Item>
                                          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                                Verify OTP
                                          </Button>
                                    </Form.Item>
                              </Form>

                              <div className="flex items-center justify-center ">
                                    <span className="text-sm">Didn’t receive an OTP?</span>
                                    <Button
                                          onClick={resendOtpHandler}
                                          style={{
                                                color: '#FFC301',
                                          }}
                                          type="link"
                                    >
                                          Resend OTP
                                    </Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

const VerifyOtpPageWrapper = () => (
      <Suspense fallback={<Loader />}>
            <VerifyOtpPage />
      </Suspense>
);

export default VerifyOtpPageWrapper;
