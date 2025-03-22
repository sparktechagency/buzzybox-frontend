import { useAppSelector } from '@/redux/hooks';
import CardPreview from './CardPreview';
import GridPreview from './GridPreview';
import { useGetSingleGiftCardQuery } from '@/redux/features/website/gift-card/giftCardApi';
import { useGetCategoriesQuery } from '@/redux/features/website/category/categoryApi';

const Preview = ({ id }: { id: string }) => {
      const { data } = useGetSingleGiftCardQuery({ id });
      const gift = data?.data;

      const { data: categoryData, isLoading } = useGetCategoriesQuery(undefined);
      const category = categoryData?.data?.find((item: any) => item._id === gift?.category);

      const { boardFormat } = useAppSelector((state) => state.giftCardManagement);
      return (
            <div className="h-full">
                  {boardFormat == 'card' && <CardPreview gift={gift} isLoading={isLoading} category={category} />}
                  {boardFormat == 'grid' && <GridPreview gift={gift} isLoading={isLoading} category={category} />}
            </div>
      );
};

export default Preview;