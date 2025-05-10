'use client';

import { useConnectAccountMutation } from '@/redux/features/website/payment/paymentApi';
import { Button, Form, Input } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';

const ConnectPage = ({ params }: { params: { id: string } }) => {
      const { id } = params;
      const [connectAccount] = useConnectAccountMutation();

      const handleConnect = async (values: any) => {
            toast.loading('Connecting...');
            const payload = {
                  giftCardId: id,
                  email: values.email,
            };

            try {
                  const res = await connectAccount({ payload }).unwrap();
                  if (res.success) {
                        window.location.href = res?.data;
                        toast.success('Connected successfully');
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to connect');
                  console.log(error);
            }
      };

      return (
            <div className="flex justify-center items-center min-h-[90vh] py-8">
                  <div className="space-y-4 max-w-md border p-6 rounded-lg">
                        <h3 className="text-xl font-medium text-center mb-8">Connect your account with Strip to withdraw</h3>
                        <Form onFinish={handleConnect} layout="vertical" requiredMark="optional">
                              <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                              >
                                    <Input placeholder="Enter your email" />
                              </Form.Item>
                              <Form.Item>
                                    <Button htmlType="submit" type="primary" className="w-full">
                                          Connect Now
                                    </Button>
                              </Form.Item>
                        </Form>
                  </div>
            </div>
      );
};

export default ConnectPage;
