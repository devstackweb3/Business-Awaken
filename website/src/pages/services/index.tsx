import React from 'react'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Services | W3B Economy</title>
        <meta
          property="og:title"
          content="W3B Economy | Services"
          key="ogtitle"
        />
        <meta
          name="description"
          content="Services overview delivered by our teams"
          key="desc"
        />
        <meta
          property="og:description"
          content="Discover different customer strategies to unleash their loyalty potential"
          key="ogdesc"
        />
        <link
          rel="canonical"
          href="https://w3beconomy.uk/services/"
          key="canonical"
        />
        <meta name="robots" content="noarchive" />
      </Head>
    </div>
  )
}

export default index
