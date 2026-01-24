

// export default function SkillCard() {


//     return (

//         <section
//             id="skills"
//             className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
//         >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%23000000 fill-opacity=%220.02%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 {/* Heading */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Skills &amp;{" "}
//                         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                             Expertise
//                         </span>
//                     </h2>

//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         A comprehensive overview of my technical skills and proficiency levels
//                         across various technologies
//                     </p>
//                 </div>

//                 {/* SKILLS GRID */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//                     {/* FRONTEND */}
//                     <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                             Frontend Development
//                         </h3>

//                         <SkillBar title="React.js" percent="95%" width="95%" color="from-blue-500 to-blue-600" />
//                         <SkillBar title="JavaScript / TypeScript" percent="90%" width="90%" color="from-green-500 to-green-600" />
//                         <SkillBar title="HTML5 / CSS3" percent="98%" width="98%" color="from-purple-500 to-purple-600" />
//                         <SkillBar title="Tailwind CSS" percent="92%" width="92%" color="from-cyan-500 to-cyan-600" />
//                     </div>

//                     {/* BACKEND & TOOLS */}
//                     <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                             Backend &amp; Tools
//                         </h3>

//                         <SkillBar title="Node.js" percent="88%" width="88%" color="from-green-500 to-green-600" />
//                         <SkillBar title="MongoDB" percent="85%" width="85%" color="from-emerald-500 to-emerald-600" />
//                         <SkillBar title="Git / GitHub" percent="93%" width="93%" color="from-orange-500 to-orange-600" />
//                         <SkillBar title="AWS / Docker" percent="80%" width="80%" color="from-blue-500 to-blue-600" />
//                     </div>

//                     {/* DESIGN & OTHERS */}
//                     <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                             Design &amp; Others
//                         </h3>

//                         <SkillBar title="UI / UX Design" percent="87%" width="87%" color="from-pink-500 to-pink-600" />
//                         <SkillBar title="Figma" percent="90%" width="90%" color="from-indigo-500 to-indigo-600" />
//                         <SkillBar title="Python" percent="82%" width="82%" color="from-yellow-500 to-yellow-600" />
//                         <SkillBar title="Adobe Creative Suite" percent="78%" width="78%" color="from-red-500 to-red-600" />
//                     </div>

//                 </div>

//                 {/* BOTTOM NOTE */}
//                 <div className="mt-16 text-center">
//                     <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//                         <h3 className="text-2xl font-bold mb-4">
//                             Always Learning &amp; Growing
//                         </h3>
//                         <p className="text-lg opacity-90">
//                             Continuously expanding my skill set with the latest technologies and
//                             industry best practices to deliver cutting-edge solutions.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// function SkillBar({ title, percent, width, color }) {
//     return (
//         <div className="mb-5">
//             <div className="flex justify-between items-center mb-2">
//                 <span className="font-semibold text-gray-700">{title}</span>
//                 <span className="font-bold text-gray-600">{percent}</span>
//             </div>

//             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                 <div
//                     className={`h-full rounded-full bg-gradient-to-r ${color}`}
//                     style={{ width }}
//                 ></div>
//             </div>
//         </div>
//     );
// }











'use client';

import {
    Code2,
    Layout,
    Database,
    Server,
    Cpu,
    Palette,
    GitBranch,
} from "lucide-react";
import ParallaxSection from "@/components/ui/ParallaxSection";
export default function SkillCard() {
    return (
        <ParallaxSection
            // backgroundImage="/img/img2.jpeg"
            backgroundImage="/images/bg1.png"
            height="400px"
        >
            <section
                id="skills"
                className="py-20  relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-16">

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
                                        Skills &{" "}
                                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                            Expertise
                                        </span>
                                    </h2>
                                </h1>

                                {/* RIGHT LINE */}
                                <div
                                    className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
                                ></div>

                            </div>

                        </div>

                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            A comprehensive overview of my technical skills and proficiency
                            across frontend, backend, programming, and design technologies
                        </p>
                    </div>

                    {/* SKILLS GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* FRONTEND */}
                        <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Layout className="text-cyan-400" />
                                Frontend Development
                            </h3>

                            <SkillBar title="React.js" percent="90%" width="90%" />
                            <SkillBar title="Next.js" percent="85%" width="85%" />
                            <SkillBar title="HTML5 / CSS3" percent="95%" width="95%" />
                            <SkillBar title="Tailwind CSS" percent="92%" width="92%" />
                            <SkillBar title="JavaScript" percent="88%" width="88%" />
                        </div>

                        {/* BACKEND & DATABASE */}
                        <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Server className="text-cyan-400" />
                                Backend & Database
                            </h3>

                            <SkillBar title="Node.js" percent="85%" width="85%" />
                            <SkillBar title="Express.js" percent="85%" width="85%" />
                            <SkillBar title="MongoDB" percent="80%" width="80%" />
                            <SkillBar title="PostgreSQL" percent="78%" width="78%" />
                            <SkillBar title="Supabase" percent="75%" width="75%" />
                        </div>

                        {/* PROGRAMMING & TOOLS */}
                        <div className="bg-[#0f172a] rounded-3xl p-8 border border-white/5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Cpu className="text-cyan-400" />
                                Programming & Tools
                            </h3>

                            <SkillBar title="C++" percent="90%" width="90%" />
                            <SkillBar title="Java" percent="88%" width="88%" />
                            <SkillBar title="Python" percent="70%" width="70%" />
                            <SkillBar title="Git / GitHub" percent="93%" width="93%" />
                            <SkillBar title="Figma / Canva" percent="85%" width="85%" />
                        </div>

                    </div>

                    {/* BOTTOM NOTE */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
                                <GitBranch />
                                Always Learning & Growing
                            </h3>
                            <p className="text-lg opacity-90 max-w-3xl mx-auto">
                                I continuously improve my skills by learning new technologies,
                                working on real-world projects, and following industry best
                                practices to build scalable and efficient solutions.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </ParallaxSection>
    );
}

/* SKILL BAR COMPONENT */
function SkillBar({ title, percent, width }) {
    return (
        <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-300">{title}</span>
                <span className="font-semibold text-gray-400">{percent}</span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                    style={{ width }}
                ></div>
            </div>
        </div>
    );
}
