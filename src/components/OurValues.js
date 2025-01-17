import React from 'react'
import { Button } from 'antd';
import { ArrowUpOutlined, HomeOutlined } from '@ant-design/icons';

const OurValues = () => {
  return (
    <div class='bg-gray-50 font-sans text-gray-900'>
    <div class='min-h-screen flex flex-col bg-gradient-to-r contact py-16'>
        <header class='text-center mb-12'>
            <h1 class='text-4xl font-bold text-white sm:text-5xl'>
                Our Core Values
            </h1>
            <p class='mt-4 text-lg text-white opacity-80'>
                The principles that guide our culture, decisions,
                and actions.
            </p>
        </header>

        <div class='flex flex-wrap justify-center gap-12'>
            <section class='w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105'>
                <div class='text-center'>
                    <div class='text-4xl text-indigo-600 mb-4'>
                        <i class='fas fa-heart'></i>
                    </div>
                    <h2 class='text-2xl font-semibold text-gray-800'>
                    Integrity 
                    </h2>
                    <p class='mt-4 text-gray-600'>
                        We hold ourselves to the highest standards
                        of honesty, transparency, and fairness in
                        everything we do.
                    </p>
                </div>
            </section>

            <section class='w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105'>
                <div class='text-center'>
                    <div class='text-4xl text-indigo-600 mb-4'>
                        <i class='fas fa-users'></i>
                    </div>
                    <h2 class='text-2xl font-semibold text-gray-800'>
                        Collaboration
                    </h2>
                    <p class='mt-4 text-gray-600'>
                        We believe in the power of teamwork,
                        respect, and diverse perspectives to achieve
                        our goals together.
                    </p>
                </div>
            </section>

            <section class='w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105'>
                <div class='text-center'>
                    <div class='text-4xl text-indigo-600 mb-4'>
                        <i class='fas fa-lightbulb'></i>
                    </div>
                    <h2 class='text-2xl font-semibold text-gray-800'>
                    Quality
                    </h2>
                    <p class='mt-4 text-gray-600'>
                    We follow the Kaizen philosophy of continuous improvement
                    </p>
                </div>
            </section>

            <section class='w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105'>
                <div class='text-center'>
                    <div class='text-4xl text-indigo-600 mb-4'>
                        <i class='fas fa-hand-holding-heart'></i>
                    </div>
                    <h2 class='text-2xl font-semibold text-gray-800'>
                     Agility
                    </h2>
                    <p class='mt-4 text-gray-600'>
                    We aim for the fastest onboarding times and optimal responsiveness.
                    </p>
                </div>
            </section>
        </div>
    </div>
    
</div>
  )
}

export default OurValues