import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const bookingsFile = path.join(dataDir, "bookings.json");

// Ensure data directory and file exist
function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(bookingsFile)) {
    fs.writeFileSync(bookingsFile, JSON.stringify([], null, 2));
  }
}

// Get all bookings
export async function GET() {
  try {
    ensureDataFile();
    const data = fs.readFileSync(bookingsFile, "utf-8");
    const bookings = JSON.parse(data);

    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    console.error("Error reading bookings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

// Create a new booking
export async function POST(request: NextRequest) {
  try {
    ensureDataFile();
    const body = await request.json();

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "pickup", "dropoff", "date", "time"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Read existing bookings
    const data = fs.readFileSync(bookingsFile, "utf-8");
    const bookings = JSON.parse(data);

    // Create new booking
    const newBooking = {
      id: Date.now().toString(),
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Add to bookings
    bookings.push(newBooking);

    // Save to file
    fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));

    // TODO: Send email notification here
    // await sendBookingConfirmation(newBooking);

    return NextResponse.json({
      success: true,
      booking: newBooking,
      message: "Booking created successfully! We'll contact you shortly to confirm."
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
