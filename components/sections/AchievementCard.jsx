'use client';

import { useState, useEffect, useRef } from "react";
import {
    Trophy, Award, GraduationCap, Star, Code, Medal,
    Zap, Target, Flame, Crown, BookOpen, Cpu, Globe, ChevronRight
} from "lucide-react";

/* Shared UI primitives for consistent styling */
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
                <span className="font-mono text-[9px] md:text-[10px] border px-2 py-0.5 tracking-widest font-bold whitespace-nowrap" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* 
   Animated counter with easing 
   I used requestAnimationFrame for better performance and added an ease-out expo 
   function so the numbers feel more natural and 'premium' as they approach the target.
*/
function AnimatedCounter({ target, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const numTarget = parseInt(target.replace(/\D/g, "")) || 0;

    useEffect(() => {
        let animationFrame;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let startTime = null;
                const duration = 5000; // Slower, 3 seconds for better motion

                const animate = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Easing: easeOutExpo (starts fast, ends slow and smooth)
                    const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    
                    const current = Math.floor(easeOutExpo * numTarget);
                    setCount(current);

                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                    } else {
                        setCount(numTarget);
                    }
                };
                animationFrame = requestAnimationFrame(animate);
            }
        }, { threshold: 0.2 });

        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.disconnect();
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [numTarget]);

    // Format numbers with commas for higher values (e.g., 5,095)
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* Achievement and Stats Data */
const stats = [
    { icon: <Code size={20} />, value: "8", suffix: "+", label: "Projects Completed", desc: "Production & Featured builds", color: "var(--accent)", id: "STAT_01" },
    { icon: <Star size={20} />, value: "2", suffix: "+", label: "Clients Served", desc: "Freelancing & Business systems", color: "var(--accent-blue)", id: "STAT_02" },
    { icon: <GraduationCap size={20} />, value: "6", suffix: "+", label: "Months Experience", desc: "Professional internship duration", color: "var(--accent-amber)", id: "STAT_03" },
    { icon: <Award size={20} />, value: "30", suffix: "+", label: "Certifications", desc: "Technical & Professional", color: "var(--accent-purple)", id: "STAT_04" },
    { icon: <Flame size={20} />, value: "5095", suffix: "+", label: "GitHub Commits", desc: "Consistent contributions", color: "var(--accent)", id: "STAT_05" },
    { icon: <Target size={20} />, value: "180", suffix: "+", label: "DSA Problems", desc: "InterviewBit & LeetCode", color: "var(--accent-blue)", id: "STAT_06" },
];

const majorAchievements = [
    {
        id: "ACH_01", icon: <Medal size={18} />, title: "NPTEL — IIT Kharagpur", subtitle: "Silver + Elite Top 5%",
        year: "2025", tag: "ACADEMIC", accentColor: "var(--accent)",
        points: ["Distinguished performance in Database Management Systems", "Top 5% among  7 thousands of candidates nationwide"]
    },
    {
        id: "ACH_02", icon: <Medal size={18} />, title: "NPTEL — IIT Kharagpur", subtitle: "Silver + Elite Top 2%",
        year: "2026", tag: "ACADEMIC", accentColor: "var(--accent-amber)",
        points: ["Distinguished performance in Computer Network And Internet Protocol", "Top 2% among 10 thousands of candidates nationwide"]
    },
    {
        id: "ACH_03", icon: <Trophy size={18} />, title: "Hackathons & Events", subtitle: "SIH • BRAHMAX 1.0",
        year: "2024 – 2025", tag: "COMPETITION", accentColor: "var(--accent-blue)",
        points: ["Participated in Smart India Hackathon (SIH)", "Competed in BRAHMAX 24-hour Hackathon challenge"]
    },
];

const trophyItems = [
    { label: "2 Time NPTEL Silver + Elite", year: "2025 + 2026", color: "var(--accent-amber)", icon: "🏅" },
    { label: "NASSCOM Certified", year: "2026", color: "var(--accent)", icon: "🛡️" },
    { label: "TITANS 60Hrs Training", year: "2026", color: "var(--accent-purple)", icon: "⚡" },
    { label: "Shortlisted IIT Roper Fellowship", year: "2026", color: "var(--accent-amber)", icon: "🧠" },
    { label: "Best Student Award", year: "2023", color: "var(--accent-blue)", icon: "🏆" },
];

