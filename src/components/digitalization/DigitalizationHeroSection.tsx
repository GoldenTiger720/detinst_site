import React from "react";

const DigitalizationHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-dental-dark">
      {/* Main content container */}
      <div className="container relative z-10 mx-auto px-6  lg:py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-12">
            <div className="max-w-xl relative">
              {/* Overlapping rectangles in the background */}
              <div className="absolute -top-8 -left-8 w-64 h-40 border border-dental-gold/30 rounded-xl opacity-20"></div>
              <div className="absolute top-12 left-20 w-72 h-48 border border-dental-gold/30 rounded-xl opacity-20"></div>
              <div className="absolute -bottom-4 -right-12 w-56 h-36 border border-dental-gold/30 rounded-xl opacity-20"></div>

              {/* Main heading with gold gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-8 relative z-10">
                <span className="bg-gradient-to-r from-dental-gold via-dental-gold/90 to-dental-gold bg-clip-text text-transparent">
                  Revolutionize your clinic in just 2 months
                </span>
              </h1>

              {/* Subtitle with thin horizontal lines */}
              <div className="relative py-4 mb-6 z-10">
                <p className="text-xl text-white/80 my-4 text-center">
                  - Digitize your clinic -
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image with decorative shapes */}
          <div className="w-full lg:w-1/2 relative">
            {/* Gold blob decorations */}

            {/* Dental clinic chair image with rounded corners */}
            <div className="relative z-10  rounded-3xl overflow-hidden ">
              <img
                src="/images/Group 3.png"
                alt="Modern dental clinic with white and orange dental chair"
                className="w-2/3 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalizationHeroSection;
