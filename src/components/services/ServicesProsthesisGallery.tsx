import React from "react";

const ServicesProsthesisGallery = () => {
  // Define gallery items with their images and titles
  const galleryItems = [
    {
      id: 1,
      title: "Metal-ceramic crowns",
      image: "/lovable-uploads/b77f44c1-b741-4063-bf9c-75f20e637183.png",
    },
  ];

  return (
    <section className="py px-6 bg-dental-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Individual gallery items that match the image layout */}
          <div className="border-2 border-dental-gold/30 overflow-hidden">
            <div className="relative group">
              <img
                src="/images/image 1.png"
                alt="Metal-ceramic crowns"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-white text-lg font-medium">
                  Metal-ceramic crowns
                </span>
              </div>
            </div>
          </div>

          <div className="border-2 border-dental-gold/30  overflow-hidden">
            <div className="relative group">
              <img
                src="/images/image 2.png"
                alt="Crown implant"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="border-2 border-dental-gold/30  overflow-hidden">
            <div className="relative group">
              <img
                src="/images/image 3.png"
                alt="Veneers"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="border-2 border-dental-gold/30  overflow-hidden">
            <div className="relative group">
              <img
                src="/images/image 4.png"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="border-2 border-dental-gold/30 rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src="/images/image 5.png"
                alt="Implant abutments"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className=" border-2 border-dental-gold/30 overflow-hidden">
            <div className="relative group">
              <img
                src="/images/image 6.png"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProsthesisGallery;
