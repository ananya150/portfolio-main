import Banner from '@/components/homepage/banner'
import Header from '@/components/homepage/header'
import React from 'react'
import About from '@/components/homepage/about'
import Work from '@/components/homepage/work'
import Contact from '@/components/homepage/contact'

const Home = () => {
  return (
    <div className='dark overflow-x-clip'>
      <div className='dark:bg-[#1c1d20] overflow-x-clip' >
        <Header />
        <Banner />
      </div>
      <div className='h-[200vh] bg-[#FFFEFE] '>
         <About />
         <Work />
         <Contact />
      </div>
    </div>
  )
}

export default Home