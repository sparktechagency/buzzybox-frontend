import PageHeader from '@/components/shared/PageHeader';
import { getPrivacyPolicyData } from '@/services/privacyPolicy';

const PrivacyPolicyPage = async () => {
      const { data } = await getPrivacyPolicyData();

      return (
            <div className="">
                  <PageHeader title="Privacy Policy" />
                  <div className="container mx-auto py-10 px-4">
                        <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: data?.content }} />
                  </div>
            </div>
      );
};

export default PrivacyPolicyPage;
