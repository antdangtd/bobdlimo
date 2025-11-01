# Bob's Limousine Service Website

A modern, luxury black car service website built with Next.js 14, featuring online booking, AI chatbot, and admin dashboard.

## 🚗 Features

- **Modern, Responsive Design**: Beautiful UI with classic luxury car service aesthetic
- **Online Booking System**: Real-time reservation form with validation
- **AI Chatbot**: Interactive chatbot for customer inquiries (ready for OpenAI/Claude API integration)
- **Admin Dashboard**: View and manage all bookings
- **Fleet Showcase**: Highlight your Ford Flex and Lincoln MKT vehicles
- **Service Pages**: Detailed information about airport transfers, corporate travel, events, and tours
- **Mobile-First**: Fully responsive across all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Storage**: JSON file-based (can be upgraded to PostgreSQL/MongoDB)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd bobdlimo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Home** (`/`): Main landing page with hero, fleet, services, booking form, and chatbot
- **Admin Dashboard** (`/admin`): View and manage all bookings

## 🔧 Configuration

### Update Contact Information

Edit the following files to update your contact info:
- `/components/Hero.tsx` - Phone number in navigation
- `/components/Footer.tsx` - All contact details
- `/components/BookingForm.tsx` - Phone number in call-to-action

### Update Vehicle Information

Edit `/components/Fleet.tsx` to update:
- Vehicle photos (replace Unsplash URLs with your own)
- Vehicle specifications
- Features and amenities

### Customize Colors

Edit `/tailwind.config.ts` to change the color scheme:
```typescript
luxury: {
  gold: "#D4AF37",        // Primary gold color
  darkGold: "#B8941F",    // Hover state
  cream: "#F5F5DC",       // Accent
  charcoal: "#1C1C1E",    // Dark background
  slate: "#2C2C2E",       // Secondary background
}
```

## 🤖 AI Chatbot Integration

The chatbot currently uses keyword-based responses. To integrate a real AI:

### Option 1: OpenAI

1. Get API key from [platform.openai.com](https://platform.openai.com)
2. Add to `.env.local`:
   ```
   OPENAI_API_KEY=your_key_here
   ```
3. Update `/app/api/chat/route.ts` with OpenAI API calls

### Option 2: Claude (Anthropic)

1. Get API key from [console.anthropic.com](https://console.anthropic.com)
2. Add to `.env.local`:
   ```
   ANTHROPIC_API_KEY=your_key_here
   ```
3. Update `/app/api/chat/route.ts` with Claude API calls

## 📧 Email Notifications

To add email confirmations when bookings are made:

### Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Install package:
   ```bash
   npm install resend
   ```
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. Update `/app/api/bookings/route.ts` to send emails

## 📊 Database Upgrade

Currently using JSON file storage. To upgrade to a real database:

### Option 1: PostgreSQL with Prisma

```bash
npm install prisma @prisma/client
npx prisma init
```

### Option 2: MongoDB

```bash
npm install mongodb
```

Update `/app/api/bookings/route.ts` with your database logic.

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Add when ready
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_claude_key
RESEND_API_KEY=your_resend_key
DATABASE_URL=your_database_url
```

## 🎨 Customization Tips

1. **Update Images**: Replace all Unsplash URLs with your own professional photos
2. **Add Logo**: Create a logo component in `/components/Logo.tsx`
3. **Google Analytics**: Add tracking in `/app/layout.tsx`
4. **SEO**: Update metadata in `/app/layout.tsx` and add `sitemap.xml`
5. **Add Pricing**: Create `/app/pricing/page.tsx` with your rates
6. **Blog/News**: Create `/app/blog` for updates and promotions

## 🔐 Security

Before deploying to production:

1. Add authentication to `/admin` page
2. Set up rate limiting for API routes
3. Validate and sanitize all form inputs
4. Add CAPTCHA to prevent spam bookings
5. Use environment variables for sensitive data

## 📄 License

This project is private and proprietary to Bob's Limousine Service.

## 💡 Support

For questions or issues, contact your developer or:
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion docs: [framer.com/motion](https://www.framer.com/motion)

## 🚀 Future Enhancements

- [ ] Payment integration (Stripe/Square)
- [ ] Customer accounts and booking history
- [ ] SMS notifications (Twilio)
- [ ] Real-time vehicle tracking
- [ ] Multi-language support
- [ ] Calendar integration (Google Calendar, Calendly)
- [ ] Review/testimonial system
- [ ] Fleet management system
- [ ] Driver mobile app

---

Built with ❤️ for Bob's Limousine Service
