import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title }) => (
    <motion.div
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(32, 32, 32, 0.8)' }}
        className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 group cursor-pointer"
    >
        <div className="text-white mb-6 transform group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
        <motion.div
            className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.2 }}
        >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </motion.div>
    </motion.div>
);

export default ServiceCard; 