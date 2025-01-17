import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ArrowUpOutlined, PhoneTwoTone, MailTwoTone } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [formType, setFormType] = useState('general');
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            message.error('Please fill in all the required fields.');
            return;
        }
        if (!recaptchaToken) {
            message.error('Please complete the reCAPTCHA.');
            return;
        }

        try {
            const payload = {
                ...formData,
                recaptchaToken,
            };

            let response;

            if (formType === 'general') {
                // Send general inquiry
                response = await axios.post('https://api.t-talents.com/send-general', payload);
            } else if (formType === 'cv' && file) {
                // Send CV submission with file
                const formDataWithFile = new FormData();
                formDataWithFile.append('file', file);
                Object.keys(payload).forEach((key) => {
                    formDataWithFile.append(key, payload[key]);
                });

                response = await axios.post('https://api.t-talents.com/send-cv', formDataWithFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            if (response.status === 200) {
                message.success('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
                setFile(null);
                setRecaptchaToken(null);
            } else {
                throw new Error('Failed to send the message.');
            }
        } catch (error) {
            message.error('Error sending message.');
            console.error(error);
        }
    };

    return (
        <div className='contact'>
            <div className='container mx-auto mt-6'>
                <div className='flex flex-col gap-16 md:flex-row'>
                    <div className='flex flex-row flex-1'>
                        <div className='left-section flex flex-col gap-6 justify-start items-start'>
                            <div className='flex flex-col justify-start items-start gap-4'>
                                <span className='headline '>Contact us</span>
                                <div className='title text-4xl text-white font-semibold'>
                                    We're here to help
                                </div>
                            </div>

                            <div className='font-normal text-md text-gray-300'>
                                 If you have a query about working for us, our recruitment services within telecommunications. technology, data centres, Digital or FinTech, if you want to know more about t-talents, please fill in the form.
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
                            General Enquiry
                        </div>
                        <div className='form-card mt-4'>
                            <form className='bg-white' onSubmit={handleSubmit}>
                                <div className='flex flex-row gap-6 mb-4'>
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
                                <div className='flex flex-col mb-4 gap-4'>
                                    <Input
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        size='large'
                                        placeholder='Subject'
                                        className='h-12'
                                    />
                                    <TextArea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder='Message'
                                    />
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LcGybQqAAAAAGcw5h25bFRwMH-UGHeK4Y9oeuHM"
                                    onChange={handleRecaptchaChange}
                                />
                                <div className='flex items-center justify-between'>
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
                                        Contact Us
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;