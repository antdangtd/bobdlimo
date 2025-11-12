"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/images/fleet/xt6_hero.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/images/sparta-logo.png"
              alt="Sparta Limousine"
              className="h-16 lg:h-28 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-luxury-platinum via-luxury-gold to-luxury-platinum bg-clip-text text-transparent font-[family-name:var(--font-playfair)]">
                  SPARTA
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg font-light tracking-[0.3em] text-luxury-platinum/90 -mt-1">
                LIMOUSINE
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("fleet")} className="text-gray-200 hover:text-luxury-platinum transition-colors">
              Service Areas
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-200 hover:text-luxury-platinum transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("booking")} className="text-gray-200 hover:text-luxury-platinum transition-colors">
              Book Now
            </button>
            <a href="tel:+18007295466" className="flex items-center space-x-2 bg-luxury-platinum text-black px-6 py-2 rounded-md hover:bg-luxury-silver transition-all">
              <Phone size={18} />
              <span className="font-semibold">1-800-729-LIMO</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black backdrop-blur-lg border-t border-luxury-platinum shadow-2xl z-[100]"
          >
            <div className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection("fleet")} className="text-left text-gray-200 hover:text-luxury-platinum transition-colors">
                Service Areas
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-gray-200 hover:text-luxury-platinum transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("booking")} className="text-left text-gray-200 hover:text-luxury-platinum transition-colors">
                Book Now
              </button>
              <a href="tel:+18007295466" className="flex items-center space-x-2 bg-luxury-platinum text-black px-6 py-3 rounded-md hover:bg-luxury-silver transition-all w-full justify-center">
                <Phone size={18} />
                <span className="font-semibold">1-800-729-LIMO</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-0 flex-1 flex items-center px-4 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-luxury-platinum text-sm lg:text-base font-semibold tracking-wider uppercase mb-4">
                Luxury Transportation Service
              </p>
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-playfair)]">
                Premium Rides
                <br />
                <span className="text-luxury-platinum">For Every Occasion</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Professional chauffeur service for all your transportation needs. Airport transfers, weddings, proms,
                corporate travel, special events, and night outs. Serving North Jersey for over 50 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("booking")}
                  className="bg-luxury-platinum text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-luxury-silver transition-all"
                >
                  Book Your Ride
                </button>
                <button
                  onClick={() => scrollToSection("fleet")}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Service Areas
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
            >
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-luxury-platinum">24/7</p>
                <p className="text-gray-400 mt-1">Available</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-luxury-platinum">3</p>
                <p className="text-gray-400 mt-1">Premium Vehicles</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-luxury-platinum">100%</p>
                <p className="text-gray-400 mt-1">Professional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-0 pb-8 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/60 text-center cursor-pointer"
          onClick={() => scrollToSection("fleet")}
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
