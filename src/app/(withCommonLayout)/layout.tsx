import Footer from '@/components/layout/Footer';
import NavbarWrapper from '@/components/layout/NavbarWrapper';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
      return (
            <div>
                  <NavbarWrapper />
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
