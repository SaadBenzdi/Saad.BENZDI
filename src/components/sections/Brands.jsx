import React from 'react';

const brands = [
    'Web Development',
    'UI/UX Design',
    'Digital Marketing & SEO',
    'Automatisation',
    'Web Security & Optimization',
    'Technical Consulting',
    'Testing & Code Quality',
    'Logo Creation & Brand Design',
    'Video Editing'
];

const Brands = () => {
    // Duplicate for seamless scroll
    const tickerBrands = [...brands, ...brands];

    return (
        <div className="w-full bg-[#9FE870] py-3 overflow-hidden">
            <div className="flex items-center whitespace-nowrap animate-brands-scroll">
                {tickerBrands.map((brand, idx) => (
                    <React.Fragment key={idx}>
                        <span className="font-bold text-lg text-[#181c23] mx-6">{brand}</span>
                        <img
                            src="/images/ui/logoSB.png"
                            alt="Logo"
                            className="inline-block w-9 h-9 mx-2 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-pulse hover:scale-110 transition-all duration-500"
                            style={{ verticalAlign: 'middle' }}
                        />
                    </React.Fragment>
                ))}
            </div>
            <style>{`
                @keyframes brands-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-brands-scroll {
                    animation: brands-scroll 30s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Brands; 