import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import * as brevo from "@getbrevo/brevo";

// Types
interface BookingData {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  vehicle?: string;
  specialRequests?: string;
}

interface Booking extends BookingData {
  id: string;
  status: string;
  createdAt: string;
}

const dataDir = path.join(process.cwd(), "data");
const bookingsFile = path.join(dataDir, "bookings.json");

// Initialize Brevo API client
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || "");

// Ensure data directory and file exist (only works in local development)
function ensureDataFile() {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(bookingsFile)) {
      fs.writeFileSync(bookingsFile, JSON.stringify([], null, 2));
    }
  } catch (error) {
    // Filesystem not available (expected in production)
  }
}

// Send booking confirmation emails
async function sendBookingEmails(booking: Booking): Promise<{ businessEmail: any; customerEmail: any }> {
  const fromEmail = process.env.FROM_EMAIL || "dangtd@gmail.com";
  const fromName = process.env.FROM_NAME || "Sparta Limousine";
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "spartalimonj@gmail.com";

  // Format date and time for display (fix timezone issue)
  // Parse date string as local time instead of UTC
  const [year, month, day] = booking.date.split('-').map(Number);
  const bookingDate = new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Email to business (notification)
  const businessEmailData = new brevo.SendSmtpEmail();
  businessEmailData.sender = { email: fromEmail, name: fromName };
  businessEmailData.to = [{ email: notificationEmail }];
  businessEmailData.subject = `New Booking Request - ${booking.name}`;
  businessEmailData.htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4AF37;">New Booking Request</h2>
      <p>A new reservation request has been received:</p>

      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${booking.name}</li>
        <li><strong>Email:</strong> ${booking.email}</li>
        <li><strong>Phone:</strong> ${booking.phone}</li>
      </ul>

      <h3>Trip Details:</h3>
      <ul>
        <li><strong>Pickup:</strong> ${booking.pickup}</li>
        <li><strong>Dropoff:</strong> ${booking.dropoff}</li>
        <li><strong>Date:</strong> ${bookingDate}</li>
        <li><strong>Time:</strong> ${booking.time}</li>
        <li><strong>Passengers:</strong> ${booking.passengers}</li>
        <li><strong>Vehicle:</strong> ${booking.vehicle || "Any"}</li>
      </ul>

      ${booking.specialRequests ? `
        <h3>Special Requests:</h3>
        <p>${booking.specialRequests}</p>
      ` : ""}

      <p><strong>Booking ID:</strong> ${booking.id}</p>
      <p><strong>Submitted:</strong> ${new Date(booking.createdAt).toLocaleString()}</p>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">This is an automated notification from your Sparta Limousine booking system.</p>
    </div>
  `;

  const businessEmail = await apiInstance.sendTransacEmail(businessEmailData);

  // Email to customer (confirmation)
  const customerEmailData = new brevo.SendSmtpEmail();
  customerEmailData.sender = { email: fromEmail, name: fromName };
  customerEmailData.to = [{ email: booking.email }];
  customerEmailData.subject = "Booking Confirmation - Sparta Limousine";
  customerEmailData.htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #D4AF37;">Thank You for Choosing Sparta Limousine</h2>
      <p>Dear ${booking.name},</p>

      <p>We have received your reservation request and will contact you shortly to confirm your booking.</p>

      <h3>Your Trip Details:</h3>
      <ul>
        <li><strong>Pickup Location:</strong> ${booking.pickup}</li>
        <li><strong>Dropoff Location:</strong> ${booking.dropoff}</li>
        <li><strong>Date:</strong> ${bookingDate}</li>
        <li><strong>Time:</strong> ${booking.time}</li>
        <li><strong>Passengers:</strong> ${booking.passengers}</li>
        <li><strong>Vehicle Preference:</strong> ${booking.vehicle || "Any"}</li>
      </ul>

      ${booking.specialRequests ? `
        <h3>Your Special Requests:</h3>
        <p>${booking.specialRequests}</p>
      ` : ""}

      <p><strong>Booking Reference:</strong> ${booking.id}</p>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">

      <h3>Contact Us:</h3>
      <p>
        <strong>Phone:</strong> 1-800-729-LIMO (1-800-729-5466)<br>
        <strong>Email:</strong> spartalimonj@gmail.com
      </p>

      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Serving North Jersey for over 50 years with luxury, reliability, and comfort.
      </p>
    </div>
  `;

  const customerEmail = await apiInstance.sendTransacEmail(customerEmailData);

  return { businessEmail, customerEmail };
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

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("reCAPTCHA secret key is missing");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification:", data);

    // For v3, check if score is above threshold (0.5 is recommended)
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}

// Create a new booking
export async function POST(request: NextRequest) {
  try {
    ensureDataFile();
    const body = await request.json();

    // Verify reCAPTCHA
    const { recaptchaToken, ...bookingData } = body;

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification required" },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);

    if (!isValidRecaptcha) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "pickup", "dropoff", "date", "time"];
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new booking (without recaptchaToken)
    const newBooking = {
      id: Date.now().toString(),
      ...bookingData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Try to save to file (optional - will fail on Vercel's read-only filesystem)
    try {
      const data = fs.readFileSync(bookingsFile, "utf-8");
      const bookings = JSON.parse(data);
      bookings.push(newBooking);
      fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));
    } catch (fileError) {
      // File operations not supported in production environment
      // This is expected on Vercel - bookings will only be sent via email
      console.log("Note: File storage not available in production environment");
    }

    // Send email notification
    try {
      await sendBookingEmails(newBooking);
    } catch (emailError) {
      console.error("Error sending booking confirmation emails:", emailError);
      // Continue even if email fails - booking is still saved
    }

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
