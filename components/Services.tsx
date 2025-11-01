"use client";

import { motion } from "framer-motion";
import { Plane, Briefcase, Heart, MapPin, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable transportation to and from all major airports. Flight tracking included for peace of mind.",
    features: ["Flight Monitoring", "Meet & Greet", "Luggage Assistance"],
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional service for business meetings, conferences, and executive transportation needs.",
    features: ["Flexible Scheduling", "Corporate Billing", "Confidential Service"],
  },
  {
    icon: Heart,
    title: "Special Events",
    description: "Make your special occasions unforgettable with our premium limousine service.",
    features: ["Weddings", "Proms", "Anniversaries"],
  },
  {
    icon: MapPin,
    title: "City Tours",
    description: "Explore the city in comfort and style with our guided luxury transportation.",
    features: ["Custom Routes", "Flexible Duration", "Local Expertise"],
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "Always On Time",
    description: "We pride ourselves on punctuality. Your time is valuable, and we respect that.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed, insured, and professional chauffeurs for your safety and peace of mind.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 px-4 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Tailored to Your Needs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether it&apos;s business or pleasure, we provide exceptional service for every occasion
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-luxury-gold/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-luxury-gold/20 transition-all">
                  <Icon className="text-luxury-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-luxury-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-luxury-gold/10 via-luxury-gold/5 to-luxury-gold/10 border border-luxury-gold/20 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center font-[family-name:var(--font-playfair)]">
            Why Choose Bob&apos;s Limousine
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                      <Icon className="text-black" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
