import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className='container px-6 mx-auto md:px-24'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
