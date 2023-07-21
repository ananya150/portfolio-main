import React from 'react'
import Header from '@/components/homepage/header';
import { Sidebar } from '@/components/common/sidebar/Sidebar';
import Curtain from '@/components/common/curtain/Curtain';
import Slogan from '@/components/work/slogan/Slogan';
import Products from '@/components/work/products/Products';
import Contact from '@/components/homepage/contact';

const Work = () => {
  return (
    <div className='z-20'>
        <Sidebar scrollThreshold={100} />
        <Curtain />
        <div className='bg-[#FFFEFE]'>
          <Header />
          <Slogan />
          <div className='bg-[#1c1d20]'>
            <Products />
            <Contact />
          </div>
        </div>
    </div>
  )
}

export default Work