import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    // <div className='flex flex-col sm:flex-row border border-gray-400'>
    //     {/* hero left side */}
    //     <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    //     <div className='text-[#414141]'>
    //         <div className='flex items-center gap-2'>
    //             <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
    //             <p className='font-medium text-sm md:text-base'>Our Bestsellers</p>

    //         </div>
    //         <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest arrivals</h1>
    //         <div className='flex items-center  gap-2' >
    //             <p className='font-semibold text-sm md:text-base'>Shop Now</p>
    //             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>

    //         </div>

    //     </div>

    //     </div>

    // </div>
    <div className='flex flex-col sm:flex-row border border-gray-400'>
  {/* Hero left side */}
  <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
    <div className='text-[#414141] space-y-4'>
      {/* Bestseller Title */}
      <div className='flex items-center gap-2'>
        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        <p className='font-medium text-sm md:text-base'>Our Bestsellers</p>
      </div>

      {/* Main Heading */}
      <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl font-bold leading-snug'>Latest Arrivals</h1>

      {/* Shop Now Section */}
      <div className='flex items-center gap-2'>
        <p className='font-semibold text-sm md:text-base'>Shop Now</p>
        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
      </div>
    </div>
  </div>
  <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
</div>

  )
}

export default Hero