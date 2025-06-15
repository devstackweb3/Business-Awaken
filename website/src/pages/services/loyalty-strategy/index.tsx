import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Hero from '@/pages/services/loyalty-strategy/serviceDetails/hero'
import ServiceDescription from '@/pages/services/loyalty-strategy/serviceDetails/serviceDescription'
import ServiceAcquisition from '@/pages/services/loyalty-strategy/serviceDetails/serviceAcquisition'
import ServiceStrategy from '@/pages/services/loyalty-strategy/serviceDetails/serviceStrategy'
import ServiceIntro from '@/pages/services/loyalty-strategy/serviceDetails/serviceIntro'
import Footbar from '@/components/footbar'

const index = () => {
  return (
    <div className="h-full pt-10">
      <Head>
        <title>Service | Customer loyalty strategy</title>
        <link
          rel="canonical"
          href="https://w3beconomy.uk/services/loyalty-strategy"
          key="canonical"
        />
        <meta
          property="og:title"
          content="Service | Loyalty strategy creation"
          key="ogtitle"
        />
        <meta
          name="description"
          content="Discover modernized ways to unleash your annual revenue"
          key="desc"
        />
        <meta
          property="og:description"
          content="Discover modernized ways to unleash your annual revenue"
          key="ogdesc"
        />
        <meta name="keywords" content="loyalty strategy" key="keywords" />
      </Head>
      <Hero />
      <div className="overflow-hidden bg-black">
        <ServiceIntro />
        <ServiceDescription />
        <ServiceStrategy />
        <ServiceAcquisition />
      </div>
    </div>
  )
}

export default index
