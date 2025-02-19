'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import BgImage from '@/assets/images/page-header/page-header.png';

interface PageHeaderProps {
      title: string;

      subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
      const pathname = usePathname();

      return (
            <div
                  style={{
                        backgroundImage: `url(${BgImage.src})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                  }}
                  className="page-header-bg min-h-[180px] flex flex-col items-center justify-center"
            >
                  <h1 className=" text-3xl md:text-[40px] font-semibold text-center">{title}</h1>

                  {/* breadcrumb */}
                  {pathname !== '/' && (
                        <div className="flex capitalize gap-2 text-sm md:text-base justify-center mt-4">
                              <Link href="/">
                                    <p className="">Home</p>
                              </Link>
                              <span className="">/</span>
                              <Link href={pathname}>
                                    <p className="">{pathname.replace('/', '')}</p>
                              </Link>
                        </div>
                  )}
            </div>
      );
};

export default PageHeader;
