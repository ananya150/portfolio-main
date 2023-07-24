import React from 'react'
import Header from '@/components/homepage/header';
import { Sidebar } from '@/components/common/sidebar/Sidebar';
import Curtain from '@/components/common/curtain/Curtain';
import Slogan from '@/components/work/slogan/Slogan';
import Products from '@/components/work/products/Products';
import Contact from '@/components/homepage/contact';
import MacImage from '@/components/work/individual-product/image/MacImage';
import Heading from '@/components/work/individual-product/Heading';
import Image1 from '@/components/work/individual-product/Image1';
import AboutProduct from '@/components/work/individual-product/AboutProduct';

const Flexxyz = () => {
  return (
    <div className=''>
        <Sidebar scrollThreshold={100} />
        <Curtain />
        <div className='bg-[#FFFEFE] h-[120vh]'>
          <Header />
          <Heading name="Flex.xyz" sector="Cryptocurrency and payments" link="https://flexxyz.vercel.app/" />
          <Image1 imgUrl='/flex.png' />
          <div className='bg-[#DCDCDD] bg-fixed'>
            <MacImage imageUrl='/flex2.png' />
          </div>
          <div className='bg-[#1c1d20]'>
            <AboutProduct product="flexxyz" />
            <Contact />
          </div>
          
        </div>
    </div>
  )
}

export default Flexxyz