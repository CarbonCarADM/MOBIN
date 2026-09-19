import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'E-BIKE - Bikes Elétricas Premium',
  description: 'E-bikes premium, curadoria especializada e suporte completo para cada pedal.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'E-BIKE',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
  maximumScale: 1.0,
  userScalable: false,
  themeColor: '#1a1a1a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preload" as="image" href="/hero-bike.webp" />
        <link rel="preload" as="image" href="/images/map-location.webp" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
