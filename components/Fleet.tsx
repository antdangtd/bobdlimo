"use client";

import { motion } from "framer-motion";
import { Users, Luggage, Wifi, Coffee } from "lucide-react";

const vehicles = [
  {
    name: "Ford Flex",
    type: "Premium SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2942&auto=format&fit=crop",
    passengers: "6 Passengers",
    luggage: "5 Large Bags",
    features: ["Leather Interior", "Climate Control", "Premium Sound", "Wi-Fi Available"],
    description: "Spacious and sophisticated, the Ford Flex offers a smooth ride with room for the whole family or group. Perfect for airport transfers and city tours.",
  },
  {
    name: "Lincoln MKT",
    type: "Executive Sedan",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2940&auto=format&fit=crop",
    passengers: "3 Passengers",
    luggage: "3 Large Bags",
    features: ["Massage Seats", "Panoramic Roof", "Premium Audio", "Business Amenities"],
    description: "Ultimate luxury and comfort. The Lincoln MKT delivers a first-class experience for executives and special occasions.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 lg:py-32 px-4 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Our Premium Fleet
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Experience True Luxury
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our meticulously maintained vehicles, each offering unparalleled comfort and style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-luxury-gold/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-luxury-gold text-sm font-semibold mb-1">{vehicle.type}</p>
                  <h3 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    {vehicle.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-gray-300 mb-6">{vehicle.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-800">
                  <div className="flex items-center space-x-3">
                    <Users className="text-luxury-gold" size={24} />
                    <span className="text-gray-300">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Luggage className="text-luxury-gold" size={24} />
                    <span className="text-gray-300">{vehicle.luggage}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Premium Features
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-8 bg-luxury-gold/10 border border-luxury-gold text-luxury-gold px-6 py-3 rounded-full font-semibold hover:bg-luxury-gold hover:text-black transition-all">
                  Book This Vehicle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
