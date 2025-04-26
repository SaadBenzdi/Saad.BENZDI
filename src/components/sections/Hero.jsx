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
        <div className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-700'}`}>
            {icon}
        </div>
    </motion.button>
);

const Hero = () => {
    const socialIcons = [
        {
            name: 'user',
            path: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-full h-full">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
            </svg>
        },
        {
            name: 'cog',
            path: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
        },
        {
            name: 'document',
            path: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-full h-full">
                <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 192 0 0-64L96 256zM240 416l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
            </svg>
        },
        {
            name: 'briefcase',
            path: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-full h-full">
                <path d="M256 0l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM64 64l128 0 0 48c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-48 128 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64zM176 437.3c0 5.9 4.8 10.7 10.7 10.7l202.7 0c5.9 0 10.7-4.8 10.7-10.7c0-29.5-23.9-53.3-53.3-53.3l-117.3 0c-29.5 0-53.3 23.9-53.3 53.3zM288 352a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
            </svg>
        },
        {
            name: 'newspaper',
            path: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
            </svg>
        },
        {
            name: 'envelope',
            path: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
            </svg>
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
                        <span className="text-3xl font-bold">Web Developer</span>
                        <br />
                        From Casablanca, Morocco
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
                            {/* <p className="curved-text">DEVELOPPEUR WEB</p> */}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
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