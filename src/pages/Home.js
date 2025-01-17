import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Ourservices from '../components/Ourservices';
import Intro from '../components/Intro';

import {
    SettingOutlined,
    FormOutlined,
    SolutionOutlined,
    PhoneOutlined,
} from '@ant-design/icons';
const Home = () => {
    return (
        <>
            <Header />
            <HeroBanner />
            <Intro />
            <div className='steps'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-12 justify-between items-center'>
                        <div className='title text-2xl font-semibold md:text-3xl'>
                            Connecting You with the Right Talent
                        </div>
                        <div className='flex flex-col gap-8 mb-4 mt-4 justify-center items-center md:flex-row md:justify-start md:items-start'>
                            <div className=' flex flex-col justify-center items-center gap-2 p-4 flex-1'>
                                <div className='icon'>
                                    <PhoneOutlined className='text-6xl' />
                                </div>
                                <div className='title text-2xl text-blue-500 w-full text-center '>
                                    Step 1
                                </div>
                                <div className='title text-xl font-semibold  text-center w-full'>
                                    Getting started
                                </div>

                                <div className='service-description list-none flex flex-col justify-center gap-3 items-center text-center'>
                                    <li>Schedule a Chat</li>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-center items-center gap-2 p-4 flex-1'>
                                <div className='icon'>
                                    <SolutionOutlined className='text-6xl' />
                                </div>
                                <div className='title text-2xl text-blue-500 w-full text-center '>
                                    Step 2
                                </div>
                                <div className='title text-xl font-semibold  text-center w-full'>
                                    Selection process
                                </div>

                                <div className='service-description list-none flex flex-col justify-center gap-3 items-center text-center'>
                                    <li>
                                        We interview and select the top
                                        candidates for your position{' '}
                                    </li>
                                    <li>
                                        You review the top team member profiles
                                    </li>
                                    <li>Finalize employment details</li>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-center items-center gap-2 p-4 flex-1'>
                                <div className='icon'>
                                    <SettingOutlined className='text-6xl' />
                                </div>
                                <div className='title text-2xl text-blue-500 w-full text-center '>
                                    Step 3
                                </div>
                                <div className='title text-xl font-semibold  text-center w-full'>
                                    Onboarding
                                </div>

                                <div className='service-description list-none flex flex-col justify-center gap-3 items-center text-center'>
                                    <li>
                                        Onboard your new team member into your
                                        process
                                    </li>
                                    <li>
                                        One easy monthly payment, no taxes, no
                                        overhead
                                    </li>
                                    <li>No multi-year contracts</li>
                                    <li>
                                        Grow your team quickly and affordably
                                    </li>
                                </div>
                            </div>
                            <div className=' flex flex-col justify-center items-center gap-2 p-4 flex-1'>
                                <div className='icon'>
                                    <FormOutlined className='text-6xl' />
                                </div>
                                <div className='title text-2xl text-blue-500 w-full text-center '>
                                    Step 4
                                </div>
                                <div className='title text-xl font-semibold  text-center w-full'>
                                    Sign in Employement agreement
                                </div>

                                <div className='service-description list-none flex flex-col justify-center gap-3 items-center text-center'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Ourservices />
            <div className='bg-white advantage'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-start items-start gap-8'>
                        <div className='title text-4xl text-black font-bold'>
                            The <span className='text-white'>t-talents</span>{' '}
                            Advantage
                        </div>
                        <ul className='list-disc pl-8 max-w-4xl'>
                            <li className='text-lg mb-2 text-black'>
                                End-to-end staffing solutions
                            </li>
                            <li className='text-lg mb-2 text-black'>
                                Sourcing and deployment of candidates across
                                industry sectors and job functions
                            </li>{' '}
                            <li className='text-lg mb-2 text-black'>
                                High quality candidates
                            </li>{' '}
                            <li className='text-lg mb-2 text-black'>
                                SLA reassurance
                            </li>
                            <li className='text-lg mb-2 text-black'>
                                Manage the whole interview process between
                                client and candidates
                            </li>
                            <li className='text-lg mb-2 text-black'>
                                Replacement guarantee for select hiring
                                solutions.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*  <div className='our-partners'>
                <div className='container mx-auto'>
                    <div className='flex flex-row gap-12 justify-between items-center'>
                        <div className='title text-4xl text-white font-semibold'>
                            Our Partners
                        </div>

                        <div className='w-full overflow-hidden '>
                            <div className='marquee space-x-12'>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                                <div className='h-14 w-32 flex justify-center items-center bg-white rounded-lg p-4'>
                                    <img
                                        src='https://via.placeholder.com/150x50?text=Logo+1'
                                        alt='Partner 1'
                                        className='w-12 h-12 object-contain'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <About /> */}

            <Ourservices count={3}/>
            <div className='bg-white we-offer'>
                <div className='container mx-auto'>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='title text-3xl text-black font-semibold max-w-4xl text-center  leading-snug'>
                            We specialize in solving consultant-related needs.{' '}
                            <br />
                            For our clients, it’s about finding the right person
                            with the right skills in the right role, as quickly
                            and efficiently as possible.
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
