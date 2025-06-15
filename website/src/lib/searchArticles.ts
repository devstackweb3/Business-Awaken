import { client } from '@/utils/sanity-client'
import { Article } from '@/types/sanity/sanity.types'

export async function getArticleByQuery(query: string): Promise<Article[]> {
  const res =
    //restrictive research on specific parameter based on maintitle's name
    await client.fetch(`*[_type == "article" && maintitle match "*${query}*"] | order(_createdAt desc) [] {
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
