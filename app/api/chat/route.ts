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
  // Simple keyword matching - replace with AI API
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
}
