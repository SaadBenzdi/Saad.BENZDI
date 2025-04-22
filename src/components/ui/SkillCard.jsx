import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, name, percentage }) => {
    const circleRef = useRef(null);
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (circleRef.current) {
            observer.observe(circleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm group hover:bg-gray-800/80 transition-all duration-300"
        >
            <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full transform -rotate-90" ref={circleRef}>
                        <circle
                            cx="48"
                            cy="48"
                            r={radius}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                            fill="none"
                        />
                        <motion.circle
                            cx="48"
                            cy="48"
                            r={radius}
                            stroke="#84cc16"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: isVisible ? circumference - (percentage / 100) * circumference : circumference }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gray-900/50 p-3">
                            {icon}
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{percentage}%</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">{name}</div>
            </div>
        </motion.div>
    );
};

export default SkillCard; 