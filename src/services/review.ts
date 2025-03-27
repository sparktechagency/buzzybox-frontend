export const getReviewsData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch reviews data');
      }

      return res.json();
};
