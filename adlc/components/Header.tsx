"use client"
import React, { useState } from 'react'
import Logo from '../public/LOGO.png'
import Image from 'next/image'
import { CiCalendar } from 'react-icons/ci'
import MenuIcon from '../public/menu.png'
import { useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";


const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClose = (e?: React.MouseEvent) => {
        // small debug output to verify the click fires
        if (typeof window !== 'undefined') console.log('drawer: close clicked', e?.type)
        setMenuOpen(false)
    }

    // debug: log menu state changes
    useEffect(() => {
        if (typeof window !== 'undefined') console.log('drawer: menuOpen ->', menuOpen)
    }, [menuOpen])

    useEffect(() => {
        // lock scroll when menu is open
        if (menuOpen) {
            const prev = document.body.style.overflow
            document.body.style.overflow = 'hidden'
            return () => { document.body.style.overflow = prev }
        }
    }, [menuOpen])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <div className='bg-[#16205B]'>

            {/* MOBILE VIEW */}
            <div className='p-3 sm:hidden'>
                <div className='flex items-center justify-between'>
                    <Image src={Logo} alt='Logo' width={150} height={20} priority />

                    <button
                        type='button'
                        aria-label='Open mobile menu'
                        className={
                            'mr-4 inline-flex items-center justify-center   text-[#16205B] rounded relative ' +
                            (menuOpen ? 'pointer-events-none z-0' : 'pointer-events-auto z-60')
                        }
                        onClick={() => setMenuOpen(true)}
                    >
                        <LuSquareMenu size={30} color='white' />
                    </button>
                </div>
            </div>

            {/* Mobile drawer (always mounted to allow smooth transitions) */}
            <div className={"md:hidden fixed inset-0 z-50 " + (menuOpen ? 'pointer-events-auto' : 'pointer-events-none')}>
                {/* overlay */}
                <div
                    onClick={(e) => { e.stopPropagation(); handleClose(); }}
                    className={
                        'absolute inset-0 bg-black/40 transition-opacity duration-300 z-40 ' +
                        (menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')
                    }
                    aria-hidden={!menuOpen}
                />

                {/* drawer: translate-x-full when closed, translate-x-0 when open */}
                <aside
                    className={
                        'absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 overflow-auto transform transition-transform duration-300 z-50 ' +
                        (menuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none')
                    }
                    aria-hidden={!menuOpen}
                >
                    <div className='flex items-center justify-between mb-6'>
                        <Image src={Logo} alt='Logo' width={120} height={32} />
                        <button
                            type='button'
                            aria-label='Close menu'
                            onClickCapture={(e) => { e.stopPropagation(); handleClose(e as any); }}
                            onPointerDown={(e) => { e.stopPropagation(); handleClose(e as any); }}
                            className='text-gray-600 pointer-events-auto'
                        >
                            <IoIosClose size={28} />
                        </button>
                    </div>

                    <nav>
                        <ul className='flex flex-col gap-4 mt-10'>
                            <li>
                                <a href='#home' className='text-[#16205B] font-light' onClick={() => setMenuOpen(false)}>
                                    <FaHome size={25} color='#FF7300' className='inline-block mr-2' />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='#about' className='text-[#16205B] font-light' onClick={() => setMenuOpen(false)}>
                                    <FaInfo size={25} color='#FF7300' className='inline-block mr-2' />
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='#policy' className='text-[#16205B] font-light' onClick={() => setMenuOpen(false)}>
                                    <MdPolicy size={25} color='#FF7300' className='inline-block mr-2' />
                                    Policy Advocacy
                                </a>
                            </li>
                            <li>
                                <a href='/calendar' className='flex items-center gap-2 text-[#16205B] font-light' onClick={() => setMenuOpen(false)}>
                                    <CiCalendar size={30} color='#FF7300' />
                                    Calendar
                                </a>
                            </li>
                            <li className='pt-4'>
                                <a href='#' className='inline-block rounded-full  bg-[#FF7300] px-4 py-2 text-md text-white shadow-md transition-all hover:bg-[#facc15] hover:shadow-lg ml-2 font-bold' onClick={() => setMenuOpen(false)}>
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>

            {/* lock scroll and handle Escape key (implemented via useEffect above) */}

            {/* DESKTOP VIEW */}
            <div className='hidden md:block'>
                <header className='p-7'>
                    <div className='max-w-7xl mx-auto flex justify-between items-center'>
                        <div>
                            <Image src={Logo} alt='Logo' width={200} height={40} priority />
                        </div>

                        <nav>
                            <ul className='flex space-x-40'>
                                <li>
                                    <a href='#home' className='text-white font-extralight hover:underline hover:font-bold transition-all duration-200'>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href='#about' className='text-white font-extralight hover:underline hover:font-bold transition-all duration-200'>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href='#policy' className='text-white font-extralight hover:underline hover:font-bold transition-all duration-200'>
                                        Policy Advocacy
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className='flex items-center gap-2'>
                            <CiCalendar size={33} color='#FF7300' className='cursor-pointer hover:scale-110 transition-transform' />

                            <button
                                className='rounded-[0.625rem] bg-[#FF7300] px-4 py-2 text-sm text-white shadow-md transition-all hover:bg-[#facc15] hover:shadow-lg ml-2 font-bold'
                                type='button'
                            >
                                Join Us
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header