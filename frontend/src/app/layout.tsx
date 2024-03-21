import type {Metadata} from 'next';
import {Heebo} from 'next/font/google';
import '@/app/(styles)/globals.scss';
import {Footer, Header} from '@/components';
import {ReactNode} from 'react';
import StoreProvider from '@/redux/provider';

const heebo = Heebo({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'John - Creative Technologist',
  description: 'Making a design system from scratch, Creating pixel perfect icons in Figma'
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <StoreProvider>
      <html lang="en">
      <body className={`${heebo.className} content-grid`}>
      <Header/>
      <main className="main full-width content-grid">
        {children}
      </main>
      <Footer/>
      </body>
      </html>
    </StoreProvider>
  );
}
