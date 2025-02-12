'use client';
import { Input, Button, Form, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PageHeader from '@/components/shared/PageHeader';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
      { Icon: Facebook, href: '#' },
      { Icon: Twitter, href: '#' },
      { Icon: Instagram, href: '#' },
];

const ContactUsPage = () => {
      return (
            <div className="">
                  <PageHeader title="Contact Us" />
                  <div className="container my-20 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 ">
                        <div className="w-full space-y-10 lg:w-1/2 ">
                              <Typography.Title level={3} className="text-title mb-4">
                                    Get in Touch
                              </Typography.Title>
                              <p className="text-paragraph">
                                    Feel free to reach out to us with any questions or inquiries. We’re here to help!
                              </p>

                              <div className=" rounded-xl bg-white flex items-start gap-4 mb-6">
                                    <div className="bg-primary text-black w-12 h-12  flex items-center justify-center rounded-full">
                                          <PhoneOutlined style={{ fontSize: '20px' }} />
                                    </div>
                                    <div>
                                          <Typography.Text strong className="text-title">
                                                Phone
                                          </Typography.Text>
                                          <div className="text-[#555555] text-sm">(907) 555-0101</div>
                                    </div>
                              </div>

                              <div className=" rounded-xl bg-white flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary text-black flex items-center justify-center rounded-full">
                                          <MailOutlined style={{ fontSize: '20px' }} />
                                    </div>
                                    <div>
                                          <Typography.Text strong className="text-title">
                                                Email Address
                                          </Typography.Text>
                                          <div className="text-[#555555] text-sm">info@example.com</div>
                                    </div>
                              </div>
                              <div className=" rounded-xl bg-white flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary text-black flex items-center justify-center rounded-full">
                                          <EnvironmentOutlined style={{ fontSize: '20px' }} />
                                    </div>
                                    <div>
                                          <Typography.Text strong className="text-title">
                                                Location
                                          </Typography.Text>
                                          <div className="text-[#555555] text-sm">Jl. Merdeka Raya No.73B, Kuta, Badung, Bali</div>
                                    </div>
                              </div>
                              <div className="flex gap-5">
                                    {socialLinks.map(({ Icon, href }, index) => (
                                          <Link
                                                key={index}
                                                href={href}
                                                className="w-8 bg-primary h-8 flex items-center justify-center rounded  transition-colors"
                                          >
                                                <Icon className="w-5 h-5" />
                                          </Link>
                                    ))}
                              </div>
                        </div>

                        <div className="w-full max-w-[588px] shadow-md mx-auto lg:w-1/2 bg-primary-100/90 rounded-lg  p-8">
                              <Form requiredMark={false} layout="vertical">
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
