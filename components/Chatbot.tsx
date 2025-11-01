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
    // Simple keyword-based responses (can be replaced with AI API)
    if (input.includes("price") || input.includes("cost") || input.includes("rate")) {
      return "Our pricing varies based on distance, time, and vehicle choice. Please fill out our booking form or call us at (123) 456-7890 for a detailed quote!";
    }
    if (input.includes("vehicle") || input.includes("car") || input.includes("fleet")) {
      return "We offer two premium vehicles: a spacious Ford Flex (seats 6) and a luxurious Lincoln MKT (seats 3). Both come with leather interiors and premium amenities!";
    }
    if (input.includes("airport")) {
      return "We provide reliable airport transfers with flight tracking included. We'll monitor your flight and adjust pickup times accordingly. Book through our form above!";
    }
    if (input.includes("book") || input.includes("reservation") || input.includes("reserve")) {
      return "You can book a ride using our online form on this page, or call us directly at (123) 456-7890. We're available 24/7!";
    }
    if (input.includes("hours") || input.includes("available") || input.includes("open")) {
      return "We're available 24/7, 365 days a year! You can book online anytime or call our dispatch line.";
    }
    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return "Hello! How can I assist you with your transportation needs today?";
    }

    return "Thanks for your question! For detailed information, please call us at (123) 456-7890 or fill out the booking form. Our team is ready to help!";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center shadow-2xl hover:bg-luxury-darkGold transition-colors"
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
            <div className="bg-gradient-to-r from-luxury-gold to-luxury-darkGold p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Bob&apos;s Limo Assistant</h3>
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
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-luxury-gold text-black"
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
                  className="flex-1 px-4 py-2 bg-black border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-luxury-darkGold transition-colors"
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
