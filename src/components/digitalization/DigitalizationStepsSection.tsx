import React from "react";

const DigitalizationStepsSection = () => {
  return (
    <section className="w-full bg-dental-dark py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-dental-gold">2M 3D</h2>
          <p className="text-2xl text-dental-gold">
            Digitize your clinic in 4 steps with Dental Quick
          </p>
        </div>

        {/* 4 Steps Grid - Fixed to 2x2 with equal height/width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Step 1 */}
          <div className="relative h-full">
            {/* Number circle */}
            <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-dental-gold flex items-center justify-center z-50">
              <span className="text-2xl font-bold">1</span>
            </div>
            {/* Card content */}
            <div className="absolute bg-black text-dental-gold font-bold text-xl px-8 py-2 rounded-full -top-6 left-2 z-40 border border-dental-gold/50">
              CONSULTORIAY PROYECTO
            </div>
            <div className="border border-dental-gold/50 rounded-2xl p-6 pt-16 h-full relative overflow-hidden rounded-br-[200px]">
              <ul className=" text-white/90">
                <li>1. Initial consultation by Dental Quick</li>
                <li>2. Presentation of technological alternatives</li>
                <li>3. Turnkey project</li>
                <li>4. Project approval and launch</li>
                <li>5. Project management by Dental Quick</li>
              </ul>

              {/* Curved line decoration */}
              <div className="absolute -right-10 bottom-0 w-32 h-32 border-b border-r border-dental-gold/30 rounded-br-[100px]"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative h-full">
            <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-dental-gold flex items-center justify-center z-50">
              <span className="text-2xl font-bold">2</span>
            </div>
            {/* Card content */}
            <div className="absolute bg-black text-dental-gold font-bold text-xl px-8 py-2 rounded-full -top-6 left-2 z-40 border border-dental-gold/50">
              IMPLANTACION TECNOLOGICA
            </div>
            <div className="border border-dental-gold/50 rounded-2xl p-6  pt-16 h-full relative overflow-hidden rounded-br-[200px]">
              <ul className=" text-white/90">
                <li>
                  1. Technological management with the chosen digital partner
                </li>
                <li>2. Implementation of the equipment</li>
                <li>3. Training in the operation of the equipment</li>
              </ul>

              {/* Curved line decoration */}
              <div className="absolute -right-10 bottom-0 w-32 h-32 border-b border-r border-dental-gold/30 rounded-br-[100px]"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative h-full">
            {/* Number circle */}
            <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-dental-gold flex items-center justify-center z-50">
              <span className="text-2xl font-bold">3</span>
            </div>
            {/* Card content */}
            <div className="absolute bg-black text-dental-gold font-bold text-xl px-8 py-2 rounded-full -top-6 left-2 z-40 border border-dental-gold/50">
              FLUJOS DIGITALES
            </div>
            <div className="border border-dental-gold/50 rounded-2xl p-6  pt-16 h-full relative overflow-hidden rounded-br-[200px]">
              <ul className=" text-white/90">
                <li>1. Implementation of digital protocols</li>
                <li>2. Training in digital flow</li>
              </ul>

              {/* Curved line decoration */}
              <div className="absolute -right-10 bottom-0 w-32 h-32 border-b border-r border-dental-gold/30 rounded-br-[100px]"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative h-full">
            {/* Number circle */}
            <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-dental-gold flex items-center justify-center z-50">
              <span className="text-2xl font-bold">4</span>
            </div>
            {/* Card content */}
            <div className="absolute bg-black text-dental-gold font-bold text-xl px-8 py-2 rounded-full -top-6 left-2 z-40 border border-dental-gold/50">
              ACOMPAÑAMIENTO DIGITAL
            </div>
            <div className="border border-dental-gold/50 rounded-2xl p-6 pt-12 h-full relative overflow-hidden rounded-br-[200px]">
              <ul className=" text-white/90">
                <li>1. Start-up</li>
                <li>2. Digital support from Dental Quick</li>
                <li>3. Dental Quick, your digital laboratory</li>
                <li>4. Technical Service provided by the technology partner</li>
              </ul>

              {/* Curved line decoration */}
              <div className="absolute -right-10 bottom-0 w-32 h-32 border-b border-r border-dental-gold/30 rounded-br-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalizationStepsSection;
