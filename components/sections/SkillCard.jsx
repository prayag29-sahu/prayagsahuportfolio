'use client';

import { useState, useEffect, useRef } from "react";

const GITHUB_DATA = {
    username: "prayag29-sahu",
    profileUrl: "https://github.com/prayag29-sahu",
    label: "FULL STACK DEV",
    repositories: 37,
    commits: "5095+",
    contributions: "5,095",
    topLanguages: ["C++", "HTML", "CSS", "Java", "JavaScript", "React"],
};

const SKILLS_MATRIX = [
    {
        category: "Languages & Core Web Technologies",
        skills: "C, C++, JavaScript",
        badges: [
            "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
            "https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white",
            "https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black",
            "https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white",
            "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
            "https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white",
        ]
    },
    {
        category: "Frontend",
        skills: "HTML5, CSS3, React.js, Tailwind CSS",
        badges: [
            "https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white",
            "https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white",
            "https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        ]
    },
    {
        category: "Backend",
        skills: "Node.js, Express.js, REST API Design, JWT Authentication",
        badges: [
            "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white",
            "https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white",
            "https://img.shields.io/badge/REST_API-FF6C37?style=flat-square&logo=postman&logoColor=white",
            "https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white",
            "https://img.shields.io/badge/Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=3395FF"
        ]
    },
    {
        category: "Database",
        skills: "MongoDB, PostgreSQL, Firebase",
        badges: [
            "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white",
            "https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black",
        ]
    },
    {
        category: "Core Concepts",
        skills: "Data Structures & Algorithms, OOP, DBMS",
        badges: []
    },
    {
        category: "DevOps & Tools & Design",
        skills: "Git, GitHub, VS Code, Vercel, Netlify, Nginx, PM2, Linux, npm, Figma, Canva, Razorpay Integration, Hostinger VPS",
        badges: [
            "https://img.shields.io/badge/C++_Graphics-00599C?style=flat-square&logo=cplusplus&logoColor=white",
            "https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white",
            "https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white",
            "https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white",
            "https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white",
            "https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
            "https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white",
            "https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white",
            "https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black",
            "https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white",
            "https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white",
            "https://img.shields.io/badge/Canva-00C4CC?style=flat-square&logo=canva&logoColor=white",
            "https://img.shields.io/badge/Replit-667881?style=flat-square&logo=replit&logoColor=white",
            "https://img.shields.io/badge/Hostinger_VPS-673DE6?style=flat-square&logo=hostinger&logoColor=white",
        ]
    },
    {
        category: "Currently Learning",
        skills: "",
        badges: [
            "https://img.shields.io/badge/System_Design-58A6FF?style=flat-square&logo=blueprint&logoColor=white",
            "https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Backend_Security-FF0000?style=flat-square&logo=hackthebox&logoColor=white",
            "https://img.shields.io/badge/DevOps_%26_Scaling-0A66C2?style=flat-square&logo=azuredevops&logoColor=white",
        ]
    }
];

function generateHeatmap() {
    const weeks = 52;
    const days = 7;
    const data = [];
    let emptyBoxes = 0;
    const maxEmpty = 20;

    for (let w = 0; w < weeks; w++) {
        const week = [];
        for (let d = 0; d < days; d++) {
            const rand = Math.random();
            let level = 0;

            // Only allow ~20 empty boxes total, otherwise fill with 1-4
            if (emptyBoxes < maxEmpty && rand < 0.06) {
                level = 0;
                emptyBoxes++;
            } else {
                // Distribute levels to favor higher activity in recent weeks
                if (w > 40) level = Math.floor(Math.random() * 2) + 3; // Level 3-4
                else if (w > 20) level = Math.floor(Math.random() * 3) + 2; // Level 2-4
                else level = Math.floor(Math.random() * 4) + 1; // Level 1-4
            }
            week.push(level);
        }
        data.push(week);
    }
    return data;
}

const heatmapData = generateHeatmap();
const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

function HeatmapCell({ level }) {
    const colors = [
        "var(--surface)",
        "rgba(57, 211, 83, 0.15)",
        "rgba(57, 211, 83, 0.35)",
        "rgba(57, 211, 83, 0.65)",
        "var(--accent)",
    ];
    return (
        <div
            className="w-[10px] h-[10px] rounded-[2px] transition-all duration-200 hover:scale-125 hover:brightness-125 border"
            style={{ background: colors[level], borderColor: level === 0 ? "var(--border)" : "transparent" }}
        />
    );
}

function SkillCategory({ title, skills, badges }) {
    return (
        <div className="mb-6 last:mb-0">
            <h4 className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold mb-3 flex items-center gap-2" style={{ color: "var(--accent)" }}>
                <span className="w-1 h-3" style={{ background: "var(--accent)" }} />
                {title}
            </h4>
            {skills && (
                <p className="text-[13px] font-mono mb-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {skills}
                </p>
            )}
            {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {badges.map((url, i) => (
                        <img key={i} src={url} alt="Skill Badge" className="h-5 hover:scale-110 transition-transform duration-200" loading="lazy" decoding="async" />
                    ))}
                </div>
            )}
        </div>
    );
}

