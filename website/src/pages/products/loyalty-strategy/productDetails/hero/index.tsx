import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col py-6 md:py-0 md:flex md:flex-row justify-center items-center w-full ">
      <div className="flex max-w-5xl max-h-5xl absolute md:relative md:w-1/2 md:justify-center items-center opacity-75">
        <Image
          src="/stratback.png"
          alt="Argument Image 1"
          width={1080}
          height={1080}
        />
      </div>
      <div className="flex flex-col items-center md:w-1/2 z-10">
        <h1 className="font-bold text-center">
          <span className="text-5xl text-white flex flex-col">STRATEGY</span>
          <span className="text-cyan-400 text-7xl">LOYALTY</span>
          <span className="text-5xl text-white flex flex-col">SERVICE</span>
        </h1>
      </div>
    </div>
  )
}

export default Hero
