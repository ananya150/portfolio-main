import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({open}: any) => (
  <AnimatePresence>
    {
      open && 
      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.5, delay:0.3}}
      >
        <div className={`h-[100vh] w-[100vw] ${open ? 'z-50': 'z-10'} `}>
          <div className="my-[14vh] mx-[6vw] h-full ">
            <div className='text-xs ml-[2vw] font-satoshi text-gray-400' >
              NAVIGATION
            </div>
            <hr className="h-px ml-[2vw] mt-[3vh] mr-[68vw] bg-gray-600 border-0"/>
            <div className="flex flex-col space-y-3 mt-16">
              <Link href='/' className="flex space-x-6 items-center group">
                <div className='w-[10px] h-[10px] rounded-full bg-white opacity-0 group-hover:opacity-100'></div>
                <span className="text-[57px] font-satoshi font-[500] text-[#FFFEFE]">Home</span>
              </Link>
              <Link href='/work' className="flex space-x-6 items-center group">
                <div className='w-[10px] h-[10px] rounded-full bg-white opacity-0 group-hover:opacity-100'></div>
                <span className="text-[57px] font-satoshi font-[500] text-[#FFFEFE]">Work</span>
              </Link>
              <Link href='/about' className="flex space-x-6 items-center group">
                <div className='w-[10px] h-[10px] rounded-full bg-white opacity-0 group-hover:opacity-100'></div>
                <span className="text-[57px] font-satoshi font-[500] text-[#FFFEFE]">About</span>
              </Link>
              <Link href='/contact' className="flex space-x-6 items-center group">
                <div className='w-[10px] h-[10px] rounded-full bg-white opacity-0 group-hover:opacity-100'></div>
                <span className="text-[57px] font-satoshi font-[500] text-[#FFFEFE]">Contact</span>
              </Link>
            </div>
            <div className="mt-[18vh] ml-[2vw] flex space-x-8 text-white text-[15px]">
              <Link href='#'><span className="">Blogs</span></Link>
              <Link href='#'><span className="">Twitter</span></Link>
              <Link href='#'><span className="">Linkedin</span></Link>
              <Link href='#'><span className="">Github</span></Link>
            </div>
          </div>
        </div>
      </motion.ul>
    }
  </AnimatePresence>
);

const itemIds = [0, 1, 2, 3, 4];
