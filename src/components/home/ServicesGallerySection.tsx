import React from "react";

const ServiceCategory = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => (
  <div
    className={`${title == "Prosthesis" ? "col-span-3" : "col-span-2"} mb-16`}
  >
    <h3 className="text-dental-gold text-2xl md:text-3xl font-bold mb-8 text-center">
      {title}
    </h3>
    {title === "Prosthesis" ? (
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 relative max-w-4xl mx-auto">
        {/* Top left image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[0]}
            alt={`${title} image 1`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top right image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[1]}
            alt={`${title} image 2`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center circular image */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 z-10">
          <div className="w-full h-full overflow-hidden rounded-full ">
            <img
              src={images[2]}
              alt={`${title} image 3`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom left image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[3]}
            alt={`${title} image 4`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom right image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[4]}
            alt={`${title} image 5`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ) : title === "Digital printing" ? (
      <div className="flex flex-col gap-2 h-full">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`${title} image ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden ${
              title === "Clinical cases - High aesthetics" ? "h-24 md:h-40" : ""
            } rounded-tl-[70px] rounded-br-[70px]`}
          >
            <img
              src={image}
              alt={`${title} image ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    )}
  </div>
);

const ServicesGallerySection = () => {
  const categories = [
    {
      title: "Prosthesis",
      images: [
        "/images/Rectangle 14.png", // Top left - smiling patient
        "/images/Rectangle 15.png", // Top right - dentist working
        "/images/Ellipse 12.png", // Center circle - denture
        "/images/Rectangle 16.png", // Bottom left - patient
        "/images/Rectangle 17.png", // Bottom right - hands with model
      ],
    },
    {
      title: "Digital printing",
      images: [
        "/images/digintal_1.png", // 3D printed dental model (blue/teal)
        "/images/digintal_2.png", // Clear dental aligners
      ],
    },
    {
      title: "Clinical cases - High aesthetics",
      images: [
        "/images/Caso+1+-+1.png", // Before case 1
        "/images/Caso+1+-+2.png", // Before case 2
        "/images/Caso+1+-+3.png", // After smile
      ],
    },
  ];

  const otherServices = [
    "Digitization of conventional models",
    "Support and planning of complex clinical cases",
    "Immediate loads",
    "High-end aesthetics",
    "Digital Flow Training",
    "Digitalization of clinics",
    "Collection and delivery with own vehicles",
    "Milling for other laboratories",
  ];

  // Team member data
  const teamMembers = [
    {
      name: "FABIOLA",
      role: "Coordinator",
      image: "/images/avatar/Ellipse 11.png",
    },
    {
      name: "MACARENA",
      role: "CADCAM Designer and Coordinator",
      image: "/images/avatar/Ellipse 11 (1).png",
    },
    {
      name: "VANYA",
      role: "Ceramist Prosthetist",
      image: "/images/avatar/Ellipse 11 (3).png",
    },
    {
      name: "ELI",
      role: "Ceramist Prosthetist",
      image: "/images/avatar/Ellipse 11 (2).png",
    },
    {
      name: "ALEIX",
      role: "Prosthetist and CAD designer",
      image: "/images/avatar/Ellipse 11 (4).png",
    },
    {
      name: "SÒNIA",
      role: "Prosthetist and CAD designer",
      image: "/images/avatar/Ellipse 11 (5).png",
    },
    {
      name: "KELLY",
      role: "Structure Adjustment Prosthetics",
      image: "/images/avatar/Ellipse 11 (6).png",
    },
    {
      name: "VICTOR",
      role: "Ceramist Prosthetist",
      image: "/images/avatar/Ellipse 11 (7).png",
    },
  ];

  // New team members data from the image
  const additionalTeamMembers = [
    {
      name: "ANNA",
      role: "Prosthetic CAM manufacturing",
      image: "/images/avatar/Ellipse 11 (8).png",
    },
    {
      name: "BLANCA",
      role: "Ceramist prosthetist",
      image: "/images/avatar/Ellipse 11 (9).png",
    },
    {
      name: "PEP",
      role: "Ceramist Prosthetist",
      image: "/images/avatar/image.png",
    },
    {
      name: "ALEX",
      role: "Logistics",
      image: "/images/avatar/image (1).png",
    },
    {
      name: "LEIDY",
      role: "Coordinator",
      image: "/images/avatar/image (2).png",
    },
    {
      name: "JUAN LUIS",
      role: "Head of Administration and HR",
      image: "/images/avatar/image (3).png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-dental-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-20">
          {/* Prosthesis section */}
          <ServiceCategory {...categories[0]} />

          {/* Digital printing section */}
          <ServiceCategory {...categories[1]} />
        </div>

        {/* Clinical cases section (full width) */}
        <ServiceCategory {...categories[2]} />

        {/* Other Services section */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-black via-yellow-300 to-black bg-clip-text text-transparent">
            Other Services
          </h2>
          <div className="p-6 rounded-lg border border-dental-gold/35 bg-[#41350f1f] backdrop-blur-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              {otherServices.slice(0, 4).map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
              {otherServices.slice(4).map((service, index) => (
                <div key={index + 4} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Dental Quick section */}
        <div className="mt-16">
          <h2 className="text-dental-gold text-3xl md:text-4xl font-bold text-center mb-8">
            Dental Quick, digital prosthetics laboratory since 2012
          </h2>
          <div className="border border-dental-gold/40 rounded-lg p-6 md:p-8">
            <div className="text-white space-y-6">
              <p className="leading-relaxed">
                Located in Reus (Tarragona), Dental Quick it's a born author's
                laboratory fruit of the vision of Manuel Buzón, his son Hugo
                Buzón and his friend and partner Guillem Cao, when the three
                joined their efforts and their know-how to create a
                technological and organized laboratory, professionalized in a
                word, that would dignify the profession and have as references
                the quality, the service and the people.
              </p>
              <p className="leading-relaxed">
                A laboratory where people never lose sight of who we work for
                and who we owe ourselves to, where the quality prevail, the
                aesthetics and the sense of detail produce small prosthetic
                crafts, and where we always continue to offer the direct
                treatment and the dialogue with our doctors and clinics that has
                always characterized us. And all this thanks to the fact that
                our team human, a small family in a certain way, has managed to
                capture the essence of Dental Quick, follow it and develop it.
              </p>
            </div>
          </div>
        </div>

        {/* Team Member Profile - Hugo Mailbox */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">
            {/* Left side with image */}
            {/* <div className="relative w-full md:w-96 order-first md:order-last rounded-lb-[200px] rounded-lt-[30px]">
              <div className="h-[92%] max-h-[420px] aspect-[4/5] w-[550px] rounded-bl-[150px] rounded-tl-[15px]  overflow-hidden bg-[#8F5E25] flex flex-row"></div> */}
            <div className="relative w-full md:w-96">
              <div className="h-[92%] max-h-[420px] aspect-[4/5] w-[350px] rounded-br-[150px] rounded-tr-[15px]  overflow-hidden bg-[#8F5E25] flex flex-row">
                <img
                  src="/images/avatar/Hugo_3.png"
                  alt="Hugo Mailbox profile"
                  className="!w-[calc(100% - 20px)] h-full object-cover"
                />
              </div>
              {/* Curved overlay on the right side */}
              <div className="hidden md:block absolute top-0 right-0 h-full w-16 overflow-hidden">
                <div className="h-full w-32 transform translate-x-16 bg-dental-gold rounded-l-full"></div>
              </div>
              {/* Mobile curved overlay at the bottom */}
              <div className="md:hidden absolute bottom-0 left-0 h-12 w-full overflow-hidden">
                <div className="w-full h-24 transform translate-y-12 bg-dental-gold rounded-t-full"></div>
              </div>
            </div>

            {/* Right side with text content */}
            <div className="md:pl-12 md:pb-8 bg-dental-dark w-full">
              <h2 className="text-dental-gold text-3xl md:text-4xl font-bold">
                HUGO MAILBOX
              </h2>
              <h3 className="text-dental-gold text-xl md:text-2xl mt-1 mb-4">
                Managing Director and Head of Operations
              </h3>
              <p className="text-white font-bold uppercase mb-5">
                DIRECTION AND VISION. THE VOICE OF THE CLINICS.
              </p>

              <div className=" text-white">
                <p>
                  At the age of 18 he moved to Barcelona to study, where he
                  discovered the world of prosthetics and at the same time
                  crossed paths with Guillem Cao, a classmate with whom he
                  formed a close friendship due to their shared values.
                </p>
                <p>
                  His nine years of experience in dental clinic management
                  positions make him a perfect connoisseur of the needs of
                  doctors and clinics.
                </p>
                <p>
                  His inner drive and desire to grow led him, along with Ino and
                  Guillem, to dream of a professional and technological
                  laboratory worthy of being visited by doctors: Dental Quick,
                  the first digital laboratory in Tarragona.
                </p>
                <p>
                  Empathetic, enthusiastic, and a great communicator, he
                  embodies Dental Quick's entrepreneurial drive and
                  technological vision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Profile - Guillem Cao */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">
            {/* Right side with text content */}
            <div className="pt-8 md:pt-6 pb-8 bg-dental-dark w-full md:pr-12">
              <h2 className="text-dental-gold text-3xl md:text-4xl font-bold">
                GUILLEM CAO
              </h2>
              <h3 className="text-dental-gold text-xl md:text-2xl mt-1 mb-4">
                Head of Quality and Innovation
              </h3>
              <p className="text-white font-bold uppercase mb-5">
                PASSION FOR AESTHETICS AND THE DIGITAL VANGUARD
              </p>

              <div className=" text-white">
                <p>
                  A classmate of Hugo's when they were studying in Barcelona,
                  their paths would only diverge to gain complementary
                  experiences.
                </p>
                <p>
                  He worked in several laboratories, some of which he even
                  directed. His arrival at Ino Buzón's laboratory was only the
                  prelude to his reunion with Hugo and the birth of Dental
                  Quick.
                </p>
                <p>
                  A great connoisseur of prosthetic technologies and materials,
                  Guillem is the supreme exponent of the art applied to dental
                  prosthetics at Dental Quick. A master ceramist, he works daily
                  to convey his passion for aesthetics, form, light, color, and
                  functionality to our entire team, ensuring that every project
                  that leaves Dental Quick is a masterpiece of prosthetic
                  craftsmanship.
                </p>
              </div>
            </div>

            {/* Right side with image */}
            <div className="relative w-full md:w-96 order-first md:order-last rounded-lb-[200px] rounded-lt-[30px]">
              <div className="h-[90%] max-h-[420px] w-[380px] rounded-bl-[150px] rounded-tl-[15px]  overflow-hidden bg-[#8F5E25] flex flex-row">
                <div></div>
                <img
                  src="/images/avatar/Hugo_2.png"
                  alt="Guillem Cao profile"
                  className="!w-[calc(100% - 20px)] ml-[95px] h-full object-cover "
                />
              </div>

              {/* Mobile curved overlay at the bottom */}
              <div className="md:hidden absolute bottom-0 left-0 h-12 w-full overflow-hidden">
                <div className="w-full h-24 transform translate-y-12 bg-dental-gold rounded-t-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Profile - Ino Mailbox */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row overflow-hidden rounded-lg">
            {/* Left side with image */}
            <div className="relative w-full md:w-96">
              <div className="w-full h-[92%]  overflow-hidden bg-[#8F5E25] rounded-br-[100px]">
                <img
                  src="/images/avatar/Hugo.png"
                  alt="Ino Mailbox profile"
                  className="w-[90%] h-full"
                />
              </div>
              {/* Curved overlay on the right side */}
              <div className="hidden md:block absolute top-0 right-0 h-full w-16 overflow-hidden">
                <div className="h-full w-32 transform translate-x-16 bg-dental-gold rounded-l-full"></div>
              </div>
              {/* Mobile curved overlay at the bottom */}
              <div className="md:hidden absolute bottom-0 left-0 h-12 w-full overflow-hidden">
                <div className="w-full h-24 transform translate-y-12 bg-dental-gold rounded-t-full"></div>
              </div>
            </div>

            {/* Right side with text content */}
            <div className="md:pl-12 md:pb-8 bg-dental-dark w-full">
              <h2 className="text-dental-gold text-3xl md:text-4xl font-bold">
                INO MAILBOX
              </h2>
              <h3 className="text-dental-gold text-xl md:text-2xl mt-1 mb-4">
                Founding partner
              </h3>
              <p className="text-white font-bold uppercase mb-5">
                EXPERIENCE AND PROFESSIONAL AWARENESS
              </p>

              <div className=" text-white">
                <p>
                  A born prosthetist, he knows all the arts of the trade because
                  he has seen it grow. A passionate and staunch defender of the
                  profession, Manuel "Ino" Buzón opened his first laboratory at
                  the age of 22. Since then, the professionalization and
                  dignification of the work of prosthetists have always been his
                  goal and his motto.
                </p>
                <p>
                  He has experienced the development of the sector firsthand,
                  both in the laboratory and in the clinical setting.
                </p>
                <p>
                  He was a founding member of the College of Prosthetists of
                  Catalonia. He has organized courses, conferences, and attended
                  training sessions throughout Europe, researching his
                  profession and always in contact with the best professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-dental-gold text-lg font-bold text-center">
                  {member.name}
                </h3>
                <p className="text-dental-gold text-sm text-center">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Team Grid Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalTeamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden mb-4 bg-[#2c2c2c] ">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover object-center opacity-80 sepia-[0.2]"
                  />
                </div>
                <h3 className="text-dental-gold text-lg font-bold text-center">
                  {member.name}
                </h3>
                <p className="text-dental-gold/80 text-sm text-center">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-start-1 md:col-start-1 col-span-1">
              {/* LEIDY */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden mb-4 bg-[#2c2c2c] ">
                  <img
                    src={additionalTeamMembers[4].image}
                    alt={`${additionalTeamMembers[4].name} profile`}
                    className="w-full h-full object-cover object-center opacity-80 sepia-[0.2]"
                  />
                </div>
                <h3 className="text-dental-gold text-lg font-bold text-center">
                  {additionalTeamMembers[4].name}
                </h3>
                <p className="text-dental-gold/80 text-sm text-center">
                  {additionalTeamMembers[4].role}
                </p>
              </div>
            </div>
            <div className="col-start-2 md:col-start-2 col-span-1">
              {/* JUAN LUIS */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden mb-4 bg-[#2c2c2c]">
                  <img
                    src={additionalTeamMembers[5].image}
                    alt={`${additionalTeamMembers[5].name} profile`}
                    className="w-full h-full object-cover object-center opacity-80 sepia-[0.2]"
                  />
                </div>
                <h3 className="text-dental-gold text-lg font-bold text-center">
                  {additionalTeamMembers[5].name}
                </h3>
                <p className="text-dental-gold/80 text-sm text-center">
                  {additionalTeamMembers[5].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGallerySection;
