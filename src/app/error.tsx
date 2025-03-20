'use client';
import { Button } from 'antd';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const GlobalErrorPage = () => {
      const router = useRouter();
      return (
            <div className="h-screen w-full flex flex-col justify-center items-center gap-8">
                  <h1 className="text-2xl font-semibold text-red-500">Oops! Something Wents Wrong!</h1>
                  <Button onClick={() => router.back()}>
                        <ArrowLeft size={20} /> Go Back
                  </Button>
            </div>
      );
};

export default GlobalErrorPage;
