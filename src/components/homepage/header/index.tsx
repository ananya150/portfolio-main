import React from 'react'
import Link from 'next/link'
import { headers } from "next/headers";


const Header = () => {

  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  return (
    <div className='h-[7vh] md:flex md:justify-between md:mx-[30px] items-end'>
        <Link href='/' className='hidden md:block'>
            <span className='dark:text-white text-black font-satoshi md:text-[18px]'>
                © &nbsp; Ananya Khandelwal
            </span>
            <div className='mt-[9px]'></div>
        </Link>
        <div className='flex mx-auto md:mx-0 justify-center space-x-12 mr-8 pt-6'>
          <div className='group'>
            <Link href='/work'><span className='dark:text-white text-black font-satoshi text-[18px] md:text-[19px]'>Work</span></Link>
            <div className={`w-[5px] h-[5px] rounded-full dark:bg-white bg-black mx-auto mt-1 ${activePath === '/work' ? 'opacity-100': 'opacity-0'} group-hover:opacity-100`}></div>
          </div>
          <div className='group'>
            <Link href='/about'><span className='dark:text-white text-black font-satoshi text-[18px] md:text-[19px]'>About</span></Link>
            <div className={`w-[5px] h-[5px] rounded-full dark:bg-white bg-black mx-auto mt-1 ${activePath === '/about' ? 'opacity-100': 'opacity-0'} group-hover:opacity-100`}></div>
          </div>
          <div className='group'>
            <Link href='/contact'><span className='dark:text-white text-black-black font-satoshi text-[18px] md:text-[19px]'>Contact</span></Link>
            <div className={`w-[5px] h-[5px] rounded-full dark:bg-white bg-black mx-auto mt-1 ${activePath === '/contact' ? 'opacity-100': 'opacity-0'} group-hover:opacity-100`}></div>
          </div>
        </div>
    </div>
  )
}

export default Header