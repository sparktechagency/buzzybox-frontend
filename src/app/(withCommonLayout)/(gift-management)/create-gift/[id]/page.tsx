'use client';
import Preview from '@/components/pages/create-gift/single-gift/Preview';
import Sidebar from '@/components/pages/create-gift/single-gift/Sidebar';

const CreateGiftPage = () => {
      return (
            <div className="container min-h-[calc(100vh-96px)]">
                  <div className="flex h-full justify-center gap-6 py-10">
                        <div className="w-[35%]">
                              <Sidebar />
                        </div>
                        <div className="w-[65%] min-h-[734px] relative">
                              <Preview />
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
