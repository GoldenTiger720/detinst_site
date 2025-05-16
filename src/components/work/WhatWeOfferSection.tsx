
import React from 'react';

const WhatWeOfferSection = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="border-t border-dental-gold w-full"></div>
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-dental-gold text-3xl md:text-4xl font-bold text-center mb-10">
          What do we offer you? Our commitment to you.
        </h2>
        
        <ul className="text-white space-y-5 list-disc pl-6 max-w-3xl mx-auto">
          <li>Good work environment and an environment of respectful relationships.</li>
          <li>Culture of effort and high demands.</li>
          <li>Well-organized processes, professionalism, and a clear focus on quality.</li>
          <li>Cutting-edge technology and high-quality materials.</li>
          <li>Training Plan, Career Plans, and great opportunities for growth.</li>
          <li>Remuneration above the market average and normalized by scales.</li>
          <li>Very attractive schedule to allow you better work-life balance.</li>
          <li>Parking for colleagues traveling from afar.</li>
          <li>Free refreshments.</li>
          <li>Scrupulous compliance with labor relations within a framework of ethics and equity.</li>
        </ul>
      </div>
      <div className="border-b border-dental-gold w-full"></div>
    </section>
  );
};

export default WhatWeOfferSection;
