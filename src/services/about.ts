export const getAboutData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch about data');
      }

      return res.json();
};
