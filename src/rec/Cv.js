import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Input, Button, message } from 'antd';
import { ArrowUpOutlined, PhoneTwoTone, MailTwoTone, HomeOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Cv = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        country: '',
    });

    const [file, setFile] = useState(null); // State for the uploaded file
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store the selected file
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token); // Update the reCAPTCHA token
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.jobTitle || !formData.country || !file) {
            message.error('Please fill out all required fields.');
            return;
          }

        if (!recaptchaToken) {
            message.error('Please complete the reCAPTCHA.');
            return;
        }

        if (file && !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
            message.error('Only PDF or Word files are allowed.');
            return;
        }

        if (file && file.size > 2 * 1024 * 1024) { // 2MB limit
            message.error('File size should not exceed 2MB.');
            return;
          }


        const formDataToSend = new FormData(); // Create FormData object for file upload
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('jobTitle', formData.jobTitle);
        formDataToSend.append('country', formData.country);
        formDataToSend.append('file', file); // Attach the uploaded file
        formDataToSend.append('recaptchaToken', recaptchaToken);

        try {
            const response = await axios.post('https://api.t-talents.com/send-cv', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200) {
                message.success('Message and file sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    jobTitle: '',
                    country: '',
                });
                setFile(null);
                setRecaptchaToken(null);
            } else {
                throw new Error('Failed to send the message.');
            }
        } catch (error) {
            message.error('Error sending message and file.');
        }
    };
    return (
        <>
            <Header />
            <section class='page-hero py-16 border-black bg-gray-100 '>
                <div class='container mx-auto relative'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex flex-row bg-gray-200 rounded-full px-3 py-1 gap-2'>
                            <Link
                                to='/contact'
                                className='flex flex-row gap-2 text-blue-600'
                            >
                                <HomeOutlined />
                                Contact
                            </Link>
                            <span>/ Send CV</span>
                        </div>
                        <h1 className='hero-title text-3xl sm:text-4xl lg:text-5xl font-bold md:text-3xl'>
                        Send your CV / Resume
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
            <div className='contact'>
            <div className='container mx-auto mt-6'>
                <div className='flex flex-col gap-16 md:flex-row'>
                    <div className='flex flex-row flex-1'>
                        <div className='left-section flex flex-col gap-6 justify-start items-start'>
                            <div className='flex flex-col justify-start items-start gap-4'>
                                <span className='headline '>Contact us</span>
                                <div className='title text-4xl text-white font-semibold'>
                                Jobs near you
                                </div>
                            </div>

                            <div className='font-normal text-md text-gray-300'>
                            Submit your CV and a member of we will review
                            </div>
                            <div className='call-card w-full bg-white rounded-lg p-6 flex flex-row gap-4 justify-start items-center'>
                                <div className='icon w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center text-3xl'>
                                    <PhoneTwoTone />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='font-normal text-md text-gray-400'>
                                        Gives us a Call
                                    </div>
                                    <div className='text-gray-900 text-2xl font-bold'>
                                        00213 659 896 626
                                    </div>
                                </div>
                            </div>
                            <div className='call-card w-full bg-white rounded-lg p-6 flex flex-row gap-4 justify-start items-center'>
                                <div className='icon w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center text-3xl'>
                                    <MailTwoTone />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='font-normal text-md text-gray-400'>
                                        Send me Mail
                                    </div>
                                    <div className='text-black text-2xl font-bold'>
                                        contact@t-talents.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 bg-white rounded-lg w-full p-6 shadow-md gap-2'>
                        <div className='title text-xl text-black font-semibold'>
                        Send your CV
                        </div>
                        <div className='font-normal text-md text-gray-500'>
                       
                        </div>
                        <div className='form-card mt-4'>
                            <form class='bg-white' onSubmit={handleSubmit}>
                                <div class='flex flex-row gap-6 mb-4'>
                                        <Input
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='First Name'
                                        className='h-12'
                                    />
                                    <Input
                                        name='lastName'
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='Last Name'
                                        className='h-12'
                                    />
                                </div>
                                <div className='flex flex-row gap-6 mb-4'>
                                    <Input
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='Email'
                                        className='h-12'
                                    />
                                    <Input
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='Phone'
                                        className='h-12'
                                    />
                                </div>
                                <div class='flex flex-row gap-6 mb-4'>
                                    <Input
                                        name='jobTitle'
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='Current Job Title'
                                        className='h-12' 
                                    />
                                    <Input
                                        name='country'
                                        value={formData.country}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='Country '
                                        className='h-12'
                                    />
                                </div>
                                
                                <div className="flex flex-col mb-4 gap-4">
                                    <label htmlFor="file" className="block font-semibold">
                                        Upload CV
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={handleFileChange}
                                        className="h-12"
                                    />
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LcGybQqAAAAAGcw5h25bFRwMH-UGHeK4Y9oeuHM"
                                    onChange={handleRecaptchaChange}
                                />
                                <div class='flex items-center justify-between'>
                                    <Button
                                        type='primary'
                                        className='btn bg-theme'
                                        size='large'
                                        shape='default'
                                        htmlType="submit"
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
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white we-offer'>
                <div className='container mx-auto'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col justify-start items-start'>
                            <div className='title text-3xl text-black font-semibold max-w-4xl text-center  leading-snug md:texxt-4xl'>
                             Discover the t-talents advantage
                            </div>
                            <p className='font-normal text-md text-white'>
                            Put us to work for your business and we’ll change the way you work forever – and for better.
                            </p>
                        </div>
                        {/*
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
                        */}
                    </div>
                </div>
            </div>
         
        <Footer />
        </>
    );
};

export default Cv;
