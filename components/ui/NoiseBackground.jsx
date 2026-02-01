'use client';

import { useEffect, useRef } from 'react';

export default function NoiseBackground({ children }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawNoise();
        };

        const drawNoise = () => {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const buffer = imageData.data;

            for (let i = 0; i < buffer.length; i += 4) {
                const shade = Math.random() * 255;
                buffer[i] = shade;
                buffer[i + 1] = shade;
                buffer[i + 2] = shade;
                buffer[i + 3] = 20; // opacity (KEY)
            }

            ctx.putImageData(imageData, 0, 0);
        };

        resize();
        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">
            {/* Grain Canvas */}
            <canvas
                ref={canvasRef}
                className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-overlay"
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
