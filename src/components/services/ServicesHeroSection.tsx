import React from "react";
import { Separator } from "@/components/ui/separator";

const ServicesHeroSection = () => {
  return (
    <section className="py-7 px-6 bg-dental-dark">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#D0AE27] via-[#FFE57E] to-[#D0AE27] bg-clip-text text-transparent">
          Our Services
        </h2>

        <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="text-xl md:text-2xl font-medium bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-40% to-[#F2CC14] bg-clip-text text-transparent">
            Fixed prosthetics
          </span>
          <div className="hidden md:flex w-7 h-7">
            <img src="/images/icons/Vector 3.png" alt="Arrow Right" />
            <img src="/images/icons/Vector 4.png" alt="Arrow Right" />
          </div>
          <span className="text-xl md:text-2xl font-medium bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-40% to-[#F2CC14] bg-clip-text text-transparent ml-4">
            Digital specialists
          </span>

          <div className="hidden md:flex w-7 h-7">
            <img src="/images/icons/Vector 3.png" alt="Arrow Right" />
            <img src="/images/icons/Vector 4.png" alt="Arrow Right" />
          </div>
          <span className="text-xl md:text-2xl font-medium bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] via-40% to-[#F2CC14] bg-clip-text text-transparent ml-4">
            High aesthetics
          </span>
        </div>

        <div className="mb-12">
          <p className="text-xl md:text-2xl text-dental-gold">
            Zirconium - Lithium Disilicate - Hybrid Ceramic - Cobalt Chromium -
            Advanced Materials
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-2xl font-medium mb-2 bg-gradient-to-b from-[#F2CC14] via-[#F2CC14] via-30% to-[#FFFFFF] bg-clip-text text-transparent">
              Quality Control in all phases of production
            </p>
            <Separator className="w-2/5 max-w-full h-0.5 bg-dental-gold" />
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-300">
          - We serve all types of production, both digital and analog -
        </p>
        <img
          src="/images/Title.png"
          alt="Title"
          className="mb-2 mt-16 w-1/2 h-1/2 max-w-[300px] mx-auto"
        />
      </div>
    </section>
  );
};

export default ServicesHeroSection;
