import { Article } from '@/types/sanity/sanity.types'
import ArticleCard from '@/components/articlecard'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAllArticles } from '@/lib/articles'

function getFilteredArticles(list: Article[], query?: string) {
  return query
    ? list.filter((article) => {
        return article.maintitle!.toLowerCase().includes(query.toLowerCase())
      })
    : list
}

const ArticleList = ({ query }: { query: string | undefined }) => {
  const [articleList, setArticleList] = useState<Article[]>([])
  const [filteredArticleList, setFilteredArticleList] = useState<Article[]>([])

  /**
   * Exécuté une seule fois et au chargement du composant
   */
  useEffect(() => {
    getAllArticles().then((data) => {
      setArticleList(data)
      setFilteredArticleList(getFilteredArticles(data))
    })
  }, [])

  useEffect(() => {
    setFilteredArticleList(getFilteredArticles(articleList, query))
  }, [query])

  return (
    <div>
      {filteredArticleList.length === 0 && (
        <p className="mt-4">No article found</p>
      )}
      <div className="flex flex-row mr-6">
        {filteredArticleList.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticleList
