'use client';

import { useState, useEffect } from "react";
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Code2, Terminal, Layers, FolderOpen, Server } from "lucide-react";

/* The basic building blocks for the projects section */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px)" }} />
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
        <div className="flex items-center justify-between px-4 py-2 md:px-5 md:py-3 border-b"
            style={{ borderColor: "var(--border)", background: "var(--window-header-bg)" }}>
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] truncate max-w-[130px] md:max-w-none" style={{ color: "var(--window-header-text)" }}>{filename}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[8px] md:text-[9px] border px-2 py-0.5 tracking-widest font-bold whitespace-nowrap" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* Theme Colors and Styling */
/* I added these colors here so the projects look good in both light and dark mode. */
const CSS_VARS = `
  :root {
    --bg: #010409;
    --surface: #0d1117;
    --bg-subtle: #090e16;
    --border: #1a2332;
    --border-dim: #111923;
    --accent: #39d353;
    --accent-blue: #00e5ff;
    --accent-amber: #f59e0b;
    --accent-purple: #a855f7;
    --accent-glow: rgba(57,211,83,0.12);
    --text-primary: #e6edf3;
    --text-muted: #8b949e;
    --text-dim: #30363d;
    --scanline-color: rgba(0,0,0,0.03);
  }
  .dark {
    --bg: #010409;
    --surface: #0d1117;
    --bg-subtle: #090e16;
    --border: #1a2332;
    --accent: #39d353;
    --accent-blue: #00e5ff;
    --accent-amber: #f59e0b;
    --accent-purple: #a855f7;
    --text-primary: #e6edf3;
    --text-muted: #8b949e;
  }
  .light {
    --bg: #f6f8fa;
    --surface: #ffffff;
    --bg-subtle: #eef1f5;
    --border: #d0d7de;
    --accent: #1a7f37;
    --accent-blue: #0969da;
    --accent-amber: #9a6700;
    --accent-purple: #7c3aed;
    --text-primary: #1f2328;
    --text-muted: #57606a;
    --text-dim: #8c959f;
  }
  .custom-scroll::-webkit-scrollbar { width: 4px; }
  .custom-scroll::-webkit-scrollbar-track { background: transparent; }
  .custom-scroll::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }
  @keyframes scan-h { 0% { top: 0%; } 100% { top: 100%; } }
  .animate-scan-h { animation: scan-h 2s linear infinite; }
`;

