'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
// import dynamic from 'next/dynamic';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
      // const Navbar = dynamic(() => import('@/components/layout/Navbar'), {
      //       loading: () => <p>Loading...</p>,
      //       ssr: false,
      // });

      return (
            <div>
                  <Navbar />
                  {children}
                  <Footer />
                  <Toaster
                        position="top-center"
                        reverseOrder={false}
                        toastOptions={{
                              duration: 5000, // 5 seconds
                        }}
                  />
            </div>
      );
};

export default CommonLayout;
