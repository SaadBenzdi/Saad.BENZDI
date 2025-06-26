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
import EducationExperience from '../components/sections/EducationExperience';

const Portfolio = () => {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    useEffect(() => {
        document.title = "Saad BENZDI";
    }, []);

    const services = [
        { 
            title: 'Web Developer',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        },
        { 
            title: 'UI/UX Design',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        },
        { 
            title: 'Brand identity',
            icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
          
        },
        { 
            title: 'Illustration',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-10 h-10">
                <path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z"/>
            </svg>
        }
    ];

    const skills = [
        { name: 'LARAVEL', percentage: 97, icon: <img src="/images/skills/laravel.svg" alt="Laravel" className="w-full h-full" /> },
        { name: 'REACT', percentage: 92, icon: <img src="/images/skills/react.svg" alt="React" className="w-full h-full" /> },
        { name: 'FIGMA', percentage: 100, icon: <img src="/images/skills/figma.svg" alt="Figma" className="w-full h-full" /> },
        { name: 'TAILWIND', percentage: 90, icon: <img src="/images/skills/tailwind.svg" alt="Tailwind" className="w-full h-full" /> },
        { name: 'WORDPRESS', percentage: 98, icon: <img src="/images/skills/wordpress.svg" alt="wordpress" className="w-full h-full" /> },
        { name: 'MYSQL', percentage: 95, icon: <img src="/images/skills/mysql2.svg" alt="Mysql" className="w-full h-full" /> },
        { name: 'MONGODB', percentage: 95, icon: <img src="/images/skills/mongodb.svg" alt="Mongodb" className="w-full h-full" /> },
        { name: 'PHP', percentage: 95, icon: <img src="/images/skills/php.svg" alt="PHP" className="w-full h-full" /> },
        { name: 'JAVASCRIPT', percentage: 95, icon: <img src="/images/skills/js.svg" alt="JavaScript" className="w-full h-full" /> },
        { name: 'PYTHON', percentage: 95, icon: <img src="/images/skills/python.svg" alt="Python" className="w-full h-full" /> },
        { name: 'BOOTSTRAP', percentage: 95, icon: <img src="/images/skills/bootstrap.svg" alt="Bootstrap" className="w-full h-full" /> },
        { name: 'GIT', percentage: 95, icon: <img src="/images/skills/git.svg" alt="Git" className="w-full h-full" /> },
        { name: 'UML', percentage: 95, icon: <img src="/images/skills/uml.svg" alt="UML" className="w-full h-full" /> },
        { name: 'Adobe Illustrator', percentage: 95, icon: <img src="/images/skills/adobe-illustrator.svg" alt="Adobe Illustrator" className="w-full h-full" /> },
        { name: 'Adobe Premiere pro', percentage: 95, icon: <img src="/images/skills/adobe-premiere.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'JQUERY', percentage: 95, icon: <img src="/images/skills/jquery.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'NODEJS', percentage: 95, icon: <img src="/images/skills/nodejs.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'AJAX', percentage: 95, icon: <img src="/images/skills/.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'DOCKER', percentage: 95, icon: <img src="/images/skills/docker.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'COMPOSER', percentage: 95, icon: <img src="/images/skills/composer.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'ESPRESS', percentage: 95, icon: <img src="/images/skills/express.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'SASS', percentage: 95, icon: <img src="/images/skills/sass.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'Inertiajs', percentage: 95, icon: <img src="/images/skills/sass.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'Postman', percentage: 95, icon: <img src="/images/skills/sass.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'SCRUM', percentage: 95, icon: <img src="/images/skills/SCRUM.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
        { name: 'JIRA', percentage: 95, icon: <img src="/images/skills/jira.svg" alt="Adobe Premiere Pro" className="w-full h-full" /> },
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
                    {Array.from({ length: 400 }).map((_, i) => (
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

                {/* Education & Experience Section */}
                <EducationExperience />

                {/* Contact Banner Section */}
                <div className="max-w-7xl mx-auto">
                    <ContactBanner />
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 