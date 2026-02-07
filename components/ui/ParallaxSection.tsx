"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ParallaxSectionProps {
    backgroundImage?: string;
    videoSrc?: string;
    height?: string;
    overlay?: boolean;
    children: ReactNode;
}

export default function ParallaxSection({
    backgroundImage,
    videoSrc,
    height = "100vh",
    overlay = true,
    children,
}: ParallaxSectionProps) {
    return (
        <section
            className={clsx(
                "relative w-full overflow-hidden flex items-center justify-center"
            )}
            style={{
                minHeight: height,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: backgroundImage ? "fixed" : undefined,
            }}
        >
            {/* VIDEO BACKGROUND */}
            {videoSrc && (
                <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[150%] h-full object-cover "
                />
            )}

            {/* OVERLAY */}
            {overlay && (
                <div className="absolute inset-0 bg-black/40 z-[1]" />
            )}

            {/* CONTENT */}
            <div className="relative z-[2] w-full">
                {children}
            </div>
        </section>
    );
}


// New UI
// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, ChevronDown, Star, Send, Linkedin, Github, Dribbble, Mail } from 'lucide-react';

// const Portfolio = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isDark, setIsDark] = useState(true);
//     const [activeService, setActiveService] = useState(null);
//     const [activeFaq, setActiveFaq] = useState(null);
//     const [counters, setCounters] = useState({ projects: 0, experience: 0, certificates: 0 });
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//     const counterRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasAnimated) {
//                         animateCounters();
//                         setHasAnimated(true);
//                     }
//                 });
//             },
//             { threshold: 0.5 }
//         );

//         if (counterRef.current) {
//             observer.observe(counterRef.current);
//         }

//         return () => observer.disconnect();
//     }, [hasAnimated]);

//     const animateCounters = () => {
//         const duration = 2000;
//         const targets = { projects: 150, experience: 8, certificates: 25 };
//         const steps = 60;
//         const interval = duration / steps;

//         let step = 0;
//         const timer = setInterval(() => {
//             step++;
//             const progress = step / steps;
//             const easeProgress = 1 - Math.pow(1 - progress, 3);

//             setCounters({
//                 projects: Math.floor(targets.projects * easeProgress),
//                 experience: Math.floor(targets.experience * easeProgress),
//                 certificates: Math.floor(targets.certificates * easeProgress)
//             });

//             if (step >= steps) {
//                 clearInterval(timer);
//                 setCounters(targets);
//             }
//         }, interval);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Message sent! (Demo only)');
//         setFormData({ name: '', email: '', message: '' });
//     };

//     const services = [
//         {
//             title: "UI/UX Design",
//             items: ["Wireframing and prototyping", "UI design for web and mobile apps", "Usability testing and feedback analysis", "Interaction design and micro-animations"]
//         },
//         {
//             title: "Graphic Design",
//             items: ["Logo and brand identity", "Social media graphics", "Infographics and data visualization", "Custom illustrations and icons"]
//         },
//         {
//             title: "Web Design",
//             items: ["Responsive website design", "Landing page optimization", "Webflow development", "Maintenance and updates"]
//         },
//         {
//             title: "Branding",
//             items: ["Strategic brand systems", "Visual language definition", "Consistency guidelines", "Brand voice and messaging"]
//         }
//     ];

//     const projects = [
//         {
//             title: "SUMMER VIBES FESTIVAL CAMPAIGN",
//             category: "Branding",
//             description: "Complete visual identity for a music festival experience",
//             gradient: "from-purple-600 via-pink-600 to-blue-600"
//         },
//         {
//             title: "GORAL SPINAL ABSTRACT",
//             category: "Visual Design",
//             description: "Abstract art exploration with dynamic forms",
//             gradient: "from-red-600 via-orange-600 to-yellow-600"
//         },
//         {
//             title: "SHOWCASE ROBINSON SPRING",
//             category: "UI Design",
//             description: "E-commerce platform for spring collection",
//             gradient: "from-cyan-600 via-blue-600 to-indigo-600"
//         },
//         {
//             title: "BLACK GEOMETRIC PRISMS",
//             category: "3D Design",
//             description: "Minimalist geometric composition study",
//             gradient: "from-gray-700 via-gray-800 to-black"
//         }
//     ];

