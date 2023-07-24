'use client';
import React,{useRef} from 'react'
import { motion , useScroll , useTransform} from "framer-motion";
import {
    useSpring,
    MotionValue
  } from "framer-motion";
import MagneticButton from '@/components/common/MagneticButton';
import { useRouter } from 'next/navigation';

function useParallax(value: MotionValue<number>, distanceDown: number, distanceUp: number) {
    return useTransform(value, [0, 1], [-distanceUp, distanceDown]);
  }


const products = {
    "flexxyz": {
        about: "Flex.xyz is a crypto payments app that comes with a crypto card and a payment gateway. The crypto card can be used to make payments exactly similar to fiat cards and the payment gateway accepts both fiat and crypto card payments. This card acts as a decentralized debit card for your crypto wallet.",
        feature1: {
            title: "Abstracted",
            about: "The payment app is built using erc-4337 and smart contract wallet and feel exactly like a web2 payments app. This way someone with no knowledge of crypto and still use the app."
        },
        feature2: {
            title: "Payment gateway",
            about: "This comes with a payment gateway that is easy to integrate and can accept both fiat card payments and crypto card payments."
        },
        feature3: {
            title: "Seamless transactions",
            about: "Enjoy fast and seamless payment transactions with low fees that settle on the blockchain."
        }
    },
    "1wallet": {
        about: "1wallet is a crypto wallet chrome extension based on erc-4337 account abstraction. It comes with a smart contract wallet which enables to use various features while interacting with a dapp.",
        feature1: {
            title: "Google sign in",
            about: "1 wallet allows users to login with google while creating a wallet. This removes the hassle to manage and store the private key for the user. However users can add a custom private key for extra security. "
        },
        feature2: {
            title: "Gas Tank",
            about: "1wallet comes with a seprate gas tank that is used to pay for the gas fess. The tank can be refilled either by credit card or crypto tokes like usdc. This removes the need to have ether to pay for the gas fees."
        },
        feature3: {
            title: "Batch Transactions",
            about: "Users can batch multiple transactions and send them as a single transactions. This improves the user experience and save gas fees."
        }
    },
    "zkage": {
        about: "Zk age allows anyone to prove that they are above 21 years of age without actually revealing their age. This can allow authorities to verify age as the proof is generated based on a goverment identity card.",
        feature1: {
            title: "Proof",
            about: "A zero knowledge proof is generated in the backend using the age on a goverment identity card (aadhar card in india). This allows anyone to trust the age proof."
        },
        feature2: {
            title: "Verify",
            about: "The zk proof verifier is deployed on the blockchain. This allows anyone to verify the zk proof and increases the security. Users need give the age proof and proof they own the address from which the zk proof is generated. "
        },
        feature3: {
            title: "Application",
            about: "This application acts like a DID (Decentralized Identity). Users can generate their zk proofs with their ethereum address and any party can integrate the verifier to verify their age. "
        }
    },
}


const AboutProduct = ({product}: any) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y1 = useParallax(scrollYProgress, 200 ,100);
    const y2 = useParallax(scrollYProgress, 160 ,160);
    const router = useRouter();

  return (
    <div className='md:h-[180vh] h-[270vh] md:custom-clip-path2 custom-clip-path3 bg-[#FFFEFE]'>

        <motion.div style={{y:y2}} className='md:mt-[12vh] mx-[9vw] hidden md:block'>

            <div className='flex flex-col space-y-16'>
                    <span className='font-satoshi text-[55px] font-[500]'>About</span>
                    <span className='font-satoshi text-[22px]'>
                        {products[product as keyof typeof products].about}
                    </span>
            </div>

            <div className='mt-[20vh]'>
                <span className='font-satoshi text-[55px] font-[500]'>Features</span>
            </div>

            <motion.div 
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // viewport={{ once: false }}
                // transition={{duration:1, delay:0.3}}
                className='mt-[6vh] md:flex md:space-x-[7vw] space-y-10'>

                
                <div className='w-full mt-9'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>{products[product as keyof typeof products].feature1.title}</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            {products[product as keyof typeof products].feature1.about}
                        </span>
                    </div>
                </div>

                <div className='w-full'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>02</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>{products[product as keyof typeof products].feature2.title}</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            {products[product as keyof typeof products].feature2.about}              
                        </span>
                    </div>
                </div>

                <div className='w-full'>
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>03</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>{products[product as keyof typeof products].feature3.title}</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            {products[product as keyof typeof products].feature3.about}              
                        </span>
                    </div>
                </div>


            </motion.div>

            <motion.div style={{y:y2}}  className='flex  justify-center z-20 mt-10'>
                <MagneticButton onClick={() => {router.push('/work')}} className="bg-[#445DE9] h-44 w-44 ">
                    <span className='font-satoshi text-[18px] font-[400]'> ↖ All products </span>
                </MagneticButton>
            </motion.div>

        </motion.div>

        <motion.div className='mt-[19vh] mx-[9vw] md:hidden'>

            <div className='flex flex-col space-y-16'>
                    <span className='font-satoshi text-[45px] font-[500]'>About</span>
                    <span className='font-satoshi text-[17px]'>
                        {products[product as keyof typeof products].about}
                    </span>
            </div>


            <div className='mt-[20vh]'>
                <span className='font-satoshi text-[55px] font-[500]'>Features</span>
            </div>

            <div className='mt-[6vh] md:flex md:space-x-[7vw] space-y-24'>

                <motion.div className='w-full'
                    // initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    // viewport={{ once: true }}
                    // transition={{duration:1, delay:0.3}}
                >
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>01</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>{products[product as keyof typeof products].feature1.title}</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            {products[product as keyof typeof products].feature1.about}
                        </span>
                    </div>
                </motion.div>

                <motion.div className='w-full'
                    // initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    // viewport={{ once: true }}
                    // transition={{duration:1, delay:0.3}}
                >
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>02</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>{products[product as keyof typeof products].feature2.title}</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            {products[product as keyof typeof products].feature2.about}
                        </span>
                    </div>
                </motion.div>

                <motion.div className='w-full'
                    // initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    // viewport={{ once: true }}
                    // transition={{duration:1, delay:0.3}}
                >
                    <span className='font-[400] font-satoshi text-[16px] text-gray-500'>03</span>
                    <hr className="h-px mt-[3vh] mb-[4vh] bg-gray-300 w-full border-0"/>
                    <span className='font-satoshi font-[500] text-[39px]'>{products[product as keyof typeof products].feature3.title}</span>
                    <div className='mt-[4vh] '>
                        <span className='font-satoshi text-[18px]'>
                            {products[product as keyof typeof products].feature3.about}
                        </span>
                    </div>
                </motion.div>
            </div>

            <motion.div style={{y:y2}}  className='flex justify-center z-20 '>
                <MagneticButton onClick={() => {router.push('/work')}} className="bg-[#445DE9] h-28 w-28 ">
                    <span className='font-satoshi text-[18px] font-[400]'> ↖ All products </span>
                </MagneticButton>
            </motion.div>


        </motion.div>

    </div>
  )
}

export default AboutProduct