import PageHeader from '@/components/shared/PageHeader';
import { getTermsAndConditionsData } from '@/services/termsAndConditions';

const TermsAndConditionsPage = async () => {
      const {
            data: { content },
      } = await getTermsAndConditionsData();

      return (
            <div className="">
                  <PageHeader title="Terms and Conditions" />
                  <div className="container mx-auto px-4 py-10">
                        <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
            </div>
      );
};

export default TermsAndConditionsPage;
