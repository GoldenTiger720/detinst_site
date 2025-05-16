import React from "react";
import {
  RefreshCw,
  Calendar,
  CreditCard,
  Database,
  Camera,
  BarChart3,
} from "lucide-react";

const FeatureCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center mb-6">
    <div className="w-24 h-24 flex items-center justify-center">
      <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
    </div>
    <h3 className="text-dental-gold text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/80 max-w-xs">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      imageSrc: "/images/icons/change-teeth 1.png",
      title: "Works",
      description:
        "Know at all times the situation of the work of your laboratory with our centralized management",
    },
    {
      imageSrc: "/images/icons/schedule 1.png",
      title: "Scheduling",
      description:
        "Organize the work of your technicians and meet your work schedule thanks to our planning options",
    },
    {
      imageSrc: "/images/icons/card 1.png",
      title: "Billing",
      description:
        "Manage your invoices with the flexibility you need, and know at all times the collection situation of your laboratory",
    },
    {
      imageSrc: "/images/icons/database 1.png",
      title: "Storage",
      description:
        "Manage your storage quickly and easily, while maintaining the traceability of the lots used in each work",
    },
    {
      imageSrc: "/images/icons/camera 1.png",
      title: "Media",
      description:
        "Exchange with your customers messages, images, CAD/CAM files and other information about your work",
    },
    {
      imageSrc: "/images/icons/chart 1.png",
      title: "Analysis",
      description:
        "Know at all times the evolution of the most important parameters of your laboratory",
    },
  ];

  return (
    <section className=" px-6 bg-dental-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-dental-gold font-bold mb-4">Features</h2>
          <p className="text-white/90 text-xl">
            The comprehensive management your laboratory needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
