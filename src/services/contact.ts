export const getContactInfo = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-info`, {
            cache: 'no-store',
      });

      if (!res.ok) {
            throw new Error('Failed to fetch contact info');
      }

      return res.json();
};
