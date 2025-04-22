import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

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

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
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
                                onHoverStart={() => setActiveProject(index)}
                            >
                                <div className="relative h-64 bg-gray-700">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
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
            </div>
        </section>
    );
};

export default Projects; 