'use client';

import Image from 'next/image';
import { useState, useEffect } from "react";
import {
    RiReactjsLine, RiNodejsLine, RiDatabase2Line, RiAndroidLine,
    RiLightbulbFlashLine, RiGraduationCapLine, RiFocus3Line, RiRocketLine,
} from "react-icons/ri";
import { MapPin, GraduationCap, Briefcase, Rocket, ChevronDown } from "lucide-react";

/* Shared UI primitives for layout consistency */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,var(--scanline-color) 2px,var(--scanline-color) 4px)" }} />
    );
}

function CornerAccent({ color = "var(--accent)" }) {
    return (<>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: color }} />
    </>);
}

function WindowChrome({ filename, status = "LIVE", statusColor = "var(--accent)" }) {
    return (
        <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
            <div className="flex items-center gap-3">
                <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] md:text-[13px] tracking-[0.2em] truncate max-w-[150px] md:max-w-none" style={{ color: "var(--text-muted)" }}>{filename}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] border px-2 py-0.5 font-bold whitespace-nowrap" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

function Cursor() {
    return <span className="inline-block w-[8px] h-[14px] animate-pulse ml-1 align-middle" style={{ background: "var(--accent)" }} />;
}

/* 
   Typewriter Effect
   I implemented this to mimic a real terminal command execution, 
   adding to the immersive developer portfolio experience.
*/
function TypewriterText({ text, speed = 55 }) {
    const [out, setOut] = useState("");
    const [done, setDone] = useState(false);
    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            if (i < text.length) { setOut(text.slice(0, ++i)); }
            else { setDone(true); clearInterval(t); }
        }, speed);
        return () => clearInterval(t);
    }, [text, speed]);
    return <>{out}{!done && <span className="animate-pulse" style={{ color: "var(--accent)" }}>█</span>}</>;
}

/* Quick info pill */
function InfoPill({ icon, text, accent = "var(--accent)" }) {
    return (
        <div className="flex items-center gap-3 border px-4 py-3 group transition-colors duration-200" 
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
            <span style={{ color: accent }} className="shrink-0 group-hover:scale-110 transition-transform">{icon}</span>
            <span className="font-mono text-[11px] md:text-[12px] tracking-wide group-hover:text-primary transition-colors duration-200" style={{ color: "var(--text-muted)" }}>{text}</span>
        </div>
    );
}

