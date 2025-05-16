
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Search, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Sample message data for the conversation list
const contacts = [
  {
    id: 1,
    name: "Thomas Wright",
    initials: "TW",
    message: "I've reviewed the case. I recommend we adjust the distal margin by 0.3mm. I've attached a modified design for your approval.",
    time: "2 days ago",
    unread: false,
    active: true,
  },
  {
    id: 2,
    name: "Jessica Taylor",
    initials: "JT",
    message: "Hi",
    time: "3 mins ago",
    unread: true,
    active: false,
  }
];

// Sample conversation data
const conversations = {
  1: [
    {
      sender: "them",
      message: "Hi Thomas, can you take a look at the prosthodontic plan for patient #4372? I'm especially concerned about the margin fit.",
      time: "10:30 AM"
    },
    {
      sender: "me",
      message: "Good morning Dr. Johnson. I'll review it now and get back to you within an hour with my assessment and recommendations.",
      time: "10:35 AM"
    },
    {
      sender: "me",
      message: "I've reviewed the case. I recommend we adjust the distal margin by 0.3mm. I've attached a modified design for your approval.",
      time: "10:35 AM"
    }
  ],
  2: [
    {
      sender: "them",
      message: "Hi",
      time: "3 mins ago"
    }
  ]
};

const Message = () => {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState(conversations[activeContact.id]);

  const handleContactClick = (contact) => {
    setActiveContact(contact);
    setChatMessages(conversations[contact.id]);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    
    // Create new message object
    const newMessage = {
      sender: "me",
      message: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Update conversations data
    const updatedMessages = [...chatMessages, newMessage];
    conversations[activeContact.id] = updatedMessages;
    
    // Update state
    setChatMessages(updatedMessages);
    setMessageInput('');
    
    // Show toast notification
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully."
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex bg-dental-dark overflow-hidden">
      {/* Left sidebar */}
      <div className="w-full max-w-md border-r border-dental-gold/10 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-dental-gold/10">
          <h1 className="text-3xl font-bold text-dental-gold">Messages</h1>
          <p className="text-gray-400 mt-1">Connect with your colleagues</p>
        </div>
        
        {/* Search */}
        <div className="p-4 relative">
          <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            className="pl-10 bg-transparent border-dental-gold/20 rounded-lg"
            placeholder="Search contacts..."
          />
        </div>
        
        {/* Contacts list */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={`flex items-center p-4 cursor-pointer transition-colors ${
                activeContact.id === contact.id 
                  ? 'bg-dental-darkGray border-l-4 border-l-dental-gold' 
                  : 'hover:bg-dental-darkGray/50'
              }`}
            >
              <Avatar className="h-12 w-12 mr-4">
                <AvatarFallback className="bg-dental-gold text-dental-dark">{contact.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-white truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-400">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{contact.message}</p>
              </div>
              {contact.unread && (
                <div className="ml-2 bg-dental-gold h-6 w-6 rounded-full flex items-center justify-center text-xs text-dental-dark font-semibold">
                  1
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {activeContact ? (
          <>
            {/* Chat header */}
            <div className="p-6 border-b border-dental-gold/10 flex items-center">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarFallback className="bg-dental-gold text-dental-dark">{activeContact.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-white">{activeContact.name}</h2>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] p-4 rounded-lg ${
                      msg.sender === 'me' 
                        ? 'bg-dental-dark text-white' 
                        : 'bg-dental-gold text-dental-dark'
                    }`}
                  >
                    <p className="mb-1">{msg.message}</p>
                    <div className={`text-xs ${msg.sender === 'me' ? 'text-gray-400' : 'text-dental-dark/70'} text-right`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message input */}
            <div className="p-4 border-t border-dental-gold/10 flex">
              <Input
                className="flex-1 bg-dental-darkGray border-dental-gold/20 rounded-lg mr-2"
                placeholder="Type your message ..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-dental-gold hover:bg-dental-darkGold text-dental-dark"
              >
                <Send size={18} />
                Send
              </Button>
            </div>
          </>
        ) : (
          // Empty state when no conversation is selected
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-dental-darkGray rounded-full p-6 mb-4">
              <div className="w-16 h-16 rounded-full bg-dental-gold/20 flex items-center justify-center">
                <Search className="text-dental-gold" size={32} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-dental-gold mb-2">Select a Conversation</h2>
            <p className="text-gray-400 max-w-md">
              Choose a contact from the list to start messaging, or
              initiate a new conversation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
