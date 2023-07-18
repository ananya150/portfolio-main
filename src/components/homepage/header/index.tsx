import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-[7vh] md:flex md:justify-between md:mx-[30px] items-end'>
        <Link href='#' className='hidden md:block'>
            <span className='text-white font-satoshi md:text-[18px]'>
                © &nbsp; Ananya Khandelwal
            </span>
            <div className='mt-[9px]'></div>
        </Link>
        <div className='flex mx-auto md:mx-0 justify-center space-x-12 mr-8 pt-6'>
          <div className='group'>
            <Link href='#'><span className='text-white font-satoshi text-[18px] md:text-[19px]'>Work</span></Link>
            <div className='w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1 opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href='#'><span className='text-white font-satoshi text-[18px] md:text-[19px]'>About</span></Link>
            <div className='w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1 opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href='#'><span className='text-white font-satoshi text-[18px] md:text-[19px]'>Contact</span></Link>
            <div className='w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1 opacity-0 group-hover:opacity-100'></div>
          </div>
        </div>
    </div>
  )
}

export default Header