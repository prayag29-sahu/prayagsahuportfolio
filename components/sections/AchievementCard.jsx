/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */

// // export default function AchievementCard() {



// //     return (

// //         <section
// //             id="achievements"
// //             className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
// //         >
// //             {/* Background Pattern */}
// //             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')"></div>

// //             <div className="max-w-7xl mx-auto px-6 relative z-10">

// //                 {/* Heading */}
// //                 <div className="text-center mb-16">
// //                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //                         Achievements &amp;{" "}
// //                         <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
// //                             Recognition
// //                         </span>
// //                     </h2>

// //                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// //                         Celebrating milestones and accomplishments that define my professional journey
// //                     </p>
// //                 </div>

// //                 {/* STATS GRID */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

// //                     <AchievementStat value="50+" label="Projects Completed" desc="Successfully delivered" color="text-purple-400" />

// //                     <AchievementStat value="25+" label="Happy Clients" desc="Satisfied customers" color="text-pink-400" />

// //                     <AchievementStat value="3+" label="Years Experience" desc="In development" color="text-blue-400" />

// //                     <AchievementStat value="15+" label="Technologies" desc="Mastered skills" color="text-green-400" />

// //                 </div>

// //                 {/* AWARDS GRID */}
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

// //                     {/* LEFT AWARDS */}
// //                     <div className="space-y-8">

// //                         {/* Award 1 */}
// //                         <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition">
// //                             <div className="flex items-center mb-4">
// //                                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
// //                                     ★
// //                                 </div>
// //                                 <h3 className="text-xl font-bold text-white">
// //                                     Best Developer Award 2023
// //                                 </h3>
// //                             </div>

// //                             <p className="text-gray-300">
// //                                 Recognized for outstanding contribution to innovative web development
// //                                 projects and exceptional problem-solving skills.
// //                             </p>
// //                         </div>

// //                         {/* Award 2 */}
// //                         <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition">
// //                             <div className="flex items-center mb-4">
// //                                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
// //                                     ✔
// //                                 </div>
// //                                 <h3 className="text-xl font-bold text-white">
// //                                     Certified Full-Stack Developer
// //                                 </h3>
// //                             </div>

// //                             <p className="text-gray-300">
// //                                 Completed comprehensive certification program covering modern web
// //                                 technologies, databases, and deployment strategies.
// //                             </p>
// //                         </div>

// //                     </div>

// //                     {/* RIGHT IMAGE */}
// //                     <div className="flex justify-center">
// //                         <img
// //                             src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/achievements/achievements-awards-4cf5fcb1ef1c4b74aaa27883077356d6.png"
// //                             alt="Achievements and awards"
// //                             className="w-full max-w-lg rounded-2xl object-cover shadow-2xl border border-white/20"
// //                         />
// //                     </div>

// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }
// // function AchievementStat({ value, label, desc, color }) {
// //     return (
// //         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition transform hover:scale-105">
// //             <div className={`text-4xl font-bold mb-2 ${color}`}>
// //                 {value}
// //             </div>
// //             <div className="text-white font-semibold mb-2">
// //                 {label}
// //             </div>
// //             <div className="text-gray-300 text-sm">
// //                 {desc}
// //             </div>
// //         </div>
// //     );
// // }










// 'use client';

// import {
//     Trophy,
//     Award,
//     GraduationCap,
//     Star,
//     Code,
//     Medal,
// } from "lucide-react";
// import ParallaxSection from "@/components/ui/ParallaxSection";
// export default function AchievementCard() {
//     return (
//         <ParallaxSection
//             // backgroundImage="/img/img2.jpeg"
//             backgroundImage="/images/bg.png"
//             height="400px"
//         >
//             <section
//                 id="achievements"
//                 className="py-20 relative overflow-hidden"
//             >
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//                 <div className="max-w-7xl mx-auto px-6 relative z-10">

//                     {/* Heading */}
//                     <div className="text-center mb-16">
//                         <div
//                             className={`w-full lg:px-[12%] px-[5%]  flex flex-col justify-center items-center
//   `}
//                         >

//                             <div className="flex items-center justify-center gap-6 mb-4">

//                                 {/* LEFT LINE */}
//                                 <div
//                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-r from-transparent via-cyan-400 to-blue-400`}
//                                 ></div>

