'use client';
import { useState } from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import MagneticButton from '@/components/common/MagneticButton';
import { useRouter } from 'next/navigation'

export default function Work() {

  const [imageSrc, setImageSrc] = useState("");
  const [buttinVisible, setButtonVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const router = useRouter()

  const handleNavigatoin = () => {
    router.push('/work')
  }

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const items = [
    {
      image: '/zkback.png',
      name: 'Zk-age',
      url: '/work/zkage'
    },
    {
      image: '/img2.png',
      name: 'Flex.xyz',
      url: '/work/flexxyz'
    },
    {
      image: '/1walletback.png',
      name: '1Wallet',
      url: '/work/1wallet'
    },
  ];


  return (
    <div className='bg-[#1c1d20]'>
        <section className='md:h-[140vh] h-[200vh] custom-clip-path2 lg:custom-clip-path1 bg-[#FFFEFE]'>
            <div className='lg:block hidden mx-[9vw]'>
                <div className='ml-36 text-sm font-satoshi text-gray-500' > 
                    RECENT WORK
                </div>
                <hr className="h-px mt-12 bg-gray-300 border-0"/>
                {/* <ul> */}
                    {items.map((item,index) => (
                        <li 
                            className="  py-[55px] border-b border-gray-300 "
                            key={index}
                            onMouseOver={() => {
                                setButtonVisible(true);
                                setImageSrc(item.image);
                            }}
                            onClick={() => {router.push(item.url)}}
                            onMouseMove={(e) => {
                                setCoords({ 
                                    x: e.clientX, 
                                    y: e.clientY 
                                });
                            }}
                            onMouseLeave={() => {
                                setButtonVisible(false);
                                setImageSrc("");
                            }}
                        >
                            <div className='flex items-center justify-between text-[#1c1d20] hover:text-gray-500 hover:text-opacity-40 mx-32 hover:mx-28 hover:scale-100 duration-100 w-full'>
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
                {imageSrc && 
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                    src={imageSrc} 
                    alt="" 
                    style={{ 
                        position: 'fixed',
                        width: '20%',
                        objectFit: 'contain',
                        top: `${coords.y}px`,
                        left: `${coords.x}px`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10 ,
                        pointerEvents: 'none',
                        opacity: 100,
                        transition: 'opacity 0.3s, transform 0.3s',
                        animation: 'appear 0.3s forwards'
                    }} 
                    />
                }
            </div>

            <div className='lg:hidden mx-[9vw]'>
                <div className='ml-10 text-sm font-satoshi text-gray-500' >
                    RECENT WORK
                </div>
                <hr className="h-px mt-12 bg-gray-300 border-0"/>
                {/* <ul> */}

                <div className='mt-20 md:flex w-full md:space-x-4 space-y-20 md:space-y-0'>
                  <li onClick={() => {router.push(items[0].url)}} className="">
                    <div className='mt-4 w-full flex justify-center'>
                      <div>
                        <img src={items[0].image} alt='project image'/>
                        <div className='mt-6'>
                          <span className='font-satoshi text-[30px] font-[500]'>{items[0].name}</span>
                        </div>
                        <hr className="h-px mt-6 bg-gray-300 border-0"/>
                        <div className='mt-3'>
                          <span className=''>Design & Development</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li onClick={() => {router.push(items[1].url)}} className="">
                    <div className='w-full flex justify-center'>
                      <div>
                        <img src={items[1].image} alt='project image'/>
                        <div className='mt-6'>
                          <span className='font-satoshi text-[30px] font-[500]'>{items[1].name}</span>
                        </div>
                        <hr className="h-px mt-6 bg-gray-300 border-0"/>
                        <div className='mt-3'>
                          <span className=''>Design & Development</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
                {/* </ul> */}
            </div>


            <div className='flex justify-center w-full mt-24'>
                <MagneticButton className="bg-[#1c1d20] h-[70px] w-[160px]"><span className='font-satoshi text-[17px] font-[400]' onClick={handleNavigatoin}>More work</span></MagneticButton>
            </div>
        </section>
    </div>
  );
}