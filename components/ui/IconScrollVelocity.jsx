'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from 'motion/react';

function useElementWidth(ref) {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) setWidth(ref.current.offsetWidth);
        }
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return width;
}

export default function IconScrollVelocity({
    icons = [],
    velocity = 80,
    numCopies = 6,
}) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(
        smoothVelocity,
        [0, 1000],
        [0, 4],
        { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
        const range = max - min;
        return ((((v - min) % range) + range) % range) + min;
    }

    const x = useTransform(baseX, (v) =>
        copyWidth ? `${wrap(-copyWidth, 0, v)}px` : '0px'
    );

    const direction = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = direction.current * velocity * (delta / 1000);

        if (velocityFactor.get() < 0) direction.current = -1;
        else if (velocityFactor.get() > 0) direction.current = 1;

        moveBy += direction.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="flex gap-6"
                style={{ x }}
            >
                {[...Array(numCopies)].map((_, i) => (
                    <div
                        key={i}
                        ref={i === 0 ? copyRef : null}
                        className="flex gap-6"
                    >
                        {icons.map((IconEl, idx) => (
                            <div
                                key={idx}
                                className="w-14 h-14 rounded-full bg-black/80
                backdrop-blur-xl border border-white/10
                flex items-center justify-center shadow-lg"
                            >
                                {IconEl}
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
