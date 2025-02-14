'use client';

import { Form, Select, Input, Button } from 'antd';
import Image from 'next/image';
import GiftImage from '@/assets/images/configure-panel/gift.png';
import BookImage from '@/assets/images/configure-panel/book.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateField } from '@/redux/features/gift-card/giftCardManagementSlice';

const ConfigurationPanel = () => {
      const dispatch = useAppDispatch();
      const { boardFormat, occasionType, title, recipientName, senderName } = useAppSelector((state) => state.giftCardManagement);

      const handleDispatch = (field: any, value: any) => {
            dispatch(updateField({ field, value }));
      };

      const onFinish = (values: any) => {
            // Handle form submission here
            console.log('Form Submitted', values);
      };

      return (
            <div>
                  <Form
                        name="giftCardConfig"
                        onFinish={onFinish}
                        initialValues={{
                              boardFormat: boardFormat,
                              occasionType: occasionType,
                              title: title,
                              recipientName: recipientName,
                              senderName: senderName,
                        }}
                        layout="vertical"
                  >
                        <div className="w-full bg-primary/5 p-6 rounded-xl mx-auto">
                              <h2 className="text-2xl font-bold text-title">Create Your Buzzybox?</h2>

                              <p className="text-gray-700 mt-3 font-medium">Select board format</p>
                              <div className="flex items-center gap-6">
                                    <div
                                          onClick={() => handleDispatch('boardFormat', 'card')}
                                          className={`flex flex-col items-center justify-center p-4 w-1/2 border rounded-lg cursor-pointer transition ${
                                                boardFormat === 'card' ? 'border-red-500 bg-yellow-100' : 'border-gray-300 bg-[#B8D8FD]'
                                          }`}
                                    >
                                          <Image width={500} height={500} src={BookImage.src} alt="Memory Book" className="w-8 h-8" />
                                          <p className="mt-2 font-medium">Memory Book</p>
                                    </div>
                                    <div
                                          onClick={() => handleDispatch('boardFormat', 'grid')}
                                          className={`flex flex-col items-center justify-center p-4 w-1/2 border rounded-lg cursor-pointer transition ${
                                                boardFormat === 'grid' ? 'border-red-500 bg-yellow-100' : 'border-gray-300 bg-[#B8D8FD]'
                                          }`}
                                    >
                                          <Image width={500} height={500} src={GiftImage.src} alt="Greetings Card" className="w-8 h-8" />
                                          <p className="mt-2 font-medium">Greetings Card</p>
                                    </div>
                              </div>

                              <p className="text-gray-700 mt-5 font-medium">Select Occasion</p>
                              <Form.Item name="occasionType" rules={[{ required: true, message: 'Please select an occasion' }]}>
                                    <Select
                                          placeholder="Select an occasion"
                                          className="w-full mt-2"
                                          onChange={(value) => handleDispatch('occasionType', value)}
                                          options={[
                                                { value: 'birthday', label: 'Birthday' },
                                                { value: 'farewell', label: 'Farewell' },
                                                { value: 'wedding', label: 'Wedding' },
                                          ]}
                                    />
                              </Form.Item>

                              <p className="text-gray-700 mt-5 font-medium">Recipient Name</p>
                              <Form.Item name="recipientName" rules={[{ required: true, message: 'Please input the recipient name' }]}>
                                    <Input
                                          placeholder="Who is this card for?"
                                          className="mt-2"
                                          onChange={(e) => handleDispatch('recipientName', e.target.value)}
                                    />
                              </Form.Item>

                              <p className="text-gray-700 mt-5 font-medium">Buzzybox Title</p>
                              <Form.Item name="title" rules={[{ required: true, message: 'Please input the Buzzybox title' }]}>
                                    <Input
                                          placeholder="e.g. Happy Birthday Jenny"
                                          className="mt-2"
                                          onChange={(e) => handleDispatch('title', e.target.value)}
                                    />
                              </Form.Item>

                              <p className="text-gray-700 mt-5 font-medium">Sender Name</p>
                              <Form.Item name="senderName" rules={[{ required: true, message: 'Please input the sender name' }]}>
                                    <Input
                                          placeholder="e.g. Adam John"
                                          className="mt-2"
                                          onChange={(e) => handleDispatch('senderName', e.target.value)}
                                    />
                              </Form.Item>
                        </div>

                        <div>
                              <Button type="primary" htmlType="submit" className="w-full mt-5">
                                    Next
                              </Button>
                        </div>
                  </Form>
            </div>
      );
};

export default ConfigurationPanel;
