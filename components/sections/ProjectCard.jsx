

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








// 'use client';

// import { useState, useRef, useEffect } from "react";
// import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Play, Code2, Terminal } from "lucide-react";

// import ParallaxSection from '@/components/ui/ParallaxSection';
// /* ─── Shared Primitives ──────────────────────────────────── */
// function ScanlineOverlay() {
//     return (
//         <div className="pointer-events-none absolute inset-0 z-0"
//             style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)" }} />
//     );
// }
// function CornerAccent({ color = "#39d353" }) {
//     return (<>
//         <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: color }} />
//         <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: color }} />
//         <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: color }} />
//         <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: color }} />
//     </>);
// }
// function WindowChrome({ filename, status = "LIVE", statusColor = "#39d353" }) {
//     return (
//         <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
//             <div className="flex items-center gap-3">
//                 <div className="flex gap-1.5">
//                     <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
//                     <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
//                     <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
//                 </div>
//                 <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b949e]">{filename}</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//                 <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
//                 <span className="font-mono text-[8px] border px-1.5 py-0.5 tracking-widest" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
//             </div>
//         </div>
//     );
// }

// /* ─── Data ───────────────────────────────────────────────── */
// const mainProjects = [
//     {
//         id: "PRJ_01",
//         title: "Ghotul Homestay Platform",
//         subtitle: "Full Stack Hospitality App",
//         stack: ["React", "Node.js", "PostgreSQL", "Express", "Booking Engines", "Razorpay Gateway"],
//         description: "A complete homestay booking platform with real-time availability, user authentication, admin dashboard, payment integration and booking management system.",
//         accentColor: "#39d353",
//         tag: "FULLSTACK",
//         github: "https://github.com/prayag29-sahu",
//         live: "http://prayagsahuportfolio.netlify.app",
//         image: "/images/09_Projects/03.png",
//         video: "/videos/ghotul.mp4",
//     },
//     {
//         id: "PRJ_02",
//         title: "3D Developer Portfolio",
//         subtitle: "Interactive Personal Portfolio",
//         stack: ["Next.js", "Tailwind", "Three.js", "Framer"],
//         description: "A visually immersive 3D developer portfolio with parallax sections, animated skill trees, project showcases and contact integration.",
//         accentColor: "#00e5ff",
//         tag: "FRONTEND",
//         github: "https://github.com/prayag29-sahu",
//         live: "http://prayagsahuportfolio.netlify.app",
//         image: "/images/09_Projects/01.png",
//         video: "/videos/portfolio.mp4",
//     },
//     {
//         id: "PRJ_03",
//         title: "Security Verification web",
//         subtitle: "Full Stack Collage Minor Project",
//         stack: ["React", "Tailwind", "Python", "Supabase", "Emailjs",],
//         description: "A Security verification web to identify froud links, URL, Images, and Documents using python API's and  secure database",
//         accentColor: "#f59e0b",
//         tag: "FULLSTACK",
//         github: "https://github.com/prayag29-sahu",
//         live: null,
//         image: "/images/09_Projects/05.png",
//         video: "/videos/bank.mp4",
//     },
//     {
//         id: "PRJ_04",
//         title: "Online Language Helper",
//         subtitle: "Learn and Communicate in different languages",
//         stack: ["HTML", "CSS", "JavaScript", "Python"],
//         description: "An interactive Learning platform with Different languages help user to translate each topic and word easily for learning and communication purpose",
//         accentColor: "#a855f7",
//         tag: "WEB_APP",
//         github: "https://github.com/prayag29-sahu",
//         live: null,
//         image: "/images/09_Projects/04.png",
//         video: "/videos/quiz.mp4",
//     },
// ];
// const mainProjects1 = [
//     {
//         id: "PRJ_01",
//         title: "Ghotul Homestay Platform",
//         subtitle: "Full Stack Hospitality App",
//         stack: ["React", "Node.js", "PostgreSQL", "Express", "Booking Engines", "Razorpay Gateway"],
//         description: "A complete homestay booking platform with real-time availability, user authentication, admin dashboard, payment integration and booking management system.",
//         accentColor: "#39d353",
//         tag: "FULLSTACK",
//         github: "https://github.com/prayag29-sahu",
//         live: "http://prayagsahuportfolio.netlify.app",
//         image: "/images/09_Projects/03.png",
//         video: "/videos/ghotul.mp4",
//     },
//     {
//         id: "PRJ_02",
//         title: "3D Developer Portfolio",
//         subtitle: "Interactive Personal Portfolio",
//         stack: ["Next.js", "Tailwind", "Three.js", "Framer"],
//         description: "A visually immersive 3D developer portfolio with parallax sections, animated skill trees, project showcases and contact integration.",
//         accentColor: "#00e5ff",
//         tag: "FRONTEND",
//         github: "https://github.com/prayag29-sahu",
//         live: "http://prayagsahuportfolio.netlify.app",
//         image: "/images/09_Projects/01.png",
//         video: "/videos/portfolio.mp4",
//     },
//     {
//         id: "PRJ_03",
//         title: "Full Stack Security Verification web",
//         subtitle: "Login-Signup with Full Stack",
//         stack: ["React", "Tailwind", "Emailjs", "Twillio"],
//         description: "A Complete Frontend Backend Working Login signup page with email verification, OTP-verifiy and Forget credentials with secure database",
//         accentColor: "#f59e0b",
//         tag: "React",
//         github: "https://github.com/prayag29-sahu",
//         live: null,
//         image: "/images/09_Projects/02.png",
//         video: "/videos/bank.mp4",
//     },
//     {
//         id: "PRJ_04",
//         title: "Online Language Helper",
//         subtitle: "Learn and Communicate in different languages",
//         stack: ["HTML", "CSS", "JavaScript", "Python"],
//         description: "An interactive Learning platform with Different languages help user to translate each topic and word easily for learning and communication purpose",
//         accentColor: "#a855f7",
//         tag: "WEB_APP",
//         github: "https://github.com/prayag29-sahu",
//         live: null,
//         image: "/images/09_Projects/04.png",
//         video: "/videos/quiz.mp4",
//     },
//     {
//         id: "PRJ_05",
//         title: "Authentication Page",
//         subtitle: "Login-Signup with Full Stack",
//         stack: ["React", "Tailwind", "Emailjs", "Twillio"],
//         description: "A Complete Frontend Backend Working Login signup page with email verification, OTP-verifiy and Forget credentials with secure database",
//         accentColor: "#f50bf1",
//         tag: "React",
//         github: "https://github.com/prayag29-sahu",
//         live: null,
//         image: "/images/09_Projects/02.png",
//         video: "/videos/bank.mp4",
//     },
//     {
//         id: "PRJ_06",
//         title: "Voice Assistent",
//         subtitle: "Voice Controlled Assistant",
//         stack: ["Python"],
//         description: "A voice assistent which can perform various tasks based on user commands, such as web search, opening applications, providing weather updates, and more.",
//         accentColor: "#f52e0b",
//         tag: "Python",
//         github: "https://github.com/prayag29-sahu",
//         live: null,
//         image: "/images/09_Projects/06.png",
//         video: "/videos/bank.mp4",
//     },
// ];

