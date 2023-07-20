/* eslint-disable @next/next/no-img-element */
'use client';
import React,{useRef} from 'react'
import { motion , useScroll , useTransform} from "framer-motion";
import {
    useSpring,
    MotionValue
  } from "framer-motion";

  function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [1, 0], [-distanceUp, distanceDown]);
  } 

const Image1 = ({imgUrl}: any) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 200 ,500);

  return (
    <div className='md:mx-[10vw] mt-[28vh] h-[60vw] relative'>
        <img src={imgUrl} alt='img' className='md:w-[80vw] md:h-[44vw] w-[100vw] -z-10 ' />
        <div className='flex flex-col justify-center w-full h-3/5 z-20 absolute top-0 bg-transparent'>
          <motion.div style={{y:y1}} className='flex justify-center text-white '>
            <img src='/flexLogo.png' className='z-20 lg:block hidden w-28 h-28 ' alt="logo" />
          </motion.div>
        </div>
    </div>
  )
}


export const Image2 = ({imgUrl}: any) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 200 ,500);

  return (
    <div className='md:mx-[10vw] mt-[28vh] h-[60vw] relative'>
        <img src={imgUrl} alt='img' className='md:w-[80vw] md:h-[40vw] w-[100vw] -z-10 ' />
    </div>
  )
}

export default Image1