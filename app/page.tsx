import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <Hero />
      <Fleet />
      <Services />
      <BookingForm />
      <Chatbot />
      <Footer />
    </main>
  );
}
