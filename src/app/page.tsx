import Banner from '@/components/homepage/banner'
import Header from '@/components/homepage/header'
import React from 'react'
import About from '@/components/homepage/about'
import Work from '@/components/homepage/work'
import Contact from '@/components/homepage/contact'
import { Sidebar } from '@/components/common/sidebar/Sidebar'
import Curtain from '@/components/common/curtain/Curtain'

const Home = () => {
  return (
    <div className='overflow-x-clip'>
        <Sidebar />
        <div className='dark'>
          <div className='dark:bg-[#1c1d20] overflow-x-clip' >
            <Curtain />
            <Header />
            <Banner />
          </div>
          <div className='h-[200vh] bg-[#FFFEFE] '>
            <About />
            <Work />
            <Contact />
          </div>
        </div>
    </div>
  )
}

export default Home