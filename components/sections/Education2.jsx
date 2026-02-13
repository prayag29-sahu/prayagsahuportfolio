/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// 'use client';

// import ParallaxSection from '@/components/ui/ParallaxSection';
// import { Trophy, BookOpen, Code2, Award } from "lucide-react";

// export default function Certifications() {

//     const certData = [
//         {
//             title: "NPTEL – DBMS (IIT Kharagpur)",
//             subtitle: "Silver + Elite Certificate",
//             icon: <Trophy size={16} />,
//             image: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png",
//             year: "2024"
//         },
//         {
//             title: "freeCodeCamp",
//             subtitle: "Frontend & Full Stack Development",
//             icon: <BookOpen size={16} />,
//             image: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png",
//             year: "2023"
//         },
//         {
//             title: "InterviewBit",
//             subtitle: "DSA • Badges • Streak Achievements",
//             icon: <Code2 size={16} />,
//             image: "/images/01_badges/array-master.png",
//             year: "2023"
//         },
//         {
//             title: "Hackathons",
//             subtitle: "SIH • Brahmax • College Hackathons",
//             icon: <Award size={16} />,
//             image: "/images/01_certificates/01_Major_06/sih.jpg",
//             year: "2022"
//         }
//     ];

//     return (
//         <ParallaxSection backgroundImage="/images/bg.png" height="auto">

//             <section id="certifications" className="relative py-28 text-white">

//                 <div className="max-w-6xl mx-auto px-6">

//                     {/* HEADING */}
//                     <div className="mb-20">
//                         <h2 className="text-6xl font-extrabold tracking-tight">
//                             CERTIFICATION<span className="highlight">_LOG</span>
//                         </h2>
//                     </div>

//                     {/* Timeline Wrapper */}
//                     <div className="relative">

//                         {/* Vertical Line */}
//                         <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-[#6ea046] shadow-[0_0_12px_rgba(110,160,70,0.7)]" />

//                         <div className="space-y-20">

//                             {certData.map((item, index) => (
//                                 <div key={index} className="relative flex items-start gap-10">

//                                     {/* Timeline Node */}
//                                     <div className="relative z-10">
//                                         <div className="w-6 h-6 bg-[#6ea046] border-2 border-white shadow-[0_0_12px_rgba(110,160,70,0.8)]" />
//                                     </div>

//                                     {/* Card */}
//                                     <div className="
//                                         relative
//                                         flex-1
//                                         bg-black/60
//                                         backdrop-blur-md
//                                         border border-white/20
//                                         p-10
//                                         rounded-xl
//                                         shadow-[0_20px_40px_rgba(0,0,0,0.6)]
//                                         hover:shadow-[0_25px_50px_rgba(110,160,70,0.4)]
//                                         transition-all duration-300
//                                     ">

//                                         {/* Year Badge */}
//                                         <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-sm font-semibold tracking-wide rounded">
//                                             {item.year}
//                                         </div>

//                                         {/* Content Grid */}
//                                         <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-8 items-center">

//                                             {/* LEFT TEXT */}
//                                             <div className="flex items-start gap-4">

//                                                 <div className="w-10 h-10 rounded-full bg-[#6ea046] flex items-center justify-center text-black shrink-0">
//                                                     {item.icon}
//                                                 </div>

//                                                 <div>
//                                                     <h3 className="text-2xl font-bold tracking-wide mb-2">
//                                                         {item.title}
//                                                     </h3>

//                                                     <p className="text-white/70">
//                                                         {item.subtitle}
//                                                     </p>
//                                                 </div>

//                                             </div>

//                                             {/* RIGHT IMAGE */}
//                                             <div className="
//                                                 w-full h-32
//                                                 rounded-lg
//                                                 overflow-hidden
//                                                 border border-white/10
//                                                 shadow-[0_8px_20px_rgba(110,160,70,0.4)]
//                                             ">
//                                                 <img
//                                                     src={item.image}
//                                                     alt={item.title}
//                                                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                                                 />
//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>
//                             ))}

//                         </div>
//                     </div>

//                 </div>

//             </section>

//         </ParallaxSection>
//     );
// }






'use client';

import { useEffect, useState } from "react";
import ParallaxSection from '@/components/ui/ParallaxSection';
import { X } from "lucide-react";

