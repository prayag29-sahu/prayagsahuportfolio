// // 'use client';


// // export default function Education() {


// //     return (
// //         <section
// //             id="education"
// //             className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
// //         >
// //             {/* Background Blobs */}
// //             <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
// //             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

// //             <div className="max-w-7xl mx-auto px-6 relative z-10">
// //                 {/* Heading */}
// //                 <div className="text-center mb-16">
// //                     <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
// //                         Education &amp;{" "}
// //                         <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //                             Learning
// //                         </span>
// //                     </h2>

// //                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //                         Continuous learning and growth through formal education and professional
// //                         development
// //                     </p>
// //                 </div>

// //                 <div className="grid lg:grid-cols-2 gap-16 items-start">

// //                     {/* LEFT : EDUCATION TIMELINE */}
// //                     <div>
// //                         <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
// //                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
// //                                 Educational Timeline
// //                             </h3>

// //                             <div className="relative">
// //                                 {/* Vertical Line */}
// //                                 <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

// //                                 <div className="space-y-8">

// //                                     {/* ITEM 1 */}
// //                                     <div className="relative flex items-start gap-6">
// //                                         <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center relative z-10">
// //                                             <div className="w-3 h-3 bg-white rounded-full"></div>
// //                                         </div>

// //                                         <div>
// //                                             <div className="text-sm text-purple-600 font-medium">
// //                                                 2020 - 2024
// //                                             </div>
// //                                             <h4 className="text-xl font-bold text-gray-900">
// //                                                 Bachelor&apos;s in Computer Science
// //                                             </h4>
// //                                             <p className="text-gray-600">
// //                                                 University of Technology
// //                                             </p>
// //                                             <p className="text-sm text-gray-500 mt-2">
// //                                                 Specialized in Software Engineering and AI
// //                                             </p>
// //                                         </div>
// //                                     </div>

// //                                     {/* ITEM 2 */}
// //                                     <div className="relative flex items-start gap-6">
// //                                         <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
// //                                             <div className="w-3 h-3 bg-white rounded-full"></div>
// //                                         </div>

// //                                         <div>
// //                                             <div className="text-sm text-blue-600 font-medium">
// //                                                 2023
// //                                             </div>
// //                                             <h4 className="text-xl font-bold text-gray-900">
// //                                                 Full Stack Development
// //                                             </h4>
// //                                             <p className="text-gray-600">
// //                                                 Tech Academy Bootcamp
// //                                             </p>
// //                                             <p className="text-sm text-gray-500 mt-2">
// //                                                 Intensive 6-month program
// //                                             </p>
// //                                         </div>
// //                                     </div>

// //                                     {/* ITEM 3 */}
// //                                     <div className="relative flex items-start gap-6">
// //                                         <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center relative z-10">
// //                                             <div className="w-3 h-3 bg-white rounded-full"></div>
// //                                         </div>

// //                                         <div>
// //                                             <div className="text-sm text-green-600 font-medium">
// //                                                 2022
// //                                             </div>
// //                                             <h4 className="text-xl font-bold text-gray-900">
// //                                                 UI/UX Design Certification
// //                                             </h4>
// //                                             <p className="text-gray-600">
// //                                                 Design Institute
// //                                             </p>
// //                                             <p className="text-sm text-gray-500 mt-2">
// //                                                 Advanced design principles and user research
// //                                             </p>
// //                                         </div>
// //                                     </div>

// //                                 </div>
// //                             </div>

// //                             {/* Timeline Image */}
// //                             <div className="mt-8">
// //                                 <img
// //                                     src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/education/education-timeline-d6be18972975463f9980ea4c4afdc0ea.png"
// //                                     alt="Educational timeline"
// //                                     className="w-full rounded-xl object-cover shadow-lg"
// //                                 />
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* RIGHT : CERTIFICATIONS */}
// //                     <div className="space-y-8">

// //                         <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
// //                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
// //                                 Certifications &amp; Achievements
// //                             </h3>

// //                             <div className="space-y-6">

// //                                 {/* CERT 1 */}
// //                                 <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
// //                                     <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
// //                                         ★
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="font-bold text-gray-900">
// //                                             AWS Certified Developer
// //                                         </h4>
// //                                         <p className="text-sm text-gray-600">
// //                                             Amazon Web Services
// //                                         </p>
// //                                     </div>
// //                                 </div>

