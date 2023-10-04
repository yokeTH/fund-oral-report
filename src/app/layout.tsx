import './globals.css';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: ['200', '400'],
  subsets: ['latin', 'latin-ext', 'thai'],
});

export const metadata: Metadata = {
  title: 'Fund Oral Report',
  description: 'Fund Oral Report',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
