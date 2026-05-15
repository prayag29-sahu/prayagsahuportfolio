'use client';

import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, XCircle, Terminal, Loader } from "lucide-react";
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';

/* 
   Email Service Setup 
   I connected EmailJS so I can receive your messages directly in my inbox 
   without needing a complicated server setup.
*/
const EMAILJS_SERVICE_ID = "service_c1lcmym";   
const EMAILJS_TEMPLATE_ID = "template_3d23n3n";  
const EMAILJS_PUBLIC_KEY = "iDnsyeNW2wHQtj5-7"; 
const EMAILJS_AUTO_REPLY_ID = "template_w2i2syl";

/* Basic UI parts for the computer-style look */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0"
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
        <div className="flex items-center justify-between px-4 py-2.5 md:px-5 md:py-3.5 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
            <div className="flex items-center gap-3">
                <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.18em] font-bold truncate max-w-[130px] md:max-w-none" style={{ color: "var(--text-muted)" }}>{filename}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
                <span className="font-mono text-[9px] md:text-[10px] border px-2 py-0.5 tracking-widest font-bold whitespace-nowrap" style={{ color: statusColor, borderColor: statusColor }}>{status}</span>
            </div>
        </div>
    );
}

/* 
   Computer-Style Input Boxes 
   I made these boxes look like a real computer terminal, 
   with symbols that change when you click on them.
*/
function TerminalInput({ label, name, type = "text", placeholder, value, onChange, required, accentColor = "var(--accent)" }) {
    const [focused, setFocused] = useState(false);
    return (
        <div>
            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2 font-bold"
                style={{ color: focused ? accentColor : "var(--text-muted)" }}>
                {label} {required && <span style={{ color: accentColor }}>*</span>}
            </label>
            <div className="relative border transition-all duration-200 overflow-hidden"
                style={{ borderColor: focused ? accentColor : "var(--border)", background: "var(--bg)", boxShadow: focused ? `0 0 12px var(--accent-glow)` : "none" }}>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200"
                    style={{ background: focused ? accentColor : "transparent" }} />
                <div className="flex items-center px-4 py-0">
                    <span className="font-mono text-[10px] mr-2 shrink-0" style={{ color: focused ? accentColor : "var(--text-dim)" }}>
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
                        className="w-full bg-transparent py-3.5 font-mono text-[13px] placeholder-dim outline-none font-bold"
                        style={{ color: "var(--text-primary)" }}
                    />
                    {focused && <span className="animate-pulse font-mono text-[13px] ml-1" style={{ color: accentColor }}>█</span>}
                </div>
            </div>
        </div>
    );
}

/* Computer-Style Message Box */
function TerminalTextarea({ label, name, value, onChange, required, accentColor = "var(--accent)" }) {
    const [focused, setFocused] = useState(false);
    return (
        <div>
            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase mb-2 font-bold"
                style={{ color: focused ? accentColor : "var(--text-muted)" }}>
                {label} {required && <span style={{ color: accentColor }}>*</span>}
            </label>
            <div className="relative border transition-all duration-200 overflow-hidden"
                style={{ borderColor: focused ? accentColor : "var(--border)", background: "var(--bg)", boxShadow: focused ? `0 0 12px var(--accent-glow)` : "none" }}>
                <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200"
                    style={{ background: focused ? accentColor : "transparent" }} />
                <div className="flex items-start px-4 pt-3 pb-1">
                    <span className="font-mono text-[10px] mr-2 mt-0.5 shrink-0" style={{ color: focused ? accentColor : "var(--text-dim)" }}>
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
                        className="w-full bg-transparent font-mono text-[13px] placeholder-dim outline-none resize-none font-bold"
                        style={{ color: "var(--text-primary)" }}
                    />
                </div>
                <div className="px-4 pb-2.5 font-mono text-[10px] tracking-widest flex justify-between font-bold" style={{ color: "var(--text-dim)" }}>
                    <span>MESSAGE.txt</span>
                    <span>{value?.length || 0} CHARS</span>
                </div>
            </div>
        </div>
    );
}

