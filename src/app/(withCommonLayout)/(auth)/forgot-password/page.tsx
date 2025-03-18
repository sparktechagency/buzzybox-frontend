'use client';
import { useForgetPasswordMutation } from '@/redux/features/auth/authApi';
import { Button, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ForgotPasswordPage = () => {
      const [forgetPassword] = useForgetPasswordMutation();
      const router = useRouter();

      // submit handler
      const onFinish = async (values: any) => {
            toast.loading('Sending code...', { id: 'forgetPassswordToast' });
            try {
                  const res = await forgetPassword(values).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Please check your email', { id: 'forgetPassswordToast' });
                        router.push(`/verify-otp?email=${values.email}`);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to send code', { id: 'forgetPassswordToast' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
                  <div className="container bg-primary/5 shadow  w-full max-w-[500px] mx-auto   rounded-lg p-3 md:p-8 my-20">
                        <div>
                              <div className="text-center">
                                    <Typography.Title style={{ color: '#FFC301' }} level={2}>
                                          Forgot Password
                                    </Typography.Title>
                                    <Typography.Paragraph>Enter your email to receive a otp</Typography.Paragraph>
                              </div>

                              <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
                                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                          <Input placeholder="Enter your email" />
                                    </Form.Item>

                                    <Form.Item>
                                          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                                Send Email
                                          </Button>
                                    </Form.Item>
                              </Form>
                        </div>
                  </div>
            </div>
      );
};

export default ForgotPasswordPage;
