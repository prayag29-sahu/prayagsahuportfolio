/* eslint-disable @next/next/no-img-element */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable @next/next/no-img-element */
// // 'use client';

// // import ParallaxSection from '@/components/ui/ParallaxSection';
// // import { Trophy, BookOpen, Code2, Award } from "lucide-react";

// // export default function Certifications() {

// //     const certData = [
// //         {
// //             title: "NPTEL – DBMS (IIT Kharagpur)",
// //             subtitle: "Silver + Elite Certificate",
// //             icon: <Trophy size={16} />,
// //             image: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png",
// //             year: "2024"
// //         },
// //         {
// //             title: "freeCodeCamp",
// //             subtitle: "Frontend & Full Stack Development",
// //             icon: <BookOpen size={16} />,
// //             image: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png",
// //             year: "2023"
// //         },
// //         {
// //             title: "InterviewBit",
// //             subtitle: "DSA • Badges • Streak Achievements",
// //             icon: <Code2 size={16} />,
// //             image: "/images/01_badges/array-master.png",
// //             year: "2023"
// //         },
// //         {
// //             title: "Hackathons",
// //             subtitle: "SIH • Brahmax • College Hackathons",
// //             icon: <Award size={16} />,
// //             image: "/images/01_certificates/01_Major_06/sih.jpg",
// //             year: "2022"
// //         }
// //     ];

// //     return (
// //         <ParallaxSection backgroundImage="/images/bg.png" height="auto">

// //             <section id="certifications" className="relative py-28 text-white">

// //                 <div className="max-w-6xl mx-auto px-6">

// //                     {/* HEADING */}
// //                     <div className="mb-20">
// //                         <h2 className="text-6xl font-extrabold tracking-tight">
// //                             CERTIFICATION<span className="highlight">_LOG</span>
// //                         </h2>
// //                     </div>

// //                     {/* Timeline Wrapper */}
// //                     <div className="relative">

// //                         {/* Vertical Line */}
// //                         <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-[#6ea046] shadow-[0_0_12px_rgba(110,160,70,0.7)]" />

// //                         <div className="space-y-20">

// //                             {certData.map((item, index) => (
// //                                 <div key={index} className="relative flex items-start gap-10">

// //                                     {/* Timeline Node */}
// //                                     <div className="relative z-10">
// //                                         <div className="w-6 h-6 bg-[#6ea046] border-2 border-white shadow-[0_0_12px_rgba(110,160,70,0.8)]" />
// //                                     </div>

// //                                     {/* Card */}
// //                                     <div className="
// //                                         relative
// //                                         flex-1
// //                                         bg-black/60
// //                                         backdrop-blur-md
// //                                         border border-white/20
// //                                         p-10
// //                                         rounded-xl
// //                                         shadow-[0_20px_40px_rgba(0,0,0,0.6)]
// //                                         hover:shadow-[0_25px_50px_rgba(110,160,70,0.4)]
// //                                         transition-all duration-300
// //                                     ">

// //                                         {/* Year Badge */}
// //                                         <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-sm font-semibold tracking-wide rounded">
// //                                             {item.year}
// //                                         </div>

// //                                         {/* Content Grid */}
// //                                         <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-8 items-center">

// //                                             {/* LEFT TEXT */}
// //                                             <div className="flex items-start gap-4">

// //                                                 <div className="w-10 h-10 rounded-full bg-[#6ea046] flex items-center justify-center text-black shrink-0">
// //                                                     {item.icon}
// //                                                 </div>

// //                                                 <div>
// //                                                     <h3 className="text-2xl font-bold tracking-wide mb-2">
// //                                                         {item.title}
// //                                                     </h3>

// //                                                     <p className="text-white/70">
// //                                                         {item.subtitle}
// //                                                     </p>
// //                                                 </div>

// //                                             </div>

// //                                             {/* RIGHT IMAGE */}
// //                                             <div className="
// //                                                 w-full h-32
// //                                                 rounded-lg
// //                                                 overflow-hidden
// //                                                 border border-white/10
// //                                                 shadow-[0_8px_20px_rgba(110,160,70,0.4)]
// //                                             ">
// //                                                 <img
// //                                                     src={item.image}
// //                                                     alt={item.title}
// //                                                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// //                                                 />
// //                                             </div>

// //                                         </div>

// //                                     </div>

// //                                 </div>
// //                             ))}

