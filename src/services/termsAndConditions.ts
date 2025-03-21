export const getTermsAndConditionsData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/terms-and-conditions`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch privacy policy data');
      }

      return res.json();
};
