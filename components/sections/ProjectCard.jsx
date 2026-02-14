

// // export default function Project() {



// //     return (

// //         <section
// //             id="projects"
// //             className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
// //         >
// //             {/* Background Pattern */}
// //             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22/%3E%3C/g%3E%3C/svg%3E')"></div>

// //             <div className="max-w-7xl mx-auto px-6 relative z-10">

// //                 {/* Heading */}
// //                 <div className="text-center mb-16">
// //                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //                         Featured{" "}
// //                         <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
// //                             Projects
// //                         </span>
// //                     </h2>

// //                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// //                         Explore my latest work showcasing innovative solutions and cutting-edge
// //                         technologies
// //                     </p>
// //                 </div>

// //                 {/* PROJECT GRID */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// //                     {/* PROJECT 1 */}
// //                     <ProjectCard
// //                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-1-ec07c34233e041ce8e7a759844c27dcd.png"
// //                         title="E-Commerce Platform"
// //                         tags={["React", "Node.js"]}
// //                         description="A full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and responsive design optimized for all devices."
// //                         rating="4.9"
// //                         year="2023"
// //                     />

// //                     {/* PROJECT 2 */}
// //                     <ProjectCard
// //                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-2-35a4a61661314ce6a916071910a38eec.png"
// //                         title="AI Task Manager"
// //                         tags={["AI/ML", "Python"]}
// //                         description="An intelligent task management system powered by machine learning algorithms that automatically prioritizes tasks, predicts completion times, and optimizes workflow efficiency."
// //                         rating="4.8"
// //                         year="2023"
// //                     />

// //                     {/* PROJECT 3 */}
// //                     <ProjectCard
// //                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-3-fc0ac4b372c64a3eb3078c369dfa3543.png"
// //                         title="Real-time Chat App"
// //                         tags={["Socket.io", "Express"]}
// //                         description="A feature-rich real-time messaging application with end-to-end encryption, file sharing, video calls, and group chat functionality built with modern web technologies."
// //                         rating="4.7"
// //                         year="2023"
// //                     />

// //                     {/* PROJECT 4 */}
// //                     <ProjectCard
// //                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-4-412c6202801f41d6a3d7d5ab03c3c879.png"
// //                         title="Crypto Trading Platform"
// //                         tags={["Blockchain", "Vue.js"]}
// //                         description="A comprehensive cryptocurrency trading platform with real-time market data, advanced charting tools, portfolio management, and secure wallet integration for seamless trading experience."
// //                         rating="4.6"
// //                         year="2023"
// //                     />

// //                 </div>

// //                 {/* VIEW ALL BUTTON */}
// //                 <div className="mt-16 text-center">
// //                     <a
// //                         href="#"
// //                         className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all shadow-lg"
// //                     >
// //                         View All Projects →
// //                     </a>
// //                 </div>

// //             </div>
// //         </section>
// //     );
// // }
// // function ProjectCard({ image, title, tags, description, rating, year }) {
// //     return (
// //         <div className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">

// //             {/* Image */}
// //             <div className="relative overflow-hidden">
// //                 <img
// //                     src={image}
// //                     alt={title}
// //                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
// //             </div>

// //             {/* Content */}
// //             <div className="p-8">
// //                 <div className="flex items-center justify-between mb-4">
// //                     <h3 className="text-2xl font-bold text-white">
// //                         {title}
// //                     </h3>

// //                     <div className="flex gap-2">
// //                         {tags.map((tag) => (
// //                             <span
// //                                 key={tag}
// //                                 className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm"
// //                             >
// //                                 {tag}
// //                             </span>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 <p className="text-gray-300 mb-6 leading-relaxed">
// //                     {description}
// //                 </p>

// //                 <div className="flex items-center gap-3 text-sm text-gray-400">
// //                     <span>⭐ {rating}</span>
// //                     <span>•</span>
// //                     <span>{year}</span>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }






// 'use client';

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import ParallaxSection from "@/components/ui/ParallaxSection";
// export default function ProjectsPage() {

//     /* ===================== DATA ===================== */

