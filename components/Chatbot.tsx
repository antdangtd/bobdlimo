"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response (replace with actual AI API call)
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    // Greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return "Hello! Welcome to Sparta Limousine. We've been serving North Jersey for over 50 years! How can I assist you with your transportation needs today?";
    }

    // Fleet / Vehicles
    if (input.includes("vehicle") || input.includes("car") || input.includes("fleet") || input.includes("cadillac") || input.includes("ford") || input.includes("lincoln")) {
      return "We have 3 premium vehicles:\n\n🚙 Cadillac XT6 (our flagship) - Seats 6, premium leather, heated/cooled seats, Bose sound, panoramic sunroof\n\n🚙 Ford Flex - Seats 6, spacious interior, climate control, Wi-Fi available\n\n🚙 Lincoln MKT - Seats 3, massage seats, perfect for executives\n\nAll vehicles are meticulously maintained and fully insured!";
    }

    // Specific route pricing - JFK
    if (input.includes("jfk")) {
      return "💰 PRICING TO JFK AIRPORT:\n\nFrom Sussex County: ~$300\n\nIncludes:\n✈️ Flight tracking\n✈️ Meet & greet service\n✈️ Complimentary wait time\n✈️ Professional chauffeur\n\n*Rates subject to change. Call 1-800-729-LIMO for exact quote!";
    }

    // Specific route pricing - LaGuardia
    if (input.includes("laguardia") || input.includes("lga")) {
      return "💰 PRICING TO LAGUARDIA AIRPORT:\n\nFrom Sussex County: $250-$275\n\nIncludes:\n✈️ Flight tracking\n✈️ Meet & greet service\n✈️ Complimentary wait time\n✈️ Professional chauffeur\n\n*Rates subject to change. Call 1-800-729-LIMO for exact quote!";
    }

    // Specific route pricing - Newark
    if (input.includes("newark") || input.includes("ewr")) {
      return "💰 PRICING TO NEWARK AIRPORT:\n\nFrom Sussex County:\n• Closer areas: $165\n• Further areas: $180\n\nIncludes:\n✈️ Flight tracking\n✈️ Meet & greet service\n✈️ Complimentary wait time\n✈️ Professional chauffeur\n\n*Rates subject to change. Call 1-800-729-LIMO for exact quote!";
    }

    // NYC/Manhattan pricing
    if ((input.includes("nyc") || input.includes("manhattan") || input.includes("new york city") || input.includes("pier")) && (input.includes("price") || input.includes("cost") || input.includes("how much"))) {
      return "💰 PRICING TO NYC/MANHATTAN:\n\nFrom Sussex County:\n• NYC Piers: $225\n• General Manhattan: $225-275 (varies by location)\n\nIncludes professional chauffeur and luxury vehicle.\n\n*Rates subject to change. Call 1-800-729-LIMO for exact quote!";
    }

    // General Pricing
    if (input.includes("price") || input.includes("cost") || input.includes("rate") || input.includes("how much") || input.includes("hourly")) {
      return "💰 PRICING GUIDE:\n\n⏰ HOURLY SERVICE: $65/hour (4 hour minimum)\n\n✈️ AIRPORTS FROM SUSSEX COUNTY:\n• Newark (EWR): $165-180\n• LaGuardia: $250-275\n• JFK: $300\n\n🏙️ NYC: $225-275\n\n*Subject to change. For exact quote:\n• Fill out our booking form, OR\n• Call us at 1-800-729-LIMO";
    }

    // Airport service
    if (input.includes("airport") || input.includes("ewr") || input.includes("newark") || input.includes("jfk") || input.includes("laguardia") || input.includes("teterboro") || input.includes("westchester")) {
      return "We specialize in airport transfers! We serve:\n✈️ Newark (EWR)\n✈️ JFK International\n✈️ LaGuardia\n✈️ Teterboro\n✈️ Westchester Airport\n\nFREE flight tracking • Complimentary wait time • Meet & greet service • Automatic delay adjustments\n\nBook online or call 1-800-729-LIMO!";
    }

    // Service area / coverage
    if (input.includes("where") || input.includes("area") || input.includes("service") || input.includes("location") || input.includes("sparta") || input.includes("jersey") || input.includes("county") || input.includes("pennsylvania") || input.includes("york")) {
      return "We serve a wide area from our Sparta, NJ base:\n\n📍 NEW JERSEY: Sussex County, Morris County, Bergen, Newark, Jersey City, Hoboken\n📍 NEW YORK: Orange County NY, NYC pickups\n📍 PENNSYLVANIA: Northampton County\n\nWe pick up FROM NYC to these areas and reverse!\n\n✈️ Airports: Newark, JFK, LaGuardia, Teterboro, Westchester\n🏥 Hospital transportation available\n\nOffice: 270 Sparta Avenue, Sparta, NJ 07871";
    }

    // Booking
    if (input.includes("book") || input.includes("reservation") || input.includes("reserve") || input.includes("schedule")) {
      return "Easy booking options:\n\n1️⃣ Fill out the form on this page (takes 2 minutes)\n2️⃣ Call us at 1-800-729-LIMO (1-800-729-5466)\n3️⃣ Email: info@sparta-limo.com\n\nWe're available 24/7 and confirm all reservations within minutes!";
    }

    // Hours / Availability
    if (input.includes("hours") || input.includes("available") || input.includes("open") || input.includes("24/7")) {
      return "We're available 24/7, 365 days a year! Our dispatch team is always ready to assist you, whether it's 3am or 3pm. Book anytime online or call 1-800-729-LIMO!";
    }

    // Corporate / Business
    if (input.includes("corporate") || input.includes("business") || input.includes("company") || input.includes("executive")) {
      return "We specialize in corporate travel! Benefits:\n💼 Dedicated account management\n💼 Direct billing options\n💼 Real-time tracking\n💼 Professional chauffeurs in formal attire\n💼 Flexible scheduling\n\nCall 1-800-729-LIMO to set up a corporate account!";
    }

    // Events / Weddings / Special occasions
    if (input.includes("wedding") || input.includes("event") || input.includes("prom") || input.includes("party") || input.includes("celebration") || input.includes("tour") || input.includes("hospital")) {
      return "We love special occasions! We provide:\n🎉 Wedding transportation\n🎉 Prom & graduation services\n🎉 Wine tours\n🎉 Corporate events\n🎉 Anniversary celebrations\n🏥 Hospital appointments & medical transport\n\n💰 HOURLY SERVICE: $65/hour (4 hour minimum)\nPerfect for multiple stops and events!\n\nCall 1-800-729-LIMO to discuss your needs!";
    }

    // Contact info
    if (input.includes("phone") || input.includes("call") || input.includes("contact") || input.includes("email")) {
      return "📞 Phone: 1-800-729-LIMO (1-800-729-5466)\n📧 Email: info@sparta-limo.com\n📍 Address: 270 Sparta Avenue, Sparta, NJ 07871\n🌐 Available 24/7\n\nWe're always here to help!";
    }

    // About / History
    if (input.includes("about") || input.includes("history") || input.includes("family") || input.includes("owner")) {
      return "Sparta Limousine is a family-owned company serving North Jersey for over 50 years! We're in our second generation of ownership, committed to luxury, reliability, and exceptional service. Our fleet carries $1M insurance coverage and our chauffeurs are professionally trained.";
    }

    // Thanks / Goodbye
    if (input.includes("thank") || input.includes("bye") || input.includes("goodbye")) {
      return "You're welcome! If you need anything else, I'm here 24/7. For immediate assistance, call 1-800-729-LIMO. Have a great day! 🚙";
    }

    // Default response
    return "Great question! I can help with:\n• Our fleet (Cadillac XT6, Ford Flex, Lincoln MKT)\n• Pricing & quotes\n• Airport transfers\n• Service areas\n• Booking reservations\n• Corporate accounts\n• Special events\n\nWhat would you like to know? Or call us at 1-800-729-LIMO!";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-luxury-platinum rounded-full flex items-center justify-center shadow-2xl hover:bg-luxury-silver transition-colors"
      >
        {isOpen ? <X size={28} className="text-black" /> : <MessageCircle size={28} className="text-black" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[80vh] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-luxury-platinum to-luxury-silver p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-luxury-platinum" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Sparta Limo Assistant</h3>
                  <p className="text-xs text-black/70">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-luxury-platinum text-black"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-900 border-t border-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-platinum focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-luxury-platinum rounded-md flex items-center justify-center hover:bg-luxury-silver transition-colors"
                >
                  <Send size={18} className="text-black" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by AI • Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
