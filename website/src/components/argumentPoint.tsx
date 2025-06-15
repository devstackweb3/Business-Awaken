import React from 'react'
import Image from 'next/image'

const ArgumentPoint = () => {
  return (
    <div className="flex">
      <Image
        src="/Arrow.svg"
        className="flex items-center h-6 w-6 md:h-8 md:w-8 z-10"
        width={450}
        height={450}
        alt="Point Argument"
      ></Image>
      <div className="absolute left-4 mt-2 md:left-4 md:mt-2 h-2 w-2 md:h-4 md:w-4 rounded-full bg-cyan-500 blur-sm z-0"></div>
    </div>
  )
}

export default ArgumentPoint
