import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-full border border-dental-gold/30 p-10 md:p-12">
          <h2 className="text-3xl text-dental-gold font-bold text-center mb-8">
            Still not convinced?
          </h2>

          <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto">
            With Dental Quick you will not only have a management program, you
            will also have a team of professionals who will help you at any
            times. Whether you are currently working with another management
            program or starting from scratch, we will be by your side all the
            time, advising you from the beginning so that you can get the most
            out of both the software and your laboratory.
          </p>

          <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto">
            Contact us and one of our agents will show you the best way to start
            working with Dental Quick.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
