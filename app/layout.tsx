import type { Metadata } from 'next';
import { Montserrat, Space_Mono } from 'next/font/google';
import './globals.css';

const body = Montserrat({ variable: '--font-body', subsets: ['latin'] });
const display = Space_Mono({ variable: '--font-annotation', subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://anamaria-learning-portfolio.profesoraneon.chatgpt.site'),
  title: 'Anamaría Espinoza — Learning Transformation & Experience',
  description: 'Senior Learning Transformation and Experience professional designing accessible, scalable learning systems for global organisations.',
  openGraph: {
    title: 'Anamaría Espinoza — Learning Transformation & Experience',
    description: 'Learning systems that move people forward.',
    url: '/',
    siteName: 'Anamaría Espinoza Portfolio',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Anamaría Espinoza — Learning systems that move people forward.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anamaría Espinoza — Learning Transformation & Experience',
    description: 'Learning systems that move people forward.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>;
}
