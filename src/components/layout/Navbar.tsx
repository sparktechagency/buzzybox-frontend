'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.svg';

import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Button } from 'antd';

import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import { UserIcon } from 'lucide-react';

const Navbar = () => {
      const [showDrawer, setShowDrawer] = useState(false);

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
            <header className={`bg-[#fff] shadow-lg`}>
                  <nav className="container h-[96px]  relative z-[99]">
                        <div className="flex justify-between items-center h-full">
                              {/* Logo */}
                              <Link href={'/'}>
                                    <Image className="w-auto h-full object-contain" alt="Logo" src={Logo} width={131} height={70} />
                              </Link>
                              {/* Nav Items for Desktop */}
                              <div className="hidden md:flex bg-[#F6F6F6] rounded-lg p-1.5 items-center gap-8">
                                    <NavItems items={items} />
                              </div>
                              <div className="flex items-center space-x-6">
                                    <Link href="/sign-in">
                                          <Button iconPosition="start" icon={<UserIcon />} type="primary">
                                                Sign In
                                          </Button>
                                    </Link>
                              </div>
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
                  <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
            </header>
      );
};

export default Navbar;
