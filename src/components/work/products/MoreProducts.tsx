import React from 'react'
import MagneticButton from '@/components/common/MagneticButton'

const MoreProducts = () => {
  return (
    <div className='mt-[14vh] flex  items-center justify-around w-full'>
        <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi text-[17px] font-[400]'>Nodejs orderbook</span></MagneticButton>
        <MagneticButton className="bg-[#1c1d20] h-[70px] w-[160px]"><span className='font-satoshi text-[17px] font-[400]'>Trading bots</span></MagneticButton>
        <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px]"><span className='font-satoshi text-[17px] font-[400]'>Gpt weather app</span></MagneticButton>
        <MagneticButton className="bg-[#1c1d20] h-[70px] w-[200px] z-30"><span className='font-satoshi text-[17px] font-[400]'>Portfolio</span></MagneticButton>
        <MagneticButton className="bg-[#1c1d20] h-[70px] w-[130px] z-30"><span className='font-satoshi text-[17px] font-[400]'>Blogs</span></MagneticButton>

    </div>
  )
}

export default MoreProducts