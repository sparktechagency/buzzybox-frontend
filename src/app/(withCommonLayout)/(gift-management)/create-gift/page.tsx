'use client';
import dynamic from 'next/dynamic';
const ConfigurationPanel = dynamic(() => import('@/components/pages/create-gift/ConfigurationPanel'), { ssr: false });
const PreviewPanel = dynamic(() => import('@/components/pages/create-gift/PreviewPanel'), { ssr: false });

const CreateGiftPage = () => {
      return (
            <div className="container h-[calc(100vh-96px)]  ">
                  <div className="flex h-full justify-center gap-6 py-20">
                        <div className="w-2/5">
                              <ConfigurationPanel />
                        </div>
                        <div className="w-3/5 relative">
                              <PreviewPanel />
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
