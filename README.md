# Sparta Limousine Website

Modern luxury black car service website built with Next.js 15, featuring online booking, email notifications, and spam protection.

## ✨ Features

- **Online Booking System** - 24/7 reservation form with real-time validation
- **Email Notifications** - Automated confirmations via Brevo (business & customer)
- **Spam Protection** - Google reCAPTCHA v3 (invisible, bot detection)
- **AI Chatbot** - Intelligent assistant for instant customer support
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Premium Fleet Showcase** - Cadillac XT6, Ford Flex, Lincoln MKT
- **SEO Optimized** - Metadata, structured data, and performance
- **Admin Dashboard** - View all bookings (requires authentication for production)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Email**: Brevo (formerly Sendinblue)
- **Security**: reCAPTCHA v3
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Brevo account (free tier available)
- Google reCAPTCHA v3 account

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bobdlimo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your credentials:
   - `BREVO_API_KEY` - From https://app.brevo.com/settings/keys/api
   - `NOTIFICATION_EMAIL` - Business email for booking notifications
   - `FROM_EMAIL` - Verified sender email in Brevo
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - From https://www.google.com/recaptcha/admin
   - `RECAPTCHA_SECRET_KEY` - Secret key from reCAPTCHA

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open http://localhost:3000

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
/app
  /admin           - Admin dashboard (view bookings)
  /api
    /bookings      - Booking API (GET, POST with validation)
    /chat          - Chatbot API endpoint
  layout.tsx       - Root layout (metadata, fonts, favicon)
  page.tsx         - Home page
  globals.css      - Global styles

/components
  Hero.tsx         - Hero section with navigation
  Fleet.tsx        - Vehicle showcase
  Services.tsx     - Service offerings
  BookingForm.tsx  - Reservation form with reCAPTCHA
  Chatbot.tsx      - AI assistant widget
  Footer.tsx       - Footer with contact info

/public/images     - Logos and vehicle photos
/data             - Bookings storage (gitignored)
```

## 🎯 Key Features

### Booking System

Real-time booking form with:
- Date/time validation
- Vehicle selection (3 premium vehicles)
- Special requests
- reCAPTCHA v3 spam protection
- Dual email confirmations

**API Endpoint**: `POST /api/bookings`
- Validates reCAPTCHA token (score >= 0.5)
- Validates all required fields
- Sends emails via Brevo
- Stores in JSON file
- Returns success/error response

### Email Notifications (Brevo)

Two emails sent per booking:

1. **Business Notification** → `NOTIFICATION_EMAIL`
   - Customer contact details
   - Complete trip information
   - Special requests
   - Booking ID and timestamp

2. **Customer Confirmation** → Customer's email
   - Trip summary with correct date/time
   - Booking reference
   - Contact information
   - Professional branding

### Security Features

- **reCAPTCHA v3**: Invisible bot protection
- **Environment Variables**: All API keys secured
- **Input Validation**: Server-side validation
- **Error Handling**: No stack traces exposed
- **Data Privacy**: Customer data gitignored

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (from `.env.local`)
   - Deploy!

3. **Configure Domain**
   - Add your domain in Vercel settings
   - Update reCAPTCHA domain whitelist

### Environment Variables for Production

Add these in your hosting platform:

```env
BREVO_API_KEY=xkeysib-...
NOTIFICATION_EMAIL=spartalimonj@gmail.com
FROM_EMAIL=dangtd@gmail.com
FROM_NAME=Sparta Limousine
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Ld...
RECAPTCHA_SECRET_KEY=6Ld...
```

### Pre-Deployment Checklist

- [ ] All environment variables set
- [ ] Brevo sender email verified
- [ ] reCAPTCHA domain configured
- [ ] Build succeeds (`npm run build`)
- [ ] Admin dashboard protected
- [ ] Test booking flow
- [ ] Test email delivery

## ⚙️ Configuration

### Update Contact Information

- **Phone**: Update in `Hero.tsx`, `Footer.tsx`, `BookingForm.tsx`
- **Email**: Update in `.env.local` and `Footer.tsx`
- **Address**: Update in `Footer.tsx`

### Update Fleet Information

Edit `Fleet.tsx` to modify:
- Vehicle photos (in `/public/images/fleet/`)
- Specifications
- Features and amenities

### Brevo Configuration

**Domain Verification** (Recommended):
1. Go to https://app.brevo.com/settings/senders
2. Add and verify your domain
3. Update `FROM_EMAIL` in `.env.local`
4. Improves deliverability and branding

### reCAPTCHA Configuration

**Adjust Score Threshold**:
- Location: `app/api/bookings/route.ts:167`
- Default: 0.5 (balanced)
- Lower = more permissive
- Higher = stricter

## 🔒 Security Recommendations

### Before Production

1. **Protect Admin Dashboard**
   - Add NextAuth.js authentication
   - Or use Vercel password protection
   - Current route: `/admin` (unprotected)

2. **Monitor Email Delivery**
   - Check Brevo dashboard regularly
   - Set up bounce/complaint alerts
   - Monitor monthly quota

3. **Review reCAPTCHA Scores**
   - Check Google reCAPTCHA console
   - Adjust threshold if needed
   - Monitor bot detection rates

## 🐛 Troubleshooting

### Emails Not Sending

1. Verify `BREVO_API_KEY` is correct
2. Check `FROM_EMAIL` is verified in Brevo
3. Review server logs for errors
4. Ensure Brevo account is active

### reCAPTCHA Failing

1. Verify domain is registered in Google console
2. Check both site key and secret key
3. Ensure keys match environment (localhost vs production)

### Build Errors

```bash
npm run build
```
Check output for TypeScript or ESLint errors

## 📊 Admin Dashboard

Access at `/admin` to view all bookings.

**⚠️ Important**: Add authentication before production!

Recommended solutions:
- NextAuth.js with password
- Vercel password protection
- Custom middleware with JWT

## 📱 Support

- Architecture details: [CLAUDE.md](./CLAUDE.md)
- Contact: spartalimonj@gmail.com
- Phone: 1-800-729-LIMO

## 📜 License

Proprietary - Sparta Limousine © 2025

---

Built for Sparta Limousine - Serving North Jersey for over 50 years
