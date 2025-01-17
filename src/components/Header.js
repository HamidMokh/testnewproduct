import {
    AlignRightOutlined,
    ArrowUpOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    console.log(location);

    // Handle scroll event to toggle sticky state
    useEffect(() => {
        const handleScroll = () => {
            const headerHeight =
                document.querySelector('.header').getBoundingClientRect()
                    .height || 0;
            if (window.scrollY > headerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Listen to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div
            className={
                'header  min-h flex flex-row justify-between items-center p-4 sticky top-0  shadow-lg z-10 ' +
                (isSticky ? 'bg-black text-white' : 'bg-white text-black')
            }
        >
            <div className='container mx-auto'>
                <div className='flex flex-row justify-between items-center'>
                    {/* Logo */}
                    <Link to='/'>
                        <div className='logo text-xl font-bold'></div>
                    </Link>

                    {/* Navigation for large screens */}
                    <ul className='navigation hidden md:flex flex-row justify-center items-center gap-9'>
                        <li>
                            <NavLink
                                to={'/'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/about'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/services'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/Specialisation'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                Recruitment Specialisms
                            </NavLink>
                        </li>
             
                        <Link to="/contact">
                        <Button
                            type='primary'
                            className='btn bg-theme'
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
                            Get in touch
                        </Button>
                        </Link>
                    </ul>

                    {/* Hamburger Menu (visible on small screens) */}
                    <div className='md:hidden flex items-center'>
                        <button className='' onClick={toggleMenu}>
                            {isMobileMenuOpen ? (
                                <CloseOutlined />
                            ) : (
                                <AlignRightOutlined />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div
                    className={
                        'md:hidden w-full absolute top-20 left-0 p-4 z-10 shadow-lg ' +
                        (isSticky
                            ? 'bg-black text-white'
                            : 'bg-white text-black')
                    }
                >
                    <ul className='flex flex-col items-center gap-4'>
                        <li>
                            <NavLink
                                to={'/'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/about'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/services'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/Specialisation'}
                                className={({ isActive, isPending }) =>
                                    isActive ? 'active ' : ''
                                }
                            >
                                Recruitment Specialisms
                            </NavLink>
                        </li>
                        

                        {/* Get in touch Button for mobile */}
                        <Link to="/contact">
                        <Button
                            type='primary'
                            className='btn bg-theme w-full'
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
                            Get in touch
                        </Button>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
