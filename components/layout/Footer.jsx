'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, Terminal, ArrowUpRight } from 'lucide-react';

/* Moving lines for a retro screen look */
function ScanlineOverlay() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 scanline-overlay"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,var(--scanline-color) 2px,var(--scanline-color) 4px)" }} />
    );
}

/* Corner designs */
function CornerAccent({ color }) {
    const c = color || "var(--accent)";
    return (<>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: c }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: c }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: c }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: c }} />
    </>);
}

/* Link part for the footer menu */
function FooterLink({ href, label, accent, size = "1.2kb" }) {
    const ac = accent || "var(--accent)";
    const [hovered, setHovered] = useState(false);
    return (
        <li>
            <a
                href={href}
                className="flex items-center gap-2 py-1 group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="font-mono text-[11px]" style={{ color: "var(--border)" }}>
                    {hovered ? "▸" : "·"}
                </span>
                <span className="font-mono text-[13px] tracking-[0.02em] transition-colors duration-200"
                    style={{ color: hovered ? ac : "var(--text-muted)" }}>
                    {label}
                </span>
                <span className="font-mono text-[9px] ml-auto opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: ac }}>
                    [ {size} ]
                </span>
            </a>
        </li>
    );
}

/* Social Media Action Buttons */
function SocialBtn({ icon, href, label, color }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border px-3 py-2 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 relative overflow-hidden"
            style={{
                color: hovered ? "var(--bg)" : color,
                borderColor: hovered ? color : "var(--border)",
                background: hovered ? color : "transparent",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {icon}
            <span className="font-bold">{label}</span>
        </a>
    );
}

/* Blinking online status dot */
function StatusDot({ color }) {
    return <div className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ background: color || "var(--accent)" }} />;
}

