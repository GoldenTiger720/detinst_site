import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* DQ Logo */}
          <div className="mb-8">
            <img
              src="/images/logo 1.png"
              alt="Dental Quick Logo"
              className="h-16"
            />
          </div>

          {/* Address and Contact Info */}
          <div className="text-center mb-6 space-y-2">
            <p className="text-white">
              Raval de Santa Anna, 40, local. 43201 Reus (Tarragona)
            </p>
            <p className="text-white">
              <a
                href="tel:+34977139246"
                className="hover:text-dental-gold underline"
              >
                +34 977 139246
              </a>{" "}
              -
              <a
                href="mailto:info@dentalquick.cat"
                className="hover:text-dental-gold underline ml-1"
              >
                info@dentalquick.cat
              </a>{" "}
              -
              <a
                href="https://www.dentalquick.cat"
                className="hover:text-dental-gold underline ml-1"
              >
                www.dentalquick.cat
              </a>
            </p>
            <p className="text-white">Health License FMD618CAT</p>
            <p className="text-white">© Dental Quick SL</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-white hover:text-dental-gold">
              <Linkedin size={22} />
            </a>
            <a href="#" className="text-white hover:text-dental-gold">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-white hover:text-dental-gold">
              <Facebook size={22} />
            </a>
            <a href="#" className="text-white hover:text-dental-gold">
              <Youtube size={22} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center space-x-10 text-sm">
            <Link
              to="#"
              className="text-white hover:text-dental-gold underline"
            >
              Legal notice
            </Link>
            <Link
              to="#"
              className="text-white hover:text-dental-gold underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-white hover:text-dental-gold underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
