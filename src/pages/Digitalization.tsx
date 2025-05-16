
import React from 'react';
import DigitalizationHeroSection from '@/components/digitalization/DigitalizationHeroSection';
import DigitalizationStepsSection from '@/components/digitalization/DigitalizationStepsSection';

const Digitalization = () => {
  return (
    <div className="min-h-screen bg-dental-dark text-white">
      <DigitalizationHeroSection />
      <DigitalizationStepsSection />
      {/* Additional sections will be added here as we build the page */}
    </div>
  );
};

export default Digitalization;