/* List of My Projects */
/* I picked these projects to show my work on real apps and my experiments with AI. */
const mainProjects = [
    {
        id: "PRJ_01",
        title: "Ghotul — Hospitality Platform",
        subtitle: "Full Stack Developer Intern · 12 Months · Remote",
        stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Firebase", "JWT", "Razorpay", "Nginx", "PM2"],
        description: "Architected and deployed a production-grade hospitality management platform on Hostinger VPS, replacing 100% of the client's manual reservation operations. Engineered a room booking system with real-time availability management and DB-level locking (PostgreSQL SELECT FOR UPDATE) to prevent race conditions. Built a staff portal with role-based access control — owner, manager, and staff roles with distinct interfaces and API-level authorization. Integrated Razorpay end-to-end: order creation → checkout → HMAC-SHA256 webhook signature verification → booking confirmation. Implemented JWT authentication with refresh token rotation, bcrypt password hashing, and httpOnly cookies to prevent XSS.",
        accentColor: "var(--accent)",
        tag: "PRODUCTION",
        github: "https://github.com/prayag29-sahu",
        live: "https://ghotulstays.com",
        image: "/images/09_Projects/03.png",
    },
    {
        id: "PRJ_02",
        title: "SJPM School + ERP System (School Management System)",
        subtitle: "Full Stack Developer Intern · 1 Months · Remote",
        stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Firebase", "Supabase", "Claudinary", "Vercel", "Railway"],
        description: "SJPM School ERP & Website is a full-stack school management platform featuring dynamic CMS website, admissions, students, staff, academics, attendance, fees, transport, examinations, reports, RBAC authentication, analytics, document management, and multilingual administration.",
        accentColor: "var(--accent-amber)",
        tag: "PRODUCTION",
        github: "https://github.com/prayag29-sahu",
        live: "https://www.sjpmschool.com/",
        image: "/images/09_Projects/01.png",
    },
    {
        id: "PRJ_03",
        title: "Developer Portfolio — V2",
        subtitle: "Personal Portfolio · React & Tailwind",
        stack: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
        description: "A visually immersive personal developer portfolio featuring parallax sections, animated skill trees, interactive project showcases, and a fully integrated email contact system using Nodemailer and EmailJS. Built with performance-first architecture and a focus on responsive design across all device breakpoints.",
        accentColor: "var(--accent-blue)",
        tag: "PORTFOLIO",
        github: "https://github.com/prayag29-sahu",
        live: "https://prayagsahu.vercel.app/",
        image: "/images/09_Projects/00.png",
    },
    {
        id: "PRJ_04",
        title: "Fake Info Detector",
        subtitle: "AI-Powered Verification Platform · College Minor Project",
        stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Firebase", "Supabase", "LLM", "HuggingFace", "OpenCV"],
        description: "A multi-modal AI-driven platform to detect misinformation across text, images, documents, and URLs. Built as a college team minor project, the system leverages LLMs, HuggingFace models, open-source Computer Vision pipelines, and multiple AI tools to analyze content authenticity and assign threat scores in real time.",
        accentColor: "var(--accent-amber)",
        tag: "AI / ML",
        github: "https://github.com/prayag29-sahu",
        live: "https://fakeinfodetectionvercel.vercel.app",
        image: "/images/09_Projects/05.png",
    },
    {
        id: "PRJ_05",
        title: "StockVault — Trading Engine",
        subtitle: "College Major Project · NASSCOM FutureSkills MERN Intern",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Finance API"],
        description: "A team-built MERN stack application for tracking and managing stock investments, developed under the NASSCOM FutureSkills internship program. Features sophisticated portfolio analytics, investment activity monitoring, real-time transaction simulations, and a role-based dashboard for managing assets and performance metrics.",
        accentColor: "var(--accent-purple)",
        tag: "FINTECH",
        github: "https://github.com/Pranjalpatel07/Stock-app",
        live: "https://sb-stock-app.vercel.app",
        image: "/images/09_Projects/07.png",
    },
    {
        id: "PRJ_06",
        title: "The Light Room",
        subtitle: "Professional Photographer Portfolio",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "Framer Motion"],
        description: "A premium MERN-based portfolio platform built for a professional photographer to showcase their work, connect with clients, and manage bookings. Features a curated gallery with Cloudinary image hosting, client inquiry forms, and a content management interface for the photographer to update portfolios and packages independently.",
        accentColor: "var(--accent)",
        tag: "PORTFOLIO",
        github: "https://github.com/prayag29-sahu",
        live: "https://psthelightroom.vercel.app/",
        image: "/images/09_Projects/08.png",
    },
    {
        id: "PRJ_07",
        title: "Shopsy — Garments E-Commerce",
        subtitle: "Full-Stack Fashion Retail Platform",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Admin Panel"],
        description: "A fully-featured garments e-commerce platform for selling clothing products online. Built on the MERN stack with complete user authentication, product catalog browsing, shopping cart management, order tracking, and a comprehensive admin panel for inventory, product listings, and order fulfillment management.",
        accentColor: "var(--accent-blue)",
        tag: "E-COMMERCE",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/09.png",
    },
    {
        id: "PRJ_08",
        title: "Sachin Men's Parlor",
        subtitle: "Barber Appointment Booking System",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Real-time Booking"],
        description: "A real-time appointment booking platform built for a local barbershop, enabling customers to check availability, select services, and book slots directly online. Includes an owner dashboard for managing daily schedules, walk-in queues, and appointment confirmations — eliminating phone-based coordination entirely.",
        accentColor: "var(--accent-amber)",
        tag: "BUSINESS",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/10.png",
    },
    {
        id: "PRJ_09",
        title: "P.S. Shivay",
        subtitle: "First Web Project · HTML & CSS",
        stack: ["HTML5", "CSS3"],
        description: "My web development project, built in the first year of engineering using pure HTML and CSS. A dedicated showcase of Lord Shiva's stories, sacred temples, and spiritual locations — marking the beginning of my development journey and foundational mastery of semantic HTML structure, CSS layouts, and responsive design principles, Now again work on them and refine it",
        accentColor: "var(--accent-purple)",
        tag: "LEGACY",
        github: "https://github.com/prayag29-sahu/Shivay",
        live: "https://prayag-sahu.github.io/www.P.S.shivay.com",
        image: "/images/09_Projects/11.png",
    },
    {
        id: "PRJ_10",
        title: "SecureAuth Suite",
        subtitle: "Multi-Factor Authentication System",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Twilio", "Nodemailer", "JWT"],
        description: "A complete full-stack authentication system implementing email OTP verification via Nodemailer, SMS OTP verification via Twilio, JWT access tokens with refresh token rotation, forgot password workflows, and protected route management. Built as a college learning project to master secure authentication architecture end-to-end.",
        accentColor: "var(--accent)",
        tag: "SECURITY",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/02.png",
    },
    {
        id: "PRJ_11",
        title: "Razorpay CLI Integration",
        subtitle: "Open-Source Contribution · Apna College",
        stack: ["JavaScript", "Node.js", "CLI Tools", "Razorpay API"],
        description: "An open-source contribution to Apna College's community project repository — a CLI tool that simplifies Razorpay payment gateway integration for developers, abstracting order creation, webhook setup, and HMAC signature verification into streamlined command-line workflows. Contributed as part of my learning path into real-world payment infrastructure.",
        accentColor: "var(--accent-amber)",
        tag: "OPEN-SOURCE",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/12.png",
    },
    {
        id: "PRJ_12",
        title: "Velvet Animated Shop",
        subtitle: "Ladies E-Commerce · Animated Frontend",
        stack: ["HTML5", "CSS3", "JavaScript", "Animation Libraries"],
        description: "A highly animated ladies' shopping website built with pure HTML, CSS, and JavaScript — featuring smooth product carousels, parallax scroll effects, hover micro-animations, and an engaging purchasing experience. Designed to demonstrate advanced frontend animation techniques and polished UI craftsmanship without any framework dependencies.",
        accentColor: "var(--accent-purple)",
        tag: "FRONTEND",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/minor/03/02.png",
    },
    {
        id: "PRJ_13",
        title: "Language Translator",
        subtitle: "Multi-Language Text Translation · Hackathon",
        stack: ["HTML5", "CSS3", "JavaScript", "Python", "Translation APIs", "NLP Models"],
        description: "A hackathon project that translates text across a wide range of global languages using public translation APIs and lightweight NLP models. Built under competitive time constraints, the platform provides real-time language detection and translation output with a clean, accessible interface supporting learners and communicators.",
        accentColor: "var(--accent-blue)",
        tag: "NLP",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/04.png",
    },
    {
        id: "PRJ_14",
        title: "Jarvis — Voice Assistant",
        subtitle: "Python-Based OS Automation Assistant",
        stack: ["Python", "SpeechRecognition", "pyttsx3", "OS Modules", "Automation"],
        description: "An intelligent voice-controlled assistant built in Python that listens to spoken commands and executes corresponding system tasks — opening applications, performing web searches, reading out results, writing text, and managing files. Designed to demonstrate Python's automation capabilities through real-world voice-driven interaction.",
        accentColor: "var(--accent)",
        tag: "AUTOMATION",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/06.png",
    },
    {
        id: "PRJ_15",
        title: "GALE Employee Chatbot",
        subtitle: "SIH Hackathon · GALE Company Entry",
        stack: ["HTML5", "CSS3", "JavaScript", "Python", "NLP", "Rule-Based Logic"],
        description: "My first Smart India Hackathon (SIH) project — a lightweight chatbot designed for GALE company employees to resolve internal queries, access schedules, and navigate HR FAQs. Built using HTML/CSS/JS for the frontend and Python NLP for intent classification, delivering a streamlined internal communication tool under hackathon constraints.",
        accentColor: "var(--accent-amber)",
        tag: "HACKATHON",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/minor/01/15.png",
    },
    {
        id: "PRJ_16",
        title: "MediMap — Care Locator",
        subtitle: "Hospital Finder · SIH Hackathon Entry",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Geolocation API", "Maps Integration"],
        description: "A MERN-based hackathon project that helps users locate the best hospitals in any region based on their specific disease or medical need. Features geolocation-based hospital filtering, specialty matching, and a surgical cost calculator that estimates total treatment expenses — empowering informed healthcare decisions under time-critical situations.",
        accentColor: "var(--accent-blue)",
        tag: "HEALTH-TECH",
        github: "https://github.com/prayag29-sahu",
        live: null,
        image: "/images/09_Projects/13.png",
    },
    {
        id: "PRJ_17",
        title: "Amazon clone UI",
        subtitle: "Clone UI - Amazon Landing page",
        stack: ["HTML", "CSS"],
        description: "Simple HTML CSS based Prectice Amazon clone webpage",
        accentColor: "var(--accent-purple)",
        tag: "HEALTH-TECH",
        github: "https://github.com/prayag29-sahu/Frontend-Project/tree/main/1.WEB%20DEVELOPMENT%20HTML%20CSS/amazon%20on%20pc",
        live: "https://amazoncloneonpcps.netlify.app",
        image: "/images/09_Projects/17.jpg",
    },
];