//     const testimonials = [
//         {
//             name: "Sarah Johnson",
//             role: "CEO, TechStart",
//             text: "Exceptional work! The design perfectly captured our vision and exceeded expectations.",
//             rating: 5,
//             featured: false
//         },
//         {
//             name: "Michael Chen",
//             role: "Product Manager, Innovate Co",
//             text: "Working together was seamless. The attention to detail and creative approach made all the difference.",
//             rating: 5,
//             featured: true
//         },
//         {
//             name: "Emma Davis",
//             role: "Founder, Creative Studio",
//             text: "Outstanding portfolio work. Professional, creative, and delivered on time every time.",
//             rating: 5,
//             featured: false
//         }
//     ];

//     const faqs = [
//         {
//             q: "What is your design process?",
//             a: "My process includes discovery, research, wireframing, design, prototyping, testing, and final delivery with full documentation."
//         },
//         {
//             q: "How long does a typical project take?",
//             a: "Projects typically range from 2-8 weeks depending on scope and complexity. I provide detailed timelines during our initial consultation."
//         },
//         {
//             q: "What are your pricing options?",
//             a: "I offer flexible pricing based on project scope - from fixed-price packages to hourly rates for ongoing work. Let's discuss your specific needs."
//         },
//         {
//             q: "Do you work with international clients?",
//             a: "Absolutely! I work with clients globally and am comfortable with remote collaboration across different time zones."
//         }
//     ];

//     const themeColors = isDark ? {
//         bg: 'bg-zinc-950',
//         cardBg: 'bg-zinc-900',
//         text: 'text-white',
//         textSecondary: 'text-zinc-400',
//         accent: 'bg-lime-400',
//         accentText: 'text-lime-400',
//         border: 'border-zinc-800'
//     } : {
//         bg: 'bg-zinc-50',
//         cardBg: 'bg-white',
//         text: 'text-zinc-900',
//         textSecondary: 'text-zinc-600',
//         accent: 'bg-lime-500',
//         accentText: 'text-lime-600',
//         border: 'border-zinc-200'
//     };

//     return (
//         <div className={`min-h-screen ${themeColors.bg} ${themeColors.text} transition-colors duration-500`}>
//             {/* Navigation */}
//             <nav className={`fixed top-0 w-full ${themeColors.cardBg} bg-opacity-80 backdrop-blur-md z-50 transition-colors duration-500`}>
//                 <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//                     <div className="text-xl font-bold">Portfolio</div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex gap-8">
//                         {['Home', 'Work', 'About', 'Insights', 'Contact'].map((item) => (
//                             <a
//                                 key={item}
//                                 href={`#${item.toLowerCase()}`}
//                                 className={`${themeColors.text} hover:${themeColors.accentText} transition-all duration-300 relative group`}
//                             >
//                                 {item}
//                                 <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${themeColors.accent} group-hover:w-full group-hover:left-0 transition-all duration-300`}></span>
//                             </a>
//                         ))}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//                         {menuOpen ? <X /> : <Menu />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 {menuOpen && (
//                     <div className={`md:hidden ${themeColors.cardBg} border-t ${themeColors.border}`}>
//                         {['Home', 'Work', 'About', 'Insights', 'Contact'].map((item, i) => (
//                             <a
//                                 key={item}
//                                 href={`#${item.toLowerCase()}`}
//                                 className={`block px-6 py-4 ${themeColors.text} hover:${themeColors.accentText} transition-all`}
//                                 style={{ animation: `slideDown 0.3s ease-out ${i * 0.1}s both` }}
//                                 onClick={() => setMenuOpen(false)}
//                             >
//                                 {item}
//                             </a>
//                         ))}
//                     </div>
//                 )}
//             </nav>

