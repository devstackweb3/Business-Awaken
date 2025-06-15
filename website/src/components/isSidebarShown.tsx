import React from 'react'
import { Tableofcontent } from '@/components/blog/tableofcontent'
import { Author } from '@/components/blog/author'
import { Article } from '@/types/sanity/sanity.types'

/*interface author {
  _ref: number
}*/

export const IsSidebarShown = (props: { value: Article }) => {
  const article = props.value

  return (
    <div className="hidden lg:block">
      <div className="px-4">
        <Tableofcontent value={article} />
        {/*PROBLEM OF KEY MAPPING DETECTED*/}
        {article?.authors
          ? article?.authors.map((author: any) => (
              <Author
                data={author}
                key={article.authors ? author._ref : null}
              />
            ))
          : null}
      </div>
    </div>
  )
}
