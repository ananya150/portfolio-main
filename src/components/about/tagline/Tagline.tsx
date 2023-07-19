'use client';
import React from 'react'
import Svg from './Svg'

const Tagline = () => {
  return (
    <div className=' relative h-[60vh] sm:mx-20 mx-10 md:mx-[17vw] border-b border-gray-300 flex flex-col justify-center'>
        <span className='font-satoshi font-[500] text-[40px] sm:text-[50px] md:about-tagline1'>Building useful products with elegance</span><br/>
        {/* <div className='abolute bottom-[-10vh] right-[30vw] bg-sky-100 z-20'> */}
            <Svg className="absolute bottom-[-10vh] right-[10vw]" />
        {/* </div> */}
    </div>
  )
}

export default Tagline