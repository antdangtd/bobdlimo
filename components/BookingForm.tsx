"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Car, Send } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
    vehicle: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          pickup: "",
          dropoff: "",
          date: "",
          time: "",
          passengers: "1",
          vehicle: "",
          specialRequests: "",
        });
      } else {
        throw new Error(data.error || "Failed to submit booking");
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-20 lg:py-32 px-4 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-luxury-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Reserve Your Ride
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Book Online 24/7
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll confirm your reservation within minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pickup" className="block text-sm font-semibold text-gray-300 mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Pickup Location *
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="Enter pickup address"
                />
              </div>
              <div>
                <label htmlFor="dropoff" className="block text-sm font-semibold text-gray-300 mb-2">
                  <MapPin className="inline mr-2" size={16} />
                  Dropoff Location *
                </label>
                <input
                  type="text"
                  id="dropoff"
                  name="dropoff"
                  value={formData.dropoff}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  placeholder="Enter dropoff address"
                />
              </div>
            </div>

            {/* Date, Time, Passengers */}
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-300 mb-2">
                  <Calendar className="inline mr-2" size={16} />
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-300 mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="passengers" className="block text-sm font-semibold text-gray-300 mb-2">
                  <Users className="inline mr-2" size={16} />
                  Passengers
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-300 mb-2">
                  <Car className="inline mr-2" size={16} />
                  Vehicle
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="ford-flex">Ford Flex</option>
                  <option value="lincoln-mkt">Lincoln MKT</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-300 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent resize-none"
                placeholder="Let us know if you have any special requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-luxury-gold text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-luxury-darkGold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{isSubmitting ? "Submitting..." : "Request Reservation"}</span>
              <Send size={20} />
            </button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-center"
              >
                <p className="text-green-400 font-semibold">
                  🎉 Reservation request received! We&apos;ll contact you shortly to confirm.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-center"
              >
                <p className="text-red-400 font-semibold">
                  ❌ Error: {errorMessage}. Please try again or call us.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-400"
        >
          <p>
            Prefer to call? Reach us at{" "}
            <a href="tel:+1234567890" className="text-luxury-gold hover:underline font-semibold">
              (123) 456-7890
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
