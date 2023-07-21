'use client';
import React,{useRef} from 'react';
import Image from 'next/image';
import { motion , useScroll , useTransform} from "framer-motion";
import MagneticButton from "@/components/common/MagneticButton";
import {
    useSpring,
    MotionValue
  } from "framer-motion";

  function useParallaxX(value: MotionValue<number>, distanceLeft: number, distanceRight: number) {
    return useTransform(value, [0, 1], [-distanceLeft, distanceRight]);
  }

const ContactForm = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useParallaxX(scrollYProgress, 100,50);

    const handleSubmit = (event: any) => {
        event.preventDefault(); 
        const form = document.getElementById('fs-frm') as HTMLFormElement; 
        form.submit();
    }


  return (
    <div className=''>
        <div className='md:mx-[16vw] mx-[6vw] mt-[20vh]'>
            <div className='w-full lg:flex lg:space-x-20 '>
                <div className='md:w-3/4 text-white'>
                    <span className='md:text-[80px] text-[40px] font-[500] font-satoshi'>Let&apos;s start a</span><br/>
                    <span className='md:text-[80px] text-[40px] font-[500] font-satoshi'>project together</span>
                    <div className='mt-[19vh] border-t border-gray-600 '>
                        <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xknlgrwz" method="post">

                            <div className='pt-12 pb-6 flex items-center space-x-16 border-b border-gray-600'>
                                <span className='font-[400] font-satoshi text-[16px] text-gray-400'>01</span>
                                <div className='w-full'>
                                    <span className='font-satoshi font-[500] text-[25px]'>What&apos;s your name?</span><br/><br/>
                                    <input type="text" name="name" id="full-name" placeholder="John Doe *" className='h-16 bg-transparent focus:border-[#1c1d20] focus:outline-none  w-full' required={true} />
                                </div>
                            </div>

                            <div className='pt-12 pb-6 flex items-center space-x-16 border-b border-gray-600'>
                                <span className='font-[400] font-satoshi text-[16px] text-gray-400'>02</span>
                                <div className='w-full'>
                                    <span className='font-satoshi font-[500] text-[25px]'>What&apos;s your email?</span><br/><br/>
                                    <input type="email" name="_replyto" id="email-address" placeholder="john@doe.com *" className='h-16 bg-transparent focus:border-[#1c1d20] focus:outline-none  w-full' required={true} />
                                </div>
                            </div>

                            <div className='pt-12 pb-6 flex items-center space-x-16 border-b border-gray-600'>
                                <span className='font-[400] font-satoshi text-[16px] text-gray-400'>03</span>
                                <div className='w-full'>
                                    <span className='font-satoshi font-[500] text-[25px]'>What&apos;s your message?</span><br/><br/>
                                    <input type="text" name="message" id="message" placeholder="Hello Ananya, can we *" className='h-16 bg-transparent focus:border-[#1c1d20] focus:outline-none  w-full' required={true} />
                                </div>
                            </div>
                            <motion.div style={{x:x}} className="absolute bottom-[60vh] md:bottom-[20vh] right-[40vw] z-20"><MagneticButton onClick={handleSubmit} className="bg-[#445DE9] h-48 w-48 z-10 "><span className='font-satoshi text-[18px] font-[400]'>Send</span></MagneticButton></motion.div>
                        </form>
                    </div>
                    <div className='my-[30vh] relative'>
                        <hr className="h-px mt-[8vh] bg-gray-600 border-0"/>
                    </div>
                </div>
                <div className='w-1/4 lg:block hidden'>
                    <div className='flex justify-center mt-40'>
                        <Image src='/me.png' alt='profile-img' height={600} width={600} className="w-[140px] h-[140px]"/>
                    </div>
                    <div className='flex justify-center'>
                        <div className='mt-40 '>
                            <div>
                                <span className='text-gray-500 font-satoshi font-[400] text-[15px]'>Contact Details</span>
                                <br/><br/>
                                <span className='text-white font-satoshi font-[400] text-[20px]'>akblockchain15@gmail.com</span>
                                <br/><br/>
                                <span className='text-white font-satoshi font-[400] text-[20px]'>+91 9024180290</span>
                            </div>
                            <div className='mt-20'>
                                <span className='text-gray-500 font-satoshi font-[400] text-[15px]'>Location</span>
                                <br/><br/>
                                <span className='text-white font-satoshi font-[400] text-[20px]'>Mumbai, India</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-60 flex space-x-20 items-start lg:hidden'>
                    <div>
                        <span className='text-gray-500 font-satoshi font-[400] text-[15px]'>Contact Details</span>
                        <br/><br/>
                        <span className='text-white font-satoshi font-[400] text-[20px]'>akblockchain15@gmail.com</span>
                        <br/><br/>
                        <span className='text-white font-satoshi font-[400] text-[20px]'>+91 9024180290</span>
                    </div>
                    <div>
                        <span className='text-gray-500 font-satoshi font-[400] text-[15px]'>Location</span>
                        <br/><br/>
                        <span className='text-white font-satoshi font-[400] text-[20px]'>Mumbai, India</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm