import React from 'react'
import MoreProducts from './MoreProducts'
import ProductsList from './ProductsList'

const Products = () => {
  return (
    <div className='graadient-back h-[160vh] custom-clip-path1'>
        <div className='mt-[6vh] mx-[17vw] flex justify-center'>
            <span className='font-satoshi font-[400] text-[15px] md:text-[22px] '>Here are some of the things I have built and am passionate about</span>
        </div>
        <div className='mt-[10vh] md:mx-[17vw] mx-[10vw]'>
            <ProductsList />
            <MoreProducts />
        </div>
    </div>
  )
}

export default Products