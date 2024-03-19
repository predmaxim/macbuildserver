import type {Metadata} from 'next';
import {Heebo} from 'next/font/google';
import '@/app/(styles)/globals.scss';
import {Footer, Header} from '@/components';

const heebo = Heebo({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'John - Creative Technologist',
  description: 'Making a design system from scratch, Creating pixel perfect icons in Figma'
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={`${heebo.className} content-grid`}>
    <Header/>
    <main className="main">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
