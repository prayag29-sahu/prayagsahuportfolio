'use client';

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Scanline overlay ───────────────────────────────────── */
function ScanlineOverlay() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0 scanline-overlay"
            style={{
                background:
                    "repeating-linear-gradient(0deg,transparent,transparent 2px,var(--scanline-color) 2px,var(--scanline-color) 4px)",
            }}
        />
    );
}

/* ─── Corner accent ──────────────────────────────────────── */
function CornerAccent({ color = "#39d353" }) {
    return (
        <>
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: color || "var(--accent)" }} />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: color || "var(--accent)" }} />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: color || "var(--accent)" }} />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: color || "var(--accent)" }} />
        </>
    );
}

/* ─── Blinking cursor ────────────────────────────────────── */
function Cursor() {
    return <span className="inline-block w-[8px] h-[14px] animate-pulse ml-1 align-middle" style={{ background: "var(--accent)" }} />;
}

/* ─── Data ───────────────────────────────────────────────── */
const certData = [
    {
        id: "CERT_01",
        title: "InterviewBit",
        subtitle: "DSA • Badges • Streak",
        year: "Ongoing",
        tag: "DSA",
        tagColor: "var(--accent)",
        count: "11 Badges",
        description:
            "Solved DSA challenges and earned consistent streak badges with algorithm mastery across arrays, trees, graphs and DP.",
        images: [
            { src: "/images/01_badges/01.png", caption: "Badge 01" },
            { src: "/images/01_badges/02.png", caption: "Badge 02" },
            { src: "/images/01_badges/03.png", caption: "Badge 03" },
            { src: "/images/01_badges/04.png", caption: "Badge 04" },
            { src: "/images/01_badges/05.png", caption: "Badge 05" },
            { src: "/images/01_badges/06.png", caption: "Badge 06" },
            { src: "/images/01_badges/07.png", caption: "Badge 07" },
            { src: "/images/01_badges/08.png", caption: "Badge 08" },
            { src: "/images/01_badges/09.png", caption: "Badge 09" },
            { src: "/images/01_badges/10.png", caption: "Badge 10" },
            { src: "/images/01_badges/11.png", caption: "Badge 11" },
        ],
    },
    {
        id: "CERT_02",
        title: "NPTEL – DBMS",
        subtitle: "IIT Kharagpur",
        year: "2025",
        tag: "Silver + Elite",
        tagColor: "var(--accent-blue)",
        count: "Top 5%",
        description:
            "Completed IIT Kharagpur certified Database Management Systems course with Silver + Elite distinction. Covered relational algebra, SQL, normalization and transactions.",
        images: [
            { src: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png", caption: "Certificate" },
        ],
    },
    {
        id: "CERT_03",
        title: "NPTEL – DBMS",
        subtitle: "IIT Kharagpur",
        year: "2026",
        tag: "Silver + ELITE",
        tagColor: "var(--accent-blue)",
        count: "Top 2%",
        description:
            "Completed IIT Kharagpur certified Computer Network and Internet Protocol course with Silver + Elite distinction. Covered different models and connectivity and compunication across network.",
        images: [
            { src: "/images/01_certificates/01_Major_06/NPTEL_CN.png", caption: "Certificate" },
        ],
    },
    {
        id: "CERT_04",
        title: "freeCodeCamp",
        subtitle: "Modern Web Technologies",
        year: "2023",
        tag: "WEB_DEV",
        tagColor: "var(--accent-amber)",
        count: "2 Certs",
        description:
            "Completed comprehensive web development curriculum covering HTML, CSS, JavaScript, React, Node and database fundamentals.",
        images: [
            { src: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png", caption: "Certificate" },
        ],
    },
    {
        id: "CERT_05",
        title: "Cisco",
        subtitle: "Networking & Python",
        year: "2026",
        tag: "NETWORKING",
        tagColor: "var(--accent-blue)",
        count: "23 Files",
        description:
            "Cisco certifications in Networking essentials and Python programming for IT professionals. Includes badges and achievement records.",
        images: [
            { src: "/images/15_Cisco/1 (3).png", caption: "Certificate" },
            { src: "/images/15_Cisco/1 (2).png", caption: "Certificate" },
            { src: "/images/15_Cisco/1 (1).png", caption: "Certificate" },
            { src: "/images/15_Cisco/1 (4).png", caption: "Certificate" },
            { src: "/images/15_Cisco/1 (5).png", caption: "Certificate" },
            { src: "/images/15_Cisco/1 (6).png", caption: "Certificate" },
            { src: "/images/15_Cisco/1 (7).png", caption: "Badge" },
            { src: "/images/15_Cisco/1 (18).png", caption: "Badge" },
            { src: "/images/15_Cisco/1 (23).png", caption: "Badge" },
            { src: "/images/15_Cisco/1 (8).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (9).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (10).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (11).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (12).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (13).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (14).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (15).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (16).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (17).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (19).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (20).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (21).png", caption: "Achievement" },
            { src: "/images/15_Cisco/1 (22).png", caption: "Achievement" },
        ],
    },
    {
        id: "CERT_06",
        title: "NASSCOM MERN Stack",
        subtitle: "Approved Internship Certification",
        year: "2026",
        tag: "INTERNSHIP",
        tagColor: "var(--accent)",
        count: "NASSCOM",
        description:
            "Completed a structured MERN Stack internship program certified by NASSCOM, covering modern React patterns, RESTful API design, and MongoDB data modeling.",
        images: [
            { src: "/images/01_certificates/01_Major_06/nasscom.png", caption: "NASSCOM Cert" },
        ],
    },
    {
        id: "CERT_07",
        title: "TITANS Nagpur",
        subtitle: "60 Hours Pre-Placement Training (3P)",
        year: "2026",
        tag: "TRAINING",
        tagColor: "var(--accent-amber)",
        count: "60 Hours",
        description:
            "Completed intensive pre-placement training focusing on technical skills, soft skills, and interview preparation for top-tier software roles.",
        images: [
            { src: "/images/01_certificates/01_Major_06/3p.png", caption: "Training Cert" },
        ],
    },
    {
        id: "CERT_08",
        title: "Hackathon Champion",
        subtitle: "SIH & BRAHMAX 1.0 Participant",
        year: "2024-25",
        tag: "HACKATHON",
        tagColor: "var(--accent-purple)",
        count: "2+ Major",
        description:
            "Participated in SIH and BRAHMAX 1.0 (24-hour hackathon). Developed innovative solutions under tight deadlines and collaborative environments.",
        images: [
            { src: "/images/01_certificates/01_Major_06/sih.jpg", caption: "SIH Participant" },
            { src: "/images/01_certificates/01_Major_06/Bramhax.jpg", caption: "SIH Participant" },
        ],
    },
    {
        id: "CERT_09",
        title: "Best Student Award",
        subtitle: "Sincerity & Conduct Award",
        year: "2023",
        tag: "AWARD",
        tagColor: "var(--accent-blue)",
        count: "School",
        description:
            "Awarded 'Best Student' for outstanding sincerity, conduct, and academic excellence during schooling.",
        images: [
            { src: "/images/11_Class12th/01.jpg", caption: "Award Certificate" },
        ],
    },
];

/* ─── Card component ─────────────────────────────────────── */
function CertCard({ item, index, onExplore, isPaused, setIsPaused }) {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (isPaused) return;
        const t = setInterval(() => {
            setSlide((p) => (p + 1) % item.images.length);
        }, 2800 + index * 200);
        return () => clearInterval(t);
    }, [isPaused, item.images.length, index]);

    const accentColor = item.tagColor;

    return (


            <div
                className="w-[85vw] max-w-[450px] md:w-[520px] shrink-0 border relative overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_0_24px_var(--accent-glow)]"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <ScanlineOverlay />
                <CornerAccent color={accentColor} />

                {/* ── Top bar ── */}
                <div
                    className="flex items-center justify-between px-5 py-3.5 border-b relative z-10"
                    style={{ borderColor: "var(--border)", borderTopWidth: 3, borderTopColor: accentColor, borderTopStyle: "solid", background: "var(--bg-subtle)" }}
                >
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold" style={{ color: "var(--text-muted)" }}>
                            {item.id}.LOG
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span
                            className="font-mono text-[10px] tracking-[0.15em] px-2.5 py-1 border font-bold"
                            style={{ color: accentColor, borderColor: accentColor }}
                        >
                            {item.tag}
                        </span>
                        <span className="font-mono text-[11px] font-bold" style={{ color: "var(--text-muted)" }}>{item.year}.txt</span>
                    </div>
                </div>

                {/* ── Body ── */}
                <div className="p-6 flex flex-col md:flex-row items-start gap-6 flex-1 relative z-10">

                    {/* Left */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-mono font-black text-xl tracking-tight leading-tight" style={{ color: "var(--text-primary)" }}>
                                {item.title}
                            </h3>
                            <p className="font-mono text-[12px] tracking-[0.15em] mt-1 font-bold" style={{ color: accentColor }}>
                                {item.subtitle}
                            </p>
                        </div>

                        <p className="font-mono text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                            {item.description}
                        </p>

                        <div className="flex items-center gap-4 pt-1">
                            <div className="border px-4 py-2" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <span className="font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>FILES </span>
                                <span className="font-mono text-[12px] font-bold" style={{ color: accentColor }}>
                                    {item.count}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 font-mono text-[10px] font-bold" style={{ color: "var(--text-muted)" }}>
                                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                                LOADED
                            </div>
                        </div>

                        <button
                            onClick={() => onExplore(index)}
                            className="mt-2 group/btn flex items-center gap-2 border font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-200 font-bold"
                            style={{
                                borderColor: accentColor,
                                color: accentColor,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = accentColor;
                                e.currentTarget.style.color = "var(--bg)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = accentColor;
                            }}
                        >
                            $ EXPLORE_NOW
                            <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                        </button>
                    </div>

                    {/* Right — image slider */}
                    <div className="relative w-full md:w-[200px] h-[180px] md:h-[150px] shrink-0 border overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>

                        <CornerAccent color="var(--border)" />
                        <img
                            src={item.images[slide].src}
                            alt={item.images[slide].caption}
                            className="w-full h-full object-contain transition-opacity duration-700"
                        />
                        {/* Dot indicators */}
                        {item.images.length > 1 && (
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                                {item.images.slice(0, Math.min(item.images.length, 8)).map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1 h-1 rounded-full transition-all duration-300"
                                        style={{
                                            background: i === slide % Math.min(item.images.length, 8) ? accentColor : "#30363d",
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                        {/* Slide counter */}
                        <div className="absolute top-2 right-2 font-mono text-[8px] px-1.5 py-0.5 border" style={{ color: "var(--text-muted)", background: "var(--bg-dim)", borderColor: "var(--border)" }}>
                            {slide + 1}/{item.images.length}
                        </div>
                    </div>
                </div>
            </div>
    );
}

/* ─── Popup gallery ──────────────────────────────────────── */
function PopupGallery({ item, onClose }) {
    const [lightbox, setLightbox] = useState(null);

    if (!item) return null;
    const accentColor = item.tagColor;

    return (

        <div className="fixed mt-10 inset-0 z-50 flex items-center justify-center" style={{ background: "var(--bg-dim)", backdropFilter: "blur(12px)" }}>
            <div
                className="relative border w-[92%] max-w-5xl h-[88vh] flex flex-col overflow-hidden"
                style={{ borderColor: accentColor, background: "var(--surface)" }}
                onClick={(e) => e.stopPropagation()}
            >
                <ScanlineOverlay />
                <CornerAccent color={accentColor} />

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-20 border p-1.5 transition-colors duration-200"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff5f56"; e.currentTarget.style.color = "#ff5f56"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                    <X size={18} />
                </button>

                {/* Header */}
                <div
                    className="px-8 py-5 border-b relative z-10 flex items-center justify-between"
                    style={{ borderColor: "var(--border)", borderTopWidth: 3, borderTopColor: accentColor, borderTopStyle: "solid" }}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>
                                {item.id}_GALLERY.VIEW
                            </span>
                        </div>
                        <h3 className="font-mono font-black text-2xl" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                        <p className="font-mono text-[11px] tracking-[0.2em] mt-1" style={{ color: accentColor }}>
                            {item.subtitle} — {item.year}
                        </p>
                    </div>
                    <div
                        className="font-mono text-[10px] px-3 py-1 border tracking-widest"
                        style={{ borderColor: accentColor, color: accentColor }}
                    >
                        {item.images.length} FILES LOADED
                    </div>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 custom-gallery-scroll">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {item.images.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setLightbox(i)}
                                className="border p-3 relative overflow-hidden group/card cursor-pointer transition-all duration-200"
                                style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
                                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                            >
                                <CornerAccent color="var(--border)" />
                                <div className="relative overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full h-52 object-cover group-hover/card:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-all duration-200" />
                                    <div className="absolute top-2 right-2 font-mono text-[8px] border px-1.5 py-0.5" style={{ background: "var(--bg-dim)", borderColor: "var(--border)", color: "var(--text-muted)" }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>{img.caption}</p>
                                    <span
                                        className="font-mono text-[9px] tracking-widest"
                                        style={{ color: item.tagColor }}
                                    >
                                        VIEW →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
        <div
                    className="fixed inset-0 z-[60] flex items-center justify-center"
                    style={{ background: "var(--bg-dim)", backdropFilter: "blur(20px)" }}
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-4xl w-[90%]" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 font-mono text-[10px] tracking-widest hover:text-theme-accent transition-colors"
                            style={{ color: "var(--text-muted)" }}
                        >
                            [ESC] CLOSE
                        </button>
                        <button
                            onClick={() => setLightbox((p) => (p - 1 + item.images.length) % item.images.length)}
                            className="absolute left-[-50px] top-1/2 -translate-y-1/2 border p-2 transition-colors"
                            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => setLightbox((p) => (p + 1) % item.images.length)}
                            className="absolute right-[-50px] top-1/2 -translate-y-1/2 border p-2 transition-colors"
                            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                        >
                            <ChevronRight size={20} />
                        </button>
                        <div className="border p-2" style={{ borderColor: "var(--accent)", background: "var(--surface)" }}>
                            <img
                                src={item.images[lightbox].src}
                                alt={item.images[lightbox].caption}
                                className="w-full max-h-[75vh] object-contain"
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between px-1">
                            <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                                {item.images[lightbox].caption}
                            </p>
                            <p className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
                                {lightbox + 1} / {item.images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .custom-gallery-scroll::-webkit-scrollbar { width: 4px; }
        .custom-gallery-scroll::-webkit-scrollbar-track { background: var(--bg); }
        .custom-gallery-scroll::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }
        .custom-gallery-scroll { scrollbar-width: thin; scrollbar-color: var(--accent) var(--bg); }
      `}</style>
        </div>
    );
}

/* ─── Main export ────────────────────────────────────────── */
export default function Certifications() {
    const [activePopup, setActivePopup] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 120);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
            <section
                className="relative py-10 md:py-14 overflow-hidden" id='about'
                style={{
                    background: "var(--bg)",
                    fontFamily: "'Courier New', Courier, monospace",
                }}
            >
                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                {/* Ambient glow */}
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "var(--accent)", opacity: 0.025 }} />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "var(--accent-blue)", opacity: 0.02 }} />

                <div className="relative z-10">

                    {/* ── HEADER ── */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                            <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
                                SYSTEM_MODULE / CERTIFICATIONS
                            </span>
                        </div>

                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent)" />

                            {/* Window chrome */}
                            <div className="flex items-center justify-between px-4 py-2.5 md:px-5 md:py-3.5 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <span className="font-mono text-[11px] md:text-[13px] tracking-[0.2em] truncate max-w-[150px] md:max-w-none" style={{ color: "var(--text-muted)" }}>
                                        MY_CERTIFICATIONS.txt
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] border px-2 py-0.5 font-bold whitespace-nowrap" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>
                                        LIVE_FEED
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="px-5 py-6 md:px-8 md:py-6">
                                <h2
                                    className={`font-mono font-black text-2xl xs:text-3xl md:text-5xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "translate-x-[2px]" : ""
                                        }`}
                                    style={{ color: glitch ? "var(--accent)" : "var(--text-primary)", textShadow: "0 0 24px var(--accent-glow)" }}
                                >
                                    CERTIFICATIONS_<span style={{ color: "var(--accent)" }}>ARCHIVE</span>
                                    <Cursor />
                                </h2>
                                <p className="font-mono text-[12px] mt-3 tracking-wider max-w-xl" style={{ color: "var(--text-muted)" }}>
                                    $ cat ./certifications/* — Loaded {certData.length} records from achievement database.
                                </p>

                                {/* Stats row */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                    {[
                                        { label: "TOTAL_CERTS", value: "11+" },
                                        { label: "BADGES", value: "30+" },
                                        { label: "PLATFORMS", value: "06" },
                                        { label: "YEAR_RANGE", value: "2023–26" },
                                    ].map((s) => (
                                        <div key={s.label} className="border px-4 py-3 md:px-5 md:py-3" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                            <div className="font-mono text-[9px] tracking-[0.2em] uppercase font-bold" style={{ color: "var(--accent)" }}>{s.label}</div>
                                            <div className="font-mono text-lg md:text-xl font-bold" style={{ color: "var(--text-primary)" }}>{s.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── SCROLLING CARDS TRACK ── */}
                    <div className="relative overflow-hidden">
                        {/* Left fade */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
                        {/* Right fade */}
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />

                        <div
                            className="flex gap-6 px-6"
                            style={{
                                animation: `cert-scroll 32s linear infinite`,
                                animationPlayState: isPaused ? "paused" : "running",
                                width: "max-content",
                            }}
                        >
                            {[...certData, ...certData].map((item, index) => (
                                <CertCard
                                    key={index}
                                    item={item}
                                    index={index % certData.length}
                                    onExplore={(i) => setActivePopup(i % certData.length)}
                                    isPaused={isPaused}
                                    setIsPaused={setIsPaused}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── FOOTER ROW ── */}
                    <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-muted)" }}>
                            $ certifications --list --all _
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {certData.map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActivePopup(i)}
                                    className="font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 border transition-all duration-200 uppercase"
                                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                                >
                                    {c.id}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── POPUP ── */}
                {activePopup !== null && (
                    <PopupGallery
                        item={certData[activePopup]}
                        onClose={() => setActivePopup(null)}
                    />
                )}

                <style jsx>{`
        @keyframes cert-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
            </section>
    );
}