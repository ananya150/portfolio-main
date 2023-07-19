import React from 'react'
import Header from '@/components/homepage/header'
import { Sidebar } from '@/components/common/sidebar/Sidebar'
import Curtain from '@/components/common/curtain/Curtain'
import Tagline from '@/components/about/tagline/Tagline'

const About = () => {
  return (
    <div className=''>
        <Sidebar scrollThreshold={150} />
        <Curtain />
        <Header />
        <Tagline />
    </div>
  )
}

export default About