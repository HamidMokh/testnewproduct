import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { HomeOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Contactus = () => {
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
                            <span>/ Contact</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl'>
                            Contact Us
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
            <Contact />
            <div className='bg-white advantage'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-start items-start gap-8'>
                        <div className='title text-4xl text-black font-bold'>
                        Hiring into your team?
                            
                        </div>
                            <div className='text-lg mb-2 text-black'>
                            If you're hiring into your team and would like to know how we can help you, submit your vacancy here.
                            </div>
                    </div>
                <Link to="/contact/send-job-description">
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
        <div className='bg-white advantage'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-start items-start gap-8'>
                        <div className='title text-4xl text-black font-bold'>
                        Want to send us your CV?
                            
                        </div>
                            <div className='text-lg mb-2 text-black'>
                            We’d love to hear from you! Share your CV with us and take the next step in your career.
                            </div>
                    </div>
                <Link to="/contact/send-your-cv">
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
                                    Submit your CV
                                </Button>
                                </Link>
                                
            </div>
            
        </div>
            <Footer />
        </>
    );
};

export default Contactus;
