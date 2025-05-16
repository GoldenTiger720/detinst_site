import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface ContactCardProps {
  name: string;
  initials: string;
  role: string;
  email: string;
  backgroundColor?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  initials,
  role,
  email,
  backgroundColor = "#D4AF37",
}) => {
  return (
    <Card className="overflow-hidden border-dental-gold/10 bg-dental-darkGray">
      <div className="h-12 bg-black"></div>
      <div className="px-4 pb-4 pt-10 relative">
        <div className="absolute -top-8 left-4">
          <Avatar className="h-16 w-16 border-2 border-dental-dark">
            <AvatarFallback style={{ backgroundColor }}>
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="mb-3">
          <h3 className="font-medium text-white text-lg">{name}</h3>
          <Badge
            variant="outline"
            className="bg-transparent border-dental-gold/50 text-dental-gold mt-1"
          >
            {role}
          </Badge>
        </div>
        <p className="text-gray-400 text-sm mb-4">{email}</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 border-dental-gold/20 hover:bg-dental-gold/10 text-dental-gold"
          >
            <Mail size={18} className="mr-2" /> Message
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-dental-gold/20 hover:bg-dental-gold/10 text-dental-gold"
          >
            <Phone size={18} className="mr-2" /> Call
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
