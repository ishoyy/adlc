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
    <div id="policy" className='w-full flex justify-center items-center p-4 sm:p-6 md:p-0'>
      <div className='w-full max-w-[90%] xl:max-w-[90%] flex flex-col  rounded-2xl pt-20'>
        <h1 className='text-[#16205B] text-2xl text-left sm:hidden sm:text-3xl'>What We Do</h1>

        {/* Responsive two-column: stacked on mobile, side-by-side on md+ */}
  <div className='flex flex-col md:flex-row mt-10 md:gap-4 items-start w-full'>

          {/* Left column: buttons (full width on mobile, half on md+) */}
          <div className='w-full md:w-1/3 flex flex-col items-start lg:mt-8'>
            <div className="w-full sm:mt-6 flex flex-col items-start gap-5 md:gap-3">

              <button
                className="box-border rounded-full border border-[#FF7300] px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 w-full text-base sm:text-lg md:text-xl text-[#000000] font-extralight shadow-md bg-white sm:bg-none transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95"
                type="button" onClick={policyVisibility}
              >Policy Advocacy</button>

              {/* Mobile-only image below the first button */}
              {policy && (
                <div className='block md:hidden mb-0 w-full shadow-xl'>
                  <Image src={PolicyMobileBG} alt="Policy Mobile Background" width={900} height={160} className="w-full h-auto block" />
                </div>
              )}

              <button className="box-border rounded-full border border-[#FF7300] px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 w-full text-base sm:text-lg md:text-xl text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95" type="button" onClick={() => economicClicked(true)}>Economic Cooperation</button>

              <button className="box-border rounded-full border border-[#FF7300] px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 w-full text-base sm:text-lg md:text-xl text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95" type="button" onClick={() => diasporaClicked(true)}>Diaspora Engagement</button>

              <button className="box-border rounded-full border border-[#FF7300] px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 w-full text-base sm:text-lg md:text-xl text-[#000000] font-extralight shadow-md bg-white transition-all duration-300 hover:text-[#FF7300] hover:shadow-lg hover:scale-105 active:scale-95" type="button" onClick={() => knowledgeClicked(true)}>Knowledge Engagement</button>

            </div>
          </div>

          {/* Right column: image (hidden on mobile, visible on md+ as half width) */}
          <div className='w-full hidden md:flex  items-center justify-center pl-4'>
            {policy && (
              <div className='w-full'>
                <Image src={PolicyBG} alt='Policy Background' width={900} height={600} className='w-full h-auto object-cover' priority />
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default PolicyAdvocacy