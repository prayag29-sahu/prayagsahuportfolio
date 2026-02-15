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











// 'use client';

// import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t border-white/10 py-14">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* TOP GRID */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//                     {/* BRAND */}
//                     <div className="md:col-span-2">
//                         <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
//                             Prayag Sahu
//                         </div>

//                         <p className="text-gray-400 max-w-md leading-relaxed mb-5">
//                             Full Stack Developer specializing in scalable web applications,
//                             backend systems, and modern UI/UX. Building production-ready
//                             solutions for startups, businesses, and real clients.
//                         </p>

//                         {/* SOCIALS */}
//                         <div className="flex items-center gap-4">
//                             <SocialIcon icon={<Github />} />
//                             <SocialIcon icon={<Linkedin />} />
//                             <SocialIcon icon={<Twitter />} />
//                             <SocialIcon icon={<Mail />} />
//                         </div>
//                     </div>

//                     {/* PORTFOLIO */}
//                     <div>
//                         <h3 className="text-lg font-semibold text-white mb-4">
//                             Portfolio
//                         </h3>
//                         <ul className="space-y-2">
//                             <FooterLink href="#projects" label="Projects" />
//                             <FooterLink href="#skills" label="Skills" />
//                             <FooterLink href="#achievements" label="Achievements" />
//                             <FooterLink href="#education" label="Education" />
//                         </ul>
//                     </div>

//                     {/* CONNECT */}
//                     <div>
//                         <h3 className="text-lg font-semibold text-white mb-4">
//                             Connect
//                         </h3>
//                         <ul className="space-y-2">
//                             <FooterLink href="#contact" label="Contact Me" />
//                             <FooterLink href="#about" label="About" />
//                             <FooterLink href="#" label="Resume" />
//                             <FooterLink href="#" label="Blog" />
//                         </ul>
//                     </div>

//                 </div>

//                 {/* BOTTOM BAR */}
//                 <div className="border-t border-white/10 mt-10 pt-6 text-center">
//                     <p className="text-gray-400 text-sm">
//                         © {new Date().getFullYear()} Prayag Sahu — Full Stack Developer.
//                         Built with passion, performance, and clean architecture.
//                     </p>
//                 </div>

//             </div>
//         </footer>
//     );
// }

// /* ================= SUB COMPONENTS ================= */

// function FooterLink({ href, label }) {
//     return (
//         <li>
//             <a
//                 href={href}
//                 className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//             >
//                 {label}
//             </a>
//         </li>
//     );
// }

// function SocialIcon({ icon }) {
//     return (
//         <a
//             href="#"
//             className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400
//                  hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
//                  transition-all duration-300"
//         >
//             {icon}
//         </a>
//     );
// }









'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, Terminal, ExternalLink, ArrowUpRight } from 'lucide-react';
import ParallaxSection from '@/components/ui/ParallaxSection';
/* ─── Primitives ─────────────────────────────────────────── */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)" }} />
    );
}
function CornerAccent({ color = "#39d353" }) {
    return (<>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: color }} />
    </>);
}

/* ─── Footer Link ────────────────────────────────────────── */
function FooterLink({ href, label, accent = "#39d353" }) {
    const [hovered, setHovered] = useState(false);
    return (
        <li>
            <a href={href}
                className="flex items-center gap-2 py-1.5 transition-all duration-200 group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <span className="font-mono text-[12px] transition-colors duration-200"
                    style={{ color: hovered ? "#30363d" : "#30363d" }}>
                    {hovered ? "▸" : "$"}
                </span>
                <span className="font-mono text-[13px] tracking-[0.12em] transition-all duration-200"
                    style={{ color: hovered ? accent : "#8b949e" }}>
                    {label}
                </span>
                <ArrowUpRight size={11} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: accent }} />
            </a>
        </li>
    );
}

