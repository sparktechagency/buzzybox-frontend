import { cookies } from 'next/headers';

export const getProfile = async () => {
      const token = cookies().get('accessToken')?.value;
      console.log(token);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
            cache: 'no-store',
            headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
            },
      });

      if (!res.ok) {
            console.error('Failed to fetch profile data');
      }

      return res.json();
};
