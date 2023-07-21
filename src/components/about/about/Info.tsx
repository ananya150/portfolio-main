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
    const y1 = useParallax(scrollYProgress, 200 ,10);
    const y2 = useParallax(scrollYProgress, 160 ,160);

  return (
    <div className='md:h-[180vh] h-[270vh] md:custom-clip-path2 custom-clip-path3  graadient-back'>

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
            <div  className='lg:w-2/3 w-full flex justify-center mt-20 lg:mt-0 ]'>
                <Image src={'/me.png'} alt='personal-image' width={600} height={600} className="md:w-[40vw] md:h-[40vw] w-68 h-68 bg-fixed"  />
            </div>
        </div>

        <motion.div style={{y:y2}} className='md:mt-[12vh] mx-[9vw] hidden md:block'>
            <div className=''>
                <span className='font-satoshi text-[45px] font-[500]'>I can help you with ...</span>
            </div>
            <div className='mt-[10vh] md:flex md:space-x-[7vw] space-y-10'>
                
            <div className='w-full mt-9'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>Design</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            With a solid track record in designing products and user interfaces, I deliver strong and user-friendly digital designs. Solid user experience is the foundation of any succesful company.
                        </span>
                    </div>
                </div>

                <div className='w-full'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>Blockchain</span>
                    <div className='mt-[4vh]'>
                        <span className='font-satoshi text-[18px]'>
                            I can write and deploy smart contracts for you on the blockchain that fit seamlessly with the need. Weather it be a simple work like data storage or complex defi projects, I can do it all.
                        </span>
                    </div>
                </div>

                <div className='w-full'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>The full package</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            I can create a beautiful website that connects with blockchain. My great sense for design and my fullstack development skills enable me to create kick-ass projects.
                        </span>
                    </div>
                </div>

            </div>
        </motion.div>

        <motion.div className='mt-[19vh] mx-[9vw] md:hidden'>
            <div className=''>
                <span className='font-satoshi text-[45px] font-[500]'>I can help you with ...</span>
            </div>
            <div className='mt-[6vh] md:flex md:space-x-[7vw] space-y-24'>

                <motion.div className='w-full'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{duration:1, delay:0.3}}
                >
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>Design</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[16px]'>
                            With a solid track record in designing products and user interfaces, I deliver strong and user-friendly digital designs. Solid user experience is the foundation of any succesful company.
                        </span>
                    </div>
                </motion.div>

                <motion.div className='w-full'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{duration:1, delay:0.3}}
                >
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>Blockchain</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[16px]'>
                            I can write and deploy smart contracts for you on the blockchain that fit seamlessly with the need. Weather it be a simple work like data storage or complex defi projects, I can do it all.
                        </span>
                    </div>
                </motion.div>

                <motion.div className='w-full'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{duration:1, delay:0.3}}
                >
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>The full package</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[16px]'>
                        I can create a beautiful website that connects with blockchain. My great sense for design and my fullstack development skills enable me to create kick-ass projects.
                        </span>
                    </div>
                </motion.div>

            </div>
        </motion.div>

    </div>
  )
}

export default Info