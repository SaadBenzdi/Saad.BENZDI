import React from 'react';
import { motion } from 'framer-motion';

const ContactBanner = () => {
    return (
        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 opacity-80">
            <div className="max-w-7xl mx-auto">
            <motion.div 
                className="relative float-right mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <a href="#" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-[#9FE870] hover:text-black transition-all group">
                    View All Blogs
                    <span className="w-8 h-8 bg-[#9FE870] rounded-full flex items-center justify-center text-black group-hover:bg-white group-hover:animate-[wiggle_1s_ease-in-out_infinite]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        <style jsx>{`
                            @keyframes wiggle {
                                0%, 100% { transform: translateX(0); }
                                25% { transform: translateX(2px); }
                                75% { transform: translateX(-2px); }
                            }
                        `}</style>
                    </span>
                </a>
            </motion.div>
            {/* <div className="clear-both"></div> */}
                {/* Header */}
                <div className="mb-16">
                    <motion.h2 
                        className="text-5xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Let's <span className="text-[#9FE870]">Connect</span> there
                    </motion.h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#9FE870] to-[#7ac84e] rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/10">
                                <img src="images/ui/logoSB.png" alt="Logo" className="w-11 h-11 object-cover transform hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white tracking-tight">Saad BENZDI</span>
                                <span className="text-sm text-[#9FE870]/80 font-medium">Web Developer & Designer</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
                                    href: "https://www.linkedin.com/in/saad-benzdi-0a81922b5/",
                                    hoverColor: "hover:text-[#0a66c2]"
                                },
                                {
                                    icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
                                    href: "https://github.com/SaadBenzdi",
                                    hoverColor: "hover:text-[#3b267b]"
                                },
                                {
                                    icon: <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />,
                                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=saad.benz.2020@gmail.com&su=Contact Saad BENZDI&body=Bonjour, je souhaite vous contacter pour un projet.",
                                    hoverColor: "hover:text-[#c43b3b]"
                                },
                                {
                                    icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />,
                                    href: "https://wa.me/212694895951?text=Bonjour, je souhaite vous contacter pour un projet.",
                                    hoverColor: "hover:text-[#41a603]"
                                }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#9FE870] transition-colors group ${item.hoverColor}`}
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white group-hover:text-black transition-colors">
                                        {item.icon}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-[#9FE870] mb-6">Navigation</h3>
                        <ul className="space-y-3 text-gray-300">
                            {['Home', 'Services', 'About', 'Projects', 'Blogs', 'FAQs'].map((item, index) => (
                                <motion.li 
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <a href="#" className="hover:text-[#9FE870] transition-colors">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold text-[#9FE870] mb-6">Contact</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>+212 694-895951</li>
                            <li>www.saad.benzdi.com</li>
                            <li>saad.benz.2020@gmail.com</li>
                            <li>Casablanca<br />Morocco </li>
                        </ul>
                    </motion.div>

                    {/* Get the latest information */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-[#9FE870] mb-6">Get the latest information</h3>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#9FE870] rounded-lg flex items-center justify-center hover:bg-[#8FD860] transition-colors">
                                <span className="text-black flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div 
                    className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-gray-400">
                        Copyright © 2025 <span className="text-[#9FE870]">Saad BENZDI</span>. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-[#9FE870]">User Terms & Conditions</a>
                        <span className="text-gray-400">|</span>
                        <a href="#" className="text-gray-400 hover:text-[#9FE870]">Privacy Policy</a>
                    </div>
                </motion.div>
            </div>

            {/* View All Blogs Button */}
            {/* <motion.div 
                className="fixed top-8 right-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <a href="#" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-[#9FE870] hover:text-black transition-all group">
                    View All Blogs
                    <span className="w-8 h-8 bg-[#9FE870] rounded-full flex items-center justify-center text-black group-hover:bg-white">→</span>
                </a>
            </motion.div> */}
            
        </section>
    );
};

export default ContactBanner; 