import React from 'react'
import Hero from '@/pages/products/loyalty-strategy/productDetails/hero'
import ProductDescription from '@/pages/products/loyalty-strategy/productDetails/productDescription'
import ProductAcquisition from '@/pages/products/loyalty-strategy/productDetails/productAcquisition'
import ProductStrategy from '@/pages/products/loyalty-strategy/productDetails/productStrategy'
import ProductIntro from '@/pages/products/loyalty-strategy/productDetails/productIntro'

const index = () => {
  return (
    <div className="flex flex-col py-6 md:py-0 md:flex md:flex-row justify-center items-center w-full h-2/3 bg-gradient-to-b from-cyan-700 to-black">
      <Hero />
      <ProductIntro />
      <ProductDescription />
      <ProductStrategy />
      <ProductAcquisition />
    </div>
  )
}

export default index
