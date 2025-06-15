import { Author } from '@/types/sanity/author'
import { Image } from '@/types/sanity/image'
import { Slug } from '@/types/sanity/slug'
import { RichText } from '@/types/sanity/rich_text'
import { PortableTextBlock } from '@portabletext/react'

export type Article = {
  authors: Array<Author>
  category: Array<string>
  data: string
  description: string
  maintitle: string
  image: Image
  slug: Slug
  intro: PortableTextBlock
  sub_subjects: Array<{
    subtitle: string
    subdesc: Array<RichText>
    image: Image
  }>
  tableOfContentImg: {
    image: Image
    title: string
    _id: string
  }
  title: string
  _id: string
}