//                                 {/* TITLE */}
//                                 <h1
//                                     className={`text-3xl sm:text-4xl md:text-5xl  font-extrabold tracking-wide drop-shadow-lg transition-all bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
//                                 >
//                                     <h2 className="text-4xl md:text-5xl font-bold text-white ">
//                                         Achievements & {" "}
//                                         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                                             Recognition
//                                         </span>
//                                     </h2>
//                                 </h1>

//                                 {/* RIGHT LINE */}
//                                 <div
//                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
//                                 ></div>

//                             </div>

//                         </div>

//                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                             Academic excellence, certifications, competitions, and real-world
//                             development milestones
//                         </p>
//                     </div>

//                     {/* STATS GRID */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

//                         <AchievementStat
//                             icon={<Code />}
//                             value="4+"
//                             label="Projects Completed"
//                             desc="Academic & Freelance"
//                             color="text-cyan-400"
//                         />

//                         <AchievementStat
//                             icon={<Star />}
//                             value="2"
//                             label="Clients Served"
//                             desc="Freelancing Projects"
//                             color="text-blue-400"
//                         />

//                         <AchievementStat
//                             icon={<GraduationCap />}
//                             value="1+"
//                             label="Years Active"
//                             desc="Development Journey"
//                             color="text-indigo-400"
//                         />

//                         <AchievementStat
//                             icon={<Award />}
//                             value="15+"
//                             label="Certificates"
//                             desc="Courses & Hackathons"
//                             color="text-emerald-400"
//                         />

//                     </div>

//                     {/* AWARDS GRID */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                         {/* LEFT CONTENT */}
//                         <div className="space-y-8">

//                             {/* Achievement 1 */}
//                             <div className="bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:scale-[1.02]">
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
//                                         <Medal className="text-white" size={22} />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white">
//                                         Academic Excellence & School Toppers
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-300">
//                                     Achieved top grades consistently from Class 8th to 12th,
//                                     including <strong>93.2% in 10th</strong> and
//                                     <strong> 88.6% in 12th</strong> (MPBSE). Recognized as
//                                     <strong> Best Student of the Year</strong> at school level.
//                                 </p>
//                             </div>

//                             {/* Achievement 2 */}
//                             <div className="bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-[1.02]">
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
//                                         <Trophy className="text-white" size={22} />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white">
//                                         Certifications, Hackathons & Competitive Learning
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-300">
//                                     Earned <strong>NPTEL DBMS Silver + Elite certificate</strong>,
//                                     completed <strong>freeCodeCamp</strong> programs, participated
//                                     in <strong>SIH & BrahmX Hackathons</strong>, and secured
//                                     top-10 rank in first-year B.Tech mid-term examinations
//                                     (SGPA <strong>8.81</strong>).
//                                 </p>
//                             </div>

//                         </div>

//                         {/* RIGHT IMAGE */}
//                         <div className="flex justify-center">
//                             <img
//                                 src="/images/achievements.png"
//                                 alt="Awards, certificates and achievements"
//                                 className="w-full max-w-lg rounded-2xl object-cover shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500"
//                             />
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </ParallaxSection>
//     );
// }


// /* STAT CARD */
// function AchievementStat({ icon, value, label, desc, color }) {
//     return (
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
//             <div className={`flex justify-center mb-3 ${color}`}>
//                 {icon}
//             </div>
//             <div className={`text-4xl font-bold mb-2 ${color}`}>
//                 {value}
//             </div>
//             <div className="text-white font-semibold mb-2">
//                 {label}
//             </div>
//             <div className="text-gray-300 text-sm">
//                 {desc}
//             </div>
//         </div>
//     );
// }









'use client';

import { useState, useEffect, useRef } from "react";
import {
    Trophy, Award, GraduationCap, Star, Code, Medal,
    Zap, Target, Flame, Crown, BookOpen, Cpu, Globe, ChevronRight
} from "lucide-react";
import ParallaxSection from '@/components/ui/ParallaxSection';

