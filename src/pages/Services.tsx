import React from "react";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesProsthesisGallery from "@/components/services/ServicesProsthesisGallery";
import ServicesDigitalPrintingCarousel from "@/components/services/ServicesDigitalPrintingCarousel";
import ServicesClinicalCasesCarousel from "@/components/services/ServicesClinicalCasesCarousel";
import ServicesOtherServices from "@/components/services/ServicesOtherServices";
import ServicesTestimonialsSection from "@/components/services/ServicesTestimonialsSection";
import WhatWeOfferSection from "@/components/work/WhatWeOfferSection";
import ServicesTalkToProsthetists from "@/components/services/ServicesTalkToProsthetists";
import ServicesBrandsSection from "@/components/services/ServicesBrandsSection";
import ServicesCollaborationsSection from "@/components/services/ServicesCollaborationsSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-dental-dark text-white">
      <ServicesHeroSection />
      <ServicesProsthesisGallery />
      <ServicesDigitalPrintingCarousel />
      <ServicesClinicalCasesCarousel />
      <ServicesOtherServices />
      <ServicesTalkToProsthetists />
      <ServicesBrandsSection />
      <ServicesCollaborationsSection />
    </div>
  );
};

export default Services;
