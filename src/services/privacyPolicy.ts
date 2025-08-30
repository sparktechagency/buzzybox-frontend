export const getPrivacyPolicyData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`, {
            cache: 'no-store',
      });

      return res.json();
};
