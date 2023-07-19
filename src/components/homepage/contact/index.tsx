'use client';
import React, { useRef, useState } from "react";
import { motion , useScroll , useTransform} from "framer-motion";
import MagneticButton from "@/components/common/MagneticButton";
import {
    useSpring,
    MotionValue
  } from "framer-motion";
import { useRouter } from "next/navigation";

function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [0, 1], [-distanceUp, distanceDown]);
  }
function useParallaxX(value: MotionValue<number>, distanceLeft: number, distanceRight: number) {
    return useTransform(value, [0, 1], [-distanceLeft, distanceRight]);
  }

const Contact = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y1 = useParallax(scrollYProgress, 10,450);
    const y2 = useParallax(scrollYProgress, 0,300);
    const x = useParallaxX(scrollYProgress, 400,50);
    const router = useRouter()

    const handleNavigatoin = () => {
      router.push('/contact')
    }

  return (
    <section className="bg-[#1c1d20] h-[90vh] relative">
        <div className="md:block hidden h-full">
            <div className="mx-[15vw]">
                <motion.p  style={{ y:y1 }}className="font-satoshi text-[100px] font-medium tracking-wide text-white">Let&apos;s get in <br/> touch  </motion.p>
                <hr className="h-px mt-[8vh] bg-gray-600 border-0"/>
            </div>
          <motion.div style={{x:x}} className="absolute bottom-[41vh] right-[350px] z-20"><MagneticButton onClick={handleNavigatoin} className="bg-[#445DE9] h-48 w-48 z-10 ">Get in touch</MagneticButton></motion.div>
          <motion.div style={{ y:y2 }} className="flex mt-20 space-x-4 mx-[15vw]">
            <MagneticButton className="hover:bg-[#445DE9] hover:border-[#445DE9] px-10 py-5 text-[14px] font-normal border border-gray-400">akblockchain15@gmail.com</MagneticButton>
            <MagneticButton className="hover:bg-[#445DE9] hover:border-[#445DE9] px-10 py-5 text-[14px] font-normal border border-gray-400">+91 9024180290</MagneticButton>
          </motion.div>
        </div>

        <div className="md:hidden h-full">
            <div className="mx-[10vw]">
                <motion.p  style={{ y:y1 }}className="font-satoshi text-[40px] font-medium tracking-wide text-white">Let&apos;s get in <br/> touch  </motion.p>
                <hr className="h-px mt-[14vh] mb-[15vh] bg-gray-600 border-0"/>
            </div>
          <motion.div style={{x:x}} className="absolute bottom-[56vh] right-[20vw] z-20"><MagneticButton className="bg-[#445DE9] h-32 w-32 z-10 -translate-x-12 ">Get in touch</MagneticButton></motion.div>
          <motion.div style={{ y:y2 }} className="mt-20 mx-[15vw] space-y-5">
            <MagneticButton className="hover:bg-[#445DE9] hover:border-[#445DE9] w-full max-w-[400px] py-4 text-[14px] font-normal border border-gray-400">akblockchain15gmail.com</MagneticButton>
            <MagneticButton className="hover:bg-[#445DE9] hover:border-[#445DE9] w-full max-w-[400px] py-4 text-[14px] font-normal border border-gray-400">+91 9024180290</MagneticButton>
          </motion.div>
        </div>

        <footer className="absolute bottom-0 py-[3vh] text-base flex md:justify-between justify-center md:px-20  w-full">
            <div className="flex space-x-8 hidden md:block">
                <span className="text-white ">2023 © Edition</span>
                <span className="text-white ">Ananya Khandelwal</span>
            </div>
            <div className="flex space-x-8">
                <span className="text-white">Blogs</span>
                <span className="text-white">Twitter</span>
                <span className="text-white">Linkedin</span>
                <span className="text-white">Github</span>
            </div>
        </footer>
    </section>
  );
};

export default Contact;
