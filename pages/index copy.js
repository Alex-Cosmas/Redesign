import Head from 'next/head'
import Projects from '../components/Projects'
import Skills from '/components/Skills'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Alex Cosmas</title>
      </Head>
      <div className='pt-10 sm:pt-24'>
        <h1 className='text-4xl'>Hi, I'm Alex 👋🏾</h1>
      </div>
      <div className='grid gap-10 sm:pb-24'>
        <p className='pt-3'>
          I'm a curious <strong>multidisciplinary</strong> ,
          <strong>full-stack designer</strong> from Nairobi 🇰🇪 who loves to
          solve challenges through research, design and code.
        </p>

        <div>
          <h3 className='font-bold'>What I am good at?</h3>
          <Skills />
        </div>

        <div className='md:my-16'>
          <h3 className='font-bold'>Projects I have worked on</h3>
          <Projects />
        </div>
      </div>
    </>
  )
}