/* 
   Component definitions 
   Kept these modular to maintain readability while handling complex hover states.
*/
function StatCard({ stat }) {
    const [hovered, setHovered] = useState(false);
    const ac = stat.color;
    return (
        <div
            className="border relative overflow-hidden transition-all duration-300 group"
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)", borderLeftWidth: 3, borderLeftColor: hovered ? ac : "var(--border)" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ScanlineOverlay />
            {hovered && <CornerAccent color={ac} />}
            <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 border flex items-center justify-center transition-all duration-200"
                        style={{ borderColor: hovered ? ac : "var(--border)", color: hovered ? ac : "var(--text-muted)", background: hovered ? `${ac}15` : "transparent" }}>
                        {stat.icon}
                    </div>
                </div>
                <div className="font-mono font-black text-2xl md:text-3xl mb-1.5" style={{ color: hovered ? ac : "var(--text-primary)" }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-[12px] font-bold mb-1.5 tracking-tight uppercase" style={{ color: "var(--text-primary)" }}>{stat.label}</div>
                <div className="font-mono text-[10px] tracking-wider leading-relaxed font-bold" style={{ color: "var(--text-muted)" }}>{stat.desc}</div>
            </div>
            <div className="h-[3px] w-0 transition-all duration-500 group-hover:w-full" style={{ background: ac }} />
        </div>
    );
}

function AchCard({ item }) {
    const [open, setOpen] = useState(false);
    const ac = item.accentColor;
    return (
        <div
            className="border relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_var(--accent-glow)] cursor-pointer"
            style={{ borderColor: "var(--border)", background: "var(--surface)", borderLeftWidth: 3, borderLeftColor: ac }}
            onClick={() => setOpen(!open)}
        >
            <ScanlineOverlay />
            <CornerAccent color={open ? ac : "var(--border)"} />
            <div className="flex items-center justify-between px-6 py-5 relative z-10">
                <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                        style={{ borderColor: ac, color: ac, background: "var(--bg-subtle)" }}>
                        {item.icon}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="font-mono text-[10px] border px-2 py-0.5 tracking-widest font-bold"
                                style={{ color: ac, borderColor: ac }}>{item.tag}</span>
                            <span className="font-mono text-[10px] tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                        </div>
                        <h3 className="font-mono font-black text-[15px] leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                        <p className="font-mono text-[11px] tracking-widest mt-1 font-bold" style={{ color: ac }}>{item.subtitle}</p>
                    </div>
                </div>
                <ChevronRight size={18} className="shrink-0 transition-transform duration-300 ml-4"
                    style={{ transform: open ? "rotate(90deg)" : "rotate(0)", color: open ? ac : "var(--text-muted)" }} />
            </div>
            <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: open ? "300px" : "0" }}>
                <div className="px-5 pb-5 border-t relative z-10" style={{ borderColor: "var(--border)" }}>
                    <div className="space-y-2 pt-4">
                        {item.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="font-mono text-[12px] mt-0.5 shrink-0" style={{ color: ac }}>▸</span>
                                <p className="font-mono text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{pt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TrophyTicker() {
    return (
        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <ScanlineOverlay />
            <CornerAccent />
            <WindowChrome filename="TROPHY_FEED.live" status="STREAMING" />
            <div className="relative overflow-hidden py-4">
                <div className="flex gap-6 ticker-animate" style={{ width: "max-content" }}>
                    {[...trophyItems, ...trophyItems, ...trophyItems].map((t, i) => (
                        <div key={i} className="flex items-center gap-3 border px-5 py-3 shrink-0"
                            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)", borderLeftWidth: 3, borderLeftColor: t.color }}>
                            <span className="text-xl">{t.icon}</span>
                            <div>
                                <div className="font-mono text-[11px] font-bold whitespace-nowrap uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>{t.label}</div>
                                <div className="font-mono text-[10px] tracking-widest font-bold" style={{ color: t.color }}>{t.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* Main Page Layout */
export default function AchievementsPage() {
    return (
        <section className="relative py-10 md:py-14 overflow-hidden" id='achievements'
            style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}>

            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                        <span className="font-mono text-[11px] tracking-[0.3em] uppercase font-bold" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / ACHIEVEMENTS</span>
                    </div>
                    <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent />
                        <WindowChrome filename="ACHIEVEMENTS_LOG.exe" />
                        <div className="px-5 py-6 md:px-8 md:py-8">
                            <h2 className="font-mono font-black text-2xl xs:text-3xl md:text-5xl tracking-widest uppercase" style={{ color: "var(--text-primary)" }}>
                                ACHIEVEMENTS_<span style={{ color: "var(--accent)" }}>ARCHIVE</span>
                            </h2>
                            <p className="font-mono text-[13px] mt-4 tracking-wider max-w-2xl" style={{ color: "var(--text-muted)" }}>
                                $ cat ./achievements/* — Academic excellence and technical milestones.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <TrophyTicker />
                </div>

                <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {stats.map((s, i) => <StatCard key={i} stat={s} />)}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-6">
                    <div className="space-y-3">
                        {majorAchievements.map((item) => (
                            <AchCard key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="border relative overflow-hidden h-fit" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent-purple)" />
                        <WindowChrome filename="AWARDS_GALLERY.png" />
                        <div className="p-4">
                            <img src="/images/achivements.png" alt="Achievements" className="w-full h-auto object-cover border" style={{ borderColor: "var(--border)" }} fetchPriority="high" loading="eager" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .ticker-animate {
                    animation: ticker 20s linear infinite;
                }
            `}</style>
        </section>
    );
}