import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Specialism from '../components/Specialism';
import { HomeOutlined } from '@ant-design/icons';

const Specialisation = () => {
    return (
        <>
            <Header />
            <section class='page-hero py-16 border-black bg-gray-100 '>
                <div class='container mx-auto relative'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex flex-row bg-gray-200 rounded-full px-3 py-1 gap-2'>
                            <Link
                                to='/'
                                className='flex flex-row gap-2 text-blue-600'
                            >
                                <HomeOutlined />
                                Home
                            </Link>
                            <span>/ Specialisation</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl'>
                        Recruitment Specialisms
                        </h1>
                        <p className='text-center max-w-2xl'>
                            <p className='font-normal text-md text-white '>                          
                            </p>
                        </p>
                    </div>
                   <div className="pixel pixel-plus-top"></div>
                   <div className="pixel pixel-plus-bottom"></div>
                   <div className="pixel pixel-plus-right"></div>
                   
                   <div className="pixel pixel-v-top"></div>
                   <div className="pixel pixel-v-bottom"></div>
                   <div className="pixel pixel-v-left"></div>
                </div>
            </section>
                            
            <Specialism />
            <Footer />
        </>
    );
};

export default Specialisation;
