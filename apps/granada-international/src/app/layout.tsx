import type { Metadata } from 'next';
import './globals.css';
import './colors.css';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const euclidCircularA = localFont({
  src: [
    {
      path: '../../public/fonts/Euclid Circular A Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Euclid Circular A Light Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Euclid Circular A Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Euclid Circular A Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Euclid Circular A Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Euclid Circular A Medium Italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Euclid Circular A SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Euclid Circular A SemiBold Italic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Euclid Circular A Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Euclid Circular A Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-euclid',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Granada International',
  description: 'Granada International School – World-Class Edexcel & Cambridge Education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('font-sans', euclidCircularA.variable)}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
