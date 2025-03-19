'use client';

import { useResetPasswordMutation } from '@/redux/features/auth/authApi';
import { Button, ConfigProvider, Form, Input, Typography } from 'antd';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const SetNewPasswordPage = () => {
      const router = useRouter();
      const searchParams = useSearchParams();
      const token = searchParams.get('auth');

      const [resetPassword] = useResetPasswordMutation();

      // reset password handler
      const onFinish = async (values: any) => {
            toast.loading('Saving...', { id: 'resetPasswordToast' });
            try {
                  const res = await resetPassword({ payload: values, token }).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Password reset successful', { id: 'resetPasswordToast' });
                        router.push(`/sign-in`);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to reset password', { id: 'resetPasswordToast' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
                  <div className="container bg-primary/5  w-full max-w-[500px] mx-auto shadow  rounded-lg p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={3}>
                                          Set New Password
                                    </Typography.Title>
                                    <p className="text-sm md:text-base my-2 text-paragraph">Create a strong password for your account</p>
                              </div>

                              <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
                                    <Form.Item
                                          label="New Password"
                                          name="newPassword"
                                          rules={[{ required: true, message: 'Please input your new password!' }]}
                                    >
                                          <Input.Password placeholder="********" />
                                    </Form.Item>

                                    <Form.Item
                                          label="Confirm Password"
                                          name="confirmPassword"
                                          rules={[
                                                { required: true, message: 'Please confirm your password!' },
                                                ({ getFieldValue }) => ({
                                                      validator(_, value) {
                                                            if (!value || getFieldValue('newPassword') === value) {
                                                                  return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Passwords do not match!'));
                                                      },
                                                }),
                                          ]}
                                    >
                                          <Input.Password placeholder="********" />
                                    </Form.Item>

                                    <Form.Item>
                                          <ConfigProvider>
                                                <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                                      Set Password
                                                </Button>
                                          </ConfigProvider>
                                    </Form.Item>
                              </Form>

                              <div className="flex items-center justify-center mt-4">
                                    <span className="text-sm mr-2">Back to</span>
                                    <Link href="/sign-in">
                                          <p className="text-base font-semibold text-primary underline">Sign In</p>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SetNewPasswordPage;