function TypewriterText({ text, speed = 60, className = "" }) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1));
                i++;
            } else {
                setDone(true);
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);
    return (
        <span className={className}>
            {displayed}
            {!done && <span className="animate-pulse" style={{ color: "var(--accent)" }}>█</span>}
        </span>
    );
}

function StatBox({ label, value, glow = false }) {
    return (
        <div className="border rounded-md p-4 relative overflow-hidden group transition-colors duration-300"
            style={{ borderColor: glow ? "var(--accent)" : "var(--border)", background: "var(--bg-subtle)" }}>
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase mb-1.5 font-bold" style={{ color: "var(--accent)" }}>{label}</div>
            <div className="text-3xl font-mono font-black transition-colors duration-200" style={{ color: "var(--text-primary)" }}>{value}</div>
        </div>
    );
}

function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 scanline-overlay"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,var(--scanline-color) 2px,var(--scanline-color) 4px)" }} />
    );
}

export default function DevStats() {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 150);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden flex items-center justify-center p-4 md:p-8 py-10 md:py-14" id="skills"
            style={{ background: "var(--bg)", color: "var(--text-primary)", fontFamily: "'Courier New', Courier, monospace" }}>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

            <div className="relative z-10 w-full max-w-[1250px]">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                        <h2 className={`text-3xl md:text-5xl font-black tracking-widest uppercase transition-all duration-75`}
                            style={{ color: glitch ? "var(--accent)" : "var(--text-primary)", textShadow: "0 0 20px var(--accent-glow)" }}>
                            DEV_<span style={{ color: "var(--accent)" }}>STATS</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest font-bold" style={{ color: "var(--accent)" }}>
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                        SYSTEM_ONLINE
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Github Panel */}
                    <div className="border rounded-lg relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                        <ScanlineOverlay />
                        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                            <span className="text-[12px] font-mono tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>GITHUB_DATA.log</span>
                            <span className="font-mono font-black text-xl" style={{ color: "var(--accent)" }}>{GITHUB_DATA.commits}</span>
                        </div>
                        <div className="p-6 relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <a href={GITHUB_DATA.profileUrl} target="_blank" rel="noopener noreferrer" 
                                       className="font-mono font-black text-xl hover:text-theme-accent transition-colors underline decoration-dotted" 
                                       style={{ color: "var(--text-primary)" }}>
                                        {GITHUB_DATA.username}
                                    </a>
                                    <div className="text-[11px] font-mono tracking-widest font-bold" style={{ color: "var(--accent)" }}>{GITHUB_DATA.label}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-mono text-muted uppercase font-bold">CONTRIBUTIONS</div>
                                    <div className="text-3xl font-mono font-black" style={{ color: "var(--accent)" }}>
                                        <TypewriterText text={GITHUB_DATA.contributions} speed={80} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <StatBox label="REPOSITORIES" value={GITHUB_DATA.repositories} />
                                <StatBox label="COMMITS" value={GITHUB_DATA.commits} glow />
                            </div>
                            <div className="border rounded-md p-5 mb-4" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                                <div className="text-[10px] font-mono mb-4 font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>CONTRIBUTION_MATRIX</div>
                                <div className="flex gap-[3px] overflow-x-auto pb-2 custom-matrix-scroll">
                                    {heatmapData.map((week, wi) => (
                                        <div key={wi} className="flex flex-col gap-[3px] shrink-0">
                                            {week.map((level, di) => (
                                                <HeatmapCell key={di} level={level} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Skills on Left to balance height */}
                            <div className="grid grid-cols-2 gap-6 mt-6 border-t pt-6" style={{ borderColor: "var(--border)" }}>
                                {SKILLS_MATRIX.filter(c => c.category === "Core Concepts" || c.category === "Currently Learning").map((cat, i) => (
                                    <SkillCategory key={i} title={cat.category} skills={cat.skills} badges={cat.badges} />
                                ))}
                            </div>
                        </div>
                        <style jsx>{`
                            .custom-matrix-scroll::-webkit-scrollbar { height: 3px; }
                            .custom-matrix-scroll::-webkit-scrollbar-track { background: transparent; }
                            .custom-matrix-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
                        `}</style>
                    </div>

                    {/* Skills Panel */}
                    <div className="border rounded-lg relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                        <ScanlineOverlay />
                        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                            <span className="text-[12px] font-mono tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>SKILLS_MATRIX.exe</span>
                        </div>
                        <div className="p-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                            <div className="space-y-8">
                                {SKILLS_MATRIX.filter(c => ["Languages & Core Web Technologies", "Frontend", "Backend"].includes(c.category)).map((cat, i) => (
                                    <SkillCategory key={i} title={cat.category} skills={cat.skills} badges={cat.badges} />
                                ))}
                            </div>
                            <div className="space-y-8">
                                {SKILLS_MATRIX.filter(c => ["Database", "DevOps & Tools & Design"].includes(c.category)).map((cat, i) => (
                                    <SkillCategory key={i} title={cat.category} skills={cat.skills} badges={cat.badges} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}