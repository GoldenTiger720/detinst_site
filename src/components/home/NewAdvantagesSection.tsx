import React from "react";

const AdvantageItem = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-5">
      <img src={imageSrc} alt={title} className="w-20 h-20 object-contain" />
    </div>
    <h3 className="text-dental-gold text-xl font-medium mb-3">{title}</h3>
    <p className="text-white/80 max-w-xs mx-auto">{description}</p>
  </div>
);

const NewAdvantagesSection = () => {
  return (
    <section className="bg-dental-dark relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 bg-clip-text text-transparent leading-normal py-2">
          Advantages
        </h2>
        <p className="text-white text-xl text-center mb-16">
          A modern software
        </p>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          <AdvantageItem
            imageSrc="/images/icons/graph 1.png"
            title="Productivity"
            description="The power of a large enterprise management application available for all labs."
          />

          <AdvantageItem
            imageSrc="/images/icons/customerservice 1.png"
            title="Communication"
            description="Get closer to your clinics and improve communication with a complete digital flow"
          />

          <AdvantageItem
            imageSrc="/images/icons/internet 1.png"
            title="Flexibility"
            description="Access your data at any time, from everywhere and with all your devices"
          />

          <AdvantageItem
            imageSrc="/images/icons/saving-account 1.png"
            title="Savings"
            description="No initial investment or commitment to stay, pay only for what you use in comfortable monthly installments"
          />

          <AdvantageItem
            imageSrc="/images/icons/balance 1.png"
            title="Without worries"
            description="Comply simply with the current legislation: GDPR, Regulation (UE) 2017/745, ..."
          />

          <AdvantageItem
            imageSrc="/images/icons/security 1.png"
            title="Security"
            description="Your data is always safe, with hourly backups and a team of experts at your disposal."
          />
        </div>
      </div>
    </section>
  );
};

export default NewAdvantagesSection;
