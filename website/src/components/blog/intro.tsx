import { RichText } from '@/components/blog/rich-text'
import { Article } from '@/types/sanity/sanity.types'
import { useState, useEffect } from 'react'

export const Intro = (article: Article) => {
  const { intro } = article
  return (
    <div className="flex flex-col gap-1">
      {intro ? <RichText value={intro} /> : null}
    </div>
  )
}
