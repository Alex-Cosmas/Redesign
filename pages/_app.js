import '../styles/globals.css'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <main className='min-h-screen px-6 py-10 mx-auto md:py-20 md:px-0 md:max-w-lg'>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
