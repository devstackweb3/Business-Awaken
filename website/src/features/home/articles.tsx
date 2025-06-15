import { useState, useEffect, cache } from 'react'
import { Article } from '@/types/sanity/sanity.types'
import ArticleCard from '@/components/articlecard'
import { client } from '@/utils/sanity-client'
import { getAllArticles } from '@/lib/articles'
import SearchArticles from '@/features/home/searchArticles/index'
import ArticleList from '@/features/home/searchArticles/ArticleList'
import { getArticleByQuery } from '@/lib/searchArticles'

export const revalidate = true

const Articles = () => {
  const [articlesOverview, setArticlesOverview] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  /**
   * Toi tu utilisait une props dans Articles (ce composant)
   * Pour passer query qui était dans l'object searchParams.
   * Finalement c'est pas nécessaire car on le fait côté client.
   * Ce qui manquait, c'était le "state" query, que l'on initialise à undefined.
   */
  const [query, setQuery] = useState<string | undefined>(undefined)

  /**
   * C'est avec ce useEffect que l'on récupère la liste des TOUS les articles.$Au moment ou le client recoit la page.
   * ça signifie que la page recu ne contient aucun article.
   */
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await getAllArticles()
        console.log('first load', articles)
        setArticlesOverview(articles)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])
  // without dependancy table involved executed each time a query is rendered.
  // If no dependancy declared executed once only
  //

  useEffect(() => {
    console.log('searchTerm', query)

    if (!query) {
      getAllArticles().then((data) => {
        console.log('empty query', data)
        setArticlesOverview(data)
      })
    } else {
      getArticleByQuery(query).then((data) => {
        console.log('something in query', data)
        setArticlesOverview(data)
      })
    }
    // Comparing request to content data from Sanity database
  }, [query])

  if (loading) {
    return <span className="text-white">Loading...</span>
  }

  return (
    <div className="flex flex-col">
      <SearchArticles
        onChange={(str) => {
          setQuery(str)
        }}
      />
      <div className="overflow-x-scroll no-scrollbar">
        <div className="flex flex-row min-w-fit">
          {articlesOverview.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
          {/*<ArticleList query={query} />*/}
        </div>
      </div>
    </div>
  )
}

export default Articles
