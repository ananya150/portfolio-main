import Banner from '@/components/homepage/banner'
import React from 'react'


const Home = () => {
  return (
    <div className='dark'>
      <div className='h-[100vh] w-[100vw] dark:bg-[#1c1d20] overflow-x-clip' >
        <Banner />
      </div>
    </div>
  )
}

export default Home