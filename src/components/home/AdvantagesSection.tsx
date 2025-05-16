
import React from 'react';
import { Clock, Shield, Target, Award, Zap, Users } from 'lucide-react';

const AdvantageCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-dental-darkGray flex items-center justify-center mb-4 border border-dental-gold/20">
      <Icon className="w-8 h-8 text-dental-gold" />
    </div>
    <h3 className="text-dental-gold font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce administrative work and focus on patient care"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "HIPAA-compliant, encrypted communication"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Improved accuracy in dental restorations"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Better outcomes for patients"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined workflow for all users"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Seamless teamwork between professionals"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-dental-darkGray/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Advantages</h2>
        <div className="w-20 h-1 bg-dental-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-6">
            Experience the benefits of a comprehensive digital platform designed specifically for dental professionals and laboratories. 
            Dental Quick brings together powerful tools to enhance your workflow and improve patient outcomes.
          </p>
          <p className="text-gray-300">
            Our platform is continuously evolving with input from leading professionals in the dental industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
