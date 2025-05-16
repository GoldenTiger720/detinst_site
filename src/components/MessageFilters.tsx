
import React from 'react';
import { Button } from "@/components/ui/button";

interface MessageFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const MessageFilters: React.FC<MessageFiltersProps> = ({ activeFilter, onFilterChange }) => {
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
        All Messages
      </Button>
      <Button 
        className={`px-4 py-2 rounded-md ${
          activeFilter === 'unread' 
            ? 'bg-dental-gold text-dental-dark font-semibold' 
            : 'bg-transparent text-gray-400 hover:bg-dental-darkGray'
        }`}
        onClick={() => onFilterChange('unread')}
      >
        Unread
      </Button>
      <Button 
        className={`px-4 py-2 rounded-md ${
          activeFilter === 'starred' 
            ? 'bg-dental-gold text-dental-dark font-semibold' 
            : 'bg-transparent text-gray-400 hover:bg-dental-darkGray'
        }`}
        onClick={() => onFilterChange('starred')}
      >
        Starred
      </Button>
    </div>
  );
};

export default MessageFilters;
