import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ourservices from '../components/Ourservices';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <Header />
            <section class='page-hero py-16 border-black bg-gray-300 '>
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
                            <span>/ Services</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl'>
                        Our Recruitment Services
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
            <Ourservices count={3}/>
            {/* <div className='bg-white we-offer'>
                <div className='container mx-auto'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col justify-start items-start'>
                            <div className='title text-3xl text-black font-semibold max-w-4xl text-center  leading-snug md:texxt-4xl'>
                                Subscribe to our news letter
                            </div>
                            <p className='font-normal text-md text-gray-500 w-96'>
                                Feel free to reach out to us with any questions,
                                inquiries, or staffing requirements you may
                                have. Our experienced
                            </p>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-2'>
                            <Input
                                size='lg'
                                className='rounded-full w-96 h-12'
                                placeholder='Enter Email'
                            />
                            <Button
                                type='primary'
                                className='btn bg-theme px-8 h-12'
                                size='large'
                                shape='round'
                            >
                                <div className='icon-cricle flex justify-center items-center'>
                                    <ArrowUpOutlined
                                        style={{
                                            color: '#00AFFC',
                                            fontWeight: '700',
                                            transform: 'rotate(45deg)',
                                        }}
                                    />
                                </div>
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='bg-white we-offer'>
                <div className='container mx-auto max-w-4xl'>
                    <div className='flex w-full justify-center items-center gap-12 flex-col'>
                        <div class='title text-4xl text-black font-semibold'>
                        Advantages and Affordability{' '}
                        </div>
                        <div className='flex flex-row justify-center items-start'>
                           
                            <div className='flex flex-col flex-1 bg-transparent scale-110 shadow-lg'>
                                
                                <ul className='flex flex-col list-disc pl-8 gap-4'>
                                    <li className='font-normal text-sm '>
                                    Staffing Solutions Delivered in Just 2 to 7 Days
                                    </li>
                                    <li className='font-normal text-sm '>
                                    Screens and provides you top candidates
                                    </li>
                                    <li className='font-normal text-sm '>
                                    We Offer a Guarantee of Up to 4 Months 
                                    </li>
                                    <li className='font-normal text-sm '>
                                    Post-Hiring Candidate Follow-ups
                                    </li>
                                    <li className='font-normal text-sm text-black-500'>
                                    With strong industry insights 
                                    </li>
                                    <li className='font-normal text-sm text-black-500'>
                                    Expansive candidate network
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='bg-white advantage'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-start items-start gap-8'>
                        <div className='title text-4xl text-black font-bold'>
                        Advantages and Affordability
                                                  
                        </div>
                        <ul className='list-disc pl-8 max-w-4xl'>
                            <li className='text-lg mb-2 text-black'>
                            Staffing Solutions Delivered in Just 2 to 7 Days
                            </li>
                            <li className='text-lg mb-2 text-black'>
                            Screens and provides you top candidates
                            </li>{' '}
                            <li className='text-lg mb-2 text-black'>
                            We Offer a Guarantee of Up to 4 Months
                            </li>{' '}
                            <li className='text-lg mb-2 text-black'>
                            Post-Hiring Candidate Follow-ups
                            </li>
                            <li className='text-lg mb-2 text-black'>
                            With strong industry insights
                            </li>
                            <li className='text-lg mb-2 text-black'>
                            Expansive candidate network
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;
