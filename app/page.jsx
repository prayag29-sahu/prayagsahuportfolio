
"use client"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSections"
import EducationSection from "@/components/sections/Education"
import SkillsSection from "@/components/sections/SkillCard"
import ProjectsSection from "@/components/sections/ProjectCard"
import AchievementsSection from "@/components/sections/AchievementCard"
import ContactSection from "@/components/sections/ContactSection"
import CTA from "@/components/sections/CTA"

export default function Portfolio() {

  return (
    <>


      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= ABOUT ================= */}
      <AboutSection />

      {/* ================= Education ================= */}
      <EducationSection />
      
      {/* ================= JOURNEY ================= */}
      {/* <JourneySection /> */}

      {/* ================= SKILLS ================= */}
      <SkillsSection />

      {/* ================= PROJECTS ================= */}
      <ProjectsSection />

      {/* ================= ACHIEVEMENTS ================= */}
      <AchievementsSection />

      {/* ================= CTA ================= */}
      <CTA />
      
      {/* ================= CONTACT ================= */}
      <ContactSection />

    </>
  );
}






// "use client";

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Github, Linkedin, Twitter, Mail } from "lucide-react";


// export default function Portfolio() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-gray-900 text-white overflow-x-hidden">

//       {/* ================= HERO ================= */}
//       <section
//         id="home"
//         className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#2b0f47] via-[#4a1c74] to-[#1b1035]"
//       >
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>
//             <p className="text-purple-300 uppercase tracking-widest mb-4">
//               WELCOME TO MY PORTFOLIO
//             </p>

//             <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
//               Creative <br />
//               <span className="text-pink-400">Developer</span> & <br />
//               Designer
//             </h1>

//             <p className="text-lg text-gray-200 max-w-xl mb-8 leading-relaxed">
//               Crafting stunning digital experiences with cutting-edge AI
//               technology, 3D animations, and modern web development.
//               Let&apos;s build something extraordinary together.
//             </p>

//             <div className="flex gap-4 mb-10">
//               <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-semibold">
//                 View My Work
//               </button>

//               <button className="px-8 py-4 rounded-full border border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white transition">
//                 Get In Touch
//               </button>
//             </div>

//             {/* STATS */}
//             <div className="flex gap-10">
//               <div>
//                 <div className="text-3xl font-bold">50+</div>
//                 <div className="text-sm text-gray-300">Projects</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold">3+</div>
//                 <div className="text-sm text-gray-300">Years Exp</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold">100%</div>
//                 <div className="text-sm text-gray-300">Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center lg:justify-end relative">
//             <img
//               src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/hero/hero-main-9d50f5ca5e6d4a54bb5a6d4213fba63f.png"
//               alt="Developer Portrait"
//               className="w-full max-w-md rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT SECTION ================= */}
//       <section
//         id="about"
//         className="py-20 bg-white relative overflow-hidden"
//       >
//         {/* Top Gradient Line */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>

//         <div className="max-w-7xl mx-auto px-6">
//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               About{" "}
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Me
//               </span>
//             </h2>

//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Passionate about creating digital experiences that blend creativity
//               with cutting-edge technology
//             </p>
//           </div>

//           {/* Content Grid */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* LEFT IMAGE */}
//             <div className="space-y-8">
//               <div className="relative">
//                 <img
//                   src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/about/about-portrait-423b5deb58764c43af83a71a10d36f8b.png"
//                   alt="Professional portrait"
//                   className="w-full rounded-2xl object-cover shadow-2xl"
//                 />

//                 {/* Availability Badge */}
//                 <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-sm font-medium text-gray-700">
//                       Available for projects
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <h3 className="text-3xl font-bold text-gray-900">
//                   Crafting Digital Excellence
//                 </h3>

//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   With over 3 years of experience in web development and design, I
//                   specialize in creating immersive digital experiences that combine
//                   stunning visuals with seamless functionality. My passion lies in
//                   pushing the boundaries of what&apos;s possible on the web.
//                 </p>

//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   I believe in the power of clean code, intuitive design, and
//                   innovative solutions. Every project is an opportunity to create
//                   something extraordinary that not only meets but exceeds
//                   expectations.
//                 </p>
//               </div>

//               {/* STATS */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
//                   <div className="text-3xl font-bold text-purple-600 mb-2">
//                     50+
//                   </div>
//                   <div className="text-gray-700 font-medium">
//                     Projects Completed
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">
//                     25+
//                   </div>
//                   <div className="text-gray-700 font-medium">
//                     Happy Clients
//                   </div>
//                 </div>
//               </div>

