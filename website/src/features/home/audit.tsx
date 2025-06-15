import React from 'react'
import Image from 'next/image'

const Audit = () => {
  return (
    <div className="bg-black px-10 flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <h2 className="flex mb-4 text-white font-semibold text-3xl md:text-5xl">
          FREE AUDIT
        </h2>
        <span className="text-gray-300 text-sm">
          Simply leave a request and within three days, you will receive a
          detailed plan with growth strategies for your project at your
          disposal.
        </span>
        <div className="flex justify-center max-w-max py-1 px-2 mt-2 border-solid border-1 font-medium text-white text-sm cursor-pointer border-cyan-500 rounded-md bg-cyan-200 bg-opacity-30 hover:bg-cyan-400 hover:bg-opacity-40 hover:transition-opacity ease-in-out duration-200 hover:scale-105 shadow-inner shadow-cyan-500">
          GET AN AUDIT
        </div>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  )
}

export default Audit
