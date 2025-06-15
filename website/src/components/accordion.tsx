import React, { useState } from 'react'
import ArgumentPoint from '@/components/argumentPoint'
import Image from 'next/image'

interface Section {
  id: number
  title: string
  argument1: string
  argument2: string
  argument3: string
  active: number
  // properties for the section services
}

const Accordion = (props: any) => {
  const [item, setItem] = useState<Section>(props.datas || { active: 0 })

  const handletoggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1
    setItem({ ...item, active: newActive })
  }
  return (
    <div className="list flex flex-col">
      <div
        className={`flex flex-col px-10 w-full group ${
          item.active === 1 ? 'is-active' : ''
        }`}
      >
        <div>
          <div
            className="flex w-full group-[.is-active]:font-bold"
            onClick={handletoggleActive}
          >
            <div className="w-full bg-gradient-to-r from-white via-white to-gray-400 py-4 inline-block text-transparent bg-clip-text font-semibold text-xl md:text-3xl tracking-[1px]">
              {item.title}
            </div>
          </div>
        </div>

        <div className="relative peer text-white backdrop-filter backdrop-blur-sm max-h-0 overflow-hidden group-[.is-active]:max-h-[8rem] md:group-[.is-active]:max-h-[12rem] group-[.is-active]:transition-opacity:transition-height ease-in-out duration-500">
          <div className="flex flex-col bg-white bg-opacity-25 rounded-md backdrop-blur-md p-2">
            <div className="flex items-center text-white text-xs md:text-base">
              <ArgumentPoint />
              {item.argument1}
            </div>
            <div className="flex items-center text-white text-xs md:text-base">
              <ArgumentPoint />
              {item.argument2}
            </div>
            <div className="flex items-center text-white text-xs md:text-base">
              <ArgumentPoint />
              {item.argument3}
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white w-full h-0.5 divide-solid divide-x-2"></div>
      </div>
    </div>
  )
}

export default Accordion
