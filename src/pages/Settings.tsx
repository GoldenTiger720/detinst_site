import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleProfileUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully",
    });
  };

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword && newPassword.length > 0) {
      toast({
        title: "Password Changed",
        description: "Your password has been updated successfully",
      });
      setNewPassword('');
      setConfirmPassword('');
    } else {
      toast({
        title: "Error",
        description: "Passwords don't match or are empty",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You are being logged out...",
    });
    // Add actual logout logic here
  };

  return (
    <div className="min-h-screen bg-dental-dark text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-dental-gold mb-1">Settings</h1>
        <p className="text-gray-400 mb-8">Manage your account settings and preferences</p>
        
        <div className="bg-dental-darkGray rounded-lg p-8 border border-dental-gold/10 mb-8">
          <h2 className="text-xl font-bold text-dental-gold mb-1">Profile Information</h2>
          <p className="text-gray-400 mb-6">Update your personal details</p>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full bg-black border border-dental-gold/20 flex items-center justify-center mb-4">
                <div className="text-center">
                  <Upload className="mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Upload<br />Photo</span>
                </div>
              </div>
              <Button 
                className="bg-dental-gold hover:bg-dental-darkGold text-dental-dark w-36"
                onClick={handleProfileUpdate}
              >
                Update Profile
              </Button>
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  id="name"
                  defaultValue="Dr. Sarah Johnson" 
                  className="bg-black border-dental-gold/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email"
                  defaultValue="sarah.johnson@example.com"
                  className="bg-black border-dental-gold/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-2">Bio</label>
                <Textarea 
                  id="bio" 
                  placeholder="Write a short bio about yourself"
                  className="bg-black border-dental-gold/20 text-white min-h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Appearance Section */}
        <div className="bg-dental-darkGray rounded-lg p-8 border border-dental-gold/10 mb-8">
          <h2 className="text-xl font-bold text-dental-gold mb-1">Appearance</h2>
          <p className="text-gray-400 mb-6">Customize the look and feel of the platform</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Background Color Customization</h3>
              </div>
              <Switch />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="accent-color" className="block font-medium">Accent Color</label>
              <Select defaultValue="dental-gold">
                <SelectTrigger className="bg-black border-dental-gold/20 text-white w-full">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent className="bg-dental-dark border border-dental-gold/20">
                  <SelectItem value="dental-gold">Dental Gold</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Notifications Section */}
        <div className="bg-dental-darkGray rounded-lg p-8 border border-dental-gold/10 mb-8">
          <h2 className="text-xl font-bold text-dental-gold mb-1">Notifications</h2>
          <p className="text-gray-400 mb-6">Manage your notification preferences</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        
        {/* Security Section */}
        <div className="bg-dental-darkGray rounded-lg p-8 border border-dental-gold/10 mt-8">
          <h2 className="text-xl font-bold text-dental-gold mb-1">Security</h2>
          <p className="text-gray-400 mb-6">Manage your account security settings</p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="new-password" className="block text-sm font-medium mb-2">New Password</label>
              <Input 
                id="new-password" 
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-black border-dental-gold/20 text-white"
                placeholder="••••••••••••••"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">Confirm Password</label>
              <Input 
                id="confirm-password" 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-black border-dental-gold/20 text-white"
                placeholder="••••••••••••••"
              />
            </div>
            
            <Button 
              onClick={handlePasswordChange}
              className="w-full bg-dental-gold hover:bg-dental-darkGold text-dental-dark font-medium"
            >
              Change Password
            </Button>
          </div>
        </div>
        
        <div className="flex justify-end mt-8">
          <Button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <LogOut className="mr-2" size={18} />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
