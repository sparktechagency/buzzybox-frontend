export const getContactInfo = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-info`, {
            cache: 'no-store',
      });

      return res.json();
};
