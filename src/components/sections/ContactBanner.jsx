import React from 'react';
import { motion } from 'framer-motion';

const ContactBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#9FE870] rounded-xl p-12 text-center mb-20 mx-4 sm:mx-6 lg:mx-8"
        >
            <h2 className="text-3xl font-bold text-black mb-8">Explore The Art Of Portfolios</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
                />
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 whitespace-nowrap">
                    Get Free Estimate
                </button>
            </div>
        </motion.div>
    );
};

export default ContactBanner; 