

// // // export default function SkillCard() {


// // //     return (

// // //         <section
// // //             id="skills"
// // //             className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
// // //         >
// // //             {/* Background Pattern */}
// // //             <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%23000000 fill-opacity=%220.02%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')"></div>

// // //             <div className="max-w-7xl mx-auto px-6 relative z-10">
// // //                 {/* Heading */}
// // //                 <div className="text-center mb-16">
// // //                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// // //                         Skills &amp;{" "}
// // //                         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // //                             Expertise
// // //                         </span>
// // //                     </h2>

// // //                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //                         A comprehensive overview of my technical skills and proficiency levels
// // //                         across various technologies
// // //                     </p>
// // //                 </div>

// // //                 {/* SKILLS GRID */}
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

// // //                     {/* FRONTEND */}
// // //                     <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
// // //                         <h3 className="text-2xl font-bold text-gray-900 mb-6">
// // //                             Frontend Development
// // //                         </h3>

// // //                         <SkillBar title="React.js" percent="95%" width="95%" color="from-blue-500 to-blue-600" />
// // //                         <SkillBar title="JavaScript / TypeScript" percent="90%" width="90%" color="from-green-500 to-green-600" />
// // //                         <SkillBar title="HTML5 / CSS3" percent="98%" width="98%" color="from-purple-500 to-purple-600" />
// // //                         <SkillBar title="Tailwind CSS" percent="92%" width="92%" color="from-cyan-500 to-cyan-600" />
// // //                     </div>

// // //                     {/* BACKEND & TOOLS */}
// // //                     <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
// // //                         <h3 className="text-2xl font-bold text-gray-900 mb-6">
// // //                             Backend &amp; Tools
// // //                         </h3>

// // //                         <SkillBar title="Node.js" percent="88%" width="88%" color="from-green-500 to-green-600" />
// // //                         <SkillBar title="MongoDB" percent="85%" width="85%" color="from-emerald-500 to-emerald-600" />
// // //                         <SkillBar title="Git / GitHub" percent="93%" width="93%" color="from-orange-500 to-orange-600" />
// // //                         <SkillBar title="AWS / Docker" percent="80%" width="80%" color="from-blue-500 to-blue-600" />
// // //                     </div>

// // //                     {/* DESIGN & OTHERS */}
// // //                     <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
// // //                         <h3 className="text-2xl font-bold text-gray-900 mb-6">
// // //                             Design &amp; Others
// // //                         </h3>

// // //                         <SkillBar title="UI / UX Design" percent="87%" width="87%" color="from-pink-500 to-pink-600" />
// // //                         <SkillBar title="Figma" percent="90%" width="90%" color="from-indigo-500 to-indigo-600" />
// // //                         <SkillBar title="Python" percent="82%" width="82%" color="from-yellow-500 to-yellow-600" />
// // //                         <SkillBar title="Adobe Creative Suite" percent="78%" width="78%" color="from-red-500 to-red-600" />
// // //                     </div>

// // //                 </div>

// // //                 {/* BOTTOM NOTE */}
// // //                 <div className="mt-16 text-center">
// // //                     <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
// // //                         <h3 className="text-2xl font-bold mb-4">
// // //                             Always Learning &amp; Growing
// // //                         </h3>
// // //                         <p className="text-lg opacity-90">
// // //                             Continuously expanding my skill set with the latest technologies and
// // //                             industry best practices to deliver cutting-edge solutions.
// // //                         </p>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // }
// // // function SkillBar({ title, percent, width, color }) {
// // //     return (
// // //         <div className="mb-5">
// // //             <div className="flex justify-between items-center mb-2">
// // //                 <span className="font-semibold text-gray-700">{title}</span>
// // //                 <span className="font-bold text-gray-600">{percent}</span>
// // //             </div>

// // //             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
// // //                 <div
// // //                     className={`h-full rounded-full bg-gradient-to-r ${color}`}
// // //                     style={{ width }}
// // //                 ></div>
// // //             </div>
// // //         </div>
// // //     );
// // // }











// // 'use client';

