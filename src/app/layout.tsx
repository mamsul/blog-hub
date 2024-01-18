import Header from '@/components/Header';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | BlogHub.',
    default: 'BlogHub. - Find many of amazing Post',
  },
  description:
    'Blog Hub is a simple website to display list of posts, detail, post comments and etc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <main className="relative h-screen w-full text-gray-800">
          <Header />
          <div className="mx-auto w-full px-5 pt-16 md:px-8 lg:max-w-4xl lg:px-0 lg:pt-28 xl:max-w-6xl">
            {children}
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
