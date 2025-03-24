'use client';
import { Avatar, Button, Checkbox, Form, Input, InputNumber, Select, Upload } from 'antd';
import { DollarSign } from 'lucide-react';
import { FaGifts } from 'react-icons/fa';
import { FcEditImage } from 'react-icons/fc';
import { useState } from 'react';
import Modal from '@/components/shared/Modal';
import { UploadChangeParam } from 'antd/es/upload';
import { useAddNewPageMutation } from '@/redux/features/website/gift-card/giftCardApi';
import toast from 'react-hot-toast';
import invite_icon from '@/assets/icons/invite-icon.png';
import InviteModal from '../InviteModal';
import { useCreatePaymentLinkMutation } from '@/redux/features/website/payment/paymentApi';

const Sidebar = ({ id }: { id: string }) => {
      const [isGiftCardEnabled, setIsGiftCardEnabled] = useState(false);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
      const [updateImage] = useAddNewPageMutation();
      const [createPayment] = useCreatePaymentLinkMutation();

      // handle background image change
      const handleFileChange = async (info: UploadChangeParam) => {
            const uploadedFile = info.file.originFileObj;
            const formData = new FormData();
            if (uploadedFile) {
                  formData.append('image', uploadedFile);
            }

            try {
                  toast.loading('Uploading...', { id: 'uploadImage' });
                  const res = await updateImage({ id, payload: formData }).unwrap();
                  if (res.success) {
                        toast.success('Background updated successfully', { id: 'uploadImage' });
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to update', { id: 'uploadImage' });
                  console.log(error);
            }
      };

      const handleSubscription = (values: any) => {
            console.log(values);
            setIsModalOpen(false);
      };

      // handle payment
      const handlePayment = async () => {
            try {
                  const res = await createPayment({ payload: { giftCardId: id } }).unwrap();
                  if (res.success) {
                        window.location.href = res.data.url;
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to create payment link');
                  console.log(error);
            }
      };
      return (
            <div className="p-5 space-y-4">
                  <div
                        onClick={() => setIsInviteModalOpen(true)}
                        className="flex items-center gap-2 border border-primary rounded-lg p-2 cursor-pointer hover:text-primary duration-100"
                  >
                        <Avatar size={40} src={invite_icon.src} />
                        <span className="text-base font-medium">Invite Others</span>
                  </div>
                  <InviteModal open={isInviteModalOpen} setOpen={setIsInviteModalOpen} />

                  <div className="space-y-4">
                        <h3 className="text-lg font-medium">Edit Design</h3>
                        <div className="space-y-3 bg-primary/5 p-3 rounded-lg border-primary border">
                              {/* <button className="w-full flex items-center gap-3 p-3 hover:text-primary duration-100 rounded-lg">
                                    <FcRules size={30} />
                                    <span>Edit Message</span>
                              </button> */}
                              <Upload
                                    accept="image/png, image/jpeg"
                                    maxCount={1}
                                    style={{
                                          width: '100%',
                                    }}
                                    onChange={handleFileChange}
                              >
                                    <button className="w-full flex items-center gap-3 p-3 hover:text-primary duration-100 rounded-lg">
                                          <FcEditImage size={30} />
                                          <span>Change Background</span>
                                    </button>
                              </Upload>
                              {/* <button className="w-full flex items-center gap-3 p-3 hover:text-primary duration-100 rounded-lg">
                                    <FcAddImage size={30} />
                                    <span>Change Image</span>
                              </button> */}
                        </div>
                  </div>

                  <div className="flex items-center gap-2">
                        <Checkbox onChange={(e) => setIsGiftCardEnabled(e.target.checked)} checked={isGiftCardEnabled} />
                        <span className="flex items-center gap-2">
                              Add gift Card
                              <FaGifts className="text-red-500" size={30} />
                        </span>
                  </div>

                  {isGiftCardEnabled && (
                        <div className="space-y-4">
                              <div className="space-y-4">
                                    <h3 className="gift-card-item text-lg font-medium">Select Currency</h3>
                                    <div className="gift-card-item">
                                          <Select
                                                style={{ width: '100%', height: '50px' }}
                                                className="w-full "
                                                placeholder="Select currency"
                                                options={[
                                                      { value: 'usd', label: 'USD' },
                                                      { value: 'eur', label: 'EUR' },
                                                      { value: 'gbp', label: 'GBP' },
                                                ]}
                                          />
                                    </div>
                              </div>

                              <div className="space-y-4">
                                    <h3 className="text-lg font-medium gift-card-item">Enter Amount</h3>
                                    <InputNumber
                                          className=""
                                          style={{ width: '100%', height: '50px' }}
                                          prefix={<DollarSign className="border rounded-full p-1 " size={25} />}
                                          placeholder="0.00"
                                    />
                              </div>
                        </div>
                  )}

                  <Button onClick={handlePayment} type="primary" className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 border-none">
                        Next
                  </Button>

                  <div>
                        <Checkbox onChange={() => setIsModalOpen(true)}>Stay up to date</Checkbox>
                  </div>

                  <Modal title="" visible={isModalOpen} onCancel={() => setIsModalOpen(false)}>
                        <div className="text-center space-y-4">
                              <h1 className="text-2xl font-bold">Stay up to date?</h1>
                              <p>Keep me updated via email with the latest news, special offers, and important updates</p>
                              <Form onFinish={handleSubscription}>
                                    <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                          <Input placeholder="Enter your email" />
                                    </Form.Item>
                                    <Form.Item>
                                          <Button type="primary" htmlType="submit">
                                                Submit
                                          </Button>
                                    </Form.Item>
                              </Form>
                        </div>
                  </Modal>
            </div>
      );
};

export default Sidebar;
