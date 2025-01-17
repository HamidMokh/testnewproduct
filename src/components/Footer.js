import React from 'react';

const Footer = () => {
    return (
        <footer class='footer bg-white' style={{ backgroundColor: '#081120' }}>
            <div class='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                <div class='md:flex md:justify-between'>
                    <div class='mb-6 md:mb-0'>
                        <a class='flex items-center'>
                            <div className='logo'></div>
                        </a>
                    </div>
                    <div class='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
                        <div>
                            <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-white'>
                                Quick Links
                            </h2>
                            <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                                <li class='mb-4'> 
                                    <a class='hover:underline' href='/'>Home</a></li>
                                <li class='mb-4'>
                                    <a class='hover:underline' href='/about'>About</a></li>
                                <li class='mb-4'>
                                    <a class='hover:underline' href='/services'>Services</a></li>
                                <li class='mb-4'>
                                    <a class='hover:underline' href='/contact'>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-white'>
                            Specialisms
                            </h2>
                            <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                                <li class='mb-4'>
                                    <a class='hover:underline ' href='/Specialisation'>Telecommunications</a>
                                </li>
                                <li class='mb-4'>
                                    <a class='hover:underline ' href='/Specialisation'>Technology</a>
                                </li>
                                <li class='mb-4'>
                                    <a class='hover:underline ' href='/Specialisation'>Data Center</a>
                                </li>
                                <li class='mb-4'>
                                    <a class='hover:underline ' href='/Specialisation'>E-commerce & Digital</a>
                                </li>
                                <li class='mb-4'>
                                    <a class='hover:underline ' href='/Specialisation'>Banking & Finance</a>
                                </li>
                                <li class='mb-4'>
                                    <a class='hover:underline ' href='/Specialisation'>FinTech</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class='mb-6 text-sm font-semibold text-white uppercase dark:text-white'>
                                Services
                            </h2>
                            <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                                <li class='mb-4'><a href='/services/permanent-recruitment' class='hover:underline' >
                                    Permanent Recruitment</a> </li>
                                <li class='mb-4'><a href='/services/executive-search' class='hover:underline'>
                                    Executive Search</a> </li>
                                <li class='mb-4'><a href='/services/rpo-remote-working' class='hover:underline'>
                                    RPO & Remote working</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
                <div class='sm:flex sm:items-center sm:justify-between'>
                    <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                        © 2024{' '}
                        <a href='#' class='hover:underline'>
                            T-talents
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div class='flex mt-4 sm:justify-center sm:mt-0'>
                        <a
                            href='linkedin.com'
                            class='text-gray-500 hover:text-gray-900 dark:hover:text-white'
                        >
                            <svg
                                class='w-10 h-10'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M20.447 0H3.553C2.728 0 2 .728 2 1.553v20.894C2 23.272 2.728 24 3.553 24h16.894c.825 0 1.553-.728 1.553-1.553V1.553C22  .728 21.272 0 20.447 0zm-12 20h-3v-9h3v9zm-1.5-10.348c-.957 0-1.5-.654-1.5-1.392 0-.775.558-1.392 1.5-1.392 1.008 0 1.5.617 1.5 1.392 0 .738-.492 1.392-1.5 1.392zm11.5 10.348h-3v-4.9c0-1.162-.413-1.964-1.448-1.964-.783 0-1.246.528-1.452 1.04-.075.182-.093.438-.093.69v5.134h-3s.039-8.3 0-9h3v1.276c.398-.614 1.1-1.482 2.379-1.482 1.731 0 3 1.161 3 3.689v5.237z'
                                    clip-rule='evenodd'
                                />
                            </svg>
                            <span class='sr-only'>Linkedin page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
