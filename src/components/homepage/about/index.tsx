'use client';
import MagneticButton from '@/components/common/MagneticButton'
import React, {useRef, useEffect} from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [distance, -distance]);
  }
  

const About = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 150);
  

  return (
    <div className='h-[65vh]  flex'>
        <div className='w-8/12 flex'>
            <div className='w-3/12'></div>
            <div className='w-8/12 flex flex-col h-full'>
                <div className='h-1/3'></div>
                <div className='h-1/3'>
                    <span className='font-satoshi text-[39px] font-[400]'>
                        Revolutionizing the digital realm with elegant and functional solutions. A full-stack blockchain developer redefining industry standards.
                    </span>
                </div>
                <div className='h-1/3'></div>
            </div>
            <div className='w-1/12'></div>
        </div>
        <div className='w-4/12 flex'>
            <div className='w-2/5 flex flex-col h-full'>
                <div className='h-1/3'></div>
                <div className='h-1/3 ml-2 space-y-20'>
                    <span className='font-satoshi font-light text-[17px]'>
                        The combination of my passion for technology, code & interaction positions me in a unique place in the industry.
                    </span>
                    <motion.div style={{ y }} className='flex justify-center ml-12'>
                        <MagneticButton className="bg-[#1c1d20] h-48 w-48 z-10 -translate-x-12 ">
                            <span className='font-satoshi text-[18px] font-[400]'>About me</span>
                        </MagneticButton>
                    </motion.div>
                </div>
                <div className='h-1/3'></div>

            </div>
            <div className='w-3/5'></div>
        </div>
    </div>
  )
}

export default About