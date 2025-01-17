import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import Footer from '../components/Footer';
import OurValues from '../components/OurValues';

const Aboutus = () => {
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
                            <span>/ About Us</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl '>
                        About Us
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
            <About />
            <OurValues />
            
            <section class='page-hero py-16 border-black bg-gray-100 '>
                <div class='container mx-auto'>
                    <div className='flex flex-col justify-center items-start gap-8 md:flex-row'>
                        <div className='flex flex-col gap-4 flex-1'>
                            <div className='title text-3xl text-black font-semibold'>
                                Our Vision
                            </div>
                            <p className='font-normal text-md text-white'>
                                To build an inspiring, innovative and global
                                company that provides high quality people
                                solutions, delivered with unbeatable service to
                                its customers.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 flex-1'>
                            <div className='flex flex-col gap-4'>
                                <div className='title text-3xl text-black font-semibold'>
                                    Our Purpose
                                </div>
                                <p className='font-normal text-md text-white'>
                                    Creating opportunities, impacting lives.
                                </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='title text-3xl text-black font-semibold'>
                                    Our Promise
                                </div>
                                <p className='font-normal text-md text-white'>
                                    The best at finding and managing the right talent with certainty,
                                    faster.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 flex-1'>
                            <div className='title text-3xl text-black font-semibold'>
                            Our Mission
                            </div>
                            <p className='font-normal text-md text-white'>
                            We proudly serve clients across three major regions: the Middle East, Africa, and Europe. With our extensive expertise and network, we are committed to providing tailored recruitment solutions that meet the unique needs of these dynamic and diverse markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Aboutus;
