// // 'use client';

// // import Carousel from './Carousel';
// // import { Layers, BookMarked, Medal, BadgeCheck, Code, Trophy } from "lucide-react";

// // const SHOWCASE_STATS = [
// //     {
// //         icon: <Layers />,
// //         value: "45+",
// //         label: "Total Projects",
// //     },
// //     {
// //         icon: <Code />,
// //         value: "10+",
// //         label: "Major Projects",
// //     },
// //     {
// //         icon: <BookMarked />,
// //         value: "21+",
// //         label: "Certificates",
// //     },
// //     {
// //         icon: <BadgeCheck />,
// //         value: "20+",
// //         label: "Badges",
// //     },
// //     {
// //         icon: <Trophy />,
// //         value: "10+",
// //         label: "Achievements",
// //     },
// //     {
// //         icon: <Medal />,
// //         value: "5+",
// //         label: "Hackathons",
// //     },
// // ];


// // export default function ShowcaseSection() {
// //     return (
// //         <section
// //             id="showcase"
// //             className="relative py-24 bg-gradient-to-br from-[#020617] via-[#020617] to-[#030712] overflow-hidden"
// //         >
// //             {/* Background Glow */}
// //             <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />
// //             <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px]" />

// //             <div className="relative z-10 max-w-7xl mx-auto px-6">

// //                 {/* HEADER */}
// //                 <div className="text-center mb-16">
// //                     <p className="text-sm tracking-widest text-blue-400 uppercase mb-3">
// //                         What I Do
// //                     </p>
// //                     <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
// //                         Skills, Projects & Expertise
// //                     </h2>
// //                     <p className="text-lg text-gray-400 max-w-3xl mx-auto">
// //                         A quick overview of my technical strengths, experience, and the
// //                         value I bring to real-world projects.
// //                     </p>
// //                 </div>

// //                 {/* CAROUSEL WRAPPER */}
// //                 <div className="flex justify-center">
// //                     <div style={{ height: '600px', position: 'relative' }}>
// //                         <Carousel
// //                             items={SHOWCASE_ITEMS}
// //                             baseWidth={330}
// //                             autoplay
// //                             autoplayDelay={2500}
// //                             pauseOnHover
// //                             loop
// //                             round
// //                         />
// //                     </div>
// //                 </div>

// //             </div>
// //         </section>
// //     );
// // }





// 'use client';

// import { useEffect, useMemo, useRef, useState } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import {
//     Layers,
//     BookMarked,
//     Medal,
//     BadgeCheck,
// } from 'lucide-react';

// /* ===================== */
// /* CAROUSEL ITEM */
// /* ===================== */
// function CarouselItem({ item, index, itemWidth, x, offset }) {
//     const range = [
//         -(index + 1) * offset,
//         -index * offset,
//         -(index - 1) * offset,
//     ];
//     const rotateY = useTransform(x, range, [45, 0, -45]);

//     return (
//         <motion.div
//             className="relative shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black/40"
//             style={{
//                 width: itemWidth,
//                 height: 220,
//                 rotateY,
//             }}
//         >
//             {/* IMAGE */}
//             <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//             />

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-black/40" />

//             {/* TEXT */}
//             <div className="absolute bottom-4 left-4">
//                 <h4 className="text-white font-bold text-lg">
//                     {item.title}
//                 </h4>
//                 <p className="text-xs text-gray-300">
//                     {item.desc}
//                 </p>
//             </div>
//         </motion.div>
//     );
// }

// /* ===================== */
// /* SIMPLE CAROUSEL */
// /* ===================== */
// function SimpleCarousel({ items }) {
//     const GAP = 16;
//     const baseWidth = 260;
//     const itemWidth = baseWidth;
//     const offset = itemWidth + GAP;

//     const x = useMotionValue(0);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % items.length);
//         }, 2200);
//         return () => clearInterval(interval);
//     }, [items.length]);

//     useEffect(() => {
//         x.set(-index * offset);
//     }, [index, offset, x]);

//     return (
//         <div className="overflow-hidden">
//             <motion.div
//                 className="flex"
//                 style={{ x, gap: GAP }}
//                 animate={{ x: -index * offset }}
//                 transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             >
//                 {items.map((item, i) => (
//                     <CarouselItem
//                         key={i}
//                         item={item}
//                         index={i}
//                         itemWidth={itemWidth}
//                         x={x}
//                         offset={offset}
//                     />
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

// /* ===================== */
// /* ASIDE SHOWCASE */
// /* ===================== */
// export default function ShowcaseAside() {

//     /* 🔹 YAHI IMAGES CHANGE KARNA HAI */
//     const showcaseItems = [
//         {
//             title: 'Projects',
//             desc: 'Major & Mini',
//             image: '/images/projects/ghotul.png',
//         },
//         {
//             title: 'Certificates',
//             desc: 'NPTEL, Oracle',
//             image: '/images/certificates/nptel.png',
//         },
//         {
//             title: 'Hackathons',
//             desc: 'SIH, Brahmax',
//             image: '/images/achievements/hackathon.png',
//         },
//         {
//             title: 'Badges',
//             desc: 'Cisco, Credly',
//             image: '/images/badges/cisco.png',
//         },
//     ];

