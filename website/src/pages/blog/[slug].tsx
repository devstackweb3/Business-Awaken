import React, { useEffect } from 'react'
import { client, urlFor } from '@/utils/sanity-client'
import Articles from '@/features/home/articles'
import Image from 'next/image'
import { Article } from '@/types/sanity/sanity.types'
import { Category } from '@/components/blog/category'
import { Intro } from '@/components/blog/intro'
import { Subsubject } from '@/components/blog/subsubject'
import { IsSidebarShown } from '@/components/isSidebarShown'
import { RichText } from '@/components/blog/rich-text'
import { getMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import Head from 'next/head'
import Seo, { SeoProps } from '@/components/seo'

export const revalidate = true

export async function getStaticPaths() {
  const articles: Array<Article> = await client.fetch(
    `*[_type == "article"]{
      slug
    }`
  )
  return {
    paths: articles.map((article) => ({
      params: { slug: article.slug?.current },
    })),
    fallback: true,
  }
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const { slug } = context.params

  const article: Article = await client.fetch(
    `*[_type == "article" && slug.current == "${slug}"]{
    _id,
    date,
    maintitle,
    slug,
    authors[]->{
      _id, name, surname, job, biography, experience, image{ asset->{url, metadata} }
    },
    categories[]->,
    image{ asset->{url, metadata}},
    intro,
    imgtofc{ asset->{url, metadata}},
    sub_subjects[]->{
      subtitle, subdescription
    },
  }[0]`
  )
  const metadata = await getMetadata(slug)
  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
      metadata,
    },
    revalidate: 1, // IF NO ARTICLE -> CHECKING 1 ARTICLE AFTER 1
  }
}

export default function Index(props: { article: Article; metadata: SeoProps }) {
  const { article, metadata } = props
  //console.log(metadata.keywords ? metadata?.keywords : null)
  /*
  function isCategorySmallEnough(article: Article, title: TCategory) {
    
    return article?.categories?.find(category => category.title.length <= 6);
  }
  function isCategorySmallEnough(article: Article) {
    if (!article.categories) return null;
  
    for (let i = 0; i < article.categories.length; i++) {
      const currCategory = article.categories[i];
      if (currCategory.title.length <= 6) {
        return currCategory;
      }
    }
    return null;  // Return null if no category is found with length <= 6
  }*/

  //if NO article
  if (!article) {
    return <div>Article not found</div>
  }
  console.log('META Title Article:', metadata?.title)
  return (
    <div className="m-[0 auto] bg-gradient-to-t from-black via-black to-cyan-700 overflow-hidden">
      <Head>
        <title>{metadata?.title ? metadata?.title : null}</title>
        <meta property="og:title" content={metadata?.title} key="ogtitle" />
        <meta name="description" content={metadata?.description} key="desc" />
        <meta
          property="og:description"
          content={metadata?.description}
          key="ogdesc"
        />
        <meta
          name="keywords"
          content={metadata?.keywords?.toString()}
          key="keywords"
        />
        <meta property="og:image" content={metadata?.openGraph?.images.url} />
      </Head>
      <div className="flex justify-center grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-[0] m-[0 auto]">
        <div>
          <IsSidebarShown value={article} />
        </div>

        <div className="flex flex-col w-full mt-16">
          <div className="flex w-full px-2">
            {article?.image && (
              <Image
                src={urlFor(article.image).url()}
                priority={true}
                className="relative w-full h-fit rounded-lg"
                alt="Article Subject Image"
                width={1250}
                height={950}
              />
            )}
          </div>
          {article?.maintitle ? (
            <h1 className="font-bold text-white text-3xl text-center md:text-7xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">
              {article?.maintitle}
            </h1>
          ) : null}
          <div className="flex flex-row space-x-1 text-white justify-center">
            {article?.categories
              ? article?.categories.map((category: any, idx) => (
                  <Category data={category} key={idx} />
                ))
              : null}
          </div>
          <div className="bg-white rounded-md p-4 mx-4">
            <div className="text-black font-bold text-center">
              {article?.date ? article.date : null}
            </div>

            <div className="my-4">
              {article?.intro ? <RichText value={article?.intro} /> : null}
            </div>
            {article?.sub_subjects
              ? article.sub_subjects.map((sub_subject: any, idx) => (
                  <Subsubject data={sub_subject} key={idx} />
                ))
              : null}
          </div>
          <div className="py-4">
            <Articles />
          </div>
        </div>
      </div>
    </div>
  )
}