/* Contact Info Item */
function ContactItem({ icon, label, value, href, color }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a href={href || "#"} target={href ? "_blank" : undefined} rel="noopener noreferrer"
            className="flex items-center gap-4 border p-5 relative overflow-hidden group transition-all duration-200"
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <CornerAccent color={hovered ? color : "var(--border)"} />
            <div className="w-10 h-10 border flex items-center justify-center shrink-0 transition-all duration-200"
                style={{ borderColor: hovered ? color : "var(--border)", color: hovered ? color : "var(--text-dim)", background: hovered ? `${color}15` : "transparent" }}>
                {icon}
            </div>
            <div className="relative z-10">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1 font-bold" style={{ color: color }}>{label}</div>
                <div className="font-mono text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>{value}</div>
            </div>
            <div className="ml-auto font-mono text-[11px] transition-all duration-200 relative z-10 font-bold"
                style={{ color: hovered ? color : "var(--text-dim)" }}>→</div>
        </a>
    );
}

/* 
   Message Status Screen 
   This shows a "Success" or "Error" message after you send an email.
*/
function StatusOverlay({ status, onReset }) {
    const isSuccess = status === "success";
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-md"
            style={{ background: "rgba(0,0,0,0.85)" }}
        >
            <div className="max-w-md w-full p-8 border-2 text-center relative overflow-hidden"
                style={{ borderColor: isSuccess ? "var(--accent)" : "#ef4444", background: "var(--bg)" }}>
                <ScanlineOverlay />
                <CornerAccent color={isSuccess ? "var(--accent)" : "#ef4444"} />
                
                <div className="relative z-10">
                    {isSuccess ? (
                        <CheckCircle size={64} className="mx-auto mb-6" style={{ color: "var(--accent)" }} />
                    ) : (
                        <XCircle size={64} className="mx-auto mb-6" style={{ color: "#ef4444" }} />
                    )}
                    
                    <h3 className="font-mono font-black text-2xl tracking-tighter uppercase mb-2"
                        style={{ color: "var(--text-primary)" }}>
                        {isSuccess ? "TRANSMISSION_COMPLETE" : "SYSTEM_ERROR"}
                    </h3>
                    
                    <p className="font-mono text-xs tracking-wider mb-8 leading-relaxed font-bold"
                        style={{ color: "var(--text-muted)" }}>
                        {isSuccess 
                            ? "Your data has been securely transmitted through the encrypted tunnel. I will process your request shortly."
                            : "Connection timed out. Please verify your network and attempt re-transmission."
                        }
                    </p>
                    
                    <button onClick={onReset}
                        className="px-8 py-3 border font-mono text-[11px] tracking-[0.2em] uppercase transition-all duration-200 font-black hover:bg-white hover:text-black"
                        style={{ borderColor: isSuccess ? "var(--accent)" : "#ef4444", color: isSuccess ? "var(--accent)" : "#ef4444" }}>
                        $ RETURN_TO_DASHBOARD
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

/* Contact Item Header (The animated title part) */
function ContactHeader({ glitch }) {
    return (
        <h2 className={`font-mono font-black text-3xl md:text-5xl tracking-[0.08em] uppercase transition-all duration-75 ${glitch ? "translate-x-[2px]" : ""}`}
            style={{ color: glitch ? "var(--accent)" : "var(--text-primary)", textShadow: "0 0 24px var(--accent-glow)" }}>
            CONTACT_<span style={{ color: "var(--accent)" }}>ME</span>
            <span className="inline-block w-[10px] h-[18px] animate-pulse ml-2 align-middle" style={{ background: "var(--accent)" }} />
        </h2>
    );
}

/* Contact Section */
export default function Contact() {
    const formRef = useRef();
    const [glitch, setGlitch] = useState(false);
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(null); 
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
            const templateParams = {
                // Name Fallbacks
                from_name: form.name,
                user_name: form.name,
                name: form.name,

                // Email Fallbacks
                from_email: form.email,
                user_email: form.email,
                email: form.email,
                reply_to: form.email, 

                // Phone Fallbacks
                phone: form.phone,
                contact: form.phone, 
                contact_number: form.phone,
                user_phone: form.phone,

                // Content Fallbacks
                subject: form.subject,
                user_subject: form.subject,
                from_subject: form.subject,
                message: form.message,
                user_message: form.message,
                from_message: form.message,
                message_html: form.message, 
                text: form.message,
                to_name: "Prayag Sahu"
            };

            // 1. Send the email to you
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setSubmitted("success");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitted("error");
        } finally {
            setSending(false);
        }
    };

    const resetForm = () => setSubmitted(null);

    return (
        <section
            className="relative py-10 md:py-14 overflow-hidden"
            id='contact'
            style={{ background: "var(--bg)", fontFamily: "'Courier New', Courier, monospace" }}
        >
            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
            {/* Glows */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" style={{ background: "var(--accent)", opacity: 0.02 }} />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "var(--accent-blue)", opacity: 0.02 }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* ── HEADER ── */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_var(--accent-glow)]" style={{ background: "var(--accent)" }} />
                        <span className="font-mono text-[11px] tracking-[0.3em] uppercase font-bold" style={{ color: "var(--accent)" }}>SYSTEM_MODULE / CONTACT</span>
                    </div>
                    <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent)" />
                        <WindowChrome filename="CONTACT_ME.exe" />
                        <div className="px-8 py-8">
                            <ContactHeader glitch={glitch} />
                            <p className="font-mono text-[13px] mt-4 tracking-wider max-w-2xl" style={{ color: "var(--text-muted)" }}>
                                $ init --connection — Open to job opportunities, freelance projects & long-term collaborations.
                            </p>
                            {/* Status pills */}
                            <div className="flex flex-wrap gap-3 mt-5">
                                {[
                                    { label: "STATUS", value: "AVAILABLE", color: "var(--accent)" },
                                    { label: "RESPONSE", value: "< 24 HRS", color: "var(--accent-blue)" },
                                    { label: "MODE", value: "OPEN TO WORK", color: "var(--accent-amber)" },
                                    { label: "LOCATION", value: "JABALPUR, MP", color: "var(--accent-purple)" },
                                ].map(p => (
                                    <div key={p.label} className="border px-4 py-2" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                        <div className="font-mono text-[9px] tracking-[0.2em] font-bold" style={{ color: p.color }}>{p.label}</div>
                                        <div className="font-mono text-lg font-bold" style={{ color: "var(--text-primary)" }}>{p.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">

                    {/* ── LEFT: Contact info + socials ── */}
                    <div className="flex flex-col gap-4">
                        {/* Contact info panel */}
                        <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent)" />
                            <WindowChrome filename="CONTACT_INFO.log" status="ONLINE" statusColor="var(--accent)" />
                            <div className="p-6 space-y-3 relative z-10">
                                <div className="font-mono text-[11px] tracking-[0.2em] mb-4 font-bold uppercase" style={{ color: "var(--accent)" }}>$ cat ./contact/info.txt</div>
                                <ContactItem icon={<Mail size={18} />} label="EMAIL" value="sahuprayag229@gmail.com" href="mailto:sahuprayag229@gmail.com" color="var(--accent)" />
                                <ContactItem icon={<Phone size={18} />} label="PHONE" value="+91 79999 26855" href="tel:+917999926855" color="var(--accent-blue)" />
                                <ContactItem icon={<MapPin size={18} />} label="LOCATION" value="Jabalpur, Madhya Pradesh, India" color="var(--accent-amber)" />
                            </div>
                        </div>
                        {/* Quick message prompt */}
                        <div className="border p-6 relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                            <CornerAccent color="var(--border)" />
                            <div className="font-mono text-[11px] space-y-2 font-bold" style={{ color: "var(--text-dim)" }}>
                                <div><span style={{ color: "var(--text-dim)" }}>$</span> ping prayag-sahu.dev</div>
                                <div><span style={{ color: "var(--text-dim)" }}>PONG:</span> <span style={{ color: "var(--accent)" }}>I am here! Ready to collaborate.</span></div>
                                <div><span style={{ color: "var(--text-dim)" }}>$</span> status --availability<span className="animate-pulse">█</span></div>
                                <div><span style={{ color: "var(--text-dim)" }}>→</span> <span style={{ color: "var(--accent-amber)" }}>OPEN_TO_WORK: TRUE</span></div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Contact form ── */}
                    <div className="border relative overflow-hidden"
                        style={{ borderColor: "var(--border)", background: "var(--surface)", borderTopWidth: 3, borderTopColor: "var(--accent)", borderTopStyle: "solid" }}>
                        <ScanlineOverlay />
                        <CornerAccent color="var(--accent)" />
                        <WindowChrome filename="SEND_MESSAGE.sh" status="READY" statusColor="var(--accent)" />

                        <div className="relative">
                            {/* Status overlay */}
                            {submitted && <StatusOverlay status={submitted} onReset={resetForm} />}

                            <div className="p-6 relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="font-mono text-[11px] tracking-[0.2em] mb-1.5 font-bold uppercase" style={{ color: "var(--accent)" }}>$ compose --new-message</div>
                                        <h3 className="font-mono font-black text-xl tracking-[0.1em] uppercase" style={{ color: "var(--text-primary)" }}>SEND_A_MESSAGE</h3>
                                    </div>
                                    <div className="flex items-center gap-2 border px-4 py-2 font-bold" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                        <Terminal size={14} style={{ color: "var(--accent)" }} />
                                        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--accent)" }}>SECURE_CHANNEL</span>
                                    </div>
                                </div>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <TerminalInput label="Full Name" name="name" placeholder="Your full name"
                                            value={form.name} onChange={handleChange} required accentColor="var(--accent)" />
                                        <TerminalInput label="Email Address" name="email" type="email" placeholder="your@email.com"
                                            value={form.email} onChange={handleChange} required accentColor="var(--accent-blue)" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <TerminalInput label="Phone (Optional)" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                                            value={form.phone} onChange={handleChange} accentColor="var(--accent-amber)" />
                                        <TerminalInput label="Subject" name="subject" placeholder="Job / Freelance / Collab"
                                            value={form.subject} onChange={handleChange} required accentColor="var(--accent-purple)" />
                                    </div>

                                    <TerminalTextarea label="Message" name="message"
                                        value={form.message} onChange={handleChange} required accentColor="var(--accent)" />

                                    {/* Privacy note */}
                                    <div className="border bg-theme-bg px-5 py-3 flex items-center gap-3" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                                        <div className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: "var(--accent)" }} />
                                        <p className="font-mono text-[11px] tracking-wide font-bold" style={{ color: "var(--text-muted)" }}>
                                            Your information is encrypted and will never be shared with third parties.
                                        </p>
                                    </div>

                                    {/* Submit button */}
                                    <button type="submit" disabled={sending}
                                        className="w-full flex items-center justify-center gap-4 border font-mono text-[13px] tracking-[0.2em] uppercase py-4.5 transition-all duration-200 relative overflow-hidden group/btn font-black"
                                        style={{ borderColor: "var(--accent)", color: sending ? "var(--text-dim)" : "var(--accent)", borderWidth: 1 }}
                                        onMouseEnter={e => { if (!sending) { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; } }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = sending ? "var(--text-dim)" : "var(--accent)"; }}>
                                        {/* Animated scan on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none"
                                            style={{ background: "linear-gradient(90deg, transparent 0%, var(--accent-glow) 50%, transparent 100%)" }} />
                                        {sending
                                            ? <><Loader size={18} className="animate-spin" /> TRANSMITTING...</>
                                            : <><Send size={18} /> $ SEND_MESSAGE.exe →</>
                                        }
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}