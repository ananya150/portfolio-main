'use client';
import React, { useRef, useState } from "react";
import { motion , useScroll , useTransform} from "framer-motion";
import MagneticButton from "@/components/common/MagneticButton";
import {
    useSpring,
    MotionValue
  } from "framer-motion";

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
    const y2 = useParallax(scrollYProgress, 10,300);
    const x = useParallaxX(scrollYProgress, 400,50);

  return (
    <section className="bg-[#1c1d20] h-[90vh] relative">
        <div className="md:block hidden h-full">
            <div className="mx-[15vw]">
                <motion.p  style={{ y:y1 }}className="font-satoshi text-[100px] font-medium tracking-wide text-white">Let&apos;s get in <br/> touch  </motion.p>
                <hr className="h-px mt-16 bg-gray-600 border-0"/>
            </div>
          <motion.div style={{x:x}} className="absolute bottom-[420px] right-[350px]"><MagneticButton className="bg-[#445DE9] h-48 w-48 z-10 -translate-x-12 ">Get in touch</MagneticButton></motion.div>
          <motion.div style={{ y:y2 }} className="flex mt-28 space-x-4 mx-[15vw]">
            <MagneticButton className="hover:bg-[#445DE9] hover:border-[#445DE9] px-10 py-5 text-[14px] font-normal border border-gray-400">akblockchain15gmail.com</MagneticButton>
            <MagneticButton className="hover:bg-[#445DE9] hover:border-[#445DE9] px-10 py-5 text-[14px] font-normal border border-gray-400">+91 9024180290</MagneticButton>
          </motion.div>
        </div>
        <footer className="absolute bottom-0 py-8 text-base flex justify-between px-20 w-full">
            <div className="flex space-x-8">
                <span className="text-white ">2023 © Edition</span>
                <span className="text-white ">Ananya Khandelwal</span>
            </div>
            <div className="flex space-x-8">
                <span className="text-white">Twitter</span>
                <span className="text-white">Linkedin</span>
                <span className="text-white">Github</span>
            </div>
        </footer>
    </section>
  );
};

export default Contact;
