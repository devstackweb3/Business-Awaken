import React, { useState } from 'react'
import Image from 'next/image'
import Accordion from '@/components/accordion'

const Services = () => {
  const [list, setList] = useState([
    {
      title: 'ADVISORY',
      argument1: 'Crowdfunding 3.0',
      argument2: 'Community Building',
      argument3: 'Strategic Market Scale',
    },
    {
      title: 'WEBSITE BUILDING',
      argument1: 'From Scratch',
      argument2: 'Design & Value',
      argument3: 'Modernize',
    },
    {
      title: 'COMMUNITY BUILDING',
      argument1: 'Loyalty Campaign',
      argument2: 'Content Writing',
      argument3: 'Community Management',
    },
    {
      title: 'DESIGN & BRANDING',
      argument1: 'Authenticity',
      argument2: 'Rebranding',
      argument3: 'UX/UI Experience',
    },
    {
      title: 'INNOVATION',
      argument1: 'Blockchain Industrial implementation',
      argument2: 'Logistic transparency',
      argument3: 'Ethical Product Governance',
    },
  ])
  return (
    <div className="bg-black py-6 px-10">
      <h2 className="flex py-8 w-2/3 text-white font-semibold text-3xl md:text-5xl">
        OUR SERVICES
      </h2>
      <div className="relative flex flex-col md:flex-row">
        <div className="absolute right-[-36px] opacity-25 md:invisible md:w-1/2">
          <div className="w-64">
            <Image
              src="/service.svg"
              width={850}
              height={850}
              alt="Website Programm"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2 z-10">
          {list.map((item, key) => (
            <Accordion key={key} datas={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