//               {/* WORKSPACE */}
//               <div className="bg-gray-50 p-8 rounded-2xl">
//                 <h4 className="text-xl font-bold text-gray-900 mb-4">
//                   My Workspace
//                 </h4>

//                 <img
//                   src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/about/about-workspace-a13f78c4508e4f3082a9f98ff8c21755.png"
//                   alt="Developer workspace"
//                   className="w-full rounded-xl object-cover shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= EDUCATION SECTION ================= */}
//       <section
//         id="education"
//         className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
//       >
//         {/* Background Blobs */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Education &amp;{" "}
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Learning
//               </span>
//             </h2>

//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Continuous learning and growth through formal education and professional
//               development
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-start">

//             {/* LEFT : EDUCATION TIMELINE */}
//             <div>
//               <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                   Educational Timeline
//                 </h3>

//                 <div className="relative">
//                   {/* Vertical Line */}
//                   <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

//                   <div className="space-y-8">

//                     {/* ITEM 1 */}
//                     <div className="relative flex items-start gap-6">
//                       <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center relative z-10">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>

//                       <div>
//                         <div className="text-sm text-purple-600 font-medium">
//                           2020 - 2024
//                         </div>
//                         <h4 className="text-xl font-bold text-gray-900">
//                           Bachelor&apos;s in Computer Science
//                         </h4>
//                         <p className="text-gray-600">
//                           University of Technology
//                         </p>
//                         <p className="text-sm text-gray-500 mt-2">
//                           Specialized in Software Engineering and AI
//                         </p>
//                       </div>
//                     </div>

//                     {/* ITEM 2 */}
//                     <div className="relative flex items-start gap-6">
//                       <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>

//                       <div>
//                         <div className="text-sm text-blue-600 font-medium">
//                           2023
//                         </div>
//                         <h4 className="text-xl font-bold text-gray-900">
//                           Full Stack Development
//                         </h4>
//                         <p className="text-gray-600">
//                           Tech Academy Bootcamp
//                         </p>
//                         <p className="text-sm text-gray-500 mt-2">
//                           Intensive 6-month program
//                         </p>
//                       </div>
//                     </div>

//                     {/* ITEM 3 */}
//                     <div className="relative flex items-start gap-6">
//                       <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center relative z-10">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>

//                       <div>
//                         <div className="text-sm text-green-600 font-medium">
//                           2022
//                         </div>
//                         <h4 className="text-xl font-bold text-gray-900">
//                           UI/UX Design Certification
//                         </h4>
//                         <p className="text-gray-600">
//                           Design Institute
//                         </p>
//                         <p className="text-sm text-gray-500 mt-2">
//                           Advanced design principles and user research
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>

//                 {/* Timeline Image */}
//                 <div className="mt-8">
//                   <img
//                     src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/education/education-timeline-d6be18972975463f9980ea4c4afdc0ea.png"
//                     alt="Educational timeline"
//                     className="w-full rounded-xl object-cover shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT : CERTIFICATIONS */}
//             <div className="space-y-8">

//               <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                   Certifications &amp; Achievements
//                 </h3>

//                 <div className="space-y-6">

//                   {/* CERT 1 */}
//                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
//                     <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
//                       ★
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">
//                         AWS Certified Developer
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Amazon Web Services
//                       </p>
//                     </div>
//                   </div>

//                   {/* CERT 2 */}
//                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
//                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
//                       ★
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">
//                         Google Cloud Professional
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Google Cloud Platform
//                       </p>
//                     </div>
//                   </div>

//                   {/* CERT 3 */}
//                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
//                     <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
//                       ★
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">
//                         React Advanced Certification
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Meta (Facebook)
//                       </p>
//                     </div>
//                   </div>

//                 </div>

//                 {/* Certificates Image */}
//                 <div className="mt-8">
//                   <img
//                     src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/education/education-certificates-2712b73397db453587f512592523902d.png"
//                     alt="Certificates and achievements"
//                     className="w-full rounded-xl object-cover shadow-lg"
//                   />
//                 </div>
//               </div>

//               {/* CONTINUOUS LEARNING */}
//               <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
//                 <h3 className="text-2xl font-bold mb-4">
//                   Continuous Learning
//                 </h3>

