import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Strategies = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black">
      <div className="flex flex-col mb-8 ml-12 w-2/3 md:w-1/3">
        <span className="text-gray-300 font-extralight text-sm md:text-2xl mt-8">
          W3B ECONOMY UNLEASHED
        </span>
        <h2 className=" text-white font-semibold text-3xl md:text-5xl">
          SUITABLE STRATEGIES FOR YOUR NEEDS
        </h2>
        <div className="">
          <span className="text-white text-sm md:text-xl">
            Engage in sustainable marketing strategies of your choice to obtain
            the best loyalties rate through digital economy space
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:w-2/3 md:grid-cols-2 md:gap-4 md:p-4 mx-10 space-y-4 md:space-y-0">
        <Link
          className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
          href={'/'}
        >
          <Image
            src="/architect.svg"
            className="rounded-2xl"
            width={1200}
            height={950}
            alt="Website Programm"
          />
        </Link>
        <Link
          className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
          href={'/'}
        >
          <Image
            src="/authenticity.svg"
            className="rounded-2xl"
            width={1200}
            height={950}
            alt="Authenticity Programm"
          />
        </Link>
        <Link
          className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
          href={'/'}
        >
          <Image
            src="/visibility.svg"
            className="rounded-2xl"
            width={1200}
            height={950}
            alt="Discovery Programm"
          />
        </Link>
        <Link
          className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
          href={'/services/loyalty-strategy'}
        >
          <Image
            src="/loyalty.svg"
            className="rounded-2xl"
            width={1200}
            height={950}
            alt="Loyalty Programm"
          />
        </Link>
      </div>
    </div>
  )
}

export default Strategies
