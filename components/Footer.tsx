"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/images/sparta-logo.png"
                alt="Sparta Limousine"
                className="h-16 w-auto mb-2"
                onError={(e) => {
                  // Fallback to text if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const textFallback = target.nextElementSibling as HTMLElement;
                  if (textFallback) textFallback.style.display = 'block';
                }}
              />
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]" style={{ display: 'none' }}>
                Sparta Limousine
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Family-owned transportation company serving North Jersey for over 50 years. Premium black car service delivering luxury, comfort, and reliability.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/SpartaLimo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-luxury-platinum hover:text-black transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-luxury-platinum hover:text-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-luxury-platinum hover:text-black transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#fleet" className="text-gray-400 hover:text-luxury-platinum transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-luxury-platinum transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-luxury-platinum transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-luxury-platinum transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Airport Transfers</li>
              <li className="text-gray-400">Corporate Travel</li>
              <li className="text-gray-400">Special Events</li>
              <li className="text-gray-400">City Tours</li>
              <li className="text-gray-400">Wedding Transportation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0 text-luxury-platinum" />
                <div>
                  <a href="tel:+18007295466" className="hover:text-luxury-platinum transition-colors">
                    1-800-729-LIMO
                  </a>
                  <p className="text-xs text-gray-500">24/7 Available</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0 text-luxury-platinum" />
                <a href="mailto:info@sparta-limo.com" className="hover:text-luxury-platinum transition-colors">
                  info@sparta-limo.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-luxury-platinum" />
                <span>270 Sparta Avenue, Sparta, NJ 07871</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sparta Limousine Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-luxury-platinum transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-luxury-platinum transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-luxury-platinum transition-colors">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
