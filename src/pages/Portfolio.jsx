import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Layout Components
import Navigation from '../components/layout/Navigation';

// Section Components
import Hero from '../components/sections/Hero';
import Brands from '../components/sections/Brands';
import ContactBanner from '../components/sections/ContactBanner';

// UI Components
import ServiceCard from '../components/ui/ServiceCard';
import SkillCard from '../components/ui/SkillCard';
import Projects from '../components/sections/Projects';

const Portfolio = () => {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    useEffect(() => {
        document.title = "Saad BENZDI";
    }, []);

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
        { name: 'WORDPRESS', percentage: 98, icon: <img src="/images/skills/wordpress.svg" alt="wordpress" className="w-full h-full" /> },
        { name: 'FIGMA', percentage: 100, icon: <img src="/images/skills/figma.svg" alt="Figma" className="w-full h-full" /> },
        { name: 'LARAVEL', percentage: 97, icon: <img src="/images/skills/laravel.svg" alt="Laravel" className="w-full h-full" /> },
        { name: 'TAILWIND', percentage: 90, icon: <img src="/images/skills/tailwind.svg" alt="Tailwind" className="w-full h-full" /> },
        { name: 'REACT', percentage: 92, icon: <img src="/images/skills/react.svg" alt="React" className="w-full h-full" /> },
        { name: 'MYSQL', percentage: 95, icon: <img src="/images/skills/mysql.svg" alt="Javascript" className="w-full h-full" /> }
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
                <Hero />
                <Brands />

                {/* Services Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </section>
                {/* Projects Section */}
                <Projects />


                {/* Contact Banner Section */}
                <div className="max-w-7xl mx-auto">
                    <ContactBanner />
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 