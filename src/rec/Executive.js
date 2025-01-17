import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {HomeOutlined, ArrowUpOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import AboutImg from '../assets/executive_search.webp';

const Executive = () => {
    return (
        <>
            <Header />
            <section class='page-hero py-16 border-black bg-gray-100 '>
                <div class='container mx-auto relative'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex flex-row bg-gray-200 rounded-full px-3 py-1 gap-2'>
                            <Link to='/Services' className='flex flex-row gap-2 text-blue-600'>
                                <HomeOutlined />
                                Services
                            </Link>
                            <span>/ Executive Search</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl '>
                        Executive Search
                        </h1>
                        <p className='text-center max-w-2xl'>
                            <p className='font-normal text-md text-white '> </p>
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
        <div className='about'>
            <div className='container mx-auto flex flex-row'>
                <div className='flex flex-col gap-16 items-center md:flex-row'>
                    <div className='flex flex-1 shadow-sm relative rounded-lg'>
                        <img src={AboutImg} alt='about' />
                    </div>
                    <div className='flex flex-1 flex-col gap-6 justify-start items-start'>
                        <span className='headline'>Identifying Great Leaders</span>
                        <div className='title text-4xl text-black font-semibold'>
                        Executive Search
                        </div>
                        <div className='flex flex-col gap-3 justify-start items-start'>
                            <div className='font-normal text-md text-black'>
                            At the core of groundbreaking organizations are creative, visionary leaders who redefine industries and set new benchmarks. Our dedicated Executive Search division specializes in identifying and securing exceptional C-Level executives worldwide.
                            </div>
                            <div className='font-normal text-md text-black'>
                            Sourcing strategic leaders who can drive organizational growth can be challenging. Even when the right candidates are identified, making meaningful connections isn't always straightforward. Our Executive Search services leverage a vast network of Directors and C-suite executives, specializing in key industries such as Technology, Telecoms, Data Centers, and Fintech. 
                            </div>

                            <div className='font-normal text-md text-black'>
                            We are dedicated to identifying and connecting you with visionary leaders who have the expertise and strategic insight to propel your organization forward, ensuring a seamless and impactful recruitment process.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white advantage'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-start items-start gap-8'>
                        <div className='title text-4xl text-black font-bold'>
                        Contact us for a confidential consultation
                        </div>
                            <div className='text-lg mb-2 text-black'>
                            We take a consultative approach to deliver a bespoke solution based on your organization's growth strategic direction.<br />
                             Our advice will be focused on delivering for your organization and identifying the right leaders to match your ambitions.
                            </div>
                    </div>
                    <Link to="/contact">
                                <Button
                                    type='primary'
                                    className='btn bg-theme px-8 h-12'
                                    size='large'
                                    shape='Default'
                                    style={{ backgroundColor: '#FEA500', color: '#fff' }}
                                >
                                    <div className='icon-cricle flex justify-center items-center'>
                                        <ArrowUpOutlined
                                            style={{
                                                color: '#FEA500',
                                                fontWeight: '700',
                                                transform: 'rotate(45deg)',
                                            }}
                                        />
                                    </div>
                                    Upload Your Job Vacancy
                                </Button>
                                </Link>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default Executive;