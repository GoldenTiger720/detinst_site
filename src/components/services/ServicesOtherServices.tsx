import React from "react";

const ServicesOtherServices = () => {
  const services = [
    {
      id: 1,
      title: "Digitization of conventional models",
    },
    {
      id: 2,
      title: "Support and planning of complex clinical cases",
    },
    {
      id: 3,
      title: "Immediate loads",
    },
    {
      id: 4,
      title: "High-end aesthetics",
    },
    {
      id: 5,
      title: "Digital Flow Training",
    },
    {
      id: 6,
      title: "Digitalization of clinics",
    },
    {
      id: 7,
      title: "Collection and delivery with own vehicles",
    },
    {
      id: 8,
      title: "Milling for other laboratories",
    },
  ];

  return (
    <section className="py-16 px-6 bg-dental-darkGray/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img
            src="/images/Other Services.png"
            alt="Title"
            className="mb-2 mt-4 w-full h-full max-w-[450px] mx-auto"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-4">
                <span className="text-white font-bold">{service.id}</span>
              </div>
              <div className="flex-grow relative bg-dental-darkGray/70 border-l-2 border-r-2 border-dental-gold/30 px-4 py-3">
                <div className="absolute left-0 top-0 bottom-0 w-0 h-0 border-t-[23px] border-t-transparent border-b-[23px] border-b-transparent border-r-[12px] border-r-dental-darkGray/70 -ml-[12px]"></div>
                <div className="absolute right-0 top-0 bottom-0 w-0 h-0 border-t-[23px] border-t-transparent border-b-[23px] border-b-transparent border-l-[12px] border-l-dental-darkGray/70 -mr-[12px]"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <p className="text-white">{service.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOtherServices;
