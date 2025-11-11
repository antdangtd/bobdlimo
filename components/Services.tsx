"use client";

import { motion } from "framer-motion";
import { Plane, Briefcase, Heart, MapPin, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Newark (EWR) • JFK • LaGuardia • Teterboro • Westchester. Flight tracking and meet & greet included.",
    features: ["Free Flight Monitoring", "Meet & Greet Service", "Automatic Delay Adjustments"],
  },
  {
    icon: Clock,
    title: "Hourly Service",
    description: "$65/hour with 4 hour minimum. Perfect for events, wine tours, multiple stops, and special occasions.",
    features: ["Multiple Stops", "Flexible Schedule", "Perfect for Events"],
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional service for business meetings, conferences, and executive transportation.",
    features: ["Account Management", "Direct Billing", "Professional Chauffeurs"],
  },
  {
    icon: Heart,
    title: "Special Services",
    description: "Weddings, proms, hospital appointments, and all your important occasions.",
    features: ["Hospital Transport", "Wedding & Events", "Custom Packages"],
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
          <p className="text-luxury-platinum text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Tailored to Your Needs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Serving Sussex County NJ, Morris County NJ, Orange County NY, Northampton PA, and NYC - 50+ years of excellence
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:border-luxury-platinum/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-luxury-platinum/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-luxury-platinum/20 transition-all">
                  <Icon className="text-luxury-platinum" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-luxury-platinum" />
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
          className="bg-gradient-to-r from-luxury-platinum/10 via-luxury-platinum/5 to-luxury-platinum/10 border border-luxury-platinum/20 rounded-lg p-8 lg:p-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center font-[family-name:var(--font-playfair)]">
            Why Choose Sparta Limousine
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luxury-platinum rounded-full flex items-center justify-center">
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
