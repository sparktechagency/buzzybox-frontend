import { LoaderCircle } from 'lucide-react';

const Loader = () => {
      return (
            <div className="h-screen w-full flex justify-center items-center fixed top-0 z-[100] bg-white/10 backdrop-blur">
                  <LoaderCircle className="animate-spin" />
            </div>
      );
};

export default Loader;