// const minorProjects = [
//     { id: "M_01", title: "Mini Chatbot", desc: "Asimple chatbot for students related data using python and conda", stack: "Python • Conda", icon: <Terminal size={16} />, color: "#39d353", image: "/images/09_Projects/minor/01.png", github: "https://github.com/prayag29-sahu", live: null },
//     { id: "M_02", title: "Landing Page UI", desc: "High-converting marketing UI with animated hero and testimonial sections.", stack: "Next.js • Tailwind", icon: <Code2 size={16} />, color: "#00e5ff", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
//     { id: "M_03", title: "Todo App", desc: "Full-featured task manager with priorities, deadlines and local persistence.", stack: "React • LocalStorage", icon: <Terminal size={16} />, color: "#f59e0b", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
//     { id: "M_04", title: "Weather App", desc: "Live weather dashboard using OpenWeather API with 5-day forecast.", stack: "HTML • JS • API", icon: <Code2 size={16} />, color: "#a855f7", image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
//     { id: "M_05", title: "C Graphics Sketcher", desc: "2D art and city layouts drawn using pure C graphics.h library.", stack: "C • graphics.h", icon: <Terminal size={16} />, color: "#39d353", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
//     { id: "M_06", title: "DSA Visualizer", desc: "Step-by-step visualizer for sorting, tree traversal and graph algorithms.", stack: "JavaScript • Canvas", icon: <Code2 size={16} />, color: "#00e5ff", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80", github: "https://github.com/prayag29-sahu", live: null },
// ];

// /* ─── Popup Modal ────────────────────────────────────────── */
// function ProjectPopup({ project, onClose }) {
//     if (!project) return null;
//     const ac = project.accentColor;
//     return (
//         <div className="fixed inset-0 z-[60] bg-[#010409]/95 backdrop-blur-xl flex items-center justify-center p-4"
//             onClick={onClose} style={{ fontFamily: "'Courier New', Courier, monospace" }}>
//             <div className="relative bg-[#0d1117] border w-full max-w-3xl overflow-hidden"
//                 style={{ borderColor: ac }} onClick={e => e.stopPropagation()}>
//                 <ScanlineOverlay />
//                 <CornerAccent color={ac} />

//                 {/* Header */}
//                 <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2332]"
//                     style={{ borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
//                     <div>
//                         <div className="flex items-center gap-2 mb-1">
//                             <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ff5f56]" /><span className="w-2 h-2 rounded-full bg-[#ffbd2e]" /><span className="w-2 h-2 rounded-full bg-[#27c93f]" /></div>
//                             <span className="font-mono text-[9px] tracking-[0.2em] text-[#8b949e]">{project.id}_DETAILS.log</span>
//                         </div>
//                         <h3 className="font-mono font-black text-xl text-white">{project.title}</h3>
//                         <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{project.subtitle}</p>
//                     </div>
//                     <button onClick={onClose} className="border border-[#1a2332] p-1.5 text-[#8b949e] hover:border-[#ff5f56] hover:text-[#ff5f56] transition-colors"><X size={16} /></button>
//                 </div>

//                 {/* Image */}
//                 <div className="relative h-52 overflow-hidden">
//                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
//                     <div className="absolute top-3 right-3 font-mono text-[8px] border px-2 py-1 bg-[#010409]/80 tracking-widest"
//                         style={{ borderColor: ac, color: ac }}>{project.tag}</div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4 relative z-10">
//                     <div className="border border-[#1a2332] bg-[#010409] p-4 relative">
//                         <CornerAccent color="#1a2332" />
//                         <div className="font-mono text-[8px] text-[#39d353] tracking-[0.2em] mb-2">PROJECT_DESCRIPTION.txt</div>
//                         <p className="font-mono text-[12px] text-[#8b949e] leading-relaxed">{project.description}</p>
//                     </div>

//                     <div>
//                         <div className="font-mono text-[8px] text-[#8b949e] tracking-widest mb-2">TECH_STACK</div>
//                         <div className="flex flex-wrap gap-2">
//                             {project.stack.map(s => (
//                                 <span key={s} className="font-mono text-[9px] px-2 py-1 border" style={{ color: ac, borderColor: ac }}>{s}</span>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-3 pt-2">
//                         <a href={project.github} target="_blank" rel="noopener noreferrer"
//                             className="flex items-center gap-2 border font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200 hover:text-[#010409]"
//                             style={{ borderColor: "#39d353", color: "#39d353" }}
//                             onMouseEnter={e => { e.currentTarget.style.background = "#39d353"; e.currentTarget.style.color = "#010409"; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#39d353"; }}>
//                             <Github size={13} /> VIEW_CODE →
//                         </a>
//                         {project.live && (
//                             <a href={project.live} target="_blank" rel="noopener noreferrer"
//                                 className="flex items-center gap-2 border font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200"
//                                 style={{ borderColor: ac, color: ac }}
//                                 onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
//                                 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
//                                 <ExternalLink size={13} /> LIVE_DEMO →
//                             </a>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ─── Major Project Card (left 2x2 grid) ─────────────────── */
// function MajorCard({ project, onExplore }) {
//     const videoRef = useRef(null);
//     const [hovered, setHovered] = useState(false);
//     const ac = project.accentColor;

//     const handleEnter = () => {
//         setHovered(true);
//         if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => { }); }
//     };
//     const handleLeave = () => {
//         setHovered(false);
//         if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
//     };

//     return (
//         <div
//             className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,211,83,0.1)]"
//             style={{ borderLeftWidth: 2, borderLeftColor: ac }}
//             onMouseEnter={handleEnter}
//             onMouseLeave={handleLeave}
//         >
//             <ScanlineOverlay />
//             <CornerAccent color={ac} />

//             {/* Window top bar */}
//             <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a2332] relative z-10">
//                 <span className="font-mono text-[8px] text-[#8b949e] tracking-[0.15em]">{project.id}.exe</span>
//                 <span className="font-mono text-[7px] border px-1.5 py-0.5 tracking-widest" style={{ color: ac, borderColor: ac }}>{project.tag}</span>
//             </div>

//             {/* Media */}
//             <div className="relative h-36 overflow-hidden">
//                 <img src={project.image} alt={project.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
//                     style={{ opacity: hovered ? 0 : 1 }} />
//                 <video ref={videoRef} src={project.video} muted loop playsInline
//                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
//                     style={{ opacity: hovered ? 1 : 0 }} />

//                 {/* Hover overlay with content */}
//                 <div className="absolute inset-0 flex flex-col justify-end p-3 transition-all duration-300"
//                     style={{ background: hovered ? "linear-gradient(to top, #0d1117ee 0%, transparent 100%)" : "transparent" }}>
//                     {hovered && (
//                         <p className="font-mono text-[9px] text-[#8b949e] leading-relaxed line-clamp-2 animate-fade-in">
//                             {project.description}
//                         </p>
//                     )}
//                 </div>

//                 {/* Play indicator */}
//                 {hovered && (
//                     <div className="absolute top-2 right-2 w-6 h-6 border flex items-center justify-center"
//                         style={{ borderColor: ac }}>
//                         <Play size={10} style={{ color: ac }} />
//                     </div>
//                 )}
//             </div>

//             {/* Bottom info */}
//             <div className="p-3 relative z-10">
//                 <h4 className="font-mono font-bold text-[11px] text-white mb-0.5 leading-tight">{project.title}</h4>
//                 <p className="font-mono text-[8px] mb-2" style={{ color: ac }}>{project.subtitle}</p>
//                 <div className="flex flex-wrap gap-1 mb-3">
//                     {project.stack.slice(0, 2).map(s => (
//                         <span key={s} className="font-mono text-[7px] px-1.5 py-0.5 border border-[#1a2332] text-[#8b949e]">{s}</span>
//                     ))}
//                 </div>
//                 <button
//                     onClick={() => onExplore(project)}
//                     className="w-full font-mono text-[8px] tracking-[0.15em] uppercase py-1.5 border transition-all duration-200"
//                     style={{ borderColor: ac, color: ac }}
//                     onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
//                     onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}
//                 >
//                     $ EXPLORE →
//                 </button>
//             </div>
//         </div>
//     );
// }

// /* ─── Right Big Slider ───────────────────────────────────── */
// function BigSlider({ projects, onExplore }) {
//     const [idx, setIdx] = useState(0);
//     const videoRef = useRef(null);
//     const [hovered, setHovered] = useState(false);
//     const cur = projects[idx];
//     const ac = cur.accentColor;

