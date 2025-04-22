import React from 'react';

const Brands = () => {
    const brands = ['FOXER', 'Kakerio', 'Magner', 'VONICA', 'BROG'];
    // Duplicate brands to create seamless loop
    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            <div className="relative">
                {/* First row scrolling left */}
                <div className="flex animate-scroll">
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={`${brand}-${index}`}
                            className="flex-shrink-0 w-[200px] mx-8 text-2xl font-bold text-white opacity-30"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-200px * ${brands.length} - 16rem));
                    }
                }
                
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }

                /* Optional: Pause animation on hover */
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Brands; 