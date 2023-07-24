'use client';
import React from 'react'
import MagneticButton from '@/components/common/MagneticButton'
import Link from 'next/link'
import {motion} from 'framer-motion'

const MoreProducts = () => {
  return (
    <div className=''>
      <div className='lg:block hidden '>
        <div className='mt-[14vh] flex items-center justify-around w-full '>
            <Link href='https://github.com/ananya150/orderbook-js' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi text-[17px] font-[400]'>Nodejs orderbook</span></MagneticButton></Link>
            <Link href='https://github.com/ananya150/Trading-Bot' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] w-[180px]"><span className='font-satoshi text-[17px] font-[400]'>Trading bots</span></MagneticButton></Link>
            <Link href='https://github.com/ananya150/gpt-weather-app' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi text-[17px] font-[400]'>Gpt weather app</span></MagneticButton></Link>
            <Link href='https://github.com/ananya150/portfolio-main' target='_blank' className=''><MagneticButton className="bg-[#1c1d20] h-[70px] w-[180px] z-30"><span className='font-satoshi text-[17px] font-[400]'>Portfolio</span></MagneticButton></Link>
            <Link href='https://github.com/ananya150/blog' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] w-[180px] z-30"><span className='font-satoshi text-[17px] font-[400]'>Blogs</span></MagneticButton></Link>
            {/* <motion.div  className="absolute bottom-[43vh] right-[50px] z-20"><MagneticButton  className="bg-[#445DE9] h-48 w-48 z-10 ">Get in touch</MagneticButton></motion.div> */}

        </div>
      </div>
      <div className='lg:hidden space-y-20 mt-[14vh] w-full'>
        <div className='flex justify-center space-x-3'>
        <Link href='https://github.com/ananya150/orderbook-js' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] md:w-[200px] w-[160px]"><span className='font-satoshi md:text-[17px] text-[12px] font-[400]'>Nodejs orderbook</span></MagneticButton></Link>
        <Link href='https://github.com/ananya150/Trading-Bot' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] md:w-[200px] w-[160px]"><span className='font-satoshi md:text-[17px] text-[12px] font-[400]'>Trading bots</span></MagneticButton></Link>
        </div>
        <div className='flex justify-center space-x-5'>
          <Link href='https://github.com/ananya150/portfolio-main' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] md:w-[200px] w-[160px]"><span className='font-satoshi md:text-[17px] text-[142x] font-[400]'>Portfolio</span></MagneticButton></Link>
          <Link href='https://github.com/ananya150/blog' target='_blank'><MagneticButton className="bg-[#1c1d20] h-[70px] md:w-[200px] w-[160px]"><span className='font-satoshi md:text-[17px] text-[12px] font-[400]'>Blogs</span></MagneticButton></Link>
        </div>
      </div>

    </div>
  )
}

export default MoreProducts