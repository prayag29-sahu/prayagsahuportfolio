// import Link from 'next/link';
// import { Github, Linkedin, Mail, Heart } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className="relative bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/10 py-12 overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7CFF00] rounded-full blur-[120px] animate-pulse-glow" />
//                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7CFF00] rounded-full blur-[120px] animate-pulse-glow" />
//             </div>

//             <div className="container mx-auto px-6 relative z-10">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//                     {/* Brand */}
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-bold">
//                             <span className="text-white">Prayag</span>
//                             <span className="text-[#7CFF00]">.dev</span>
//                         </h3>
//                         <p className="text-gray-400">
//                             Full Stack Developer & C++ Programmer crafting digital experiences
//                         </p>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="space-y-4">
//                         <h4 className="text-lg font-semibold text-[#7CFF00]">Quick Links</h4>
//                         <div className="flex flex-col gap-2">
//                             {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
//                                 <Link
//                                     key={item}
//                                     href={`/${item.toLowerCase()}`}
//                                     className="text-gray-400 hover:text-[#7CFF00] transition-colors"
//                                 >
//                                     {item}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Social Links */}
//                     <div className="space-y-4">
//                         <h4 className="text-lg font-semibold text-[#7CFF00]">Connect</h4>
//                         <div className="flex gap-4">
//                             {[
//                                 { icon: Github, href: '#' },
//                                 { icon: Linkedin, href: '#' },
//                                 { icon: Mail, href: '#' },
//                             ].map((social, idx) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a
//                                         key={idx}
//                                         href={social.href}
//                                         className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#7CFF00] hover:text-black transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(124,255,0,0.5)] glass"
//                                     >
//                                         <Icon size={20} />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Copyright */}
//                 <div className="pt-8 border-t border-white/10 text-center">
//                     <p className="text-gray-400 flex items-center justify-center gap-2">
//                         © 2024 Prayag Sahu. Crafted with
//                         <Heart size={16} className="text-[#7CFF00] animate-pulse" />
//                         and Next.js
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }









// import Link from 'next/link';
// import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className="bg-gray-950 border-t border-gray-800 py-12">
//             <div className="container mx-auto px-6">

//                 {/* Top Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//                     {/* Brand + Description */}
//                     <div className="col-span-1 md:col-span-2">
//                         <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
//                             Portfolio.AI
//                         </div>

//                         <p className="text-gray-400 mb-4 max-w-md">
//                             Creating stunning AI-powered experiences with cutting-edge technology
//                             and innovative design. Let&apos;s build the future together.
//                         </p>

//                         {/* Social Icons */}
//                         <div className="flex space-x-4">
//                             <a
//                                 href="#"
//                                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 aria-label="GitHub"
//                             >
//                                 <Github className="w-5 h-5" />
//                             </a>

//                             <a
//                                 href="#"
//                                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 aria-label="LinkedIn"
//                             >
//                                 <Linkedin className="w-5 h-5" />
//                             </a>

//                             <a
//                                 href="#"
//                                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 aria-label="Twitter"
//                             >
//                                 <Twitter className="w-5 h-5" />
//                             </a>

//                             <a
//                                 href="#"
//                                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 aria-label="Email"
//                             >
//                                 <Mail className="w-5 h-5" />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Portfolio Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">
//                             Portfolio
//                         </h3>

//                         <ul className="space-y-2">
//                             <li>
//                                 <a
//                                     href="#projects"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Projects
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#skills"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Skills
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#achievements"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Achievements
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#education"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Education
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Connect Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4 text-white">
//                             Connect
//                         </h3>

//                         <ul className="space-y-2">
//                             <li>
//                                 <a
//                                     href="#contact"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Contact Me
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#about"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     About
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Resume
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#"
//                                     className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//                                 >
//                                     Blog
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//                     <p className="text-gray-400">
//                         © 2024 Portfolio.AI. Crafted with passion and powered by AI.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }











'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t border-white/10 py-14">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div className="md:col-span-2">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                            Prayag Sahu
                        </div>

                        <p className="text-gray-400 max-w-md leading-relaxed mb-5">
                            Full Stack Developer specializing in scalable web applications,
                            backend systems, and modern UI/UX. Building production-ready
                            solutions for startups, businesses, and real clients.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex items-center gap-4">
                            <SocialIcon icon={<Github />} />
                            <SocialIcon icon={<Linkedin />} />
                            <SocialIcon icon={<Twitter />} />
                            <SocialIcon icon={<Mail />} />
                        </div>
                    </div>

                    {/* PORTFOLIO */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Portfolio
                        </h3>
                        <ul className="space-y-2">
                            <FooterLink href="#projects" label="Projects" />
                            <FooterLink href="#skills" label="Skills" />
                            <FooterLink href="#achievements" label="Achievements" />
                            <FooterLink href="#education" label="Education" />
                        </ul>
                    </div>

                    {/* CONNECT */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Connect
                        </h3>
                        <ul className="space-y-2">
                            <FooterLink href="#contact" label="Contact Me" />
                            <FooterLink href="#about" label="About" />
                            <FooterLink href="#" label="Resume" />
                            <FooterLink href="#" label="Blog" />
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 mt-10 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Prayag Sahu — Full Stack Developer.
                        Built with passion, performance, and clean architecture.
                    </p>
                </div>

            </div>
        </footer>
    );
}

/* ================= SUB COMPONENTS ================= */

function FooterLink({ href, label }) {
    return (
        <li>
            <a
                href={href}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
                {label}
            </a>
        </li>
    );
}

function SocialIcon({ icon }) {
    return (
        <a
            href="#"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400
                 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                 transition-all duration-300"
        >
            {icon}
        </a>
    );
}
