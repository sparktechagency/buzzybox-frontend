'use client';

import React from 'react';
import { Menu, Avatar, Modal } from 'antd';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { logOut } from '@/redux/features/auth/authSlice';

const ProfileDropdown = ({ profile }: { profile: any }) => {
      const router = useRouter();
      const dispatch = useAppDispatch();

      const handleLogout = () => {
            Modal.confirm({
                  title: 'Logout',
                  centered: true,
                  content: 'Are you sure you want to logout?',
                  okText: 'Yes',
                  cancelText: 'No',
                  okButtonProps: {
                        style: {
                              backgroundColor: '#FFC301',
                              color: '#fff',
                        },
                  },
                  cancelButtonProps: {
                        style: {
                              backgroundColor: '#fff',
                              color: '#FFC301',
                              border: '1px solid #FFC301',
                        },
                  },

                  onOk() {
                        dispatch(logOut());
                        router.push('/sign-in');
                  },
            });
      };

      return (
            <div className="">
                  <Menu
                        mode="inline"
                        style={{
                              padding: 5,
                        }}
                  >
                        <div
                              onClick={() => {
                                    router.push('/dashboard');
                              }}
                              className="flex cursor-pointer items-center text-start gap-2 "
                        ></div>
                        <Menu.Item
                              onClick={() => {
                                    router.push('/dashboard/profile');
                              }}
                              style={{
                                    marginBottom: 10,
                              }}
                              key="profile"
                        >
                              <div className="flex gap-3">
                                    <Avatar
                                          size={50}
                                          src={
                                                profile?.profile?.includes('http')
                                                      ? profile?.profile
                                                      : `${process.env.NEXT_PUBLIC_SERVER_URL}${profile?.profile}`
                                          }
                                    />
                                    <div>
                                          <h3 className="font-semibold">{profile?.name}</h3>
                                          <p className="text-primary cursor-pointer text-sm">View Profile</p>
                                    </div>
                              </div>
                        </Menu.Item>

                        <Menu.Divider />
                        <Menu.Item onClick={handleLogout} key="logout" icon={<LogOut style={{ color: '#FFC301', fontSize: 20 }} />}>
                              Logout
                        </Menu.Item>
                  </Menu>
            </div>
      );
};

export default ProfileDropdown;
