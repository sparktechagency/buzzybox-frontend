'use client';
import { Input, Button, Select, Form, Upload } from 'antd';
import { useAppSelector } from '@/redux/hooks';
import { LucideImage } from 'lucide-react';
import { useState } from 'react';

const SubmitMessageForm = ({ setCreatedCard, setIsModalOpen }: { setCreatedCard: any; setIsModalOpen: any }) => {
      const { recipientName, senderName, title } = useAppSelector((state) => state.giftCardManagement);
      const [form] = Form.useForm();
      const [selectedFont, setSelectedFont] = useState('');

      const onFinish = (values: any) => {
            const reader = new FileReader();
            if (values.image?.file?.originFileObj) {
                  reader.readAsDataURL(values.image.file.originFileObj);
                  reader.onload = () => {
                        const newCard = {
                              ...values,
                              image: reader.result as string,
                        };
                        setCreatedCard((prev: any) => [...prev, newCard]);
                        setIsModalOpen(false);
                  };
            } else {
                  setCreatedCard((prev: any) => [...prev, values]);
                  setIsModalOpen(false);
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
                                          style={{ fontFamily: selectedFont }}
                                    />
                              </Form.Item>

                              <Form.Item label="Change Message Font" name="font">
                                    <Select placeholder="Select a font style" className="w-full" onChange={setSelectedFont}>
                                          <Select.Option value="Arial">Arial</Select.Option>
                                          <Select.Option value="Georgia">Georgia</Select.Option>
                                          <Select.Option value="Times New Roman">Times New Roman</Select.Option>
                                          <Select.Option value="Verdana">Verdana</Select.Option>
                                    </Select>
                              </Form.Item>

                              <Form.Item name={'image'} label="Add Photo or Video">
                                    <Upload
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
