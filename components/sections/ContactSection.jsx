




// export default function Contact() {
//     return (


//         <section
//             id="contact"
//             className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
//         >
//             <div className="container mx-auto px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">

//                     {/* Heading */}
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                             Let&apos;s{" "}
//                             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                                 Connect
//                             </span>
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                             Ready to bring your next project to life? I&apos;m always excited to discuss
//                             new opportunities and collaborate on innovative solutions.
//                         </p>
//                     </div>

//                     <div className="grid lg:grid-cols-2 gap-16 items-start">

//                         {/* LEFT SIDE */}
//                         <div className="space-y-8">

//                             {/* CONTACT INFO CARD */}
//                             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                                     Get In Touch
//                                 </h3>

//                                 <div className="space-y-6">

//                                     {/* Email */}
//                                     <ContactItem
//                                         bg="bg-blue-50"
//                                         iconBg="bg-blue-600"
//                                         title="Email"
//                                         value="hello@yourportfolio.com"
//                                     />

//                                     {/* Phone */}
//                                     <ContactItem
//                                         bg="bg-green-50"
//                                         iconBg="bg-green-600"
//                                         title="Phone"
//                                         value="+1 (555) 123-4567"
//                                     />

//                                     {/* Location */}
//                                     <ContactItem
//                                         bg="bg-purple-50"
//                                         iconBg="bg-purple-600"
//                                         title="Location"
//                                         value="San Francisco, CA"
//                                     />
//                                 </div>
//                             </div>

//                             {/* SOCIAL ICONS */}
//                             <div className="flex space-x-4">
//                                 <SocialButton />
//                                 <SocialButton dark />
//                                 <SocialButton twitter />
//                             </div>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div className="space-y-8">

//                             {/* IMAGE */}
//                             <img
//                                 src="https://cdn.ailandingpage.ai/landingpage_io/user-generate/f29e6dbb-5983-4f63-86ac-121a3164c61a/contact/contact-illustration-4e363e91ea0a4be0a098a831064be11d.png"
//                                 alt="Contact illustration"
//                                 className="w-full rounded-2xl object-cover shadow-sm"
//                             />

//                             {/* CONTACT FORM */}
//                             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                                     Send a Message
//                                 </h3>

//                                 <form className="space-y-6">

//                                     <div className="grid md:grid-cols-2 gap-6">
//                                         <Input label="Full Name" placeholder="Your name" />
//                                         <Input label="Email Address" placeholder="your@email.com" />
//                                     </div>

//                                     <Input label="Subject" placeholder="Project inquiry" />

//                                     <div>
//                                         <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                             Message
//                                         </label>
//                                         <textarea
//                                             rows="5"
//                                             className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                                             placeholder="Tell me about your project..."
//                                         />
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
//                                     >
//                                         Send Message
//                                     </button>

//                                 </form>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// function ContactItem({ bg, iconBg, title, value }) {
//     return (
//         <div className={`flex items-center space-x-4 p-4 ${bg} rounded-2xl`}>
//             <div className={`w-12 h-12 ${iconBg} rounded-xl`} />
//             <div>
//                 <p className="font-semibold text-gray-900">{title}</p>
//                 <p className="text-gray-600">{value}</p>
//             </div>
//         </div>
//     );
// }

// function Input({ label, placeholder }) {
//     return (
//         <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 {label}
//             </label>
//             <input
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder={placeholder}
//             />
//         </div>
//     );
// }

// function SocialButton({ dark, twitter }) {
//     let bg = "bg-blue-600 hover:bg-blue-700";
//     if (dark) bg = "bg-gray-900 hover:bg-gray-800";
//     if (twitter) bg = "bg-blue-400 hover:bg-blue-500";

//     return (
//         <a
//             href="#"
//             className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center transition transform hover:scale-110`}
//         />
//     );
// }







// 'use client';

