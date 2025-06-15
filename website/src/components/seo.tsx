import Head from 'next/head'

export type SeoProps = {
  keywords: string[]
  title: string
  description: string
  openGraph: {
    title: string
    description: string
    url: string
    siteName: string
    images: { url: string }
    type: string
    publishedTime: string
    authors: string
  }
  canonical?: string
}

export default function Seo(metadata: SeoProps /*schema: any*/) {
  return (
    <>
      <Head>
        <title>{metadata?.title} | W3B Economy</title>
        <meta property="og:title" content={metadata?.title} />
        <meta name="description" content={metadata?.description} />
        <meta property="og:description" content={metadata?.description} />
        <meta name="keywords" content={metadata?.keywords?.toString()} />
        <meta property="og:image" content={metadata?.openGraph?.images.url} />
        {metadata?.canonical ? (
          <link rel="canonical" href={metadata?.canonical} />
        ) : undefined}
        {/* <script type="application/ld+json">{JSON.stringify(schema)}</script> */}
      </Head>
    </>
  )
}
