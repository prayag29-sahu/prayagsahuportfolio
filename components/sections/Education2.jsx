'use client';

import ParallaxSection from '@/components/ui/ParallaxSection';
import { Trophy, BookOpen, Code2, Award } from "lucide-react";

export default function Certifications() {

    const certData = [
        {
            title: "NPTEL – DBMS (IIT Kharagpur)",
            subtitle: "Silver + Elite Certificate",
            icon: <Trophy size={16} />,
            image: "/images/01_certificates/01_Major_06/NPTEL_DBMS.png",
            year: "2024"
        },
        {
            title: "freeCodeCamp",
            subtitle: "Frontend & Full Stack Development",
            icon: <BookOpen size={16} />,
            image: "/images/01_certificates/01_Major_06/freecodecampwebdevelopment.png",
            year: "2023"
        },
        {
            title: "InterviewBit",
            subtitle: "DSA • Badges • Streak Achievements",
            icon: <Code2 size={16} />,
            image: "/images/01_badges/array-master.png",
            year: "2023"
        },
        {
            title: "Hackathons",
            subtitle: "SIH • Brahmax • College Hackathons",
            icon: <Award size={16} />,
            image: "/images/01_certificates/01_Major_06/sih.jpg",
            year: "2022"
        }
    ];

    return (
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">

            <section id="certifications" className="relative py-28 text-white">

                <div className="max-w-6xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="mb-20">
                        <h2 className="text-6xl font-extrabold tracking-tight">
                            CERTIFICATION<span className="highlight">_LOG</span>
                        </h2>
                    </div>

                    {/* Timeline Wrapper */}
                    <div className="relative">

                        {/* Vertical Line */}
                        <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-[#6ea046] shadow-[0_0_12px_rgba(110,160,70,0.7)]" />

                        <div className="space-y-20">

                            {certData.map((item, index) => (
                                <div key={index} className="relative flex items-start gap-10">

                                    {/* Timeline Node */}
                                    <div className="relative z-10">
                                        <div className="w-6 h-6 bg-[#6ea046] border-2 border-white shadow-[0_0_12px_rgba(110,160,70,0.8)]" />
                                    </div>

                                    {/* Card */}
                                    <div className="
                                        relative
                                        flex-1
                                        bg-black/60
                                        backdrop-blur-md
                                        border border-white/20
                                        p-10
                                        rounded-xl
                                        shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                                        hover:shadow-[0_25px_50px_rgba(110,160,70,0.4)]
                                        transition-all duration-300
                                    ">

                                        {/* Year Badge */}
                                        <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 text-sm font-semibold tracking-wide rounded">
                                            {item.year}
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-8 items-center">

                                            {/* LEFT TEXT */}
                                            <div className="flex items-start gap-4">

                                                <div className="w-10 h-10 rounded-full bg-[#6ea046] flex items-center justify-center text-black shrink-0">
                                                    {item.icon}
                                                </div>

                                                <div>
                                                    <h3 className="text-2xl font-bold tracking-wide mb-2">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-white/70">
                                                        {item.subtitle}
                                                    </p>
                                                </div>

                                            </div>

                                            {/* RIGHT IMAGE */}
                                            <div className="
                                                w-full h-32
                                                rounded-lg
                                                overflow-hidden
                                                border border-white/10
                                                shadow-[0_8px_20px_rgba(110,160,70,0.4)]
                                            ">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </section>

        </ParallaxSection>
    );
}
