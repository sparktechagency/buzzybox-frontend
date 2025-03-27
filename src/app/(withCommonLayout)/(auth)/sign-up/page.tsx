'use client';

import { useSignUpMutation } from '@/redux/features/auth/authApi';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignUpPage = () => {
      const router = useRouter();
      const [form] = Form.useForm();

      const [signUp] = useSignUpMutation();

      // login submit handler
      const onFinish = async (values: any) => {
            toast.loading('Account creating...', { id: 'signUpToast' });
            try {
                  const res = await signUp(values).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Sign up successful!', { id: 'signUpToast' });
                        router.push(`/verify-otp?email=${values.email}&action=verify-account`);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Sign up failed', { id: 'signUpToast' });
                  console.log(error?.data);
            }
      };
      return (
            <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
                  <div className="container bg-primary/5 w-full max-w-[500px] mx-auto shadow  rounded-lg p-2 md:p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={2}>
                                          Sign Up
                                    </Typography.Title>

                                    <p className="text-paragraph text-sm md:text-base">Create your account</p>
                              </div>

                              <Form form={form} onFinish={onFinish} layout="vertical" requiredMark={false}>
                                    <Form.Item
                                          label="Full Name"
                                          name="name"
                                          rules={[{ required: true, message: 'Please input your full name!' }]}
                                    >
                                          <Input placeholder="Enter your full name" />
                                    </Form.Item>

                                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                          <Input placeholder="Enter your email" />
                                    </Form.Item>

                                    <Form.Item
                                          label="Password"
                                          name="password"
                                          rules={[
                                                { required: true, message: 'Please input your password!' },
                                                { min: 8, message: 'Password must be at least 8 characters long!' },
                                          ]}
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
                                                            if (!value || getFieldValue('password') === value) {
                                                                  return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Passwords do not match!'));
                                                      },
                                                }),
                                          ]}
                                    >
                                          <Input.Password placeholder="********" />
                                    </Form.Item>

                                    <Form.Item
                                          style={{
                                                margin: '20px auto',
                                          }}
                                          name="terms"
                                          valuePropName="checked"
                                          rules={[{ required: true, message: 'You must agree to the terms and conditions!' }]}
                                    >
                                          <Checkbox>
                                                I agree to{' '}
                                                <Link className="text-primary" href="/terms-and-conditions">
                                                      Terms of conditions
                                                </Link>{' '}
                                                and{' '}
                                                <Link className="text-primary" href="/privacy-policy">
                                                      Privacy Policy
                                                </Link>
                                          </Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                          <Button icon={<Send />} style={{ width: '100%' }} type="primary" htmlType="submit">
                                                Sign Up
                                          </Button>
                                    </Form.Item>
                              </Form>

                              <div>
                                    <div className="flex items-center justify-center mt-4">
                                          <span className="text-sm mr-2">Already have an account?</span>
                                          <Link href="/sign-in">
                                                <p className="text-base font-semibold text-primary underline">Sign In</p>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SignUpPage;
