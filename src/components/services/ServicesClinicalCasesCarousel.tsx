import React from "react";

const ServicesClinicalCasesCarousel = () => {
  const clinicalCasesImages = [
    {
      id: 1,
      src: "/images/Caso+1+-+1.png",
      alt: "Before dental treatment - patient case 1",
    },
    {
      id: 2,
      src: "/images/Caso+1+-+2.png",
      alt: "After dental veneers - patient case 1",
    },
    {
      id: 3,
      src: "/images/Caso+1+-+3.png",
      alt: "Before dental restoration - patient case 2",
    },
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 relative">
            <img
              src="/images/Clinical cases - High aesthetics.png"
              alt="Title"
              className="mb-2 mt-4 w-full h-full max-w-[700px] mx-auto"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="overflow-hidden h-44 p-1 transition-transform duration-300 hover:scale-105 ">
            <img
              src="/images/Rectangle 40.png"
              alt="Before dental treatment - patient case 1"
              className="w-full h-full"
            />
          </div>
          <div className="overflow-hidden h-44 p-1 transition-transform duration-300 hover:scale-105">
            <img
              src="/images/Rectangle 41.png"
              alt="Before dental treatment - patient case 1"
              className="w-full h-full"
            />
          </div>
          <div className=" overflow-hidden h-44 p-1 transition-transform duration-300 hover:scale-105">
            <img
              src="/images/Rectangle 42.png"
              alt="Before dental treatment - patient case 1"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesClinicalCasesCarousel;
