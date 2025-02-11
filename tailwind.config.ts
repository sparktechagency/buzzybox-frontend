import type { Config } from 'tailwindcss';

const config: Config = {
      content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
      theme: {
            extend: {
                  colors: {
                        primary: '#FFC301',
                        title: '#00180F',
                        paragraph: '#00180F',
                  },
                  container: {
                        center: true,
                        padding: '2rem',
                        screens: {
                              sm: '640px',
                              md: '768px',
                              lg: '1024px',
                              xl: '1280px',
                              '2xl': '1440px',
                        },
                  },
            },
      },
      plugins: [],
};
export default config;