//     return (
//         <aside
//             className="hidden lg:flex flex-col w-80 px-8 py-20 relative shadow-[-10px_0_35px_rgba(0,0,0,0.45)]"
//             style={{ backgroundColor: 'rgba(110,160,70,0.9)' }}
//         >
//             {/* INNER GRADIENT */}
//             <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent pointer-events-none" />

//             {/* TITLE */}
//             <h3 className="text-2xl font-bold text-black mb-10 relative z-10">
//                 Learning Showcase
//             </h3>

//             {/* STATS */}
//             <div className="space-y-6 mb-10 relative z-10">
//                 <Stat icon={<Layers />} value="40+" label="Projects" />
//                 <Stat icon={<BookMarked />} value="20+" label="Courses" />
//                 <Stat icon={<Medal />} value="21+" label="Certificates" />
//                 <Stat icon={<BadgeCheck />} value="20+" label="Badges" />
//             </div>

//             {/* CAROUSEL */}
//             <div className="relative z-10">
//                 <SimpleCarousel items={showcaseItems} />
//             </div>
//         </aside>
//     );
// }

// /* ===================== */
// /* STAT COMPONENT */
// /* ===================== */
// function Stat({ icon, value, label }) {
//     return (
//         <div className="flex items-center gap-4">
//             <div className="w-10 h-10 bg-black/30 rounded-xl flex items-center justify-center text-black">
//                 {icon}
//             </div>
//             <div>
//                 <div className="text-xl font-bold text-black">
//                     {value}
//                 </div>
//                 <div className="text-sm text-black/80">
//                     {label}
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Layers, BookMarked, Medal, BadgeCheck } from 'lucide-react';

/* ================= CAROUSEL ITEM ================= */
function CarouselItem({ item, index, itemWidth, x, offset }) {
    const range = [
        -(index + 1) * offset,
        -index * offset,
        -(index - 1) * offset,
    ];
    const rotateY = useTransform(x, range, [35, 0, -35]);

    return (
        <motion.div
            className="relative shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black/40"
            style={{ width: itemWidth, height: 220, rotateY }}
        >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
                <p className="text-xs text-gray-300">{item.desc}</p>
            </div>
        </motion.div>
    );
}

/* ================= SIMPLE CAROUSEL ================= */
// function SimpleCarousel({ items }) {
//     const GAP = 16;
//     const WIDTH = 260;
//     const OFFSET = WIDTH + GAP;

//     const x = useMotionValue(0);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const i = setInterval(
//             () => setIndex((p) => (p + 1) % items.length),
//             2200
//         );
//         return () => clearInterval(i);
//     }, [items.length]);

//     return (
//         <div className="overflow-hidden">
//             <motion.div
//                 className="flex"
//                 style={{ gap: GAP, x }}
//                 animate={{ x: -index * OFFSET }}
//                 transition={{ type: 'spring', stiffness: 280, damping: 30 }}
//             >
//                 {items.map((item, i) => (
//                     <CarouselItem
//                         key={i}
//                         item={item}
//                         index={i}
//                         itemWidth={WIDTH}
//                         x={x}
//                         offset={OFFSET}
//                     />
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

/* ================= ASIDE ================= */
export default function ShowcaseAside() {
    // const showcaseItems = [
    //     { title: 'Projects', desc: 'Major & Mini', image: '/images/projects/ghotul.png' },
    //     { title: 'Certificates', desc: 'NPTEL • Oracle', image: '/images/01_certificates/01_Major_06/NPTEL_DBMS.png' },
    //     { title: 'Hackathons', desc: 'SIH • Brahmax', image: '/images/01_certificates/01_Major_06/sih.jpg' },
    //     { title: 'Badges', desc: 'Cisco • Credly', image: '/images/01_badges/array-master.png' },
    // ];

    return (
        <aside
            className="hidden lg:flex flex-col w-80 px-8 py-20 relative shadow-[-10px_0_35px_rgba(0,0,0,0.45)]"
            style={{ backgroundColor: 'rgba(110,160,70,0.9)' }}
        >
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent" />

            <h3 className="text-2xl font-bold text-black mb-10 relative z-10">
                Learning Showcase
            </h3>

            {/* <div className="space-y-6 mb-10 relative z-10">
                <Stat icon={<Layers />} value="40+" label="Projects" />
                <Stat icon={<BookMarked />} value="20+" label="Courses" />
                <Stat icon={<Medal />} value="21+" label="Certificates" />
                <Stat icon={<BadgeCheck />} value="20+" label="Badges" />
            </div> */}

            <div className="relative z-10">
                <SimpleCarousel items={showcaseItems} />
            </div>
        </aside>
    );
}

function Stat({ icon, value, label }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center text-black">
                {icon}
            </div>
            <div>
                <div className="text-2xl font-bold text-black">{value}</div>
                <div className="text-sm font-medium text-black/80">{label}</div>
            </div>
        </div>
    );
}


