import { ArrowUpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
                <section class='py-20 text-center px-4 bg-gradient-to-r bg-white rounded-lg text-white'>
                 <div class='container mx-auto relative'>
                 <div className="corner corner-plus-top"></div>
                 <div className="corner corner-plus-bottom"></div>
                 <div className="corner corner-plus-right"></div>              
                 <div className="corner corner-v-top"></div>
                 <div className="corner corner-v-bottom"></div>
                 <div className="corner corner-v-left"></div>
                 <h2 class='text-[36px] font-bold text-black'>
                                Our Mission
                               </h2>
                            <p class='mt-[20px] text-[18px] text-black mb-[32px]'>
                             We proudly serve clients across Europe, Middle East, and Africa. With our extensive expertise and network, we are committed to providing tailored recruitment solutions that meet the unique needs of these dynamic and diverse markets.
                            </p>
                            <p class='mt-[20px] text-[18px] text-black mb-[32px]'>
                             Connecting the Right Talent, Skills, and Roles for Success</p>
                            </div>
                                <Link to="/About">
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
                                    About us
                                </Button>
                                </Link>
                            </section>
    );
};

export default Intro;