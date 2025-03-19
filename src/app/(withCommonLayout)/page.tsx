'use client';
import FAQ from '@/components/pages/home/FAQ';
import HeroSection from '@/components/pages/home/HeroSection';
import HowItWorks from '@/components/pages/home/HowItWork';
import JoinSection from '@/components/pages/home/JoinSection';
import OccasionSlider from '@/components/pages/home/OccasionSlider';
import TestimonialSlider from '@/components/pages/home/Testimonial';
import { useGetCategoriesQuery } from '@/redux/features/website/category/categoryApi';
import React from 'react';

const HomePage = () => {
      const { data } = useGetCategoriesQuery(undefined);
      console.log(data);
      return (
            <div>
                  <HeroSection />
                  <JoinSection />
                  <OccasionSlider />
                  <HowItWorks />
                  <TestimonialSlider />
                  <div></div>
                  <FAQ />
            </div>
      );
};

export default HomePage;