//                 <p className="text-purple-100 mb-6">
//                   I believe in lifelong learning and staying updated with the latest
//                   technologies and industry trends.
//                 </p>

//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div>
//                     <div className="text-3xl font-bold">15+</div>
//                     <div className="text-sm text-purple-200">
//                       Online Courses
//                     </div>
//                   </div>

//                   <div>
//                     <div className="text-3xl font-bold">8</div>
//                     <div className="text-sm text-purple-200">
//                       Certifications
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= SKILLS SECTION ================= */}
//       <section
//         id="skills"
//         className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%23000000 fill-opacity=%220.02%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Skills &amp;{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Expertise
//               </span>
//             </h2>

//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A comprehensive overview of my technical skills and proficiency levels
//               across various technologies
//             </p>
//           </div>

//           {/* SKILLS GRID */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//             {/* FRONTEND */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Frontend Development
//               </h3>

//               <SkillBar title="React.js" percent="95%" width="95%" color="from-blue-500 to-blue-600" />
//               <SkillBar title="JavaScript / TypeScript" percent="90%" width="90%" color="from-green-500 to-green-600" />
//               <SkillBar title="HTML5 / CSS3" percent="98%" width="98%" color="from-purple-500 to-purple-600" />
//               <SkillBar title="Tailwind CSS" percent="92%" width="92%" color="from-cyan-500 to-cyan-600" />
//             </div>

//             {/* BACKEND & TOOLS */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Backend &amp; Tools
//               </h3>

//               <SkillBar title="Node.js" percent="88%" width="88%" color="from-green-500 to-green-600" />
//               <SkillBar title="MongoDB" percent="85%" width="85%" color="from-emerald-500 to-emerald-600" />
//               <SkillBar title="Git / GitHub" percent="93%" width="93%" color="from-orange-500 to-orange-600" />
//               <SkillBar title="AWS / Docker" percent="80%" width="80%" color="from-blue-500 to-blue-600" />
//             </div>

//             {/* DESIGN & OTHERS */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Design &amp; Others
//               </h3>

//               <SkillBar title="UI / UX Design" percent="87%" width="87%" color="from-pink-500 to-pink-600" />
//               <SkillBar title="Figma" percent="90%" width="90%" color="from-indigo-500 to-indigo-600" />
//               <SkillBar title="Python" percent="82%" width="82%" color="from-yellow-500 to-yellow-600" />
//               <SkillBar title="Adobe Creative Suite" percent="78%" width="78%" color="from-red-500 to-red-600" />
//             </div>

//           </div>

//           {/* BOTTOM NOTE */}
//           <div className="mt-16 text-center">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//               <h3 className="text-2xl font-bold mb-4">
//                 Always Learning &amp; Growing
//               </h3>
//               <p className="text-lg opacity-90">
//                 Continuously expanding my skill set with the latest technologies and
//                 industry best practices to deliver cutting-edge solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= PROJECTS SECTION ================= */}
//       <section
//         id="projects"
//         className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">

//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Featured{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Projects
//               </span>
//             </h2>

//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore my latest work showcasing innovative solutions and cutting-edge
//               technologies
//             </p>
//           </div>

//           {/* PROJECT GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//             {/* PROJECT 1 */}
//             <ProjectCard
//               image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-1-ec07c34233e041ce8e7a759844c27dcd.png"
//               title="E-Commerce Platform"
//               tags={["React", "Node.js"]}
//               description="A full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and responsive design optimized for all devices."
//               rating="4.9"
//               year="2023"
//             />

//             {/* PROJECT 2 */}
//             <ProjectCard
//               image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-2-35a4a61661314ce6a916071910a38eec.png"
//               title="AI Task Manager"
//               tags={["AI/ML", "Python"]}
//               description="An intelligent task management system powered by machine learning algorithms that automatically prioritizes tasks, predicts completion times, and optimizes workflow efficiency."
//               rating="4.8"
//               year="2023"
//             />

//             {/* PROJECT 3 */}
//             <ProjectCard
//               image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-3-fc0ac4b372c64a3eb3078c369dfa3543.png"
//               title="Real-time Chat App"
//               tags={["Socket.io", "Express"]}
//               description="A feature-rich real-time messaging application with end-to-end encryption, file sharing, video calls, and group chat functionality built with modern web technologies."
//               rating="4.7"
//               year="2023"
//             />