// // import {
// //     Code2,
// //     Layout,
// //     Database,
// //     Server,
// //     Cpu,
// //     Palette,
// //     GitBranch,
// // } from "lucide-react";
// // import ParallaxSection from "@/components/ui/ParallaxSection";
// // export default function SkillCard() {
// //     return (
// //         <ParallaxSection
// //             // backgroundImage="/img/img2.jpeg"
// //             backgroundImage="/images/bg.png"
// //             height="400px"
// //         >
// //             <section
// //                 id="skills"
// //                 className="py-20  relative overflow-hidden"
// //             >
// //                 {/* Background Glow */}
// //                 <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
// //                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

// //                 <div className="max-w-7xl mx-auto px-6 relative z-10">

// //                     {/* Heading */}
// //                     <div className="text-center mb-16">

// //                         <div
// //                             className={`w-full lg:px-[12%] px-[5%]  flex flex-col justify-center items-center
// //   `}
// //                         >

// //                             <div className="flex items-center justify-center gap-6 mb-4">

// //                                 {/* LEFT LINE */}
// //                                 <div
// //                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-r from-transparent via-cyan-400 to-blue-400`}
// //                                 ></div>

// //                                 {/* TITLE */}
// //                                 <h1
// //                                     className={`text-3xl sm:text-4xl md:text-5xl  font-extrabold tracking-wide drop-shadow-lg transition-all bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
// //                                 >
// //                                     <h2 className="text-4xl md:text-5xl font-bold text-white ">
// //                                         Skills &{" "}
// //                                         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
// //                                             Expertise
// //                                         </span>
// //                                     </h2>
// //                                 </h1>

// //                                 {/* RIGHT LINE */}
// //                                 <div
// //                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
// //                                 ></div>

// //                             </div>

// //                         </div>

// //                         <p className="text-lg text-gray-400 max-w-3xl mx-auto">
// //                             A comprehensive overview of my technical skills and proficiency
// //                             across frontend, backend, programming, and design technologies
// //                         </p>
// //                     </div>

// //                     {/* SKILLS GRID */}
// //                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

// //                         {/* FRONTEND */}
// //                         <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition">
// //                             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
// //                                 <Layout className="text-cyan-400" />
// //                                 Frontend Development
// //                             </h3>

// //                             <SkillBar title="React.js" percent="90%" width="90%" />
// //                             <SkillBar title="Next.js" percent="85%" width="85%" />
// //                             <SkillBar title="HTML5 / CSS3" percent="95%" width="95%" />
// //                             <SkillBar title="Tailwind CSS" percent="92%" width="92%" />
// //                             <SkillBar title="JavaScript" percent="88%" width="88%" />
// //                         </div>

// //                         {/* BACKEND & DATABASE */}
// //                         <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition">
// //                             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
// //                                 <Server className="text-cyan-400" />
// //                                 Backend & Database
// //                             </h3>

// //                             <SkillBar title="Node.js" percent="85%" width="85%" />
// //                             <SkillBar title="Express.js" percent="85%" width="85%" />
// //                             <SkillBar title="MongoDB" percent="80%" width="80%" />
// //                             <SkillBar title="PostgreSQL" percent="78%" width="78%" />
// //                             <SkillBar title="Supabase" percent="75%" width="75%" />
// //                         </div>

// //                         {/* PROGRAMMING & TOOLS */}
// //                         <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition">
// //                             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
// //                                 <Cpu className="text-cyan-400" />
// //                                 Programming & Tools
// //                             </h3>

// //                             <SkillBar title="C++" percent="90%" width="90%" />
// //                             <SkillBar title="Java" percent="88%" width="88%" />
// //                             <SkillBar title="Python" percent="70%" width="70%" />
// //                             <SkillBar title="Git / GitHub" percent="93%" width="93%" />
// //                             <SkillBar title="Figma / Canva" percent="85%" width="85%" />
// //                         </div>

// //                     </div>

// //                     {/* BOTTOM NOTE */}
// //                     <div className="mt-16 text-center">
// //                         <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
// //                             <h3 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
// //                                 <GitBranch />
// //                                 Always Learning & Growing
// //                             </h3>
// //                             <p className="text-lg opacity-90 max-w-3xl mx-auto">
// //                                 I continuously improve my skills by learning new technologies,
// //                                 working on real-world projects, and following industry best
// //                                 practices to build scalable and efficient solutions.
// //                             </p>
// //                         </div>
// //                     </div>

