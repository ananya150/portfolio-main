import React from 'react'
import Header from '@/components/homepage/header';
import { Sidebar } from '@/components/common/sidebar/Sidebar';
import Curtain from '@/components/common/curtain/Curtain';
import Slogan from '@/components/work/slogan/Slogan';

const Work = () => {
  return (
    <div className=''>
        <Sidebar scrollThreshold={150} />
        <Curtain />
        <div className='bg-[#FFFEFE]'>
          <Header />
          <Slogan />
          <div className='bg-[#1c1d20]'>
          </div>
        </div>
    </div>
  )
}

export default Work