'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Headshot from '../public/placeholder.png'
const Committee: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    
    return (
        <div className='w-full flex flex-col mt-40 '>

            <div className='gap-4 p-6 sm:p-8 md:p-10 ml-10'>
                <h1 className='font-bold text-[#16205B] text-3xl mb-4'>Meet the Interim Leadership Committee</h1>
                <p className='font-extralight'>
                    Meet our diverse network of thought leaders shaping Africa’s future —
                    from corporate executives and researchers to artists and
                    entrepreneurs.
                </p>
            </div>

            {/* Use Tailwind grid so each child is an individual grid item */}
            <div className='w-full flex justify-center items-center align-middle p-4 sm:p-6 md:p-0 '>
                <div className='w-full max-w-[100%] xl:max-w-[90%] flex flex-col rounded-2xl  '>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6 justify-items-center">
                            <div id="Jude-Kong" className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:max-w-[240px]">
                                <div className="w-full">
                                    <Image
                                        src={Headshot}
                                        alt="Policy Mobile Background"
                                        width={350}
                                        height={160}
                                        className="w-full sm:h-50 object-cover"
                                    />
                                </div>
                                <div className='p-4 flex flex-col items-center gap-2'>
                                    <h2 className='font-bold text-[#16205B]'>Jude Kong</h2>
                                    <p className='font-extralight'>Position</p>
                                </div>
                            </div>

                            <div id="Kofi-Achampong" className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:max-w-[240px]">
                                <div className="w-full">
                                    <Image
                                        src={Headshot}
                                        alt="Kofi Achampong"
                                        width={350}
                                        height={160}
                                        className="w-full sm:h-50 object-cover"
                                    />
                                </div>
                                <div className='p-4 flex flex-col items-center gap-2'>
                                    <h2 className='font-bold text-[#16205B]'>Kofi Achampong</h2>
                                    <p className='font-extralight'>Position</p>
                                </div>
                            </div>

                            <div id="Minerva-Gray" className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:max-w-[240px]">
                                <div className='w-full'>
                                    <Image
                                        src={Headshot}
                                        alt="Minerva Saddler Gray"
                                        width={350}
                                        height={160}
                                        className="w-full sm:h-50 object-cover"
                                    />
                                </div>
                                <div className='p-4 flex flex-col items-center'>
                                    <h2 className='font-bold text-[#16205B]'>Minerva Saddler Gray</h2>
                                    <p className='font-extralight'>Position</p>
                                </div>
                            </div>

                            <div id="Nerissa-Allen" className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:max-w-[240px]">
                                <div className="w-full">
                                    <Image
                                        src={Headshot}
                                        alt="Nerissa Allen"
                                        width={350}
                                        height={160}
                                        className="w-full sm:h-50 object-cover"
                                    />
                                </div>
                                <div className='p-4 flex flex-col items-center gap-2'>
                                    <h2 className='font-bold text-[#16205B]'>Nerissa Allen</h2>
                                    <p className='font-extralight'>Position</p>
                                </div>
                            </div>

                            {/* On small screens the wrapper is `contents` so children are grid items (2-per-row). On lg it becomes a full-row flex container centering the three cards. */}
                            <div className="contents lg:col-span-4 lg:flex lg:justify-center lg:gap-15 mt-10">
                            <div id="Patrick-Makokoro" className={`${showAll ? 'block' : 'hidden sm:block'} bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:max-w-[240px]`}>
                                 <div className="w-full">
                                     <Image
                                         src={Headshot}
                                         alt="Patrick Makokoro"
                                         width={350}
                                         height={160}
                                         className="w-full sm:h-50 object-cover"
                                     />
                                 </div>
                                 <div className='p-4 flex flex-col items-center gap-2'>
                                     <h2 className='font-bold text-[#16205B]'>Patrick Makokoro</h2>
                                     <p className='font-extralight'>Position</p>
                                 </div>
                             </div>

                            <div id="Perry-Chuinkam" className={`${showAll ? 'block' : 'hidden sm:block'} bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:max-w-[240px]`}>
                                 <div className="w-full">
                                     <Image
                                         src={Headshot}
                                         alt="Perry Chuinkam"
                                         width={350}
                                         height={160}
                                         className="w-full sm:h-50 object-cover"
                                     />
                                 </div>
                                 <div className='p-4 flex flex-col items-center gap-2'>
                                     <h2 className='font-bold text-[#16205B]'>Perry Chuinkam</h2>
                                     <p className='font-extralight'>Position</p>
                                 </div>
                             </div>

                            <div id="Tapfuma-Musewe" className={`${showAll ? 'block' : 'hidden sm:block'} bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full sm:w-80`}>
                                 <div className="w-full">
                                     <Image
                                         src={Headshot}
                                         alt="Tapfuma Musewe"
                                         width={350}
                                         height={160}
                                         className="w-full sm:h-50 object-cover"
                                     />
                                 </div>
                                 <div className='p-4 flex flex-col items-center gap-2'>
                                     <h2 className='font-bold text-[#16205B]'>Tapfuma Musewe</h2>
                                     <p className='font-extralight'>Position</p>
                                 </div>
                             </div>
                             </div>
                             </div>

                        {/* Mobile-only toggle to reveal hidden members */}
                        <div className='w-full flex justify-center mt-6 sm:hidden'>
                            <button
                                className='box-border rounded-full border border-[#FF7300] px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:w-[50%] text-base sm:text-md md:text-md text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95'
                                onClick={() => setShowAll(prev => !prev)}
                                aria-expanded={showAll}
                            >
                                {showAll ? 'Show Less' : 'See All Members'}
                            </button>
                        </div>
             </div>
             </div>

         </div>
     )
 }

 export default Committee