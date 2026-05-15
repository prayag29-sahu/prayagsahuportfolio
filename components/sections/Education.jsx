'use client';

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* Basic UI parts for the education section */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 scanline-overlay"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,var(--scanline-color) 2px,var(--scanline-color) 4px)" }} />
    );
}

function CornerAccent({ color = "var(--accent)" }) {
    return (<>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: color }} />
    </>);
}

function WindowChrome({ filename, status = "LIVE", statusColor = "var(--accent)" }) {
    return (
        <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.18em] truncate max-w-[150px] md:max-w-none" style={{ color: "var(--text-muted)" }}>{filename}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[10px] border px-1.5 py-0.5 tracking-widest whitespace-nowrap" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* 
   Education Details 
   I listed my schools and colleges here, along with other 
   activities to show my full journey.
*/
const educationData = [
    {
        id: "EDU_01",
        title: "B.TECH – COMPUTER SCIENCE & ENGINEERING",
        institute: "Baderia Global Institute of Engineering & Management (RGPV)",
        duration: "2023 – 2027",
        status: "ACTIVE",
        tag: "DEGREE",
        accentColor: "var(--accent)",
        poster: "/images/13_Btech/poster1.png",
        points: [
            "CGPA: 8.35 / 10",
            "Focused on Full Stack Development & Designing",
            "Topper in IIT Level Examinations",
            "Active in Hackathons & SIH Participation",
        ],
        images: [
            { src: "/images/13_Btech/01.1.jpg", caption: "1st Opportunity in college" },
            { src: "/images/13_Btech/02.jpg", caption: "SIH Participation top in college level" },
            { src: "/images/13_Btech/03.png", caption: "DBMS NPTEL Topper 5% Silver + Elite Certification IIT Khragpur" },
            { src: "/images/01_certificates/01_Major_06/NPTEL_CN.png", caption: "Coputer Network NPTEL Topper 2% Silver + Elite Certification IIT Khragpur" },
            { src: "/images/13_Btech/04.jpg", caption: "college Hackathon " },
            { src: "/images/13_Btech/05.png", caption: "Virtual Android Developement Internship" },
            { src: "/images/13_Btech/07.png", caption: "Web Design Certificate" },
            { src: "/images/13_Btech/06.png", caption: "Oracle Java Course Certification" },
        ],
    },
    {
        id: "EDU_02",
        title: "PRIMARY & SECONDARY EDUCATION (10TH & 12TH)",
        institute: "Sarvottam Higher Secondary School",
        duration: "2020 – 2023",
        status: "COMPLETED",
        tag: "SCHOOLING",
        accentColor: "var(--accent-blue)",
        poster: "/images/achivements.png", // USER: Update this to poster2.png if available
        points: [
            "12th Grade: 88.6% (Maths & Biology) — School Topper",
            "10th Grade: 93.2% — School Topper",
            "Consistent Academic Excellence & Best Student Awards",
            "Active in Sports Leadership & Republic Day Participation",
        ],
        images: [
            { src: "/images/11_Class12th/01.jpg", caption: "Best Student Award in college 2023" },
            { src: "/images/11_Class12th/05.jpg", caption: "Class 12th Topper catagory" },
            { src: "/images/11_Class12th/03.jpg", caption: "Physics Topper In Gyanoday Academy" },
            { src: "/images/11_Class12th/06.jpg", caption: "Chemistry Topper In Gyanoday Academy" },
            { src: "/images/10_Class10th/02.jpg", caption: "Class 10th Topper Achievement" },
            { src: "/images/10_Class10th/01.jpg", caption: "Republic Day Honor" },
            { src: "/images/11_Class12th/02.jpg", caption: "Class 11th Topper Achievement Award" },
            { src: "/images/11_Class12th/07.jpg", caption: "Coaching Achievement" },
            { src: "/images/10_Class10th/03.jpg", caption: "Sports Leadership and Games Runner-up" },
            { src: "/images/10_Class10th/04.jpg", caption: "Class 9th Topper Achievement" },
            { src: "/images/10_Class10th/05.jpg", caption: "Class 8th Topper Achievement" },
            { src: "/images/11_Class12th/08.jpg", caption: "School Project Exhibition" },
        ],
    },
];

const beyondData = {
    id: "BEYOND_01",
    title: "BEYOND ACADEMICS",
    institute: "Personal Development & Extracurricular Activities",
    duration: "CONTINUOUS",
    status: "ACTIVE",
    accentColor: "var(--accent-amber)",
    poster: "/images/14_OtherActivity/poster.png",
    points: [
        "Active in technical events & competitions",
        "Continuous self-learning via online platforms",
        "Art exploration — Sketches, C Graphics & City Design",
    ],
    images: [
        // { src: "/images/13_Btech/poster1.png", caption: "Achievement Showcase" },
        { src: "/images/14_OtherActivity/01.jpg", caption: "Geta Talent Search Examination" },
        { src: "/images/14_OtherActivity/02.jpg", caption: "Governmental Quiz Certifications" },
        { src: "/images/14_OtherActivity/03.jpg", caption: "Sanskratik Gyan Examination 2015" },
        { src: "/images/14_OtherActivity/04.jpg", caption: "Sanskratik Gyan Examination 2019" },
        { src: "/images/14_OtherActivity/05.jpg", caption: "Sanskratik Gyan Examination 2023" },
        { src: "/images/14_OtherActivity/06.jpg", caption: "Lord Buddha Sketch using C++ graphics" },
        { src: "/images/14_OtherActivity/07.jpg", caption: "Mathematician Ramanujan Sketch using C++ graphics" },
        { src: "/images/14_OtherActivity/08.jpg", caption: "Handmade Sketches" },
        { src: "/images/14_OtherActivity/09.jpg", caption: "Handmade Sketches" },
        { src: "/images/14_OtherActivity/10.jpg", caption: "Achievement Showcase" },
        { src: "/images/14_OtherActivity/11.jpg", caption: "Handmade Sketches" },
        { src: "/images/14_OtherActivity/12.jpg", caption: "Twin Town construction" },
    ],
};


/* 
   Certificates and Photos Gallery 
   I made this popup to show my certificates and photos from events 
   as proof for my education journey.
*/
function PopupGallery({ item, onClose }) {
    const [lightbox, setLightbox] = useState(null);
    if (!item) return null;
    const ac = item.accentColor;

    return (
        <div className="fixed inset-0 z-50 mt-10 flex items-center justify-center" style={{ background: "var(--bg-dim)", backdropFilter: "blur(12px)" }}>
            <div className="relative border w-[92%] max-w-5xl h-[88vh] flex flex-col overflow-hidden"
                style={{ borderColor: ac, background: "var(--surface)" }}
                onClick={(e) => e.stopPropagation()}>
                <ScanlineOverlay />
                <CornerAccent color={ac} />
                <button onClick={onClose} className="absolute top-2 right-2 z-20 border p-1.5 transition-colors duration-200"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff5f56"; e.currentTarget.style.color = "#ff5f56"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                    <X size={18} />
                </button>
                <div className="px-8 py-5 border-b relative z-10 flex items-center justify-between"
                    style={{ borderColor: "var(--border)", borderTopWidth: 3, borderTopColor: ac, borderTopStyle: "solid" }}>
                    <div>
                        <h3 className="font-mono font-black text-xl leading-tight" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                        <p className="font-mono text-[11px] tracking-[0.2em] mt-1" style={{ color: ac }}>@ {item.institute} — {item.duration}</p>
                    </div>
                    <div className="font-mono text-[10px] px-3 py-1 border tracking-widest" style={{ borderColor: ac, color: ac }}>{item.images.length} FILES</div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 custom-gallery-scroll">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {item.images.map((img, i) => (
                            <div key={i} onClick={() => setLightbox(i)} className="border p-3 relative overflow-hidden cursor-pointer group/card transition-all duration-200"
                                style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                                <CornerAccent color="var(--border)" />
                                <div className="relative overflow-hidden">
                                    <img src={img.src} alt={img.caption} className="w-full h-48 object-cover group-hover/card:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="font-mono text-[10px] tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>{img.caption}</p>
                                    <span className="font-mono text-[9px]" style={{ color: ac }}>VIEW →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {lightbox !== null && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center" style={{ background: "var(--bg-dim)", backdropFilter: "blur(20px)" }} onClick={() => setLightbox(null)}>
                    <div className="relative max-w-4xl w-[90%]" onClick={(e) => e.stopPropagation()}>
                        <div className="border p-2" style={{ borderColor: ac, background: "var(--surface)" }}>
                            <img src={item.images[lightbox].src} alt={item.images[lightbox].caption} className="w-full max-h-[72vh] object-contain" />
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                .custom-gallery-scroll::-webkit-scrollbar { width: 4px; }
                .custom-gallery-scroll::-webkit-scrollbar-track { background: var(--bg); }
                .custom-gallery-scroll::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }
                .custom-gallery-scroll { scrollbar-width: thin; scrollbar-color: var(--accent) var(--bg); }
            `}</style>
        </div>
    );
}

/* School/College Card */
function EduCard({ item, index, onExplore, isHorizontal = false }) {
    const ac = item.accentColor;

    return (
        <div className={`relative border overflow-hidden group transition-all duration-300 flex flex-col ${isHorizontal ? 'lg:flex-row lg:items-stretch' : 'h-full'}`} 
            style={{ borderColor: "var(--border)", background: "var(--surface)", borderTopWidth: 3, borderTopColor: ac }}>
            <ScanlineOverlay />
            <CornerAccent color={ac} />
            <WindowChrome filename={`${item.id}.log`} status={item.status} statusColor={item.status === "ACTIVE" ? "var(--accent)" : "var(--text-muted)"} />
            
            <div className={`p-4 lg:p-5 flex flex-col relative z-10 ${isHorizontal ? 'lg:flex-[1.2]' : 'h-full'}`}>
                <div className="mb-3">
                    <div className="inline-flex items-center gap-2 border px-2 py-0.5 mb-2.5" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                        <div className="w-1 h-1 rounded-full" style={{ background: ac }} />
                        <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>{item.duration}</span>
                    </div>
                    <h3 className="font-mono font-black text-lg leading-tight mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="font-mono text-[12px] tracking-widest uppercase font-bold" style={{ color: ac }}>@ {item.institute}</p>
                </div>

                {!isHorizontal && (
                    <div className="relative w-full aspect-video border overflow-hidden mb-4 group/img cursor-pointer" 
                        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                        onClick={() => onExplore(index)}>
                        <CornerAccent color="var(--border)" />
                        <img src={item.poster} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-mono text-[9px] tracking-widest text-white border border-white/30 px-3 py-1 backdrop-blur-sm">VIEW_GALLERY</span>
                        </div>
                    </div>
                )}

                <div className="space-y-1.5 mb-5 flex-1">
                    {item.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <span className="font-mono text-[14px] mt-0.5 shrink-0" style={{ color: "var(--accent)" }}>▸</span>
                            <span className="font-mono text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{pt}</span>
                        </div>
                    ))}
                </div>

                <button onClick={() => onExplore(index)} className={`group/btn flex items-center justify-center gap-2 border font-mono text-[11px] tracking-widest uppercase py-2.5 transition-all duration-200 ${isHorizontal ? 'w-fit px-8' : 'w-full'}`}
                    style={{ borderColor: ac, color: ac }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "var(--bg)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                    $ EXPLORE_NOW <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </button>
            </div>

            {isHorizontal && (
                <div className="relative w-full lg:w-none lg:flex-1 aspect-video lg:aspect-auto border-t lg:border-t-0 lg:border-l overflow-hidden group/img cursor-pointer" 
                    style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                    onClick={() => onExplore(index)}>
                    <CornerAccent color="var(--border)" />
                    <img src={item.poster} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="font-mono text-[10px] tracking-widest text-white border border-white/30 px-3 py-1 backdrop-blur-sm">VIEW_GALLERY</span>
                    </div>
                </div>
            )}
        </div>
    );
}
/* 
   Other Activities Section 
   I added this to show my other skills like digital art 
   and things I learned on my own.
*/
function BeyondAcademics({ onExplore }) {
    const ac = beyondData.accentColor;
    return (
        <div className="mt-12 border relative overflow-hidden group transition-all duration-300" 
            style={{ borderColor: "var(--border)", background: "var(--surface)", borderTopWidth: 3, borderTopColor: ac }}>
            <ScanlineOverlay />
            <CornerAccent color={ac} />
            <WindowChrome filename="EXTRA_CURRICULAR.log" status="ACTIVE" statusColor={ac} />
            
            <div className="flex flex-col lg:flex-row items-stretch">
                <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col relative z-10">
                    <div className="mb-3">
                        <div className="inline-flex items-center gap-2 border px-2 py-0 mb-2" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                            <div className="w-1 h-1 rounded-full" style={{ background: ac }} />
                            <span className="font-mono text-[8px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>CONTINUOUS_GROWTH</span>
                        </div>
                        <h3 className="font-mono font-black text-lg lg:text-xl leading-tight mb-0.5" style={{ color: "var(--text-primary)" }}>BEYOND ACADEMICS</h3>
                        <p className="font-mono text-[12px] tracking-widest uppercase font-bold" style={{ color: ac }}>@ Personal Development & Extracurricular Activities</p>
                    </div>

                    <div className="space-y-1 mb-4 flex-1">
                        {beyondData.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <span className="font-mono text-[15px] mt-0.5 shrink-0" style={{ color: ac }}>▸</span>
                                <span className="font-mono text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{pt}</span>
                            </div>
                        ))}
                    </div>

                    <button onClick={onExplore} className="group/btn w-fit flex items-center justify-center gap-2 border font-mono text-[11px] tracking-widest uppercase px-6 py-2 transition-all duration-200"
                        style={{ borderColor: ac, color: ac }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "var(--bg)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                        $ EXPLORE_NOW <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                </div>

                <div className="relative w-full lg:w-[35%] aspect-video lg:aspect-auto border-t lg:border-t-0 lg:border-l overflow-hidden group/img cursor-pointer" 
                    style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                    onClick={onExplore}>
                    <CornerAccent color="var(--border)" />
                    <img src={beyondData.poster} alt="Beyond Academics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="font-mono text-[10px] tracking-widest text-white border border-white/30 px-3 py-1 backdrop-blur-sm">OPEN_VAULT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


/* 
   Education Section 
   A clear list of my education that lets you see more details for each part.
*/
export default function Education() {
    const [activePopup, setActivePopup] = useState(null);
    const [showBeyond, setShowBeyond] = useState(false);

    return (
        <section className="relative py-10 md:py-14 overflow-hidden" id='education'
            style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}>
            
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" style={{ background: "var(--accent)" }} />
                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / EDUCATION</span>
                    </div>

                    <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent />
                        <WindowChrome filename="EDUCATION_LOG.txt" />
                        <div className="px-5 py-6 md:px-8 md:py-6">
                            <h2 className="font-mono font-black text-2xl xs:text-3xl md:text-5xl tracking-widest uppercase" style={{ color: "var(--text-primary)" }}>
                                EDUCATION_<span style={{ color: "var(--accent)" }}>TIMELINE</span>
                            </h2>
                            <p className="font-mono text-[12px] mt-3 tracking-wider max-w-xl" style={{ color: "var(--text-muted)" }}>
                                $ cat ./education/* — Loaded {educationData.length} records.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.slice(0, 2).map((item, index) => (
                        <EduCard key={item.id} item={item} index={index} onExplore={(i) => setActivePopup(i)} />
                    ))}
                </div>

                <BeyondAcademics onExplore={() => setShowBeyond(true)} />
            </div>

            {activePopup !== null && (
                <PopupGallery item={educationData[activePopup]} onClose={() => setActivePopup(null)} />
            )}

            {showBeyond && (
                <PopupGallery item={beyondData} onClose={() => setShowBeyond(false)} />
            )}
        </section>
    );
}