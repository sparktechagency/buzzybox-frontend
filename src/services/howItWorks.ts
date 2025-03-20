export const getHowItWorksData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/how-it-works`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch how it works data');
      }

      return res.json();
};
