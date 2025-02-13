import ConfigurationPanel from '@/components/pages/create-gift/ConfigurationPanel';
import PreviewPanel from '@/components/pages/create-gift/PreviewPanel';

const CreateGiftPage = () => {
      return (
            <div className="container h-[calc(100vh-96px)] ">
                  <div className="flex h-full justify-center gap-6 py-20">
                        <div className="w-2/5">
                              <ConfigurationPanel />
                        </div>
                        <div className="w-3/5">
                              <PreviewPanel />
                        </div>
                  </div>
            </div>
      );
};

export default CreateGiftPage;
