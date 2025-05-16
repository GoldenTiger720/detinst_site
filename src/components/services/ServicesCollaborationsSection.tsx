import React from "react";

const ServicesCollaborationsSection = () => {
  // Array of collaboration partners with their logos
  const collaborations = [
    {
      name: "International Team for Implantology",
      logo: "/lovable-uploads/dd8193d9-2ad1-4f85-9eb5-bd26aa923a38.png",
      logoAlt: "ITI - International Team for Implantology logo",
    },
    {
      name: "COPDEC",
      logo: "/lovable-uploads/dd8193d9-2ad1-4f85-9eb5-bd26aa923a38.png",
      logoAlt: "COPDEC logo",
    },
    {
      name: "Educapractic",
      logo: "/lovable-uploads/dd8193d9-2ad1-4f85-9eb5-bd26aa923a38.png",
      logoAlt: "Educapractic logo",
    },
  ];

  return (
    <section className="px-6 bg-dental-dark border-b border-dental-gold/20">
      {/* Gold line at top */}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          {/* Title with golden styling */}
          <div className="relative py-2 px-12 mb-16">
            <img
              src="/images/Collaborations.png"
              alt="Title"
              className="mb-2 mt-4 w-full h-full max-w-[500px] mx-auto"
            />
          </div>

          {/* Collaborations grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded flex items-center justify-center h-32"
              >
                <img
                  src={collab.logo}
                  alt={collab.logoAlt}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-dental-gold to-transparent"></div>
    </section>
  );
};

export default ServicesCollaborationsSection;