// //                 </div>
// //             </section>
// //         </ParallaxSection>
// //     );
// // }

// // /* SKILL BAR COMPONENT */
// // function SkillBar({ title, percent, width }) {
// //     return (
// //         <div className="mb-5">
// //             <div className="flex justify-between items-center mb-2">
// //                 <span className="font-medium text-gray-300">{title}</span>
// //                 <span className="font-semibold text-gray-400">{percent}</span>
// //             </div>

// //             <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
// //                 <div
// //                     className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
// //                     style={{ width }}
// //                 ></div>
// //             </div>
// //         </div>
// //     );
// // }









// 'use client';

// import { Github, Flame, Code2 } from "lucide-react";

// export default function CodingStatsSection() {

//     const skills = [
//         { name: "React.js", level: 90 },
//         { name: "Next.js", level: 85 },
//         { name: "Node.js", level: 88 },
//         { name: "Java", level: 87 },
//         { name: "C++", level: 90 },
//         { name: "MongoDB", level: 80 },
//     ];

//     return (
//         <section className="relative py-28 text-white bg-[#0a0a0a] overflow-hidden">

//             {/* GRID BACKGROUND */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,160,70,0.08),transparent_70%)]" />

//             <div className="max-w-7xl mx-auto px-6 relative z-10">

//                 {/* HEADER */}
//                 <div className="max-w-6xl mx-auto px-6 mb-16">
//                     <div className="bg-[#111] border border-white/10 p-4 flex items-center gap-4 shadow-lg">
//                         <div className="flex gap-2">
//                             <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//                             <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
//                             <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//                         </div>
//                         <div className="font-mono text-lg tracking-wide">
//                             CODING_STATS<span className="text-[#6ea046]">.txt</span>
//                         </div>
//                         <div className="ml-auto text-xs bg-[#6ea046] px-3 py-1 text-black font-semibold">
//                             LIVE_FEED
//                         </div>
//                     </div>
//                 </div>

//                 {/* MAIN GRID */}
//                 <div className="grid lg:grid-cols-2 gap-14">

//                     {/* ================= LEFT : GITHUB PANEL ================= */}
//                     <div className="bg-[#111] border border-[#1a1a1a] shadow-[0_0_40px_rgba(110,160,70,0.15)] p-10 rounded-xl">

//                         {/* PANEL HEADER */}
//                         <div className="flex items-center justify-between mb-8">
//                             <div className="flex items-center gap-3">
//                                 <Github className="text-[#6ea046]" />
//                                 <h3 className="text-2xl font-bold tracking-wide">
//                                     GITHUB
//                                 </h3>
//                             </div>

//                             <span className="text-[#6ea046] font-mono text-lg">
//                                 475+
//                             </span>
//                         </div>

//                         {/* USER INFO */}
//                         <div className="mb-10">
//                             <p className="text-xl font-semibold">
//                                 prayag29-sahu
//                             </p>
//                             <p className="text-[#6ea046] text-sm font-mono">
//                                 MIDNIGHT CODER
//                             </p>
//                         </div>

//                         {/* STATS GRID */}
//                         <div className="grid grid-cols-2 gap-6 mb-10">

//                             <StatBox label="Repositories" value="25" />
//                             <StatBox label="Followers" value="23" />
//                             <StatBox label="Commits" value="475+" />
//                             <StatBox label="Joined" value="Jul 2025" />

//                         </div>

//                         {/* STREAK BOX */}
//                         <div className="border border-[#6ea046]/30 p-6 rounded-lg mb-8">

//                             <div className="flex items-center gap-3 mb-4">
//                                 <Flame className="text-[#6ea046]" />
//                                 <span className="font-semibold">
//                                     Current Streak
//                                 </span>
//                             </div>

//                             <p className="text-3xl font-bold text-[#6ea046]">
//                                 157 Days
//                             </p>

//                         </div>

