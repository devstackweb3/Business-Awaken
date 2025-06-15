import { client } from './sanity-client' // Import the Sanity client
import { Article } from '@/types/sanity/sanity.types' // Import the Article type for TypeScript safety

// Define the structure of a Sitemap entry
export interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency?: string
  priority?: number
}

/**
 * Fetches all articles from Sanity.
 * @returns {Promise<Article[]>} A promise resolving to an array of articles.
 */
export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const articles = await client.fetch(
      `*[_type == "article"] | order(_updatedAt desc, _createdAt desc, publishedAt desc){
        slug,
        _updatedAt
      }`
    )
    return articles
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw new Error('Failed to fetch articles')
  }
}

/**
 * Generates a list of sitemap entries for articles.
 * @param {Article[]} articles - An array of articles from the CMS.
 * @param {string} baseUrl - The base URL of the website.
 * @returns {SitemapEntry[]} An array of sitemap entries.
 */
export const generateSitemapEntries = (
  articles: Article[],
  baseUrl: string
): SitemapEntry[] => {
  return articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug?.current}`,
    lastModified: new Date(article._updatedAt).toISOString(),
    changeFrequency: 'daily',
    priority: 0.8,
  }))
}

/**
 * Generates the homepage entry for the sitemap.
 * @param {string} baseUrl - The base URL of the website.
 * @returns {SitemapEntry} A sitemap entry for the homepage.
 */
export const generateHomepageEntry = (baseUrl: string): SitemapEntry => {
  return {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }
}
