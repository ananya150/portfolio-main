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

  function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [0, 1], [distanceDown, -distanceUp]);
  }
  

const About = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300,120);
  

  return (
        <div className='relative h-[65vh] sm:flex'>

            <div className='sm:w-8/12 w-full flex'>
                <div className='hidden sm:block w-3/12'></div>
                <div className='sm:w-8/12 w-full flex flex-col h-full'>
                    <div className='h-1/3 hidden sm:block'></div>
                    <motion.div className='sm:h-1/3 mx-24 sm:mx-0 mt-20 sm:mt-0'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{duration:2}}
                        
                    >
                        <span className='font-satoshi text-[20px] xl:text-[39px] sm:text-[25px] font-[400]'>
                            Revolutionizing the digital realm with elegant and functional solutions. A full-stack blockchain developer redefining industry standards.
                        </span>
                    </motion.div>
                    <div className='h-1/3 hidden sm:block'></div>
                </div>
                <div className='hidden sm:block w-1/12'></div>
            </div>

            <div className='sm:w-4/12 w-full flex'>
                <div className='sm:w-64 w-1/2 flex flex-col h-full'>
                    <div className='h-1/3'></div>
                    <div className='h-1/3 mt-20 sm:mt-0 ml-24 sm:ml-2'>
                        <span className='font-satoshi font-light text-[14px] lg:text-[17px]'>
                            The combination of my passion for technology, code & interaction positions me in a unique place in the industry.
                        </span>
                    </div>
                    <div className='h-1/3'></div>

                </div>
                <div className='sm:hidden w-1/2'></div>
            </div>
            <motion.div style={{ y }} className='flex bottom-24 absolute right-[23vw] justify-center z-20'>
                <MagneticButton className="bg-[#1c1d20] h-40 w-40 ">
                    <span className='font-satoshi text-[18px] font-[400]'>About me</span>
                </MagneticButton>
            </motion.div>
        </div>
  )
}

export default About