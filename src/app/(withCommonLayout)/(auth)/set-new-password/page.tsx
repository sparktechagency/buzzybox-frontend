'use client';

import { Button, ConfigProvider, Form, Input, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SetNewPasswordPage = () => {
      const router = useRouter();
      const onFinish = async (values: any) => {
            console.log('Success:', values);

            router.push('/sign-in');
      };

      return (
            <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
                  <div className="container bg-primary/5  w-full max-w-[500px] mx-auto shadow  rounded-lg p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={2}>
                                          Set New Password
                                    </Typography.Title>
                                    <Typography.Paragraph>Create a strong password for your account</Typography.Paragraph>
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
