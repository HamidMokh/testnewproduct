import React from 'react';

const HeroBanner = (props) => {
    return (
        <div className='hero-banner flex justify-center bg-cover bg-center h-[70vh] sm:h-[60vh] lg:h-[80vh] relative'>
            <div className='container mx-auto flex justify-start items-center px-4 sm:px-8'>
                {/* Content Wrapper */}
                <div className='content-wrapper flex flex-col justify-center items-start text-white max-w-xl sm:max-w-2xl lg:max-w-3xl'>
                    <div className='flex flex-col justify-start items-start'>
                        <div className='headline text-lg sm:text-xl md:text-2xl font-semibold uppercase'>
                            Explore The World
                        </div>
                        <div className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl'>
                            Find Your Best Talent
                        </div>
                        <div className='hero-subtitle text-base sm:text-lg md:text-xl'>
                            Global Provider of Recruitment Solutions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
