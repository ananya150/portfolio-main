'use client';
import React,{useRef} from 'react'
import { motion , useScroll , useTransform} from "framer-motion";
import {
    useSpring,
    MotionValue
  } from "framer-motion";
import MagneticButton from '@/components/common/MagneticButton';

function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [0, 1], [-distanceUp, distanceDown]);
  }

const AboutProduct = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y1 = useParallax(scrollYProgress, 200 ,100);
    const y2 = useParallax(scrollYProgress, 160 ,160);


  return (
    <div className='md:h-[180vh] h-[270vh] md:custom-clip-path2 custom-clip-path3  graadient-back'>

        <motion.div style={{y:y2}} className='md:mt-[12vh] mx-[9vw] hidden md:block'>

            <div className='flex flex-col space-y-16'>
                    <span className='font-satoshi text-[55px] font-[500]'>About</span>
                    <span className='font-satoshi text-[22px]'>
                            I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                            I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                    </span>
            </div>

            <div className='mt-[20vh]'>
                <span className='font-satoshi text-[55px] font-[500]'>Features</span>
            </div>

            <div className='mt-[6vh] md:flex md:space-x-[7vw] space-y-10'>

                
                <div className='w-full mt-9'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>Development</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                        </span>
                    </div>
                </div>

                <div className='w-full'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>Development</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.
                        </span>
                    </div>
                </div>

                <div className='w-full'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>The full package</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            A complete website from concept to implementation, that&apos;s what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                        </span>
                    </div>
                </div>


            </div>

            <motion.div style={{y:y2}}  className='flex  justify-center z-20 mt-10'>
                <MagneticButton className="bg-[#445DE9] h-44 w-44 ">
                    <span className='font-satoshi text-[18px] font-[400]'> ↖ All products </span>
                </MagneticButton>
            </motion.div>

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
                        <span className='font-satoshitext-[18px]'>
                            With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.
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
                    <span className='font-satoshi font-[500] text-[39px]'>Design</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshitext-[18px]'>
                            With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.
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
                    <span className='font-satoshi font-[500] text-[39px]'>Design</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshitext-[18px]'>
                            With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.
                        </span>
                    </div>
                </motion.div>

            </div>
        </motion.div>

    </div>
  )
}

export default AboutProduct