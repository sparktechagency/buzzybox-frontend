'use client';

import { Form, Select, Input, Button, DatePicker } from 'antd';
import Image from 'next/image';
import GiftImage from '@/assets/images/configure-panel/gift.png';
import BookImage from '@/assets/images/configure-panel/book.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateField } from '@/redux/features/gift-card/giftCardManagementSlice';
import { useRouter } from 'next/navigation';
import { useCreateGiftCardMutation } from '@/redux/features/website/gift-card/giftCardApi';
import toast from 'react-hot-toast';
import { useGetCategoriesQuery } from '@/redux/features/website/category/categoryApi';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';

const ConfigurationPanel = () => {
      const router = useRouter();
      const dispatch = useAppDispatch();
      const { boardFormat, title, recipientName, senderName } = useAppSelector((state) => state.giftCardManagement);

      const handleDispatch = (field: any, value: any) => {
            dispatch(updateField({ field, value }));
      };

      const { data } = useGetCategoriesQuery(undefined);
      const occasionsData = data?.data.map((item: any) => ({ label: item.name, value: item._id }));

      const [createGift, { isLoading }] = useCreateGiftCardMutation();

      // handle create gift card form submission
      const onFinish = async (values: any) => {
            console.log(values?.emailScheduleDate?.toISOString());
            toast.loading('Creating...', { id: 'createGiftToast' });

            const giftData = {
                  category: values.occasionType,
                  uniqueId: uuidv4(),
                  coverPage: {
                        title: values.title,
                        senderName: values.senderName,
                        recipientName: values.recipientName,
                  },
                  receiverInfo: {
                        receiverEmail: values?.recipientEmail,
                        emailScheduleDate: values?.emailScheduleDate?.toISOString(),
                  },
            };

            try {
                  const res = await createGift({ payload: giftData }).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Successfully created!', { id: 'createGiftToast' });
                        router.push(`/create-gift/${res.data.uniqueId}`);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to create', { id: 'createGiftToast' });
                  console.log(error?.data?.message);
            }
      };

      const disabledDate: RangePickerProps['disabledDate'] = (current) => {
            // Can not select days before today and today
            return current && current < dayjs().endOf('day');
      };

      return (
            <div>
                  <Form
                        name="giftCardConfig"
                        onFinish={onFinish}
                        initialValues={{
                              boardFormat: boardFormat,
                              occasionType: occasionsData?.[0]?.value,
                              title: title,
                              recipientName: recipientName,
                              senderName: senderName,
                        }}
                        layout="vertical"
                  >
                        <div className="w-full bg-primary/5 p-1 md:p-6 rounded-xl mx-auto">
                              <h2 className="text-2xl font-bold text-title">Create Your Buzzybox?</h2>

                              <p className="text-gray-700 mt-3 font-medium">Select board format</p>
                              <div className="flex  items-center gap-6">
                                    <div
                                          onClick={() => handleDispatch('boardFormat', 'card')}
                                          className={`flex flex-col items-center justify-center p-4 w-1/2 border rounded-lg cursor-pointer transition ${
                                                boardFormat === 'card' ? 'border-red-500 bg-yellow-100' : 'border-gray-300 bg-[#B8D8FD]'
                                          }`}
                                    >
                                          <Image width={500} height={500} src={GiftImage.src} alt="Greetings Card" className="w-8 h-8" />
                                          <p className="mt-2 font-medium">Greetings Card</p>
                                    </div>
                                    <div
                                          onClick={() => handleDispatch('boardFormat', 'grid')}
                                          className={`flex flex-col items-center justify-center p-4 w-1/2 border rounded-lg cursor-pointer transition ${
                                                boardFormat === 'grid' ? 'border-red-500 bg-yellow-100' : 'border-gray-300 bg-[#B8D8FD]'
                                          }`}
                                    >
                                          <Image width={500} height={500} src={BookImage.src} alt="Memory Book" className="w-8 h-8" />
                                          <p className="mt-2 font-medium">Memory Book</p>
                                    </div>
                              </div>

                              <p className="text-gray-700 mt-5 font-medium">Select Occasion</p>
                              <Form.Item name="occasionType" rules={[{ required: true, message: 'Please select an occasion' }]}>
                                    <Select
                                          placeholder="Select an occasion"
                                          className="w-full mt-2"
                                          onChange={(value) => handleDispatch('occasionType', value)}
                                          options={occasionsData}
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

                              <p className="text-gray-700 mt-5 font-medium">Recipient Name</p>
                              <Form.Item name="recipientName" rules={[{ required: true, message: 'Please input the recipient name' }]}>
                                    <Input
                                          placeholder="Who is this card for?"
                                          className="mt-2"
                                          onChange={(e) => handleDispatch('recipientName', e.target.value)}
                                    />
                              </Form.Item>

                              <p className="text-gray-700 mt-5 font-medium">Recipient Email</p>
                              <Form.Item name="recipientEmail" rules={[{ required: true, message: 'Please input the recipient email' }]}>
                                    <Input
                                          placeholder="john@example.com"
                                          className="mt-2"
                                          onChange={(e) => handleDispatch('recieverEmail', e.target.value)}
                                    />
                              </Form.Item>

                              <p className="text-gray-700 mt-5 font-medium">Schedule Date</p>
                              <Form.Item name="emailScheduleDate" rules={[{ required: true, message: 'Please input the schedule date' }]}>
                                    <DatePicker
                                          format="YYYY-MM-DD HH:mm:ss"
                                          disabledDate={disabledDate}
                                          showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                                          placeholder="Select date and time"
                                          onChange={(value) => handleDispatch('emailScheduleDate', value.toISOString())}
                                          className="mt-2 w-full"
                                          style={{ padding: '9px 20px' }}
                                    />
                              </Form.Item>
                        </div>

                        <div>
                              <Button type="primary" htmlType="submit" className="w-full mt-5" disabled={isLoading}>
                                    {isLoading ? 'Loading...' : 'Next'}
                              </Button>
                        </div>
                  </Form>
            </div>
      );
};

export default ConfigurationPanel;
