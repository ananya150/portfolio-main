import React from 'react'
import Header from '@/components/homepage/header'
import { Sidebar } from '@/components/common/sidebar/Sidebar'
import Curtain from '@/components/common/curtain/Curtain'
import Tagline from '@/components/about/tagline/Tagline'
import Info from '@/components/about/about/Info'

const About = () => {
  return (
    <div className=''>
        <Sidebar scrollThreshold={150} />
        <Curtain />
        <div className='bg-[#FFFEFE]'>
          <Header />
          <Tagline />
          <Info />
        </div>
    </div>
  )
}

export default About