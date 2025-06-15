import { Image } from '@/types/sanity/image'

export type Social = {
  Linkedin: string
}

export type Experience = {
  Annee: string
  Post_Pourvu: string
  description: string
}

export type Author = {
  biography: string
  experience: Array<Experience>
  image: Array<Image>
  job: string
  name: string
  socials: Array<Social>
  surname: string
  _id: string
}