//     const mainProjects = [
//         {
//             title: "Ghotul Homestay Platform",
//             stack: "React • Node • PostgreSQL",
//             image: "/images/projects/ghotul.png",
//         },
//         {
//             title: "3D Developer Portfolio",
//             stack: "Next.js • Tailwind",
//             image: "/images/projects/portfolio.png",
//         },
//         {
//             title: "Java Bank System",
//             stack: "Java • OOP • DB",
//             image: "/images/projects/bank.png",
//         },
//         {
//             title: "Online Quiz App",
//             stack: "HTML • JS • Django",
//             image: "/images/projects/quiz.png",
//         },
//     ];

//     const sliderProjects = [
//         {
//             title: "Mini CRM Tool",
//             description: "Small scale CRM dashboard",
//             image: "/images/projects/s1.png",
//             video: "/videos/s1.mp4",
//         },
//         {
//             title: "Landing Page UI",
//             description: "Marketing UI concept",
//             image: "/images/projects/s2.png",
//             video: "/videos/s2.mp4",
//         },
//         {
//             title: "Todo App",
//             description: "Task management app",
//             image: "/images/projects/s3.png",
//             video: "/videos/s3.mp4",
//         },
//         {
//             title: "Weather App",
//             description: "API based weather app",
//             image: "/images/projects/s4.png",
//             video: "/videos/s4.mp4",
//         },
//     ];

//     /* ===================== SLIDER STATE ===================== */

//     const [index, setIndex] = useState(0);

//     const next = () =>
//         setIndex((prev) => (prev + 1) % sliderProjects.length);

//     const prev = () =>
//         setIndex((prev) =>
//             prev === 0 ? sliderProjects.length - 1 : prev - 1
//         );

//     /* ===================== UI ===================== */




//     return (
//         <ParallaxSection
//             // backgroundImage="/img/img1.jpeg"
//             backgroundImage="/images/bg.png"
//             height="400px"
//         >
//             <section
//                 id="projects"
//                 className="min-h-screen py-20 "
//             >
//                 <div className="max-w-7xl mx-auto px-6">

//                     {/* HEADER */}
//                     <div className="text-center mb-14">
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
//                                         Project {" "}
//                                         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                                             Showcase
//                                         </span>
//                                     </h2>
//                                 </h1>

//                                 {/* RIGHT LINE */}
//                                 <div
//                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
//                                 ></div>

//                             </div>

//                         </div>
//                         <p className="text-gray-400 max-w-2xl mx-auto">
//                             Major projects on the left and a live preview slider on the right
//                         </p>
//                     </div>

//                     {/* MAIN GRID */}
//                     <div className="grid lg:grid-cols-3 gap-10 items-start">

//                         {/* ================= LEFT : 2x2 GRID ================= */}
//                         <div className="grid grid-cols-2 gap-6">
//                             {mainProjects.map((project, i) => (
//                                 <SmallProjectCard key={i} project={project} />
//                             ))}
//                         </div>

//                         {/* ================= RIGHT : BIG SLIDER ================= */}
//                         <div className="lg:col-span-2 relative">

//                             {/* SLIDE */}
//                             <ProjectSlide project={sliderProjects[index]} />

//                             {/* CONTENT STRIP */}
//                             <div className="bg-black/60 p-6 border border-white/10">
//                                 <h3 className="text-xl font-bold text-white">
//                                     {sliderProjects[index].title}
//                                 </h3>
//                                 <p className="text-gray-300 text-sm mt-1">
//                                     {sliderProjects[index].description}
//                                 </p>
//                             </div>

//                             {/* CONTROLS */}
//                             <div className="absolute bottom-6 right-6 flex gap-3">
//                                 <button
//                                     onClick={prev}
//                                     className="p-3 bg-black/70 hover:bg-cyan-500 rounded-full text-white transition"
//                                 >
//                                     <ChevronLeft />
//                                 </button>
//                                 <button
//                                     onClick={next}
//                                     className="p-3 bg-black/70 hover:bg-cyan-500 rounded-full text-white transition"
//                                 >
//                                     <ChevronRight />
//                                 </button>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </ParallaxSection>
//     );
// }

// /* ===================== SMALL CARD ===================== */

