'use client';

import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
      const router = useRouter();
      const [form] = Form.useForm();

      const onFinish = async (values: any) => {
            console.log('Success:', values);
            router.push('/');
      };
      return (
            <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
                  <div className="container bg-primary/5 w-full max-w-[500px] mx-auto shadow  rounded-lg p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={2}>
                                          Sign Up
                                    </Typography.Title>

                                    <p className="text-paragraph">Create your account</p>
                              </div>

                              <Form form={form} onFinish={onFinish} layout="vertical" requiredMark={false}>
                                    <Form.Item
                                          label="Full Name"
                                          name="fullName"
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
                                          rules={[{ required: true, message: 'Please input your password!' }]}
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
