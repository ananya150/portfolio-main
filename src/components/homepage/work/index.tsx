'use client';
import { useState } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import MagneticButton from '@/components/common/MagneticButton';

export default function Work() {

  const [imageSrc, setImageSrc] = useState("");
  const [buttinVisible, setButtonVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const heading = useTransform(
    scrollYProgress,
    [0.2 , 0.23 , 0.25 , 0.55 , 0.57 , 0.6 ],
    [0 , 0.5 , 1 , 1 , 0.5 , 0 ]
  )

  const projects = useTransform(
    scrollYProgress,
    [0.55 , 0.57 , 0.6 ],
    [0 , 0.5 , 1  ]
  )

  const items = [
    {
      image: '/zk-age.png',
      name: 'Flex.xyz',
      url: '/zk-age-verifier'
    },
    {
      image: '/stevejobs.png',
      name: '1Wallet',
      url: '/erc4337-wallet'
    },
    {
      image: '/me.png',
      name: 'Eth-Chatter',
      url: 'eth-chat-app'
    },
  ];

  return (
    <div className='bg-[#1c1d20]'>
        <section className='h-[140vh] curved bg-[#FFFEFE]'>
            <div className='lg:block hidden mx-[9vw]'>
                <div className='ml-36 text-sm font-satoshi text-gray-500' >
                    RECENT WORK
                </div>
                <hr className="h-px mt-12 bg-gray-300 border-0"/>
                {/* <ul> */}
                    {items.map((item,index) => (
                        <li 
                            className=" z-10 py-[55px] border-b border-gray-300"
                            key={index}
                            onMouseOver={() => {
                                setButtonVisible(true);
                            }}
                            onMouseMove={(e) => {
                                setCoords({ 
                                    x: e.clientX, 
                                    y: e.clientY 
                                });
                            }}
                            onMouseLeave={() => {
                                setButtonVisible(false);
                            }}
                        >
                            <div className='flex items-center justify-betweentext-[#1c1d20] hover:text-gray-500 hover:text-opacity-40 mx-32 hover:mx-28 hover:scale-100 duration-100 w-full'>
                                <div className='w-9/12'>
                                    <span className='font-satoshi 2xl:text-[102px] xl:text-[90px] text-[80px] font-medium relative'>{item.name}</span>
                                </div>
                                <div className='w-3/12'>
                                    <span className='2xl:text-[18px] xl:text-[16px] text-[14px] font-normal'>Design & Development</span>
                                </div>
                            </div>
                        </li>
                        ))} 
                {/* </ul> */}
                {buttinVisible && 
                    <button className='h-16 w-16 bg-[#445de9] rounded-full text-white text-[8px] font-bold py-2 px-4  '
                        style={{ 
                            position: 'fixed',
                            objectFit: 'contain',
                            top: `${coords.y}px`,
                            left: `${coords.x}px`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 20 ,
                            pointerEvents: 'none',
                            opacity: 100,
                            transition: 'opacity 0.3s, transform 0.3s',
                            animation: 'appear 0.3s forwards'
                        }} >
                        View
                    </button>
                }
            </div>
            <div className='flex justify-center w-full mt-20'>
                <MagneticButton className="bg-[#1c1d20] h-[70px] w-[160px]"><span className='font-satoshi text-[17px] font-[400]'>More work</span></MagneticButton>
            </div>
        </section>
    </div>
  );
}