export const getPrivacyPolicyData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch privacy policy data');
      }

      return res.json();
};
