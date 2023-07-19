'use client';
import React from 'react'
import Svg from './Svg'

const Tagline = () => {
  return (
    <div className=' relative h-[63vh] sm:mx-20 mx-10 md:mx-[17vw] border-b border-gray-300 flex flex-col justify-center'>
        <span className='font-satoshi font-[500] text-[40px] sm:text-[50px] md:about-tagline1'>Building useful products with elegance</span><br/>
            <Svg className="absolute bottom-[-10vh] right-[12vw] -rotate-12 " />
    </div>
  )
}

export default Tagline