/* Modular Accordion Component */
function AccordionItem({ icon, title, desc, isOpen, onToggle, accent = "var(--accent)" }) {
    return (
        <div className="border relative overflow-hidden transition-all duration-200 group"
            style={{ borderColor: isOpen ? accent : "var(--border)", background: "var(--bg)" }}>
            <CornerAccent color={isOpen ? accent : "var(--border)"} />
            <button className="w-full flex items-center justify-between px-4 py-3.5 relative z-10" onClick={onToggle}>
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 border flex items-center justify-center text-sm transition-all duration-200"
                        style={{ borderColor: isOpen ? accent : "var(--border)", color: isOpen ? accent : "var(--text-muted)", background: isOpen ? `${accent}15` : "transparent" }}>
                        {icon}
                    </div>
                    <span className="font-mono text-[13px] tracking-[0.15em] uppercase text-left" style={{ color: isOpen ? accent : "var(--text-primary)" }}>{title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[10px] tracking-widest" style={{ color: isOpen ? accent : "var(--text-dim)" }}>{isOpen ? "CLOSE" : "OPEN"}</span>
                    <ChevronDown size={14} className="transition-transform duration-300" style={{ color: isOpen ? accent : "var(--text-dim)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </div>
            </button>
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "200px" : "0" }}>
                <div className="px-4 pb-4 relative z-10 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex items-start gap-2 pt-3">
                        <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: accent }}>▸</span>
                        <p className="font-mono text-[13px] leading-relaxed tracking-wide" style={{ color: "var(--text-muted)" }}>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Professional expertise and traits data */
const skills = [
    { icon: <RiReactjsLine />, title: "Frontend Engineering", desc: "Building responsive, accessible user interfaces using HTML, CSS, JavaScript, React, Next.js and Tailwind CSS with performance-first architecture." },
    { icon: <RiNodejsLine />, title: "Backend & API Systems", desc: "Developing scalable REST APIs using Node.js and Express including authentication, authorization and secure server logic." },
    { icon: <RiDatabase2Line />, title: "Database Architecture", desc: "Designing optimized relational schemas using PostgreSQL with efficient queries, indexing strategies and clean data modeling." },
    { icon: <RiAndroidLine />, title: "Mobile Development", desc: "Building cross-platform mobile applications using React Native integrated with backend services and APIs." },
];

const traits = [
    { icon: <RiLightbulbFlashLine />, title: "Core Strengths", desc: "Hardworking, self-motivated and detail-oriented developer with strong analytical thinking and problem-solving ability." },
    { icon: <RiGraduationCapLine />, title: "Technical Foundation", desc: "Computer Science student with solid fundamentals in programming, data structures and modern web development." },
    { icon: <RiFocus3Line />, title: "Career Vision", desc: "Focused on building a long-term career as a software engineer by continuously improving technical depth and system design understanding." },
    { icon: <RiRocketLine />, title: "Growth Mindset", desc: "Actively learning new technologies and frameworks to stay aligned with evolving industry standards." },
];

/* 
   Main About Section 
   Structured as a multi-panel terminal interface to balance text density with visuals.
*/
export default function AboutSection() {
    const [activeSkill, setActiveSkill] = useState(null);
    const [activeTrait, setActiveTrait] = useState(null);
    const [glitch, setGlitch] = useState(false);
    const [showExpertise, setShowExpertise] = useState(false);
    const [showQualities, setShowQualities] = useState(false);

    useEffect(() => {
        const t = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 120);
        }, 6500);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative py-10 md:py-14 overflow-hidden" id='about' style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}>
            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)`, backgroundSize: "40px 40px" }} />
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "var(--accent)", opacity: 0.03 }} />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "var(--accent-blue)", opacity: 0.02 }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* ── HEADER ── */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent-glow)]" style={{ background: "var(--accent)" }} />
                        <span className="font-mono text-[11px] tracking-[0.3em] uppercase font-bold" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / ABOUT</span>
                    </div>
                    <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent />
                        <WindowChrome filename="ABOUT_ME.txt" />
                        <div className="px-6 md:px-8 py-8">
                            <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-[0.06em] uppercase transition-all duration-75 ${glitch ? "translate-x-[2px]" : ""}`}
                                style={{ color: glitch ? "var(--accent)" : "var(--text-primary)", textShadow: "0 0 24px var(--accent-glow)" }}>
                                ABOUT_<span style={{ color: "var(--accent)" }}>ME</span><Cursor />
                            </h2>
                            <p className="font-mono text-[13px] mt-4 tracking-wider" style={{ color: "var(--text-muted)" }}>$ cat ./about/profile.txt — I build full-stack web applications that run in production.</p>
                        </div>
                    </div>
                </div>

                {/* ── TOP SECTION: IMAGE + BIO ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mb-6">
                    {/* Image panel */}
                    <div className="border relative overflow-hidden group transition-colors duration-300 card-hover" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent />
                        <WindowChrome filename="PROFILE_IMG.png" status="LOADED" statusColor="var(--accent-blue)" />
                        <div className="p-4 relative z-10">
                            <div className="relative border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                                <CornerAccent color="var(--accent)" />
                                <Image src="/images/portfolio.png" alt="Prayag Sahu" width={400} height={500} className="w-full object-cover transition-all duration-700" style={{ filter: "brightness(1) contrast(1.1)" }} />
                                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                {[
                                    { label: "STATUS", value: "OPEN TO ROLES", color: "var(--accent)" },
                                    { label: "CGPA", value: "8.35 / 10", color: "var(--accent-blue)" },
                                    { label: "BASE", value: "MP, INDIA", color: "var(--accent-amber)" },
                                    { label: "DEGREE", value: "B.TECH CSE", color: "var(--accent-purple)" },
                                ].map((s) => (
                                    <div key={s.label} className="border px-3 py-2" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                        <div className="font-mono text-[8px] tracking-[0.2em] font-bold" style={{ color: "var(--text-dim)" }}>{s.label}</div>
                                        <div className="font-mono text-[11px] font-bold" style={{ color: s.color }}>{s.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bio panel */}
                    <div className="border relative overflow-hidden transition-colors duration-300 flex flex-col card-hover" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent-blue)" />
                        <WindowChrome filename="BIO_DATA.txt" status="ONLINE" statusColor="var(--accent-blue)" />
                        <div className="p-7 relative z-10 flex flex-col flex-1">
                            <div className="mb-5">
                                <div className="font-mono text-[12px] tracking-[0.2em] mb-1 font-bold" style={{ color: "var(--text-dim)" }}>$ whoami</div>
                                <h3 className="font-mono font-black text-2xl md:text-3xl tracking-tight" style={{ color: "var(--text-primary)", textShadow: "0 0 16px var(--accent-glow)" }}>
                                    <TypewriterText text="PRAYAG SAHU" speed={70} />
                                </h3>
                                <p className="font-mono text-[11px] tracking-[0.18em] mt-1" style={{ color: "var(--accent-blue)" }}>FULL STACK DEVELOPER · MERN STACK SPECIALIST</p>
                            </div>
                            <div className="border p-6 mb-6 relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <CornerAccent color="var(--border-dim)" />
                                <div className="font-mono text-[11px] tracking-[0.2em] mb-4 font-bold" style={{ color: "var(--accent)" }}>README.md</div>
                                <div className="space-y-4 font-mono text-[13px] leading-[1.8] font-bold" style={{ color: "var(--text-muted)" }}>
                                    <p>
                                        Production-focused <span style={{ color: "var(--accent)" }}>Full Stack Developer</span> dedicated to delivering end-to-end commercial web platforms. I bring hands-on experience in <span style={{ color: "var(--accent-purple)" }}>complex data management</span> and system architecture, proven by the successful launch of <span style={{ color: "var(--accent-blue)" }}>ghotulstays.com</span>.
                                    </p>
                                    <p>
                                        I specialize in utilizing the <span style={{ color: "var(--accent)" }}>MERN stack</span> to build highly responsive and user-centric applications that solve real-world business challenges.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                                <InfoPill icon={<MapPin size={13} />} text="Jabalpur, Madhya Pradesh" accent="var(--accent)" />
                                <InfoPill icon={<GraduationCap size={13} />} text="B.Tech CSE — RGPV University" accent="var(--accent-blue)" />
                                <InfoPill icon={<Briefcase size={13} />} text="Creative Developer" accent="var(--accent-amber)" />
                                <InfoPill icon={<Rocket size={13} />} text="Open to Opportunities" accent="var(--accent-purple)" />
                            </div>
                        </div>
                        <div className="px-7 py-3 border-t flex items-center justify-between relative z-10" style={{ borderColor: "var(--border)" }}>
                            <div className="font-mono text-[9px]" style={{ color: "var(--text-dim)" }}>$ <span style={{ color: "var(--text-muted)" }}>cat bio.txt _</span></div>
                            <a href="#" className="flex items-center gap-2 border font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-200" 
                                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}>
                                PORTFOLIO →
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM SECTION: ACCORDIONS ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Core Expertise */}
                    <div className="border relative overflow-hidden transition-colors duration-300 card-hover" style={{ borderColor: showExpertise ? "var(--accent)" : "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent)" />
                        <div onClick={() => setShowExpertise(!showExpertise)} className="cursor-pointer group/header relative z-20">
                            <WindowChrome filename="CORE_EXPERTISE.log" status={showExpertise ? "OPEN" : "CLOSED"} statusColor="var(--accent)" />
                            <div className="absolute right-24 md:right-32 top-1/2 -translate-y-1/2 flex items-center gap-2 md:gap-3">
                                <span className="font-mono text-[9px] md:text-[11px] font-black tracking-[0.2em] transition-all duration-200" style={{ color: "var(--accent)" }}>
                                    {showExpertise ? "COLLAPSE" : "EXPAND"}
                                </span>
                                <ChevronDown size={14} className={`transition-all duration-300 ${!showExpertise ? "animate-bounce" : ""}`} style={{ color: "var(--accent)", transform: showExpertise ? "rotate(180deg)" : "rotate(0deg)" }} />
                            </div>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showExpertise ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="p-6 relative z-10 border-t" style={{ borderColor: "var(--border)" }}>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="font-mono text-[11px] tracking-[0.2em] mb-1" style={{ color: "var(--accent)" }}>$ ls ./skills/</div>
                                        <h3 className="font-mono font-black text-lg tracking-[0.1em] uppercase" style={{ color: "var(--text-primary)" }}>CORE_EXPERTISE</h3>
                                    </div>
                                    <div className="border px-3 py-1" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                                        <span className="font-mono text-[9px] tracking-widest" style={{ color: "var(--accent)" }}>{skills.length} MODULES</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {skills.map((skill, i) => (
                                        <AccordionItem key={i} icon={skill.icon} title={skill.title} desc={skill.desc} isOpen={activeSkill === i} onToggle={() => setActiveSkill(activeSkill === i ? null : i)} accent="var(--accent)" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Qualities */}
                    <div className="border relative overflow-hidden transition-colors duration-300 card-hover" style={{ borderColor: showQualities ? "var(--accent-blue)" : "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent-blue)" />
                        <div onClick={() => setShowQualities(!showQualities)} className="cursor-pointer group/header relative z-20">
                            <WindowChrome filename="CORE_QUALITIES.log" status={showQualities ? "OPEN" : "CLOSED"} statusColor="var(--accent-blue)" />
                            <div className="absolute right-24 md:right-32 top-1/2 -translate-y-1/2 flex items-center gap-2 md:gap-3">
                                <span className="font-mono text-[9px] md:text-[11px] font-black tracking-[0.2em] transition-all duration-200" style={{ color: "var(--accent-blue)" }}>
                                    {showQualities ? "COLLAPSE" : "EXPAND"}
                                </span>
                                <ChevronDown size={14} className={`transition-all duration-300 ${!showQualities ? "animate-bounce" : ""}`} style={{ color: "var(--accent-blue)", transform: showQualities ? "rotate(180deg)" : "rotate(0deg)" }} />
                            </div>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showQualities ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="p-6 relative z-10 border-t" style={{ borderColor: "var(--border)" }}>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <div className="font-mono text-[11px] tracking-[0.2em] mb-1" style={{ color: "var(--accent-blue)" }}>$ ls ./traits/</div>
                                        <h3 className="font-mono font-black text-lg tracking-[0.1em] uppercase" style={{ color: "var(--text-primary)" }}>CORE_QUALITIES</h3>
                                    </div>
                                    <div className="border px-3 py-1" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                                        <span className="font-mono text-[9px] tracking-widest" style={{ color: "var(--accent-blue)" }}>{traits.length} TRAITS</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {traits.map((trait, i) => (
                                        <AccordionItem key={i} icon={trait.icon} title={trait.title} desc={trait.desc} isOpen={activeTrait === i} onToggle={() => setActiveTrait(activeTrait === i ? null : i)} accent="var(--accent-blue)" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── FOOTER ── */}
                <div className="mt-8 flex items-center justify-between">
                    <div className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-dim)" }}>$ about --profile prayag-sahu _</div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: "var(--accent)" }}>ALL SYSTEMS OPERATIONAL</span>
                    </div>
                </div>
            </div>
        </section>
    );
}