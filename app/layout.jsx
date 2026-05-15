
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CursorBubble from '@/components/ui/CursorBubble';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata = {
  title: 'Prayag Sahu — Full Stack Developer',
  description: 'Portfolio of Prayag Sahu — Full Stack Developer, Freelancer and UI/UX enthusiast from Jabalpur, MP. Building production-ready web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          <Navbar />
          <CursorBubble />
          <div id="cursor-bubble" />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}