// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable jsx-a11y/alt-text */
// // 'use client';
// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Menu, X } from 'lucide-react';

// // export default function Navbar() {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [scrolled, setScrolled] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             setScrolled(window.scrollY > 50);
// //         };
// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     const navItems = [
// //         { name: 'Home', path: '/' },
// //         { name: 'About', path: '/about' },
// //         { name: 'Journey', path: '/journey' },
// //         { name: 'Skills', path: '/skills' },
// //         { name: 'Projects', path: '/projects' },
// //         { name: 'Achievements', path: '/achievements' },
// //         { name: 'Contact', path: '/contact' },
// //     ];

// //     return (
// //         <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
// //             }`}>
// //             <div className="container mx-auto px-6">
// //                 <div className="flex items-center justify-between h-20">
// //                     {/* Logo */}
// //                     <Link href="/" className="text-2xl font-bold group">
// //                         <span className="text-white group-hover:text-[#7CFF00] transition-colors">Prayag</span>
// //                         <span className="text-[#7CFF00]">.dev</span>
// //                     </Link>

// //                     {/* Desktop Menu */}
// //                     <div className="hidden md:flex items-center gap-8">
// //                         {navItems.map((item) => (
// //                             <Link
// //                                 key={item.path}
// //                                 href={item.path}
// //                                 className="text-gray-300 hover:text-[#7CFF00] transition-colors font-medium relative group"
// //                             >
// //                                 {item.name}
// //                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7CFF00] group-hover:w-full transition-all duration-300" />
// //                             </Link>
// //                         ))}
// //                     </div>

// //                     {/* Mobile Menu Button */}
// //                     <button
// //                         onClick={() => setIsOpen(!isOpen)}
// //                         className="md:hidden text-white p-2 hover:text-[#7CFF00] transition-colors"
// //                     >
// //                         {isOpen ? <X size={24} /> : <Menu size={24} />}
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Mobile Menu */}
// //             {isOpen && (
// //                 <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 animate-slide-in-left">
// //                     <div className="container mx-auto px-6 py-4 space-y-4">
// //                         {navItems.map((item) => (
// //                             <Link
// //                                 key={item.path}
// //                                 href={item.path}
// //                                 onClick={() => setIsOpen(false)}
// //                                 className="block text-gray-300 hover:text-[#7CFF00] transition-colors font-medium py-2"
// //                             >
// //                                 {item.name}
// //                             </Link>
// //                         ))}
// //                     </div>
// //                 </div>
// //             )}
// //         </nav>
// //     );
// // }











// // 'use client';
// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Menu, X } from 'lucide-react';

// // export default function Navbar() {

// //   const [menuOpen, setMenuOpen] = useState(false);
// //     return (
// //         <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/80 backdrop-blur-md border-b border-white/10">
// //             <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// //                 <div className="text-2xl font-bold text-blue-400">
// //                     Portfolio.AI
// //                 </div>

// //                 {/* Desktop Menu */}
// //                 <div className="hidden md:flex items-center gap-8 text-sm">
// //                     <a href="#home" className="hover:text-blue-400 transition">Home</a>
// //                     <a href="#about" className="hover:text-blue-400 transition">About</a>
// //                     <a href="#education" className="hover:text-blue-400 transition">Education</a>
// //                     <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
// //                     <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
// //                     <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
// //                     <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
// //                 </div>

// //                 <div className="flex items-center gap-4">
// //                     <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full font-medium">
// //                         Hire Me
// //                     </button>

// //                     <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
// //                         {menuOpen ? <X /> : <Menu />}
// //                     </button>
// //                 </div>
// //             </nav>

// //             {/* Mobile Menu */}
// //             {menuOpen && (
// //                 <div className="md:hidden px-6 pb-6 space-y-4 bg-[#0b1220]">
// //                     <a href="#home">Home</a>
// //                     <a href="#about">About</a>
// //                     <a href="#education">Education</a>
// //                     <a href="#skills">Skills</a>
// //                     <a href="#projects">Projects</a>
// //                     <a href="#achievements">Achievements</a>
// //                     <a href="#contact">Contact</a>
// //                 </div>
// //             )}
// //         </header>
// //     );
// // }








// // 'use client';

