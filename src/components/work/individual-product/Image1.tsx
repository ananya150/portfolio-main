/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Image1 = ({imgUrl}: any) => {
  return (
    <div className='md:mx-[10vw] mt-[24vh] h-[150vh]'>
        <img src={imgUrl} alt='img' className='md:w-[80vw] md:h-[44vw] w-[100vw] ' />
    </div>
  )
}

export default Image1