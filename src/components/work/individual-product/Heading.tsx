'use client';
import React,{useRef} from 'react'
import { motion , useScroll , useTransform} from "framer-motion";
import {
    useSpring,
    MotionValue
  } from "framer-motion";
import MagneticButton from '@/components/common/MagneticButton';

  function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [1, 0], [-distanceUp, distanceDown]);
  } 

const Heading = ({name, sector}: any) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 200 ,10);
  const y2 = useParallax(scrollYProgress, 40 ,100);

  return (
    <div>
        <div className=' relative mt-[20vh] sm:mx-20 mx-10 md:mx-[17vw]'>
            <span className='font-satoshi font-[500] text-[60px] md:about-tagline1'>{name}</span><br/>
        </div>

        <motion.div  className='md:mt-[6vh] md:mx-[17vw] hidden md:block'>
            <div className='mt-[10vh] md:flex md:space-x-[7vw] space-y-10'>
                
            <div className='w-full mt-9'>
              <span className='font-[400] font-satoshi text-[14px] text-gray-500'>ROLE/SERVICES</span>
              <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
              <span className='font-satoshitext-[18px]'>
                Design & Development
              </span>
            </div>

            <div className='w-full mt-9'>
              <span className='font-[400] font-satoshi text-[14px] text-gray-500'>SECTOR</span>
              <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
              <span className='font-satoshitext-[18px]'>
                {sector}
              </span>
            </div>

            <div className='w-full mt-9'>
              <span className='font-[400] font-satoshi text-[14px] text-gray-500'>LOCATION & YEAR</span>
              <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
              <span className='font-satoshitext-[18px]'>
                India © 2033 
              </span>
            </div>
            </div>

            <motion.div style={{ y:y1 }} className='flex bottom-[20vh] absolute right-[10vw] sm:right-[18vw] justify-center z-20'>
                <MagneticButton className="bg-[#445DE9] h-36 w-36 sm:h-48 sm:w-48 ">
                    <span className='font-satoshi text-[18px] font-[400]'>Live site ➚</span>
                </MagneticButton>
            </motion.div>


        </motion.div>

        <motion.div                     
          className='mt-[12vh] mx-[9vw] md:hidden'>

            <div className='mt-[6vh] md:flex md:space-x-[7vw] space-y-16'>

                <div className='w-full'>
                  <span className='font-[400] font-satoshi text-[14px] text-gray-500'>ROLE/SERVICES</span>
                  <hr className="h-px mt-[2vh] mb-[3vh] bg-gray-300 w-full border-0"/>
                  <span className='font-satoshitext-[18px]'>
                    Design & Development
                  </span>
                </div>

                <div className='w-full'>
                  <span className='font-[400] font-satoshi text-[14px] text-gray-500'>SECTOR</span>
                  <hr className="h-px mt-[2vh] mb-[3vh] bg-gray-300 w-full border-0"/>
                  <span className='font-satoshitext-[18px]'>
                    {sector}
                  </span>   
                </div>

                <div className='w-full'>
                  <span className='font-[400] font-satoshi text-[14px] text-gray-500'>LOCATION & YEAR</span>
                  <hr className="h-px mt-[2vh] mb-[3vh] bg-gray-300 w-full border-0"/>
                  <span className='font-satoshitext-[18px]'>
                    India © 2033 
                  </span>     
                </div>

                <motion.div style={{y:y2}}  className='flex bottom-[-25vh] absolute right-[30vw] sm:right-[18vw] justify-center z-20'>
                    <MagneticButton className="bg-[#445DE9] h-36 w-36 ">
                        <span className='font-satoshi text-[18px] font-[400]'>Live site ➚</span>
                    </MagneticButton>
                </motion.div>

            </div>
        </motion.div>
    </div>
  )
}

export default Heading