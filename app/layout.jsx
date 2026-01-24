// // app/layout.tsx
// import "./globals.css";
// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// export const metadata = {
//   title: "FactChecker AI",
//   description: "Detect fake content - text, image, video, url, documents",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="antialiased">
//         <div className="min-h-screen flex bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
//           {/* Sidebar (client component) */}
//           <Sidebar />

//           <div className="flex-1 flex flex-col min-h-screen">
//             {/* Navbar (client) */}
//             <Navbar />

//             {/* Page content */}
//             <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
//               {children}
//             </main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }



// import { Inter } from 'next/font/google';
// import './globals.css';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Prayag Sahu - Full Stack Developer',
//   description: '3D Portfolio showcasing Full Stack Development & C++ Programming',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} bg-black text-white antialiased`}>
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }





import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CursorBubble from '@/components/ui/CursorBubble';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prayag Sahu - Full Stack Developer',
  description: '3D Portfolio showcasing Full Stack Development & C++ Programming',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        <CursorBubble />

        <div id="cursor-bubble"></div>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}