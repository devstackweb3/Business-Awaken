import type { Metadata as NextMetadata } from 'next'
import { client } from '@/utils/sanity-client'
import { Category } from '@/types/sanity/sanity.types'

export interface Metadata extends NextMetadata {
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
}

export const revalidate = 0 //INDIVIDUAL FETCH REQUEST | REQUEST NOT CACHED src: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch

export async function getMetadata(slug: string): Promise<NextMetadata> {
  const response = await client.fetch(
    `*[_type == "article" && slug.current == "${slug}"]{
        maintitle,
        intro,
        categories[]->,
        image{ asset->{url, metadata}},
        date,
        authors[]->{
            _id, name, surname, job, biography, experience, image{ asset->{url, metadata} }
          },
    }[0]`
  )
  const data = await response
  //OBJECTIVE: FIND A WAY TO MAP OVER DATA OR TO PROLOUNGE THE LENGTH OF THE ARRAY

  console.log('intro', data) //CURRENT LENGTH === 0 | NOT NORMAL

  //DATA need to be certain to be displayed firstly.

  const desc = data.intro[0].children[0]
  return {
    title: data.maintitle,
    description: desc.text,
    keywords: data.categories.map((category: Category) => category?.title),
    alternates: {
      canonical: `https://w3beconomy.uk/blog/${slug}`,
    },
    openGraph: {
      title: data.maintitle,
      description: desc.text,
      url: `${slug}`,
      images: { url: data.image.asset.url }, // OGImageArray = [{ url: data.image }]
      type: 'article',
      publishedTime: data.date,
      authors: data.authors[0].surname + ' ' + data.authors[0].name,
      siteName: 'W3B Economy',
    },
  }
}