//             {/* Theme Toggle */}
//             <button
//                 onClick={() => setIsDark(!isDark)}
//                 className={`fixed bottom-8 left-1/2 -translate-x-1/2 ${themeColors.cardBg} px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-3 hover:scale-105 transition-all duration-300 border ${themeColors.border}`}
//             >
//                 <div className={`w-12 h-6 ${themeColors.accent} rounded-full relative transition-all duration-300`}>
//                     <div className={`absolute top-1 ${isDark ? 'right-1' : 'left-1'} w-4 h-4 bg-white rounded-full transition-all duration-300`}></div>
//                 </div>
//                 <span className="text-sm font-medium">{isDark ? 'Dark' : 'Light'}</span>
//             </button>

//             {/* Hero Section */}
//             <section className="pt-32 pb-20 px-6" id="home">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <div className={`text-sm ${themeColors.textSecondary} uppercase tracking-wider`}>
//                                 HEY! I AM COHEN
//                             </div>
//                             <h1 className="text-6xl md:text-7xl font-bold leading-tight">
//                                 DIGITAL<br />DESIGNER
//                             </h1>
//                             <p className={`text-lg ${themeColors.textSecondary} max-w-md`}>
//                                 Crafting exceptional digital experiences that blend creativity with strategic thinking. Lets bring your vision to life.
//                             </p>
//                             <div className="flex gap-4 pt-4">
//                                 <button className={`${themeColors.accent} text-zinc-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300`}>
//                                     View My Work
//                                 </button>
//                                 <button className={`border-2 ${themeColors.border} px-8 py-4 rounded-full font-semibold hover:${themeColors.accentText} transition-colors duration-300`}>
//                                     Get in Touch
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="relative">
//                             <div className={`${themeColors.cardBg} rounded-3xl p-8 shadow-2xl relative overflow-hidden group`}
//                                 style={{ animation: 'flipIn 1s ease-out' }}>
//                                 <div className="aspect-square bg-zinc-700 rounded-2xl overflow-hidden">
//                                     <div className="w-full h-full bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center text-6xl font-bold opacity-50">
//                                         PHOTO
//                                     </div>
//                                 </div>

//                                 {/* Floating badges */}
//                                 <div className={`absolute top-4 right-4 ${themeColors.accent} text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold`}
//                                     style={{ animation: 'float 3s ease-in-out infinite' }}>
//                                     Available
//                                 </div>
//                                 <div className={`absolute bottom-4 left-4 ${themeColors.cardBg} px-4 py-2 rounded-full text-sm border ${themeColors.border}`}
//                                     style={{ animation: 'float 3s ease-in-out 1s infinite' }}>
//                                     8+ Years
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* What I Can Do */}
//             <section className="py-20 px-6" id="services">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-4">WHAT I CAN DO FOR YOU</h2>
//                     <p className={`${themeColors.textSecondary} mb-12 text-lg`}>
//                         As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
//                     </p>

//                     <div className="space-y-4">
//                         {services.map((service, i) => (
//                             <div
//                                 key={i}
//                                 className={`${themeColors.cardBg} rounded-2xl overflow-hidden border ${themeColors.border} transition-all duration-300`}
//                             >
//                                 <button
//                                     onClick={() => setActiveService(activeService === i ? null : i)}
//                                     className="w-full px-6 py-5 flex justify-between items-center hover:bg-opacity-80 transition-all"
//                                 >
//                                     <span className="text-xl font-semibold">{service.title}</span>
//                                     <ChevronDown
//                                         className={`transition-transform duration-300 ${activeService === i ? 'rotate-180' : ''}`}
//                                     />
//                                 </button>

//                                 <div
//                                     className={`transition-all duration-500 ease-in-out overflow-hidden ${activeService === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                                         }`}
//                                 >
//                                     <div className="px-6 pb-6 space-y-2">
//                                         {service.items.map((item, j) => (
//                                             <div
//                                                 key={j}
//                                                 className={`${themeColors.textSecondary} flex items-start gap-2`}
//                                                 style={{ animation: activeService === i ? `fadeSlideIn 0.3s ease-out ${j * 0.1}s both` : 'none' }}
//                                             >
//                                                 <span className={`${themeColors.accentText} mt-1`}>•</span>
//                                                 <span>{item}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* About Me */}
//             <section className="py-20 px-6" id="about">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-8">ABOUT ME</h2>
//                     <p className={`${themeColors.textSecondary} text-lg mb-12 leading-relaxed`}>
//                         I am a passionate digital designer with over 8 years of experience creating meaningful digital experiences.
//                         My approach combines strategic thinking with creative execution, ensuring every project not only looks
//                         beautiful but delivers real results for businesses and their users.
//                     </p>

