import React from 'react';
import AboutImg from '../assets/home3.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='container mx-auto flex flex-row'>
                <div className='flex flex-col gap-16 items-center md:flex-row'>
                    <div className='flex flex-1 shadow-sm relative rounded-lg'>
                        <img src={AboutImg} alt='about' />
                    </div>
                    <div className='flex flex-1 flex-col gap-6 justify-start items-start'>
                        <span className='headline'>Introduction</span>
                        <div className='title text-4xl text-black font-semibold'>
                            Global Provider of Recruitment Solutions
                        </div>
                        <div className='flex flex-col gap-3 justify-start items-start'>
                            <div className='font-normal text-md text-black'>
                                We deliver innovative and effective hiring
                                solutions to businesses of all types and sizes.
                                With expertise across various sectors, we help
                                your organization stand out in the competitive
                                market.
                            </div>
                            <div className='font-normal text-md text-black'>
                                Our solutions are designed to enhance your
                                business efficiency while reducing operational
                                costs.
                                <br />
                                We take pride in our ability to listen, ask the
                                right questions, and pinpoint what truly matters
                                for every assignment. Our mission is to deliver
                                tailored recruitment solutions that align with
                                the unique needs of our clients.
                            </div>

                            <div className='font-normal text-md text-black'>
                                Our core focus is connecting top talent from
                                around the globe with the diverse positions.
                                From the initial application to the final
                                onboarding stage, we provide comprehensive
                                support to candidates at every step of the
                                recruitment journey.
                                <br />
                                Let us manage the day-to-day recruitment
                                challenges, so you can concentrate on driving
                                your business forward.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
