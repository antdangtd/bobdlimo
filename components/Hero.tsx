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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-4 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <h1 className="text-2xl lg:text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
              Bob&apos;s Limousine
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("fleet")} className="text-gray-200 hover:text-luxury-gold transition-colors">
              Fleet
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-200 hover:text-luxury-gold transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("booking")} className="text-gray-200 hover:text-luxury-gold transition-colors">
              Book Now
            </button>
            <a href="tel:+1234567890" className="flex items-center space-x-2 bg-luxury-gold text-black px-6 py-2 rounded-full hover:bg-luxury-darkGold transition-all">
              <Phone size={18} />
              <span className="font-semibold">Call Us</span>
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
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 mt-4"
          >
            <div className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection("fleet")} className="text-left text-gray-200 hover:text-luxury-gold transition-colors">
                Fleet
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-gray-200 hover:text-luxury-gold transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("booking")} className="text-left text-gray-200 hover:text-luxury-gold transition-colors">
                Book Now
              </button>
              <a href="tel:+1234567890" className="flex items-center space-x-2 bg-luxury-gold text-black px-6 py-3 rounded-full hover:bg-luxury-darkGold transition-all w-full justify-center">
                <Phone size={18} />
                <span className="font-semibold">Call Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center px-4 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-luxury-gold text-sm lg:text-base font-semibold tracking-wider uppercase mb-4">
                Premium Black Car Service
              </p>
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-playfair)]">
                Luxury Transportation
                <br />
                <span className="text-luxury-gold">You Can Trust</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Experience professional chauffeur service in our immaculate Ford Flex and Lincoln MKT.
                Perfect for airport transfers, corporate travel, and special occasions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("booking")}
                  className="bg-luxury-gold text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-luxury-darkGold transition-all transform hover:scale-105"
                >
                  Book Your Ride
                </button>
                <button
                  onClick={() => scrollToSection("fleet")}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Our Fleet
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
                <p className="text-3xl lg:text-4xl font-bold text-luxury-gold">24/7</p>
                <p className="text-gray-400 mt-1">Available</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-luxury-gold">2</p>
                <p className="text-gray-400 mt-1">Luxury Vehicles</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-luxury-gold">100%</p>
                <p className="text-gray-400 mt-1">Professional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
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
