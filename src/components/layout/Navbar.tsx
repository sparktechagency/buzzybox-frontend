'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';

import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Avatar, Button, Dropdown } from 'antd';

import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import { UserIcon } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
import { useAppSelector } from '@/redux/hooks';
import { selectAccessToken } from '@/redux/features/auth/authSlice';
import { useGetUserProfileQuery } from '@/redux/features/user/userApi';

const Navbar = () => {
      const [showDrawer, setShowDrawer] = useState(false);
      const token = useAppSelector(selectAccessToken);
      const { data } = useGetUserProfileQuery(undefined);
      const profile = data?.data;

      const items = [
            { label: 'Home', path: '/' },

            {
                  label: 'About Us',
                  path: '/about-us',
            },
            {
                  label: 'How It Works',
                  path: '/how-it-works',
            },

            { label: 'Contact', path: '/contact-us' },
      ];

      return (
            <header className={`bg-[#fff] border-b border-primary/50`}>
                  <nav className="container h-[96px]  relative z-[99]">
                        <div className="flex justify-between items-center h-full">
                              {/* Logo */}
                              <Link href={'/'}>
                                    <Image
                                          className="w-[180px] md:w-full h-[70px] object-contain"
                                          alt="Logo"
                                          src={Logo}
                                          width={300}
                                          height={100}
                                          priority
                                          quality={100}
                                    />
                              </Link>
                              {/* Nav Items for Desktop */}
                              <div className="hidden md:flex bg-[#F6F6F6] rounded-lg p-1.5 items-center gap-8">
                                    <NavItems items={items} />
                              </div>
                              {token ? (
                                    <Dropdown
                                          placement="bottom"
                                          className="cursor-pointer hidden md:block ml-24"
                                          trigger={['click']}
                                          dropdownRender={() => <ProfileDropdown profile={profile} />}
                                    >
                                          <div className="flex items-center">
                                                <Avatar
                                                      size={45}
                                                      style={{
                                                            border: '2px solid #FFC301',
                                                      }}
                                                      alt=""
                                                      src={
                                                            profile?.profile?.includes('http')
                                                                  ? profile?.profile
                                                                  : `${process.env.NEXT_PUBLIC_SERVER_URL}${profile?.profile}`
                                                      }
                                                />
                                          </div>
                                    </Dropdown>
                              ) : (
                                    <div className=" items-center hidden md:flex space-x-6">
                                          <Link href="/sign-in">
                                                <Button iconPosition="start" icon={<UserIcon />} type="primary">
                                                      Sign In
                                                </Button>
                                          </Link>
                                    </div>
                              )}

                              <div className="md:hidden">
                                    <AiOutlineMenu
                                          onClick={() => setShowDrawer(!showDrawer)}
                                          className="text-primaryText cursor-pointer"
                                          size={24}
                                    />
                              </div>
                        </div>
                  </nav>

                  {/* Mobile Drawer */}
                  <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} profile={profile} />
            </header>
      );
};

export default Navbar;
