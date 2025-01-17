import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {HomeOutlined, ArrowUpOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import AboutImg from '../assets/rpo.webp';

const Rpo = () => {
    return (
        <>
            <Header />
            <section class='page-hero py-16 border-black bg-gray-100 '>
                <div class='container mx-auto relative'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex flex-row bg-gray-200 rounded-full px-3 py-1 gap-2'>
                            <Link
                                to='/Services'
                                className='flex flex-row gap-2 text-blue-600'
                            >
                                <HomeOutlined />
                                Services
                            </Link>
                            <span>/ RPO & Remote working</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl '>
                        RPO & Remote working
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
        <div className='about'>
            <div className='container mx-auto flex flex-row'>
                <div className='flex flex-col gap-16 items-center md:flex-row'>
                    <div className='flex flex-1 shadow-sm relative rounded-lg'>
                        <img src={AboutImg} alt='about' />
                    </div>
                    <div className='flex flex-1 flex-col gap-6 justify-start items-start'>
                        <span className='headline'>Our Services</span>
                        <div className='title text-4xl text-black font-semibold'>
                        RPO & Remote working Services
                        </div>
                        <div className='flex flex-col gap-3 justify-start items-start'>
                            <div className='font-normal text-md text-black'>
                            Recruitment Process Outsourcing (RPO) not only saves you time and money but, more importantly, it shortens your hiring process and enables efficient scaling. By outsourcing your recruitment processes to us, we take the time to understand your business goals, identify the right talent, and reduce your time to hire.
                            </div>
                            <div className='font-normal text-md text-black'>
                            With our RPO team dedicated exclusively to your organization, we ensure a deep understanding of your needs, enabling us to approach and attract the ideal candidates. This partnership helps your business grow more effectively, ultimately driving revenue through better talent acquisition and faster recruitment.
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
                        Interested in RPO? Let us know The 
                        </div>
                            <div className='text-lg mb-2 text-black'>
                            Tell us about the job you need to fill and the team you need to build. <br />We’ll identify the right talent for your organization.
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

export default Rpo;