// import {
//     Mail,
//     Phone,
//     MapPin,
//     Github,
//     Linkedin,
//     Twitter,
//     Send
// } from "lucide-react";
// import ParallaxSection from "@/components/ui/ParallaxSection";
// export default function Contact() {
//     return (
//         <ParallaxSection
//             // backgroundImage="/img/img1.jpeg"
//             backgroundImage="/images/bg.png"
//             height="400px"
//         >
//             <section
//                 id="contact"
//                 className="py-24  relative overflow-hidden"
//             >
//                 {/* Background Glow */}
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

//                 <div className="container mx-auto px-6 lg:px-8 relative z-10">
//                     <div className="max-w-7xl mx-auto">

//                         {/* Heading */}
//                         <div className="text-center mb-16">

//                             <div
//                                 className={`w-full lg:px-[12%] px-[5%]  flex flex-col justify-center items-center
//   `}                            >

//                                 <div className="flex items-center justify-center gap-6 mb-4">

//                                     {/* LEFT LINE */}
//                                     <div
//                                         className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-r from-transparent via-cyan-400 to-blue-400`}
//                                     ></div>

//                                     {/* TITLE */}
//                                     <h1
//                                         className={`text-3xl sm:text-4xl md:text-5xl  font-extrabold tracking-wide drop-shadow-lg transition-all bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}
//                                     >
//                                         <h2 className="text-4xl md:text-5xl font-bold text-white ">
//                                             Let&apos;s{" "}
//                                             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                                                 Build Something Great
//                                             </span>
//                                         </h2>
//                                     </h1>
//                                     {/* RIGHT LINE */}
//                                     <div
//                                         className={`w-24 h-[2px] shadow-md transition-all bg-gradient-to-l from-transparent vvia-cyan-400 to-blue-400`}
//                                     ></div>
//                                 </div>
//                             </div>
//                             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                                 Looking for a reliable full stack developer or freelancer?
//                                 I&apos;m open to job opportunities, freelance projects, and
//                                 long-term collaborations.
//                             </p>
//                         </div>

//                         <div className="grid lg:grid-cols-2 gap-16 items-start">

//                             {/* LEFT SIDE */}
//                             <div className="space-y-8">

//                                 {/* CONTACT INFO */}
//                                 <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10">
//                                     <h3 className="text-2xl font-bold text-white mb-6">
//                                         Contact Information
//                                     </h3>

//                                     <div className="space-y-6">

//                                         <ContactItem
//                                             icon={<Mail />}
//                                             title="Email"
//                                             value="sahuprayag145@gmail.com"
//                                         />

//                                         <ContactItem
//                                             icon={<Phone />}
//                                             title="Phone"
//                                             value="+91 79999 26855"
//                                         />

//                                         <ContactItem
//                                             icon={<MapPin />}
//                                             title="Location"
//                                             value="Jabalpur, Madhya Pradesh, India"
//                                         />

//                                     </div>
//                                 </div>

//                                 {/* SOCIAL ICONS */}
//                                 <div className="flex space-x-4">
//                                     <SocialButton icon={<Github />} />
//                                     <SocialButton icon={<Linkedin />} />
//                                     <SocialButton icon={<Twitter />} />
//                                 </div>
//                             </div>

//                             {/* RIGHT SIDE */}
//                             <div className="space-y-8">

//                                 {/* IMAGE */}
//                                 <img
//                                     src="/images/contact.png"
//                                     alt="Contact illustration"
//                                     className="w-full rounded-2xl object-cover shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
//                                 />

//                                 {/* CONTACT FORM */}
//                                 <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10">
//                                     <h3 className="text-2xl font-bold text-white mb-6">
//                                         Send a Message
//                                     </h3>

//                                     <form className="space-y-6">

//                                         <div className="grid md:grid-cols-2 gap-6">
//                                             <Input label="Full Name" placeholder="Your name" />
//                                             <Input label="Email Address" placeholder="your@email.com" />
//                                         </div>

