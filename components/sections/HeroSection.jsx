
'use client';

import {
    useRef, useLayoutEffect, useState, useEffect,
    useMemo
} from 'react';
import Image from 'next/image';
import {
    motion,
    useScroll, useSpring, useTransform,
    useMotionValue, useVelocity, useAnimationFrame,
} from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faJava,
    faNodeJs,
    faReact,
    faFigma,
    faCss3Alt,
    faGitAlt
} from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import {
    RiLinkedinLine, RiGithubLine, RiTwitterXLine, RiPhoneLine, RiAddLine, RiCodeSSlashLine, RiGlobalLine
} from 'react-icons/ri';
import { Terminal, Download, ArrowDown, Zap, Code2, Globe, FileText } from 'lucide-react';

/* Basic UI parts used everywhere in this section */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 scanline-overlay"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,var(--scanline-color) 2px,var(--scanline-color) 4px)" }} />
    );
}
function CornerAccent({ color }) {
    const c = color || "var(--accent)";
    return (<>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: c }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: c }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: c }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: c }} />
    </>);
}
function Cursor() {
    return <span className="inline-block w-[10px] h-[20px] animate-pulse ml-1 align-middle" style={{ background: "var(--accent)" }} />;
}

/* 
   Moving Tech Icons 
   I made these icons move faster when you scroll down to make the page feel alive.
   The speed changes based on how fast you scroll.
*/
function useElementWidth(ref) {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        function update() { if (ref.current) setWidth(ref.current.offsetWidth); }
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return width;
}

