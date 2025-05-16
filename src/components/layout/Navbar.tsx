import React from "react";
import { Link, useLocation } from "react-router-dom";
import DentalQuickLogo from "@/components/DentalQuickLogo";
import { Settings, Mail, Bell } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();

  // Function to determine if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="px-6 py-4 flex justify-between items-center border-b border-dental-dark bg-dental-dark">
      <DentalQuickLogo />
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex space-x-10">
          <NavigationMenuItem>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-dental-gold ${
                isActive("/") || isActive("/home")
                  ? "text-dental-gold"
                  : "text-gray-400"
              }`}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-dental-gold ${
                isActive("/services") ? "text-dental-gold" : "text-gray-400"
              }`}
            >
              Service
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/digitalization"
              className={`text-sm font-medium transition-colors hover:text-dental-gold ${
                isActive("/digitalization")
                  ? "text-dental-gold"
                  : "text-gray-400"
              }`}
            >
              Digitalization
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/work_with_us"
              className={`text-sm font-medium transition-colors hover:text-dental-gold ${
                isActive("/work_with_us") ? "text-dental-gold" : "text-gray-400"
              }`}
            >
              Work with us
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/contacts"
              className={`text-sm font-medium transition-colors hover:text-dental-gold ${
                isActive("/contacts") ? "text-dental-gold" : "text-gray-400"
              }`}
            >
              Contacts
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-5">
        <Link to="/message" className="relative">
          <Mail className="h-6 w-6 text-gray-400 hover:text-dental-gold cursor-pointer" />
          <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-dental-gold text-dental-dark text-xs">
            1
          </span>
        </Link>
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-400 hover:text-dental-gold cursor-pointer" />
          <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-dental-gold text-dental-dark text-xs">
            3
          </span>
        </div>
        <Link to="/settings">
          <Settings className="h-6 w-6 text-gray-400 hover:text-dental-gold cursor-pointer" />
        </Link>
        <Link
          to="/login"
          className="h-10 w-10 rounded-full bg-dental-gold flex items-center justify-center text-dental-dark font-bold"
        >
          T
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
