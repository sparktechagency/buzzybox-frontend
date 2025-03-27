'use client';
import { Input, Button, Form } from 'antd';

import { MdOutlineArrowOutward } from 'react-icons/md';
import PageHeader from '@/components/shared/PageHeader';
import toast from 'react-hot-toast';
import { useCreateContactMutation } from '@/redux/features/website/contact/contactApi';
import ContactInfo from '@/components/pages/contact/ContactInfo';

const ContactUsPage = () => {
      const [createContact] = useCreateContactMutation();

      // submit handler
      const handleSubmit = async (values: any) => {
            toast.loading('Sending...', { id: 'contactToast' });
            try {
                  const res = await createContact(values).unwrap();
                  if (res.success) {
                        toast.success(res.message || 'Successfully sent!', { id: 'contactToast' });
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message || 'Failed to send', { id: 'contactToast' });
                  console.log(error?.data?.message);
            }
      };

      return (
            <div className="">
                  <PageHeader title="Contact Us" />
                  <div className="container my-20 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 ">
                        {/* contact info */}
                        <ContactInfo />

                        <div className="w-full max-w-[588px] md:shadow-md mx-auto lg:w-1/2 bg-primary-100/90 rounded-lg  md:p-8 p-2">
                              <Form onFinish={handleSubmit} requiredMark={false} layout="vertical">
                                    <div className="grid grid-cols-1  gap-4">
                                          <Form.Item
                                                label="Name"
                                                name="name"
                                                rules={[{ required: true, message: 'Please enter your name!' }]}
                                          >
                                                <Input placeholder="Enter Your Name..." />
                                          </Form.Item>

                                          <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[{ required: true, message: 'Please enter your email!' }]}
                                          >
                                                <Input placeholder="Enter Your Email..." />
                                          </Form.Item>

                                          <Form.Item
                                                label="Subject"
                                                name="subject"
                                                rules={[{ required: true, message: 'Please enter your subject!' }]}
                                          >
                                                <Input placeholder="Enter Your Subject..." />
                                          </Form.Item>
                                    </div>

                                    <Form.Item
                                          label="Message"
                                          name="message"
                                          rules={[{ required: true, message: 'Please enter your message!' }]}
                                    >
                                          <Input.TextArea placeholder="Enter Your Message..." rows={4} />
                                    </Form.Item>

                                    <Form.Item>
                                          <Button
                                                iconPosition="end"
                                                icon={<MdOutlineArrowOutward />}
                                                style={{ width: '100%' }}
                                                type="primary"
                                                size="large"
                                                htmlType="submit"
                                          >
                                                Send Message
                                          </Button>
                                    </Form.Item>
                              </Form>
                        </div>
                  </div>
            </div>
      );
};

export default ContactUsPage;