//     const goNext = () => { setIdx(p => (p + 1) % projects.length); setHovered(false); };
//     const goPrev = () => { setIdx(p => p === 0 ? projects.length - 1 : p - 1); setHovered(false); };

//     const handleEnter = () => {
//         setHovered(true);
//         if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => { }); }
//     };
//     const handleLeave = () => {
//         setHovered(false);
//         if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
//     };

//     return (
//         <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden" style={{ borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
//             <ScanlineOverlay />
//             <CornerAccent color={ac} />
//             <WindowChrome filename={`${cur.id}_PREVIEW.exe`} status="RUNNING" statusColor={ac} />

//             {/* 3D tilt wrapper */}
//             <div className="relative h-[340px] overflow-hidden group"
//                 onMouseEnter={handleEnter} onMouseLeave={handleLeave}>

//                 {/* Image */}
//                 <img src={cur.image} alt={cur.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
//                     style={{ opacity: hovered ? 0 : 1, transform: hovered ? "scale(1.05)" : "scale(1)" }} />

//                 {/* Video */}
//                 <video ref={videoRef} src={cur.video} muted loop playsInline
//                     className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
//                     style={{ opacity: hovered ? 1 : 0 }} />

//                 {/* Dark gradient base */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d111740] to-transparent" />

//                 {/* Hover: text content reveal */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400"
//                     style={{ transform: hovered ? "translateY(0)" : "translateY(20px)", opacity: hovered ? 1 : 0 }}>
//                     <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed mb-3">{cur.description}</p>
//                     <div className="flex flex-wrap gap-1.5 mb-3">
//                         {cur.stack.map(s => (
//                             <span key={s} className="font-mono text-[9px] px-2 py-0.5 border" style={{ color: ac, borderColor: ac }}>{s}</span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Always visible: tag */}
//                 <div className="absolute top-3 left-3 font-mono text-[8px] border px-2 py-1 bg-[#010409]/80"
//                     style={{ borderColor: ac, color: ac }}>{cur.tag}</div>

//                 {/* Play badge */}
//                 {hovered && (
//                     <div className="absolute top-3 right-3 flex items-center gap-1.5 border px-2 py-1 bg-[#010409]/80 font-mono text-[8px]"
//                         style={{ borderColor: ac, color: ac }}>
//                         <Play size={9} /> LIVE_PREVIEW
//                     </div>
//                 )}
//             </div>

//             {/* Bottom strip */}
//             <div className="p-5 border-t border-[#1a2332] relative z-10">
//                 <div className="flex items-start justify-between mb-4">
//                     <div>
//                         <h3 className="font-mono font-black text-lg text-white">{cur.title}</h3>
//                         <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{cur.subtitle}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         {projects.map((_, i) => (
//                             <div key={i} onClick={() => setIdx(i)}
//                                 className="w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-200"
//                                 style={{ background: i === idx ? ac : "#30363d", transform: i === idx ? "scale(1.4)" : "scale(1)" }} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                     <button onClick={() => onExplore(cur)}
//                         className="flex-1 flex items-center justify-center gap-2 border font-mono text-[10px] tracking-widest uppercase py-2.5 transition-all duration-200"
//                         style={{ borderColor: ac, color: ac }}
//                         onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
//                         onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
//                         $ EXPLORE_NOW →
//                     </button>
//                     <a href={cur.github} target="_blank" rel="noopener noreferrer"
//                         className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest px-3 py-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-all duration-200">
//                         <Github size={12} /> CODE
//                     </a>
//                     {cur.live && (
//                         <a href={cur.live} target="_blank" rel="noopener noreferrer"
//                             className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest px-3 py-2.5 text-[#8b949e] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-200">
//                             <ExternalLink size={12} /> LIVE
//                         </a>
//                     )}
//                     <button onClick={goPrev} className="border border-[#1a2332] p-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"><ChevronLeft size={14} /></button>
//                     <button onClick={goNext} className="border border-[#1a2332] p-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"><ChevronRight size={14} /></button>
//                 </div>

//                 <div className="flex items-start justify-between mt-6">
//                     <div>
//                         <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{cur.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ─── Minor Project Card ─────────────────────────────────── */
// function MinorCard({ project, delay = 0 }) {
//     const [hovered, setHovered] = useState(false);
//     const ac = project.color;

//     return (
//         <div
//             className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,211,83,0.08)]"
//             style={{
//                 animationDelay: `${delay}ms`,
//                 borderLeftWidth: 2,
//                 borderLeftColor: hovered ? ac : "#1a2332",
//                 transition: "all 0.3s ease",
//             }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             <ScanlineOverlay />
//             {hovered && <CornerAccent color={ac} />}

//             {/* Image with overlay */}
//             <div className="relative h-32 overflow-hidden">
//                 <img src={project.image} alt={project.title}
//                     className="w-full h-full object-cover transition-all duration-500"
//                     style={{ transform: hovered ? "scale(1.08)" : "scale(1)", filter: hovered ? "brightness(0.4)" : "brightness(0.25) grayscale(30%)" }} />

//                 {/* Content that appears on hover */}
//                 <div className="absolute inset-0 flex flex-col justify-center items-start px-4 transition-all duration-300"
//                     style={{ opacity: hovered ? 1 : 0 }}>
//                     <div className="font-mono text-[9px] text-[#8b949e] leading-relaxed mb-2">{project.desc}</div>
//                 </div>

//                 {/* Always: ID badge */}
//                 <div className="absolute top-2 right-2 font-mono text-[7px] bg-[#010409]/90 border border-[#1a2332] px-1.5 py-0.5 text-[#30363d]">{project.id}</div>

//                 {/* Animated scan line on hover */}
//                 {hovered && (
//                     <div className="absolute left-0 right-0 h-[1px] pointer-events-none"
//                         style={{ background: ac, top: "50%", boxShadow: `0 0 8px ${ac}`, animation: "scan 1.5s linear infinite" }} />
//                 )}
//             </div>

//             {/* Bottom */}
//             <div className="p-3 relative z-10">
//                 <div className="flex items-center gap-2 mb-1">
//                     <span style={{ color: hovered ? ac : "#30363d" }} className="transition-colors duration-200">{project.icon}</span>
//                     <h4 className="font-mono font-bold text-[11px] text-white">{project.title}</h4>
//                 </div>
//                 <p className="font-mono text-[8px] mb-2" style={{ color: ac }}>{project.stack}</p>
//                 <div className="flex gap-2">
//                     <a href={project.github} target="_blank" rel="noopener noreferrer"
//                         className="flex items-center gap-1 font-mono text-[8px] border border-[#1a2332] px-2 py-1 text-[#8b949e] hover:text-[#39d353] hover:border-[#39d353] transition-all duration-200">
//                         <Github size={9} /> CODE
//                     </a>
//                     {project.live ? (
//                         <a href={project.live} target="_blank" rel="noopener noreferrer"
//                             className="flex items-center gap-1 font-mono text-[8px] border px-2 py-1 transition-all duration-200"
//                             style={{ borderColor: ac, color: ac }}>
//                             <ExternalLink size={9} /> LIVE
//                         </a>
//                     ) : (
//                         <span className="flex items-center gap-1 font-mono text-[8px] border border-[#1a2332] px-2 py-1 text-[#30363d]">
//                             WIP
//                         </span>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ─── Cursor glow tracker ────────────────────────────────── */
// function CursorGlow() {
//     const [pos, setPos] = useState({ x: 0, y: 0 });
//     useEffect(() => {
//         const h = (e) => setPos({ x: e.clientX, y: e.clientY });
//         window.addEventListener("mousemove", h);
//         return () => window.removeEventListener("mousemove", h);
//     }, []);
//     return (
//         <div className="pointer-events-none fixed z-0" style={{
//             left: pos.x - 200, top: pos.y - 200, width: 400, height: 400,
//             background: "radial-gradient(circle, rgba(57,211,83,0.04) 0%, transparent 70%)",
//             borderRadius: "50%", transition: "left 0.1s, top 0.1s",
//         }} />
//     );
// }

