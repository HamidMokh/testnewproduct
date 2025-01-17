import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Specialism = () => {
    return (
        <div className='our-services'>
            <SectionTitle />   
            <div className='container mx-auto'>
                                  
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
            
            </div>
        </div>
    );
};

export default Specialism;