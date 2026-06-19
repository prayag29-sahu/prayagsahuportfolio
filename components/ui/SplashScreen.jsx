'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SplashScreen({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([]);
    const [phase, setPhase] = useState('loading'); // loading, ready, exit

    const terminalLogs = [
        "INITIALIZING SYSTEM KERNEL...",
        "LOADING MERN STACK MODULES...",
        "CONNECTING TO DATABASE_CLUSTERS...",
        "FETCHING ASSETS FROM EDGE_NODES...",
        "AUTHENTICATING DEVELOPER: PRAYAG_SAHU",
        "OPTIMIZING REACT_DOM_ARCHITECTURE...",
        "SYSTEM_READY: 100% OPERATIONAL",
    ];

    useEffect(() => {
        // Progress bar simulation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 200);

        // Logs simulation
        let logIndex = 0;
        const logInterval = setInterval(() => {
            if (logIndex < terminalLogs.length) {
                setLogs(prev => [...prev, terminalLogs[logIndex]]);
                logIndex++;
            } else {
                clearInterval(logInterval);
            }
        }, 400);

        // Completion logic
        const timer = setTimeout(() => {
            setPhase('ready');
            setTimeout(() => {
                setPhase('exit');
                setTimeout(() => {
                    onFinish();
                }, 800);
            }, 1000);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearInterval(logInterval);
            clearTimeout(timer);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010409] font-mono overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10" style={{ background: "var(--accent)" }} />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Main Text */}
                <div className="mb-2 text-center relative px-6 max-w-[95vw]">
                    <motion.h1 
                        initial={{ letterSpacing: "0.1em", opacity: 0 }}
                        animate={{ letterSpacing: "var(--letter-spacing, 0.5em)", opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-[0.1em] sm:tracking-[0.3em] md:tracking-[0.5em] mb-4 leading-tight"
                        style={{ 
                            textShadow: "0 0 30px rgba(255,255,255,0.2)",
                            wordWrap: "break-word"
                        }}
                    >
                        PRAYAG <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--accent)] to-white">SAHU</span>
                    </motion.h1>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="h-[1px] w-32 md:w-64 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto"
                    />
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-[10px] md:text-[14px] text-[var(--accent)] tracking-[0.2em] md:tracking-[0.3em] uppercase mt-4 font-bold"
                    >
                        WELCOME TO MY PORTFOLIO
                    </motion.p>
                </div>

                {/* Progress Section */}
                <div className="mt-16 w-64 md:w-80 flex flex-col items-center">
                    <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-[var(--accent)]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                            style={{ boxShadow: "0 0 10px var(--accent)" }}
                        />
                    </div>
                    
                    <div className="mt-4 flex justify-between w-full text-[9px] tracking-widest text-white/40 uppercase">
                        <span>SYSTEM_INITIALIZING</span>
                        <span>{progress}%</span>
                    </div>

                    {/* Terminal Logs */}
                    <div className="mt-8 h-20 w-full overflow-hidden text-center">
                        <AnimatePresence mode="popLayout">
                            {logs.slice(-1).map((log, i) => (
                                <motion.div 
                                    key={log}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-[10px] text-[var(--accent)]/60 tracking-widest uppercase font-bold"
                                >
                                    {log}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* Scanline & Glitch Overlays */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.05]"
                style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,white 2px,white 4px)" }} />
        </div>
    );
}