// // import { useState } from 'react';
// // import { Menu, X } from 'lucide-react';

// // export default function Navbar() {
// //     const [menuOpen, setMenuOpen] = useState(false);

// //     return (
// //         <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1220]/80 backdrop-blur-xl border-b border-white/10">
// //             <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// //                 {/* BRAND */}
// //                 <a
// //                     href="#home"
// //                     className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
// //                 >
// //                     Prayag&nbsp;Sahu
// //                 </a>

// //                 {/* DESKTOP MENU */}
// //                 <div className="hidden md:flex items-center gap-8 text-lg text-gray-300">
// //                     <NavLink href="#home" label="Home" />
// //                     <NavLink href="#about" label="About" />
// //                     <NavLink href="#education" label="Education" />
// //                     <NavLink href="#skills" label="Skills" />
// //                     <NavLink href="#projects" label="Projects" />
// //                     <NavLink href="#achievements" label="Achievements" />
// //                     <NavLink href="#contact" label="Contact" />
// //                 </div>

// //                 {/* CTA + MOBILE TOGGLE */}
// //                 <div className="flex items-center gap-4">
// //                     <a
// //                         href="#contact"
// //                         className="hidden md:inline-flex items-center px-7 py-2 rounded-full text-lg font-semibold
// //                        bg-gradient-to-r from-cyan-500 to-blue-500 text-white
// //                        hover:from-cyan-400 hover:to-blue-400
// //                        transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
// //                     >
// //                         Hire Me
// //                     </a>

// //                     <button
// //                         className="md:hidden text-gray-300 hover:text-cyan-400 transition"
// //                         onClick={() => setMenuOpen(!menuOpen)}
// //                     >
// //                         {menuOpen ? <X size={24} /> : <Menu size={24} />}
// //                     </button>
// //                 </div>
// //             </nav>

// //             {/* MOBILE MENU */}
// //             {menuOpen && (
// //                 <div className="md:hidden bg-[#0b1220]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
// //                     <MobileLink href="#home" label="Home" setMenuOpen={setMenuOpen} />
// //                     <MobileLink href="#about" label="About" setMenuOpen={setMenuOpen} />
// //                     <MobileLink href="#education" label="Education" setMenuOpen={setMenuOpen} />
// //                     <MobileLink href="#skills" label="Skills" setMenuOpen={setMenuOpen} />
// //                     <MobileLink href="#projects" label="Projects" setMenuOpen={setMenuOpen} />
// //                     <MobileLink href="#achievements" label="Achievements" setMenuOpen={setMenuOpen} />
// //                     <MobileLink href="#contact" label="Contact" setMenuOpen={setMenuOpen} />

// //                     <a
// //                         href="#contact"
// //                         className="block text-center mt-4 py-3 rounded-xl font-semibold
// //                        bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
// //                         onClick={() => setMenuOpen(false)}
// //                     >
// //                         Hire Me
// //                     </a>
// //                 </div>
// //             )}
// //         </header>
// //     );
// // }

// // /* ================= SUB COMPONENTS ================= */

// // function NavLink({ href, label }) {
// //     return (
// //         <a
// //             href={href}
// //             className="relative hover:text-cyan-400 transition-colors duration-300"
// //         >
// //             {label}
// //         </a>
// //     );
// // }

// // function MobileLink({ href, label, setMenuOpen }) {
// //     return (
// //         <a
// //             href={href}
// //             onClick={() => setMenuOpen(false)}
// //             className="block text-gray-300 hover:text-cyan-400 transition-colors"
// //         >
// //             {label}
// //         </a>
// //     );
// // }






// 'use client';

// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import Image from 'next/image';


// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//     const closeMenu = () => setOpen(false);

//     return (
//         <>
//             {/* DESKTOP NAVBAR */}
//             <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
//                 <nav
//                     className="hidden md:flex items-center gap-8 px-5 py-2 rounded-full
//     bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg"
//                     style={{
//                         borderBottom: '2px solid rgba(110, 160, 70, 0.9)',
//                         boxShadow: '0 6px 14px rgba(124, 255, 0, 0.25)',
//                     }}
//                 >
//                     <Image
//                         src="/images/hero3.png"
//                         alt="avatar"
//                         width={100}
//                         height={100}
//                         className="w-12 h-12 rounded-full object-cover"
//                         style={{
//                             border: '2px solid rgba(110, 160, 70, 0.9)',
//                             boxShadow: '0 0 8px rgba(110, 160, 70, 0.6)',
//                         }}
//                     />


