import React from "react";
const TeamSection = () => {
  return (
    <section className="w-full relative">
      {/* Team Image Container */}
      <div className="relative w-full overflow-hidden rounded-b-[40px]">
        <img
          src="/images/650f9ff6a33ca1240a75da58d0332578390225b3.png"
          alt="Dental Quick Team"
          className="w-full object-cover h-[80%]"
        />

        {/* "Come with us!" Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-yellow-400 text-4xl md:text-6xl font-bold drop-shadow-lg">
            Come with us!
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
