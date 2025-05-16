
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DentalQuickLogo from '@/components/DentalQuickLogo';
import FeatureList from '@/components/FeatureList';
import LoginForm from '@/components/LoginForm';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dental-dark flex flex-col">
      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-8">
            <DentalQuickLogo />
          </div>
          
          <p className="text-gray-300 mb-8 max-w-md">
            Streamlining collaboration between dental clinics and laboratories
            through secure, direct communication.
          </p>
          
          <div className="w-full max-w-md mb-8">
            <FeatureList />
          </div>
          
          <Button 
            onClick={() => navigate('/home')}
            className="bg-dental-gold hover:bg-dental-darkGold text-dental-dark mt-4 w-fit"
          >
            View Home Page
          </Button>
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <LoginForm />
        </div>
      </main>
      
      <footer className="p-4 text-center text-gray-500 text-xs">
        © 2025 Dental Quick. All rights reserved. | <a href="#" className="hover:text-gray-400">Privacy Policy</a> | <a href="#" className="hover:text-gray-400">Terms of Service</a>
      </footer>
    </div>
  );
};

export default Index;
