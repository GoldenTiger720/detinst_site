import React from "react";

const LabNeedsSection = () => {
  return (
    <section className="py-20 px-6 bg-dental-dark relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-full border border-dental-gold/40 px-8 py-16 relative overflow-hidden">
          <h2 className="text-2xl md:text-3xl  text-yellow-400 text-center mb-8">
            Everything your lab needs in a single program
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-white/90 text-lg">
              Dental Quick is much more than a dental laboratory management
              software. It is an integral platform that will allow you to manage
              all aspects of your day to day in a simple and centralized way.
            </p>

            <p className="text-white/90 text-lg">
              You will not need any other management program. With Dental Quick
              you can control and plan your work, billing, managing the storage,
              interacting with your clinics, etc. All of this easily and from
              the same place. Thanks to our comprehensive vision, you will
              substantially improve the management of your laboratory, which
              will increase your productivity and profits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabNeedsSection;