//                     <div ref={counterRef} className="grid grid-cols-3 gap-8 mb-12">
//                         <div className={`${themeColors.cardBg} rounded-2xl p-6 text-center border ${themeColors.border}`}>
//                             <div className={`text-5xl font-bold ${themeColors.accentText} mb-2`}>{counters.projects}+</div>
//                             <div className={themeColors.textSecondary}>Projects</div>
//                         </div>
//                         <div className={`${themeColors.cardBg} rounded-2xl p-6 text-center border ${themeColors.border}`}>
//                             <div className={`text-5xl font-bold ${themeColors.accentText} mb-2`}>{counters.experience}+</div>
//                             <div className={themeColors.textSecondary}>Years Experience</div>
//                         </div>
//                         <div className={`${themeColors.cardBg} rounded-2xl p-6 text-center border ${themeColors.border}`}>
//                             <div className={`text-5xl font-bold ${themeColors.accentText} mb-2`}>{counters.certificates}+</div>
//                             <div className={themeColors.textSecondary}>Certificates</div>
//                         </div>
//                     </div>

//                     <div className="flex gap-4 justify-center">
//                         {[Linkedin, Github, Dribbble, Mail].map((Icon, i) => (
//                             <a
//                                 key={i}
//                                 href="#"
//                                 className={`${themeColors.cardBg} p-4 rounded-full hover:${themeColors.accentText} transition-all hover:scale-110 border ${themeColors.border}`}
//                             >
//                                 <Icon size={24} />
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Featured Projects */}
//             <section className="py-20 px-6" id="work">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4">FEATURED PROJECTS</h2>
//                         <p className={themeColors.textSecondary}>
//                             A curated selection of my recent work showcasing diverse design solutions
//                         </p>
//                     </div>

//                     <div className="space-y-8">
//                         {projects.map((project, i) => (
//                             <div
//                                 key={i}
//                                 className={`${themeColors.cardBg} rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 border ${themeColors.border} hover:shadow-2xl`}
//                                 style={{ animation: `fadeUp 0.6s ease-out ${i * 0.2}s both` }}
//                             >
//                                 <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <h3 className="text-3xl md:text-4xl font-bold text-center px-8 text-white">{project.title}</h3>
//                                     </div>
//                                     <div className={`absolute top-4 right-4 ${themeColors.accent} text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold`}>
//                                         {project.category}
//                                     </div>
//                                 </div>
//                                 <div className="p-8">
//                                     <p className={themeColors.textSecondary}>{project.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-12">
//                         <button className={`${themeColors.accent} text-zinc-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform`}>
//                             VIEW ALL PROJECTS
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-20 px-6">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-12">WHAT MY CLIENTS SAY</h2>

//                     <div className="grid md:grid-cols-3 gap-6">
//                         {testimonials.map((testimonial, i) => (
//                             <div
//                                 key={i}
//                                 className={`${themeColors.cardBg} rounded-2xl p-8 border ${testimonial.featured ? `${themeColors.accentText} border-2` : themeColors.border
//                                     } hover:scale-105 transition-all duration-300`}
//                             >
//                                 <div className="flex gap-1 mb-4">
//                                     {[...Array(testimonial.rating)].map((_, j) => (
//                                         <Star key={j} size={20} fill="currentColor" className={themeColors.accentText} />
//                                     ))}
//                                 </div>
//                                 <p className={`${themeColors.textSecondary} mb-6 italic`}>{testimonial.text}</p>
//                                 <div>
//                                     <div className="font-semibold">{testimonial.name}</div>
//                                     <div className={`text-sm ${themeColors.textSecondary}`}>{testimonial.role}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* FAQ */}
//             <section className="py-20 px-6" id="insights">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-12">FREQUENTLY ASKED QUESTIONS</h2>

