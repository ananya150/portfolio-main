'use client';
import React, {useRef} from 'react';
import Image from 'next/image';
import { motion , useScroll , useTransform} from "framer-motion";
import {
    useSpring,
    MotionValue
  } from "framer-motion";

function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [0, 1], [-distanceUp, distanceDown]);
  }

const Info = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y1 = useParallax(scrollYProgress, 100 ,10);

  return (
    <div className='lg:mx-[9vw] mx-[5vw] lg:flex lg:mt-[18vh] mt-[22vh]'>
        <motion.div style={{y:y1}} className='w-1/3 ml-[8vw] mr-[4vw] lg:block hidden'>
            <span className='font-satoshi font-[400] text-[18px]'>
                I am a junior fullstack blockchain developer. I like building products with amazing ux that solve some real world problem. I push my work to new horizons, always putting quality first.
            </span>
            <br/><br/>
            <span className='font-satoshi text-[17px] text-gray-500'>Always exploring..</span>
        </motion.div>
        <div  className='w-full ml-[2vw] mr-[2vw] lg:hidden'>
            <span className='font-satoshi font-[400] text-[17px]'>
                I am a junior fullstack blockchain developer. I like building products with amazing ux that solve some real problem. I push my work to new horizons, always putting quality first.
            </span>
            <br/><br/>
            <span className='font-satoshi text-[17px] text-gray-500'>Always exploring..</span>
        </div>
        <div className='lg:w-2/3 w-full flex justify-center mt-20 lg:mt-0'>
            <Image src={'/me.png'} alt='personal-image' width={600} height={600} className="md:w-[40vw] md:h-[40vw] w-68 h-68"  />
        </div>
    </div>
  )
}

export default Info