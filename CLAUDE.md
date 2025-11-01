# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern luxury black car service website for **Bob's Limousine Service** built with Next.js 15, TypeScript, and Tailwind CSS. Features online booking, AI chatbot, and admin dashboard for managing reservations.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Date utilities**: date-fns 4.1
- **Fonts**: Inter (sans-serif) and Playfair Display (serif) from Google Fonts

## Project Structure

```
/app
  /admin             - Admin dashboard page
  /api
    /bookings        - Booking CRUD operations
    /chat            - Chatbot API endpoint
  layout.tsx         - Root layout with metadata
  page.tsx           - Home page composition
  globals.css        - Global styles and Tailwind directives

/components
  Hero.tsx           - Hero section with navigation
  Fleet.tsx          - Vehicle showcase
  Services.tsx       - Service offerings
  BookingForm.tsx    - Reservation form
  Chatbot.tsx        - AI chatbot widget
  Footer.tsx         - Footer with contact info

/data
  bookings.json      - JSON file-based booking storage (auto-generated)
```

## Code Architecture

### App Router Pattern

Uses Next.js App Router with React Server Components by default. Client components explicitly marked with `"use client"` directive (BookingForm, Chatbot).

**Root Layout** (app/layout.tsx:10-27)
- Sets dark mode class on `<html>` element
- Defines site-wide metadata for SEO
- Loads Google Fonts (Inter, Playfair Display)

**Home Page** (app/page.tsx:8-19)
- Server component that composes all sections
- Single-page application structure
- Dark gradient background theme

### API Routes

**Bookings API** (app/api/bookings/route.ts)
- `GET /api/bookings` - Fetch all bookings (for admin dashboard)
- `POST /api/bookings` - Create new booking with validation
- File-based storage in `data/bookings.json`
- Auto-creates data directory if missing
- Returns structured JSON responses with success/error states

Key pattern: Ensures data file exists before operations (lines 9-16)

**Chat API** (app/api/chat/route.ts)
- `POST /api/chat` - Handle chatbot messages
- Currently uses keyword-based responses
- Ready for OpenAI/Claude API integration (see TODO comments)

### Component Architecture

All components follow this pattern:
- Use Framer Motion for animations with stagger effects
- Lucide React icons for consistent iconography
- Responsive design with Tailwind breakpoints (sm, md, lg, xl)
- Dark theme with luxury gold accent colors

**Client Components** (components/BookingForm.tsx, components/Chatbot.tsx)
- Use React hooks (useState) for form state and interactions
- Fetch API calls to backend routes
- Form validation and error handling with user feedback
- Loading states with visual indicators

**Server Components** (components/Hero.tsx, components/Fleet.tsx, components/Services.tsx, components/Footer.tsx)
- No interactivity, pure presentational
- Can be pre-rendered at build time

### Styling System

**Tailwind Configuration** (tailwind.config.ts:10-28)

Custom color palette defined in theme extension:
```typescript
luxury: {
  gold: "#D4AF37",      // Primary accent
  darkGold: "#B8941F",  // Hover states
  cream: "#F5F5DC",     // Secondary accent
  charcoal: "#1C1C1E",  // Dark backgrounds
  slate: "#2C2C2E",     // Card backgrounds
}
```

**Design Patterns:**
- Utility-first approach with Tailwind classes
- Dark theme with gradient backgrounds
- Consistent spacing scale (p-4, p-8, p-12, etc.)
- Responsive grid layouts with auto-fit columns
- Glass morphism effects (backdrop-blur) for cards

### Data Flow

**Booking Submission:**
1. User fills form in BookingForm component
2. Client-side validation on submit
3. POST request to `/api/bookings`
4. Server validates, generates ID, saves to `bookings.json`
5. Returns success/error response
6. Client updates UI with confirmation message

**Admin Dashboard:**
1. Admin page fetches GET `/api/bookings`
2. Displays all bookings in table format
3. Shows status, contact info, and trip details

### TypeScript Patterns

- Strict type checking enabled (tsconfig.json)
- Type-safe API responses with NextResponse
- Component props typed with TypeScript interfaces
- Form data typed with state interfaces

## Key Features Implementation

### Online Booking System
- Real-time form validation
- Date/time picker integration
- Vehicle selection dropdown
- Special requests textarea
- Success/error messaging with animations

### AI Chatbot
- Fixed position widget (bottom-right corner)
- Expandable/collapsible interface
- Message history with user/bot distinction
- Typing indicators during responses
- Currently keyword-based (ready for LLM integration)

### Admin Dashboard (app/admin/page.tsx)
- Unprotected route (add authentication before production)
- Displays all bookings from JSON storage
- Sortable columns with booking details
- Status indicators (pending, confirmed, completed)

## Future Integration Points

### Database Migration
Replace file-based storage with:
- **Prisma + PostgreSQL**: For relational data with type safety
- **MongoDB**: For document-based flexible schema
- Update API routes to use ORM/database client

### AI Integration
Replace keyword responses in `/app/api/chat/route.ts` with:
- **OpenAI GPT-4**: Use `OPENAI_API_KEY` environment variable
- **Anthropic Claude**: Use `ANTHROPIC_API_KEY` environment variable

### Email Notifications
Add to booking creation in `/app/api/bookings/route.ts:70-71`:
- **Resend**: Modern email API for transactional emails
- **SendGrid/Mailgun**: Alternative email services

### Authentication
Protect `/admin` route with:
- NextAuth.js for authentication
- Middleware to check auth state
- Role-based access control

## Business Context

Bob's Limousine Service operates Ford Flex and Lincoln MKT vehicles for:
- Airport transfers (primary service)
- Corporate travel and executive transportation
- Special events and occasions
- Wine tours and regional trips

When updating content, maintain the luxury aesthetic and professional tone while emphasizing reliability and comfort.
