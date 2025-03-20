import FAQ from '@/components/pages/home/FAQ';
import HeroSection from '@/components/pages/home/HeroSection';
import HowItWorks from '@/components/pages/home/HowItWork';
import JoinSection from '@/components/pages/home/JoinSection';
import OccasionSlider from '@/components/pages/home/OccasionSlider';
import TestimonialSlider from '@/components/pages/home/Testimonial';
import React from 'react';

const HomePage = () => {
      return (
            <div>
                  <HeroSection />
                  <JoinSection />
                  <OccasionSlider />
                  <HowItWorks />
                  <TestimonialSlider />
                  <FAQ />
            </div>
      );
};

export default HomePage;
