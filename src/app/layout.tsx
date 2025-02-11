import type { Metadata } from 'next';
import './globals.css';
import Provider from '@/provider/Provider';
import { DM_Sans, Poppins } from 'next/font/google';

export const metadata: Metadata = {
      title: 'BuzzyBox',
      description: 'The best gift for your loved ones',
};

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en">
                  <body className={`${dmSans.className} ${poppins.className} `}>
                        <Provider>{children}</Provider>
                  </body>
            </html>
      );
}