// //                         </div>
// //                     </div>

// //                 </div>

// //             </section>

// //         </ParallaxSection>
// //     );
// // }






// 'use client';

// import { useEffect, useState } from "react";
// import ParallaxSection from '@/components/ui/ParallaxSection';
// import { X } from "lucide-react";

// export default function Certifications() {

//     const [activePopup, setActivePopup] = useState(null);
//     const [currentSlides, setCurrentSlides] = useState({});
//     const [isPaused, setIsPaused] = useState(false);


//     const certData = [
//         {
//             title: "InterviewBit",
//             subtitle: "DSA • Badges • Streak",
//             year: "2024",
//             description: "Solved DSA challenges and earned consistent streak badges with algorithm mastery.",
//             images: [
//                 { src: "/images/01_badges/01.png", caption: "Badge" },
//                 { src: "/images/01_badges/02.png", caption: "Badge" },
//                 { src: "/images/01_badges/03.png", caption: "Badge" },
//                 { src: "/images/01_badges/04.png", caption: "Badge" },
//                 { src: "/images/01_badges/05.png", caption: "Badge" },
//                 { src: "/images/01_badges/06.png", caption: "Badge" },
//                 { src: "/images/01_badges/07.png", caption: "Badge" },
//                 { src: "/images/01_badges/08.png", caption: "Badge" },
//                 { src: "/images/01_badges/09.png", caption: "Badge" },
//                 { src: "/images/01_badges/10.png", caption: "Badge" },
//                 { src: "/images/01_badges/11.png", caption: "Badge" }
//             ]
//         },
//         {
//             title: "NPTEL – DBMS (IIT Kharagpur)",
//             subtitle: "Silver + Elite Certificate",
//             year: "2025",
//             description: "Completed IIT Kharagpur certified Database Management Systems course with Silver + Elite distinction.",
//             images: [
//                 { src: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png", caption: "Certificate View" },
//             ]
//         },
//         {
//             title: "freeCodeCamp",
//             subtitle: "Frontend & Full Stack Development",
//             year: "2023",
//             description: "Completed full frontend & full stack web development curriculum covering HTML, CSS, JS & React.",
//             images: [
//                 { src: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png", caption: "Certificate" }
//             ]
//         },
//         {
//             title: "Cisco",
//             subtitle: "Networking & Python",
//             year: "2026",
//             description: "Cisco certifications in Networking and Python programming for IT professionals.",
//             images: [
//                 { src: "/images/15_Cisco/1 (3).png", caption: "Certificate" },
//                 { src: "/images/15_Cisco/1 (2).png", caption: "Certificate" },
//                 { src: "/images/15_Cisco/1 (1).png", caption: "Certificate" },
//                 { src: "/images/15_Cisco/1 (4).png", caption: "Certificate" },
//                 { src: "/images/15_Cisco/1 (5).png", caption: "Certificate" },
//                 { src: "/images/15_Cisco/1 (6).png", caption: "Certificate" },
//                 { src: "/images/15_Cisco/1 (7).png", caption: "Badges" },
//                 { src: "/images/15_Cisco/1 (18).png", caption: "Badges" },
//                 { src: "/images/15_Cisco/1 (23).png", caption: "Badges" },
//                 { src: "/images/15_Cisco/1 (8).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (9).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (10).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (11).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (12).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (13).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (14).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (15).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (16).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (17).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (19).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (20).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (21).png", caption: "Achivement" },
//                 { src: "/images/15_Cisco/1 (22).png", caption: "Achivement" },
//             ]
//         },
//         {
//             title: "InterviewBit",
//             subtitle: "DSA • Badges • Streak",
//             year: "2024",
//             description: "Solved DSA challenges and earned consistent streak badges with algorithm mastery.",
//             images: [
//                 { src: "/images/01_badges/01.png", caption: "Badge" },
//                 { src: "/images/01_badges/02.png", caption: "Badge" },
//                 { src: "/images/01_badges/03.png", caption: "Badge" },
//                 { src: "/images/01_badges/04.png", caption: "Badge" },
//                 { src: "/images/01_badges/05.png", caption: "Badge" },
//                 { src: "/images/01_badges/06.png", caption: "Badge" },
//                 { src: "/images/01_badges/07.png", caption: "Badge" },
//                 { src: "/images/01_badges/08.png", caption: "Badge" },
//                 { src: "/images/01_badges/09.png", caption: "Badge" },
//                 { src: "/images/01_badges/10.png", caption: "Badge" },
//                 { src: "/images/01_badges/11.png", caption: "Badge" }
//             ]
//         },


