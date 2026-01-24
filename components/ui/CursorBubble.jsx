'use client';

import { useEffect } from 'react';

export default function CursorBubble() {
    useEffect(() => {
        const bubble = document.getElementById('cursor-bubble');

        let mouseX = 0;
        let mouseY = 0;
        let bubbleX = 0;
        let bubbleY = 0;

        // how slow bubble follows (LOWER = MORE DISTANCE)
        const speed = 0.80;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            bubbleX += (mouseX - bubbleX) * speed;
            bubbleY += (mouseY - bubbleY) * speed;

            bubble.style.transform = `translate(${bubbleX}px, ${bubbleY}px)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return null;
}