// /* ─── Main Export ────────────────────────────────────────── */
// export default function ProjectsPage() {
//     const [popup, setPopup] = useState(null);
//     const [glitch, setGlitch] = useState(false);

//     useEffect(() => {
//         const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 7000);
//         return () => clearInterval(t);
//     }, []);

//     return (
//         <ParallaxSection backgroundImage="/images/bg.png" height="auto">
//             <section className="relative  min-h-screen py-28 overflow-hidden"
//                 id='projects'
//                 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
//                 <CursorGlow />

//                 {/* BG grid */}
//                 <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
//                     style={{
//                         backgroundImage: "linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)",
//                         backgroundSize: "40px 40px",
//                     }} />
//                 {/* Glows */}
//                 <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#39d353] opacity-[0.02] rounded-full blur-[180px] pointer-events-none" />
//                 <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00e5ff] opacity-[0.02] rounded-full blur-[160px] pointer-events-none" />

//                 <div className="relative z-10 max-w-7xl mx-auto px-6">

//                     {/* ── HEADER ── */}
//                     <div className="mb-14">
//                         <div className="flex items-center gap-3 mb-6">
//                             <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse shadow-[0_0_8px_#39d353]" />
//                             <span className="font-mono text-[10px] tracking-[0.3em] text-[#39d353] uppercase">SYSTEM_MODULE / PROJECTS</span>
//                         </div>
//                         <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
//                             <ScanlineOverlay />
//                             <CornerAccent color="#39d353" />
//                             <WindowChrome filename="PROJECT_SHOWCASE.exe" />
//                             <div className="px-8 py-6">
//                                 <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"}`}
//                                     style={{ textShadow: "0 0 24px rgba(57,211,83,0.25)" }}>
//                                     PROJECT_<span className="text-[#39d353]">SHOWCASE</span>
//                                     <span className="inline-block w-[10px] h-[18px] bg-[#39d353] animate-pulse ml-2 align-middle" />
//                                 </h2>
//                                 <p className="font-mono text-[12px] text-[#8b949e] mt-3 tracking-wider">
//                                     $ ls ./projects/ — {mainProjects.length} major builds + {minorProjects.length} minor experiments loaded.
//                                 </p>
//                                 <div className="flex flex-wrap gap-4 mt-5">
//                                     {[
//                                         { l: "MAJOR_PROJECTS", v: mainProjects.length.toString().padStart(2, "0") },
//                                         { l: "MINOR_BUILDS", v: minorProjects.length.toString().padStart(2, "0") },
//                                         { l: "TECH_STACKS", v: "12+" },
//                                         { l: "STATUS", v: "ACTIVE" },
//                                     ].map(s => (
//                                         <div key={s.l} className="border border-[#1a2332] bg-[#010409] px-4 py-2">
//                                             <div className="font-mono text-[7px] text-[#39d353] tracking-[0.2em]">{s.l}</div>
//                                             <div className="font-mono text-lg font-bold text-white">{s.v}</div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── MAIN GRID: 2x2 left + Big slider right ── */}
//                     <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 mb-10">
//                         {/* Left: 2x2 */}
//                         <div className="grid grid-cols-2 gap-4">
//                             {mainProjects.map((p, i) => (
//                                 <MajorCard key={p.id} project={p} onExplore={setPopup} />
//                             ))}
//                         </div>
//                         {/* Right: Big slider */}
//                         <BigSlider projects={mainProjects1} onExplore={setPopup} />
//                     </div>

//                     {/* ── MINOR PROJECTS ── */}
//                     <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden mb-6">
//                         <ScanlineOverlay />
//                         <CornerAccent color="#00e5ff" />
//                         <WindowChrome filename="MINOR_EXPERIMENTS.log" status="LOADED" statusColor="#00e5ff" />
//                         <div className="p-6">
//                             <div className="flex items-center justify-between mb-5">
//                                 <div>
//                                     <div className="font-mono text-[9px] text-[#00e5ff] tracking-[0.2em] mb-1">$ ls ./experiments/</div>
//                                     <h3 className="font-mono font-black text-base text-white tracking-[0.1em] uppercase">MINOR_EXPERIMENTS</h3>
//                                 </div>
//                                 <div className="border border-[#1a2332] bg-[#010409] px-3 py-1">
//                                     <span className="font-mono text-[9px] text-[#00e5ff] tracking-widest">{minorProjects.length} BUILDS</span>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
//                                 {minorProjects.map((p, i) => (
//                                     <MinorCard key={p.id} project={p} delay={i * 80} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* ── FOOTER ── */}
//                     <div className="flex items-center justify-between">
//                         <div className="font-mono text-[10px] text-[#8b949e] tracking-widest">$ projects --list --all _</div>
//                         <a href="https://github.com/prayag29-sahu" target="_blank" rel="noopener noreferrer"
//                             className="flex items-center gap-2 border border-[#39d353] font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 text-[#39d353] hover:bg-[#39d353] hover:text-[#010409] transition-all duration-200">
//                             <Github size={13} /> VIEW_ALL_ON_GITHUB →
//                         </a>
//                     </div>
//                 </div>

//                 {/* ── POPUP ── */}
//                 {popup && <ProjectPopup project={popup} onClose={() => setPopup(null)} />}

//                 <style jsx>{`
//         @keyframes scan {
//           0% { top: 0%; }
//           100% { top: 100%; }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(4px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in { animation: fade-in 0.3s ease forwards; }
//       `}</style>
//             </section>
//         </ParallaxSection>
//     );
// }
















'use client';

import { useState, useRef, useEffect } from "react";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Play, Code2, Terminal, Layers, FolderOpen } from "lucide-react";
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

/* ─── Major Projects Data ────────────────────────────────── */
const mainProjects = [
    {
        id: "PRJ_01", title: "Ghotul Homestay Platform", subtitle: "Full Stack Hospitality App",
        stack: ["React", "Node.js", "PostgreSQL", "Express", "Razorpay"],
        description: "A complete homestay booking platform with real-time availability, user authentication, admin dashboard, payment integration and booking management system.",
        accentColor: "#39d353", tag: "FULLSTACK",
        github: "https://github.com/prayag29-sahu", live: "http://prayagsahuportfolio.netlify.app",
        image: "/images/09_Projects/03.png", video: "/videos/ghotul.mp4",
    },
    {
        id: "PRJ_02", title: "3D Developer Portfolio", subtitle: "Interactive Personal Portfolio",
        stack: ["Next.js", "Tailwind", "Three.js", "Framer"],
        description: "A visually immersive 3D developer portfolio with parallax sections, animated skill trees, project showcases and contact integration.",
        accentColor: "#00e5ff", tag: "FRONTEND",
        github: "https://github.com/prayag29-sahu", live: "http://prayagsahuportfolio.netlify.app",
        image: "/images/09_Projects/01.png", video: "/videos/portfolio.mp4",
    },
    {
        id: "PRJ_03", title: "Security Verification Web", subtitle: "Full Stack College Minor Project",
        stack: ["React", "Tailwind", "Python", "Supabase", "Emailjs"],
        description: "A Security verification web to identify fraud links, URLs, Images and Documents using Python APIs and secure database.",
        accentColor: "#f59e0b", tag: "FULLSTACK",
        github: "https://github.com/prayag29-sahu", live: null,
        image: "/images/09_Projects/05.png", video: "/videos/bank.mp4",
    },
    {
        id: "PRJ_04", title: "Online Language Helper", subtitle: "Learn & Communicate in Different Languages",
        stack: ["HTML", "CSS", "JavaScript", "Python"],
        description: "An interactive learning platform with different language support to help users translate each topic and word easily for learning and communication.",
        accentColor: "#a855f7", tag: "WEB_APP",
        github: "https://github.com/prayag29-sahu", live: null,
        image: "/images/09_Projects/04.png", video: "/videos/quiz.mp4",
    },
];