//                                         <Input label="Subject" placeholder="Job / Freelance Project" />

//                                         <div>
//                                             <label className="block text-sm font-semibold text-gray-300 mb-2">
//                                                 Message
//                                             </label>
//                                             <textarea
//                                                 rows="5"
//                                                 className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
//                                                 placeholder="Tell me about your requirement..."
//                                             />
//                                         </div>

//                                         <button
//                                             type="submit"
//                                             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
//                                         >
//                                             Send Message
//                                             <Send size={18} />
//                                         </button>

//                                     </form>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* FOOTER LINE */}
//                         <div className="mt-20 text-center text-gray-400 text-sm">
//                             © 2026 Prayag Sahu — Full Stack Developer & Freelancer
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </ParallaxSection>
//     );
// }

// /* CONTACT ITEM */
// function ContactItem({ icon, title, value }) {
//     return (
//         <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition">
//             <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
//                 {icon}
//             </div>
//             <div>
//                 <p className="font-semibold text-white">{title}</p>
//                 <p className="text-gray-300 text-sm">{value}</p>
//             </div>
//         </div>
//     );
// }

// /* INPUT */
// function Input({ label, placeholder }) {
//     return (
//         <div>
//             <label className="block text-sm font-semibold text-gray-300 mb-2">
//                 {label}
//             </label>
//             <input
//                 className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                 placeholder={placeholder}
//             />
//         </div>
//     );
// }

// /* SOCIAL BUTTON */
// function SocialButton({ icon }) {
//     return (
//         <a
//             href="#"
//             className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-400 hover:scale-110 transition-all"
//         >
//             {icon}
//         </a>
//     );
// }











'use client';

import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, XCircle, Terminal, Loader } from "lucide-react";
import emailjs from '@emailjs/browser';
import ParallaxSection from '@/components/ui/ParallaxSection';

/* ─── EMAILJS CONFIG — apne credentials dalo ─────────────── */
const EMAILJS_SERVICE_ID = "service_c1lcmym";   // 👈 apna service ID
const EMAILJS_TEMPLATE_ID = "template_3d23n3n";  // 👈 apna template ID
const EMAILJS_PUBLIC_KEY = "iDnsyeNW2wHQtj5-7"; // 👈 apni public key

/* ─── Shared Primitives ──────────────────────────────────── */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)" }} />
    );
}
function CornerAccent({ color = "#39d353" }) {
    return (<>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: color }} />
    </>);
}
function WindowChrome({ filename, status = "LIVE", statusColor = "#39d353" }) {
    return (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2332]">
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8b949e]">{filename}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[8px] border px-1.5 py-0.5 tracking-widest" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* ─── Terminal Input ─────────────────────────────────────── */
function TerminalInput({ label, name, type = "text", placeholder, value, onChange, required, accentColor = "#39d353" }) {
    const [focused, setFocused] = useState(false);
    return (
        <div>
            <label className="block font-mono text-[9px] tracking-[0.2em] uppercase mb-1.5"
                style={{ color: focused ? accentColor : "#8b949e" }}>
                {label} {required && <span style={{ color: accentColor }}>*</span>}
            </label>
            <div className="relative border bg-[#010409] transition-all duration-200 overflow-hidden"
                style={{ borderColor: focused ? accentColor : "#1a2332", boxShadow: focused ? `0 0 12px ${accentColor}20` : "none" }}>
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200"
                    style={{ background: focused ? accentColor : "transparent" }} />
                <div className="flex items-center px-4 py-0">
                    <span className="font-mono text-[10px] mr-2 shrink-0" style={{ color: focused ? accentColor : "#30363d" }}>
                        {focused ? ">" : "$"}
                    </span>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className="w-full bg-transparent py-3 font-mono text-[12px] text-white placeholder-[#30363d] outline-none"
                    />
                    {focused && <span className="animate-pulse font-mono text-[12px] ml-1" style={{ color: accentColor }}>█</span>}
                </div>
            </div>
        </div>
    );
}

