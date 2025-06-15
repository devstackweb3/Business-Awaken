import React from 'react'
import getStripe from '@/utils/get-stripejs'
import Image from 'next/image'

const index = () => {
  const handleClick = async () => {
    const session = await fetch('/api/checkout_sessions', {
      method: 'POST',
    }).then((r) => r.json())

    const stripe = await getStripe()

    await stripe?.redirectToCheckout({ sessionId: session.sessionId })
  }
  return (
    <div className="w-full z-20">
      <div className="w-full h-1/2 px-4">
        <div className="flex flex-row justify-center">
          <div className="grid mt-4 pr-4 py-2 w-1/2 text-white justify-items-end">
            175 CHF
          </div>
          <button
            onClick={handleClick}
            className="flex mt-4 justify-center py-2 px-4 border-solid border-1 font-medium	text-white cursor-pointer border-cyan-500 rounded-md bg-cyan-200 bg-opacity-30 hover:bg-cyan-400 hover:bg-opacity-40 hover:transition-opacity ease-in-out duration-200 hover:scale-105 shadow-inner shadow-cyan-500"
          >
            <div className="w-8">
              <Image src={'/shop.png'} width={24} height={24} alt="shop" />
            </div>
            <div className="text-white">Buy</div>
          </button>
        </div>
        <div className="text-white italic font-serif text-xs px-8">
          satisfied or money back guarantee
        </div>
      </div>
    </div>
  )
}

export default index
