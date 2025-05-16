import React from "react";
import { Phone } from "lucide-react";

const ServicesTalkToProsthetists = () => {
  return (
    <section className="px-6 bg-dental-dark relative border-t border-b border-dental-gold/20">
      {/* Gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dental-gold to-transparent"></div>

      <div className="max-w-6xl mx-auto mb-5">
        <div className="flex flex-col items-center py-8">
          <h2 className="text-3xl sm:text-3xl text-center mb-8 relative">
            <span className="bg-gradient-to-r from-dental-gold via-dental-gold/90 to-dental-gold bg-clip-text text-transparent">
              Talk to our prosthetists
            </span>
          </h2>

          <div className="relative cursor-pointer group">
            {/* Outer ring with animation */}
            <div className="absolute inset-0 rounded-full bg-dental-gold/20 animate-ping"></div>

            {/* Main circle */}
            <div className="w-24 h-24 rounded-full bg-dental-darkGray border-2 border-dental-gold/70 flex items-center justify-center relative z-10">
              {/* Middle circle */}
              <div className="w-20 h-20 rounded-full bg-dental-darkGray/80 border border-dental-gold/50 flex items-center justify-center">
                {/* Inner circle with phone icon */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Phone
                    size={28}
                    className="text-dental-dark group-hover:rotate-12 transition-transform duration-300 animate-pulse"
                  />
                </div>
              </div>
            </div>

            {/* Ripple effect rings */}
            <div
              className="absolute inset-0 rounded-full bg-dental-gold/10 animate-ping"
              style={{ animationDuration: "2s", animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute inset-0 rounded-full bg-dental-gold/5 animate-ping"
              style={{ animationDuration: "2.5s", animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Gold line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dental-gold to-transparent"></div>
    </section>
  );
};

export default ServicesTalkToProsthetists;
