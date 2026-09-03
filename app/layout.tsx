import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://anamariae.github.io/portfolio/'),
  title: 'Anamaría Espinoza: Learning Transformation & Experience',
  description: 'Senior Learning Transformation professional and graphic, multimedia and web designer creating accessible, scalable learning systems.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Anamaría Espinoza: Learning Transformation & Experience',
    description: 'Learning systems that move people forward.',
    url: '/',
    siteName: 'Anamaría Espinoza Portfolio',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Anamaría Espinoza: Learning systems that move people forward.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anamaría Espinoza: Learning Transformation & Experience',
    description: 'Learning systems that move people forward.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
