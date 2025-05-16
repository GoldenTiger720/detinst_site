
import React from 'react';
import { Button } from "@/components/ui/button";

interface ContactFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ContactFilters: React.FC<ContactFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex gap-2 mb-6">
      <Button 
        className={`px-4 py-2 rounded-md ${
          activeFilter === 'all' 
            ? 'bg-dental-gold text-dental-dark font-semibold' 
            : 'bg-transparent text-gray-400 hover:bg-dental-darkGray'
        }`}
        onClick={() => onFilterChange('all')}
      >
        All Contacts
      </Button>
      <Button 
        className={`px-4 py-2 rounded-md ${
          activeFilter === 'favorites' 
            ? 'bg-dental-gold text-dental-dark font-semibold' 
            : 'bg-transparent text-gray-400 hover:bg-dental-darkGray'
        }`}
        onClick={() => onFilterChange('favorites')}
      >
        Favorites
      </Button>
      <Button 
        className={`px-4 py-2 rounded-md ${
          activeFilter === 'recent' 
            ? 'bg-dental-gold text-dental-dark font-semibold' 
            : 'bg-transparent text-gray-400 hover:bg-dental-darkGray'
        }`}
        onClick={() => onFilterChange('recent')}
      >
        Recent
      </Button>
    </div>
  );
};

export default ContactFilters;