//                         {/* BUTTON */}
//                         <button className="w-full border border-[#6ea046] text-[#6ea046] py-3 hover:bg-[#6ea046] hover:text-black transition font-semibold tracking-wide">
//                             VIEW_GITHUB →
//                         </button>

//                     </div>


//                     {/* ================= RIGHT : SKILLS PANEL ================= */}
//                     <div className="bg-[#111] border border-[#1a1a1a] shadow-[0_0_40px_rgba(110,160,70,0.15)] p-10 rounded-xl">

//                         <div className="flex items-center gap-3 mb-10">
//                             <Code2 className="text-[#6ea046]" />
//                             <h3 className="text-2xl font-bold tracking-wide">
//                                 SKILLS_MATRIX
//                             </h3>
//                         </div>

//                         <div className="space-y-8">

//                             {skills.map((skill, index) => (
//                                 <div key={index}>

//                                     <div className="flex justify-between text-sm mb-2">
//                                         <span>{skill.name}</span>
//                                         <span className="text-[#6ea046] font-semibold">
//                                             {skill.level}%
//                                         </span>
//                                     </div>

//                                     <div className="w-full h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
//                                         <div
//                                             className="h-full bg-gradient-to-r from-[#6ea046] to-[#8bc34a] transition-all duration-700"
//                                             style={{ width: `${skill.level}%` }}
//                                         />
//                                     </div>

//                                 </div>
//                             ))}

//                         </div>

//                         {/* BUTTON */}
//                         <button className="mt-10 w-full border border-[#6ea046] text-[#6ea046] py-3 hover:bg-[#6ea046] hover:text-black transition font-semibold tracking-wide">
//                             EXPLORE_SKILLS →
//                         </button>

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }


// /* ================= SMALL REUSABLE STAT BOX ================= */
// function StatBox({ label, value }) {
//     return (
//         <div className="border border-[#6ea046]/30 p-6 rounded-lg hover:border-[#6ea046] transition-all">
//             <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">
//                 {label}
//             </p>
//             <p className="text-2xl font-bold text-[#6ea046]">
//                 {value}
//             </p>
//         </div>
//     );
// }





import { useState, useEffect, useRef } from "react";
import ParallaxSection from '@/components/ui/ParallaxSection';
const GITHUB_DATA = {
    username: "prayag29-sahu",
    label: "FULL STACK DEV",
    repositories: 25,
    commits: "4167+",
    followers: 1,
    joined: "2023",
    contributions: "4,167",
    topLanguages: ["C++", "HTML","CSS", "Java", "JavaScript","React"],
};

const SKILLS = {
    frontend: [
        { name: "React.js", pct: 85 },
        { name: "Next.js", pct: 80 },
        { name: "HTML5 / CSS3", pct: 90 },
        { name: "Tailwind CSS", pct: 72 },
        { name: "JavaScript", pct: 91 },
    ],
    backend: [
        { name: "Node.js", pct: 80 },
        { name: "Express.js", pct: 85 },
        { name: "MongoDB", pct: 85 },
        { name: "PostgreSQL", pct: 70 },
        { name: "Supabase", pct: 75 },
    ],
    tools: [
        { name: "C++", pct: 90 },
        { name: "Java", pct: 80 },
        { name: "Python", pct: 50 },
        { name: "Git / GitHub", pct: 93 },
        { name: "Figma / Canva", pct: 85 },
    ],
};

