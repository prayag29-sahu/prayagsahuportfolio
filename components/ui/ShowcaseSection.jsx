'use client';

import Carousel from './Carousel';
import { Layers, BookMarked, Medal, BadgeCheck, Code, Trophy } from "lucide-react";

const SHOWCASE_STATS = [
    {
        icon: <Layers />,
        value: "45+",
        label: "Total Projects",
    },
    {
        icon: <Code />,
        value: "10+",
        label: "Major Projects",
    },
    {
        icon: <BookMarked />,
        value: "21+",
        label: "Certificates",
    },
    {
        icon: <BadgeCheck />,
        value: "20+",
        label: "Badges",
    },
    {
        icon: <Trophy />,
        value: "10+",
        label: "Achievements",
    },
    {
        icon: <Medal />,
        value: "5+",
        label: "Hackathons",
    },
];


export default function ShowcaseSection() {
    return (
        <section
            id="showcase"
            className="relative py-24 bg-gradient-to-br from-[#020617] via-[#020617] to-[#030712] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <p className="text-sm tracking-widest text-blue-400 uppercase mb-3">
                        What I Do
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Skills, Projects & Expertise
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        A quick overview of my technical strengths, experience, and the
                        value I bring to real-world projects.
                    </p>
                </div>

                {/* CAROUSEL WRAPPER */}
                <div className="flex justify-center">
                    <div style={{ height: '600px', position: 'relative' }}>
                        <Carousel
                            items={SHOWCASE_ITEMS}
                            baseWidth={330}
                            autoplay
                            autoplayDelay={2500}
                            pauseOnHover
                            loop
                            round
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