/* ─── Social Button ──────────────────────────────────────── */
function SocialBtn({ icon, href, label, color }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#1a2332] px-4 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-200 relative overflow-hidden"
            style={{ color: hovered ? "#010409" : color, borderColor: hovered ? color : "#1a2332", background: hovered ? color : "transparent" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {icon}
            <span>{label}</span>
        </a>
    );
}

/* ─── Animated dots ──────────────────────────────────────── */
function StatusDot({ color }) {
    return <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />;
}

/* ─── Main Footer ────────────────────────────────────────── */
export default function Footer() {
    const [glitch, setGlitch] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 9000);
        return () => clearInterval(t);
    }, []);

    return (
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">
            <footer
                className="relative overflow-hidden"
                style={{  fontFamily: "'Courier New', Courier, monospace" }}
            >
                {/* BG grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }} />
                {/* Glow */}
                <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 bg-[#39d353] opacity-[0.025] rounded-full blur-[160px] pointer-events-none" />

                {/* Top green line */}
                <div className="h-[2px] w-full" style={{ background: "linear-gradient(to right, transparent, #39d353, transparent)" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-6">

                    {/* ── MAIN GRID ── */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">

                        {/* ── BRAND PANEL (5 cols) ── */}
                        <div className="md:col-span-5">
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden h-full">
                                <ScanlineOverlay />
                                <CornerAccent color="#39d353" />

                                {/* Window chrome */}
                                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                        </div>
                                        <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b949e]">PROFILE.txt</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <StatusDot color="#39d353" />
                                        <span className="font-mono text-[9px] border border-[#39d353] text-[#39d353] px-1.5 py-0.5 tracking-widest">ONLINE</span>
                                    </div>
                                </div>

                                <div className="p-6 relative z-10">
                                    {/* Name glitch */}
                                    <div className={`font-mono font-black text-2xl md:text-3xl tracking-[0.06em] uppercase mb-1 transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"}`}
                                        style={{ textShadow: "0 0 20px rgba(57,211,83,0.2)" }}>
                                        PRAYAG_<span className="text-[#39d353]">SAHU</span>
                                        <span className="inline-block w-[8px] h-[16px] bg-[#39d353] animate-pulse ml-1 align-middle" />
                                    </div>
                                    <div className="font-mono text-[11px] text-[#39d353] tracking-[0.2em] mb-5">
                                        FULL_STACK_DEVELOPER · FREELANCER
                                    </div>

                                    {/* Bio */}
                                    <div className="border border-[#1a2332] bg-[#010409] p-4 mb-5 relative">
                                        <CornerAccent color="#1a2332" />
                                        <div className="font-mono text-[9px] text-[#39d353] tracking-[0.2em] mb-2">README.md</div>
                                        <p className="font-mono text-[13px] text-[#8b949e] leading-[1.85] tracking-wide">
                                            Full Stack Developer specializing in scalable web applications,
                                            backend systems and modern UI/UX. Building
                                            <span className="text-[#39d353]"> production-ready</span> solutions
                                            for startups, businesses and real clients.
                                        </p>
                                    </div>

                                    {/* Status chips */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {[
                                            { l: "STATUS", v: "AVAILABLE", c: "#39d353" },
                                            { l: "BASE", v: "JABALPUR, MP", c: "#00e5ff" },
                                            { l: "MODE", v: "OPEN TO WORK", c: "#f59e0b" },
                                        ].map(s => (
                                            <div key={s.l} className="border border-[#1a2332] bg-[#010409] px-3 py-1.5">
                                                <div className="font-mono text-[8px] tracking-[0.15em]" style={{ color: s.c }}>{s.l}</div>
                                                <div className="font-mono text-[11px] font-bold text-white">{s.v}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Social buttons */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <SocialBtn icon={<Github size={13} />} href="https://github.com/prayag29-sahu" label="GITHUB" color="#39d353" />
                                        <SocialBtn icon={<Linkedin size={13} />} href="https://linkedin.com" label="LINKEDIN" color="#00e5ff" />
                                        <SocialBtn icon={<Twitter size={13} />} href="https://twitter.com" label="TWITTER" color="#a855f7" />
                                        <SocialBtn icon={<Mail size={13} />} href="mailto:sahuprayag145@gmail.com" label="EMAIL" color="#f59e0b" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── LINKS (4 cols — 2+2) ── */}
                        <div className="md:col-span-4 grid grid-cols-2 gap-4">

                            {/* Portfolio links */}
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                                <ScanlineOverlay />
                                <CornerAccent color="#00e5ff" />
                                <div className="px-4 py-2.5 border-b border-[#1a2332] flex items-center gap-2">
                                    <StatusDot color="#00e5ff" />
                                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#8b949e] uppercase">Portfolio</span>
                                </div>
                                <div className="p-4 relative z-10">
                                    <div className="font-mono text-[9px] text-[#00e5ff] tracking-[0.2em] mb-3">$ ls ./portfolio/</div>
                                    <ul className="space-y-0.5">
                                        <FooterLink href="#projects" label="Projects" accent="#00e5ff" />
                                        <FooterLink href="#skills" label="Skills" accent="#00e5ff" />
                                        <FooterLink href="#achievements" label="Achievements" accent="#00e5ff" />
                                        <FooterLink href="#education" label="Education" accent="#00e5ff" />
                                        <FooterLink href="#certifications" label="Certifications" accent="#00e5ff" />
                                    </ul>
                                </div>
                            </div>

                            {/* Connect links */}
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                                <ScanlineOverlay />
                                <CornerAccent color="#f59e0b" />
                                <div className="px-4 py-2.5 border-b border-[#1a2332] flex items-center gap-2">
                                    <StatusDot color="#f59e0b" />
                                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#8b949e] uppercase">Connect</span>
                                </div>
                                <div className="p-4 relative z-10">
                                    <div className="font-mono text-[9px] text-[#f59e0b] tracking-[0.2em] mb-3">$ ls ./connect/</div>
                                    <ul className="space-y-0.5">
                                        <FooterLink href="#contact" label="Contact Me" accent="#f59e0b" />
                                        <FooterLink href="#about" label="About" accent="#f59e0b" />
                                        <FooterLink href="/resume.pdf" label="Resume" accent="#f59e0b" />
                                        <FooterLink href="#blogs" label="Blog" accent="#f59e0b" />
                                        <FooterLink href="http://prayagsahuportfolio.netlify.app" label="Portfolio" accent="#f59e0b" />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ── TERMINAL STATUS PANEL (3 cols) ── */}
                        <div className="md:col-span-3">
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden h-full">
                                <ScanlineOverlay />
                                <CornerAccent color="#a855f7" />
                                <div className="px-4 py-2.5 border-b border-[#1a2332] flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#8b949e]">TERMINAL.sh</span>
                                </div>

                                <div className="p-4 relative z-10 font-mono text-[12px] space-y-2">
                                    {[
                                        { cmd: "$ whoami", out: "prayag-sahu", outColor: "#39d353" },
                                        { cmd: "$ location", out: "Jabalpur, MP, IN", outColor: "#00e5ff" },
                                        { cmd: "$ status", out: "OPEN_TO_WORK: TRUE", outColor: "#f59e0b" },
                                        { cmd: "$ tech", out: "React · Node · PostgreSQL", outColor: "#8b949e" },
                                        { cmd: "$ email", out: "sahuprayag145@gmail.com", outColor: "#a855f7" },
                                        { cmd: "$ github", out: "prayag29-sahu", outColor: "#39d353" },
                                        { cmd: "$ commits", out: "4,167+ this year", outColor: "#00e5ff" },
                                        { cmd: "$ leetcode", out: "157 problems solved", outColor: "#f59e0b" },
                                    ].map((line, i) => (
                                        <div key={i}>
                                            <div className="text-[#8b949e]">{line.cmd}</div>
                                            <div style={{ color: line.outColor }}>→ {line.out}</div>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-1 text-[#39d353] pt-1">
                                        <span>$</span>
                                        <span className="animate-pulse">█</span>
                                    </div>
                                </div>

                                {/* Contact CTA */}
                                <div className="p-4 border-t border-[#1a2332] relative z-10">
                                    <a href="mailto:sahuprayag145@gmail.com"
                                        className="flex items-center justify-center gap-2 border border-[#39d353] font-mono text-[10px] tracking-[0.18em] uppercase py-3 text-[#39d353] hover:bg-[#39d353] hover:text-[#010409] transition-all duration-200">
                                        <Terminal size={12} />
                                        $ GET_IN_TOUCH →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── BOTTOM BAR ── */}
                    <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                        <ScanlineOverlay />
                        <CornerAccent color="#1a2332" />

                        {/* Green top glow line */}
                        <div className="h-[1px]" style={{ background: "linear-gradient(to right, transparent, #39d353, transparent)" }} />

                        <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <StatusDot color="#39d353" />
                                <span className="font-mono text-[12px] text-[#8b949e] tracking-wide">
                                    © {year}{" "}
                                    <span className="text-white font-bold">PRAYAG_SAHU</span>
                                    {" "}— Built with passion, performance & clean architecture.
                                </span>
                            </div>

                            {/* Right */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 font-mono text-[10px] text-[#30363d]">
                                    <span>$</span>
                                    <span className="text-[#8b949e]">footer --version 1.0.0 _</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <StatusDot color="#39d353" />
                                    <span className="font-mono text-[10px] text-[#39d353] tracking-[0.2em]">ALL_SYSTEMS_ONLINE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer></ParallaxSection>
    );
}