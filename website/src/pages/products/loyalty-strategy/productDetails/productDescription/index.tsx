import React, { useState } from 'react'
import Accordion from '@/components/accordion'
import Image from 'next/image'

const ProductDescription = () => {
  const [list, setList] = useState([
    {
      title: 'OBSTACLES',
      time: '30 min.',
      argument1: 'Digital Identity',
      argument2: 'Digital Interest',
      argument3: 'Seamless Customers Interactions',
    },
    {
      title: 'RESEARCHES',
      time: '2 hours',
      argument1: 'Sustainable',
      argument2: 'Engaging',
      argument3: 'Results',
    },
    {
      title: 'ADVISORY',
      time: '20 min.',
      argument1: 'Current Technologies',
      argument2: 'Current Strategies',
      argument3: 'Futuristic Trends',
    },
  ])
  return (
    <div className="w-full py-6 px-10">
      <h2 className="flex py-8 w-3/4 text-white font-semibold text-3xl md:text-5xl">
        SERVICE DETAILS
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

export default ProductDescription
