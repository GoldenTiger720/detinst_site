import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative circles - moved to the top to ensure they're behind other content */}
      <div className="absolute top-24 left-1/3 w-[300px] h-[300px] rounded-full border border-dental-gold/10 -translate-x -translate-y z-0"></div>
      <div className="absolute top-40 left-1/5 w-[200px] h-[200px] rounded-full border border-dental-gold/10 translate-x-1/3 translate-y-1/3 z-0"></div>
      <div className="absolute top-10 right-[100px] w-[150px] h-[150px] rounded-full border border-dental-gold/10 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-yellow-200 to-dental-gold bg-clip-text text-transparent">
            Dental Quick
          </span>
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">
            Collaboration
          </span>
        </h1>
        <h4 className="text-xl md:text-2xl text-white font-thin mb-8">
          Connecting dental professionals for seamless communication and
          <p>collaboration between clinics and laboratories.</p>
        </h4>

        {/* Feature cards - changed to horizontal layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            style={{
              backgroundColor: "#D2EBFF1F",
              backdropFilter: "blur(20px)",
            }}
            className="p-6 rounded-lg border border-dental-gold/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-dental-gold/20 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-dental-gold" />
              </div>
              <h3
                className="text-yellow-300 mt-1"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                Manage Appointments
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Schedule and track patient appointments efficiently
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#D2EBFF1F",
              backdropFilter: "blur(20px)",
            }}
            className="p-6 rounded-lg border border-dental-gold/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-dental-gold/20 p-3 rounded-full">
                <img
                  src="/images/icons/message Icon.png"
                  className="w-6 h-6 text-dental-gold"
                />
              </div>
              <h3
                className="text-yellow-300 mt-1"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                Instant Communication
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Connect with colleagues and partners in real-time
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#D2EBFF1F",
              backdropFilter: "blur(20px)",
            }}
            className="p-6 rounded-lg border border-dental-gold/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-dental-gold/20 p-3 rounded-full">
                <img
                  src="/images/icons/dental 1.png"
                  className="w-6 h-6 text-dental-gold"
                />
              </div>
              <h3
                className="text-yellow-300 mt-1"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                Instant Communication
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Provide better care through improved collaboration
            </p>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-dental-gold hover:bg-dental-darkGold text-dental-dark px-8 py-4 h-auto flex items-center gap-2 rounded-lg">
            <span className="">Get Started</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button
            variant="outline"
            className="border-dental-gold text-white hover:bg-dental-gold/10 hover:text-whitepx-8 py-4 h-auto bg-transparent rounded-lg"
          >
            View Tutorial
          </Button>
        </div>

        <div className="relative mb-12 mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 grid grid-cols gap-4 mb-8 md:mb-0">
              <div className="space-y-4">
                <img
                  src="/images/beautiful-girl-sitting-dentist-s-office 1.png"
                  alt="Dental procedure - top left"
                  className="rounded-lg h-56 object-cover"
                />
                <img
                  src="/images/smiling-young-man-sitting-dentist-chair-while-doctor-examining-his-teeth 1.png"
                  alt="Dental procedure - bottom left"
                  className="absolute rounded-lg h-48 w-65 top-10 left-60"
                />
                <img
                  src="/images/woman-patient-dentist 1.png"
                  alt="Dental procedure - right"
                  className="absolute rounded-lg h-48 w-65 top-60 left-40"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-2xl md:text-4xl text-dental-gold font-bold mb-8">
                TECHNOLOGY AND CRAFTSMANSHIP HAND IN HAND
              </h2>
              <ul className=" text-white/90 font-medium text-lg">
                <li>REUS TARRAGONA</li>
                <li>SINCE 2012</li>
                <li>PROSTHETISTS BY TRADE</li>
                <li>DIGITAL QUALITY</li>
                <li>HIGH AESTHETICS</li>
                <li>LATEST GENERATION MATERIALS</li>
                <li>OWN LOGISTICS</li>
                <li>DIRECT DEALING WITH PROSTHETISTS</li>
                <li>DIGITALIZATION of CLINICS</li>
                <li>TRAINING / SUPPORT in DIGITAL FLOW</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Dental Quick section - new section added below the Technology section */}
      <div className="max-w-6xl mx-auto mt-24 relative z-10">
        <div className="rounded-full border border-dental-gold/30 p-10 md:p-12">
          <h2 className="text-3xl text-yellow-400  text-center mb-8 font-semibold">
            About Dental Quick
          </h2>
          <div className="px-20">
            <p className="text-white/90 text-lg mb-6">
              Dental Quick is an innovative solution to the problems of your
              dental laboratory. Developed by experts in security and Web
              applications, along with dental professionals, Dental Quick is a
              powerful platform that moves up to the cloud the management of
              your dental laboratory (generalist, fixed prosthesis,
              orthodontics, etc.) or milling center.
            </p>

            <p className="text-white/90 text-lg mb-6">
              You can work anytime, anywhere, and you will no longer need to
              worry about technical issues such as installing and updating the
              software, backups, or other security issues.
            </p>

            <p className="text-white/90 text-lg">
              We take care of all the necessary tasks so that when you need
              access to your data, our software "just works". With Dental Quick
              you will finally forget about IT problems and actually focus on
              your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
