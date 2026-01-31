
// export default function AchievementCard() {



//     return (

//         <section
//             id="achievements"
//             className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
//         >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">

//                 {/* Heading */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                         Achievements &amp;{" "}
//                         <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                             Recognition
//                         </span>
//                     </h2>

//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Celebrating milestones and accomplishments that define my professional journey
//                     </p>
//                 </div>

//                 {/* STATS GRID */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

//                     <AchievementStat value="50+" label="Projects Completed" desc="Successfully delivered" color="text-purple-400" />

//                     <AchievementStat value="25+" label="Happy Clients" desc="Satisfied customers" color="text-pink-400" />

//                     <AchievementStat value="3+" label="Years Experience" desc="In development" color="text-blue-400" />

//                     <AchievementStat value="15+" label="Technologies" desc="Mastered skills" color="text-green-400" />

//                 </div>

//                 {/* AWARDS GRID */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                     {/* LEFT AWARDS */}
//                     <div className="space-y-8">

//                         {/* Award 1 */}
//                         <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition">
//                             <div className="flex items-center mb-4">
//                                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
//                                     ★
//                                 </div>
//                                 <h3 className="text-xl font-bold text-white">
//                                     Best Developer Award 2023
//                                 </h3>
//                             </div>

//                             <p className="text-gray-300">
//                                 Recognized for outstanding contribution to innovative web development
//                                 projects and exceptional problem-solving skills.
//                             </p>
//                         </div>

//                         {/* Award 2 */}
//                         <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition">
//                             <div className="flex items-center mb-4">
//                                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
//                                     ✔
//                                 </div>
//                                 <h3 className="text-xl font-bold text-white">
//                                     Certified Full-Stack Developer
//                                 </h3>
//                             </div>

//                             <p className="text-gray-300">
//                                 Completed comprehensive certification program covering modern web
//                                 technologies, databases, and deployment strategies.
//                             </p>
//                         </div>

//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <div className="flex justify-center">
//                         <img
//                             src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/achievements/achievements-awards-4cf5fcb1ef1c4b74aaa27883077356d6.png"
//                             alt="Achievements and awards"
//                             className="w-full max-w-lg rounded-2xl object-cover shadow-2xl border border-white/20"
//                         />
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }
// function AchievementStat({ value, label, desc, color }) {
//     return (
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition transform hover:scale-105">
//             <div className={`text-4xl font-bold mb-2 ${color}`}>
//                 {value}
//             </div>
//             <div className="text-white font-semibold mb-2">
//                 {label}
//             </div>
//             <div className="text-gray-300 text-sm">
//                 {desc}
//             </div>
//         </div>
//     );
// }










// 'use client';

// import {
//     Trophy,
//     Award,
//     GraduationCap,
//     Star,
//     Code,
//     Medal,
// } from "lucide-react";
// import ParallaxSection from "@/components/ui/ParallaxSection";
// export default function AchievementCard() {
//     return (
//         <ParallaxSection
//             // backgroundImage="/img/img2.jpeg"
//             backgroundImage="/images/bg1.png"
//             height="400px"
//         >
//             <section
//                 id="achievements"
//                 className="py-20 relative overflow-hidden"
//             >
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//                 <div className="max-w-7xl mx-auto px-6 relative z-10">

//                     {/* Heading */}
//                     <div className="text-center mb-16">
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
//                                         Achievements & {" "}
//                                         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                                             Recognition
//                                         </span>
//                                     </h2>
//                                 </h1>

//                                 {/* RIGHT LINE */}
//                                 <div
//                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
//                                 ></div>

//                             </div>

//                         </div>

//                         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                             Academic excellence, certifications, competitions, and real-world
//                             development milestones
//                         </p>
//                     </div>

//                     {/* STATS GRID */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

//                         <AchievementStat
//                             icon={<Code />}
//                             value="4+"
//                             label="Projects Completed"
//                             desc="Academic & Freelance"
//                             color="text-cyan-400"
//                         />

//                         <AchievementStat
//                             icon={<Star />}
//                             value="2"
//                             label="Clients Served"
//                             desc="Freelancing Projects"
//                             color="text-blue-400"
//                         />

//                         <AchievementStat
//                             icon={<GraduationCap />}
//                             value="1+"
//                             label="Years Active"
//                             desc="Development Journey"
//                             color="text-indigo-400"
//                         />

//                         <AchievementStat
//                             icon={<Award />}
//                             value="15+"
//                             label="Certificates"
//                             desc="Courses & Hackathons"
//                             color="text-emerald-400"
//                         />

//                     </div>

//                     {/* AWARDS GRID */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                         {/* LEFT CONTENT */}
//                         <div className="space-y-8">

//                             {/* Achievement 1 */}
//                             <div className="bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:scale-[1.02]">
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
//                                         <Medal className="text-white" size={22} />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white">
//                                         Academic Excellence & School Toppers
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-300">
//                                     Achieved top grades consistently from Class 8th to 12th,
//                                     including <strong>93.2% in 10th</strong> and
//                                     <strong> 88.6% in 12th</strong> (MPBSE). Recognized as
//                                     <strong> Best Student of the Year</strong> at school level.
//                                 </p>
//                             </div>

//                             {/* Achievement 2 */}
//                             <div className="bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:scale-[1.02]">
//                                 <div className="flex items-center mb-4">
//                                     <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
//                                         <Trophy className="text-white" size={22} />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white">
//                                         Certifications, Hackathons & Competitive Learning
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-300">
//                                     Earned <strong>NPTEL DBMS Silver + Elite certificate</strong>,
//                                     completed <strong>freeCodeCamp</strong> programs, participated
//                                     in <strong>SIH & BrahmX Hackathons</strong>, and secured
//                                     top-10 rank in first-year B.Tech mid-term examinations
//                                     (SGPA <strong>8.81</strong>).
//                                 </p>
//                             </div>

//                         </div>

//                         {/* RIGHT IMAGE */}
//                         <div className="flex justify-center">
//                             <img
//                                 src="/images/achievements.png"
//                                 alt="Awards, certificates and achievements"
//                                 className="w-full max-w-lg rounded-2xl object-cover shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500"
//                             />
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </ParallaxSection>
//     );
// }

// /* STAT CARD */
// function AchievementStat({ icon, value, label, desc, color }) {
//     return (
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
//             <div className={`flex justify-center mb-3 ${color}`}>
//                 {icon}
//             </div>
//             <div className={`text-4xl font-bold mb-2 ${color}`}>
//                 {value}
//             </div>
//             <div className="text-white font-semibold mb-2">
//                 {label}
//             </div>
//             <div className="text-gray-300 text-sm">
//                 {desc}
//             </div>
//         </div>
//     );
// }