function IconScrollVelocity({ icons = [], velocity = 80, numCopies = 6 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
        const range = max - min;
        return ((((v - min) % range) + range) % range) + min;
    }

    const x = useTransform(baseX, v => copyWidth ? `${wrap(-copyWidth, 0, v)}px` : '0px');
    const direction = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = direction.current * velocity * (delta / 1000);
        if (velocityFactor.get() < 0) direction.current = -1;
        else if (velocityFactor.get() > 0) direction.current = 1;
        moveBy += direction.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="relative overflow-hidden">
            <motion.div className="flex gap-4" style={{ x }}>
                {[...Array(numCopies)].map((_, i) => (
                    <div key={i} ref={i === 0 ? copyRef : null} className="flex gap-4">
                        {icons.map((IconEl, idx) => (
                            <div key={idx}
                                className="w-12 h-12 border transition-all duration-200 card-hover flex items-center justify-center"
                                style={{ borderColor: "var(--border)", background: "var(--surface)", fontFamily: "'Courier New'" }}>
                                {IconEl}
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

/* 
   My Profile Card (Moves with Mouse) 
   This card tilts when you move your mouse over it.
   I added a moving line effect to make it look like a real computer screen.
*/

function ProfileCard({ imageSrc, name, role }) {
    const [open, setOpen] = useState(true);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        setTilt({ x: dy * -12, y: dx * 12 });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div className="flex flex-col items-center" style={{ fontFamily: "'Courier New', Courier, monospace" }}>

            {/* CARD */}
            <div ref={cardRef}
                className="relative w-[300px] select-none transition-transform duration-200"
                style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Green glow border card */}
                <div className="border relative overflow-hidden card-hover"
                    style={{ borderColor: "var(--border)", background: "var(--surface)", borderTopWidth: 3, borderTopColor: "var(--accent)", borderTopStyle: "solid", boxShadow: "0 0 40px var(--accent-glow)" }}>
                    <ScanlineOverlay />
                    <CornerAccent />

                    {/* Window chrome */}
                    <div className="flex items-center justify-between px-5 py-3 border-b relative z-10" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                        <div className="flex items-center gap-2.5">
                            <div className="flex gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>PROFILE.exe</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                            <span className="font-mono text-[10px] border px-2 py-0.5 tracking-widest font-bold" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>ACTIVE</span>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="relative h-60 overflow-hidden border-b group" style={{ borderColor: "var(--border)" }}>

                        {/* Image */}
                        <Image
                            src={imageSrc}
                            alt={name}
                            fill
                            sizes="300px"
                            className="object-cover transition-all duration-700"
                            style={{
                                filter: "brightness(1.5) contrast(.5) saturate(0.9)"
                            }}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/20 pointer-events-none transition-all duration-700 group-hover:bg-black/20" />

                        {/* Gradient Bottom Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-t pointer-events-none" style={{ backgroundImage: "linear-gradient(to top, var(--surface) 0%, transparent 100%)" }} />

                        {/* Subtle Accent Glow Overlay */}
                        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10" style={{ background: "var(--accent)" }} />

                        {/* Scan Line (Working Animation) */}
                        <div className="absolute left-0 right-0 h-[1px] pointer-events-none scan-line"
                            style={{
                                background: "var(--accent)",
                                boxShadow: "0 0 8px var(--accent)"
                            }}
                        />

                    </div>

                    {/* Info */}
                    <div className="p-4 relative z-10">
                        <div className="font-mono font-black text-[17px] tracking-wide" style={{ color: "var(--text-primary)" }}>{name}</div>
                        <div className="font-mono text-[11px] tracking-[0.2em] mb-3" style={{ color: "var(--accent)" }}>{role}</div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-2.5 mb-5">
                            {[
                                { v: "4", l: "Hackathons" },
                                { v: "2", l: "Internships" },
                                { v: "8M", l: "Experience" },
                            ].map(s => (
                                <div key={s.l} className="border py-2.5 text-center" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                    <div className="font-mono font-black text-[16px]" style={{ color: "var(--text-primary)" }}>{s.v}</div>
                                    <div className="font-mono font-bold text-[10px] tracking-widest uppercase" style={{ color: "var(--accent)" }}>{s.l}</div>
                                </div>
                            ))}
                        </div>

                        {/* Social strip */}
                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                            <CornerAccent color="var(--border)" />
                            <div className="flex items-center gap-2 px-3 py-2">
                                <button onClick={() => setOpen(!open)}
                                    className="w-7 h-7 border flex items-center justify-center shrink-0 transition-all duration-300"
                                    style={{ borderColor: "var(--accent)", color: "var(--accent)", transform: open ? "rotate(45deg)" : "rotate(0)" }}>
                                    <RiAddLine size={14} />
                                </button>
                                {!open && (
                                    <span className="font-mono text-[10px] tracking-widest whitespace-nowrap" style={{ color: "var(--accent)" }}>SOCIAL_LINKS</span>
                                )}
                                {open && (
                                    <div className="flex items-center gap-3">
                                        {[
                                            { href: "https://linkedin.com/in/prayag-sahu29", icon: <RiLinkedinLine size={14} />, color: "var(--accent-blue)" },
                                            { href: "https://github.com/prayag29-sahu", icon: <RiGithubLine size={14} />, color: "var(--accent)" },
                                            {
                                                href: "https://www.interviewbit.com/profile/prayag-sahu_620/",
                                                icon: <RiCodeSSlashLine size={14} />,
                                                color: "var(--accent-amber)",
                                                label: "InterviewBit"
                                            },
                                            {
                                                href: "https://www.netacad.com/profile?tab=badges",
                                                icon: <RiGlobalLine size={14} />,
                                                color: "var(--accent-blue)"
                                            },

                                            { href: "https://twitter.com", icon: <RiTwitterXLine size={14} />, color: "var(--accent-purple)" },

                                        ].map((s, i) => (
                                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                                className="w-7 h-7 border flex items-center justify-center transition-all duration-200 hover:scale-110"
                                                style={{ color: s.color, borderColor: "var(--border)" }}
                                                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 0 8px ${s.color}40`; }}
                                                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                                                {s.icon}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HIRE + CALL buttons below card */}
            <div className="flex items-center gap-3 mt-4 w-full">
                <a href="#contact"
                    className="flex-1 flex items-center justify-center gap-2 border font-mono text-[11px] tracking-[0.18em] uppercase py-3 transition-all duration-200 hover:bg-theme-accent hover:text-white"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                    <Terminal size={13} /> HIRE_ME →
                </a>
                <a href="tel:+917999926855"
                    className="flex-1 flex items-center justify-center gap-2 border font-mono text-[11px] tracking-[0.18em] uppercase py-3 transition-all duration-200 hover:border-theme-blue hover:text-theme-blue relative overflow-hidden group"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)", animation: "phone-pulse 2.5s infinite" }}>
                    <RiPhoneLine size={14} className="group-hover:animate-bounce" />
                    CALL →
                </a>
            </div>
        </div>
    );
}

/* The icons for technologies I use */
const techIcons = [
    <FontAwesomeIcon icon={faReact} className="text-2xl" style={{ color: '#61DBFB' }} />,
    <FontAwesomeIcon icon={faFigma} className="text-2xl" style={{ color: '#F24E1E' }} />,
    <FontAwesomeIcon icon={faJava} className="text-2xl" style={{ color: '#f89820' }} />,
    <FontAwesomeIcon icon={faDatabase} className="text-2xl" style={{ color: '#4DB33D' }} />,
    <FontAwesomeIcon icon={faNodeJs} className="text-2xl" style={{ color: '#68A063' }} />,
    <FontAwesomeIcon icon={faCss3Alt} className="text-2xl" style={{ color: '#264de4' }} />,
    <FontAwesomeIcon icon={faGitAlt} className="text-2xl" style={{ color: '#f05032' }} />,
];

/* 
   Hero Section (The first part of the page) 
   I divided this into three columns to show more information clearly,
   making it look like a professional computer dashboard.
*/
export default function HeroSection() {
    const [glitch, setGlitch] = useState(false);
    const [typed, setTyped] = useState('');
    const roles = ['FULL_STACK_DEVELOPER', 'MERN_STACK_SPECIALIST', 'UI/UX_DESIGNER', 'OPEN_SOURCE_CONTRIBUTOR'];
    const [roleIdx, setRoleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [showDownloadMenu, setShowDownloadMenu] = useState(false);

    // Glitch effect
    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 5000);
        return () => clearInterval(t);
    }, []);

    // Typewriter for roles
    useEffect(() => {
        const role = roles[roleIdx];
        let timeout;
        if (!deleting && charIdx < role.length) {
            timeout = setTimeout(() => setCharIdx(c => c + 1), 60);
        } else if (!deleting && charIdx === role.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => setCharIdx(c => c - 1), 35);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setRoleIdx(r => (r + 1) % roles.length);
        }
        setTyped(role.slice(0, charIdx));
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, roleIdx]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}
        >
            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
            {/* Ambient glows */}
            <div className="absolute top-1/3 left-0 w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none" style={{ background: "var(--accent)", opacity: 0.03 }} />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "var(--accent-blue)", opacity: 0.02 }} />

            {/* Top green line */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }} />

            {/* Module tag */}
            <div className="absolute top-6 left-20 ml-20 flex items-center gap-3 z-10">
                <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase font-bold" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / HERO</span>
            </div>

            {/* ── MAIN GRID ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-7 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    {/* ═══ LEFT PANEL ═══ */}
                    <div className="flex flex-col gap-6">

                        {/* Header terminal box */}
                        <div className="border relative overflow-hidden"
                            style={{ borderColor: "var(--border)", background: "var(--surface)", borderLeftWidth: 3, borderLeftColor: "var(--accent)" }}>
                            <ScanlineOverlay />
                            <CornerAccent />
                            <div className="flex items-center gap-2.5 px-5 py-3 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <div className="flex gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>INTRO.txt</span>
                            </div>
                            <div className="p-6 relative z-10">
                                <div className="font-mono text-[11px] tracking-[0.2em] mb-4" style={{ color: "var(--accent)" }}>$ whoami</div>
                                <div className="space-y-1.5 font-mono text-[13px] font-bold" style={{ color: "var(--text-muted)" }}>
                                    <div><span style={{ color: "var(--border-dim)" }}>→</span> Prayag Sahu</div>
                                    <div><span style={{ color: "var(--border-dim)" }}>→</span> <span style={{ color: "var(--accent)" }}>Full Stack Developer — MERN Stack</span></div>
                                    <div><span style={{ color: "var(--border-dim)" }}>→</span> RGPV University, MP</div>
                                </div>
                            </div>
                        </div>

                        {/* BIG TITLE — FULL STACK */}
                        <div className="relative">
                            <div className={`font-mono font-black leading-none transition-all duration-75 ${glitch ? "translate-x-[3px]" : ""}`}
                                style={{
                                    color: glitch ? "var(--accent)" : "var(--text-primary)",
                                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                    letterSpacing: "0.04em",
                                    textShadow: "0 0 40px var(--accent-glow)",
                                }}>
                                FULL
                            </div>
                            <div className={`font-mono font-black leading-none transition-all duration-75 ${glitch ? "translate-x-[-3px]" : ""}`}
                                style={{
                                    color: "var(--accent)",
                                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                    letterSpacing: "0.04em",
                                    textShadow: "0 0 40px var(--accent-glow)",
                                }}>
                                STACK
                                <Cursor />
                            </div>
                        </div>

                        {/* Typewriter role */}
                        <div className="p-5 font-mono text-[13px] border-t" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />
                                <span className="text-[10px] tracking-[0.2em] font-bold" style={{ color: "var(--accent-amber)" }}>$ role --current</span>
                            </div>
                            <div className="font-bold flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                                <Terminal size={14} className="text-dim" />
                                MERN_STACK_PRODUCTION_DEV<span className="animate-pulse">█</span>
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { v: "4+", l: "PROJECTS", c: "var(--accent)" },
                                { v: "2+", l: "CLIENTS", c: "var(--accent-blue)" },
                                { v: "5K+", l: "COMMITS", c: "var(--accent-amber)" },
                            ].map(s => (
                                <div key={s.l} className="border p-3 relative overflow-hidden group transition-colors duration-200 card-hover" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                                    <div className="font-mono font-black text-[24px] transition-colors duration-200" style={{ color: "var(--text-primary)" }}>{s.v}</div>
                                    <div className="font-mono text-[9px] tracking-[0.2em] font-bold" style={{ color: s.c }}>{s.l}</div>
                                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-500" style={{ background: s.c }} />
                                </div>
                            ))}
                        </div>

                        {/* Download CV + Contact */}
                        <div className="flex gap-3 relative">
                            <div className="flex-1 relative">
                                <button
                                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                                    className="w-full flex items-center justify-center gap-2 font-mono font-bold text-[11px] tracking-[0.2em] uppercase py-3.5 transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)]"
                                    style={{ background: "var(--accent)", color: "var(--bg)" }}
                                >
                                    <Download size={13} />
                                    {showDownloadMenu ? "SELECT_FILE" : "DOWNLOAD_FILES"} {showDownloadMenu ? "↑" : "↓"}
                                </button>

                                {/* Dropdown Menu */}
                                {showDownloadMenu && (
                                    <div className="absolute bottom-full left-0 w-full mb-2 border z-20 overflow-hidden animate-scale-in"
                                        style={{ borderColor: "var(--accent)", background: "var(--surface)" }}>
                                        <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                                            <span className="font-mono text-[9px] tracking-widest text-theme-muted">STORAGE_DRIVE / PUBLIC</span>
                                        </div>
                                        <div className="p-1">
                                            <a href="/Resume.pdf" download="Prayag_Sahu_Resume.pdf"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all group/opt"
                                                onClick={() => setShowDownloadMenu(false)}>
                                                <FileText size={14} className="text-theme-accent group-hover/opt:text-current" />
                                                <div className="flex flex-col">
                                                    <span className="font-mono text-[10px] font-black tracking-widest">RESUME.pdf</span>
                                                    <span className="font-mono text-[8px] opacity-60">ATS_OPTIMIZED_V2</span>
                                                </div>
                                            </a>
                                            <div className="h-[1px] w-full" style={{ background: "var(--border)" }} />
                                            <a href="/CV.pdf" download="Prayag_Sahu_CV.pdf"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--accent-blue)] hover:text-[var(--bg)] transition-all group/opt"
                                                onClick={() => setShowDownloadMenu(false)}>
                                                <FileText size={14} className="text-[var(--accent-blue)] group-hover/opt:text-current" />
                                                <div className="flex flex-col">
                                                    <span className="font-mono text-[10px] font-black tracking-widest">CV.pdf</span>
                                                    <span className="font-mono text-[8px] opacity-60">FULL_PORTFOLIO_CV</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <a href="#contact"
                                className="flex items-center gap-2 border font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-3.5 transition-all duration-200"
                                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                                <Terminal size={13} />
                            </a>
                        </div>
                    </div>

                    {/* ═══ CENTER — Profile Card ═══ */}
                    <div className="flex justify-center">
                        <ProfileCard imageSrc="/images/main.png" name="Prayag Sahu" role="3rd Year CSE @ RGPV University" />
                    </div>

                    {/* ═══ RIGHT PANEL ═══ */}
                    <div className="flex flex-col gap-5">

                        {/* Icon scroll strip */}
                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent-blue)" />
                            <div className="flex items-center gap-2.5 px-5 py-3 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-blue)" }} />
                                <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>TECH_STACK.live</span>
                            </div>
                            <div className="py-5 relative z-10">
                                <IconScrollVelocity velocity={90} icons={techIcons} numCopies={6} />
                            </div>
                        </div>


                        {/* Bio panel */}
                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent-amber)" />
                            <div className="flex items-center gap-2.5 px-5 py-3 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-amber)" }} />
                                <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>README.md</span>
                            </div>
                            <div className="p-6 relative z-10">
                                <p className="font-mono text-[14px] leading-[1.85] tracking-wide" style={{ color: "var(--text-muted)" }}>
                                    Full Stack Developer building web applications that run in{" "}
                                    <span style={{ color: "var(--accent)", fontWeight: 700 }}>production</span>,
                                    not just on localhost. Architecting
                                    <span style={{ color: "var(--accent-blue)", fontWeight: 700 }}> scalable MERN solutions</span>{" "}
                                    for businesses and real clients.
                                </p>
                            </div>
                        </div>

                        {/* Rendered large DEVELOPER */}
                        <div className="text-right -mt-4 -mb-5">
                            <span className={`font-mono font-black transition-all duration-75`}
                                style={{
                                    color: glitch ? "var(--accent)" : "var(--text-primary)",
                                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                                    letterSpacing: "0.04em",
                                    textShadow: "0 0 30px var(--accent-glow)",
                                }}>
                                DEVELOPER
                            </span>
                        </div>

                        {/* Key skills chips */}
                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent-purple)" />
                            <div className="flex items-center gap-2.5 px-5 py-3 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <Code2 size={13} style={{ color: "var(--accent-purple)" }} />
                                <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>CORE_SKILLS.sh</span>
                            </div>
                            <div className="p-5 flex flex-wrap gap-2.5 relative z-10">
                                {["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind", "Java", "C++", "Figma"].map(s => (
                                    <span key={s} className="font-mono text-[12px] border px-3 py-1.5 transition-all duration-200 cursor-default font-bold" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)", color: "var(--text-muted)" }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="border relative overflow-hidden"
                            style={{ borderColor: "var(--accent)", background: "color-mix(in srgb, var(--accent) 12%, transparent)", boxShadow: "0 0 20px var(--accent-glow)" }}>
                            <CornerAccent />
                            <div className="flex items-center justify-between px-5 py-3.5 relative z-10">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                                    <span className="font-mono text-[12px] font-bold tracking-[0.2em]" style={{ color: "var(--accent)" }}>OPEN_TO_WORK</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Zap size={13} style={{ color: "var(--accent-amber)" }} />
                                    <span className="font-mono text-[11px] tracking-widest font-bold" style={{ color: "var(--accent-amber)" }}>RESPONSE &lt;24H</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <div className="font-mono text-[10px] tracking-[0.3em] font-bold" style={{ color: "var(--text-dim)" }}>SCROLL_DOWN</div>
                <div className="w-6 h-10 border rounded-full flex justify-center pt-2 transition-colors duration-300"
                    style={{ borderColor: "var(--accent)", animation: "bounce 2s infinite" }}>
                    <div className="w-1.5 h-2.5 rounded-full" style={{ background: "var(--accent)", animation: "scroll-dot 2s infinite" }} />
                </div>
                <ArrowDown size={12} style={{ color: "var(--text-dim)", animation: "bounce 2s infinite 0.3s" }} />
            </div>

            <style jsx>{`
                
        @keyframes scan-line {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        .animate-scan-line {
          position: absolute;
          animation: scan-line 4s linear infinite;
        }
        @keyframes scroll-dot {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(6px); }
        }
        @keyframes phone-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,229,255,0); }
          50% { box-shadow: 0 0 0 6px rgba(0,229,255,0.1); }
        }
        .scan-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent);
        box-shadow: 0 0 12px var(--accent), 0 0 20px var(--accent);
        animation: scanMove 3s linear infinite;
    }

    .scan-area {
        position: absolute;
        left: 0;
        width: 100%;
        height: 60px;
        background: linear-gradient(
            to bottom,
            var(--accent-glow),
            transparent
        );
        animation: scanMove 3s linear infinite;
    }

    @keyframes scanMove {
        0% {
            top: -60px;
        }
        100% {
            top: 100%;
        }
    }
      `}</style>
        </section>
    );
}