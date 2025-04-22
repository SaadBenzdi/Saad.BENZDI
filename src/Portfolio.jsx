import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Navigation Component
const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="text-[#9FE870] text-2xl font-bold">Saad BENZDI</div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-white hover:text-[#9FE870] transition-colors">Home</a>
                    <a href="#about" className="text-white hover:text-[#9FE870] transition-colors">About</a>
                    <a href="#service" className="text-white hover:text-[#9FE870] transition-colors">Service</a>
                    <a href="#portfolio" className="text-white hover:text-[#9FE870] transition-colors">Portfolio</a>
                    <a href="#blog" className="text-white hover:text-[#9FE870] transition-colors">Blog</a>
                    <a href="#contact" className="text-white hover:text-[#9FE870] transition-colors">Contact</a>
                    </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-white hover:text-[#9FE870]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#9FE870]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#9FE870]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#9FE870]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                    <button className="bg-[#9FE870] text-black px-6 py-2 rounded-full hover:bg-[#8FD860] transition-colors duration-300">
                        Download CV
                            </button>
                </div>
            </div>
        </div>
    </nav>
);

// Service Card Component
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

// Skill Card with Progress Circle
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

// Info Card with Hover Effect
const InfoCard = ({ title, value }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300"
    >
        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">{title}</h3>
        <p className="text-white font-semibold text-lg">{value}</p>
    </motion.div>
);

// Achievement Card with 3D Effect
const AchievementCard = ({ year, title, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        className="relative bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300"
    >
        <div className="text-6xl font-bold text-gray-600 mb-6 opacity-50">{year}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
        <div className="absolute top-4 right-4">
            <motion.div
                className="w-3 h-3 bg-lime-400 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            />
        </div>
    </motion.div>
);

// Main Component
export default function Portfolio() {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    // Set document title
    useEffect(() => {
        document.title = "Portfolio";
    }, []);

    const projects = [
        {
            title: "Portfolio Growth Big Curve",
            image: "/path/to/project1.jpg",
            description: "Explore creative design solutions for modern businesses"
        },
        {
            title: "Branding And Identity Meeting",
            image: "/path/to/project2.jpg",
            description: "Strategic branding and identity development"
        },
        {
            title: "Unveiling The Power Of Portfolios",
            image: "/path/to/project3.jpg",
            description: "Showcase your work with impact"
        }
    ];

    const services = [
        { 
            title: 'UI/UX Design',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        },
        { 
            title: 'Web Developer',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        },
        { 
            title: 'Graphic Design',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        },
        { 
            title: 'SEO',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        }
    ];

    const skills = [
        { name: 'WORDPRESS', percentage: 98, icon: <img src="/images/skills/wordpress.svg" alt="WordPress" className="w-full h-full" /> },
        { name: 'FIGMA', percentage: 100, icon: <img src="/images/skills/figma.svg" alt="Figma" className="w-full h-full" /> },
        { name: 'LARAVEL', percentage: 97, icon: <img src="/images/skills/laravel.svg" alt="HTML" className="w-full h-full" /> },
        { name: 'TAILWIND', percentage: 90, icon: <img src="/images/skills/tailwind.svg" alt="Bootstrap" className="w-full h-full" /> },
        { name: 'REACT', percentage: 92, icon: <img src="/images/skills/react.svg" alt="Angular" className="w-full h-full" /> },
        { name: 'JAVASCRIPT', percentage: 95, icon: <img src="/images/skills/mysql.svg" alt="JavaScript" className="w-full h-full" /> }
    ];

    const personalInfo = [
        { title: 'EXPERTISE', value: 'UI UX & Web Design' },
        { title: 'BORN IN', value: 'Newyork, USA' },
        { title: 'DATE OF BIRTH', value: '25 May 1994' },
        { title: 'EDUCATION', value: 'Master of Design' }
    ];

    const achievements = [
        { year: '2014', title: 'Best Design', subtitle: 'For kitpapa designing' },
        { year: '2017', title: 'Best Illustration', subtitle: 'For WordPress Developer' }
    ];

    return (
        <div className="min-h-screen bg-[#0B1120] relative overflow-hidden">
            <Navigation />

                {/* Animated Background */}
                <motion.div 
                    className="absolute inset-0 opacity-10"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute inset-0 grid grid-cols-12 gap-4">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div key={i} className="border border-gray-500"></div>
                        ))}
                    </div>
                </motion.div>

                <div className="relative">
                    {/* Hero Section */}
                <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:flex-1 text-left z-10">
                            <h2 className="text-[#9FE870] text-2xl mb-4">Hello, I'm</h2>
                            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4">
                                Youtuber
                            </h1>
                            <div className="text-gray-400 text-xl mb-6">
                                Senior Web Developer From<br />
                                New York
                            </div>
                            <button className="bg-[#9FE870] text-black px-8 py-3 rounded-full hover:bg-[#8FD860] transition-all duration-300">
                                Let's Work
                            </button>
                        </div>

                        <div className="lg:flex-1 relative mt-10 lg:mt-0">
                            {/* Background Circle */}
                            <div className="absolute right-0 w-[500px] h-[500px] bg-[#9FE870] rounded-full opacity-20"></div>
                            
                            {/* Profile Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                                alt="Professional Developer" 
                                className="relative z-10 h-[600px] object-cover"
                            />

                            {/* Social Icons */}
                            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                                {['user', 'cog', 'document', 'briefcase', 'newspaper', 'envelope'].map((icon, index) => (
                                    <motion.button
                                        key={icon}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                            icon === 'envelope' ? 'bg-[#9FE870]' : 'bg-white'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <svg className={`w-5 h-5 ${icon === 'envelope' ? 'text-black' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {icon === 'user' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                                            {icon === 'cog' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                                            {icon === 'document' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                                            {icon === 'briefcase' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M12 6v9m0 0V6a2 2 0 012-2h4a2 2 0 012 2v9m-6 0a2 2 0 002 2h4a2 2 0 002-2m0 0V6" />}
                                            {icon === 'newspaper' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4.5" />}
                                            {icon === 'envelope' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                                        </svg>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {['3K+', '4+', '95%', '24/7'].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-gray-800 p-6 rounded-xl text-center"
                            >
                                <h3 className="text-3xl font-bold text-lime-400 mb-2">{stat}</h3>
                                <p className="text-gray-400">Years Experience</p>
                            </motion.div>
                        ))}
                    </div>

                        {/* Services Section */}
                        <section className="py-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {services.map((service, index) => (
                                    <ServiceCard key={index} {...service} />
                                ))}
                            </div>
                        </section>

                        {/* Skills Section */}
                        <section className="py-20">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                                {skills.map((skill, index) => (
                                    <SkillCard key={index} {...skill} />
                                ))}
                            </div>
                        </section>

                    {/* Latest Projects */}
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">Our Latest Projects</h2>
                            <p className="text-gray-400">Creative portfolios that inspire to good success</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-gray-800 rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-64 bg-gray-700">
                                        <div className="absolute inset-0 bg-lime-400 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <button className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                View Project
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400">{project.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                        {/* Experience Section */}
                        <section className="py-20">
                            <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-12">
                                <div className="lg:max-w-2xl">
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Morbi laoreet mollis magna tristique netus ligula at facilisi, nibh justo pretium mattis iaculis pharetra accumsan cum, dictum odio. Magnis a sagittis.
                                    </p>
                                </div>
                                <motion.div 
                                    className="text-right"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-8xl font-bold text-white mb-2">10</h2>
                                    <p className="text-gray-400 uppercase tracking-widest">YEARS OF EXPERIENCE</p>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {personalInfo.map((info, index) => (
                                    <InfoCard key={index} {...info} />
                                ))}
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section className="py-20">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl font-bold text-white mb-16 text-center"
                            >
                                ACHIEVEMENT
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {achievements.map((achievement, index) => (
                                    <AchievementCard key={index} {...achievement} />
                                ))}
                            </div>
                        </section>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-lime-400 rounded-xl p-12 text-center mb-20"
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">Explore The Art Of Portfolios</h2>
                        <div className="flex justify-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300">
                                Get Free Estimate
                            </button>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 