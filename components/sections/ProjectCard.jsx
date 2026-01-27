

// export default function Project() {



//     return (

//         <section
//             id="projects"
//             className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
//         >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">

//                 {/* Heading */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                         Featured{" "}
//                         <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                             Projects
//                         </span>
//                     </h2>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Explore my latest work showcasing innovative solutions and cutting-edge
//                         technologies
//                     </p>
//                 </div>

//                 {/* PROJECT GRID */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                     {/* PROJECT 1 */}
//                     <ProjectCard
//                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-1-ec07c34233e041ce8e7a759844c27dcd.png"
//                         title="E-Commerce Platform"
//                         tags={["React", "Node.js"]}
//                         description="A full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and responsive design optimized for all devices."
//                         rating="4.9"
//                         year="2023"
//                     />

//                     {/* PROJECT 2 */}
//                     <ProjectCard
//                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-2-35a4a61661314ce6a916071910a38eec.png"
//                         title="AI Task Manager"
//                         tags={["AI/ML", "Python"]}
//                         description="An intelligent task management system powered by machine learning algorithms that automatically prioritizes tasks, predicts completion times, and optimizes workflow efficiency."
//                         rating="4.8"
//                         year="2023"
//                     />

//                     {/* PROJECT 3 */}
//                     <ProjectCard
//                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-3-fc0ac4b372c64a3eb3078c369dfa3543.png"
//                         title="Real-time Chat App"
//                         tags={["Socket.io", "Express"]}
//                         description="A feature-rich real-time messaging application with end-to-end encryption, file sharing, video calls, and group chat functionality built with modern web technologies."
//                         rating="4.7"
//                         year="2023"
//                     />

//                     {/* PROJECT 4 */}
//                     <ProjectCard
//                         image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-4-412c6202801f41d6a3d7d5ab03c3c879.png"
//                         title="Crypto Trading Platform"
//                         tags={["Blockchain", "Vue.js"]}
//                         description="A comprehensive cryptocurrency trading platform with real-time market data, advanced charting tools, portfolio management, and secure wallet integration for seamless trading experience."
//                         rating="4.6"
//                         year="2023"
//                     />

//                 </div>

//                 {/* VIEW ALL BUTTON */}
//                 <div className="mt-16 text-center">
//                     <a
//                         href="#"
//                         className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all shadow-lg"
//                     >
//                         View All Projects →
//                     </a>
//                 </div>

//             </div>
//         </section>
//     );
// }
// function ProjectCard({ image, title, tags, description, rating, year }) {
//     return (
//         <div className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">

//             {/* Image */}
//             <div className="relative overflow-hidden">
//                 <img
//                     src={image}
//                     alt={title}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
//             </div>

//             {/* Content */}
//             <div className="p-8">
//                 <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-2xl font-bold text-white">
//                         {title}
//                     </h3>

//                     <div className="flex gap-2">
//                         {tags.map((tag) => (
//                             <span
//                                 key={tag}
//                                 className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm"
//                             >
//                                 {tag}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 <p className="text-gray-300 mb-6 leading-relaxed">
//                     {description}
//                 </p>

//                 <div className="flex items-center gap-3 text-sm text-gray-400">
//                     <span>⭐ {rating}</span>
//                     <span>•</span>
//                     <span>{year}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }






'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ParallaxSection from "@/components/ui/ParallaxSection";
export default function ProjectsPage() {

    /* ===================== DATA ===================== */

    const mainProjects = [
        {
            title: "Ghotul Homestay Platform",
            stack: "React • Node • PostgreSQL",
            image: "/images/projects/ghotul.png",
        },
        {
            title: "3D Developer Portfolio",
            stack: "Next.js • Tailwind",
            image: "/images/projects/portfolio.png",
        },
        {
            title: "Java Bank System",
            stack: "Java • OOP • DB",
            image: "/images/projects/bank.png",
        },
        {
            title: "Online Quiz App",
            stack: "HTML • JS • Django",
            image: "/images/projects/quiz.png",
        },
    ];

    const sliderProjects = [
        {
            title: "Mini CRM Tool",
            description: "Small scale CRM dashboard",
            image: "/images/projects/s1.png",
            video: "/videos/s1.mp4",
        },
        {
            title: "Landing Page UI",
            description: "Marketing UI concept",
            image: "/images/projects/s2.png",
            video: "/videos/s2.mp4",
        },
        {
            title: "Todo App",
            description: "Task management app",
            image: "/images/projects/s3.png",
            video: "/videos/s3.mp4",
        },
        {
            title: "Weather App",
            description: "API based weather app",
            image: "/images/projects/s4.png",
            video: "/videos/s4.mp4",
        },
    ];

    /* ===================== SLIDER STATE ===================== */

    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex((prev) => (prev + 1) % sliderProjects.length);

    const prev = () =>
        setIndex((prev) =>
            prev === 0 ? sliderProjects.length - 1 : prev - 1
        );

    /* ===================== UI ===================== */



    
    return (
        <ParallaxSection
            // backgroundImage="/img/img1.jpeg"
            backgroundImage="/images/bg1.png"
            height="400px"
        >
            <section
                id="projects"
                className="min-h-screen py-20 "
            >
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADER */}
                    <div className="text-center mb-14">
                        <div
                            className={`w-full lg:px-[12%] px-[5%]  flex flex-col justify-center items-center 
  `}
                        >

                            <div className="flex items-center justify-center gap-6 mb-4">

                                {/* LEFT LINE */}
                                <div
                                    className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-r from-transparent via-cyan-400 to-blue-400`}
                                ></div>

                                {/* TITLE */}
                                <h1
                                    className={`text-3xl sm:text-4xl md:text-5xl  font-extrabold tracking-wide drop-shadow-lg transition-all bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold text-white ">
                                        Project {" "}
                                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                            Showcase
                                        </span>
                                    </h2>
                                </h1>

                                {/* RIGHT LINE */}
                                <div
                                    className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
                                ></div>

                            </div>

                        </div>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Major projects on the left and a live preview slider on the right
                        </p>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-3 gap-10 items-start">

                        {/* ================= LEFT : 2x2 GRID ================= */}
                        <div className="grid grid-cols-2 gap-6">
                            {mainProjects.map((project, i) => (
                                <SmallProjectCard key={i} project={project} />
                            ))}
                        </div>

                        {/* ================= RIGHT : BIG SLIDER ================= */}
                        <div className="lg:col-span-2 relative">

                            {/* SLIDE */}
                            <ProjectSlide project={sliderProjects[index]} />

                            {/* CONTENT STRIP */}
                            <div className="bg-black/60 p-6 border border-white/10">
                                <h3 className="text-xl font-bold text-white">
                                    {sliderProjects[index].title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-1">
                                    {sliderProjects[index].description}
                                </p>
                            </div>

                            {/* CONTROLS */}
                            <div className="absolute bottom-6 right-6 flex gap-3">
                                <button
                                    onClick={prev}
                                    className="p-3 bg-black/70 hover:bg-cyan-500 rounded-full text-white transition"
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    onClick={next}
                                    className="p-3 bg-black/70 hover:bg-cyan-500 rounded-full text-white transition"
                                >
                                    <ChevronRight />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </ParallaxSection>
    );
}

/* ===================== SMALL CARD ===================== */

function SmallProjectCard({ project }) {
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:border-cyan-400/50 transition">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
            />
            <div className="p-3 bg-black/50">
                <h4 className="text-sm font-semibold text-white">
                    {project.title}
                </h4>
                <p className="text-xs text-gray-400">
                    {project.stack}
                </p>
            </div>
        </div>
    );
}

/* ===================== BIG SLIDE ===================== */

function ProjectSlide({ project }) {
    return (
        <div className="relative group rounded-xl overflow-hidden border border-white/10">

            {/* IMAGE */}
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-[360px] object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* VIDEO ON HOVER */}
            <video
                src={project.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                }}
            />
        </div>
    );
}