// --- Contribution Heatmap Generator ---
function generateHeatmap() {
    const weeks = 52;
    const days = 7;
    const data = [];
    for (let w = 0; w < weeks; w++) {
        const week = [];
        for (let d = 0; d < days; d++) {
            const rand = Math.random();
            let level = 0;
            if (w > 30) {
                if (rand > 0.25) level = Math.floor(Math.random() * 4) + 1;
                else level = 0;
            } else if (w > 15) {
                if (rand > 0.45) level = Math.floor(Math.random() * 3) + 1;
            } else {
                if (rand > 0.6) level = Math.floor(Math.random() * 2) + 1;
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
        "bg-[#0d1117] border border-[#1a2332]",
        "bg-[#0e4429]",
        "bg-[#006d32]",
        "bg-[#26a641]",
        "bg-[#39d353]",
    ];
    return (
        <div
            className={`w-[10px] h-[10px] rounded-[2px] ${colors[level]} transition-all duration-200 hover:scale-125 hover:brightness-125`}
        />
    );
}

function SkillBar({ name, pct, delay = 0 }) {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const t = setTimeout(() => setWidth(pct), 600 + delay);
        return () => clearTimeout(t);
    }, [pct, delay]);

    const color =
        pct >= 90
            ? "from-[#39d353] to-[#00ff88]"
            : pct >= 85
                ? "from-[#00e5ff] to-[#00a8cc]"
                : pct >= 80
                    ? "from-[#00d4ff] to-[#0099bb]"
                    : "from-[#00b4d8] to-[#0077a8]";

    return (
        <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-mono text-[#8b949e] tracking-wider uppercase">{name}</span>
                <span className="text-[11px] font-mono font-bold text-[#39d353]">{pct}%</span>
            </div>
            <div className="h-[5px] bg-[#0d1117] rounded-full overflow-hidden border border-[#1a2332]">
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-[1200ms] ease-out shadow-[0_0_8px_rgba(57,211,83,0.4)]`}
                    style={{ width: `${width}%` }}
                />
            </div>
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
            {!done && <span className="animate-pulse text-[#39d353]">█</span>}
        </span>
    );
}

function StatBox({ label, value, glow = false }) {
    return (
        <div className={`border ${glow ? "border-[#39d353]" : "border-[#1a2332]"} rounded bg-[#0d1117] p-3 relative overflow-hidden group hover:border-[#39d353] transition-colors duration-300`}>
            {glow && (
                <div className="absolute inset-0 bg-[#39d353] opacity-[0.03] pointer-events-none" />
            )}
            <div className="text-[9px] font-mono text-[#39d353] tracking-[0.2em] uppercase mb-1">{label}</div>
            <div className="text-2xl font-mono font-bold text-white group-hover:text-[#39d353] transition-colors duration-200">{value}</div>
        </div>
    );
}

function ScanlineOverlay() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            }}
        />
    );
}