//             {/* PROJECT 4 */}
//             <ProjectCard
//               image="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/projects/project-4-412c6202801f41d6a3d7d5ab03c3c879.png"
//               title="Crypto Trading Platform"
//               tags={["Blockchain", "Vue.js"]}
//               description="A comprehensive cryptocurrency trading platform with real-time market data, advanced charting tools, portfolio management, and secure wallet integration for seamless trading experience."
//               rating="4.6"
//               year="2023"
//             />

//           </div>

//           {/* VIEW ALL BUTTON */}
//           <div className="mt-16 text-center">
//             <a
//               href="#"
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all shadow-lg"
//             >
//               View All Projects →
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* ================= ACHIEVEMENTS SECTION ================= */}
//       <section
//         id="achievements"
//         className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">

//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Achievements &amp;{" "}
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Recognition
//               </span>
//             </h2>

//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Celebrating milestones and accomplishments that define my professional journey
//             </p>
//           </div>

//           {/* STATS GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

//             <AchievementStat value="50+" label="Projects Completed" desc="Successfully delivered" color="text-purple-400" />

//             <AchievementStat value="25+" label="Happy Clients" desc="Satisfied customers" color="text-pink-400" />

//             <AchievementStat value="3+" label="Years Experience" desc="In development" color="text-blue-400" />

//             <AchievementStat value="15+" label="Technologies" desc="Mastered skills" color="text-green-400" />

//           </div>

//           {/* AWARDS GRID */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//             {/* LEFT AWARDS */}
//             <div className="space-y-8">

//               {/* Award 1 */}
//               <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
//                     ★
//                   </div>
//                   <h3 className="text-xl font-bold text-white">
//                     Best Developer Award 2023
//                   </h3>
//                 </div>

//                 <p className="text-gray-300">
//                   Recognized for outstanding contribution to innovative web development
//                   projects and exceptional problem-solving skills.
//                 </p>
//               </div>

//               {/* Award 2 */}
//               <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
//                     ✔
//                   </div>
//                   <h3 className="text-xl font-bold text-white">
//                     Certified Full-Stack Developer
//                   </h3>
//                 </div>

//                 <p className="text-gray-300">
//                   Completed comprehensive certification program covering modern web
//                   technologies, databases, and deployment strategies.
//                 </p>
//               </div>

//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="flex justify-center">
//               <img
//                 src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/achievements/achievements-awards-4cf5fcb1ef1c4b74aaa27883077356d6.png"
//                 alt="Achievements and awards"
//                 className="w-full max-w-lg rounded-2xl object-cover shadow-2xl border border-white/20"
//               />
//             </div>

//           </div>
//         </div>
//       </section>

      
//       {/* ================= CONTACT SECTION ================= */}
//       <section
//         id="contact"
//         className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
//       >
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">

