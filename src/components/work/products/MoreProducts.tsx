import React from 'react'
import MagneticButton from '@/components/common/MagneticButton'

const MoreProducts = () => {
  return (
    <div>
      <div className='lg:block hidden'>
        <div className='mt-[14vh] flex items-center justify-around w-full'>
            <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi text-[17px] font-[400]'>Nodejs orderbook</span></MagneticButton>
            <MagneticButton className="bg-[#1c1d20] h-[70px] w-[180px]"><span className='font-satoshi text-[17px] font-[400]'>Trading bots</span></MagneticButton>
            <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi text-[17px] font-[400]'>Gpt weather app</span></MagneticButton>
            <MagneticButton className="bg-[#1c1d20] h-[70px] w-[180px] z-30"><span className='font-satoshi text-[17px] font-[400]'>Portfolio</span></MagneticButton>
            <MagneticButton className="bg-[#1c1d20] h-[70px] w-[180px] z-30"><span className='font-satoshi text-[17px] font-[400]'>Blogs</span></MagneticButton>
        </div>
      </div>
      <div className='lg:hidden space-y-20 mt-[14vh] w-full'>
        <div className='flex justify-center space-x-5'>
          <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi md:text-[17px] text-[14px] font-[400]'>Nodejs orderbook</span></MagneticButton>
          <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi md:text-[17px] text-[14px] font-[400]'>Trading bots</span></MagneticButton>
        </div>
        <div className='flex justify-center space-x-5'>
          <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi md:text-[17px] text-[14px] font-[400]'>Portfolio</span></MagneticButton>
          <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi md:text-[17px] text-[14px] font-[400]'>Blogs</span></MagneticButton>
        </div>
      </div>

    </div>
  )
}

export default MoreProducts