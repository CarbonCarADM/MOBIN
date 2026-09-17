import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mobin - E-Bikes',
  description: 'E-bikes premium, curadoria especializada e suporte completo para cada pedal.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
