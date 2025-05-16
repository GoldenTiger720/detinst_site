
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface MessageCardProps {
  name: string;
  initials: string;
  message: string;
  time: string;
  unread: boolean;
}

const MessageCard: React.FC<MessageCardProps> = ({
  name,
  initials,
  message,
  time,
  unread
}) => {
  // Choose background color based on unread status
  const backgroundColor = unread ? "#D4AF37" : "#1A1A1A";
  const textColor = unread ? "text-white" : "text-gray-400";
  
  return (
    <Card className={`overflow-hidden border-dental-gold/10 ${unread ? 'bg-dental-darkGray border-l-4 border-l-dental-gold' : 'bg-dental-darkGray'} hover:bg-dental-dark/50 transition-colors cursor-pointer`}>
      <div className="p-4 flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarFallback style={{ backgroundColor }}>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium text-white">{name}</h3>
            <span className={`text-xs ${textColor}`}>{time}</span>
          </div>
          <p className={`text-sm ${textColor} line-clamp-1`}>{message}</p>
        </div>
        {unread && (
          <Badge className="bg-dental-gold text-dental-dark ml-2 h-2 w-2 rounded-full p-0" />
        )}
      </div>
    </Card>
  );
};

export default MessageCard;
