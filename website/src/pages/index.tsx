import { client } from '@/utils/sanity-client'
import { Article } from '@/types/sanity/sanity.types'
import Hero from '@/features/home/hero'
import Strategies from '@/features/home/strategies'
import Services from '@/features/home/services'
import Projects from '@/features/home/projects'
import Audit from '@/features/home/audit'
import Process from '@/features/home/process'
import Newsletter from '@/features/home/newsletter'
import Articles from '@/features/home/articles'
import Head from 'next/head'
import CookieConsent from '@/components/cookies'

export default function Home() {
  return (
    <div className="min-h-full">
      <Head>
        <title>W3B Economy | Home</title>
        <link rel="icon" href="/favicon.svg" content="W3B Economy Logo" />
        <meta property="image" content="https://w3beconomy.uk/favicon.svg" />
        <meta property="og:image" content="https://w3beconomy.uk/favicon.svg" />
        <meta property="og:title" content="W3B Economy | Home" key="ogtitle" />
        <meta
          name="description"
          content="Unleash your sales revenue with highly engaged customers relationships"
          key="desc"
        />
        <meta
          property="og:description"
          content="Gain customers confidence through simple loyalty strategies"
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="w3b, customer loyalty, web3 loyalty, web3 economy, digital economy, sales retention, annual revenue growth"
          key="keywords"
        />
        <meta name="robots" content="noarchive" />
        <link
          rel="canonical"
          href="https://www.w3beconomy.uk/"
          key="canonical"
        />
      </Head>
      <Hero />
      <div className="bg-black overflow-hidden">
        <Strategies />
        <Services />
        <Process />
        <Audit />
        <Newsletter />
        <Articles />
      </div>
      <CookieConsent />
    </div>
  )
}
