'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './marquee.scss'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const a = {}

const whitespace = (
    <>
     <span>&nbsp; </span>
    </>
)

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='h-screen flex flex-col justify-around ' variants={banner}>
        <BannerRowTop title={"developer"} />
        <BannerRowCenter title={`Web & Blockchain & AI & Fintech`} playMarquee={playMarquee} />
        <BannerRowBottom title={"enthusiast"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }: any) =>  (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.5 }}
  >
    <motion.span
      className='text-[7rem] font-[500] relative inline-block whitespace-nowrap sm:text-[14rem] dark:text-white font-satoshi'
      variants={disabled ? a : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter , i) => (
        <motion.span
          key={i}
          className='row-letter'
          variants={disabled ? a : letterAni}>
          {letter === '&' ? whitespace : letter}
        </motion.span>
      ))}
    </motion.span>
  </motion.div>
  );

const AnimatedLetters2 = ({ title, disabled }: any) =>(
  <motion.span
    className='text-[4rem] font-medium relative tracking-[-0.2rem] inline-block whitespace-nowrap md:text-[160px] dark:text-white font-satoshi'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
    >
    {[...title].map((letter , i) => (
      <motion.span
        key={i}
        className='row-letter'
        variants={disabled ? a : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
    );

    const AnimatedLetters3 = ({ title, disabled }: any) =>(
      <motion.span
        className='text-[4rem] font-medium relative tracking-[-0.2rem] inline-block whitespace-nowrap md:text-[160px] dark:text-white font-satoshi'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        >
        {[...title].map((letter , i) => (
          <motion.span
            key={i}
            className='row-letter'
            variants={disabled ? a : letterAni}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
        );

export const BannerRowTop = ({ title }: any) => {
  return (
      <div className={"overflow-hidden cursor-pointer w-full h-[210px] flex items-center hover:bg-dev-bg dark:text-white scale-100 hover:scale-105 duration-100 rounded-xl"}>
        <div className="w-1/5"></div>
        <div className='w-4/5 flex items-center'>
          <AnimatedLetters2 title={title} />
        </div>
      </div>
  );
};

const BannerRowBottom = ({ title }: any) => {
  return (
    <div className={"overflow-hidden cursor-pointer w-full h-[210px] z-30 flex items-center hover:bg-extra dark:text-white scale-100 hover:scale-105 duration-100 rounded-xl"}>
      <div className="w-2/5"></div>
        <div className='w-3/5 flex items-center'>
          <AnimatedLetters3 title={title} />
        </div>
    </div>
  );
};

const BannerRowCenter = ({ title,  playMarquee }: any) => {
  return (
    <div className={`overflow-hidden flex items-center marquee ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner space-x-28'>
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
