import React from "react";

const ServicesBrandsSection = () => {
  // Array of brand logos with their names for alt text
  const brands = [
    {
      name: "BIOZERAM",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "VEVI DENTAL",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "hyperDENT",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "exocad",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "straumann",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "Noritake",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "Roland",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "NaberTherm",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "formlabs",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "ivoclar",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "Dentsply Sirona",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "AVINENT",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "Archimedes",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "createch medical",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "ipd",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "3D SYSTEMS",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "HASS",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "VITA",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "anaxDENT",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=80&q=80",
    },
    {
      name: "myo",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=80&q=80",
    },
  ];

  return (
    <section className="py-16 px-6 bg-dental-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          {/* Title with golden styling */}
          <div className="relative py-2 px-12 mb-12">
            <img
              src="/images/Our Brands.png"
              alt="Title"
              className="mb-2 mt-4 w-full h-full max-w-[500px] mx-auto"
            />
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-5xl mx-auto">
            <div className="p-2 rounded flex items-center justify-center h-20">
              <img
                src="/images/1.png"
                alt="Brand Logo"
                className="max-h-24 w-auto object-contain filter brightness-125"
              />
            </div>
            <div className="p-2 rounded flex items-center justify-center h-20">
              <img
                src="/images/2.png"
                alt="Brand Logo"
                className="max-h-24 w-auto object-contain filter brightness-125"
              />
            </div>
            <div className="p-2 rounded flex items-center justify-center h-20">
              <img
                src="/images/3.png"
                alt="Brand Logo"
                className="max-h-24 w-auto object-contain filter brightness-125"
              />
            </div>
            <div className="p-2 rounded flex items-center justify-center h-20">
              <img
                src="/images/4.png"
                alt="Brand Logo"
                className="max-h-24 w-auto object-contain filter brightness-125"
              />
            </div>
            <div className="p-2 rounded flex items-center justify-center h-20">
              <img
                src="/images/5.png"
                alt="Brand Logo"
                className="max-h-24 w-auto object-contain filter brightness-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBrandsSection;
