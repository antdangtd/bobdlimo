"use client";

import { useState, useEffect } from "react";
import { Calendar, User, Phone, Mail, MapPin, Car, Clock } from "lucide-react";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: string;
  specialRequests?: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings");
      const data = await response.json();

      if (data.success) {
        setBookings(data.bookings.reverse()); // Show newest first
      } else {
        setError("Failed to load bookings");
      }
    } catch (err) {
      setError("Error loading bookings");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 text-lg">Manage your limousine service bookings</p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-400">Total Bookings</p>
              <p className="text-2xl font-bold text-luxury-gold">{bookings.length}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-yellow-400">
                {bookings.filter((b) => b.status === "pending").length}
              </p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-luxury-gold"></div>
            <p className="mt-4 text-gray-400">Loading bookings...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Bookings List */}
        {!loading && !error && bookings.length === 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-400 text-lg">No bookings yet</p>
          </div>
        )}

        {!loading && !error && bookings.length > 0 && (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-luxury-gold/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Main Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{booking.name}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Mail size={18} className="text-luxury-gold" />
                        <a href={`mailto:${booking.email}`} className="hover:text-luxury-gold">
                          {booking.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Phone size={18} className="text-luxury-gold" />
                        <a href={`tel:${booking.phone}`} className="hover:text-luxury-gold">
                          {booking.phone}
                        </a>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="bg-black/50 rounded-lg p-4 space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin size={18} className="text-green-400 mt-1" />
                        <div>
                          <p className="text-xs text-gray-500">Pickup</p>
                          <p className="text-white">{booking.pickup}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin size={18} className="text-red-400 mt-1" />
                        <div>
                          <p className="text-xs text-gray-500">Dropoff</p>
                          <p className="text-white">{booking.dropoff}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={18} className="text-luxury-gold" />
                          <div>
                            <p className="text-xs text-gray-500">Date & Time</p>
                            <p className="text-white">
                              {booking.date} at {booking.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User size={18} className="text-luxury-gold" />
                          <div>
                            <p className="text-xs text-gray-500">Passengers</p>
                            <p className="text-white">{booking.passengers}</p>
                          </div>
                        </div>
                        {booking.vehicle && (
                          <div className="flex items-center space-x-2">
                            <Car size={18} className="text-luxury-gold" />
                            <div>
                              <p className="text-xs text-gray-500">Vehicle</p>
                              <p className="text-white capitalize">{booking.vehicle.replace("-", " ")}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Special Requests */}
                    {booking.specialRequests && (
                      <div className="bg-luxury-gold/10 border border-luxury-gold/30 rounded-lg p-3">
                        <p className="text-xs text-luxury-gold mb-1">Special Requests:</p>
                        <p className="text-gray-300 text-sm">{booking.specialRequests}</p>
                      </div>
                    )}

                    {/* Created At */}
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>Booked on {formatDate(booking.createdAt)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-3">
                    <a
                      href={`mailto:${booking.email}`}
                      className="flex-1 lg:flex-none bg-luxury-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-luxury-darkGold transition-all text-center"
                    >
                      Email Client
                    </a>
                    <a
                      href={`tel:${booking.phone}`}
                      className="flex-1 lg:flex-none bg-white/10 text-white px-6 py-2 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 text-center"
                    >
                      Call Client
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
