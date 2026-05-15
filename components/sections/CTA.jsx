'use client';

import { useState, useEffect, useRef } from "react";
import {
    Briefcase, Users, Star, ArrowRight,
    ShieldCheck, Clock, Wrench, Terminal,
    Zap, Code2, Globe, CheckCircle,
} from "lucide-react";

/* ─── Shared Primitives ──────────────────────────────────── */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 scanline-overlay"
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
        <div className="flex items-center justify-between px-4 py-2.5 md:px-5 md:py-3.5 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
            <div className="flex items-center gap-3">
                <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.18em] font-bold truncate max-w-[130px] md:max-w-none" style={{ color: "var(--text-muted)" }}>{filename}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[10px] border px-2 py-0.5 tracking-widest font-bold whitespace-nowrap" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* ─── Animated counter ───────────────────────────────────── */
function Counter({ end, suffix = "" }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                let i = 0;
                const step = Math.ceil(end / 50);
                const t = setInterval(() => {
                    i += step;
                    if (i >= end) { setVal(end); clearInterval(t); } else setVal(i);
                }, 35);
            }
        }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [end]);
    return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Data ───────────────────────────────────────────────── */
const trustCards = [
    { id: "TR_01", icon: <Users size={18} />, title: "Clients & Teams", desc: "Worked with startups and college teams with proven results.", color: "var(--accent)", tag: "COLLABORATION" },
    { id: "TR_02", icon: <Star size={18} />, title: "Satisfaction", desc: "Clean, maintainable code delivery and clear communication.", color: "var(--accent-amber)", tag: "REPUTATION" },
    { id: "TR_03", icon: <ShieldCheck size={18} />, title: "Commitment", desc: "Clear timelines and long-term post-launch support.", color: "var(--accent-blue)", tag: "RELIABILITY" },
];

const featureCards = [
    { id: "FT_01", icon: <Clock size={16} />, title: "On-Time Delivery", desc: "Well-planned execution with realistic deadlines.", color: "var(--accent)" },
    { id: "FT_02", icon: <Wrench size={16} />, title: "Production Ready", desc: "Scalable architecture and optimized performance.", color: "var(--accent-blue)" },
    { id: "FT_03", icon: <Briefcase size={16} />, title: "Long-Term", desc: "Open to full-time roles and freelance projects.", color: "var(--accent-purple)" },
];

const terminalLines = [
    { text: "$ whoami", color: "var(--accent)" },
    { text: "→ prayag-sahu: Software Engineer & Architect", color: "var(--text-muted)" },
    { text: "$ status --availability", color: "var(--accent)" },
    { text: "→ OPEN_TO_WORK: TRUE", color: "var(--accent-amber)" },
    { text: "$ hire --me", color: "var(--accent)" },
    { text: "→ STATUS: READY FOR OPPORTUNITIES", color: "var(--accent)" },
];

/* ─── Components ─────────────────────────────────────────── */
function TrustCard({ card }) {
    const [hovered, setHovered] = useState(false);
    const ac = card.color;
    return (
        <div className="border relative overflow-hidden transition-all duration-300 group hover:shadow-[0_0_24px_var(--accent-glow)]"
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)", borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ScanlineOverlay />
            <CornerAccent color={hovered ? ac : "var(--border)"} />
            <div className="p-7 relative z-10">
                <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 border flex items-center justify-center transition-all duration-200"
                        style={{ borderColor: ac, color: ac, background: hovered ? `${ac}15` : "transparent" }}>
                        {card.icon}
                    </div>
                </div>
                <h3 className="font-mono font-black text-[15px] mb-2.5 uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>{card.title}</h3>
                <p className="font-mono text-[12px] leading-relaxed font-bold" style={{ color: "var(--text-muted)" }}>{card.desc}</p>
            </div>
            <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: ac }} />
        </div>
    );
}

function FeatureCard({ card }) {
    const [hovered, setHovered] = useState(false);
    const ac = card.color;
    return (
        <div className="border relative overflow-hidden transition-all duration-300 group cursor-default"
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)", borderLeftWidth: 3, borderLeftColor: hovered ? ac : "var(--border)" }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ScanlineOverlay />
            <div className="p-5 relative z-10 flex items-start gap-4">
                <div className="w-9 h-9 border shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5"
                    style={{ borderColor: hovered ? ac : "var(--border)", color: hovered ? ac : "var(--text-muted)", background: hovered ? `${ac}10` : "transparent" }}>
                    {card.icon}
                </div>
                <div>
                    <h4 className="font-mono font-black text-[12px] mb-1.5 uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>{card.title}</h4>
                    <p className="font-mono text-[11px] leading-relaxed font-bold" style={{ color: "var(--text-muted)" }}>{card.desc}</p>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Export ────────────────────────────────────────── */
export default function CTA() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden" id='blogs'
            style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}>
            
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                        <span className="font-mono text-[11px] tracking-[0.3em] uppercase font-bold" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / HIRE_ME</span>
                    </div>

                    <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent />
                        <WindowChrome filename="HIRE_ME.exe" />
                        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] divide-y lg:divide-y-0 lg:divide-x" style={{ borderColor: "var(--border)" }}>
                            <div className="px-8 py-8 relative z-10">
                                <h2 className="font-mono font-black text-3xl md:text-5xl tracking-widest uppercase leading-tight" style={{ color: "var(--text-primary)" }}>
                                    LOOKING FOR A<br />
                                    <span style={{ color: "var(--accent)" }}>RELIABLE_DEV</span>
                                </h2>
                                <p className="font-mono text-[12px] mt-4 leading-[1.9] tracking-wide max-w-lg" style={{ color: "var(--text-muted)" }}>
                                    I help businesses build scalable web applications with clean architecture and modern UI.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8 mb-10">
                                    {[
                                        { label: "PROJECTS", end: 4, suffix: "+", color: "var(--accent)" },
                                        { label: "CLIENTS", end: 1, suffix: "+", color: "var(--accent-blue)" },
                                        { label: "COMMITS", end: 4167, suffix: "+", color: "var(--accent-amber)" },
                                    ].map(s => (
                                        <div key={s.label} className="border px-5 py-3" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                            <div className="font-mono text-[9px] tracking-[0.2em] font-bold uppercase mb-1" style={{ color: s.color }}>{s.label}</div>
                                            <div className="font-mono font-black text-xl" style={{ color: "var(--text-primary)" }}>
                                                <Counter end={s.end} suffix={s.suffix} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href="#contact" className="flex items-center gap-2 border font-mono text-[12px] tracking-widest uppercase px-8 py-4 transition-all duration-200 font-bold"
                                        style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}>
                                        <Terminal size={15} /> $ HIRE_ME.exe
                                    </a>
                                </div>
                            </div>
                            <div className="px-7 py-10 relative z-10" style={{ background: "var(--bg-subtle)" }}>
                                <div className="font-mono text-[12px] space-y-2.5 font-bold">
                                    {terminalLines.map((line, i) => (
                                        <div key={i} style={{ color: line.color }}>{line.text}</div>
                                    ))}
                                    <div className="flex items-center gap-2 mt-3" style={{ color: "var(--accent)" }}>
                                        <span>$</span><span className="animate-pulse">█</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {trustCards.map(c => <TrustCard key={c.id} card={c} />)}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {featureCards.map(c => <FeatureCard key={c.id} card={c} />)}
                </div>
            </div>
        </section>
    );
}