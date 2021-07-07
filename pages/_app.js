import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
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
