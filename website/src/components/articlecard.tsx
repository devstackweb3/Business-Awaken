import React from 'react'
import { Article } from '@/types/sanity/sanity.types'
import Head from 'next/head'
import { Metadata } from '@/lib/metadata'
import { ArticleCardLink } from '@/components/articlecardlink'

const articlecard = (
  { article }: { article: Article },
  { metadata }: { metadata: Metadata }
) => {
  return (
    <div>
      <Head>
        {/* <title content={metadata?.title} /> */}
        <meta property="og:title" content={metadata?.title} key="ogtitle" />
        <meta name="description" content={metadata?.description} key="desc" />
        <meta
          property="og:description"
          content={metadata?.description}
          key="ogdesc"
        />
        <meta property="og:image" content={metadata?.openGraph?.images.url} />
      </Head>
      <div className="px-4 w-64 h-52 laptop:w-96 mb-2">
        <ArticleCardLink value={article} />
      </div>
    </div>
  )
}

export default articlecard
