import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#6d28d9',
            fontSize: '1rem',
            colorBackground: 'transparent',
            colorText: '#f9fafb',
            colorAlphaShade: '#6d28d9',
          },
        }}
      >
        <body className='text-[#f9fafb]'>
          <main className='relative flex flex-col min-h-screen h-screen '>
            <Providers>
              <Navbar />
              <div className='flex-grow flex-1 '>{children}</div>
              <Footer />
            </Providers>
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
