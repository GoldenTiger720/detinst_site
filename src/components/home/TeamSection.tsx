
import React from 'react';

const TeamMember = ({ name, role, image }: { name: string, role: string, image: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-dental-gold">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h4 className="text-dental-gold font-medium">{name}</h4>
    <p className="text-gray-400 text-sm">{role}</p>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Michael Brown",
      role: "Founder, DMD",
      image: "/placeholder.svg"
    },
    {
      name: "Emma Wilson",
      role: "Lead Developer",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Advisor",
      image: "/placeholder.svg"
    },
    {
      name: "James Smith",
      role: "Lab Liaison",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Johnson",
      role: "Customer Support",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Lee",
      role: "UX Designer",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. David Kim",
      role: "Prosthodontist",
      image: "/placeholder.svg"
    },
    {
      name: "Jennifer Lopez",
      role: "Marketing Director",
      image: "/placeholder.svg"
    },
    {
      name: "Mark Williams",
      role: "Lab Technician",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Anna Patel",
      role: "Orthodontist",
      image: "/placeholder.svg"
    },
    {
      name: "Thomas Garcia",
      role: "System Administrator",
      image: "/placeholder.svg"
    },
    {
      name: "Susan Miller",
      role: "Training Specialist",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Team</h2>
        <div className="w-20 h-1 bg-dental-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
