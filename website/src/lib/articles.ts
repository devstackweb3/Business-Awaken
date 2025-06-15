import { client } from '@/utils/sanity-client'
import { Article } from '@/types/sanity/sanity.types'

export async function getAllArticles(): Promise<Article[]> {
  const res =
    await client.fetch(`*[_type == "article"] | order(_createdAt desc) [] {
      _id,
      maintitle,
      intro,
      date,
      slug,
      categories[]->,
      sub_subjects[]->{
        subtitle, subdescription
      },
      image{ asset->{url, metadata}},
    }`)

  const articles = await res

  return articles
}