/* ─── Shared Primitives ──────────────────────────────────── */
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
function WindowChrome({ filename, status = "LIVE", statusColor = "#39d353" }) {
    return (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b949e]">{filename}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[8px] border px-1.5 py-0.5 tracking-widest" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* ─── Animated Counter ───────────────────────────────────── */
function AnimatedCounter({ target, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const numTarget = parseInt(target.replace(/\D/g, "")) || 0;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const step = Math.ceil(numTarget / 40);
                const timer = setInterval(() => {
                    start += step;
                    if (start >= numTarget) { setCount(numTarget); clearInterval(timer); }
                    else setCount(start);
                }, 40);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numTarget]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ───────────────────────────────────────────────── */
const stats = [
    { icon: <Code size={20} />, value: "3", suffix: "+", label: "Projects Completed", desc: "Academic & Freelance builds", color: "#39d353", id: "STAT_01" },
    { icon: <Star size={20} />, value: "1", suffix: "", label: "Clients Served", desc: "Freelancing projects delivered", color: "#00e5ff", id: "STAT_02" },
    { icon: <GraduationCap size={20} />, value: "6", suffix: "+", label: "Months Active", desc: "Continuous development journey", color: "#f59e0b", id: "STAT_03" },
    { icon: <Award size={20} />, value: "20", suffix: "+", label: "Certificates", desc: "Courses, technical and Non-technical, Hackathons ", color: "#a855f7", id: "STAT_04" },
    { icon: <Flame size={20} />, value: "4167", suffix: "+", label: "GitHub Commits", desc: "Consistent daily contributions", color: "#39d353", id: "STAT_05" },
    { icon: <Target size={20} />, value: "157", suffix: "", label: "InterviewBit Solved", desc: "Easy, Medium & Hard problems", color: "#00e5ff", id: "STAT_06" },
    { icon: <Crown size={20} />, value: "8", suffix: ".2+", label: "Current SGPA", desc: "B.Tech CSE — BGIEM RGPV", color: "#f59e0b", id: "STAT_07" },
    { icon: <Zap size={20} />, value: "93", suffix: ".2%", label: "Top Score (10th)", desc: "School Topper — MPBSE Board", color: "#a855f7", id: "STAT_08" },
];

const majorAchievements = [
    {
        id: "ACH_01",
        icon: <Medal size={18} />,
        title: "Academic Excellence & School Topper",
        subtitle: "MPBSE Board — Class 10th & 12th",
        year: "2020 – 2023",
        tag: "ACADEMIC",
        accentColor: "#39d353",
        points: [
            "93.2% in Class 10th — School Topper for 3 consecutive years",
            "88.6% in Class 12th with Maths & Biology — First Division",
            "Best Student of the Year Award — Sarvottam Higher Secondary School",
            "Consistent rank holder from Class 8th through 12th",
        ],
    },
    {
        id: "ACH_02",
        icon: <Trophy size={18} />,
        title: "Hackathons & Competitive Events",
        subtitle: "SIH • BrahmX • College Events",
        year: "2023 – 2025",
        tag: "COMPETITION",
        accentColor: "#00e5ff",
        points: [
            "Participated in Smart India Hackathon (SIH) — national level",
            "Competed in BrahmX Hackathon with full-stack project submission",
            "Top-10 rank in first-year B.Tech mid-term exams (SGPA 8.81)",
            "Active participant in college-level technical and coding events",
        ],
    },
    {
        id: "ACH_03",
        icon: <BookOpen size={18} />,
        title: "Certifications & Online Learning",
        subtitle: "NPTEL • freeCodeCamp • Cisco • Oracle",
        year: "2023 – 2026",
        tag: "CERTIFICATION",
        accentColor: "#f59e0b",
        points: [
            "NPTEL DBMS — Silver + Elite Certificate (IIT Kharagpur)",
            "freeCodeCamp — Frontend & Full Stack Web Development",
            "Cisco Networking & Python — 6 certificates + 3 badges + 14 achievements",
            "Oracle Web Design Certificate — Virtual Internship completion",
        ],
    },
    {
        id: "ACH_04",
        icon: <Cpu size={18} />,
        title: "DSA & Coding Platform Milestones",
        subtitle: "InterviewBit • GitHub",
        year: "2024 – 2026",
        tag: "CODING",
        accentColor: "#a855f7",
        points: [
            "157 LeetCode problems solved across Easy, Medium & Hard tiers",
            "11 InterviewBit DSA badges with consistent streak record",
            "4,167+ GitHub contributions in a single year",
            "25 public repositories covering web, Java & C++ projects",
        ],
    },
    {
        id: "ACH_05",
        icon: <Globe size={18} />,
        title: "Freelancing & Real-World Delivery",
        subtitle: "Client Projects • Live Deployments",
        year: "2024 – Present",
        tag: "FREELANCE",
        accentColor: "#39d353",
        points: [
            "Delivered 2+ client projects as a freelance full stack developer",
            "Built and deployed Ghotul Homestay Platform — production ready",
            "Portfolio live at prayagsahuportfolio.netlify.app",
            "Open to new freelance opportunities and collaborations",
        ],
    },
    {
        id: "ACH_06",
        icon: <Star size={18} />,
        title: "Cultural, Arts & Extra-Curricular",
        subtitle: "Gita Exam • Government Quiz • Art",
        year: "2015 – Present",
        tag: "EXTRA",
        accentColor: "#00e5ff",
        points: [
            "Cleared Gita Talent Examination & Government Online Quiz",
            "Awarded in Sanskratik Gyan Exam — 2015, 2018, 2022",
            "Created city designs & art sketches using C graphics.h library",
            "Republic Day participant and active school cultural representative",
        ],
    },
];

const trophyItems = [
    { label: "NPTEL Silver + Elite", year: "2025", color: "#f59e0b", icon: "🏅" },
    { label: "SIH Participant", year: "2024", color: "#39d353", icon: "⚡" },
    { label: "Best Student Award", year: "2023", color: "#00e5ff", icon: "🏆" },
    { label: "School Topper (10th)", year: "2021", color: "#a855f7", icon: "👑" },
    { label: "BrahmX Hackathon", year: "2024", color: "#39d353", icon: "🚀" },
    { label: "Oracle Cert", year: "2025", color: "#f59e0b", icon: "📜" },
    { label: "freeCodeCamp Cert", year: "2023", color: "#00e5ff", icon: "💻" },
    { label: "157 LeetCode Solved", year: "2026", color: "#a855f7", icon: "🎯" },
];

/* ─── Stat Card ──────────────────────────────────────────── */
function StatCard({ stat }) {
    const [hovered, setHovered] = useState(false);
    const ac = stat.color;
    return (
        <div
            className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden transition-all duration-300 group"
            style={{ borderLeftWidth: 2, borderLeftColor: hovered ? ac : "#1a2332" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ScanlineOverlay />
            {hovered && <CornerAccent color={ac} />}

            <div className="p-5 relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <div className="w-8 h-8 border border-[#1a2332] flex items-center justify-center transition-all duration-200"
                        style={{ borderColor: hovered ? ac : "#1a2332", color: hovered ? ac : "#30363d" }}>
                        {stat.icon}
                    </div>
                    <span className="font-mono text-[8px] text-[#8b949e] tracking-widest">{stat.id}</span>
                </div>
                <div className="font-mono font-black text-3xl mb-1 transition-all duration-200"
                    style={{ color: hovered ? ac : "#fff", textShadow: hovered ? `0 0 16px ${ac}60` : "none" }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-[11px] font-bold text-white mb-1 tracking-wide">{stat.label}</div>
                <div className="font-mono text-[9px] text-[#8b949e] tracking-wider">{stat.desc}</div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-[2px] w-0 transition-all duration-500 group-hover:w-full" style={{ background: ac }} />
        </div>
    );
}

/* ─── Achievement Card ───────────────────────────────────── */
function AchCard({ item, index }) {
    const [open, setOpen] = useState(false);
    const ac = item.accentColor;
    return (
        <div
            className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,211,83,0.06)] cursor-pointer"
            style={{ borderLeftWidth: 3, borderLeftColor: ac }}
            onClick={() => setOpen(!open)}
        >
            <ScanlineOverlay />
            <CornerAccent color={open ? ac : "#1a2332"} />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 relative z-10">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                        style={{ borderColor: ac, color: ac, background: open ? `${ac}15` : "transparent" }}>
                        {item.icon}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-mono text-[8px] border px-1.5 py-0.5 tracking-widest"
                                style={{ color: ac, borderColor: ac }}>{item.tag}</span>
                            <span className="font-mono text-[8px] text-[#30363d] tracking-widest">{item.year}</span>
                        </div>
                        <h3 className="font-mono font-black text-[13px] text-white leading-tight">{item.title}</h3>
                        <p className="font-mono text-[9px] tracking-wider mt-0.5" style={{ color: ac }}>{item.subtitle}</p>
                    </div>
                </div>
                <ChevronRight size={14} className="shrink-0 text-[#30363d] transition-transform duration-300 ml-2"
                    style={{ transform: open ? "rotate(90deg)" : "rotate(0)", color: open ? ac : "#30363d" }} />
            </div>

            {/* Expandable content */}
            <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: open ? "300px" : "0" }}>
                <div className="px-5 pb-5 border-t border-[#1a2332] relative z-10">
                    <div className="space-y-2 pt-4">
                        {item.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: ac }}>▸</span>
                                <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed">{pt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom animated bar */}
            <div className="h-[1px] transition-all duration-500" style={{ background: open ? `linear-gradient(to right, ${ac}, transparent)` : "transparent" }} />
        </div>
    );
}

/* ─── Trophy Ticker ──────────────────────────────────────── */
function TrophyTicker() {
    return (
        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
            <ScanlineOverlay />
            <CornerAccent color="#39d353" />
            <WindowChrome filename="TROPHY_FEED.live" status="STREAMING" statusColor="#39d353" />
            <div className="relative overflow-hidden py-4">
                {/* Left/right fades */}
                <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #0d1117, transparent)" }} />
                <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #0d1117, transparent)" }} />
                <div className="flex gap-6 ticker-animate" style={{ width: "max-content" }}>
                    {[...trophyItems, ...trophyItems, ...trophyItems].map((t, i) => (
                        <div key={i} className="flex items-center gap-2 border border-[#1a2332] bg-[#010409] px-4 py-2 shrink-0 hover:border-[#39d353] transition-colors duration-200"
                            style={{ borderLeftWidth: 2, borderLeftColor: t.color }}>
                            <span className="text-base">{t.icon}</span>
                            <div>
                                <div className="font-mono text-[10px] font-bold text-white whitespace-nowrap">{t.label}</div>
                                <div className="font-mono text-[8px] tracking-widest" style={{ color: t.color }}>{t.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Progress Ring ──────────────────────────────────────── */
function ProgressRing({ value, max, label, color, size = 80 }) {
    const r = (size / 2) - 8;
    const circ = 2 * Math.PI * r;
    const [progress, setProgress] = useState(0);
    useEffect(() => { setTimeout(() => setProgress((value / max) * circ), 400); }, [value, max, circ]);
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="-rotate-90">
                    <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1a2332" strokeWidth="4" />
                    <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4"
                        strokeDasharray={circ} strokeDashoffset={circ - progress}
                        style={{ transition: "stroke-dashoffset 1.2s ease", filter: `drop-shadow(0 0 4px ${color})` }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono font-black text-[11px] text-white">{value}</span>
                </div>
            </div>
            <span className="font-mono text-[8px] text-[#8b949e] tracking-widest text-center uppercase">{label}</span>
        </div>
    );
}

/* ─── Main Export ────────────────────────────────────────── */
export default function AchievementsPage() {
    const [glitch, setGlitch] = useState(false);
    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 7000);
        return () => clearInterval(t);
    }, []);

    return (
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">
            <section className="relative py-28 pt-0 overflow-hidden"
                id='achievements'
            style={{ fontFamily: "'Courier New', Courier, monospace" }}>

            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
            {/* Glows */}
            <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#39d353] opacity-[0.02] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f59e0b] opacity-[0.02] rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* ── HEADER ── */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse shadow-[0_0_8px_#39d353]" />
                        <span className="font-mono text-[10px] tracking-[0.3em] text-[#39d353] uppercase">SYSTEM_MODULE / ACHIEVEMENTS</span>
                    </div>
                    <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                        <ScanlineOverlay />
                        <CornerAccent color="#39d353" />
                        <WindowChrome filename="ACHIEVEMENTS_LOG.exe" />
                        <div className="px-8 py-6">
                            <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"}`}
                                style={{ textShadow: "0 0 24px rgba(57,211,83,0.25)" }}>
                                ACHIEVEMENTS_<span className="text-[#39d353]">ARCHIVE</span>
                                <span className="inline-block w-[10px] h-[18px] bg-[#39d353] animate-pulse ml-2 align-middle" />
                            </h2>
                            <p className="font-mono text-[12px] text-[#8b949e] mt-3 tracking-wider max-w-2xl">
                                $ cat ./achievements/* — Academic excellence, certifications, competitions & real-world milestones.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── TROPHY TICKER ── */}
                <div className="mb-8">
                    <TrophyTicker />
                </div>

                {/* ── STATS GRID 4+4 ── */}
                <div className="mb-8">
                    <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                        <ScanlineOverlay />
                        <CornerAccent color="#f59e0b" />
                        <WindowChrome filename="STATS_OVERVIEW.log" status="COMPUTED" statusColor="#f59e0b" />
                        <div className="p-6">
                            <div className="font-mono text-[9px] text-[#f59e0b] tracking-[0.2em] mb-4">$ stats --all --verbose</div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                                {stats.map((s, i) => <StatCard key={i} stat={s} />)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MAIN GRID: Achievements left + Visual right ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-8">

                    {/* LEFT: Achievement accordion cards */}
                    <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                        <ScanlineOverlay />
                        <CornerAccent color="#39d353" />
                        <WindowChrome filename="ACHIEVEMENTS_DETAIL.log" status="ACTIVE" statusColor="#39d353" />
                        <div className="p-5 space-y-2 relative z-10">
                            <div className="font-mono text-[9px] text-[#8b949e] tracking-[0.2em] mb-4">
                                $ ls ./achievements/ — Click to expand records
                            </div>
                            {majorAchievements.map((item, i) => (
                                <AchCard key={item.id} item={item} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Visual panel */}
                    <div className="flex flex-col gap-4">

                        {/* Achievements image */}
                        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden flex-1">
                            <ScanlineOverlay />
                            <CornerAccent color="#a855f7" />
                            <WindowChrome filename="AWARDS_GALLERY.png" status="LOADED" statusColor="#a855f7" />
                            <div className="p-4 relative z-10">
                                <div className="relative border border-[#1a2332] overflow-hidden group">
                                    <CornerAccent color="#a855f7" />
                                    <img src="/images/01ach.png" alt="Achievements"
                                        className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                        style={{ filter: "grayscale(10%)" }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-3 left-3 font-mono text-[8px] text-[#8b949e] tracking-widest">
                                        AWARDS & RECOGNITION
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progress rings panel */}
                        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                            <ScanlineOverlay />
                            <CornerAccent color="#00e5ff" />
                            <WindowChrome filename="PROGRESS_METRICS.log" status="LIVE" statusColor="#00e5ff" />
                            <div className="p-5 relative z-10">
                                <div className="font-mono text-[9px] text-[#00e5ff] tracking-[0.2em] mb-4">$ metrics --visual</div>
                                <div className="flex items-center justify-around flex-wrap gap-4">
                                    <ProgressRing value={93} max={100} label="10th Score" color="#a855f7" />
                                    <ProgressRing value={88} max={100} label="12th Score" color="#00e5ff" />
                                    <ProgressRing value={82} max={100} label="CGPA" color="#39d353" />
                                    <ProgressRing value={157} max={200} label="InterviewBit" color="#f59e0b" />
                                </div>
                            </div>
                        </div>

                        {/* Badge count panel */}
                        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                            <ScanlineOverlay />
                            <CornerAccent color="#39d353" />
                            <div className="p-4 relative z-10">
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { label: "CERTS", value: "15+", color: "#39d353" },
                                        { label: "BADGES", value: "20+", color: "#00e5ff" },
                                        { label: "EVENTS", value: "10+", color: "#f59e0b" },
                                        { label: "PLATFORMS", value: "05", color: "#a855f7" },
                                        { label: "AWARDS", value: "08+", color: "#39d353" },
                                        { label: "COMMITS", value: "4K+", color: "#00e5ff" },
                                    ].map(b => (
                                        <div key={b.label} className="border border-[#1a2332] bg-[#010409] px-2 py-2 text-center hover:border-[#39d353] transition-colors duration-200">
                                            <div className="font-mono font-black text-base" style={{ color: b.color }}>{b.value}</div>
                                            <div className="font-mono text-[7px] text-[#30363d] tracking-widest mt-0.5">{b.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── FOOTER ── */}
                <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] text-[#30363d] tracking-widest">
                        $ achievements --all --sorted-by-year _
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />
                        <span className="font-mono text-[9px] text-[#39d353] tracking-[0.2em]">ALL RECORDS LOADED</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .ticker-animate {
          animation: ticker 18s linear infinite;
        }
        .ticker-animate:hover {
          animation-play-state: paused;
        }
      `}</style>
            </section>
        </ParallaxSection>
    );
}