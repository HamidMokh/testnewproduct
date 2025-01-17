import React from 'react';
import {ArrowUpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import Sectionserv from './Sectionserv';
import { Button } from 'antd';

const Ourservices = (props) => {
    const { count } = props;
    return (
        <div className='our-services'>
            <div className='container mx-auto'>
                {count === 3 ? (
                    <>
                        <Sectionserv />

                        <div className='flex flex-col gap-8 mb-8 mt-8 md:flex-row'>
                            <div className='service-card flex flex-col justify-center items-center gap-4 p-8'>
                                
                                {/* <div className='icon'></div> */}
                                <div className='service-title '>
                                    Permanent Recruitment
                                </div>
                                <div className='service-description'>
                                Our extensive expertise in permanent recruitment enables us to source visionary leaders and skilled professionals who can drive your organisations success. Whether you require talent for executive positions or specialised roles, we have the resources and knowledge to find the perfect fit for your organisation.
                                </div>
                                <Link to="/services/permanent-recruitment">
                                <Button
                                    type='primary'
                                    className='btn bg-theme px-8 h-12'
                                    size='large'
                                    shape='Default'
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
                                    Discover More
                                </Button>
                                </Link>
                            </div>

                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>
                                Executive Search
                                </div>
                                <div className='service-description'>
                                At the core of groundbreaking organizations are creative, visionary leaders who redefine industries and set new benchmarks. Our dedicated Executive Search division specializes in identifying and securing exceptional C-Level executives worldwide.
                                <br />
                                <br />
                                </div>
                                <Link to="/services/executive-search">
                                <Button
                                    type='primary'
                                    className='btn bg-theme px-8 h-12'
                                    size='large'
                                    shape='Default'
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
                                    Discover More
                                </Button>
                                </Link>
                            </div>

                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>
                                RPO & Remote working
                                </div>
                                <div className='service-description'>
                                Recruitment Process Outsourcing (RPO) helps businesses save time, reduce costs, and accelerate hiring. Our RPO services are designed to quickly identify top talent, streamline your recruitment process, and scale efficiently to meet your organization's evolving needs.<br />
                                <br />
                                
                                </div>
                                <Link to="/services/rpo-remote-working">
                                <Button
                                    type='primary'
                                    className='btn bg-theme px-8 h-12'
                                    size='large'
                                    shape='Default'
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
                                    Discover More
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <SectionTitle />
                        <div className='flex flex-col gap-8 mb-8 mt-8 md:flex-row'>
                            <div className='service-card flex flex-col justify-center items-center gap-4 p-8'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title '>Telecommunications </div>
                                <div className='service-description'>
                                The telecom industry faces compliance challenges, skill shortages, and retention issues amid global legal changes, 5G advancements, 
                                and digitalization. Hiring managers struggle to find candidates with the right skills to meet these demands."
                                </div>
                            </div>

                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>Technology</div>
                                <div className='service-description'>
                                Recruitment in technology and engineering is complex, requiring specialized candidates across multiple departments. Finding individuals with the right experience for specific roles is a challenging task.
                                </div>
                                {/* <Button
                            type='primary'
                            className='btn bg-theme'
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
                            Read more
                        </Button> */}
                            </div>

                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>
                                    Data Center
                                </div>
                                <div className='service-description'>
                                Data centers are vital infrastructure for storing, managing, and processing data, supporting industries with cloud computing, IT services,
                                 and business continuity. Their growth is driven by rising demands for storage and processing, fueled by cloud services, big data, and AI.
                                </div>
                                {/* <Button
                            type='primary'
                            className='btn bg-theme'
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
                            Read more
                        </Button> */}
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 mb-8 mt-8 md:flex-row'>
                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>
                                    E-commerce & Digital
                                </div>
                                <div className='service-description'>
                                Recruiting in the booming e-commerce industry is increasingly challenging due to intense competition for top talent.
                                Finding, connecting, and hiring elite candidates has become tougher than ever.
                                </div>
                                {/* <Button
                            type='primary'
                            className='btn bg-theme'
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
                            Read more
                        </Button> */}
                            </div>

                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>
                                    Banking & Finance
                                </div>
                                <div className='service-description'>
                                The technology-driven banking and financial industry faces challenges in hiring experienced candidates who align with core values.
                                Finding individuals who drive business growth and customer satisfaction has become increasingly difficult.
                                </div>
                                {/* <Button
                            type='primary'
                            className='btn bg-theme'
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
                            Read more
                        </Button> */}
                            </div>

                            <div className='service-card flex flex-col justify-center items-center gap-4'>
                                {/* <div className='icon'></div> */}
                                <div className='service-title'>
                                FinTech
                                </div>
                                <div className='service-description'>
                                The FinTech sector is reshaping finance with technologies like digital payments, blockchain, 
                                and AI, offering faster and more accessible services. 
                                It drives innovation and inclusion while overcoming challenges. 
                                FinTech's global growth continues to define the future of finance
                                </div>
                                {/* <Button
                            type='primary'
                            className='btn bg-theme'
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
                            Read more
                        </Button> */}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Ourservices;