//                     <div className="space-y-4">
//                         {faqs.map((faq, i) => (
//                             <div
//                                 key={i}
//                                 className={`${themeColors.cardBg} rounded-2xl overflow-hidden border ${themeColors.border}`}
//                             >
//                                 <button
//                                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
//                                     className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-opacity-80 transition-all"
//                                 >
//                                     <span className="font-semibold text-lg">{faq.q}</span>
//                                     <ChevronDown
//                                         className={`transition-transform duration-300 flex-shrink-0 ml-4 ${activeFaq === i ? 'rotate-180' : ''}`}
//                                     />
//                                 </button>

//                                 <div
//                                     className={`transition-all duration-500 ease-in-out overflow-hidden ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                                         }`}
//                                 >
//                                     <div className={`px-6 pb-6 ${themeColors.textSecondary}`}>
//                                         {faq.a}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Contact */}
//             <section className="py-20 px-6" id="contact">
//                 <div className="max-w-4xl mx-auto">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-4xl md:text-5xl font-bold mb-6">LETS WORK TOGETHER</h2>
//                             <p className={`${themeColors.textSecondary} text-lg mb-8`}>
//                                 Have a project in mind? Id love to hear about it. Drop me a message and letys create something amazing together.
//                             </p>

//                             <div className={`${themeColors.cardBg} rounded-3xl p-2 border ${themeColors.border} inline-flex items-center gap-2 mb-8`}
//                                 style={{ animation: 'breathe 2s ease-in-out infinite' }}>
//                                 <div className={`${themeColors.accent} w-12 h-12 rounded-full flex items-center justify-center font-bold text-zinc-900`}>
//                                     Hi
//                                 </div>
//                                 <span className="pr-4">Ready to chat!</span>
//                             </div>
//                         </div>

//                         <div className={`${themeColors.cardBg} rounded-3xl p-8 border ${themeColors.border}`}>
//                             <div className="space-y-6">
//                                 <div>
//                                     <input
//                                         type="text"
//                                         placeholder="Your Name"
//                                         value={formData.name}
//                                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                         className={`w-full ${themeColors.bg} border ${themeColors.border} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all`}
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         type="email"
//                                         placeholder="Your Email"
//                                         value={formData.email}
//                                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                         className={`w-full ${themeColors.bg} border ${themeColors.border} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all`}
//                                     />
//                                 </div>
//                                 <div>
//                                     <textarea
//                                         placeholder="Your Message"
//                                         rows={5}
//                                         value={formData.message}
//                                         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                         className={`w-full ${themeColors.bg} border ${themeColors.border} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all resize-none`}
//                                     ></textarea>
//                                 </div>
//                                 <button
//                                     onClick={handleSubmit}
//                                     className={`w-full ${themeColors.accent} text-zinc-900 py-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2`}
//                                 >
//                                     <Send size={20} />
//                                     Send Message
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className={`border-t ${themeColors.border} py-12 px-6`}>
//                 <div className="max-w-7xl mx-auto">
//                     <div className={`h-1 ${themeColors.accent} w-32 mb-8`}></div>
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//                         <div className={themeColors.textSecondary}>
//                             © 2026 Digital Designer Portfolio. All rights reserved.
//                         </div>
//                         <div className="flex gap-6">
//                             {[Linkedin, Github, Dribbble, Mail].map((Icon, i) => (
//                                 <a
//                                     key={i}
//                                     href="#"
//                                     className={`${themeColors.textSecondary} hover:${themeColors.accentText} transition-colors`}
//                                 >
//                                     <Icon size={20} />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//             <style>{`
//         @keyframes flipIn {
//           0% {
//             transform: perspective(400px) rotateY(90deg);
//             opacity: 0;
//           }
//           100% {
//             transform: perspective(400px) rotateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeSlideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes breathe {
//           0%, 100% {
//             transform: scale(1);
//             box-shadow: 0 0 0 0 rgba(163, 230, 53, 0.4);
//           }
//           50% {
//             transform: scale(1.05);
//             box-shadow: 0 0 20px 10px rgba(163, 230, 53, 0.2);
//           }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default Portfolio;