//             {/* Heading */}
//             <div className="text-center mb-16">
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Let&apos;s{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Connect
//                 </span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Ready to bring your next project to life? I&apos;m always excited to discuss
//                 new opportunities and collaborate on innovative solutions.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-16 items-start">

//               {/* LEFT SIDE */}
//               <div className="space-y-8">

//                 {/* CONTACT INFO CARD */}
//                 <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                     Get In Touch
//                   </h3>

//                   <div className="space-y-6">

//                     {/* Email */}
//                     <ContactItem
//                       bg="bg-blue-50"
//                       iconBg="bg-blue-600"
//                       title="Email"
//                       value="hello@yourportfolio.com"
//                     />

//                     {/* Phone */}
//                     <ContactItem
//                       bg="bg-green-50"
//                       iconBg="bg-green-600"
//                       title="Phone"
//                       value="+1 (555) 123-4567"
//                     />

//                     {/* Location */}
//                     <ContactItem
//                       bg="bg-purple-50"
//                       iconBg="bg-purple-600"
//                       title="Location"
//                       value="San Francisco, CA"
//                     />
//                   </div>
//                 </div>

//                 {/* SOCIAL ICONS */}
//                 <div className="flex space-x-4">
//                   <SocialButton />
//                   <SocialButton dark />
//                   <SocialButton twitter />
//                 </div>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="space-y-8">

//                 {/* IMAGE */}
//                 <img
//                   src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/contact/contact-illustration-4e363e91ea0a4be0a098a831064be11d.png"
//                   alt="Contact illustration"
//                   className="w-full rounded-2xl object-cover shadow-sm"
//                 />

//                 {/* CONTACT FORM */}
//                 <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                     Send a Message
//                   </h3>

//                   <form className="space-y-6">

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <Input label="Full Name" placeholder="Your name" />
//                       <Input label="Email Address" placeholder="your@email.com" />
//                     </div>

//                     <Input label="Subject" placeholder="Project inquiry" />

//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Message
//                       </label>
//                       <textarea
//                         rows="5"
//                         className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                         placeholder="Tell me about your project..."
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
//                     >
//                       Send Message
//                     </button>

//                   </form>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA SECTION ================= */}
//       <section
//         id="cta"
//         className="relative py-24 overflow-hidden"
//       >
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/cta/cta-background-23b259caeb6c47a8aa46450ea54b4f7f.png"
//             alt="CTA background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90"></div>

//         <div className="relative z-10 container mx-auto px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">

//             {/* Heading */}
//             <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Ready to Build Something{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Amazing?
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12">
//               Let&apos;s collaborate and turn your vision into reality. I&apos;m passionate
//               about creating exceptional digital experiences that make a difference.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14">
//               <a
//                 href="#contact"
//                 className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
//               >
//                 <span>Start Your Project</span>
//                 <span className="group-hover:translate-x-1 transition-transform duration-300">
//                   →
//                 </span>
//               </a>

//               <a
//                 href="#projects"
//                 className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
//               >
//                 <span>View My Work</span>
//                 <span className="group-hover:scale-110 transition-transform duration-300">
//                   👁
//                 </span>
//               </a>
//             </div>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//               {/* Fast Delivery */}
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
//                   ⚡
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   Fast Delivery
//                 </h3>
//                 <p className="text-blue-200">
//                   Quick turnaround without compromising quality
//                 </p>
//               </div>

//               {/* Quality Assured */}
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
//                   ✔
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   Quality Assured
//                 </h3>
//                 <p className="text-blue-200">
//                   Pixel-perfect designs and clean code
//                 </p>
//               </div>

//               {/* Support */}
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
//                   👥
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   24/7 Support
//                 </h3>
//                 <p className="text-blue-200">
//                   Ongoing support and maintenance
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// }

// function SkillBar({ title, percent, width, color }) {
//   return (
//     <div className="mb-5">
//       <div className="flex justify-between items-center mb-2">
//         <span className="font-semibold text-gray-700">{title}</span>
//         <span className="font-bold text-gray-600">{percent}</span>
//       </div>

//       <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//         <div
//           className={`h-full rounded-full bg-gradient-to-r ${color}`}
//           style={{ width }}
//         ></div>
//       </div>
//     </div>
//   );
// }
// function ProjectCard({ image, title, tags, description, rating, year }) {
//   return (
//     <div className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">

//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
//       </div>

//       {/* Content */}
//       <div className="p-8">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-2xl font-bold text-white">
//             {title}
//           </h3>

//           <div className="flex gap-2">
//             {tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         <p className="text-gray-300 mb-6 leading-relaxed">
//           {description}
//         </p>

//         <div className="flex items-center gap-3 text-sm text-gray-400">
//           <span>⭐ {rating}</span>
//           <span>•</span>
//           <span>{year}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
// function AchievementStat({ value, label, desc, color }) {
//   return (
//     <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition transform hover:scale-105">
//       <div className={`text-4xl font-bold mb-2 ${color}`}>
//         {value}
//       </div>
//       <div className="text-white font-semibold mb-2">
//         {label}
//       </div>
//       <div className="text-gray-300 text-sm">
//         {desc}
//       </div>
//     </div>
//   );
// }
// function ContactItem({ bg, iconBg, title, value }) {
//   return (
//     <div className={`flex items-center space-x-4 p-4 ${bg} rounded-2xl`}>
//       <div className={`w-12 h-12 ${iconBg} rounded-xl`} />
//       <div>
//         <p className="font-semibold text-gray-900">{title}</p>
//         <p className="text-gray-600">{value}</p>
//       </div>
//     </div>
//   );
// }

// function Input({ label, placeholder }) {
//   return (
//     <div>
//       <label className="block text-sm font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       <input
//         className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         placeholder={placeholder}
//       />
//     </div>
//   );
// }

// function SocialButton({ dark, twitter }) {
//   let bg = "bg-blue-600 hover:bg-blue-700";
//   if (dark) bg = "bg-gray-900 hover:bg-gray-800";
//   if (twitter) bg = "bg-blue-400 hover:bg-blue-500";

//   return (
//     <a
//       href="#"
//       className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center transition transform hover:scale-110`}
//     />
//   );
// }
