'use client';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { LogInIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
      const router = useRouter();
      const onFinish = async (values: any) => {
            console.log('Success:', values);
            router.push('/');
      };
      return (
            <div className="min-h-[calc(100vh-96px)]  flex items-center justify-center">
                  <div className="container bg-primary/5  w-full max-w-[500px] mx-auto shadow  rounded-lg p-2 md:p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={2}>
                                          Sign In
                                    </Typography.Title>

                                    <p className="text-paragraph text-sm md:text-base">
                                          Log in to continue your journey and access your sessions
                                    </p>
                              </div>

                              <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
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

                                    <div className="flex justify-between items-center">
                                          <Form.Item
                                                noStyle
                                                className="flex justify-between items-center"
                                                name="remember"
                                                valuePropName="checked"
                                          >
                                                <Checkbox>Remember me</Checkbox>
                                          </Form.Item>
                                          <Button
                                                href="/forgot-password"
                                                style={{
                                                      color: '#FFC301',

                                                      textAlign: 'end',
                                                }}
                                                type="link"
                                          >
                                                Forgot Password?
                                          </Button>
                                    </div>

                                    <Form.Item>
                                          <Button icon={<LogInIcon />} style={{ width: '100%' }} type="primary" htmlType="submit">
                                                Sign In
                                          </Button>
                                    </Form.Item>
                              </Form>

                              <div>
                                    <div className="flex items-center justify-center mt-4">
                                          <span className="text-sm text-paragraph mr-2">Don’t have an account ? </span>
                                          <Link href="/sign-up">
                                                <p className="text-base font-semibold text-primary underline">Sign up</p>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SignInPage;
