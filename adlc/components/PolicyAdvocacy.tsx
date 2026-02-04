'use client'
import React from 'react'
import Image from 'next/image'
import PolicyMobileBG from '../public/policy-mobile-bg.png';
import PolicyBG from '../public/policy-bg.png';
import { useState } from 'react';

const PolicyAdvocacy = () => {

  const [policy, setPolicy] = useState(true);
  const [economicClick, economicClicked] = useState(false);
  const [diasporaClick, diasporaClicked] = useState(false);
  const [knowledgeClick, knowledgeClicked] = useState(false);

  const policyVisibility = () => {
    setPolicy(!policy);
  }

  return (
    <div className='w-full flex justify-center items-center p-4 sm:p-6 md:p-0'>
      <div className='w-full max-w-[90%] xl:max-w-[90%] flex flex-col  rounded-2xl pt-20'>
        <h1 className='text-[#16205B] text-2xl text-left sm:hidden sm:text-3xl'>What We Do</h1>

        {/* Responsive two-column: stacked on mobile, side-by-side on md+ */}
        <div className='flex flex-col md:flex-row mt-10 '>

          {/* Left column: buttons (full width on mobile, half on md+) */}
          <div className='w-full md:w-[40%] flex flex-col items-center  '>
            <div className="w-full sm:mt-8 flex flex-col items-center  gap-5">

              <button
                className="box-border rounded-full border border-[#FF7300] px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-[50%] text-base sm:text-md md:text-md text-[#000000] font-extralight shadow-md bg-white sm:bg-none transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95"
                type="button" onClick={policyVisibility}
              >Policy Advocacy</button>

              {/* Mobile-only image below the first button */}
              {policy && (
                <div className='block md:hidden mb-0 w-full shadow-xl'>
                  <Image src={PolicyMobileBG} alt="Policy Mobile Background" width={900} height={160} className="w-full h-auto block" />
                </div>
              )}

              <button className="box-border rounded-full border border-[#FF7300] px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:w-[50%] text-base sm:text-md md:text-md text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95" type="button" onClick={() => economicClicked(true)}>Economic Cooperation</button>

              <button className="box-border rounded-full border border-[#FF7300] px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:w-[50%] text-base sm:text-md md:text-md text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95" type="button" onClick={() => diasporaClicked(true)}>Diaspora Engagement</button>

              <button className="box-border rounded-full border border-[#FF7300] px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:w-[50%] text-base sm:text-md md:text-md text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95" type="button" onClick={() => knowledgeClicked(true)}>Knowledge Engagement</button>

            </div>
          </div>

          {/* Right column: image (hidden on mobile, visible on md+ as half width) */}
          <div className='w-full hidden sm:block md:w-[60%] flex items-center justify-center'>
            {policy && (
              <div className='w-full'>
                <Image src={PolicyBG} alt='Policy Background' width={700} height={400} className='w-full h-auto object-contain' priority />
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default PolicyAdvocacy