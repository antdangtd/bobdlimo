import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bob's Limousine Service | Luxury Black Car Transportation",
  description: "Professional limousine and black car service featuring Ford Flex and Lincoln MKT. Airport transfers, corporate travel, and special events.",
  keywords: "limousine service, black car service, luxury transportation, airport transfer, corporate travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
