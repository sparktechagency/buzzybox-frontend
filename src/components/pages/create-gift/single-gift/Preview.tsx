import { useAppSelector } from '@/redux/hooks';
import CardPreview from './CardPreview';
import GridPreview from './GridPreview';
import { useGetSingleGiftCardQuery } from '@/redux/features/website/gift-card/giftCardApi';

const Preview = ({ id }: { id: string }) => {
      const { data, isLoading } = useGetSingleGiftCardQuery({ id });
      const gift = data?.data;

      const { boardFormat } = useAppSelector((state) => state.giftCardManagement);
      return (
            <div className="h-full">
                  {boardFormat == 'card' && <CardPreview gift={gift} isLoading={isLoading} />}
                  {boardFormat == 'grid' && <GridPreview />}
            </div>
      );
};

export default Preview;
