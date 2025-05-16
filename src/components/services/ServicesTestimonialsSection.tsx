
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ServicesTestimonialsSection = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-dental-gold text-3xl md:text-4xl font-bold text-center mb-4">
          And not because we say so...
        </h2>
        <h3 className="text-white text-xl md:text-2xl text-center mb-12">
          Testimonials from our colleagues
        </h3>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Avatar className="w-64 h-64 mx-auto">
              <AvatarImage src="/lovable-uploads/cc6d219a-999a-43c0-8bef-558d50e8d0a4.png" alt="Anna, CAM Specialist" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="md:w-2/3">
            <h4 className="text-dental-gold text-2xl font-bold mb-1">ANNA</h4>
            <p className="text-dental-gold font-medium mb-4">CAM Specialist</p>
            
            <div className="text-white space-y-4">
              <p>"There's a very close, family-like atmosphere. Although there are quite a few of us now, there's good communication and channels for discussing things directly and frankly."</p>
              <p>On the other hand, I like to work with the same level of rigor and perfectionism that we all set for ourselves in all tasks and jobs. That's how we can deliver quality and good service.</p>
              <p>"Furthermore, there is never a shortage of incentives here to continue evolving."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonialsSection;
