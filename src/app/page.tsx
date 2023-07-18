import Banner from '@/components/homepage/banner'
import Header from '@/components/homepage/header'
import React from 'react'


const Home = () => {
  return (
    <div className='dark overflow-x-clip'>
      <div className='dark:bg-[#1c1d20] overflow-x-clip' >
        <Header />
        <Banner />
      </div>
      <div className='h-[200vh] '>
        abcd
      </div>
    </div>
  )
}

export default Home