//     ];

//     /* Individual auto sliders for each card */
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlides(prev => {
//                 const updated = { ...prev };
//                 certData.forEach((item, i) => {
//                     updated[i] = ((prev[i] || 0) + 1) % item.images.length;
//                 });
//                 return updated;
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <ParallaxSection backgroundImage="/images/bg.png" height="auto">

//             <section className="py-28 text-white overflow-hidden">

//                 {/* HEADER */}
//                 <div className="max-w-6xl mx-auto px-6 mb-16">
//                     <div className="bg-[#111] border border-white/10 p-4 flex items-center gap-4 shadow-lg">
//                         <div className="flex gap-2">
//                             <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//                             <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
//                             <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//                         </div>
//                         <div className="font-mono text-lg tracking-wide">
//                             MY_CERTIFICATIONS.txt
//                         </div>
//                         <div className="ml-auto text-xs bg-[#6ea046] px-3 py-1 text-black font-semibold">
//                             LIVE_FEED
//                         </div>
//                     </div>
//                 </div>

//                 {/* AUTO SCROLL ROW */}
//                 <div className="relative  overflow-hidden">

//                     <div
//                         className="flex gap-12 animate-scroll"
//                         style={{
//                             animationPlayState: isPaused ? "paused" : "running"
//                         }}
//                     >


//                         {[...certData, ...certData].map((item, index) => {

//                             const realIndex = index % certData.length;
//                             const slideIndex = currentSlides[realIndex] || 0;

//                             return (
//                                 <div
//                                     key={index}
//                                     onMouseEnter={() => setIsPaused(true)}
//                                     onMouseLeave={() => setIsPaused(false)}
//                                     className="min-w-[650px] bg-[#0f0f0f] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#6ea046] transition-all duration-300"
//                                 >

//                                     {/* TOP BAR */}
//                                     <div className="border-t-4 border-[#6ea046] p-4 flex justify-between items-center text-sm font-mono">
//                                         <span className="text-[#6ea046]">
//                                             REPORT_{realIndex + 1}.LOG
//                                         </span>
//                                         <span className="text-white/40">
//                                             {item.year}.txt
//                                         </span>
//                                     </div>

//                                     {/* MAIN CONTENT GRID */}
//                                     <div className="p-8 grid grid-cols-[1.2fr_1fr] gap-8 items-center">

//                                         {/* LEFT SIDE */}
//                                         <div className="space-y-4">

//                                             <h3 className="text-2xl font-bold">
//                                                 {item.title}
//                                             </h3>

//                                             <p className="text-white/60 text-sm">
//                                                 {item.subtitle}
//                                             </p>

//                                             <p className="text-white/80 text-sm leading-relaxed">
//                                                 {item.description}
//                                             </p>

//                                             <button
//                                                 onClick={() => setActivePopup(realIndex)}
//                                                 className="mt-6 text-xs border border-[#6ea046] px-5 py-2 hover:bg-[#6ea046] hover:text-black transition"
//                                             >
//                                                 EXPLORE
//                                             </button>

//                                         </div>

//                                         {/* RIGHT SIDE AUTO SLIDER */}
//                                         <div className="relative w-30 aspect-square border border-white/20 overflow-hidden rounded-md">

//                                             <img
//                                                 src={item.images[slideIndex].src}
//                                                 className="w-full h-full object-fit transition-all duration-700"
//                                             />

//                                         </div>

//                                     </div>

//                                 </div>
//                             );
//                         })}

//                     </div>
//                 </div>

//                 {/* POPUP GALLERY */}
//                 {activePopup !== null && certData[activePopup] && (
//                     <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">

//                         <div className="relative bg-[#111] border border-[#6ea046] w-[90%] max-w-6xl h-[85vh] flex flex-col overflow-hidden">

//                             {/* CLOSE */}
//                             <button
//                                 onClick={() => setActivePopup(null)}
//                                 className="absolute top-6 right-6 hover:text-[#6ea046] z-20"
//                             >
//                                 <X size={30} />
//                             </button>

//                             {/* HEADER */}
//                             <div className="p-8 border-b border-white/10">
//                                 <h3 className="text-3xl font-bold text-[#6ea046]">
//                                     {certData[activePopup].title}
//                                 </h3>
//                             </div>

//                             {/* SCROLL AREA */}
//                             <div className="flex-1 overflow-y-auto p-8 custom-scroll">

//                                 <div className="grid md:grid-cols-3 gap-8">

//                                     {certData[activePopup].images.map((img, i) => (
//                                         <div
//                                             key={i}
//                                             className="border border-white/10 p-4 hover:scale-105 transition"
//                                         >
//                                             <img
//                                                 src={img.src}
//                                                 alt=""
//                                                 className="w-full h-60 object-cover rounded"
//                                             />
//                                             <p className="text-sm text-white/60 mt-3">
//                                                 {img.caption}
//                                             </p>
//                                         </div>
//                                     ))}

//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 )}

//             </section>


//             <style jsx>{`
//                .animate-scroll {
//     display: flex;
//     width: 3000px;
//     will-change: transform;

//     animation: scroll 10s linear infinite;
// }

// @keyframes scroll {
//     0% { transform: translateX(0); }
//     100% { transform: translateX(-50%); }
// }




//                 .custom-scroll::-webkit-scrollbar {
//                     width: 8px;
//                 }

//                 .custom-scroll::-webkit-scrollbar-track {
//                     background: #111;
//                 }

//                 .custom-scroll::-webkit-scrollbar-thumb {
//                     background: #6ea046;
//                     border-radius: 20px;
//                 }

//                 .custom-scroll {
//                     scrollbar-width: thin;
//                     scrollbar-color: #6ea046 #111;
//                 }


//             `}</style>

//         </ParallaxSection>
//     );
// }











'use client';

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ParallaxSection from '@/components/ui/ParallaxSection';

/* ─── Scanline overlay ───────────────────────────────────── */
function ScanlineOverlay() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
                background:
                    "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)",
            }}
        />
    );
}

