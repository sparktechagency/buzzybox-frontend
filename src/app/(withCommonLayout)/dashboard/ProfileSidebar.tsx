'use client';
import React, { useState } from 'react';
import { Menu, message, Upload } from 'antd';
import Image from 'next/image';
import { CameraIcon, GiftIcon, LogOut, Settings2, UserIcon } from 'lucide-react';
import { UploadChangeParam } from 'antd/es/upload';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const ProfileSidebar = () => {
      const pathname = usePathname();
      const activeKey = pathname.split('/').pop();
      const [previewImage, setPreviewImage] = useState<undefined | string>('https://i.ibb.co.com/yN2vT01/me.jpg');

      const handleFileChange = ({ file }: UploadChangeParam<any>) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => {
                  setPreviewImage(reader.result as string);
            };
      };

      const sidebarItems = [
            {
                  key: 'profile',
                  icon: <UserIcon size={20} />,
                  label: 'My Profile',
                  href: '/dashboard/profile',
                  selected: true,
            },

            {
                  key: 'gift-history',
                  icon: <GiftIcon size={20} />,
                  label: 'Buzzybox History',
                  href: '/dashboard/gift-history',
            },
            {
                  key: 'settings',
                  icon: <Settings2 size={20} />,
                  label: 'Settings',
                  href: '/dashboard/mentor/settings',
            },
            {
                  key: 'logout',
                  icon: <LogOut size={20} />,
                  label: 'Logout',
                  href: '/logout',
            },
      ];

      const handleLogout = () => {
            message.success('Logout successful!');
      };

      return (
            <div className="">
                  <div className="flex flex-col items-center my-2 mt-2">
                        <div className="relative size-[86px] rounded-full border-2 border-primary p-1">
                              <Image
                                    width={500}
                                    height={500}
                                    src={previewImage || 'https://i.ibb.co.com/yN2vT01/me.jpg'}
                                    alt="Profile"
                                    className="w-full h-full  object-cover rounded-full"
                              />
                              <div className="absolute right-0 bottom-0 cursor-pointer bg-white w-8 h-8 rounded-lg text-center flex items-center justify-center">
                                    <Upload showUploadList={false} onChange={handleFileChange}>
                                          <div className="bg-primary p-2 rounded-full text-white">
                                                <CameraIcon size={18} />
                                          </div>
                                    </Upload>
                              </div>
                        </div>
                        <div className="mt-2">
                              <h3 className="text-lg font-bold mb-1">Jazmyne Doe</h3>
                              <p className="text-sm text-gray-600">demo@example.com</p>
                        </div>
                  </div>

                  <Menu
                        style={{
                              border: 'none',
                        }}
                        mode="vertical"
                        defaultSelectedKeys={['profile']}
                        selectedKeys={[activeKey] as any}
                        className="w-full"
                  >
                        {sidebarItems.map((item) => {
                              if (item.key === 'logout') {
                                    return (
                                          <Menu.Item
                                                onClick={() => {
                                                      handleLogout();
                                                }}
                                                key={item.key || ''}
                                                icon={item.icon}
                                          >
                                                <span>{item.label}</span>
                                          </Menu.Item>
                                    );
                              }
                              return (
                                    <Menu.Item key={item.key || ''} icon={item.icon}>
                                          <Link href={item.href}>{item.label}</Link>
                                    </Menu.Item>
                              );
                        })}
                  </Menu>
            </div>
      );
};

export default ProfileSidebar;
