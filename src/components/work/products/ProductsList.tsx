'use client';
import React, {useState} from 'react'

const items = [
    {
      image: '/img1.png',
      name: 'Flex.xyz',
      url: '/zk-age-verifier'
    },
    {
      image: '/img2.png',
      name: '1Wallet',
      url: '/erc4337-wallet'
    },
    {
      image: '/img1.png',
      name: 'Eth-Chatter',
      url: 'eth-chat-app'
    },
    {
      image: '/img2.png',
      name: 'Zk-Age',
      url: 'eth-chat-app'
    },
  ];


const ProductsList = () => {

    const [imageSrc, setImageSrc] = useState("");
    const [buttinVisible, setButtonVisible] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div>
        <div className='md:block hidden'>
            {items.map((item,index) => (
                <li 
                    className="  py-[32px] border-b border-gray-300"
                    key={index}
                    onMouseOver={() => {
                        setButtonVisible(true);
                        setImageSrc(item.image);
                    }}
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
                    <div className='flex items-center justify-between text-[#1c1d20] hover:text-gray-500 hover:text-opacity-40 mx-6 hover:mx-2 hover:scale-100 duration-100 w-full'>
                        <div className='w-9/12'>
                            <span className='font-satoshi 2xl:text-[72px] xl:text-[50px] text-[40px] font-medium relative'>{item.name}</span>
                        </div>
                        <div className='w-3/12'>
                            <span className='2xl:text-[17px] xl:text-[13px] text-[11px] font-normal'>Design & Development</span>
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
        <div className='md:hidden'>
            <div className='mt-20 md:flex w-full md:space-x-4 space-y-20 md:space-y-0'>
                {items.map((item,index) => (
                    <li key={index} className="z-10">
                    <div className='mt-4 w-full flex justify-center'>
                        <div>
                        <img src={item.image} alt='project image'/>
                        <div className='mt-6'>
                            <span className='font-satoshi text-[30px] font-[500]'>{item.name}</span>
                        </div>
                        <hr className="h-px mt-6 bg-gray-300 border-0"/>
                        <div className='mt-3'>
                            <span className=''>Design & Development</span>
                        </div>
                        </div>
                    </div>
                    </li>
                ))}
            </div>
        </div>

    </div>
  )
}

export default ProductsList