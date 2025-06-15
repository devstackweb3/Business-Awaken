import { GetServerSideProps } from 'next'
import { Article } from '@/types/sanity/sanity.types'
import { client } from '@/utils/sanity-client'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // Fetch articles from Sanity
    const articlesSlugArray: Article[] = await client.fetch(
      `*[_type == "article"] | order(_updatedAt desc, _createdAt desc, publishedAt desc) {
        slug
      }`
    )

    // Base URL
    const baseUrl = 'https://w3beconomy.uk'

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
              xmlns:xhtml="http://www.w3.org/1999/xhtml" 
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd 
              http://www.w3.org/1999/xhtml 
              http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd">
        
        <!-- Homepage -->
        <url>
          <loc>${baseUrl}/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
          <xhtml:link rel="alternate" href="${baseUrl}/" hreflang="en" />
        </url>

        <!-- Articles -->
        ${articlesSlugArray
          .map(
            (article) => `
          <url>
            <loc>${baseUrl}/blog/${article.slug?.current}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            <xhtml:link rel="alternate" href="${baseUrl}/blog/${article.slug?.current}" hreflang="en" />
          </url>
        `
          )
          .join('')}
      </urlset>
    `

    // Set response headers
    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return { props: {} }
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Fallback minimal sitemap if error occurs
    res.setHeader('Content-Type', 'text/xml')
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://w3beconomy.uk/</loc>
        </url>
      </urlset>
    `)
    res.end()
    return { props: {} }
  }
}

// Empty component (required by Next.js)
export default function Sitemap() {
  return null
}