// //                                 {/* CERT 2 */}
// //                                 <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
// //                                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
// //                                         ★
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="font-bold text-gray-900">
// //                                             Google Cloud Professional
// //                                         </h4>
// //                                         <p className="text-sm text-gray-600">
// //                                             Google Cloud Platform
// //                                         </p>
// //                                     </div>
// //                                 </div>

// //                                 {/* CERT 3 */}
// //                                 <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
// //                                     <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
// //                                         ★
// //                                     </div>
// //                                     <div>
// //                                         <h4 className="font-bold text-gray-900">
// //                                             React Advanced Certification
// //                                         </h4>
// //                                         <p className="text-sm text-gray-600">
// //                                             Meta (Facebook)
// //                                         </p>
// //                                     </div>
// //                                 </div>

// //                             </div>

// //                             {/* Certificates Image */}
// //                             <div className="mt-8">
// //                                 <img
// //                                     src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/education/education-certificates-2712b73397db453587f512592523902d.png"
// //                                     alt="Certificates and achievements"
// //                                     className="w-full rounded-xl object-cover shadow-lg"
// //                                 />
// //                             </div>
// //                         </div>

// //                         {/* CONTINUOUS LEARNING */}
// //                         <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
// //                             <h3 className="text-2xl font-bold mb-4">
// //                                 Continuous Learning
// //                             </h3>

// //                             <p className="text-purple-100 mb-6">
// //                                 I believe in lifelong learning and staying updated with the latest
// //                                 technologies and industry trends.
// //                             </p>

// //                             <div className="grid grid-cols-2 gap-4 text-center">
// //                                 <div>
// //                                     <div className="text-3xl font-bold">15+</div>
// //                                     <div className="text-sm text-purple-200">
// //                                         Online Courses
// //                                     </div>
// //                                 </div>

// //                                 <div>
// //                                     <div className="text-3xl font-bold">8</div>
// //                                     <div className="text-sm text-purple-200">
// //                                         Certifications
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }







// 'use client';

// import {
//     GraduationCap,
//     School,
//     Award,
//     Calendar,
//     BookOpen,
//     Trophy,
//     Code2
// } from "lucide-react";
// import ParallaxSection from "@/components/ui/ParallaxSection";
// export default function Education() {
//     return (
//         <ParallaxSection
//             // backgroundImage="/img/img1.jpeg"
//             backgroundImage="/images/bg1.png"
//             height="400px"
//         >
//             <section
//                 id="education"
//                 className="py-20 relative overflow-hidden"
//             >
//                 {/* Background Blobs */}
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

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
//                                     <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
//                                         Education &{" "}
//                                         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                                             Learning
//                                         </span>
//                                     </h2>
//                                 </h1>

//                                 {/* RIGHT LINE */}
//                                 <div
//                                     className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
//                                 ></div>

//                             </div>

//                         </div>

//                         <p className="text-lg text-gray-400 max-w-3xl mx-auto">
//                             My academic journey, certifications, and continuous learning path
//                         </p>
//                     </div>

//                     <div className="grid lg:grid-cols-2 gap-16 items-start">

//                         {/* LEFT : EDUCATION TIMELINE */}
//                         <div>
//                             <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/5 shadow-xl hover:shadow-2xl transition">
//                                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                     <GraduationCap className="text-cyan-400" />
//                                     Academic Timeline
//                                 </h3>

//                                 <div className="relative">
//                                     {/* Vertical Line */}
//                                     <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

//                                     <div className="space-y-10">

//                                         {/* 10th */}
//                                         <div className="relative flex items-start gap-6">
//                                             <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center relative z-10">
//                                                 <School size={16} className="text-black" />
//                                             </div>

//                                             <div>
//                                                 <div className="text-sm text-cyan-400 flex items-center gap-2">
//                                                     <Calendar size={14} /> 2020 – 2021
//                                                 </div>
//                                                 <h4 className="text-xl font-bold text-white">
//                                                     10th Grade (MPBSE)
//                                                 </h4>
//                                                 <p className="text-gray-400">
//                                                     Sarvottam Higher Secondary School
//                                                 </p>
//                                                 <p className="text-sm text-gray-500 mt-2">
//                                                     Scored <strong>93.2%</strong> • School Topper
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         {/* 12th */}
//                                         <div className="relative flex items-start gap-6">
//                                             <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
//                                                 <School size={16} className="text-black" />
//                                             </div>

