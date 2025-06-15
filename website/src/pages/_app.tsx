import { type AppType } from 'next/app'
import Navbar from '@/components/navbar'
import Footbar from '@/components/footbar'
import { useRouter } from 'next/router'
import '@/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter()
  const disablePathname = ['/sitemap.xml']
  return (
    <>
      {!disablePathname.includes(pathname) ? <Navbar /> : null}
      <div className="pt-12 bg-cyan-700">
        <Component {...pageProps} />
      </div>
      {!disablePathname.includes(pathname) ? <Footbar /> : null}
    </>
  )
}

export default MyApp