//                     <NavLink label="Home" />
//                     <NavLink label="About" />
//                     <NavLink label="Projects" />
//                     <NavLink label="Blogs" />

//                     <a
//                         href="#contact"
//                         className="ml-2 px-5 py-2 rounded-full bg-white text-black
//             font-medium hover:scale-105 transition"
//                     >
//                         Contact
//                     </a>
//                 </nav>

//                 {/* MOBILE BAR */}
//                 <div className="md:hidden w-[80vw] max-w-md mx-auto">
//                     <div
//                         className="flex items-center gap-3 px-6 py-2 rounded-full
//             bg-black/80 backdrop-blur-xl border border-white/10"
//                     >
//                         <img
//                             src="/images/2.png"
//                             alt="avatar"
//                             className="w-9 h-9 rounded-full"
//                         />

//                         <span className="text-white text-lg whitespace-nowrap">
//                             Available for work
//                         </span>

//                         <span className="status-dot" />

//                         <button
//                             onClick={() => setOpen(!open)}
//                             className="ml-auto w-10 h-10 rounded-full bg-lime-300
//               flex items-center justify-center text-black transition"
//                         >
//                             {open ? <X size={18} /> : <Menu size={18} />}
//                         </button>
//                     </div>

//                     {/* INLINE DROPDOWN */}
//                     <div
//                         className={`mt-3 overflow-hidden rounded-3xl
//             bg-black/90 backdrop-blur-xl border border-white/10
//             transition-all duration-500 ease-in-out
//             ${open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}
//                     >
//                         <ul className="flex flex-col gap-6 text-center text-lg text-white py-6">
//                             <MobileLink label="Home" onClick={closeMenu} />
//                             <MobileLink label="About" onClick={closeMenu} />
//                             <MobileLink label="Projects" onClick={closeMenu} />
//                             <MobileLink label="Blogs" onClick={closeMenu} />
//                         </ul>

//                         <a
//                             href="#contact"
//                             onClick={closeMenu}
//                             className="block mx-6 mb-6 py-3 rounded-full bg-lime-300
//               text-black text-center font-medium"
//                         >
//                             Contact
//                         </a>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }

// /* ================= SUB COMPONENTS ================= */

// function NavLink({ label }) {
//     return (
//         <a
//             href={`#${label.toLowerCase()}`}
//             className="group text-white/80 hover:text-lime-300 transition font-medium"
//         >
//             <span className="text-rotate">
//                 <span className="text-rotate-inner">
//                     <span>{label}</span>
//                     <span>{label}</span>
//                 </span>
//             </span>
//         </a>
//     );
// }

// function MobileLink({ label, onClick }) {
//     return (
//         <a
//             href={`#${label.toLowerCase()}`}
//             onClick={onClick}
//             className="group hover:text-lime-300 transition"
//         >
//             <span className="text-rotate">
//                 <span className="text-rotate-inner">
//                     <span>{label}</span>
//                     <span>{label}</span>
//                 </span>
//             </span>
//         </a>
//     );
// }





'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Zap } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "EDUCATION", href: "#education" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "BLOGS", href: "#blogs" },
    { label: "CONTACT", href: "#contact" },
];

/* ─── Blinking cursor ────────────────────────────────────── */
function Cursor() {
    return <span className="inline-block w-[6px] h-[11px] bg-[#39d353] animate-pulse ml-0.5 align-middle" />;
}