//                                             <div>
//                                                 <div className="text-sm text-blue-400 flex items-center gap-2">
//                                                     <Calendar size={14} /> 2022 – 2023
//                                                 </div>
//                                                 <h4 className="text-xl font-bold text-white">
//                                                     12th Grade (Maths + Biology)
//                                                 </h4>
//                                                 <p className="text-gray-400">
//                                                     Sarvottam Higher Secondary School
//                                                 </p>
//                                                 <p className="text-sm text-gray-500 mt-2">
//                                                     Scored <strong>88.6%</strong> • School Topper
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         {/* B.Tech */}
//                                         <div className="relative flex items-start gap-6">
//                                             <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
//                                                 <GraduationCap size={16} className="text-black" />
//                                             </div>

//                                             <div>
//                                                 <div className="text-sm text-green-400 flex items-center gap-2">
//                                                     <Calendar size={14} /> 2023 – 2027
//                                                 </div>
//                                                 <h4 className="text-xl font-bold text-white">
//                                                     B.Tech – Computer Science & Engineering
//                                                 </h4>
//                                                 <p className="text-gray-400">
//                                                     Baderia Global Institute of Engineering & Management
//                                                     (RGPV)
//                                                 </p>
//                                                 <p className="text-sm text-gray-500 mt-2">
//                                                     1st Year SGPA: <strong>8.81</strong> • Collage Rank - 2nd
//                                                 </p>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* RIGHT : CERTIFICATIONS & LEARNING */}
//                         <div className="space-y-8">

//                             {/* CERTIFICATIONS */}
//                             <div className="bg-[#0f172a] p-11 rounded-2xl border border-white/5 shadow-xl hover:shadow-2xl transition">
//                                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                                     <Award className="text-cyan-400" />
//                                     Certifications & Achievements
//                                 </h3>

//                                 <div className="space-y-6">

//                                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
//                                         <Trophy className="text-yellow-400" />
//                                         <div>
//                                             <h4 className="font-bold text-white">
//                                                 NPTEL – DBMS (IIT Kharagpur)
//                                             </h4>
//                                             <p className="text-sm text-gray-400">
//                                                 Silver + Elite Certificate
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
//                                         <BookOpen className="text-cyan-400" />
//                                         <div>
//                                             <h4 className="font-bold text-white">
//                                                 freeCodeCamp – Web Development
//                                             </h4>
//                                             <p className="text-sm text-gray-400">
//                                                 Frontend & Full Stack Learning
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
//                                         <Code2 className="text-blue-400" />
//                                         <div>
//                                             <h4 className="font-bold text-white">
//                                                 Interviewbit
//                                             </h4>
//                                             <p className="text-sm text-gray-400">
//                                                 Coding • DSA • Badges • Streak
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
//                                         <Award className="text-green-400" />
//                                         <div>
//                                             <h4 className="font-bold text-white">
//                                                 Hackathons & Competitions
//                                             </h4>
//                                             <p className="text-sm text-gray-400">
//                                                 SIH • Brahmax • College Hackathons
//                                             </p>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                     {/* CONTINUOUS LEARNING */}
//                     <div className="bg-gradient-to-br mt-10 from-cyan-500 to-blue-600 p-8 rounded-2xl text-white">
//                         <h3 className="text-2xl font-bold mb-4">
//                             Continuous Learning
//                         </h3>

//                         <p className="text-cyan-100 mb-6">
//                             Constantly upgrading my skills through courses, certifications,
//                             and real-world projects.
//                         </p>

//                         <div className="grid grid-cols-4 gap-4 text-center">
//                             <div>
//                                 <div className="text-3xl font-bold">20+</div>
//                                 <div className="text-sm text-cyan-100">
//                                     Projects
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="text-3xl font-bold">5+</div>
//                                 <div className="text-sm text-cyan-100">
//                                     Courses & Trainings
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="text-3xl font-bold">8+</div>
//                                 <div className="text-sm text-cyan-100">
//                                     Certificates & Awards
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="text-3xl font-bold">10+</div>
//                                 <div className="text-sm text-cyan-100">
//                                     Badges
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </ParallaxSection>
//     );
// }
