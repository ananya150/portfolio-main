import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-[7vh] flex mx-[20px] justify-between items-end'>
        <Link href='#'>
            <span className='text-white font-satoshi text-[18px]'>
                © &nbsp; Ananya Khandelwal
            </span>
        </Link>
        <div className='flex space-x-12 mr-8 '>
          <div className='group'>
            <Link href='#'><span className='text-white font-satoshi text-[19px]'>Work</span></Link>
            <div className='w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1 opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href='#'><span className='text-white font-satoshi text-[19px]'>About</span></Link>
            <div className='w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1 opacity-0 group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href='#'><span className='text-white font-satoshi text-[19px]'>Contact</span></Link>
            <div className='w-[5px] h-[5px] rounded-full bg-white mx-auto mt-1 opacity-0 group-hover:opacity-100'></div>
          </div>
        </div>
    </div>
  )
}

export default Header