/* ─── Corner accent ──────────────────────────────────────── */
function CornerAccent({ color = "#39d353" }) {
    return (
        <>
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: color }} />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: color }} />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: color }} />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: color }} />
        </>
    );
}

/* ─── Blinking cursor ────────────────────────────────────── */
function Cursor() {
    return <span className="inline-block w-[8px] h-[14px] bg-[#39d353] animate-pulse ml-1 align-middle" />;
}

/* ─── Data ───────────────────────────────────────────────── */
const certData = [
    {
        id: "CERT_01",
        title: "InterviewBit",
        subtitle: "DSA • Badges • Streak",
        year: "2024",
        tag: "DSA",
        tagColor: "#39d353",
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
        tag: "ELITE",
        tagColor: "#00e5ff",
        count: "Silver + Elite",
        description:
            "Completed IIT Kharagpur certified Database Management Systems course with Silver + Elite distinction. Covered relational algebra, SQL, normalization and transactions.",
        images: [
            { src: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png", caption: "Certificate" },
        ],
    },
    {
        id: "CERT_03",
        title: "freeCodeCamp",
        subtitle: "Frontend & Full Stack",
        year: "2023",
        tag: "FULLSTACK",
        tagColor: "#f59e0b",
        count: "2 Certs",
        description:
            "Completed full frontend & full stack web development curriculum covering HTML, CSS, JavaScript, React, Node and database fundamentals.",
        images: [
            { src: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png", caption: "Certificate" },
        ],
    },
    {
        id: "CERT_04",
        title: "Cisco",
        subtitle: "Networking & Python",
        year: "2026",
        tag: "NETWORKING",
        tagColor: "#39d353",
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
                className="min-w-[620px] border border-[#1a2332] relative overflow-hidden flex flex-col group transition-all duration-300 hover:border-[#39d353] hover:shadow-[0_0_24px_rgba(57,211,83,0.08)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <ScanlineOverlay />
                <CornerAccent color={accentColor} />

                {/* ── Top bar ── */}
                <div
                    className="flex items-center justify-between px-5 py-3 border-b border-[#1a2332] relative z-10"
                    style={{ borderTopWidth: 3, borderTopColor: accentColor, borderTopStyle: "solid" }}
                >
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-[#8b949e] uppercase">
                            {item.id}.LOG
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span
                            className="font-mono text-[9px] tracking-[0.15em] px-2 py-0.5 border font-bold"
                            style={{ color: accentColor, borderColor: accentColor }}
                        >
                            {item.tag}
                        </span>
                        <span className="font-mono text-[10px] text-[#30363d]">{item.year}.txt</span>
                    </div>
                </div>

                {/* ── Body ── */}
                <div className="p-6 grid max-w-[500px] [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 flex-1 relative z-10">

                    {/* Left */}
                    <div className="space-y-3">
                        <div>
                            <h3 className="font-mono font-black text-xl text-white tracking-tight leading-tight">
                                {item.title}
                            </h3>
                            <p className="font-mono text-[11px] tracking-[0.15em] mt-1" style={{ color: accentColor }}>
                                {item.subtitle}
                            </p>
                        </div>

                        <p className="font-mono text-[12px] text-[#8b949e] leading-relaxed">
                            {item.description}
                        </p>

                        <div className="flex items-center gap-3 pt-1">
                            <div className="border border-[#1a2332] px-3 py-1 bg-[#010409]">
                                <span className="font-mono text-[9px] text-[#30363d] tracking-widest uppercase">FILES </span>
                                <span className="font-mono text-[11px] font-bold" style={{ color: accentColor }}>
                                    {item.count}
                                </span>
                            </div>
                            <div className="flex items-center gap-1 font-mono text-[9px] text-[#30363d]">
                                <div className="w-1 h-1 rounded-full bg-[#39d353] animate-pulse" />
                                LOADED
                            </div>
                        </div>

                        <button
                            onClick={() => onExplore(index)}
                            className="mt-2 group/btn flex items-center gap-2 border font-mono text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-200"
                            style={{
                                borderColor: accentColor,
                                color: accentColor,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = accentColor;
                                e.currentTarget.style.color = "#010409";
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
                    <div className="relative w-[200px] h-[140px] ml-20  md:h-[180px] border border-[#1a2332] overflow-hidden bg-[#010409]">

                        <CornerAccent color="#1a2332" />
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
                        <div className="absolute top-2 right-2 font-mono text-[8px] text-[#30363d] bg-[#010409]/80 px-1.5 py-0.5 border border-[#1a2332]">
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

        <div className="fixed inset-0 z-50 bg-[#010409]/97 backdrop-blur-xl flex items-center justify-center">
            <div
                className="relative bg-[#0d1117] border w-[92%] max-w-5xl h-[88vh] flex flex-col overflow-hidden"
                style={{ borderColor: accentColor }}
                onClick={(e) => e.stopPropagation()}
            >
                <ScanlineOverlay />
                <CornerAccent color={accentColor} />

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 border border-[#1a2332] p-1.5 hover:border-[#ff5f56] hover:text-[#ff5f56] transition-colors duration-200 text-[#8b949e]"
                >
                    <X size={18} />
                </button>

                {/* Header */}
                <div
                    className="px-8 py-5 border-b border-[#1a2332] relative z-10 flex items-center justify-between"
                    style={{ borderTopWidth: 3, borderTopColor: accentColor, borderTopStyle: "solid" }}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#8b949e] uppercase">
                                {item.id}_GALLERY.VIEW
                            </span>
                        </div>
                        <h3 className="font-mono font-black text-2xl text-white">{item.title}</h3>
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
                <div className="flex-1 overflow-y-auto p-8 relative z-10 custom-gallery-scroll">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {item.images.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setLightbox(i)}
                                className="border border-[#1a2332] bg-[#010409] p-3 relative overflow-hidden group/card cursor-pointer hover:border-[#39d353] transition-all duration-200"
                            >
                                <CornerAccent color="#1a2332" />
                                <div className="relative overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full h-52 object-cover group-hover/card:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-[#010409]/0 group-hover/card:bg-[#010409]/20 transition-all duration-200" />
                                    <div className="absolute top-2 right-2 font-mono text-[8px] bg-[#010409]/90 border border-[#1a2332] px-1.5 py-0.5 text-[#30363d]">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="font-mono text-[10px] text-[#8b949e] tracking-wider uppercase">{img.caption}</p>
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
                    className="fixed inset-0 z-[60] bg-[#010409]/99 flex items-center justify-center"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-4xl w-[90%]" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 font-mono text-[10px] text-[#8b949e] hover:text-[#39d353] tracking-widest"
                        >
                            [ESC] CLOSE
                        </button>
                        <button
                            onClick={() => setLightbox((p) => (p - 1 + item.images.length) % item.images.length)}
                            className="absolute left-[-50px] top-1/2 -translate-y-1/2 border border-[#1a2332] p-2 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => setLightbox((p) => (p + 1) % item.images.length)}
                            className="absolute right-[-50px] top-1/2 -translate-y-1/2 border border-[#1a2332] p-2 text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                        <div className="border border-[#39d353] p-2 bg-[#0d1117]">
                            <img
                                src={item.images[lightbox].src}
                                alt={item.images[lightbox].caption}
                                className="w-full max-h-[75vh] object-contain"
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between px-1">
                            <p className="font-mono text-[10px] text-[#8b949e] tracking-widest uppercase">
                                {item.images[lightbox].caption}
                            </p>
                            <p className="font-mono text-[10px] text-[#30363d]">
                                {lightbox + 1} / {item.images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .custom-gallery-scroll::-webkit-scrollbar { width: 4px; }
        .custom-gallery-scroll::-webkit-scrollbar-track { background: #010409; }
        .custom-gallery-scroll::-webkit-scrollbar-thumb { background: #39d353; border-radius: 2px; }
        .custom-gallery-scroll { scrollbar-width: thin; scrollbar-color: #39d353 #010409; }
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
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">
            <section
                className="relative py-28 pt-0 overflow-hidden"
                style={{
                    // background: "#010409",
                    fontFamily: "'Courier New', Courier, monospace",
                }}
            >
                {/* Background grid */}
                <div
                    className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                        // backgroundImage: `linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
                {/* Ambient glow */}
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#39d353] opacity-[0.025] rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00e5ff] opacity-[0.02] rounded-full blur-[140px] pointer-events-none" />

                <div className="relative z-10">

                    {/* ── HEADER ── */}
                    <div className="max-w-6xl mx-auto px-6 mb-14">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse shadow-[0_0_8px_#39d353]" />
                            <span className="font-mono text-[10px] tracking-[0.3em] text-[#39d353] uppercase">
                                SYSTEM_MODULE / CERTIFICATIONS
                            </span>
                        </div>

                        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                            <ScanlineOverlay />
                            <CornerAccent color="#39d353" />

                            {/* Window chrome */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a2332]">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#8b949e]">
                                        MY_CERTIFICATIONS.txt
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />
                                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#39d353] border border-[#39d353] px-2 py-0.5">
                                        LIVE_FEED
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="px-8 py-6">
                                <h2
                                    className={`font-mono font-black text-3xl md:text-4xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"
                                        }`}
                                    style={{ textShadow: "0 0 24px rgba(57,211,83,0.25)" }}
                                >
                                    CERTIFICATIONS_<span className="text-[#39d353]">ARCHIVE</span>
                                    <Cursor />
                                </h2>
                                <p className="font-mono text-[12px] text-[#8b949e] mt-3 tracking-wider max-w-xl">
                                    $ cat ./certifications/* — Loaded {certData.length} records from achievement database.
                                </p>

                                {/* Stats row */}
                                <div className="flex gap-6 mt-5">
                                    {[
                                        { label: "TOTAL_CERTS", value: "07+" },
                                        { label: "BADGES", value: "20+" },
                                        { label: "PLATFORMS", value: "04" },
                                        { label: "YEAR_RANGE", value: "2023–26" },
                                    ].map((s) => (
                                        <div key={s.label} className="border border-[#1a2332] bg-[#010409] px-4 py-2">
                                            <div className="font-mono text-[8px] text-[#39d353] tracking-[0.2em] uppercase">{s.label}</div>
                                            <div className="font-mono text-lg font-bold text-white">{s.value}</div>
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
                            style={{ background: "linear-gradient(to right, #010409, transparent)" }} />
                        {/* Right fade */}
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                            style={{ background: "linear-gradient(to left, #010409, transparent)" }} />

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
                    <div className="max-w-6xl mx-auto px-6 mt-10 flex items-center justify-between">
                        <div className="font-mono text-[10px] text-[#30363d] tracking-widest">
                            $ certifications --list --all _
                        </div>
                        <div className="flex items-center gap-4">
                            {certData.map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActivePopup(i)}
                                    className="font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 border border-[#1a2332] text-[#8b949e] hover:border-[#39d353] hover:text-[#39d353] transition-all duration-200 uppercase"
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
        </ParallaxSection>
    );
}