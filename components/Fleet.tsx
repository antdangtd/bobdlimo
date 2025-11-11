"use client";

import { motion } from "framer-motion";
import { Users, Luggage, Wifi, Coffee } from "lucide-react";

const vehicles = [
  {
    name: "Cadillac XT6",
    type: "Premium Luxury SUV",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%2C%20Cadillac%20XT6%20black%2C%20Sept%202025%2001.jpg",
    passengers: "6 Passengers",
    luggage: "6 Large Bags",
    features: ["Premium Leather", "Heated & Cooled Seats", "Bose Sound System", "Panoramic Sunroof"],
    description: "Our flagship vehicle. The Cadillac XT6 represents the pinnacle of luxury and sophistication, offering an unmatched travel experience with cutting-edge amenities and spacious comfort.",
    featured: true,
  },
  {
    name: "Ford Flex",
    type: "Premium SUV",
    image: "https://cdn-ds.com/blogs-media/sites/678/2018/08/30082315/2019-Ford-Flex-Power-and-Gas-Mileage-Ratings_o-1038x375.jpg",
    passengers: "6 Passengers",
    luggage: "5 Large Bags",
    features: ["Leather Interior", "Climate Control", "Premium Sound", "Wi-Fi Available"],
    description: "Spacious and sophisticated, the Ford Flex offers a smooth ride with room for the whole family or group. Perfect for airport transfers and city tours.",
  },
  {
    name: "Lincoln MKT",
    type: "Executive Sedan",
    image: "https://hips.hearstapps.com/hmg-prod/images/2018-lincoln-mkt-jpg-1653456214.jpg?crop=0.611xw:0.459xh;0.301xw,0.306xh&resize=2048:*",
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
          <p className="text-luxury-platinum text-sm font-semibold tracking-wider uppercase mb-4">
            Our Premium Fleet
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Experience True Luxury
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our meticulously maintained vehicles, each offering unparalleled comfort and style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-luxury-platinum/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-luxury-platinum text-sm font-semibold mb-1">{vehicle.type}</p>
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
                    <Users className="text-luxury-platinum" size={24} />
                    <span className="text-gray-300">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Luggage className="text-luxury-platinum" size={24} />
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
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-platinum mt-2" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-8 bg-luxury-platinum/10 border border-luxury-platinum text-luxury-platinum px-6 py-3 rounded-md font-semibold hover:bg-luxury-platinum hover:text-black transition-all">
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
