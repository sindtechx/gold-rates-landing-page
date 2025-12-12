import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gold Rates - Track Dubai Gold Prices in Real-Time',
  description: 'Track live gold rates for 24K, 22K, 21K, and 18K gold straight from Dubai. Real-time prices, historical trends, and smart analytics. Coming soon to App Store and Play Store.',
  keywords: ['gold rates', 'dubai gold prices', '24k gold', '22k gold', 'gold price tracker', 'dubai gold'],
  openGraph: {
    title: 'Gold Rates - Track Dubai Gold Prices in Real-Time',
    description: 'Track live gold rates for 24K, 22K, 21K, and 18K gold straight from Dubai. Coming soon to App Store and Play Store.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
