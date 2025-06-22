import { Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useGetContactInfoQuery } from '@/redux/features/website/contact-info/contactInfoApi';

const socialLinks = [
      { Icon: Facebook, href: '#' },
      { Icon: Twitter, href: '#' },
      { Icon: Instagram, href: '#' },
];
const ContactInfo = () => {
      const { data } = useGetContactInfoQuery(undefined);
      const info = data?.data?.[0];

      return (
            <div className="w-full space-y-10 lg:w-1/2 ">
                  <Typography.Title level={3} className="text-title mb-4">
                        Get in Touch
                  </Typography.Title>
                  <p className="text-paragraph text-sm md:text-base">
                        Feel free to reach out to us with any questions or inquiries. We&apos;re here to help!
                  </p>

                  <div className=" rounded-xl bg-white flex items-start gap-4 mb-6">
                        <div className="bg-primary text-black w-12 h-12  flex items-center justify-center rounded-full">
                              <PhoneOutlined style={{ fontSize: '20px' }} />
                        </div>
                        <div>
                              <Typography.Text strong className="text-title">
                                    Phone
                              </Typography.Text>
                              <div className="text-[#555555] text-sm">{info?.phone}</div>
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
                              <div className="text-[#555555] text-sm">{info?.email}</div>
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
                              <div className="text-[#555555] text-sm">{info?.location}</div>
                        </div>
                  </div>
                  <div className="flex gap-5 w-full justify-center md:justify-start">
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
      );
};

export default ContactInfo;