/* ─── Terminal Textarea ──────────────────────────────────── */
function TerminalTextarea({ label, name, value, onChange, required, accentColor = "#39d353" }) {
    const [focused, setFocused] = useState(false);
    return (
        <div>
            <label className="block font-mono text-[9px] tracking-[0.2em] uppercase mb-1.5"
                style={{ color: focused ? accentColor : "#8b949e" }}>
                {label} {required && <span style={{ color: accentColor }}>*</span>}
            </label>
            <div className="relative border bg-[#010409] transition-all duration-200 overflow-hidden"
                style={{ borderColor: focused ? accentColor : "#1a2332", boxShadow: focused ? `0 0 12px ${accentColor}20` : "none" }}>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200"
                    style={{ background: focused ? accentColor : "transparent" }} />
                <div className="flex items-start px-4 pt-3 pb-1">
                    <span className="font-mono text-[10px] mr-2 mt-0.5 shrink-0" style={{ color: focused ? accentColor : "#30363d" }}>
                        {focused ? ">" : "$"}
                    </span>
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        rows={5}
                        placeholder="Describe your project, job opportunity or query..."
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className="w-full bg-transparent font-mono text-[12px] text-white placeholder-[#30363d] outline-none resize-none"
                    />
                </div>
                <div className="px-4 pb-2 font-mono text-[8px] text-[#30363d] tracking-widest flex justify-between">
                    <span>MESSAGE.txt</span>
                    <span>{value?.length || 0} CHARS</span>
                </div>
            </div>
        </div>
    );
}

/* ─── Contact Info Item ──────────────────────────────────── */
function ContactItem({ icon, label, value, href, color }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a href={href || "#"} target={href ? "_blank" : undefined} rel="noopener noreferrer"
            className="flex items-center gap-4 border border-[#1a2332] bg-[#010409] p-4 relative overflow-hidden group transition-all duration-200 hover:border-[#39d353]"
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <CornerAccent color={hovered ? color : "#1a2332"} />
            <div className="w-9 h-9 border flex items-center justify-center shrink-0 transition-all duration-200"
                style={{ borderColor: hovered ? color : "#1a2332", color: hovered ? color : "#30363d", background: hovered ? `${color}15` : "transparent" }}>
                {icon}
            </div>
            <div className="relative z-10">
                <div className="font-mono text-[8px] tracking-[0.2em] uppercase mb-0.5" style={{ color: color }}>{label}</div>
                <div className="font-mono text-[12px] text-white">{value}</div>
            </div>
            <div className="ml-auto font-mono text-[9px] transition-all duration-200 relative z-10"
                style={{ color: hovered ? color : "#30363d" }}>→</div>
        </a>
    );
}

