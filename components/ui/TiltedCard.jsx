// 'use client';

// import { motion } from 'motion/react';
// import Image from 'next/image';

// export default function TiltedCard({
//     imageSrc,
//     altText,
//     captionText,
//     containerHeight = '500px',
//     containerWidth = '400px',
//     rotateAmplitude = 12,
//     scaleOnHover = 1.05,
//     showMobileWarning = false,
//     showTooltip = false,
//     displayOverlayContent = false,
//     overlayContent,
// }) {
//     return (
//         <motion.div
//             className="relative rounded-2xl overflow-hidden shadow-2xl "
//             style={{
//                 height: containerHeight,
//                 width: containerWidth,
//             }}
//             whileHover={{
//                 rotateX: -rotateAmplitude,
//                 rotateY: rotateAmplitude,
//                 scale: scaleOnHover,
//             }}
//             transition={{
//                 type: 'spring',
//                 stiffness: 200,
//                 damping: 15,
//             }}
//         >
//             {/* IMAGE WRAPPER */}
//             <div className="relative w-full h-full flex items-center justify-center p-4">
//                 <Image
//                     src={imageSrc}
//                     alt={altText}
//                     fill
//                     className="object-contain"
//                     priority
//                 />
//             </div>

//             {/* OVERLAY CONTENT */}
//             {displayOverlayContent && (
//                 <div className="absolute inset-0 flex items-end p-4">
//                     {overlayContent}
//                 </div>
//             )}

//             {/* TOOLTIP */}
//             {showTooltip && (
//                 <div className="absolute bottom-2 right-2 text-xs text-white/70 bg-black/70 px-2 py-1 rounded">
//                     {captionText}
//                 </div>
//             )}

//             {/* MOBILE WARNING */}
//             {showMobileWarning && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-sm">
//                     Tilt disabled on mobile
//                 </div>
//             )}
//         </motion.div>
//     );
// }


'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    imageSrc,
    altText = 'Tilted card image',
    captionText = '',
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = '300px',
    imageWidth = '300px',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(0, springValues);
    const rotateY = useSpring(0, springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0, springValues);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            style={{ height: containerHeight, width: containerWidth }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center perspective-[800px]"
        >
            {/* MOBILE WARNING */}
            {showMobileWarning && (
                <div className="absolute top-4 text-center text-sm text-white bg-black/70 px-3 py-1 rounded sm:hidden">
                    This effect is best viewed on desktop
                </div>
            )}

            {/* TILTED CARD */}
            <motion.div
                className="relative rounded-2xl will-change-transform"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* IMAGE */}
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute inset-0 w-full h-full rounded-2xl object-cover"
                    style={{
                        transform: 'translateZ(0)',
                    }}
                />

                {/* OVERLAY */}
                {displayOverlayContent && overlayContent && (
                    <motion.div
                        className="absolute inset-0 z-10 flex items-end p-4"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {/* TOOLTIP / CAPTION */}
            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute z-20 rounded bg-white px-2 py-1 text-[10px] text-gray-800 hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
