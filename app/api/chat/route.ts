import { NextRequest, NextResponse } from "next/server";

// This endpoint can be connected to OpenAI or Claude API
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    // Simple keyword-based responses
    // TODO: Replace with actual AI API (OpenAI or Claude)
    const response = getAIResponse(message.toLowerCase());

    return NextResponse.json({
      success: true,
      response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process message" },
      { status: 500 }
    );
  }
}

function getAIResponse(input: string): string {
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
}
