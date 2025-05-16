import React from "react";

const CoreValuesSection = () => {
  return (
    <section className="w-full bg-dental-dark py-2 px-6 border-t border-dental-darkGray">
      <div className="container mx-auto max-w-4xl">
        {/* Well-being of people */}
        <div className="flex items-start gap-5 mb-12">
          <div className="flex-shrink-0 w-[15%] h-[15%] flex items-center justify-center">
            <img
              src="/images/icons/1144629634.png"
              alt="Well-being of people"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-dental-gold text-2xl font-bold mb-2">
              Well-being of people
            </h3>
            <p className="text-white text-base leading-relaxed">
              At Dental Quick, we understand people's well-being as the primary
              and only path to an ecosystem where our people can offer their
              best to face the daily challenge of providing, beyond empty
              rhetoric, maximum Quality and real Service.
            </p>
          </div>
        </div>

        {/* Professional development */}
        <div className="flex items-start gap-5 mb-12">
          <div className="flex-shrink-0 w-[15%] h-[15%] flex items-center justify-center">
            <img
              src="/images/icons/1896771570.png"
              alt="Well-being of people"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-dental-gold text-2xl font-bold mb-2">
              Professional development
            </h3>
            <p className="text-white text-base leading-relaxed">
              To be able to stand out in such a dynamic and technologically
              advanced sector as the Dental Industry and maintain a level of
              excellence, we work tirelessly to develop all members of the
              Laboratory.
            </p>
          </div>
        </div>

        {/* Quality */}
        <div className="flex items-start gap-5 mb-12">
          <div className="flex-shrink-0 w-[15%] h-[15%] flex items-center justify-center">
            <img
              src="/images/icons/1281761756.png"
              alt="Well-being of people"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-dental-gold text-2xl font-bold mb-2">
              Quality
            </h3>
            <p className="text-white text-base leading-relaxed">
              One of our hallmarks and commitments to our clients and their
              patients is built on cutting-edge machinery and software, high-end
              materials, ongoing training, and countless hours developing
              quality improvement systems and process innovations.
            </p>
          </div>
        </div>

        {/* Service */}
        <div className="flex items-start gap-5">
          <div className="flex-shrink-0 w-[15%] h-[15%] flex items-center justify-center">
            <img
              src="/images/icons/Frame 3.png"
              alt="Well-being of people"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-dental-gold text-2xl font-bold mb-2">
              Service
            </h3>
            <p className="text-white text-base leading-relaxed">
              Finally, the spirit of service has always been and is the
              epicenter of daily activity. It is born from the spirit of
              teamwork and the understanding that behind every prosthesis we
              create is not just another case, but a very specific doctor and
              patient who expect the best from us every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
