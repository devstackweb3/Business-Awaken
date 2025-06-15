import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/modal'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const titleword = <p className="text-cyan-400 text-7xl">RETHINK</p>
  return (
    <div className="flex flex-col py-6 md:py-0 md:flex md:flex-row justify-center items-center w-full h-1/2 bg-gradient-to-b from-cyan-700 to-black">
      <div className="flex max-w-5xl max-h-5xl absolute md:relative md:w-1/2 md:justify-center opacity-50">
        <Image
          src="/compast.png"
          alt="Compass"
          width={1080}
          height={1080}
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center md:w-1/2 z-10">
        <h1 className="flex flex-col font-bold items-center">
          <span className="flex flex-col items-center text-5xl text-white text-wrap text-center w-2/3">
            {titleword} THE WAY YOU SELL ONLINE
          </span>
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex mt-4 justify-center py-2 px-4 border-solid border-1 font-medium	text-white cursor-pointer border-cyan-500 rounded-md bg-cyan-200 bg-opacity-30 hover:bg-cyan-400 hover:bg-opacity-40 hover:transition-opacity ease-in-out duration-200 hover:scale-105 shadow-inner shadow-cyan-500"
        >
          Book my call
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </div>
  )
}

export default Hero