/* ─── Active section tracker ─────────────────────────────── */
function useActiveSection() {
    const [active, setActive] = useState("home");
    useEffect(() => {
        const ids = navLinks.map(l => l.href.replace("#", ""));
        const obs = new IntersectionObserver(
            entries => {
                entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { threshold: 0.3 }
        );
        ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
        return () => obs.disconnect();
    }, []);
    return active;
}

/* ─── Desktop NavLink ────────────────────────────────────── */
function NavLink({ label, href, active }) {
    const isActive = active === href.replace("#", "");
    return (
        <a href={href}
            className="group relative font-mono text-[12px] tracking-[0.2em] uppercase transition-all duration-200"
            style={{ color: isActive ? "#39d353" : "#8b949e" }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#c9d1d9"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#8b949e"; }}
        >
            {isActive && <span className="absolute -left-3 top-1/2 -translate-y-1/2 font-mono text-[#39d353] text-[12px]">▸</span>}
            {label}
            {/* underline */}
            <div className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: isActive ? "#39d353" : "#30363d" }} />
        </a>
    );
}

/* ─── Mobile NavLink ─────────────────────────────────────── */
function MobileLink({ label, href, active, onClick }) {
    const isActive = active === href.replace("#", "");
    return (
        <a href={href} onClick={onClick}
            className="flex items-center gap-3 px-5 py-2.5 border-b border-[#1a2332] group transition-all duration-200"
            style={{ borderLeftWidth: 2, borderLeftColor: isActive ? "#39d353" : "transparent" }}>
            <span className="font-mono text-[11px]" style={{ color: isActive ? "#39d353" : "#30363d" }}>
                {isActive ? "▸" : "$"}
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
                style={{ color: isActive ? "#39d353" : "#8b949e" }}>
                {label}
            </span>
            {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />}
        </a>
    );
}

