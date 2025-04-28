import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    side: 'left',
    year: '2023 – 2025',
    title: 'Technicien spécialisé en Développement Digital Option Web Full Stack',
    subtitle: 'Institut Spécialisé de Gestion et Informatique , Casablanca, Morocco',
    desc: 'Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.',
    icon: '🎓',
    color: 'text-[#9FE870]'
  },
//   {
//     side: 'right',
//     year: '2007 – 2010',
//     title: 'BCA Collage Complete Course',
//     subtitle: 'Columbia University, New York, NY, United States',
//     desc: 'Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.',
//     icon: '📚',
//     color: 'text-yellow-400'
//   },
  {
    side: 'right',
    year: '2022 – 2023',
    title: 'Baccalauréat en Sciences Physiques',
    subtitle: 'Lycee IBNO HANI Casablanca, Morocco',
    desc: 'Princeton University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.',
    icon: '🏫',
    color: 'text-pink-400'
  },
//   {
//     side: 'right',
//     year: '2020 – 2021',
//     title: 'Admin Template',
//     subtitle: '3336 Southern Street Mineola, NY 11501',
//     desc: 'Collaboration with visual designers: Working closely with visual designers to ensure that UI design elements align with the overall visual aesthetics and brand guidelines.',
//     icon: '💼',
//     color: 'text-blue-400'
//   },
//   {
//     side: 'left',
//     year: '2016 – 2019',
//     title: 'Unity Technologies',
//     subtitle: '1519 White Oak Drive Kansas City, MO 64127',
//     desc: 'Interaction design: Defining and designing user interactions, micro interactions, micro animations, and transitions to enhance the usability and delightfulness of the product.',
//     icon: '🖥️',
//     color: 'text-[#9FE870]'
//   },
];

const EducationExperience = () => (
  <section className="relative py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <motion.button
        className="px-6 py-2 rounded-full bg-[#9FE870] text-black font-bold text-sm mb-4 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        LIFE TIME
      </motion.button>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
        Education 
        {/* & Experience */}
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto">A journey of learning and professional growth.</p>
    </div>
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#9FE870] via-white/20 to-[#9FE870] -translate-x-1/2 z-0"></div>
      <div className="space-y-16 relative z-10">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'} relative`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {item.side === 'left' && (
              <div className="md:w-1/2 md:pr-12 text-right">
                <div className="inline-block mb-2 text-lg font-bold" >
                  <span className={`mr-2 ${item.color}`}>{item.icon}</span>
                  <span className="text-yellow-400 font-semibold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <div className="text-gray-400 text-sm mb-2">{item.desc}</div>
                <div className="text-white font-semibold text-sm">{item.subtitle}</div>
              </div>
            )}
            {/* Timeline dot */}
            <div className="w-8 h-8 rounded-full bg-[#181c23] border-4 border-[#9FE870] flex items-center justify-center z-10 shadow-lg mx-4 animate-pulse">
              <span className={`text-2xl ${item.color}`}>{item.icon}</span>
            </div>
            {item.side === 'right' && (
              <div className="md:w-1/2 md:pl-12 text-left">
                <div className="inline-block mb-2 text-lg font-bold" >
                  <span className={`mr-2 ${item.color}`}>{item.icon}</span>
                  <span className="text-yellow-400 font-semibold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <div className="text-gray-400 text-sm mb-2">{item.desc}</div>
                <div className="text-white font-semibold text-sm">{item.subtitle}</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationExperience; 