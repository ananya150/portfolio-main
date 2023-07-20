import React from 'react'
import Header from '@/components/homepage/header';
import { Sidebar } from '@/components/common/sidebar/Sidebar';
import Curtain from '@/components/common/curtain/Curtain';
import Slogan from '@/components/work/slogan/Slogan';
import Products from '@/components/work/products/Products';
import Contact from '@/components/homepage/contact';
import MacImage from '@/components/work/individual-product/image/MacImage';
import Heading from '@/components/work/individual-product/Heading';
import {Image2} from '@/components/work/individual-product/Image1';
import AboutProduct from '@/components/work/individual-product/AboutProduct';

const OneWallet = () => {
  return (
    <div className=''>
        <Sidebar scrollThreshold={100} />
        <Curtain />
        <div className='bg-[#FFFEFE] h-[120vh]'>
          <Header />
          <Heading name="1 Wallet" sector="Cryptocurrency and wallets" />
          <Image2 imgUrl='/1wallet.png' />
          <div className='bg-[#DCDCDD] bg-fixed'>
            <MacImage imageUrl='/1wallet2.png' />
          </div>
          <div className='bg-[#1c1d20]'>
            <AboutProduct />
            <Contact />
          </div>
          
        </div>
    </div>
  )
}

export default OneWallet