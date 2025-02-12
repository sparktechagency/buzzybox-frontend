'use client';

import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Edit2 } from 'lucide-react';
import Modal from '@/components/shared/Modal';

export default function ProfileCard() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [profile, setProfile] = useState({
            fullName: 'Sazzad Chowdhury',
            email: 'demo@gmail.com',
            phone: '+88 01916333904',
      });

      const [form] = Form.useForm();

      const handleOpenModal = () => {
            form.setFieldsValue(profile);
            setIsModalOpen(true);
      };

      const handleCloseModal = () => {
            setIsModalOpen(false);
      };

      const handleSave = () => {
            form.validateFields()
                  .then((values) => {
                        setProfile(values);
                        handleCloseModal();
                  })
                  .catch((errorInfo) => {
                        console.log('Validation Failed:', errorInfo);
                  });
      };

      return (
            <div className="max-w-lg ">
                  <div className="flex items-center justify-between mb-3">
                        <h1 className="text-2xl font-semibold">Profile</h1>
                        <Button icon={<Edit2 size={20} />} type="text" onClick={handleOpenModal}>
                              Edit
                        </Button>
                  </div>
                  <div className="relative custom-shadow bg-white p-5">
                        <div className="space-y-6">
                              <div className="space-y-1">
                                    <h3 className="text-title">Full Name</h3>
                                    <p className="text-paragraph">{profile.fullName}</p>
                              </div>
                              <div className="space-y-1">
                                    <h3 className="text-title">Email Address</h3>
                                    <p className="text-paragraph">{profile.email}</p>
                              </div>
                              <div className="space-y-1">
                                    <h3 className="text-title">Phone Number</h3>
                                    <p className="text-paragraph">{profile.phone}</p>
                              </div>
                        </div>
                  </div>

                  <Modal title="Edit Profile" visible={isModalOpen} onCancel={handleCloseModal} onOk={handleSave} width={600}>
                        <Form form={form} layout="vertical">
                              <Form.Item
                                    label="Full Name"
                                    name="fullName"
                                    rules={[{ required: true, message: 'Please enter your full name' }]}
                              >
                                    <Input />
                              </Form.Item>
                              <Form.Item
                                    label="Email Address"
                                    name="email"
                                    rules={[
                                          { required: true, message: 'Please enter your email' },
                                          { type: 'email', message: 'Please enter a valid email' },
                                    ]}
                              >
                                    <Input />
                              </Form.Item>
                              <Form.Item
                                    label="Phone Number"
                                    name="phone"
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
