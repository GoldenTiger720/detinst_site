import React from "react";
import HeroSection from "@/components/home/HeroSection";
import NewAdvantagesSection from "@/components/home/NewAdvantagesSection";
import LabNeedsSection from "@/components/home/LabNeedsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import TrustFeaturesSection from "@/components/home/TrustFeaturesSection";
import ServicesDetailSection from "@/components/home/ServicesDetailSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServicesGallerySection from "@/components/home/ServicesGallerySection";

const Home = () => {
  return (
    <div className="min-h-screen bg-dental-dark">
      <main>
        {/* Hero Section (includes About Dental Quick) */}
        <HeroSection />

        {/* New Advantages Section */}
        <NewAdvantagesSection />

        {/* Lab Needs Section */}
        <LabNeedsSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Call to Action Section */}
        <CallToActionSection />

        {/* Trust Features Section */}
        <TrustFeaturesSection />

        {/* Services Detail Section */}
        <ServicesDetailSection />

        {/* Services Gallery Section */}
        <ServicesGallerySection />
      </main>
    </div>
  );
};

export default Home;
