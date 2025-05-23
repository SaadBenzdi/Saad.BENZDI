import React from 'react';
import { motion } from 'framer-motion';

const SocialIcon = ({ icon, isActive }) => (
    <motion.button
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isActive ? 'bg-[#9FE870]' : 'bg-white'
        }`}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
    >
        <svg className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
        </svg>
    </motion.button>
);

const Hero = () => {
    const socialIcons = [
        {
            name: 'user',
            path: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        },
        {
            name: 'cog',
            path: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        },
        {
            name: 'document',
            path: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        },
        {
            name: 'briefcase',
            path: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M12 6v9m0 0V6a2 2 0 012-2h4a2 2 0 012 2v9m-6 0a2 2 0 002 2h4a2 2 0 002-2m0 0V6" />
        },
        {
            name: 'newspaper',
            path: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4.5" />
        },
        {
            name: 'envelope',
            path: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        }
    ];

    return (
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
                <motion.div 
                    className="lg:flex-1 text-left z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className="text-[#9FE870] text-2xl mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.h2>
                    <motion.h1 
                        className="text-6xl lg:text-7xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Saad BENZDI
                    </motion.h1>
                    <motion.div 
                        className="text-gray-400 text-xl mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Web Developer From<br />
                        Casablanca, Morocco
                    </motion.div>
                    <motion.button 
                        className="bg-[#9FE870] text-black px-8 py-3 rounded-full hover:bg-[#8FD860] transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's Work
                    </motion.button>
                </motion.div>

                <div className="lg:flex-1 relative mt-10 lg:mt-0">
                    {/* Circular frame with profile image */}
                    <div className="relative mx-auto w-[400px] h-[400px]">
                        {/* Background Circle */}
                        <div className="absolute inset-0 w-full h-full bg-[#9FE870]/20 rounded-full"></div>
                        
                        {/* Border Circle */}
                        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-[#9FE870] z-10"></div>
                        
                        {/* Profile Image */}
                        <img 
                            src="images/ui/profile.png" 
                            alt="Professional Developer" 
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-full z-0"
                        />
                        
                        {/* Text at bottom of circle */}
                        <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-white tracking-widest z-20 transform translate-y-[90%]">
                            <p className="curved-text">DEVELOPPEUR WEB</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        {socialIcons.map((icon, index) => (
                            <SocialIcon 
                                key={icon.name}
                                icon={icon.path}
                                isActive={icon.name === 'envelope'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 