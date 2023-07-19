import React from 'react'
import Header from '@/components/homepage/header'
import { Sidebar } from '@/components/common/sidebar/Sidebar'
import Curtain from '@/components/common/curtain/Curtain'
import Tagline from '@/components/about/tagline/Tagline'
import Info from '@/components/about/about/Info'
import Contact from '@/components/homepage/contact'

const About = () => {
  return (
    <div className=''>
        <Sidebar scrollThreshold={150} />
        <Curtain />
        <div className='bg-[#FFFEFE]'>
          <Header />
          <Tagline />
          <div className='bg-[#1c1d20]'>
            <Info />
            <Contact />
          </div>
        </div>
    </div>
  )
}

export default About