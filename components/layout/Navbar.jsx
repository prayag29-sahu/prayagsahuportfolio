'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/components/providers/ThemeProvider';

/* The menu links */
const navLinks = [
    // { label: "HOME",         href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "EDUCATION", href: "#education" },
    { label: "PROJECTS", href: "#projects" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "CONTACT", href: "#contact" },
];

/* Blinking computer-style cursor */
function Cursor() {
    return <span className="inline-block w-[6px] h-[11px] bg-[var(--accent)] animate-pulse ml-0.5 align-middle" />;
}

/* 
   Current page section tracker 
   I made it so the menu highlights the section you are currently looking at 
   as you scroll down the page.
*/
function useActiveSection() {
    const [active, setActive] = useState("home");
    useEffect(() => {
        const ids = navLinks.map(l => l.href.replace("#", ""));
        const obs = new IntersectionObserver(
            entries => {
                entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { threshold: 0.25 }
        );
        ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
        return () => obs.disconnect();
    }, []);
    return active;
}

/* Dark/Light Mode Switch */
function ThemeToggle({ compact = false }) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
            style={{ width: compact ? 32 : 36, height: compact ? 32 : 36 }}
        >
            {isDark
                ? <Sun size={compact ? 13 : 15} />
                : <Moon size={compact ? 13 : 15} />
            }
        </button>
    );
}

/* Menu item for computers */
function NavLink({ label, href, active }) {
    const isActive = active === href.replace("#", "");
    return (
        <a
            href={href}
            className="group relative font-mono text-[13px] tracking-[0.18em] uppercase transition-all duration-200 font-bold"
            style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--text-primary)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--text-muted)"; }}
        >
            {isActive && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 font-mono text-[var(--accent)] text-[12px]">▸</span>
            )}
            {label}
            <div
                className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--accent)" }}
            />
        </a>
    );
}

/* Menu item for phones */
function MobileLink({ label, href, active, onClick }) {
    const isActive = active === href.replace("#", "");
    return (
        <a
            href={href}
            onClick={onClick}
            className="flex items-center gap-3 px-5 py-3 transition-all duration-200"
            style={{
                borderBottom: `1px solid var(--border)`,
                borderLeft: `2px solid ${isActive ? "var(--accent)" : "transparent"}`,
                background: isActive ? "var(--surface-2)" : "transparent",
            }}
        >
            <span className="font-mono text-[12px] font-bold" style={{ color: isActive ? "var(--accent)" : "var(--border-dim)" }}>
                {isActive ? "▸" : "$"}
            </span>
            <span
                className="font-mono text-[12px] tracking-[0.18em] uppercase transition-colors duration-200 font-bold"
                style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
            >
                {label}
            </span>
            {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />}
        </a>
    );
}

