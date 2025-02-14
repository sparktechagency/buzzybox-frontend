'use client';
import GridPreviewPanel from '@/components/pages/create-gift/GridPreviewPanel';
import { useAppSelector } from '@/redux/hooks';
import dynamic from 'next/dynamic';
const ConfigurationPanel = dynamic(() => import('@/components/pages/create-gift/ConfigurationPanel'), { ssr: false });
const PreviewPanel = dynamic(() => import('@/components/pages/create-gift/CardPreviewPanel'), { ssr: false });

const CreateGiftPage = () => {
      const { boardFormat } = useAppSelector((state) => state.giftCardManagement);
      return (
            <div className="container min-h-[calc(100vh-96px)]  ">
                  <div className="flex h-full justify-center gap-6 py-20">
                        <div className="w-2/5">
                              <ConfigurationPanel />
                        </div>
                        <div className="w-3/5 relative">{boardFormat === 'card' ? <PreviewPanel /> : <GridPreviewPanel />}</div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