/* 
   Footer Section 
   I organized this into columns to show my info, 
   menu links, and a cool computer-style log.
*/
export default function Footer() {
    const [glitch, setGlitch] = useState(false);
    const year = new Date().getFullYear();

    useEffect(() => {
        const t = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 120);
        }, 9000);
        return () => clearInterval(t);
    }, []);

    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: "var(--surface)",
                fontFamily: "'Courier New', Courier, monospace",
                borderTop: "1px solid var(--border)",
            }}
        >
            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)",
                    backgroundSize: "40px 40px",
                }} />
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 rounded-full blur-[160px] pointer-events-none"
                style={{ background: "var(--accent)", opacity: 0.03 }} />

            {/* Top green gradient line */}
            <div className="h-[2px] w-full"
                style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-5">

                {/* Main Grid: Organizes content into three clear sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">

                    {/* Brand Panel: Shows my profile details */}
                    <div className="lg:col-span-5">
                        <div className="border relative overflow-hidden h-full" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent)" />

                            {/* Window chrome */}
                            <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <span className="font-mono text-[11px] tracking-[0.18em] font-bold" style={{ color: "var(--text-muted)" }}>PROFILE.txt</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StatusDot />
                                    <span className="font-mono text-[10px] border px-2 py-0.5 tracking-widest font-bold"
                                        style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>ONLINE</span>
                                </div>
                            </div>

                            <div className="p-5 relative z-10">
                                {/* Name */}
                                <div
                                    className={`font-mono font-black text-3xl md:text-4xl tracking-[0.05em] uppercase mb-1 transition-all duration-75 ${glitch ? "translate-x-[2px]" : ""}`}
                                    style={{
                                        color: glitch ? "var(--accent)" : "var(--text-primary)",
                                        textShadow: "0 0 20px var(--accent-glow)",
                                    }}
                                >
                                    PRAYAG_<span style={{ color: "var(--accent)" }}>SAHU</span>
                                    <span className="inline-block w-[10px] h-[20px] animate-pulse ml-1.5 align-middle" style={{ background: "var(--accent)" }} />
                                </div>
                                <div className="font-mono text-[11px] tracking-[0.2em] mb-4 font-bold" style={{ color: "var(--accent)" }}>
                                    SOFTWARE ENGINEER · CREATIVE DEVELOPER
                                </div>

                                {/* Bio */}
                                <div className="border p-5 mb-5 relative" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
                                    <CornerAccent color="var(--border)" />
                                    <div className="font-mono text-[10px] tracking-[0.2em] mb-3 font-bold uppercase" style={{ color: "var(--accent)" }}>README.md</div>
                                    <p className="font-mono text-[14px] leading-[1.8] tracking-wide font-bold" style={{ color: "var(--text-muted)" }}>
                                        Software Engineer specializing in scalable web applications,
                                        backend systems and modern UI/UX. Building
                                        <span className="font-black" style={{ color: "var(--accent)" }}> production-ready</span> solutions.
                                    </p>
                                </div>

                                {/* Status chips */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {[
                                        { l: "STATUS", v: "AVAILABLE", c: "var(--accent)" },
                                        { l: "BASE", v: "JABALPUR, MP", c: "var(--accent-blue)" },
                                        { l: "MODE", v: "OPEN TO WORK", c: "var(--accent-amber)" },
                                    ].map(s => (
                                        <div key={s.l} className="border px-4 py-2" style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}>
                                            <div className="font-mono text-[9px] tracking-[0.15em] font-bold" style={{ color: s.c }}>{s.l}</div>
                                            <div className="font-mono text-[12px] font-black" style={{ color: "var(--text-primary)" }}>{s.v}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social buttons */}
                                <div className="grid grid-cols-2 gap-2.5">
                                    <SocialBtn icon={<Github size={14} />} href="https://github.com/prayag29-sahu" label="GITHUB" color="var(--accent)" />
                                    <SocialBtn icon={<Linkedin size={14} />} href="https://linkedin.com/in/prayag-sahu29" label="LINKEDIN" color="var(--accent-blue)" />
                                    <SocialBtn icon={<Twitter size={14} />} href="https://twitter.com" label="TWITTER" color="var(--accent-purple)" />
                                    <SocialBtn icon={<Mail size={14} />} href="mailto:sahuprayag229@gmail.com" label="EMAIL" color="var(--accent-amber)" />
                                </div>

                                {/* Resume & CV buttons */}
                                <div className="grid grid-cols-2 gap-2.5 mt-1">
                                    <SocialBtn
                                        icon={<ArrowUpRight size={14} />}
                                        href="https://drive.google.com/file/d/1IOtLumQeqg8bRSsVcXHiHkJuMdWy2I8C/view?usp=drive_link"
                                        label="RESUME"
                                        color="var(--accent)"
                                    />
                                    <SocialBtn
                                        icon={<ArrowUpRight size={14} />}
                                        href="https://drive.google.com/file/d/1TbHC8ykLAikD5oM3o8XLrcF0F8sdGlLV/view?usp=drive_link"
                                        label="CV"
                                        color="var(--accent-purple)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Column: Quick links to other pages */}
                    <div className="lg:col-span-4 flex flex-col gap-4">

                        {/* Portfolio links */}
                        <div className="border relative overflow-hidden flex-1" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent-blue)" />
                            <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                                <StatusDot color="var(--accent-blue)" />
                                <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: "var(--text-muted)" }}>Portfolio</span>
                            </div>
                            <div className="p-5 relative z-10">
                                <div className="font-mono text-[10px] tracking-[0.2em] mb-3 font-bold uppercase" style={{ color: "var(--accent-blue)" }}>$ ls ./portfolio/</div>
                                <ul className="space-y-0.5">
                                    <FooterLink href="#projects" label="Projects" accent="var(--accent-blue)" size="4.8kb" />
                                    <FooterLink href="#achievements" label="Achievements" accent="var(--accent-blue)" size="2.1kb" />
                                    <FooterLink href="#education" label="Education" accent="var(--accent-blue)" size="1.9kb" />
                                </ul>
                            </div>
                        </div>

                        {/* Connect links */}
                        <div className="border relative overflow-hidden flex-1" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent-amber)" />
                            <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                                <StatusDot color="var(--accent-amber)" />
                                <span className="font-mono text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: "var(--text-muted)" }}>Connect</span>
                            </div>
                            <div className="p-5 relative z-10">
                                <div className="font-mono text-[10px] tracking-[0.2em] mb-3 font-bold uppercase" style={{ color: "var(--accent-amber)" }}>$ ls ./connect/</div>
                                <ul className="space-y-0.5">
                                    <FooterLink href="#contact" label="Contact Me" accent="var(--accent-amber)" size="0.5kb" />
                                    <FooterLink href="#about" label="About" accent="var(--accent-amber)" size="1.1kb" />
                                    <FooterLink href="https://drive.google.com/file/d/1IOtLumQeqg8bRSsVcXHiHkJuMdWy2I8C/view?usp=drive_link" label="Resume" accent="var(--accent-amber)" size="2.4mb" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Computer Dashboard: Shows my info in a computer style */}
                    <div className="lg:col-span-3">
                        <div className="border relative overflow-hidden h-full" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
                            <ScanlineOverlay />
                            <CornerAccent color="var(--accent-purple)" />
                            <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <span className="font-mono text-[11px] tracking-[0.18em] font-bold" style={{ color: "var(--text-muted)" }}>TERMINAL.sh</span>
                                </div>
                            </div>

                            <div className="p-5 relative z-10 font-mono text-[13px] space-y-3 font-bold">
                                {[
                                    { cmd: "$ whoami", out: "prayag-sahu", outColor: "var(--accent)" },
                                    { cmd: "$ location", out: "Jabalpur, MP, IN", outColor: "var(--accent-blue)" },
                                    { cmd: "$ role", out: "Creative Engineer", outColor: "var(--text-muted)" },
                                    { cmd: "$ email", out: "sahuprayag229@...", outColor: "var(--accent-purple)" },
                                    { cmd: "$ commits", out: "5,095+ this year", outColor: "var(--accent-blue)" },
                                ].map((line, i) => (
                                    <div key={i}>
                                        <div className="text-[10px]" style={{ color: "var(--text-dim)" }}>{line.cmd}</div>
                                        <div className="text-[12px]" style={{ color: line.outColor }}>→ {line.out}</div>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2 pt-1" style={{ color: "var(--accent)" }}>
                                    <span>$</span>
                                    <span className="animate-pulse">█</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="p-5 border-t relative z-10" style={{ borderColor: "var(--border)" }}>
                                <a
                                    href="mailto:sahuprayag229@gmail.com"
                                    className="flex items-center justify-center gap-2.5 border font-mono text-[12px] tracking-[0.18em] uppercase py-4 transition-all duration-200 font-bold"
                                    style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
                                >
                                    <Terminal size={14} />
                                    $ GET_IN_TOUCH →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright and version info */}
                <div className="border relative overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
                    <ScanlineOverlay />
                    <CornerAccent color="var(--border)" />
                    <div className="h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }} />

                    <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <StatusDot />
                            <span className="font-mono text-[12px] tracking-wide font-bold" style={{ color: "var(--text-muted)" }}>
                                © {year}{" "}
                                <span style={{ color: "var(--text-primary)", fontWeight: 900 }}>PRAYAG_SAHU</span>
                                {" "}— Built with passion & clean architecture.
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 font-mono text-[11px] font-bold" style={{ color: "var(--text-dim)" }}>
                                <span>$</span>
                                <span style={{ color: "var(--text-muted)" }}>footer --v1.0 _</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <StatusDot />
                                <span className="font-mono text-[11px] tracking-[0.2em] font-bold" style={{ color: "var(--accent)" }}>ALL_SYSTEMS_ONLINE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}