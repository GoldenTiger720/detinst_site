
import React from 'react';
import { Check } from 'lucide-react';

type Feature = {
  text: string;
}

const FeatureItem = ({ text }: Feature) => (
  <div className="flex items-center mb-3">
    <div className="bg-dental-gold rounded-full p-1 mr-3">
      <Check className="h-4 w-4 text-dental-dark" />
    </div>
    <span className="text-white">{text}</span>
  </div>
);

const FeatureList = () => {
  const features = [
    { text: "Direct messaging between doctors and prosthetists" },
    { text: "Customizable dashboard for important announcements" },
    { text: "Support for multi-clinic and multi-role users" },
    { text: "Secure, encrypted data transmission" },
  ];

  return (
    <div className="border border-dental-gold/30 rounded-lg p-6">
      <h2 className="text-dental-gold text-xl mb-4">Key Features</h2>
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature.text} />
      ))}
    </div>
  );
};

export default FeatureList;
