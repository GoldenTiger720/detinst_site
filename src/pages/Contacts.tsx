
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import ContactCard from '@/components/ContactCard';
import ContactFilters from '@/components/ContactFilters';
import { Separator } from "@/components/ui/separator";

// Sample contact data grouped by role
const contactsData = {
  Doctors: [
    {
      name: "Dr. Michael Chen",
      initials: "DMC",
      role: "Doctor",
      email: "michael.chen@gmail.com",
    },
    {
      name: "Dr. Willicam Jacson",
      initials: "DWJ",
      role: "Doctor",
      email: "william5326@hotmail.com",
    }
  ],
  Prosthetists: [
    {
      name: "Thomas Wright",
      initials: "TW",
      role: "Prosthetist",
      email: "thomas.wright@gmail.com",
    }
  ],
  Assistants: [
    {
      name: "Jessica Taylor",
      initials: "JT",
      role: "Assistant",
      email: "taylor264@gmail.com",
    }
  ],
  Managers: [
    {
      name: "Robert Davis",
      initials: "RD",
      role: "Manager",
      email: "robert.davis@gmail.com",
    }
  ]
};

const Contacts = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-dental-dark text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-dental-gold">Contacts</h1>
            <p className="text-gray-400 mt-1">Connect with dental professionals in your network</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-dental-gold hover:bg-dental-darkGold text-dental-dark font-medium px-4 py-2">
            <Plus className="mr-2" size={18} />
            Add Contact
          </Button>
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            className="pl-10 bg-transparent border-dental-gold/20 rounded-lg py-6 w-full"
            placeholder="Search contacts by name or role..."
          />
        </div>
        
        {/* Contact Filters */}
        <ContactFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        {/* Contacts list */}
        <div className="space-y-12">
          {Object.entries(contactsData).map(([category, contacts]) => (
            <div key={category} className="relative">
              <div className="flex items-center">
                <div className="relative h-[2px] w-1/4 max-w-[200px]">
                  <div className="absolute top-0 left-0 h-full w-full bg-dental-gold"></div>
                </div>
                <h2 className="text-dental-gold text-xl font-medium mx-3">
                  {category} - <span className="opacity-75">({contacts.length})</span>
                </h2>
              </div>
              <div className="ml-0 pl-5 border-l-2 border-dental-gold mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
                  {contacts.map((contact, index) => (
                    <ContactCard
                      key={index}
                      name={contact.name}
                      initials={contact.initials}
                      role={contact.role}
                      email={contact.email}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
