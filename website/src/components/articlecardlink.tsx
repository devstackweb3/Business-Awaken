import React from 'react'
import { urlFor } from '@/utils/sanity-client'
import { Category } from '@/components/blog/category'
import { Article } from '@/types/sanity/sanity.types'
import { RichText } from '@/components/blog/rich-text'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const ArticleCardLink = (props: any) => {
  let article: Article = props.value
  const router = useRouter()

  return (
    <div className="relative flex-col items-center min-w-full h-full p-1 overflow-hidden bg-white rounded-lg">
      <button
        onClick={(e) => {
          // prevent parent link from triggering
          e.stopPropagation()
          e.preventDefault()
          router.push(`/blog/${article.slug?.current}`)
        }}
        data-href={`/blog/${article.slug?.current}`}
        tabIndex={0}
        role="link"
        className="relative w-full"
      >
        <div className="relative z-10 w-full">
          <Image
            src={urlFor(article.image).url()}
            priority={true}
            className="w-fit rounded-lg"
            alt="Article Subject Image"
            width={1250}
            height={950}
          />
        </div>
        <div className="absolute h-44 w-full top-2 left-0 bg-cover bg-center blur-xl scale-125 opacity-40">
          <Image
            src={urlFor(article.image).url()}
            priority={true}
            className="w-fit"
            alt="Article Subject Image"
            width={1250}
            height={950}
          />
        </div>

        <h3 className="flex justify-self-start text-xl truncate font-semibold">
          {article.maintitle}
        </h3>
        <div className="grid grid-cols-3">
          <div className="overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-700 rounded px-1 w-fit font-semibold font-xs text-xs text-white">
              {article?.categories
                ? article?.categories.map((category: any, idx = 0) => (
                    <Category data={category} key={idx} />
                  ))
                : null}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-700 rounded px-1 w-fit font-semibold font-xs text-xs text-white">
              VOTES
            </div>
          </div>
        </div>
        <div className="min-h-44 mx-1 text-wrap truncate desktop:h-96">
          <RichText value={article?.intro} />
        </div>
      </button>
    </div>
  )
}
