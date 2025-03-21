'use client';

import { logOut } from '@/redux/features/auth/authSlice';
import { useDeleteUserProfileMutation } from '@/redux/features/user/userApi';
import { useAppDispatch } from '@/redux/hooks';
import { Button, Form, Input, Modal } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const DeleteAccount = () => {
      const [open, setOpen] = useState(false);
      const [deleteAccount] = useDeleteUserProfileMutation();
      const dispatch = useAppDispatch();
      const router = useRouter();
      const [form] = Form.useForm();

      const handleDeleteAccount = async (values: any) => {
            toast.loading('Deleting...', { id: 'deleteAccountToastId' });
            try {
                  const res = await deleteAccount({ payload: values }).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Account deleted successfully', { id: 'deleteAccountToastId' });
                        // logout the user and redirect to sign-up page
                        dispatch(logOut());
                        router.push('/sign-up');
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to delete account', { id: 'deleteAccountToastId' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div>
                  <div className="w-full space-y-3  md:max-w-lg p-4 bg-white shadow-md rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900">Close your account</h3>
                        <p className=" text-gray-600 mt-1">Once you delete your account, there&apos;s no going back. Please be certain!</p>
                        <Button className="my-3" type="primary" onClick={() => setOpen(true)}>
                              Delete Account
                        </Button>
                  </div>

                  {/* delete confirm modal */}
                  <Modal title="Are you sure to delete your account?" centered open={open} footer={null} onCancel={() => setOpen(false)}>
                        <p className="mb-4">Enter your email and password to proceed.</p>
                        <Form
                              className="w-full md:max-w-lg"
                              requiredMark={false}
                              layout="vertical"
                              form={form}
                              name="basic"
                              initialValues={{ remember: true }}
                              onFinish={handleDeleteAccount}
                        >
                              <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, type: 'email', message: 'Please confirm your email' }]}
                              >
                                    <Input type="email" />
                              </Form.Item>

                              <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                              >
                                    <Input.Password />
                              </Form.Item>

                              <Form.Item>
                                    <div className="flex justify-end items-center gap-2">
                                          <Button type="default" onClick={() => setOpen(false)}>
                                                Cancel
                                          </Button>
                                          <Button type="primary" danger htmlType="submit">
                                                Delete
                                          </Button>
                                    </div>
                              </Form.Item>
                        </Form>
                  </Modal>
            </div>
      );
};

export default DeleteAccount;
