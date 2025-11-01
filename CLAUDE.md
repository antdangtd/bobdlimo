# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page marketing website for **Sparta Limousine**, a North New Jersey executive black car service. The site is built with vanilla HTML, CSS, and JavaScript with no build process or dependencies.

## Development

### Running the Site

Open `index.html` directly in any web browser. No build step or local server is required—all assets are self-contained.

### File Structure

- **index.html** - Main HTML document with semantic structure and comprehensive sections
- **styles.css** - Modular CSS with CSS custom properties for theming
- **script.js** - Lightweight JavaScript for navigation toggle and AI concierge form simulation

## Code Architecture

### CSS Architecture

The site uses a design token system via CSS custom properties defined in `:root`:

- Color tokens: `--color-bg`, `--color-text`, `--color-accent`, etc.
- Spacing: `--max-width` for consistent content containers
- Typography: `--font-body` uses Montserrat from Google Fonts
- Effects: `--shadow-soft` for consistent elevation

Layout patterns:
- Grid-based responsive layouts using `grid-template-columns: repeat(auto-fit, minmax(...))`
- Mobile-first responsive design with breakpoint at 720px
- Consistent section padding and spacing throughout

### JavaScript Modules

**Navigation Toggle** (script.js:12-28)
- Manages mobile menu visibility using ARIA attributes
- Toggles `aria-expanded` on button and `aria-hidden` on menu
- Auto-closes menu when navigation links are clicked on mobile

**AI Concierge Form** (script.js:46-65)
- Simulates conversational scheduling without backend integration
- Creates message bubbles in chat interface
- Uses random responses from predefined array for demo purposes

### HTML Structure

Sections follow this pattern:
1. Hero with navigation, value prop, and metrics
2. About section with image and content grid
3. Services cards showcasing three main offerings
4. Fleet section displaying vehicle types
5. Coverage area with geographic details
6. Gallery with captioned service images
7. AI concierge form for ride planning simulation
8. Reviews/testimonials with customer quotes
9. CTA section
10. Contact information and footer

All sections use semantic HTML5 elements (`<section>`, `<article>`, `<figure>`, etc.) and include proper ARIA labels where needed.

## Key Design Patterns

### Responsive Images
All images use Unsplash with `auto=format&fit=crop` parameters and include descriptive alt text. Images use `loading="lazy"` except for hero image.

### Accessibility
- ARIA attributes for mobile navigation state
- Semantic landmarks and headings hierarchy
- Focus states on interactive elements
- Reduced motion media query support

### Styling Conventions
- BEM-inspired class naming (e.g., `hero__content`, `nav__toggle`)
- Section modifiers for variants (e.g., `section--dark`, `section--accent`)
- Consistent button styles via modifier classes (`btn--primary`, `btn--secondary`, `btn--ghost`)

## Business Context

The site markets Sparta Limousine's services:
- **Primary services**: Airport transfers, corporate travel, event chauffeur
- **Coverage area**: North Jersey (Sparta, Sussex County, Bergen, Newark) and NYC
- **Fleet**: Executive sedans, luxury SUVs, sprinter vans
- **Contact**: (973) 329-0000, reservations@spartalimousine.com

When making content updates, maintain the professional yet approachable tone and North Jersey geographic focus.