// function SmallProjectCard({ project }) {
//     return (
//         <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:border-cyan-400/50 transition">
//             <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-40 object-cover"
//             />
//             <div className="p-3 bg-black/50">
//                 <h4 className="text-sm font-semibold text-white">
//                     {project.title}
//                 </h4>
//                 <p className="text-xs text-gray-400">
//                     {project.stack}
//                 </p>
//             </div>
//         </div>
//     );
// }

// /* ===================== BIG SLIDE ===================== */

// function ProjectSlide({ project }) {
//     return (
//         <div className="relative group rounded-xl overflow-hidden border border-white/10">

//             {/* IMAGE */}
//             <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-[360px] object-cover transition-opacity duration-500 group-hover:opacity-0"
//             />

//             {/* VIDEO ON HOVER */}
//             <video
//                 src={project.video}
//                 muted
//                 loop
//                 playsInline
//                 className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 onMouseEnter={(e) => e.currentTarget.play()}
//                 onMouseLeave={(e) => {
//                     e.currentTarget.pause();
//                     e.currentTarget.currentTime = 0;
//                 }}
//             />
//         </div>
//     );
// }








'use client';

import { useState, useRef, useEffect } from "react";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Play, Code2, Terminal } from "lucide-react";

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

/* ─── Data ───────────────────────────────────────────────── */
const mainProjects = [
    {
        id: "PRJ_01",
        title: "Ghotul Homestay Platform",
        subtitle: "Full Stack Hospitality App",
        stack: ["React", "Node.js", "PostgreSQL", "Express"],
        description: "A complete homestay booking platform with real-time availability, user authentication, admin dashboard, payment integration and booking management system.",
        accentColor: "#39d353",
        tag: "FULLSTACK",
        github: "https://github.com/prayag29-sahu",
        live: "http://prayagsahuportfolio.netlify.app",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
        video: "/videos/ghotul.mp4",
    },
    {
        id: "PRJ_02",
        title: "3D Developer Portfolio",
        subtitle: "Interactive Personal Portfolio",
        stack: ["Next.js", "Tailwind", "Three.js", "Framer"],
        description: "A visually immersive 3D developer portfolio with parallax sections, animated skill trees, project showcases and contact integration.",
        accentColor: "#00e5ff",
        tag: "FRONTEND",
        github: "https://github.com/prayag29-sahu",
        live: "http://prayagsahuportfolio.netlify.app",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
        video: "/videos/portfolio.mp4",
    },
    {
        id: "PRJ_03",
        title: "Java Bank System",
        subtitle: "Core Banking Application",
        stack: ["Java", "OOP", "MySQL", "Swing"],
        description: "A desktop-based banking system featuring account management, fund transfers, transaction history, interest calculation and secure login.",
        accentColor: "#f59e0b",
        tag: "JAVA",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
        video: "/videos/bank.mp4",
    },
    {
        id: "PRJ_04",
        title: "Online Quiz App",
        subtitle: "Gamified Learning Platform",
        stack: ["HTML", "JavaScript", "Django", "SQLite"],
        description: "An interactive quiz platform with timed rounds, score tracking, leaderboard, multiple categories and admin panel for question management.",
        accentColor: "#a855f7",
        tag: "WEB_APP",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
        video: "/videos/quiz.mp4",
    },
];

