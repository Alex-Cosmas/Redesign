import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container mx-auto px-6 md:px-24'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