/* Projects grouped by technology */
const stackCategories = [
    {
        id: "STK_01",
        stackName: "Full-Stack & Production",
        shortName: "MERN · SQL · LIVE",
        icon: <Server size={15} />,
        color: "var(--accent)",
        desc: "Production-grade business apps, e-commerce platforms, and hospitality systems deployed to live infrastructure.",
        projects: mainProjects.filter(p => ["PRODUCTION", "E-COMMERCE", "FINTECH", "SECURITY"].includes(p.tag)),
    },
    {
        id: "STK_02",
        stackName: "AI & Automation",
        shortName: "PYTHON · ML · NLP",
        icon: <Terminal size={15} />,
        color: "var(--accent-amber)",
        desc: "Intelligent assistants, AI-driven verification systems, and NLP-powered tools across hackathons and college projects.",
        projects: mainProjects.filter(p => ["AI / ML", "AUTOMATION", "HACKATHON", "NLP"].includes(p.tag)),
    },
    {
        id: "STK_03",
        stackName: "Frontend & UI",
        shortName: "REACT · HTML · CSS",
        icon: <Code2 size={15} />,
        color: "var(--accent-blue)",
        desc: "Visually polished portfolios, animated shopping experiences, and interactive web UIs crafted with modern CSS.",
        projects: mainProjects.filter(p => ["PORTFOLIO", "FRONTEND", "LEGACY"].includes(p.tag)),
    },
    {
        id: "STK_04",
        stackName: "Open Source & Tools",
        shortName: "CLI · TOOLS · CONTRIB",
        icon: <FolderOpen size={15} />,
        color: "var(--accent-purple)",
        desc: "Open-source contributions, developer tooling, and specialized platform integrations for the community.",
        projects: mainProjects.filter(p => ["OPEN-SOURCE", "HEALTH-TECH"].includes(p.tag)),
    },
];

