'use client';
import { Input, Button, Form, Upload } from 'antd';
import { useAppSelector } from '@/redux/hooks';
import { LucideImage } from 'lucide-react';
import { useAddNewPageMutation } from '@/redux/features/website/gift-card/giftCardApi';
import toast from 'react-hot-toast';

const SubmitMessageForm = ({ setIsModalOpen, id }: { setIsModalOpen: any; id: string }) => {
      const { recipientName, senderName, title } = useAppSelector((state) => state.giftCardManagement);
      const [form] = Form.useForm();

      const [addNewPage] = useAddNewPageMutation();

      const onFinish = async (values: any) => {
            const formData = new FormData();
            formData.append(
                  'page',
                  JSON.stringify({
                        senderName: values.senderName,
                        message: values.message,
                  })
            );
            formData.append('pageImage', values.image?.file?.originFileObj);

            try {
                  toast.loading('Adding card...', { id: 'addCardToast' });
                  const res = await addNewPage({ payload: formData, id }).unwrap();
                  if (res.success) {
                        toast.success(res?.message || 'Added successfully', { id: 'addCardToast' });
                        setIsModalOpen(false);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to add', { id: 'addCardToast' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div className="">
                  <div className="">
                        <Form
                              layout="vertical"
                              requiredMark={false}
                              form={form}
                              name="submit_message"
                              onFinish={onFinish}
                              initialValues={{
                                    recipientName,
                                    senderName,
                                    title,
                              }}
                              className="space-y-6"
                        >
                              <Form.Item
                                    label="Your Name"
                                    name="senderName"
                                    rules={[{ required: true, message: 'Please enter your name!' }]}
                              >
                                    <Input placeholder="Enter your name" />
                              </Form.Item>

                              <Form.Item label="Your Message" name="message">
                                    <Input.TextArea
                                          placeholder="Tip: Personalize your message with an image, GIF, or video to make it more memorable."
                                          rows={4}
                                    />
                              </Form.Item>
                              {/* 
                              <Form.Item label="Change Message Font" name="font">
                                    <Select placeholder="Select a font style" className="w-full" onChange={setSelectedFont}>
                                          <Select.Option value="Arial">Arial</Select.Option>
                                          <Select.Option value="Georgia">Georgia</Select.Option>
                                          <Select.Option value="Times New Roman">Times New Roman</Select.Option>
                                          <Select.Option value="Verdana">Verdana</Select.Option>
                                    </Select>
                              </Form.Item> */}

                              <Form.Item name={'image'} label="Add Photo or Video">
                                    <Upload
                                          maxCount={1}
                                          style={{
                                                width: '100%',
                                          }}
                                    >
                                          <Button
                                                icon={<LucideImage />}
                                                style={{
                                                      backgroundColor: '#0F8814',
                                                      color: '#fff',
                                                }}
                                          >
                                                Upload a File
                                          </Button>
                                    </Upload>
                              </Form.Item>

                              <Form.Item className="">
                                    <Button
                                          style={{
                                                width: '100%',
                                          }}
                                          type="primary"
                                          htmlType="submit"
                                    >
                                          Submit
                                    </Button>
                              </Form.Item>
                        </Form>
                  </div>
            </div>
      );
};

export default SubmitMessageForm;
