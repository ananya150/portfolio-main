/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MacImage = ({imageUrl}: {imageUrl: string}) => {
  return (
    <div className='flex justify-center'>
      <div className="mac-container relative rounded-[20px] bg-cover md:w-[68vw] md:h-[38vw] w-[96vw] h-[44vw] m-[10vw]">
          <img src={imageUrl} alt="Your Image" className='z-10 md:w-[52vw] w-[60vw] md:h-[26vw] h-[36vw] absolute md:top-[6vw] top-[3.5vw] md:left-[8vw] left-[10vw] overflow-hidden' />
          <div className='z-0 md:w-[52vw] w-[60vw] md:h-[32vw] h-[37vw] absolute md:top-[3vw] top-[3.5vw] md:left-[8vw] left-[10vw] overflow-hidden bg-black' />
      </div>
    </div>

  )
}

export default MacImage