"use client";

import { ReactNode } from "react";

interface PlainSectionProps {
    backgroundImage?: string;
    videoSrc?: string;
    height?: string;
    overlay?: boolean;
    children: ReactNode;
}

/**
 * Previously a parallax section — now a clean, lightweight wrapper.
 * backgroundAttachment: "fixed" (parallax) has been removed for performance.
 */
export default function ParallaxSection({
    children,
}: PlainSectionProps) {
    return (
        <div className="relative w-full">
            {children}
        </div>
    );
}
