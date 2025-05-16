import React from "react";

const ServicesDetailSection = () => {
  return (
    <section className="py-16 px-6 bg-dental-dark">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-dental-gold mb-8">
          Services
        </h2>

        <div className="mb-6">
          <p className="text-xl md:text-2xl">
            <span className="text-dental-gold font-medium">Fixed</span>{" "}
            <span className="text-white">prosthetics - </span>
            <span className="text-dental-gold font-medium"> Digital</span>{" "}
            <span className="text-white">specialists - </span>
            <span className="text-dental-gold font-medium"> High</span>{" "}
            <span className="text-white">aesthetics</span>
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xl md:text-2xl">
            <span className="text-dental-gold font-medium">Zirconium</span> -
            <span className="text-dental-gold font-medium">
              {" "}
              Lithium Disilicate
            </span>{" "}
            -
            <span className="text-dental-gold font-medium">
              {" "}
              Hybrid Ceramic
            </span>{" "}
            -
            <span className="text-dental-gold font-medium">
              {" "}
              Cobalt Chromium
            </span>{" "}
            -
            <span className="text-dental-gold font-medium">
              {" "}
              Advanced Materials
            </span>
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xl md:text-2xl font-medium text-white">
            Quality Control in all phases of production
          </p>
        </div>

        <div>
          <p className="text-lg md:text-xl text-gray-300">
            - We serve all types of production, both digital and analog -
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
