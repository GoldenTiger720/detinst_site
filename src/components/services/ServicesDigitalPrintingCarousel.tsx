import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesDigitalPrintingCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<any>();

  const digitalPrintingImages = [
    {
      id: 1,
      src: "/images/digintal_2.png",
      alt: "Digital dental model in blue color",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Clear dental aligners",
    },
    {
      id: 3,
      src: "/images/Férula+Michigan.png",
      alt: "Digital dental implant",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Dental veneers",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <section className="py-16 px-6 bg-dental-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img
            src="/images/Digital Printing.png"
            alt="Title"
            className="mb-2 mt-4 w-1/2 h-1/2 max-w-[300px] mx-auto"
          />
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CarouselContent>
              {digitalPrintingImages.map((image) => (
                <CarouselItem key={image.id} className="basis-1/2">
                  <div className="border-2 border-dental-gold/30 rounded-lg overflow-hidden h-64 p-1">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-8 border-dental-gold/60 bg-transparent text-dental-gold hover:bg-dental-gold/10 hover:text-white h-10 w-10" />
            <CarouselNext className="right-2 md:-right-8 border-dental-gold/60 bg-transparent text-dental-gold hover:bg-dental-gold/10 hover:text-white h-10 w-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesDigitalPrintingCarousel;
