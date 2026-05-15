'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/ui/SplashScreen';
import { AnimatePresence, motion } from 'motion/react';

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);

    const handleFinish = () => {
        setLoading(false);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <SplashScreen key="splash" onFinish={handleFinish} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