export default function DevStats() {
    const [activeSkill, setActiveSkill] = useState("frontend");
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 150);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const skillTabs = [
        { key: "frontend", label: "FRONTEND", icon: "⬛" },
        { key: "backend", label: "BACKEND", icon: "⬛" },
        { key: "tools", label: "TOOLS", icon: "⬛" },
    ];

    const activeSkills = SKILLS[activeSkill];

    return (

        <ParallaxSection backgroundImage="/images/bg.png" height="auto">
            <div
                className="min-h-screen  text-white relative overflow-hidden flex items-center justify-center p-4 md:p-8"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}
            >
                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(57,211,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,211,83,0.5) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
                {/* Glow orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39d353] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00e5ff] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 w-full max-w-[1250px]">
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#39d353] animate-pulse shadow-[0_0_8px_#39d353]" />
                            <h1
                                className={`text-3xl md:text-4xl font-black tracking-[0.1em] uppercase ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"} transition-all duration-75`}
                                style={{ textShadow: "0 0 20px rgba(57,211,83,0.3)" }}
                            >
                                DEV_<span className="text-[#39d353]">STATS</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#39d353] tracking-[0.2em]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />
                            LIVE
                        </div>
                    </div>

                    <div className="border-b border-[#1a2332] mb-8" />

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* ===== LEFT: GITHUB PANEL ===== */}
                        <div className="border border-[#1a2332] rounded-lg bg-[#0d1117] relative overflow-hidden">
                            <ScanlineOverlay />
                            {/* Panel header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a2332]">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded bg-[#39d353] flex items-center justify-center">
                                        <svg viewBox="0 0 16 16" className="w-3 h-3 fill-[#010409]">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#8b949e] tracking-[0.2em] uppercase">GITHUB</span>
                                </div>
                                <span className="text-[#39d353] font-mono font-bold text-lg">{GITHUB_DATA.commits}</span>
                            </div>

                            <div className="p-5 relative z-10">
                                {/* Profile row */}
                                <div className="flex items-center justify-between mb-5">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 rounded-full bg-[#39d353] flex items-center justify-center">
                                                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-[#010409]">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                                </svg>
                                            </div>
                                            <span className="font-mono font-bold text-white text-base">{GITHUB_DATA.username}</span>
                                        </div>
                                        <div className="text-[9px] font-mono tracking-[0.25em] text-[#39d353] ml-8">{GITHUB_DATA.label}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[9px] font-mono text-[#8b949e] tracking-widest uppercase">CONTRIBUTIONS</div>
                                        <div
                                            className="text-2xl font-mono font-black text-[#39d353]"
                                            style={{ textShadow: "0 0 12px rgba(57,211,83,0.5)" }}
                                        >
                                            <TypewriterText text={GITHUB_DATA.contributions} speed={80} />
                                        </div>
                                    </div>
                                </div>

                                {/* Stat boxes */}
                                <div className="grid grid-cols-2 gap-2 mb-5">
                                    <StatBox label="REPOSITORIES" value={GITHUB_DATA.repositories} />
                                    <StatBox label="FOLLOWERS" value={GITHUB_DATA.followers} />
                                    <StatBox label="COMMITS" value={GITHUB_DATA.commits} glow />
                                    <StatBox label="SINCE" value={GITHUB_DATA.joined} />
                                </div>

                                {/* Languages */}
                                <div className="mb-5">
                                    <div className="text-[9px] font-mono text-[#8b949e] tracking-[0.2em] uppercase mb-2">TOP_LANGUAGES</div>
                                    <div className="flex gap-2 flex-wrap">
                                        {GITHUB_DATA.topLanguages.map((lang) => (
                                            <span
                                                key={lang}
                                                className="text-[10px] font-mono px-2 py-1 border border-[#39d353] text-[#39d353] rounded hover:bg-[#39d353] hover:text-[#010409] transition-colors duration-200 cursor-default"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Heatmap */}
                                <div className="border border-[#1a2332] rounded bg-[#010409] p-3 mb-5">
                                    <div className="text-[9px] font-mono text-[#39d353] tracking-[0.2em] mb-2 flex items-center gap-1">
                                        <span>MATRIX_OUTPUT</span>
                                        <div className="w-1 h-1 rounded-full bg-[#39d353] animate-pulse" />
                                    </div>
                                    {/* Month labels */}
                                    <div className="flex gap-[2px] mb-1 ml-0 overflow-hidden">
                                        {months.map((m, i) => (
                                            <div key={i} className="text-[8px] font-mono text-[#30363d] w-[40px] shrink-0">{m}</div>
                                        ))}
                                    </div>
                                    {/* Heatmap grid */}
                                    <div className="flex gap-[3px] overflow-hidden">
                                        {heatmapData.map((week, wi) => (
                                            <div key={wi} className="flex flex-col gap-[3px]">
                                                {week.map((level, di) => (
                                                    <HeatmapCell key={di} level={level} />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom bar */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#30363d]">
                                        <span>$</span>
                                        <span className="text-[#8b949e]">gh --stats _</span>
                                    </div>
                                    <a
                                        href={`https://github.com/${GITHUB_DATA.username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-2 border border-[#39d353] text-[#39d353] text-[10px] font-mono font-bold px-4 py-2 rounded hover:bg-[#39d353] hover:text-[#010409] transition-all duration-200 tracking-widest uppercase"
                                    >
                                        VIEW_GH
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ===== RIGHT: SKILLS PANEL ===== */}
                        <div className="border border-[#1a2332] rounded-lg bg-[#0d1117] relative overflow-hidden">
                            <ScanlineOverlay />
                            {/* Panel header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a2332]">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded bg-[#00e5ff] flex items-center justify-center">
                                        <svg viewBox="0 0 16 16" className="w-3 h-3 fill-[#010409]">
                                            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                                        </svg>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#8b949e] tracking-[0.2em] uppercase">SKILLS_MATRIX</span>
                                </div>
                                <span className="text-[#00e5ff] font-mono font-bold text-[10px] tracking-widest">#PROFICIENCY</span>
                            </div>

                            <div className="p-5 relative z-10">
                                {/* Profile row */}
                                <div className="flex items-center justify-between mb-5">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 rounded-full bg-[#161b22] border border-[#39d353] flex items-center justify-center text-[10px] text-[#39d353] font-bold">PS</div>
                                            <span className="font-mono font-bold text-white text-base">Prayag Sahu</span>
                                        </div>
                                        <div className="text-[9px] font-mono tracking-[0.25em] text-[#00e5ff] ml-8">FULL STACK ENGINEER</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[9px] font-mono text-[#8b949e] tracking-widest uppercase">OVERALL</div>
                                        <div
                                            className="text-2xl font-mono font-black text-[#00e5ff]"
                                            style={{ textShadow: "0 0 12px rgba(0,229,255,0.4)" }}
                                        >
                                            <TypewriterText text="83%" speed={100} />
                                        </div>
                                    </div>
                                </div>

                                {/* Skill Tabs */}
                                <div className="flex gap-1 mb-4 border border-[#1a2332] rounded p-1 bg-[#010409]">
                                    {skillTabs.map((tab) => (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveSkill(tab.key)}
                                            className={`flex-1 text-[9px] font-mono tracking-[0.15em] uppercase py-2 px-2 rounded transition-all duration-200 ${activeSkill === tab.key
                                                ? "bg-[#39d353] text-[#010409] font-bold shadow-[0_0_10px_rgba(57,211,83,0.3)]"
                                                : "text-[#8b949e] hover:text-white hover:bg-[#1a2332]"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Skills list */}
                                <div className="mb-5 min-h-[185px]">
                                    <div className="text-[9px] font-mono text-[#39d353] tracking-[0.2em] mb-3 flex items-center gap-1">
                                        <span>SKILL_LEVELS</span>
                                        <div className="w-1 h-1 rounded-full bg-[#39d353] animate-pulse" />
                                    </div>
                                    {activeSkills.map((skill, i) => (
                                        <SkillBar key={skill.name} name={skill.name} pct={skill.pct} delay={i * 80} />
                                    ))}
                                </div>

                                {/* Proficiency breakdown */}
                                <div className="border border-[#1a2332] rounded bg-[#010409] p-3 mb-5">
                                    <div className="text-[9px] font-mono text-[#8b949e] tracking-[0.2em] uppercase mb-3">SKILL_DISTRIBUTION</div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { label: "EXPERT", range: "90–100%", count: activeSkills.filter(s => s.pct >= 90).length, color: "#39d353" },
                                            { label: "ADVANCED", range: "75–89%", count: activeSkills.filter(s => s.pct >= 75 && s.pct < 90).length, color: "#00e5ff" },
                                            { label: "INTERMEDIATE", range: "<75%", count: activeSkills.filter(s => s.pct < 75).length, color: "#f59e0b" },
                                        ].map((tier) => (
                                            <div key={tier.label} className="border border-[#1a2332] rounded p-2 text-center">
                                                <div className="text-[8px] font-mono tracking-widest" style={{ color: tier.color }}>{tier.label}</div>
                                                <div className="text-xl font-mono font-bold text-white my-1">{tier.count}</div>
                                                <div className="text-[8px] font-mono text-[#8b949e]">{tier.range}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Portfolio link */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#30363d]">
                                        <span>$</span>
                                        <span className="text-[#8b949e]">skills --list _</span>
                                    </div>
                                    <a
                                        href="http://prayagsahuportfolio.netlify.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-2 border border-[#00e5ff] text-[#00e5ff] text-[10px] font-mono font-bold px-4 py-2 rounded hover:bg-[#00e5ff] hover:text-[#010409] transition-all duration-200 tracking-widest uppercase"
                                    >
                                        PORTFOLIO
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between text-[9px] font-mono text-[#8b949e] tracking-widest">
                        <span>© 2026 PRAYAG_SAHU.DEV</span>
                        <span className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#39d353] animate-pulse" />
                            ALL SYSTEMS OPERATIONAL
                        </span>
                    </div>
                </div>
            </div>
        </ParallaxSection>
    );
}