export default function Certifications() {

    const [activePopup, setActivePopup] = useState(null);
    const [currentSlides, setCurrentSlides] = useState({});

    const certData = [
        {
            title: "NPTEL – DBMS (IIT Kharagpur)",
            subtitle: "Silver + Elite Certificate",
            year: "2025",
            description: "Completed IIT Kharagpur certified Database Management Systems course with Silver + Elite distinction.",
            images: [
                { src: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png", caption: "Certificate View" },
            ]
        },
        {
            title: "freeCodeCamp",
            subtitle: "Frontend & Full Stack Development",
            year: "2023",
            description: "Completed full frontend & full stack web development curriculum covering HTML, CSS, JS & React.",
            images: [
                { src: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png", caption: "Certificate" }
            ]
        },
        {
            title: "Cisco",
            subtitle: "Networking & Python",
            year: "2026",
            description: "Cisco certifications in Networking and Python programming for IT professionals.",
            images: [
                { src: "/images/15_Cisco/1 (3).png", caption: "Certificate" },
                { src: "/images/15_Cisco/1 (2).png", caption: "Certificate" },
                { src: "/images/15_Cisco/1 (1).png", caption: "Certificate" },
                { src: "/images/15_Cisco/1 (4).png", caption: "Certificate" },
                { src: "/images/15_Cisco/1 (5).png", caption: "Certificate" },
                { src: "/images/15_Cisco/1 (6).png", caption: "Certificate" },
                { src: "/images/15_Cisco/1 (7).png", caption: "Badges" },
                { src: "/images/15_Cisco/1 (18).png", caption: "Badges" },
                { src: "/images/15_Cisco/1 (23).png", caption: "Badges" },
                { src: "/images/15_Cisco/1 (8).png", caption:  "Achivement" },
                { src: "/images/15_Cisco/1 (9).png", caption:  "Achivement" },
                { src: "/images/15_Cisco/1 (10).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (11).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (12).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (13).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (14).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (15).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (16).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (17).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (19).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (20).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (21).png", caption: "Achivement" },
                { src: "/images/15_Cisco/1 (22).png", caption: "Achivement" },
            ]
        },
        {
            title: "InterviewBit",
            subtitle: "DSA • Badges • Streak",
            year: "2024",
            description: "Solved DSA challenges and earned consistent streak badges with algorithm mastery.",
            images: [
                { src: "/images/01_badges/01.png", caption: "Badge 1" },
                { src: "/images/01_badges/02.png", caption: "Badge 2" },
                { src: "/images/01_badges/03.png", caption: "Badge 3" },
                { src: "/images/01_badges/01.png", caption: "Badge 1" },
                { src: "/images/01_badges/02.png", caption: "Badge 2" },
                { src: "/images/01_badges/03.png", caption: "Badge 3" }
            ]
        },
    ];

    /* Individual auto sliders for each card */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlides(prev => {
                const updated = { ...prev };
                certData.forEach((item, i) => {
                    updated[i] = ((prev[i] || 0) + 1) % item.images.length;
                });
                return updated;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">

            <section className="py-28 text-white overflow-hidden">

                {/* HEADER */}
                <div className="max-w-6xl mx-auto px-6 mb-16">
                    <div className="bg-[#111] border border-white/10 p-4 flex items-center gap-4 shadow-lg">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <div className="font-mono text-lg tracking-wide">
                            USER_CERTIFICATIONS.txt
                        </div>
                        <div className="ml-auto text-xs bg-[#6ea046] px-3 py-1 text-black font-semibold">
                            LIVE_FEED
                        </div>
                    </div>
                </div>

                {/* AUTO SCROLL ROW */}
                <div className="relative">

                    <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused] w-50">

                        {[...certData, ...certData].map((item, index) => {

                            const realIndex = index % certData.length;
                            const slideIndex = currentSlides[realIndex] || 0;

                            return (
                                <div
                                    key={index}
                                    className="min-w-[650px] bg-[#0f0f0f] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#6ea046] transition-all duration-300"
                                >

                                    {/* TOP BAR */}
                                    <div className="border-t-4 border-[#6ea046] p-4 flex justify-between items-center text-sm font-mono">
                                        <span className="text-[#6ea046]">
                                            REPORT_{realIndex + 1}.LOG
                                        </span>
                                        <span className="text-white/40">
                                            {item.year}.txt
                                        </span>
                                    </div>

                                    {/* MAIN CONTENT GRID */}
                                    <div className="p-8 grid grid-cols-[1.2fr_1fr] gap-8 items-center">

                                        {/* LEFT SIDE */}
                                        <div className="space-y-4">

                                            <h3 className="text-2xl font-bold">
                                                {item.title}
                                            </h3>

                                            <p className="text-white/60 text-sm">
                                                {item.subtitle}
                                            </p>

                                            <p className="text-white/80 text-sm leading-relaxed">
                                                {item.description}
                                            </p>

                                            <button
                                                onClick={() => setActivePopup(realIndex)}
                                                className="mt-6 text-xs border border-[#6ea046] px-5 py-2 hover:bg-[#6ea046] hover:text-black transition"
                                            >
                                                EXPLORE
                                            </button>

                                        </div>

                                        {/* RIGHT SIDE AUTO SLIDER */}
                                        <div className="relative w-30 aspect-square border border-white/20 overflow-hidden rounded-md">

                                            <img
                                                src={item.images[slideIndex].src}
                                                className="w-full h-full object-fit transition-all duration-700"
                                            />

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>

                {/* POPUP GALLERY */}
                {activePopup !== null && certData[activePopup] && (
                    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">

                        <div className="relative bg-[#111] border border-[#6ea046] w-[90%] max-w-6xl h-[85vh] flex flex-col overflow-hidden">

                            {/* CLOSE */}
                            <button
                                onClick={() => setActivePopup(null)}
                                className="absolute top-6 right-6 hover:text-[#6ea046] z-20"
                            >
                                <X size={30} />
                            </button>

                            {/* HEADER */}
                            <div className="p-8 border-b border-white/10">
                                <h3 className="text-3xl font-bold text-[#6ea046]">
                                    {certData[activePopup].title}
                                </h3>
                            </div>

                            {/* SCROLL AREA */}
                            <div className="flex-1 overflow-y-auto p-8 custom-scroll">

                                <div className="grid md:grid-cols-3 gap-8">

                                    {certData[activePopup].images.map((img, i) => (
                                        <div
                                            key={i}
                                            className="border border-white/10 p-4 hover:scale-105 transition"
                                        >
                                            <img
                                                src={img.src}
                                                alt=""
                                                className="w-full h-60 object-cover rounded"
                                            />
                                            <p className="text-sm text-white/60 mt-3">
                                                {img.caption}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>
                    </div>
                )}

            </section>


            <style jsx>{`
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }

                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                }

                .custom-scroll::-webkit-scrollbar-track {
                    background: #111;
                }

                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #6ea046;
                    border-radius: 20px;
                }

                .custom-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: #6ea046 #111;
                }

                    .animate-scroll {
                    animation: scroll 10s linear infinite;
                }

                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>

        </ParallaxSection>
    );
}