/* ─── Social Button ──────────────────────────────────────── */
function SocialBtn({ icon, href, label, color }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-[#1a2332] py-3 font-mono text-[9px] tracking-[0.15em] uppercase transition-all duration-200 relative overflow-hidden"
            style={{ color: hovered ? "#010409" : color, borderColor: hovered ? color : "#1a2332", background: hovered ? color : "transparent" }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {icon} {label}
        </a>
    );
}

/* ─── Success / Error overlay ────────────────────────────── */
function StatusOverlay({ status, onReset }) {
    const isSuccess = status === "success";
    const ac = isSuccess ? "#39d353" : "#ff5f56";
    return (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#010409]/97 backdrop-blur-sm">
            <CornerAccent color={ac} />
            <div className="text-center px-6">
                {isSuccess
                    ? <CheckCircle size={48} className="mx-auto mb-4" style={{ color: ac }} />
                    : <XCircle size={48} className="mx-auto mb-4" style={{ color: ac }} />
                }
                <h3 className="font-mono font-black text-xl mb-2" style={{ color: ac }}>
                    {isSuccess ? "MESSAGE_SENT.exe" : "TRANSMISSION_FAILED.err"}
                </h3>
                <p className="font-mono text-[11px] text-[#8b949e] leading-relaxed max-w-xs mx-auto mb-6">
                    {isSuccess
                        ? "Your message has been successfully transmitted. I'll get back to you within 24 hours."
                        : "Failed to send your message. Please try again or reach out directly via email."}
                </p>
                <div className="border border-[#1a2332] bg-[#010409] px-4 py-2 font-mono text-[9px] text-[#39d353] mb-4 text-left">
                    <div>$ status --check</div>
                    <div style={{ color: ac }}>
                        {isSuccess ? "✓ DELIVERY: CONFIRMED" : "✗ DELIVERY: FAILED"}
                    </div>
                    <div className="text-[#30363d] text-[8px] mt-1">{new Date().toLocaleString()}</div>
                </div>
                <button onClick={onReset}
                    className="border font-mono text-[10px] tracking-widest uppercase px-6 py-2.5 transition-all duration-200 hover:text-[#010409]"
                    style={{ borderColor: ac, color: ac }}
                    onMouseEnter={e => { e.currentTarget.style.background = ac; e.currentTarget.style.color = "#010409"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = ac; }}>
                    {isSuccess ? "$ SEND_ANOTHER →" : "$ RETRY →"}
                </button>
            </div>
        </div>
    );
}

/* ─── Glitch text ────────────────────────────────────────── */
function GlitchTitle({ glitch }) {
    return (
        <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "text-[#39d353] translate-x-[2px]" : "text-white"}`}
            style={{ textShadow: "0 0 24px rgba(57,211,83,0.25)" }}>
            CONTACT_<span className="text-[#39d353]">ME</span>
            <span className="inline-block w-[10px] h-[18px] bg-[#39d353] animate-pulse ml-2 align-middle" />
        </h2>
    );
}

/* ─── Main Export ────────────────────────────────────────── */
export default function Contact() {
    const formRef = useRef();
    const [glitch, setGlitch] = useState(false);
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(null); // null | "success" | "error"
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    useEffect(() => {
        const t = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 120); }, 7000);
        return () => clearInterval(t);
    }, []);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );
            setSubmitted("success");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch {
            setSubmitted("error");
        } finally {
            setSending(false);
        }
    };

    const resetForm = () => setSubmitted(null);

    return (
        <ParallaxSection backgroundImage="/images/bg.png" height="auto">
            <section className="relative py-28 overflow-hidden"
                id='contact'
                style={{ fontFamily: "'Courier New', Courier, monospace" }}>

                {/* BG grid */}
                <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(rgba(57,211,83,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(57,211,83,0.6) 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }} />
                {/* Glows */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#39d353] opacity-[0.02] rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00e5ff] opacity-[0.02] rounded-full blur-[160px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    {/* ── HEADER ── */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse shadow-[0_0_8px_#39d353]" />
                            <span className="font-mono text-[10px] tracking-[0.3em] text-[#39d353] uppercase">SYSTEM_MODULE / CONTACT</span>
                        </div>
                        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                            <ScanlineOverlay />
                            <CornerAccent color="#39d353" />
                            <WindowChrome filename="CONTACT_ME.exe" />
                            <div className="px-8 py-6">
                                <GlitchTitle glitch={glitch} />
                                <p className="font-mono text-[12px] text-[#8b949e] mt-3 tracking-wider max-w-2xl">
                                    $ init --connection — Open to job opportunities, freelance projects & long-term collaborations.
                                </p>
                                {/* Status pills */}
                                <div className="flex flex-wrap gap-3 mt-5">
                                    {[
                                        { label: "STATUS", value: "AVAILABLE", color: "#39d353" },
                                        { label: "RESPONSE", value: "< 24 HRS", color: "#00e5ff" },
                                        { label: "MODE", value: "OPEN TO WORK", color: "#f59e0b" },
                                        { label: "LOCATION", value: "JABALPUR, MP", color: "#a855f7" },
                                    ].map(p => (
                                        <div key={p.label} className="border border-[#1a2332] bg-[#010409] px-3 py-1.5">
                                            <div className="font-mono text-[7px] tracking-[0.2em]" style={{ color: p.color }}>{p.label}</div>
                                            <div className="font-mono text-[11px] font-bold text-white">{p.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── MAIN GRID ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">

                        {/* ── LEFT: Contact info + image + socials ── */}
                        <div className="flex flex-col gap-4">

                            {/* Contact info panel */}
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                                <ScanlineOverlay />
                                <CornerAccent color="#39d353" />
                                <WindowChrome filename="CONTACT_INFO.log" status="ONLINE" statusColor="#39d353" />
                                <div className="p-5 space-y-2 relative z-10">
                                    <div className="font-mono text-[9px] text-[#39d353] tracking-[0.2em] mb-3">$ cat ./contact/info.txt</div>
                                    <ContactItem icon={<Mail size={15} />} label="EMAIL" value="sahuprayag145@gmail.com" href="mailto:sahuprayag145@gmail.com" color="#39d353" />
                                    <ContactItem icon={<Phone size={15} />} label="PHONE" value="+91 79999 26855" href="tel:+917999926855" color="#00e5ff" />
                                    <ContactItem icon={<MapPin size={15} />} label="LOCATION" value="Jabalpur, Madhya Pradesh, India" color="#f59e0b" />
                                </div>
                            </div>

                            {/* Image panel */}
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden group flex-1">
                                <ScanlineOverlay />
                                <CornerAccent color="#a855f7" />
                                <WindowChrome filename="CONNECT.png" status="READY" statusColor="#a855f7" />
                                <div className="p-4 relative z-10">
                                    <div className="relative border border-[#1a2332] overflow-hidden">
                                        <CornerAccent color="#a855f7" />
                                        <img src="/images/contact.png" alt="Contact"
                                            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                            style={{ filter: "grayscale(15%)" }} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-3 left-3">
                                            <div className="font-mono text-[8px] text-[#8b949e] tracking-widest">LETS_BUILD_SOMETHING</div>
                                            <div className="font-mono text-[10px] text-[#a855f7]">GREAT_TOGETHER.exe</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                                <ScanlineOverlay />
                                <CornerAccent color="#00e5ff" />
                                <WindowChrome filename="SOCIAL_LINKS.sh" status="ACTIVE" statusColor="#00e5ff" />
                                <div className="p-4 relative z-10">
                                    <div className="font-mono text-[9px] text-[#00e5ff] tracking-[0.2em] mb-3">$ open --social-profiles</div>
                                    <div className="flex gap-2">
                                        <SocialBtn icon={<Github size={13} />} href="https://github.com/prayag29-sahu" label="GITHUB" color="#39d353" />
                                        <SocialBtn icon={<Linkedin size={13} />} href="https://linkedin.com" label="LINKEDIN" color="#00e5ff" />
                                        <SocialBtn icon={<Twitter size={13} />} href="https://twitter.com" label="TWITTER" color="#a855f7" />
                                    </div>
                                </div>
                            </div>

                            {/* Quick message prompt */}
                            <div className="border border-[#1a2332] bg-[#010409] p-4 relative overflow-hidden">
                                <CornerAccent color="#1a2332" />
                                <div className="font-mono text-[9px] text-[#30363d] space-y-1">
                                    <div><span className="text-[#39d353]">$</span> ping prayag-sahu.dev</div>
                                    <div><span className="text-[#8b949e]">PONG:</span> <span className="text-[#39d353]">I am here! Ready to collaborate.</span></div>
                                    <div><span className="text-[#39d353]">$</span> status --availability<span className="animate-pulse">█</span></div>
                                    <div><span className="text-[#8b949e]">→</span> <span className="text-[#f59e0b]">OPEN_TO_WORK: TRUE</span></div>
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Contact form ── */}
                        <div className="border border-[#1a2332] bg-[#0d1117] relative overflow-hidden"
                            style={{ borderTopWidth: 3, borderTopColor: "#39d353", borderTopStyle: "solid" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="#39d353" />
                            <WindowChrome filename="SEND_MESSAGE.sh" status="READY" statusColor="#39d353" />

                            <div className="relative">
                                {/* Status overlay */}
                                {submitted && <StatusOverlay status={submitted} onReset={resetForm} />}

                                <div className="p-6 relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <div>
                                            <div className="font-mono text-[9px] text-[#39d353] tracking-[0.2em] mb-1">$ compose --new-message</div>
                                            <h3 className="font-mono font-black text-base text-white tracking-[0.1em] uppercase">SEND_A_MESSAGE</h3>
                                        </div>
                                        <div className="flex items-center gap-1.5 border border-[#1a2332] px-3 py-1.5">
                                            <Terminal size={11} className="text-[#39d353]" />
                                            <span className="font-mono text-[8px] text-[#39d353] tracking-widest">SECURE_CHANNEL</span>
                                        </div>
                                    </div>

                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <TerminalInput label="Full Name" name="name" placeholder="Your full name"
                                                value={form.name} onChange={handleChange} required accentColor="#39d353" />
                                            <TerminalInput label="Email Address" name="email" type="email" placeholder="your@email.com"
                                                value={form.email} onChange={handleChange} required accentColor="#00e5ff" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <TerminalInput label="Phone (Optional)" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                                                value={form.phone} onChange={handleChange} accentColor="#f59e0b" />
                                            <TerminalInput label="Subject" name="subject" placeholder="Job / Freelance / Collab"
                                                value={form.subject} onChange={handleChange} required accentColor="#a855f7" />
                                        </div>

                                        <TerminalTextarea label="Message" name="message"
                                            value={form.message} onChange={handleChange} required accentColor="#39d353" />

                                        {/* Privacy note */}
                                        <div className="border border-[#1a2332] bg-[#010409] px-4 py-2.5 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[#39d353] shrink-0" />
                                            <p className="font-mono text-[9px] text-[#30363d] tracking-wide">
                                                Your information is encrypted and will never be shared with third parties.
                                            </p>
                                        </div>

                                        {/* Submit button */}
                                        <button type="submit" disabled={sending}
                                            className="w-full flex items-center justify-center gap-3 border font-mono text-[11px] tracking-[0.2em] uppercase py-4 transition-all duration-200 relative overflow-hidden group/btn"
                                            style={{ borderColor: "#39d353", color: sending ? "#30363d" : "#39d353", borderWidth: 1 }}
                                            onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = "#39d353"; e.currentTarget.style.color = "#010409"; } }}
                                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = sending ? "#30363d" : "#39d353"; }}>
                                            {/* Animated scan on hover */}
                                            <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none"
                                                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(57,211,83,0.08) 50%, transparent 100%)" }} />
                                            {sending
                                                ? <><Loader size={14} className="animate-spin" /> TRANSMITTING...</>
                                                : <><Send size={14} /> $ SEND_MESSAGE.exe →</>
                                            }
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── FOOTER ── */}
                    <div className="mt-12 border border-[#1a2332] bg-[#0d1117] relative overflow-hidden">
                        <ScanlineOverlay />
                        <div className="px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#39d353] animate-pulse" />
                                <span className="font-mono text-[10px] text-[#39d353] tracking-[0.2em]">ALL_SYSTEMS_ONLINE</span>
                            </div>
                            <div className="font-mono text-[10px] text-[#30363d] tracking-widest text-center">
                                © 2026 PRAYAG_SAHU — FULL_STACK_DEVELOPER & FREELANCER
                            </div>
                            <div className="font-mono text-[9px] text-[#30363d] tracking-widest">
                                $ contact --version 1.0.0 _
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ParallaxSection>
    );
}