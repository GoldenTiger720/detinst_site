import React from "react";
import {
  RefreshCw,
  GraduationCap,
  Headphones,
  Database,
  Handshake,
  Circle,
} from "lucide-react";

const FeatureItem = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 flex items-center justify-center">
      {title === "Trust" ? (
        <img src={imageSrc} alt={title} className="w-18 h-18 object-contain" />
      ) : (
        <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
      )}
    </div>
    <h3 className="text-dental-gold text-xl font-semibold">{title}</h3>
    <p className="text-white/80 max-w-xs mx-auto">{description}</p>
  </div>
);

const TrustFeaturesSection = () => {
  const features = [
    {
      imageSrc: "/images/icons/linux 1.png",
      title: "Adaptable",
      description:
        "Adapted to all types of laboratories and milling centers, regardless of size and activity.",
    },
    {
      imageSrc: "/images/icons/handshake 1.png",
      title: "Trust",
      description:
        "Thousands of dental professionals work with us every day, and they are the best guarantee of our solvency.",
    },
    {
      imageSrc: "/images/icons/data 1.png",
      title: "Import data",
      description:
        "Dump data from your current management program, so you can continue working without any problems.",
    },
    {
      imageSrc: "/images/icons/graduation-cap 1.png",
      title: "Teaching",
      description:
        "Learn how to use Dental Quick in the best way and in the shortest time, with our training courses and training pills.",
    },
    {
      imageSrc: "/images/icons/customer-services 1.png",
      title: "Help and support",
      description:
        "An integral and personalized service, formed by professionals who will solve your doubts and problems instantly.",
    },
    {
      imageSrc: "/images/icons/refresh 1.png",
      title: "Continuous updates",
      description:
        "A software in continuous development, improving and evolving with the dental sector and your laboratory.",
    },
  ];

  return (
    <section className="bg-dental-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeaturesSection;
