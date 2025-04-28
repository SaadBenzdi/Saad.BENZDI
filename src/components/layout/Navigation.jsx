import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-1">
                <motion.div 
                    className="text-[#9FE870] text-2xl font-bold flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img 
                        src="images/ui/logoSB.png" 
                        alt="Logo" 
                        className="w-14 h-14 filter drop-shadow-[0_0_8px_rgba(159,232,112,0.6)]" 
                        animate={{ 
                            rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{ 
                            repeat: Infinity, 
                            repeatType: "loop", 
                            duration: 6,
                            ease: "easeInOut" 
                        }}
                    />
                    <span className="ml-2 bg-gradient-to-r from-[#9FE870] to-[#63E6BE] text-transparent bg-clip-text"></span>
                </motion.div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-white hover:text-[#9FE870] transition-colors">Home</a>
                    <a href="#service" className="text-white hover:text-[#9FE870] transition-colors">Service</a>
                    <a href="#about" className="text-white hover:text-[#9FE870] transition-colors">About</a>
                    <a href="#portfolio" className="text-white hover:text-[#9FE870] transition-colors">Project</a>
                    <a href="#blog" className="text-white hover:text-[#9FE870] transition-colors">Blog</a>
                    {/* <a href="#contact" className="text-white hover:text-[#9FE870] transition-colors">Contact</a> */}
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-4">
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
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className={`text-white ${social.hoverColor} transition-colors`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    {social.icon}
                                </svg>
                            </motion.a>
                        ))}
                    </div>
                    <motion.a
                        href="https://drive.google.com/file/d/1jjC1Ht6kTQAJz1nR5NnTJ84z_1NuXJ8A/view?usp=drive_link"
                        className="bg-[#9FE870] text-black px-6 py-2 rounded-full hover:bg-[#8FD860] transition-colors duration-300 inline-block text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                    </motion.a>
                </div>
            </div>
        </div>
    </nav>
);

export default Navigation; 