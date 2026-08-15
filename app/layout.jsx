import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CursorBubble from '@/components/ui/CursorBubble';
import SplashScreen from '@/components/ui/SplashScreen';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata = {
  title: 'Prayag Sahu — Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of Prayag Sahu — Full Stack Developer, Freelancer and UI/UX enthusiast from Jabalpur, MP. Building premium, production-ready web applications.',
  keywords: [
    'Prayag Sahu', 
    'Prayag Sahu Portfolio', 
    'Prayag Sahu Jabalpur',
    'Full Stack Developer', 
    'MERN Stack Developer', 
    'Frontend Developer', 
    'React Developer', 
    'Next.js Developer',
    'Web Developer in Jabalpur', 
    'Freelance Developer India', 
    'UI/UX Designer'
  ],
  authors: [{ name: 'Prayag Sahu', url: 'https://github.com/prayag29-sahu' }],
  creator: 'Prayag Sahu',
  openGraph: {
    title: 'Prayag Sahu — Full Stack Developer',
    description: 'Explore the portfolio of Prayag Sahu. Premium web applications, MERN stack projects, and innovative UI/UX designs.',
    url: 'https://prayagsahu.com', // TODO: Update this to your actual deployed domain
    siteName: 'Prayag Sahu Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/sfitny3t/image/upload/v1785181029/profile_domhhd.jpg', // Using your actual profile image!
        width: 1200,
        height: 630,
        alt: 'Prayag Sahu - Portfolio Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prayag Sahu — Full Stack Developer',
    description: 'Full Stack Developer & UI/UX Enthusiast from India.',
    images: ['https://res.cloudinary.com/sfitny3t/image/upload/v1785181029/profile_domhhd.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // You will get this code from Google Search Console later
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE', 
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          <ClientLayout>
            <Navbar />
            <CursorBubble />
            <div id="cursor-bubble" />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}