import { useAppSelector } from '@/redux/hooks';
import CardPreview from './CardPreview';
import GridPreview from './GridPreview';

const Preview = () => {
      const { boardFormat } = useAppSelector((state) => state.giftCardManagement);
      return (
            <div className="h-full">
                  {boardFormat == 'card' && <CardPreview />}
                  {boardFormat == 'grid' && <GridPreview />}
            </div>
      );
};

export default Preview;
