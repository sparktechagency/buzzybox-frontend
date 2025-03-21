export const getFaqsData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch faq data');
      }

      return res.json();
};
