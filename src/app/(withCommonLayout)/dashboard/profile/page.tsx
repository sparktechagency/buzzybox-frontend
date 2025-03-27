'use client';

import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Edit2 } from 'lucide-react';
import Modal from '@/components/shared/Modal';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/redux/features/user/userApi';
import toast from 'react-hot-toast';

export default function ProfileCard() {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const { data } = useGetUserProfileQuery(undefined);
      const profile = data?.data;

      const [updateProfile] = useUpdateUserProfileMutation();

      const [form] = Form.useForm();

      const handleOpenModal = () => {
            form.setFieldsValue(profile);
            setIsModalOpen(true);
      };

      const handleCloseModal = () => {
            setIsModalOpen(false);
      };

      // update handler
      const handleUpdate = async (values: any) => {
            toast.loading('Updating...', { id: 'ProfileUpdateToast' });
            try {
                  const res = await updateProfile({ payload: values }).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Updated successfully', { id: 'ProfileUpdateToast' });
                  }
                  handleCloseModal();
            } catch (errorInfo: any) {
                  toast.error(errorInfo.message || 'Failed to update', { id: 'ProfileUpdateToast' });
                  console.log('Validation Failed:', errorInfo);
            }
      };

      return (
            <div className="max-w-lg ">
                  <div className="flex items-center justify-between mb-3">
                        <h1 className="text-2xl font-semibold">Profile</h1>
                        <Button icon={<Edit2 size={20} />} type="text" onClick={handleOpenModal}>
                              Edit
                        </Button>
                  </div>
                  <div className="relative md:custom-shadow  w-full p-3 md:p-5">
                        <div className="space-y-6">
                              <div className="space-y-1">
                                    <h3 className="text-title">Full Name</h3>
                                    <p className="text-paragraph">{profile?.name}</p>
                              </div>
                              <div className="space-y-1">
                                    <h3 className="text-title">Email Address</h3>
                                    <p className="text-paragraph">{profile?.email}</p>
                              </div>
                              <div className="space-y-1">
                                    <h3 className="text-title">Phone Number</h3>
                                    <p className="text-paragraph">{profile?.contact || 'N/A'}</p>
                              </div>
                        </div>
                  </div>

                  <Modal title="Edit Profile" visible={isModalOpen} onCancel={handleCloseModal} width={600}>
                        <Form form={form} onFinish={handleUpdate} layout="vertical">
                              <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your full name' }]}>
                                    <Input />
                              </Form.Item>
                              <Form.Item
                                    label="Phone Number"
                                    name="contact"
                                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                              >
                                    <Input />
                              </Form.Item>

                              <Form.Item style={{ textAlign: 'right' }}>
                                    <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                          Save Changes
                                    </Button>
                              </Form.Item>
                        </Form>
                  </Modal>
            </div>
      );
}