/* ─── Main Navbar ────────────────────────────────────────── */
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [glitch, setGlitch] = useState(false);
    const active = useActiveSection();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 100); }, 8000);
        return () => clearInterval(t);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <>
            {/* ─── DESKTOP NAVBAR ─────────────────────────────────── */}
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block"
                style={{
                    background: scrolled ? "rgba(1,4,9,0.97)" : "rgba(1,4,9,0.85)",
                    backdropFilter: "blur(16px)",
                    borderBottom: `1px solid ${scrolled ? "#1a2332" : "transparent"}`,
                    boxShadow: scrolled ? "0 0 30px rgba(57,211,83,0.04)" : "none",
                    fontFamily: "'Courier New', Courier, monospace",
                }}
            >
                {/* Thin green top bar */}
                <div className="h-[2px] w-full"
                    style={{ background: "linear-gradient(to right, transparent, #39d353, transparent)" }} />

                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center justify-between h-14">

                        {/* LEFT: Logo + avatar */}
                        <div className="flex items-center gap-3">
                            {/* Avatar with green ring */}
                            <div className="relative w-9 h-9 shrink-0">
                                <div
                                    className="absolute inset-0 rounded-full border-2 border-[#39d353]"
                                    style={{ boxShadow: "0 0 12px rgba(57,211,83,0.4)" }}
                                />
                                <Image
                                    src="/images/hero3.png"
                                    alt="Prayag Sahu"
                                    fill
                                    sizes="36px"
                                    priority
                                    className="rounded-full object-cover"
                                />
                            </div>


                            {/* Logo text */}
                            <div>
                                <div className={`font-mono font-black text-[15px] md:text-[16px] tracking-[0.1em] uppercase transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[1px]" : "text-white"}`}
                                    style={{ textShadow: "0 0 12px rgba(57,211,83,0.3)" }}>
                                    PRAYAG_<span className="text-[#39d353]">SAHU</span>
                                    <Cursor />
                                </div>
                                <div className="font-mono text-[11px] text-[#39d353] tracking-[0.25em] uppercase">
                                    FULL_STACK_DEVELOPER
                                </div>
                            </div>
                        </div>

                        {/* CENTER: Nav links inside terminal-style container */}
                        <div className="flex items-center">
                            {/* Terminal border wrapper */}
                            <div className="border border-[#1a2332] bg-[#010409]/60 px-6 py-2 flex items-center gap-6 relative">
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#39d353]" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#39d353]" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#39d353]" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#39d353]" />

                                {navLinks.map(l => (
                                    <NavLink key={l.label} label={l.label} href={l.href} active={active} />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Status + CTA */}
                        <div className="flex items-center gap-3">
                            {/* Live status */}
                            <div className="flex items-center gap-1.5 border border-[#1a2332] px-2.5 py-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />
                                <span className="font-mono text-[10px] text-[#39d353] tracking-[0.2em]">AVAILABLE</span>
                            </div>

                            {/* Contact button */}
                            <a href="#contact"
                                className="group flex items-center gap-2 border border-[#39d353] font-mono text-[11px] tracking-[0.2em] uppercase px-4 py-2 text-[#39d353] transition-all duration-200 hover:bg-[#39d353] hover:text-[#010409] relative overflow-hidden">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{ background: "linear-gradient(90deg,transparent,rgba(57,211,83,0.1),transparent)" }} />
                                <Terminal size={11} />
                                CONTACT →
                            </a>
                        </div>
                    </nav>
                </div>

                {/* Scan line bottom */}
                <div className="h-[1px]"
                    style={{ background: "linear-gradient(to right, transparent, #1a2332, transparent)" }} />
            </header>

            {/* ─── MOBILE NAVBAR ──────────────────────────────────── */}
            <header
                className="fixed top-0 left-0 right-0 z-50 md:hidden"
                style={{
                    background: "rgba(1,4,9,0.97)",
                    backdropFilter: "blur(16px)",
                    borderBottom: "1px solid #1a2332",
                    fontFamily: "'Courier New', Courier, monospace",
                }}
            >
                {/* Green top bar */}
                <div className="h-[2px]"
                    style={{ background: "linear-gradient(to right, transparent, #39d353, transparent)" }} />

                {/* Mobile top row */}
                <div className="flex items-center justify-between px-4 py-3">

                    {/* Left: avatar + name */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 shrink-0">
                            <div className="absolute inset-0 border border-[#39d353] rounded-full"
                                style={{ boxShadow: "0 0 8px rgba(57,211,83,0.35)" }} />
                            <Image src="/images/hero3.png" alt="Prayag" width={28} height={28}
                                className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div>
                            <div className="font-mono font-black text-[11px] text-white tracking-widest">
                                PRAYAG_<span className="text-[#39d353]">SAHU</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-[#39d353] animate-pulse" />
                                <span className="font-mono text-[11px] text-[#39d353] tracking-[0.2em]">AVAILABLE</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: menu toggle */}
                    <button onClick={() => setOpen(!open)}
                        className="border border-[#1a2332] p-2 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-all duration-200 relative"
                        style={{ borderColor: open ? "#39d353" : "#1a2332", color: open ? "#39d353" : "#8b949e" }}>
                        {/* Corner dots */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l" style={{ borderColor: open ? "#39d353" : "#30363d" }} />
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r" style={{ borderColor: open ? "#39d353" : "#30363d" }} />
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l" style={{ borderColor: open ? "#39d353" : "#30363d" }} />
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r" style={{ borderColor: open ? "#39d353" : "#30363d" }} />
                        {open ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: open ? "420px" : "0", opacity: open ? 1 : 0 }}>

                    <div className="border-t border-[#1a2332] bg-[#0d1117]">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 px-5 py-2 border-b border-[#1a2332]">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[10px] text-[#8b949e] tracking-[0.2em]">NAVIGATION.sh</span>
                            <div className="ml-auto flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-[#39d353] animate-pulse" />
                                <span className="font-mono text-[11px] text-[#39d353] tracking-widest">OPEN</span>
                            </div>
                        </div>

                        {/* Nav links */}
                        <div className="flex flex-col">
                            {navLinks.map(l => (
                                <MobileLink key={l.label} label={l.label} href={l.href} active={active} onClick={closeMenu} />
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="p-4 border-t border-[#1a2332]">
                            <a href="#contact" onClick={closeMenu}
                                className="flex items-center justify-center gap-2 w-full border border-[#39d353] font-mono text-[12px] tracking-[0.2em] uppercase py-3 text-[#39d353] hover:bg-[#39d353] hover:text-[#010409] transition-all duration-200">
                                <Terminal size={12} />
                                $ CONTACT_ME →
                            </a>
                        </div>

                        {/* Terminal footer */}
                        <div className="px-5 pb-3 font-mono text-[10px] text-[#30363d] tracking-widest">
                            $ nav --open _ <span className="animate-pulse text-[#39d353]">█</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer so content doesn't hide under fixed navbar */}
            <div className="h-14" />
        </>
    );
}