
import React from 'react';
import DentalQuickLogo from '@/components/DentalQuickLogo';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dental-darkGray pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="md:w-1/3">
            <DentalQuickLogo />
            <p className="text-gray-400 mt-4">
              Transforming dental collaboration with innovative digital solutions 
              for clinics and laboratories worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-dental-gold font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-dental-gold font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-dental-gold">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-dental-gold font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">1234 Dental Way</li>
                <li className="text-gray-400">San Francisco, CA 94107</li>
                <li className="text-gray-400">info@dentalquick.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* New Footer Section Based on Image */}
        <div className="border-t border-dental-gold/10 pt-6">
          <div className="flex flex-col items-center text-center">
            {/* DQ Logo */}
            <div className="mb-4">
              <img src="/lovable-uploads/4fbda507-8b95-4e13-8ec8-664b1004df35.png" alt="Dental Quick Logo" className="h-14" />
            </div>
            
            {/* Address and Contact Info */}
            <div className="text-gray-400 text-sm space-y-1 mb-4">
              <p>Raval de Santa Anna, 40, local. 43201 Reus (Tarragona)</p>
              <p>
                <a href="tel:+34977139246" className="hover:text-dental-gold">+34 977 139246</a> - 
                <a href="mailto:info@dentalquick.cat" className="hover:text-dental-gold ml-1">info@dentalquick.cat</a> - 
                <a href="https://www.dentalquick.cat" className="hover:text-dental-gold ml-1">www.dentalquick.cat</a>
              </p>
              <p>Health License FMD618CAT</p>
              <p>© Dental Quick SL</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-white hover:text-dental-gold">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-white hover:text-dental-gold">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-white hover:text-dental-gold">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-white hover:text-dental-gold">
                <Youtube size={22} />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-dental-gold">Legal notice</a>
              <a href="#" className="text-gray-400 hover:text-dental-gold">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-dental-gold">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