/* Project Details (Full View) */
/* I created this popup to show more details about how I built each project and what I learned. */
function ProjectPopup({ project, onClose }) {
    if (!project) return null;
    const ac = project.accentColor;
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(1,4,9,0.92)", backdropFilter: "blur(12px)" }}
            onClick={onClose}>
            <div className="relative border w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                style={{ borderColor: ac, borderTopWidth: 3, borderTopColor: ac, background: "var(--surface)" }}
                onClick={e => e.stopPropagation()}>
                <ScanlineOverlay />
                <CornerAccent color={ac} />

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b relative z-10 shrink-0"
                    style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                    <div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.2em] font-bold" style={{ color: "var(--text-muted)" }}>{project.id}_DETAILS.log</span>
                        </div>
                        <h3 className="font-mono font-black text-xl tracking-tight" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                        <p className="font-mono text-[10px] tracking-widest mt-1 font-bold" style={{ color: ac }}>{project.subtitle}</p>
                    </div>
                    <button onClick={onClose}
                        className="border p-2 transition-colors ml-4 shrink-0"
                        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff5f56"; e.currentTarget.style.color = "#ff5f56"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                        <X size={16} />
                    </button>
                </div>

                {/* Image */}
                <div className="relative h-72 overflow-hidden shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" decoding="async"
                        style={{ filter: "brightness(1.05) contrast(1.02)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 40%)" }} />
                    <div className="absolute top-3 right-3 font-mono text-[8px] border px-2 py-1 font-bold tracking-widest"
                        style={{ borderColor: ac, color: ac, background: "rgba(1,4,9,0.8)" }}>{project.tag}</div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center gap-2" style={{ background: "linear-gradient(to top, rgba(1,4,9,0.7) 0%, transparent 100%)" }}>
                        <span className="font-mono text-[9px] tracking-widest font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>IMAGE_PREVIEW.png</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 relative z-10 overflow-y-auto custom-scroll">
                    <div className="border p-4 relative" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                        <CornerAccent color="var(--border-dim)" />
                        <div className="font-mono text-[8px] tracking-[0.2em] mb-2 font-bold" style={{ color: ac }}>PROJECT_DESCRIPTION.txt</div>
                        <p className="font-mono text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                    </div>
                    <div>
                        <div className="font-mono text-[8px] tracking-widest mb-2.5 font-bold" style={{ color: "var(--text-muted)" }}>TECH_STACK</div>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(s => (
                                <span key={s} className="font-mono text-[9px] px-2.5 py-1 border font-bold"
                                    style={{ color: ac, borderColor: ac, background: "var(--bg-subtle)" }}>{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 border font-mono text-[9px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200 font-bold"
                            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}>
                            <Github size={12} /> VIEW_CODE →
                        </a>
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 border font-mono text-[9px] tracking-widest uppercase px-4 py-2.5 transition-all duration-200 font-bold"
                                style={{ borderColor: ac, color: ac }}
                                onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "var(--bg)"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                                <ExternalLink size={12} /> LIVE_DEMO →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Small Project Card */
function ProjectCard({ project, onExplore }) {
    const ac = project.accentColor;
    return (
        <div className="border relative overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full group"
            style={{ borderColor: "var(--border)", background: "var(--surface)", borderLeftWidth: 2, borderLeftColor: ac }}
            onClick={() => onExplore(project)}>
            <ScanlineOverlay />
            <CornerAccent color={ac} />

            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b relative z-10 shrink-0"
                style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                <span className="font-mono text-[8px] tracking-[0.15em]" style={{ color: "var(--text-dim)" }}>{project.id}.exe</span>
                <span className="font-mono text-[7px] border px-1.5 py-0.5 tracking-widest font-bold"
                    style={{ color: ac, borderColor: ac }}>{project.tag}</span>
            </div>

            {/* Image */}
            <div className="relative h-52 overflow-hidden shrink-0">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "brightness(0.95) contrast(1.02)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 45%)" }} />
                <div className="absolute top-2 left-2 font-mono text-[7px] border px-1.5 py-0.5 font-bold"
                    style={{ borderColor: ac, color: ac, background: "rgba(1,4,9,0.75)" }}>{project.id}</div>
            </div>

            {/* Content */}
            <div className="p-4 relative z-10 flex flex-col flex-1">
                <h4 className="font-mono font-black text-[13px] mb-1 leading-tight" style={{ color: "var(--text-primary)" }}>{project.title}</h4>
                <p className="font-mono text-[9px] mb-2.5 font-bold tracking-wide" style={{ color: ac }}>{project.subtitle}</p>
                <p className="font-mono text-[10px] leading-relaxed mb-3 flex-1 line-clamp-2" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.stack.slice(0, 3).map(s => (
                        <span key={s} className="font-mono text-[7px] px-1.5 py-0.5 border"
                            style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}>{s}</span>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex-1 font-mono text-[8px] tracking-widest uppercase py-2 border transition-all duration-200 font-bold"
                        style={{ borderColor: ac, color: ac }}
                        onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "var(--bg)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                        $ EXPLORE →
                    </button>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="border p-2 transition-colors"
                        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                        <Github size={12} />
                    </a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="border p-2 transition-colors"
                            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = ac; e.currentTarget.style.color = ac; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                            <ExternalLink size={12} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

/* Folder card for technology groups */
function StackCard({ stack, onExplore }) {
    const [hovered, setHovered] = useState(false);
    const ac = stack.color;
    return (
        <div className="border relative overflow-hidden cursor-pointer transition-all duration-300"
            style={{ borderColor: hovered ? ac : "var(--border)", background: "var(--surface)", borderLeftWidth: 2, borderLeftColor: hovered ? ac : "var(--border)" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onExplore(stack)}>
            <ScanlineOverlay />
            {hovered && <CornerAccent color={ac} />}

            {/* Preview thumbnails */}
            <div className="relative h-40 overflow-hidden" style={{ background: "var(--bg)" }}>
                <div className="absolute inset-0 grid grid-cols-2 gap-0.5 p-0.5">
                    {stack.projects.slice(0, 4).map((proj, i) => (
                        <div key={i} className="overflow-hidden">
                            <img src={proj.image} alt={proj.title} loading="lazy" decoding="async"
                                className="w-full h-full object-cover transition-all duration-500"
                                style={{ filter: hovered ? "brightness(0.85)" : "brightness(0.65) saturate(0.85)", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 50%)" }} />
                <div className="absolute top-1.5 right-1.5 font-mono text-[7px] border px-1.5 py-0.5 font-bold z-10"
                    style={{ borderColor: ac, color: ac, background: "rgba(1,4,9,0.85)" }}>
                    {stack.projects.length} PROJECTS
                </div>
            </div>

            {/* Content */}
            <div className="p-4 relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 border flex items-center justify-center shrink-0 transition-all duration-200"
                        style={{ borderColor: hovered ? ac : "var(--border)", color: hovered ? ac : "var(--text-dim)" }}>
                        {stack.icon}
                    </div>
                    <div>
                        <h4 className="font-mono font-black text-[12px] leading-tight" style={{ color: "var(--text-primary)" }}>{stack.stackName}</h4>
                        <div className="font-mono text-[8px] tracking-widest font-bold mt-0.5" style={{ color: ac }}>{stack.shortName}</div>
                    </div>
                </div>
                <p className="font-mono text-[10px] leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>{stack.desc}</p>
                <div className="space-y-1 mb-3">
                    {stack.projects.slice(0, 2).map(p => (
                        <div key={p.id} className="flex items-center gap-1.5">
                            <span className="font-mono text-[8px] font-bold" style={{ color: ac }}>▸</span>
                            <span className="font-mono text-[9px] truncate" style={{ color: "var(--text-muted)" }}>{p.title}</span>
                        </div>
                    ))}
                    {stack.projects.length > 2 && (
                        <div className="font-mono text-[9px]" style={{ color: "var(--text-dim)" }}>+ {stack.projects.length - 2} more projects...</div>
                    )}
                </div>
                <button className="w-full flex items-center justify-center gap-2 border font-mono text-[8px] tracking-[0.15em] uppercase py-2 transition-all duration-200 font-bold"
                    style={{ borderColor: ac, color: ac }}
                    onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "var(--bg)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                    <FolderOpen size={10} /> $ LS_DIR →
                </button>
            </div>
        </div>
    );
}

/* A list of all projects in this group */
function StackGalleryPopup({ stack, onClose, onProjectExplore }) {
    if (!stack) return null;
    const ac = stack.color;
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(1,4,9,0.94)", backdropFilter: "blur(14px)" }}
            onClick={onClose}>
            <div className="relative border w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col"
                style={{ borderColor: ac, borderTopWidth: 3, borderTopColor: ac, background: "var(--surface)" }}
                onClick={e => e.stopPropagation()}>
                <ScanlineOverlay />
                <CornerAccent color={ac} />

                <div className="flex items-center justify-between px-6 py-4 border-b relative z-10 shrink-0"
                    style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="w-7 h-7 border flex items-center justify-center" style={{ borderColor: ac, color: ac }}>{stack.icon}</div>
                        <div>
                            <h3 className="font-mono font-black text-lg" style={{ color: "var(--text-primary)" }}>{stack.stackName}</h3>
                            <p className="font-mono text-[9px] tracking-widest font-bold" style={{ color: ac }}>{stack.shortName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="border px-3 py-1.5 text-center" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                            <div className="font-mono text-[7px] tracking-[0.2em] font-bold" style={{ color: ac }}>PROJECTS</div>
                            <div className="font-mono font-black text-lg" style={{ color: "var(--text-primary)" }}>{stack.projects.length}</div>
                        </div>
                        <button onClick={onClose}
                            className="border p-1.5 transition-colors"
                            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff5f56"; e.currentTarget.style.color = "#ff5f56"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                            <X size={15} />
                        </button>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto custom-scroll flex-1 relative z-10">
                    <div className="font-mono text-[8px] tracking-[0.2em] mb-4 font-bold" style={{ color: ac }}>
                        $ ls ./{stack.id.toLowerCase()}/ — {stack.projects.length} entries found
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {stack.projects.map(proj => (
                            <ProjectCard key={proj.id} project={proj} onExplore={(p) => { onClose(); setTimeout(() => onProjectExplore(p), 50); }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Projects Section */
/* I used a slider and filters to help users browse my work easily. */
export default function ProjectsPage() {
    const [popup, setPopup] = useState(null);
    const [stackPopup, setStackPopup] = useState(null);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const t = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 120);
        }, 6000);
        return () => clearInterval(t);
    }, []);

    return (
        <>
            <style>{`
                ${CSS_VARS}
                @keyframes projectMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 10px)); }
                }
                .animate-project-marquee {
                    animation: projectMarquee 50s linear infinite;
                }
                .animate-project-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <section
                id="projects"
                className="relative py-12 overflow-hidden"
                style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}>

                {/* Grid background */}
                <div className="absolute inset-0 opacity-[0.022] pointer-events-none"
                    style={{ backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

                {/* Ambient glow blobs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(57,211,83,0.03) 0%, transparent 70%)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(0,229,255,0.025) 0%, transparent 70%)" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    {/* ── HEADER ── */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
                            <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / PROJECTS</span>
                        </div>

                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)", borderTopWidth: 2, borderTopColor: "var(--accent)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent)" />
                            <WindowChrome filename="PROJECT_ARCHIVE.exe" status="ACTIVE" />

                            <div className="px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-widest uppercase transition-all duration-75`}
                                        style={{ color: glitch ? "var(--accent)" : "var(--text-primary)", transform: glitch ? "translateX(2px)" : "none", textShadow: "0 0 24px rgba(57,211,83,0.2)" }}>
                                        PROJECT_<span style={{ color: "var(--accent)" }}>FILES</span>
                                        <span className="inline-block w-[10px] h-[18px] align-middle ml-2 animate-pulse" style={{ background: "var(--accent)" }} />
                                    </h2>
                                    <p className="font-mono text-[12px] mt-3 tracking-wider" style={{ color: "var(--text-muted)" }}>
                                        $ find ./projects -type f — Loaded <span style={{ color: "var(--accent)" }}>{mainProjects.length}</span> core production builds and development experiments.
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {[
                                            { label: "TOTAL_PROJECTS", value: mainProjects.length.toString().padStart(2, "0") },
                                            { label: "STACK_CATEGORIES", value: stackCategories.length.toString().padStart(2, "0") },
                                            { label: "PRODUCTION_DEPLOYS", value: mainProjects.filter(p => p.live).length.toString().padStart(2, "0") },
                                            { label: "STATUS", value: "ACTIVE" },
                                        ].map(s => (
                                            <div key={s.label} className="border px-4 py-2" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                                <div className="font-mono text-[7px] tracking-[0.2em] font-bold" style={{ color: "var(--accent)" }}>{s.label}</div>
                                                <div className="font-mono font-black text-lg" style={{ color: "var(--text-primary)" }}>{s.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="flex flex-col items-end gap-3 shrink-0">
                                    <div className="flex items-center gap-2 border px-4 py-2" style={{ borderColor: "var(--accent)", background: "var(--bg-subtle)" }}>
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                                        <span className="font-mono text-[9px] tracking-widest font-bold uppercase" style={{ color: "var(--accent)" }}>AUTO_SCROLL_ENABLED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── PROJECTS SLIDER ── */}
                    <div className="mb-10">
                        <div className="font-mono text-[9px] mb-3 tracking-widest uppercase font-bold" style={{ color: "var(--accent)" }}>
                            $ cat ./active_projects.log — displaying {mainProjects.length} entries
                        </div>
                        <div className="overflow-hidden relative w-full">
                            <div className="flex gap-5 w-max animate-project-marquee">
                                {[...mainProjects, ...mainProjects].map((p, idx) => (
                                    <div key={`${p.id}-${idx}`}
                                        className="shrink-0 w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[400px]">
                                        <ProjectCard project={p} onExplore={setPopup} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── STACK CATEGORIES ── */}
                    <div className="border relative overflow-hidden mb-8" style={{ borderColor: "var(--border)", background: "var(--surface)", borderTopWidth: 2, borderTopColor: "var(--accent-blue)" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent-blue)" />
                        <WindowChrome filename="STACK_DIRECTORIES.log" status="INDEXED" statusColor="var(--accent-blue)" />

                        <div className="p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <div className="font-mono text-[8px] tracking-[0.2em] mb-1 font-bold" style={{ color: "var(--accent-blue)" }}>
                                        $ ls -la ./stack_directories/ — click to explore by technology
                                    </div>
                                    <h3 className="font-mono font-black text-base uppercase tracking-[0.1em]" style={{ color: "var(--text-primary)" }}>
                                        MY ALL STACK PROJECTS
                                    </h3>
                                </div>
                                <div className="border px-3 py-2 text-center" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                    <div className="font-mono text-[7px] tracking-[0.2em] font-bold" style={{ color: "var(--accent-blue)" }}>CATEGORIES</div>
                                    <div className="font-mono font-black text-xl" style={{ color: "var(--text-primary)" }}>{stackCategories.length}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {stackCategories.map(s => (
                                    <StackCard key={s.id} stack={s} onExplore={setStackPopup} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── FOOTER ── */}
                    <div className="flex items-center justify-between">
                        <div className="font-mono text-[9px] tracking-widest" style={{ color: "var(--text-dim)" }}>
                            $ projects --list --all --count={mainProjects.length} _
                        </div>
                        <a href="https://github.com/prayag29-sahu?tab=repositories" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 border font-mono text-[9px] tracking-widest uppercase px-5 py-2.5 transition-all duration-200 font-bold"
                            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}>
                            <Github size={13} /> VIEW_ALL_ON_GITHUB →
                        </a>
                    </div>
                </div>

                {/* ── POPUPS ── */}
                {popup && <ProjectPopup project={popup} onClose={() => setPopup(null)} />}
                {stackPopup && (
                    <StackGalleryPopup
                        stack={stackPopup}
                        onClose={() => setStackPopup(null)}
                        onProjectExplore={setPopup}
                    />
                )}
            </section>
        </>
    );
}