const minorProjects = [
    { id: "M_01", title: "Mini CRM Tool", desc: "Small scale CRM dashboard with pipeline, contacts and activity tracking.", stack: "React • Supabase", icon: <Terminal size={16} />, color: "#39d353", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
    { id: "M_02", title: "Landing Page UI", desc: "High-converting marketing UI with animated hero and testimonial sections.", stack: "Next.js • Tailwind", icon: <Code2 size={16} />, color: "#00e5ff", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
    { id: "M_03", title: "Todo App", desc: "Full-featured task manager with priorities, deadlines and local persistence.", stack: "React • LocalStorage", icon: <Terminal size={16} />, color: "#f59e0b", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
    { id: "M_04", title: "Weather App", desc: "Live weather dashboard using OpenWeather API with 5-day forecast.", stack: "HTML • JS • API", icon: <Code2 size={16} />, color: "#a855f7", image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
    { id: "M_05", title: "C Graphics Sketcher", desc: "2D art and city layouts drawn using pure C graphics.h library.", stack: "C • graphics.h", icon: <Terminal size={16} />, color: "#39d353", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
    { id: "M_06", title: "DSA Visualizer", desc: "Step-by-step visualizer for sorting, tree traversal and graph algorithms.", stack: "JavaScript • Canvas", icon: <Code2 size={16} />, color: "#00e5ff", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
];

/* ─── Popup Modal ────────────────────────────────────────── */
function ProjectPopup({ project, onClose }) {
    if (!project) return null;
    const ac = project.accentColor;
    return (
        <div className="fixed inset-0 z-[60] bg-[#010409]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={onClose} style={{ fontFamily: "'Courier New', Courier, monospace" }}>
            <div className="relative bg-[#0d1117] border w-full max-w-3xl overflow-hidden"
                style={{ borderColor: ac }} onClick={e => e.stopPropagation()}>
                <ScanlineOverlay />
                <CornerAccent color={ac} />

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2332]"
                    style={{ borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ff5f56]" /><span className="w-2 h-2 rounded-full bg-[#ffbd2e]" /><span className="w-2 h-2 rounded-full bg-[#27c93f]" /></div>
                            <span className="font-mono text-[9px] tracking-[0.2em] text-[#8b949e]">{project.id}_DETAILS.log</span>
                        </div>
                        <h3 className="font-mono font-black text-xl text-white">{project.title}</h3>
                        <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{project.subtitle}</p>
                    </div>
                    <button onClick={onClose} className="border border-[#1a2332] p-1.5 text-[#8b949e] hover:border-[#ff5f56] hover:text-[#ff5f56] transition-colors"><X size={16} /></button>
                </div>

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 font-mono text-[8px] border px-2 py-1 bg-[#010409]/80 tracking-widest"
                        style={{ borderColor: ac, color: ac }}>{project.tag}</div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 relative z-10">
                    <div className="border border-[#1a2332] bg-[#010409] p-4 relative">
                        <CornerAccent color="#1a2332" />
                        <div className="font-mono text-[8px] text-[#39d353] tracking-[0.2em] mb-2">PROJECT_DESCRIPTION.txt</div>
                        <p className="font-mono text-[12px] text-[#8b949e] leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                        <div className="font-mono text-[8px] text-[#8b949e] tracking-widest mb-2">TECH_STACK</div>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(s => (
                                <span key={s} className="font-mono text-[9px] px-2 py-1 border" style={{ color: ac, borderColor: ac }}>{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 border font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200 hover:text-[#010409]"
                            style={{ borderColor: "#39d353", color: "#39d353" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#39d353"; e.currentTarget.style.color = "#010409"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#39d353"; }}>
                            <Github size={13} /> VIEW_CODE →
                        </a>
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 border font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200"
                                style={{ borderColor: ac, color: ac }}
                                onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                                <ExternalLink size={13} /> LIVE_DEMO →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Major Project Card (left 2x2 grid) ─────────────────── */
function MajorCard({ project, onExplore }) {
    const videoRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const ac = project.accentColor;

    const handleEnter = () => {
        setHovered(true);
        if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => { }); }
    };
    const handleLeave = () => {
        setHovered(false);
        if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    };

    return (
        <div
            className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,211,83,0.1)]"
            style={{ borderLeftWidth: 2, borderLeftColor: ac }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <ScanlineOverlay />
            <CornerAccent color={ac} />

            {/* Window top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a2332] relative z-10">
                <span className="font-mono text-[8px] text-[#8b949e] tracking-[0.15em]">{project.id}.exe</span>
                <span className="font-mono text-[7px] border px-1.5 py-0.5 tracking-widest" style={{ color: ac, borderColor: ac }}>{project.tag}</span>
            </div>

            {/* Media */}
            <div className="relative h-36 overflow-hidden">
                <img src={project.image} alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hovered ? 0 : 1 }} />
                <video ref={videoRef} src={project.video} muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hovered ? 1 : 0 }} />

                {/* Hover overlay with content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 transition-all duration-300"
                    style={{ background: hovered ? "linear-gradient(to top, #0d1117ee 0%, transparent 100%)" : "transparent" }}>
                    {hovered && (
                        <p className="font-mono text-[9px] text-[#8b949e] leading-relaxed line-clamp-2 animate-fade-in">
                            {project.description}
                        </p>
                    )}
                </div>

                {/* Play indicator */}
                {hovered && (
                    <div className="absolute top-2 right-2 w-6 h-6 border flex items-center justify-center"
                        style={{ borderColor: ac }}>
                        <Play size={10} style={{ color: ac }} />
                    </div>
                )}
            </div>

            {/* Bottom info */}
            <div className="p-3 relative z-10">
                <h4 className="font-mono font-bold text-[11px] text-white mb-0.5 leading-tight">{project.title}</h4>
                <p className="font-mono text-[8px] mb-2" style={{ color: ac }}>{project.subtitle}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.stack.slice(0, 2).map(s => (
                        <span key={s} className="font-mono text-[7px] px-1.5 py-0.5 border border-[#1a2332] text-[#30363d]">{s}</span>
                    ))}
                </div>
                <button
                    onClick={() => onExplore(project)}
                    className="w-full font-mono text-[8px] tracking-[0.15em] uppercase py-1.5 border transition-all duration-200"
                    style={{ borderColor: ac, color: ac }}
                    onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}
                >
                    $ EXPLORE →
                </button>
            </div>
        </div>
    );
}

/* ─── Right Big Slider ───────────────────────────────────── */
function BigSlider({ projects, onExplore }) {
    const [idx, setIdx] = useState(0);
    const videoRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const cur = projects[idx];
    const ac = cur.accentColor;

    const goNext = () => { setIdx(p => (p + 1) % projects.length); setHovered(false); };
    const goPrev = () => { setIdx(p => p === 0 ? projects.length - 1 : p - 1); setHovered(false); };

    const handleEnter = () => {
        setHovered(true);
        if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => { }); }
    };
    const handleLeave = () => {
        setHovered(false);
        if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
    };

    return (
        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden" style={{ borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
            <ScanlineOverlay />
            <CornerAccent color={ac} />
            <WindowChrome filename={`${cur.id}_PREVIEW.exe`} status="RUNNING" statusColor={ac} />

            {/* 3D tilt wrapper */}
            <div className="relative h-[340px] overflow-hidden group"
                onMouseEnter={handleEnter} onMouseLeave={handleLeave}>

                {/* Image */}
                <img src={cur.image} alt={cur.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    style={{ opacity: hovered ? 0 : 1, transform: hovered ? "scale(1.05)" : "scale(1)" }} />

                {/* Video */}
                <video ref={videoRef} src={cur.video} muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hovered ? 1 : 0 }} />

                {/* Dark gradient base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d111740] to-transparent" />

                {/* Hover: text content reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400"
                    style={{ transform: hovered ? "translateY(0)" : "translateY(20px)", opacity: hovered ? 1 : 0 }}>
                    <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed mb-3">{cur.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {cur.stack.map(s => (
                            <span key={s} className="font-mono text-[9px] px-2 py-0.5 border" style={{ color: ac, borderColor: ac }}>{s}</span>
                        ))}
                    </div>
                </div>

                {/* Always visible: tag */}
                <div className="absolute top-3 left-3 font-mono text-[8px] border px-2 py-1 bg-[#010409]/80"
                    style={{ borderColor: ac, color: ac }}>{cur.tag}</div>

                {/* Play badge */}
                {hovered && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 border px-2 py-1 bg-[#010409]/80 font-mono text-[8px]"
                        style={{ borderColor: ac, color: ac }}>
                        <Play size={9} /> LIVE_PREVIEW
                    </div>
                )}
            </div>

            {/* Bottom strip */}
            <div className="p-5 border-t border-[#1a2332] relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="font-mono font-black text-lg text-white">{cur.title}</h3>
                        <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{cur.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {projects.map((_, i) => (
                            <div key={i} onClick={() => setIdx(i)}
                                className="w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-200"
                                style={{ background: i === idx ? ac : "#30363d", transform: i === idx ? "scale(1.4)" : "scale(1)" }} />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={() => onExplore(cur)}
                        className="flex-1 flex items-center justify-center gap-2 border font-mono text-[10px] tracking-widest uppercase py-2.5 transition-all duration-200"
                        style={{ borderColor: ac, color: ac }}
                        onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                        $ EXPLORE_NOW →
                    </button>
                    <a href={cur.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest px-3 py-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-all duration-200">
                        <Github size={12} /> CODE
                    </a>
                    {cur.live && (
                        <a href={cur.live} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest px-3 py-2.5 text-[#8b949e] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-200">
                            <ExternalLink size={12} /> LIVE
                        </a>
                    )}
                    <button onClick={goPrev} className="border border-[#1a2332] p-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"><ChevronLeft size={14} /></button>
                    <button onClick={goNext} className="border border-[#1a2332] p-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"><ChevronRight size={14} /></button>
                </div>
            </div>
        </div>
    );
}

/* ─── Minor Project Card ─────────────────────────────────── */
function MinorCard({ project, delay = 0 }) {
    const [hovered, setHovered] = useState(false);
    const ac = project.color;

    return (
        <div
            className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,211,83,0.08)]"
            style={{
                animationDelay: `${delay}ms`,
                borderLeftWidth: 2,
                borderLeftColor: hovered ? ac : "#1a2332",
                transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ScanlineOverlay />
            {hovered && <CornerAccent color={ac} />}

            {/* Image with overlay */}
            <div className="relative h-32 overflow-hidden">
                <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ transform: hovered ? "scale(1.08)" : "scale(1)", filter: hovered ? "brightness(0.4)" : "brightness(0.25) grayscale(30%)" }} />

                {/* Content that appears on hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-4 transition-all duration-300"
                    style={{ opacity: hovered ? 1 : 0 }}>
                    <div className="font-mono text-[9px] text-[#8b949e] leading-relaxed mb-2">{project.desc}</div>
                </div>

                {/* Always: ID badge */}
                <div className="absolute top-2 right-2 font-mono text-[7px] bg-[#010409]/90 border border-[#1a2332] px-1.5 py-0.5 text-[#30363d]">{project.id}</div>

                {/* Animated scan line on hover */}
                {hovered && (
                    <div className="absolute left-0 right-0 h-[1px] pointer-events-none"
                        style={{ background: ac, top: "50%", boxShadow: `0 0 8px ${ac}`, animation: "scan 1.5s linear infinite" }} />
                )}
            </div>

            {/* Bottom */}
            <div className="p-3 relative z-10">
                <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: hovered ? ac : "#30363d" }} className="transition-colors duration-200">{project.icon}</span>
                    <h4 className="font-mono font-bold text-[11px] text-white">{project.title}</h4>
                </div>
                <p className="font-mono text-[8px] mb-2" style={{ color: ac }}>{project.stack}</p>
                <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[8px] border border-[#1a2332] px-2 py-1 text-[#8b949e] hover:text-[#39d353] hover:border-[#39d353] transition-all duration-200">
                        <Github size={9} /> CODE
                    </a>
                    {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 font-mono text-[8px] border px-2 py-1 transition-all duration-200"
                            style={{ borderColor: ac, color: ac }}>
                            <ExternalLink size={9} /> LIVE
                        </a>
                    ) : (
                        <span className="flex items-center gap-1 font-mono text-[8px] border border-[#1a2332] px-2 py-1 text-[#30363d]">
                            WIP
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Cursor glow tracker ────────────────────────────────── */
function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const h = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", h);
        return () => window.removeEventListener("mousemove", h);
    }, []);
    return (
        <div className="pointer-events-none fixed z-0" style={{
            left: pos.x - 200, top: pos.y - 200, width: 400, height: 400,
            background: "radial-gradient(circle, rgba(57,211,83,0.04) 0%, transparent 70%)",
            borderRadius: "50%", transition: "left 0.1s, top 0.1s",
        }} />
    );
}

/* ─── Main Export ────────────────────────────────────────── */
export default function ProjectsPage() {
    const [popup, setPopup] = useState(null);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 7000);
        return () => clearInterval(t);
    }, []);

    return (
          <ParallaxSection backgroundImage="/images/bg.png" height="auto">
        <section className="relative min-h-screen py-28 overflow-hidden"
            style={{  fontFamily: "'Courier New', Courier, monospace" }}>
            <CursorGlow />

            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
            {/* Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#39d353] opacity-[0.02] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00e5ff] opacity-[0.02] rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* ── HEADER ── */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse shadow-[0_0_8px_#39d353]" />
                        <span className="font-mono text-[10px] tracking-[0.3em] text-[#39d353] uppercase">SYSTEM_MODULE / PROJECTS</span>
                    </div>
                    <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                        <ScanlineOverlay />
                        <CornerAccent color="#39d353" />
                        <WindowChrome filename="PROJECT_SHOWCASE.exe" />
                        <div className="px-8 py-6">
                            <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"}`}
                                style={{ textShadow: "0 0 24px rgba(57,211,83,0.25)" }}>
                                PROJECT_<span className="text-[#39d353]">SHOWCASE</span>
                                <span className="inline-block w-[10px] h-[18px] bg-[#39d353] animate-pulse ml-2 align-middle" />
                            </h2>
                            <p className="font-mono text-[12px] text-[#8b949e] mt-3 tracking-wider">
                                $ ls ./projects/ — {mainProjects.length} major builds + {minorProjects.length} minor experiments loaded.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-5">
                                {[
                                    { l: "MAJOR_PROJECTS", v: mainProjects.length.toString().padStart(2, "0") },
                                    { l: "MINOR_BUILDS", v: minorProjects.length.toString().padStart(2, "0") },
                                    { l: "TECH_STACKS", v: "12+" },
                                    { l: "STATUS", v: "ACTIVE" },
                                ].map(s => (
                                    <div key={s.l} className="border border-[#1a2332] bg-[#010409] px-4 py-2">
                                        <div className="font-mono text-[7px] text-[#39d353] tracking-[0.2em]">{s.l}</div>
                                        <div className="font-mono text-lg font-bold text-white">{s.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MAIN GRID: 2x2 left + Big slider right ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 mb-10">
                    {/* Left: 2x2 */}
                    <div className="grid grid-cols-2 gap-4">
                        {mainProjects.map((p, i) => (
                            <MajorCard key={p.id} project={p} onExplore={setPopup} />
                        ))}
                    </div>
                    {/* Right: Big slider */}
                    <BigSlider projects={mainProjects} onExplore={setPopup} />
                </div>

                {/* ── MINOR PROJECTS ── */}
                <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden mb-6">
                    <ScanlineOverlay />
                    <CornerAccent color="#00e5ff" />
                    <WindowChrome filename="MINOR_EXPERIMENTS.log" status="LOADED" statusColor="#00e5ff" />
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <div className="font-mono text-[9px] text-[#00e5ff] tracking-[0.2em] mb-1">$ ls ./experiments/</div>
                                <h3 className="font-mono font-black text-base text-white tracking-[0.1em] uppercase">MINOR_EXPERIMENTS</h3>
                            </div>
                            <div className="border border-[#1a2332] bg-[#010409] px-3 py-1">
                                <span className="font-mono text-[9px] text-[#00e5ff] tracking-widest">{minorProjects.length} BUILDS</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {minorProjects.map((p, i) => (
                                <MinorCard key={p.id} project={p} delay={i * 80} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── FOOTER ── */}
                <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] text-[#30363d] tracking-widest">$ projects --list --all _</div>
                    <a href="https://github.com/prayag29-sahu" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-[#39d353] font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 text-[#39d353] hover:bg-[#39d353] hover:text-[#010409] transition-all duration-200">
                        <Github size={13} /> VIEW_ALL_ON_GITHUB →
                    </a>
                </div>
            </div>

            {/* ── POPUP ── */}
            {popup && <ProjectPopup project={popup} onClose={() => setPopup(null)} />}

            <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease forwards; }
      `}</style>
            </section>
        </ParallaxSection>
    );
}