/* 
   The Top Menu Bar 
   This menu stays at the top and changes its look for 
   computers and mobile phones.
*/
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
        const t = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 100);
        }, 8000);
        return () => clearInterval(t);
    }, []);

    // Close menu on route change / resize
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <>
            {/* Desktop Layout */}
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block"
                style={{
                    background: scrolled
                        ? "var(--surface)"
                        : "var(--bg-transparent)",
                    backdropFilter: "blur(16px)",
                    borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
                    boxShadow: scrolled ? "0 1px 20px rgba(57,211,83,0.04)" : "none",
                    fontFamily: "'Courier New', Courier, monospace",
                }}
            >
                {/* Thin accent top bar */}
                <div className="h-[2px] w-full"
                    style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }} />

                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex items-center justify-between h-14 gap-4">

                        {/* LEFT: Logo + avatar */}
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="relative w-10 h-10 shrink-0">
                                <div
                                    className="absolute inset-0 rounded-full border-2"
                                    style={{ borderColor: "var(--accent)", boxShadow: "0 0 10px var(--accent-glow)" }}
                                />
                                <Image
                                    src="/images/icon.png"
                                    alt="Prayag Sahu"
                                    fill
                                    sizes="40px"
                                    priority
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <div
                                    className={`font-mono font-black text-[18px] tracking-[0.1em] uppercase transition-all duration-75 ${glitch ? "translate-x-[1px]" : ""}`}
                                    style={{
                                        color: glitch ? "var(--accent)" : "var(--text-primary)",
                                        textShadow: "0 0 12px var(--accent-glow)",
                                    }}
                                >
                                    PRAYAG_<span style={{ color: "var(--accent)" }}>SAHU</span>
                                    <Cursor />
                                </div>
                                {/* <div className="font-mono text-[11px] tracking-[0.22em] uppercase font-bold" style={{ color: "var(--accent)" }}>
                                    FULL_STACK_DEV
                                </div> */}
                            </div>
                        </div>

                        {/* CENTER: Nav links inside terminal container */}
                        <div className="flex items-center flex-1 justify-center">
                            <div
                                className="border px-6 py-2.5 flex items-center gap-6 relative"
                                style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: "var(--accent)" }} />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: "var(--accent)" }} />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: "var(--accent)" }} />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: "var(--accent)" }} />

                                {navLinks.map(l => (
                                    <NavLink key={l.label} label={l.label} href={l.href} active={active} />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Status + theme toggle + CTA */}
                        <div className="flex items-center gap-2.5 shrink-0">
                            {/* Live status */}
                            <div
                                className="flex items-center gap-2 border px-3 py-1.5 font-bold"
                                style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
                            >
                                <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                                <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--accent)" }}>AVAILABLE</span>
                            </div>

                            {/* Theme toggle */}
                            <ThemeToggle />

                            {/* Contact CTA */}
                            <a
                                href="#contact"
                                className="group flex items-center gap-2.5 border font-mono text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 transition-all duration-200 relative overflow-hidden font-bold"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "var(--accent)";
                                    e.currentTarget.style.color = "var(--bg)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--accent)";
                                }}
                            >
                                <Terminal size={13} />
                                CONTACT
                            </a>
                        </div>
                    </nav>
                </div>

                <div className="h-[1px]"
                    style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }} />
            </header>

            {/* Mobile Layout */}
            <header
                className="fixed top-0 left-0 right-0 z-50 md:hidden"
                style={{
                    background: "var(--surface)",
                    backdropFilter: "blur(16px)",
                    borderBottom: `1px solid var(--border)`,
                    fontFamily: "'Courier New', Courier, monospace",
                }}
            >
                {/* Accent bar */}
                <div className="h-[2px]"
                    style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }} />

                {/* Mobile top row */}
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-9 h-9 shrink-0">
                            <div className="absolute inset-0 border rounded-full"
                                style={{ borderColor: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }} />
                            <Image src="/images/icon.png" alt="Prayag" width={100} height={100}
                                className="w-full h-full rounded-full object-cover" priority={true} />
                        </div>
                        <div>
                            <div className="font-mono font-black text-[12px] tracking-widest" style={{ color: "var(--text-primary)" }}>
                                PRAYAG_<span style={{ color: "var(--accent)" }}>SAHU</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                                <span className="font-mono text-[9px] tracking-[0.18em]" style={{ color: "var(--accent)" }}>SOFTWARE ENGINEER FULL STACK </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: theme toggle + hamburger */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle compact />
                        <button
                            onClick={() => setOpen(!open)}
                            className="border p-2 transition-all duration-200"
                            style={{
                                borderColor: open ? "var(--accent)" : "var(--border)",
                                color: open ? "var(--accent)" : "var(--text-muted)",
                                background: "var(--surface-2)",
                            }}
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={16} /> : <Menu size={16} />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}
                >
                    <div style={{ borderTop: `1px solid var(--border)`, background: "var(--surface)" }}>
                        {/* Terminal header bar */}
                        <div className="flex items-center gap-2 px-5 py-2.5" style={{ borderBottom: `1px solid var(--border)` }}>
                            <div className="flex gap-1">
                                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>NAVIGATION.sh</span>
                            <div className="ml-auto flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                                <span className="font-mono text-[9px] tracking-widest" style={{ color: "var(--accent)" }}>OPEN</span>
                            </div>
                        </div>

                        {/* Nav links */}
                        <div className="flex flex-col">
                            {navLinks.map(l => (
                                <MobileLink key={l.label} label={l.label} href={l.href} active={active} onClick={closeMenu} />
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="p-4" style={{ borderTop: `1px solid var(--border)` }}>
                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 w-full border font-mono text-[12px] tracking-[0.18em] uppercase py-3.5 transition-all duration-200 font-bold"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "var(--accent)";
                                    e.currentTarget.style.color = "var(--bg)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--accent)";
                                }}
                            >
                                <Terminal size={14} />
                                $ CONTACT_ME →
                            </a>
                        </div>

                        {/* Terminal footer */}
                        <div className="px-5 pb-3 font-mono text-[9px] tracking-widest" style={{ color: "var(--text-dim)" }}>
                            $ nav --open _ <span className="animate-pulse" style={{ color: "var(--accent)" }}>█</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Spacer so content doesn't hide under fixed navbar */}
            <div className="h-14" />
        </>
    );
}