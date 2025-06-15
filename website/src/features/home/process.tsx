import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center h-0 invisible items-center md:w-1/2 md:visible md:h-fit">
          <div className="w-2/3">
            <Image
              src="/processs.svg"
              width={850}
              height={850}
              alt="Website Programm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:w-1/2">
          <h2 className="flex pt-4 ml-12 md:ml-0 w-2/3 text-white font-semibold text-3xl md:text-5xl">
            PROCESS
          </h2>
          <div className="flex justify-center md:invisible md:h-0">
            <div className="w-2/3">
              <Image
                src="/processs.svg"
                width={850}
                height={850}
                alt="Website Programm"
              />
            </div>
          </div>
          <div className="relative grid grid-rows-2 grid-cols-2 gap-4 m-8 z-10">
            <div className="relative grid place-content-center">
              <div className="h-24 w-40 z-10 grid place-content-center text-white text-xs text-center">
                <span>
                  Book an intro call with our methodologist for a thorough
                  project audit.
                </span>
              </div>
              <Image
                src="/numberO.svg"
                className="absolute place-self-center h-28 w-28 z-0 opacity-20"
                width={450}
                height={450}
                alt="Step 1 Process"
              />
            </div>
            <div className="absolute w-72 h-72 right-[-5rem] bg-cyan-600 rounded-full blur-2xl opacity-70"></div>
            <div className="relative grid place-content-center">
              <div className="h-24 w-40 z-10 grid place-content-center text-white text-xs text-center">
                <span>
                  Together, we will define key project goals and KPIs that are
                  relevant to your brand
                </span>
              </div>
              <Image
                src="/numberT.svg"
                className="absolute place-self-center h-28 w-28 z-0 opacity-20"
                width={450}
                height={450}
                alt="Step 2 Process"
              />
            </div>
            <div className="relative grid place-content-center">
              <div className="h-24 w-40 z-10 grid place-content-center text-white text-xs text-center">
                <span>
                  W3B Economy team is rolling up its sleeves and drawing up an
                  effective strategy tailored to your project s needs.
                </span>
              </div>
              <Image
                src="/numberTh.svg"
                className="absolute place-self-center h-28 w-28 z-0 opacity-20 top-[-1.5rem]"
                width={450}
                height={450}
                alt="Step 3 Process"
              />
            </div>
            <div className="relative grid place-content-center">
              <div className="h-24 w-40 z-10 grid place-content-center text-white text-xs text-center">
                <span>
                  Ultimately, we will carry out the roadmap that we have
                  established, ensuring that all desired outcomes are achieved
                  as planned.
                </span>
              </div>
              <Image
                src="/numberF.svg"
                className="absolute place-self-center h-28 w-28 z-0 opacity-20 top-[-1.5rem]"
                width={450}
                height={450}
                alt="Step 4 Process"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process

/*
<div className="relative z-0">
        <Image
          src="/blur.svg"
          className="absolute top-[-10rem] right-[-14rem]"
          width={950}
          height={950}
          alt="background"
        ></Image>
      </div>
      */
