"use client";

import { motion } from "framer-motion";
import { Plane, Briefcase, Heart, MapPin, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Newark (EWR) • JFK • LaGuardia • Teterboro • Westchester. Flight tracking and meet & greet included. Our most popular service.",
    features: ["Free Flight Monitoring", "Meet & Greet Service", "Automatic Delay Adjustments", "Luggage Assistance"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    popular: true,
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Elegant transportation for your special day. Bridal parties, guests, and couple transportation with attention to detail.",
    features: ["Decorated Vehicles", "Multiple Trips", "Professional Chauffeurs", "Flexible Scheduling"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    popular: true,
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional service for business meetings, conferences, and executive transportation with account management.",
    features: ["Account Management", "Direct Billing", "Professional Chauffeurs", "Confidential Service"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    icon: Clock,
    title: "Hourly Service",
    description: "$65/hour with 4 hour minimum. Perfect for wine tours, shopping trips, multiple stops, and city tours.",
    features: ["Multiple Stops", "Flexible Schedule", "Wine Tours", "Shopping Trips"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  },
  {
    icon: MapPin,
    title: "Special Events",
    description: "Proms, sweet 16s, anniversaries, concerts, Broadway shows, sporting events, and nights out on the town.",
    features: ["Prom Packages", "Concert Transport", "Broadway Shows", "Sporting Events"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
  },
  {
    icon: Heart,
    title: "Point-to-Point",
    description: "Direct transportation from one location to another. Perfect for medical appointments, visits, and daily errands.",
    features: ["Hospital Appointments", "Doctor Visits", "Family Visits", "Daily Errands"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-luxury-platinum/50 transition-all duration-300 relative"
              >
                {/* Service Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs bg-luxury-platinum text-black font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-luxury-platinum rounded-full flex items-center justify-center">
                      <Icon className="text-black" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-platinum" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