const mainProjects1 = [
    ...mainProjects,
    {
        id: "PRJ_05", title: "Authentication Page", subtitle: "Login-Signup with Full Stack",
        stack: ["React", "Tailwind", "Emailjs", "Twilio"],
        description: "A complete frontend-backend login/signup system with email verification, OTP-verify and forgot credentials with secure database.",
        accentColor: "#f50bf1", tag: "React",
        github: "https://github.com/prayag29-sahu", live: null,
        image: "/images/09_Projects/02.png", video: "/videos/bank.mp4",
    },
    {
        id: "PRJ_06", title: "Voice Assistant", subtitle: "Voice Controlled Assistant",
        stack: ["Python"],
        description: "A voice assistant which can perform various tasks based on user commands — web search, opening applications, weather updates and more.",
        accentColor: "#f52e0b", tag: "Python",
        github: "https://github.com/prayag29-sahu", live: null,
        image: "/images/09_Projects/06.png", video: "/videos/bank.mp4",
    },
];

/* ─── ALL STACK Projects (nested structure) ──────────────── */
const allStackProjects = [
    {
        id: "STK_01",
        stackName: "Basics OF Frontend",
        shortName: "HTML·CSS·JS",
        icon: <Code2 size={16} />,
        color: "#f59e0b",
        desc: "Web projects with core HTML, CSS and JavaScript",
        totalProjects: 15,
        projects: [

            {
                sid: "STK_01-A",
                title: "Web Development Certificate (freeCodeCamp)",
                desc: "Completed Web Development Course from freeCodeCamp and built multiple real-world practice projects during the certification journey.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/002.png"
            },

            {
                sid: "STK_01-B",
                title: "HTML5 Certification (LinkedIn Learning)",
                desc: "Completed HTML5 Certification Course from LinkedIn Learning with strong foundation in semantic structure and modern HTML standards.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/001.png"
            },

            {
                sid: "STK_01-C",
                title: "Portfolio Design",
                desc: "Personal portfolio project showcasing HTML, CSS and foundational JavaScript concepts with responsive layout and animations.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/12.png"
            },

            {
                sid: "STK_01-D",
                title: "Shivay Web",
                desc: "First major web project built during 1st semester using HTML and CSS, presenting Lord Shiva stories, temples and locations.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/01.png"
            },

            {
                sid: "STK_01-E",
                title: "3D Gallery",
                desc: "3D visualization web project using animations and Typed.js library to enhance interactive UI experience.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/14.png"
            },

            {
                sid: "STK_01-F",
                title: "Animated Gaming Web",
                desc: "Animated product-style web interface built using HTML, CSS and JavaScript.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/15.png"
            },

            {
                sid: "STK_01-G",
                title: "E-Commerce Photography UI",
                desc: "Product showcase website focusing on high-quality visual presentation for photography services.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/03.png"
            },
            {
                sid: "STK_01-I",
                title: "Building Structure (CSS Variables)",
                desc: "Project built during freeCodeCamp certification demonstrating CSS variables and color-changing building structure.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/07.png"
            },

            {
                sid: "STK_01-J",
                title: "Netflix Interface Clone",
                desc: "Practice project recreating Netflix-style UI using containers, navigation and footer layout concepts.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/08.png"
            },

            {
                sid: "STK_01-K",
                title: "HTML Quiz Form",
                desc: "Quiz form project built using only HTML during freeCodeCamp certification.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/11.png"
            },

            {
                sid: "STK_01-L",
                title: "Container Roller Animation",
                desc: "CSS-based animated roller project with dynamic color-changing effects.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/10.png"
            },

            {
                sid: "STK_01-M",
                title: "Basic HTML Page",
                desc: "Foundational HTML page created during early certification practice.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/09.png"
            },

            {
                sid: "STK_01-N",
                title: "Survey Form",
                desc: "Survey form page built using HTML and CSS during certification course.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/02.png"
            },

            {
                sid: "STK_01-O",
                title: "Piano UI",
                desc: "Interactive piano structure created using HTML and CSS to understand layout and styling.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/04.png"
            },

            {
                sid: "STK_01-P",
                title: "Markers UI",
                desc: "Marker design structure built using HTML and CSS to strengthen styling concepts.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/05.png"
            },

            {
                sid: "STK_01-Q",
                title: "Hackathon Chatbot UI",
                desc: "Frontend chatbot interface built during SIH Hackathon for assisting GAIL workers.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/15.png"
            },

            {
                sid: "STK_01-R",
                title: "CSS CatFace Design",
                desc: "Creative CatFace design built using pure HTML and CSS to understand advanced CSS positioning and styling.",
                github: "https://github.com/prayag29-sahu",
                live: null,
                image: "/images/09_Projects/minor/01/06.png"
            }

        ]

    },
    {
        id: "STK_02",
        stackName: "C++ / DSA",
        shortName: "C++·DSA",
        icon: <Terminal size={16} />,
        color: "#00e5ff",
        desc: "C, C Graphics, C++, Data structures, algorithms and competitive programming",
        totalProjects: 12,
        projects: [
            { sid: "STK_02-A", title: "C++ Essential", desc: "Completed Certification Course Of C++ From Cisco.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/01_certificates/c/01.png" },
            { sid: "STK_02-B", title: "Levelup C", desc: "Completed Certification Course Of C From Linkedin Learning.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/01_certificates/c/02.jpg" },
            { sid: "STK_05-C", title: "Java Bank System", desc: "Desktop banking application using Java  — account management, fund transfers, transaction history, Loan and interest calculation.", github: "https://github.com/prayag29-sahu", live: null, image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80" },
            { sid: "STK_05-D", title: "Library Management System", desc: "OOP-based library system with book issuance, return tracking, member management and overdue fine calculation.", github: "https://github.com/prayag29-sahu", live: null, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80" },
            { sid: "STK_02-E", title: "Real time clock", desc: "C++ Project Show Real World Indian Timing in Hr/min/sec.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/03c.png" },
            { sid: "STK_02-F", title: "Progress Bar", desc: "A progress bar built using C programming with dynamic updates.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/05c.png" },
            { sid: "STK_02-G", title: "Sudoku Solver", desc: "C++ Project Game Solve Sudoku Problem", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/08c.png" },
            { sid: "STK_02-H", title: "Tic Tac Toe", desc: "Tic Tac Toe Game Create using c++ Implementing Arrays Form For 2 Players and with Computer", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/09c.png" },
            { sid: "STK_02-I", title: "Running bus", desc: "C++ Graphics Use For Creating Running Graphics Drawing", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/02cg.png" },
            { sid: "STK_02-J", title: "Rainbow", desc: "C++ Graphics Coloring Representation By Rainbow Creation.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/06cg.png" },
            { sid: "STK_02-K", title: "Rain Walk", desc: "C++ Graphics For Design A Man Walking On Road In Rain", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/07cg.png" },
            { sid: "STK_02-L", title: "Lord Buddha Sketch", desc: "C++ Graphics Desing For Creating Sketchs", github: "https://github.com/prayag29-sahu", live: null, image: "/images/14_OtherActivity/06.jpg" },
            { sid: "STK_02-M", title: "Sir Ramanujan Sketch", desc: "C++ Graphics Desing For Creating Sketchs", github: "https://github.com/prayag29-sahu", live: null, image: "/images/14_OtherActivity/07.jpg" },
            { sid: "STK_02-N", title: "Consentric Circle", desc: "C++ Graphics Desing For Creating Sketchs", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/02/10cg.jpg" },
        ],
    },
    {
        id: "STK_03",
        stackName: "React / Next.js",
        shortName: "React·Next",
        icon: <Code2 size={16} />,
        color: "#39d353",
        desc: "Modern frontend applications built with React and Next.js ecosystem",
        totalProjects: 4,
        projects: [
            { sid: "STK_03-A", title: "3D Developer Portfolio", desc: "Visually immersive 3D portfolio with Reactjs, Tailwind, Emailjs sections and contact form.", github: "https://github.com/prayag29-sahu", live: "http://prayagsahuportfolio.netlify.app", image: "/images/09_Projects/01.png" },
            { sid: "STK_03-B", title: "Ghotul Homestay Frontend", desc: "React frontend for the homestay platform with room browsing, availability calendar, booking flow and real-time notifications.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/03.png" },
            { sid: "STK_03-C", title: "Authentication System", desc: "Complete React auth system with email OTP verification, JWT tokens, forgot password flow, and protected route management.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/02.png" },
            { sid: "STK_03-D", title: "Online Language Helper", desc: "An interactive learning platform with different language support to help users translate each topic and word easily for learning and communication.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/04.png" },
        ],
    },
    {
        id: "STK_04",
        stackName: "UI / Design",
        shortName: "UI·Design",
        icon: <Layers size={16} />,
        color: "#a855f7",
        desc: "UI design concepts, Figma prototypes and design system work",
        totalProjects: 3,
        projects: [
            { sid: "STK_04-A", title: "Hotel Booking", desc: "Complete hotel booking UI/UX design with responsive layout and interactive elements, landing page, Room Page, Contact pages.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/03/01.png" },
            { sid: "STK_04-B", title: "Cloths E-commerce", desc: "UI/UX design for a clothing e-commerce platform with product browsing, cart management and checkout flow.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/03/02.png" },
            { sid: "STK_04-C", title: "Gaming Website", desc: "Collection of UI components — buttons, cards, modals, navbars — each with dark/light variants and hover states.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/03/03.png" },
            { sid: "STK_04-D", title: "Parallex UI", desc: "A modern Simple and interactive web design actual looks paraller movement animations ", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/03/04.png" },
            { sid: "STK_04-E", title: "Product Based", desc: "UI design for a product-based company website with landing page ith products, product showcase and representation.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/03/05.png" },
            { sid: "STK_04-F", title: "Plants Selling", desc: "A Plant selling plateform to presentive and interactive reusable UI.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/03/06.png" },
        ],
    },
    {
        id: "STK_05",
        stackName: "Java",
        shortName: "Java",
        icon: <Terminal size={16} />,
        color: "#f59e0b",
        desc: "Core Java applications, OOP projects and backend systems",
        totalProjects: 3,
        projects: [
            { sid: "STK_05-A", title: "Java Bank System", desc: "Desktop banking application using Java  — account management, fund transfers, transaction history, Loan and interest calculation.", github: "https://github.com/prayag29-sahu", live: null, image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80" },
            { sid: "STK_05-B", title: "Library Management System", desc: "OOP-based library system with book issuance, return tracking, member management and overdue fine calculation.", github: "https://github.com/prayag29-sahu", live: null, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80" },
        ],
    },
    {
        id: "STK_06",
        stackName: "Python",
        shortName: "Python",
        icon: <Code2 size={16} />,
        color: "#39d353",
        desc: "Python scripts, automation tools, ML experiments and API projects",
        totalProjects: 4,
        projects: [
            { sid: "STK_06-A", title: "Voice Assistant", desc: "Voice-controlled assistant performing web search, app opening, weather updates, music playback and system commands via speech recognition.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/06.png" },
            { sid: "STK_06-B", title: "Security Fraud Detector", desc: "Python API-powered URL/link/document fraud detection system with image analysis, phishing detection and threat scoring.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/05.png" },
            { sid: "STK_06-C", title: "Mini Chatbot", desc: "Simple rule-based chatbot for students built with Python and Conda — handles academic queries, schedules and FAQs.", github: "https://github.com/prayag29-sahu", live: null, image: "/images/09_Projects/minor/01.png" },
            
        ],
    },
];

/* ─── Stack Gallery Popup ────────────────────────────────── */
function StackGalleryPopup({ stack, onClose }) {
    const [lightbox, setLightbox] = useState(null);
    if (!stack) return null;
    const ac = stack.color;

    return (
        <div className="fixed inset-0 z-[60] mt-10 bg-[#010409]/97 backdrop-blur-xl flex items-center justify-center p-4"
            style={{ fontFamily: "'Courier New', Courier, monospace" }} onClick={onClose}>
            <div className="relative bg-[#0d1117] border w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden"
                style={{ borderColor: ac }} onClick={e => e.stopPropagation()}>
                <ScanlineOverlay />
                <CornerAccent color={ac} />

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a2332] relative z-10"
                    style={{ borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.2em] text-[#8b949e] uppercase">{stack.id}_GALLERY.log</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border flex items-center justify-center shrink-0" style={{ borderColor: ac, color: ac }}>{stack.icon}</div>
                            <div>
                                <h3 className="font-mono font-black text-xl text-white">{stack.stackName}</h3>
                                <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{stack.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="border border-[#1a2332] bg-[#010409] px-3 py-1.5 text-center">
                            <div className="font-mono text-[7px] tracking-[0.2em]" style={{ color: ac }}>PROJECTS</div>
                            <div className="font-mono font-black text-lg text-white">{stack.projects.length}</div>
                        </div>
                        <button onClick={onClose}
                            className="border border-[#1a2332] p-1.5 text-[#8b949e] hover:border-[#ff5f56] hover:text-[#ff5f56] transition-colors">
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Projects grid */}
                <div className="flex-1 overflow-y-auto p-6 gallery-scroll relative z-10">
                    <div className="font-mono text-[9px] tracking-[0.2em] mb-4" style={{ color: ac }}>
                        $ ls ./{stack.id.toLowerCase()}/ — {stack.projects.length} projects loaded
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stack.projects.map((proj, i) => (
                            <div key={proj.sid}
                                className="border border-[#1a2332] bg-[#010409] relative overflow-hidden group/pcard cursor-pointer hover:border-[#39d353] transition-all duration-200"
                                onClick={() => setLightbox(i)}>
                                <CornerAccent color="#1a2332" />

                                {/* Image */}
                                <div className="relative h-44 overflow-hidden">
                                    <img src={proj.image} alt={proj.title}
                                        className="w-full h-full object-cover group-hover/pcard:scale-105 transition-transform duration-400"
                                        style={{ filter: "brightness(0.85)" }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-transparent to-transparent" />
                                    <div className="absolute top-2 left-2 font-mono text-[7px] border border-[#1a2332] bg-[#010409]/90 px-1.5 py-0.5 text-[#30363d]">{proj.sid}</div>
                                    <div className="absolute top-2 right-2 font-mono text-[8px] text-[#8b949e] opacity-0 group-hover/pcard:opacity-100 transition-opacity border border-[#1a2332] bg-[#010409]/90 px-2 py-0.5">
                                        CLICK TO ZOOM →
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h4 className="font-mono font-black text-[13px] text-white mb-1">{proj.title}</h4>
                                    <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed mb-3">{proj.desc}</p>
                                    <div className="flex gap-2">
                                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-all duration-200">
                                            <Github size={10} /> CODE
                                        </a>
                                        {proj.live && (
                                            <a href={proj.live} target="_blank" rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="flex items-center gap-1.5 border font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 transition-all duration-200"
                                                style={{ borderColor: ac, color: ac }}>
                                                <ExternalLink size={10} /> LIVE
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="fixed inset-0 z-[70] bg-[#010409]/99 flex items-center justify-center"
                    onClick={() => setLightbox(null)}>
                    <div className="relative max-w-4xl w-[90%]" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setLightbox(null)}
                            className="absolute -top-9 right-0 font-mono text-[10px] text-[#8b949e] hover:text-[#39d353] tracking-widest">
                            [ESC] CLOSE
                        </button>
                        <button onClick={() => setLightbox(p => (p - 1 + stack.projects.length) % stack.projects.length)}
                            className="absolute left-[-48px] top-1/2 -translate-y-1/2 border border-[#1a2332] p-2 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors">
                            <ChevronLeft size={18} />
                        </button>
                        <button onClick={() => setLightbox(p => (p + 1) % stack.projects.length)}
                            className="absolute right-[-48px] top-1/2 -translate-y-1/2 border border-[#1a2332] p-2 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors">
                            <ChevronRight size={18} />
                        </button>
                        <div className="border p-2 bg-[#0d1117]" style={{ borderColor: ac }}>
                            <img src={stack.projects[lightbox].image} alt={stack.projects[lightbox].title}
                                className="w-full max-h-[70vh] object-contain" />
                        </div>
                        <div className="mt-2 px-1">
                            <p className="font-mono font-bold text-[13px] text-white">{stack.projects[lightbox].title}</p>
                            <p className="font-mono text-[11px] text-[#8b949e] mt-1">{stack.projects[lightbox].desc}</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="font-mono text-[9px] text-[#30363d]">{stack.projects[lightbox].sid}</span>
                                <span className="font-mono text-[10px] text-[#30363d]">{lightbox + 1} / {stack.projects.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .gallery-scroll::-webkit-scrollbar { width: 4px; }
        .gallery-scroll::-webkit-scrollbar-track { background: #010409; }
        .gallery-scroll::-webkit-scrollbar-thumb { background: #39d353; border-radius: 2px; }
        .gallery-scroll { scrollbar-width: thin; scrollbar-color: #39d353 #010409; }
      `}</style>
        </div>
    );
}

/* ─── Major Project Popup ────────────────────────────────── */
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
                <div className="relative h-52 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 font-mono text-[8px] border px-2 py-1 bg-[#010409]/80 tracking-widest"
                        style={{ borderColor: ac, color: ac }}>{project.tag}</div>
                </div>
                <div className="p-6 space-y-4 relative z-10">
                    <div className="border border-[#1a2332] bg-[#010409] p-4 relative">
                        <CornerAccent color="#1a2332" />
                        <div className="font-mono text-[8px] text-[#39d353] tracking-[0.2em] mb-2">PROJECT_DESCRIPTION.txt</div>
                        <p className="font-mono text-[12px] text-[#8b949e] leading-relaxed">{project.description}</p>
                    </div>
                    <div>
                        <div className="font-mono text-[8px] text-[#8b949e] tracking-widest mb-2">TECH_STACK</div>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(s => (<span key={s} className="font-mono text-[9px] px-2 py-1 border" style={{ color: ac, borderColor: ac }}>{s}</span>))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 border font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200"
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

/* ─── Major Card ─────────────────────────────────────────── */
function MajorCard({ project, onExplore }) {
    const videoRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const ac = project.accentColor;

    return (
        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,211,83,0.1)]"
            style={{ borderLeftWidth: 2, borderLeftColor: ac }}
            onMouseEnter={() => { setHovered(true); if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => { }); } }}
            onMouseLeave={() => { setHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}>
            <ScanlineOverlay />
            <CornerAccent color={ac} />
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a2332] relative z-10">
                <span className="font-mono text-[8px] text-[#8b949e] tracking-[0.15em]">{project.id}.exe</span>
                <span className="font-mono text-[7px] border px-1.5 py-0.5 tracking-widest" style={{ color: ac, borderColor: ac }}>{project.tag}</span>
            </div>
            <div className="relative h-36 overflow-hidden">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: hovered ? 0 : 1 }} />
                <video ref={videoRef} src={project.video} muted loop playsInline className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: hovered ? 1 : 0 }} />
                <div className="absolute inset-0 flex flex-col justify-end p-3 transition-all duration-300" style={{ background: hovered ? "linear-gradient(to top, #0d1117ee 0%, transparent 100%)" : "transparent" }}>
                    {hovered && <p className="font-mono text-[9px] text-[#8b949e] leading-relaxed line-clamp-2">{project.description}</p>}
                </div>
                {hovered && (<div className="absolute top-2 right-2 w-6 h-6 border flex items-center justify-center" style={{ borderColor: ac }}><Play size={10} style={{ color: ac }} /></div>)}
            </div>
            <div className="p-3 relative z-10">
                <h4 className="font-mono font-bold text-[11px] text-white mb-0.5 leading-tight">{project.title}</h4>
                <p className="font-mono text-[8px] mb-2" style={{ color: ac }}>{project.subtitle}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.stack.slice(0, 2).map(s => (<span key={s} className="font-mono text-[7px] px-1.5 py-0.5 border border-[#1a2332] text-[#8b949e]">{s}</span>))}
                </div>
                <button onClick={() => onExplore(project)} className="w-full font-mono text-[8px] tracking-[0.15em] uppercase py-1.5 border transition-all duration-200" style={{ borderColor: ac, color: ac }}
                    onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                    $ EXPLORE →
                </button>
            </div>
        </div>
    );
}

/* ─── Big Slider ─────────────────────────────────────────── */
function BigSlider({ projects, onExplore }) {
    const [idx, setIdx] = useState(0);
    const videoRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const cur = projects[idx];
    const ac = cur.accentColor;

    return (
        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden" style={{ borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
            <ScanlineOverlay />
            <CornerAccent color={ac} />
            <WindowChrome filename={`${cur.id}_PREVIEW.exe`} status="RUNNING" statusColor={ac} />
            <div className="relative h-[350px] overflow-hidden group"
                onMouseEnter={() => { setHovered(true); if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => { }); } }}
                onMouseLeave={() => { setHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}>
                <img src={cur.image} alt={cur.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" style={{ opacity: hovered ? 0 : 1, transform: hovered ? "scale(1.05)" : "scale(1)" }} />
                <video ref={videoRef} src={cur.video} muted loop playsInline className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: hovered ? 1 : 0 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d111740] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400" style={{ transform: hovered ? "translateY(0)" : "translateY(20px)", opacity: hovered ? 1 : 0 }}>
                    <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed mb-3">{cur.description}</p>
                    <div className="flex flex-wrap gap-1.5">{cur.stack.map(s => (<span key={s} className="font-mono text-[9px] px-2 py-0.5 border" style={{ color: ac, borderColor: ac }}>{s}</span>))}</div>
                </div>
                <div className="absolute top-3 left-3 font-mono text-[8px] border px-2 py-1 bg-[#010409]/80" style={{ borderColor: ac, color: ac }}>{cur.tag}</div>
                {hovered && (<div className="absolute top-3 right-3 flex items-center gap-1.5 border px-2 py-1 bg-[#010409]/80 font-mono text-[8px]" style={{ borderColor: ac, color: ac }}><Play size={9} /> LIVE_PREVIEW</div>)}
            </div>
            <div className="p-5 border-t border-[#1a2332] relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="font-mono font-black text-lg text-white">{cur.title}</h3>
                        <p className="font-mono text-[10px] tracking-widest mt-0.5" style={{ color: ac }}>{cur.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {projects.map((_, i) => (<div key={i} onClick={() => setIdx(i)} className="w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-200" style={{ background: i === idx ? ac : "#30363d", transform: i === idx ? "scale(1.4)" : "scale(1)" }} />))}
                    </div>
                </div>
                <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed mb-4">{cur.description}</p>
                <div className="flex items-center gap-2">
                    <button onClick={() => onExplore(cur)} className="flex-1 flex items-center justify-center gap-2 border font-mono text-[10px] tracking-widest uppercase py-2.5 transition-all duration-200" style={{ borderColor: ac, color: ac }}
                        onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                        $ EXPLORE_NOW →
                    </button>
                    <a href={cur.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest px-3 py-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-all duration-200"><Github size={12} /> CODE</a>
                    {cur.live && (<a href={cur.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-[#1a2332] font-mono text-[9px] tracking-widest px-3 py-2.5 text-[#8b949e] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-200"><ExternalLink size={12} /> LIVE</a>)}
                    <button onClick={() => setIdx(p => p === 0 ? projects.length - 1 : p - 1)} className="border border-[#1a2332] p-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"><ChevronLeft size={14} /></button>
                    <button onClick={() => setIdx(p => (p + 1) % projects.length)} className="border border-[#1a2332] p-2.5 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"><ChevronRight size={14} /></button>
                </div>
            </div>
        </div>
    );
}

/* ─── Stack Category Card ────────────────────────────────── */
function StackCard({ stack, onExplore, delay = 0 }) {
    const [hovered, setHovered] = useState(false);
    const ac = stack.color;

    return (
        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden cursor-pointer transition-all duration-300"
            style={{ borderLeftWidth: 2, borderLeftColor: hovered ? ac : "#1a2332", animationDelay: `${delay}ms` }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ScanlineOverlay />
            {hovered && <CornerAccent color={ac} />}

            {/* Sub-project preview thumbnails strip */}
            <div className="relative h-28 overflow-hidden bg-[#010409]">
                <div className="absolute inset-0 grid grid-cols-2 gap-0.5 p-0.5">
                    {stack.projects.slice(0, 4).map((proj, i) => (
                        <div key={proj.sid} className="overflow-hidden relative">
                            <img src={proj.image} alt={proj.title}
                                className="w-full h-full object-cover transition-all duration-500"
                                style={{ filter: hovered ? "brightness(0.55)" : "brightness(0.2) grayscale(40%)", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
                        </div>
                    ))}
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d111750] to-transparent" />

                {/* Count badge */}
                <div className="absolute top-2 right-2 font-mono text-[8px] border bg-[#010409]/90 px-2 py-0.5 z-10"
                    style={{ borderColor: ac, color: ac }}>
                    {stack.projects.length} PROJECTS
                </div>

                {/* Scan line on hover */}
                {hovered && (
                    <div className="absolute left-0 right-0 h-[1px] pointer-events-none z-10 animate-scan-h"
                        style={{ background: ac, boxShadow: `0 0 8px ${ac}` }} />
                )}
            </div>

            {/* Content */}
            <div className="p-4 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 border flex items-center justify-center shrink-0 transition-all duration-200"
                        style={{ borderColor: hovered ? ac : "#1a2332", color: hovered ? ac : "#30363d" }}>
                        {stack.icon}
                    </div>
                    <div>
                        <h4 className="font-mono font-black text-[13px] text-white leading-tight">{stack.stackName}</h4>
                        <div className="font-mono text-[8px] tracking-widest" style={{ color: ac }}>{stack.shortName}</div>
                    </div>
                </div>
                <p className="font-mono text-[10px] text-[#8b949e] leading-relaxed mb-3">{stack.desc}</p>

                {/* Sub-project titles preview */}
                <div className="space-y-1 mb-3">
                    {stack.projects.slice(0, 2).map(p => (
                        <div key={p.sid} className="flex items-center gap-1.5">
                            <span className="font-mono text-[9px]" style={{ color: ac }}>▸</span>
                            <span className="font-mono text-[9px] text-[#8b949e] truncate">{p.title}</span>
                        </div>
                    ))}
                    {stack.projects.length > 2 && (
                        <div className="font-mono text-[9px] text-[#30363d]">+ {stack.projects.length - 2} more...</div>
                    )}
                </div>

                <button onClick={() => onExplore(stack)}
                    className="w-full flex items-center justify-center gap-2 border font-mono text-[9px] tracking-[0.18em] uppercase py-2 transition-all duration-200"
                    style={{ borderColor: ac, color: ac }}
                    onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                    <FolderOpen size={11} /> $ EXPLORE_STACK →
                </button>
            </div>

            <div className="h-[1px] w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(to right, ${ac}, transparent)` }} />
        </div>
    );
}

/* ─── Cursor Glow ────────────────────────────────────────── */
function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const h = e => setPos({ x: e.clientX, y: e.clientY });
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
    const [stackPopup, setStackPopup] = useState(null);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 7000);
        return () => clearInterval(t);
    }, []);

    return (
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">
            <section id="projects" className="relative min-h-screen py-28 overflow-hidden"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                <CursorGlow />

                <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#39d353] opacity-[0.02] rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00e5ff] opacity-[0.02] rounded-full blur-[160px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    {/* ── HEADER ── */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-5">
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
                                    $ ls ./projects/ — {mainProjects.length} major builds + {allStackProjects.length} stack categories loaded.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-5">
                                    {[
                                        { l: "MAJOR_PROJECTS", v: mainProjects1.length.toString().padStart(2, "0") },
                                        { l: "STACK_CATEGORIES", v: allStackProjects.length.toString().padStart(2, "0") },
                                        { l: "TOTAL_BUILDS", v: `${allStackProjects.reduce((a, s) => a + s.projects.length, 0) + mainProjects1.length}+` },
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

                    {/* ── MAIN GRID ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 mb-8">
                        <div className="grid grid-cols-2 gap-4">
                            {mainProjects.map(p => (<MajorCard key={p.id} project={p} onExplore={setPopup} />))}
                        </div>
                        <BigSlider projects={mainProjects1} onExplore={setPopup} />
                    </div>

                    {/* ── ALL STACK PROJECTS ── */}
                    <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden mb-6">
                        <ScanlineOverlay />
                        <CornerAccent color="#00e5ff" />
                        <WindowChrome filename="ALL_STACK_PROJECTS.log" status="LOADED" statusColor="#00e5ff" />
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <div className="font-mono text-[9px] text-[#00e5ff] tracking-[0.2em] mb-1">$ ls ./all-stacks/ — explore by technology</div>
                                    <h3 className="font-mono font-black text-base text-white tracking-[0.1em] uppercase">MY ALL STACK PROJECTS</h3>
                                    <p className="font-mono text-[11px] text-[#8b949e] mt-1">Click any stack to explore all projects in that technology</p>
                                </div>
                                <div className="border border-[#1a2332] bg-[#010409] px-3 py-2 text-center">
                                    <div className="font-mono text-[7px] text-[#00e5ff] tracking-[0.2em]">TOTAL</div>
                                    <div className="font-mono font-bold text-lg text-white">
                                        {allStackProjects.reduce((a, s) => a + s.projects.length, 0)}+
                                    </div>
                                </div>
                            </div>

                            {/* 6-column stack grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                {allStackProjects.map((stack, i) => (
                                    <StackCard key={stack.id} stack={stack} onExplore={setStackPopup} delay={i * 60} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── FOOTER ── */}
                    <div className="flex items-center justify-between">
                        <div className="font-mono text-[10px] text-[#8b949e] tracking-widest">$ projects --list --all _</div>
                        <a href="https://github.com/prayag29-sahu" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-[#39d353] font-mono text-[10px] tracking-widest uppercase px-5 py-2.5 text-[#39d353] hover:bg-[#39d353] hover:text-[#010409] transition-all duration-200">
                            <Github size={13} /> VIEW_ALL_ON_GITHUB →
                        </a>
                    </div>
                </div>

                {/* Popups */}
                {popup && <ProjectPopup project={popup} onClose={() => setPopup(null)} />}
                {stackPopup && <StackGalleryPopup stack={stackPopup} onClose={() => setStackPopup(null)} />}

                <style jsx>{`
          @keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }
          @keyframes fade-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fade-in 0.3s ease forwards; }
          @keyframes scan-h { 0% { top: 0%; } 100% { top: 100%; } }
          .animate-scan-h { animation: scan-h 1.8s linear infinite; }
        `}</style>
            </section>
        </ParallaxSection>
    );
}
