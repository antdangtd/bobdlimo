"use client";

import { motion } from "framer-motion";
import { MapPin, Plane, Navigation, Clock, Shield } from "lucide-react";

const serviceAreas = [
  {
    region: "New Jersey",
    icon: MapPin,
    coverage: [
      "Sussex County",
      "Morris County",
      "Bergen County",
      "Newark",
      "Jersey City",
      "Hoboken",
      "Parsippany",
      "Morristown",
      "Wayne",
      "Clifton",
    ],
    description: "Comprehensive coverage throughout North Jersey with over 50 years of local expertise.",
    featured: true,
  },
  {
    region: "New York",
    icon: Navigation,
    coverage: [
      "Orange County NY",
      "Manhattan Pickups",
      "NYC Piers",
      "Broadway Shows",
      "JFK Airport",
      "LaGuardia Airport",
      "Westchester Airport",
    ],
    description: "Reliable service to all major NYC destinations, airports, and entertainment venues.",
  },
  {
    region: "Pennsylvania",
    icon: MapPin,
    coverage: [
      "Northampton County",
      "Easton",
      "Bethlehem",
      "Point-to-Point Service",
    ],
    description: "Professional transportation throughout eastern Pennsylvania with flexible scheduling.",
  },
];

const airports = [
  {
    name: "Newark Liberty",
    code: "EWR",
    time: "~45 min from Sussex County",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    popular: true,
  },
  {
    name: "LaGuardia",
    code: "LGA",
    time: "~75 min from Sussex County",
    image: "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?w=800&q=80",
    popular: true,
  },
  {
    name: "JFK International",
    code: "JFK",
    time: "~90 min from Sussex County",
    image: "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?w=800&q=80",
    popular: true,
  },
  {
    name: "Teterboro",
    code: "TEB",
    time: "~50 min from Sussex County",
    image: "https://images.unsplash.com/photo-1581830114239-2a09f82c8457?w=800&q=80",
  },
  {
    name: "Westchester",
    code: "HPN",
    time: "~60 min from Sussex County",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
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

export default function Fleet() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="fleet" className="py-20 lg:py-32 px-4 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-luxury-platinum text-sm font-semibold tracking-wider uppercase mb-4">
            Where We Serve
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Service Areas
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional limousine service throughout New Jersey, New York, and Pennsylvania
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {serviceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 hover:border-luxury-platinum/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-luxury-platinum/10 rounded-full flex items-center justify-center">
                    <Icon className="text-luxury-platinum" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    {area.region}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6">{area.description}</p>

                <div className="space-y-2">
                  {area.coverage.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-luxury-platinum" />
                      <span className="text-gray-300 text-sm">{location}</span>
                    </div>
                  ))}
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
          className="bg-gradient-to-r from-luxury-platinum/10 via-luxury-platinum/5 to-luxury-platinum/10 border border-luxury-platinum/20 rounded-lg p-8 lg:p-12 mb-20"
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

        {/* Airport Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Plane className="text-luxury-platinum" size={32} />
            <h3 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
              Airport Transportation
            </h3>
          </div>

          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Professional airport transfers with flight tracking, meet & greet service, and automatic delay adjustments.
            Serving all major airports in the tri-state area.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {airports.map((airport) => (
              <motion.div
                key={airport.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-luxury-platinum/50 transition-all duration-300"
              >
                {/* Airport Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${airport.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  {airport.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs bg-luxury-platinum text-black font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-5xl font-bold text-luxury-platinum font-[family-name:var(--font-playfair)]">
                      {airport.code}
                    </p>
                  </div>
                </div>

                {/* Airport Info */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{airport.name}</h4>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock size={16} />
                    <p className="text-sm">{airport.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="text-center">
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-luxury-platinum text-black px-12 py-4 rounded-md text-lg font-semibold hover:bg-luxury-silver transition-all shadow-lg hover:shadow-luxury-platinum/20"
            >
              Book Airport Transfer Now
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Contact us for pricing and availability
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
