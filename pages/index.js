import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Cosmas</title>
      </Head>
      <div className='min-h-screen py-20'>
        <div className='px-6 mx-auto md:px-0 md:max-w-lg'>
          <div className='Header'>
            <a
              href='/'
              className='block text-2xl font-bold leading-none text-black no-underline lg:text-3xl lg:leading-tight'
            >
              {' '}
              Alex Cosmas{' '}
            </a>
            <div className='justify-between hidden mt-3 tracking-wide uppercase md:flex lg:mt-4'>
              <div className='flex items-center space-x-5 text-xs'>
                <a
                  href='/'
                  className='font-semibold text-black no-underline hover:text-black'
                >
                  Projects
                </a>
                <a
                  href='/'
                  className='font-semibold no-underline text-grey-dark hover:text-black'
                >
                  Articles
                </a>
                <a
                  href='/'
                  className='font-semibold no-underline text-grey-dark hover:text-black'
                >
                  Library
                </a>
              </div>
              <div className='flex items-center space-x-5 text-xs'>
                <a
                  href='/'
                  className='font-semibold text-black no-underline hover:text-black'
                >
                  Linkedin
                </a>
                <a
                  href='/'
                  className='font-semibold no-underline text-grey-dark hover:text-black'
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className='pt-6 Content'>
            <p>
              Welcome to my small corner on the internet where I share my work,
              notes and experiences on building products, design, software
              development and product management.
            </p>

            <h1 className='my-4 text-2xl font-semibold text-black'>
              Who am I?
            </h1>
            <div className='space-y-4'>
              <p>
                I'm Alex, a multidisciplinary full-stack designer from Nairobi
                🇰🇪 who loves to solve challenges through research, design and
                code.
              </p>
            </div>

            <div className='CapabilityComponent'>
              <h1 className='mt-6 mb-4 text-2xl font-semibold text-black'>
                Capabilities
              </h1>
              <div className='space-y-4'>
                <div className='grid gap-3 md:grid-cols-2'>
                  <div>
                    <h2 className='px-3 text-xl py-0.5 font-medium text-gray-600'>
                      Research
                    </h2>
                    <div className='p-3 rounded-sm shadow-sm bg-gray-50'>
                      <ul>
                        <li>Design Thinking</li>
                        <li>User Research</li>
                        <li>UX Audits</li>
                        <li>Competitive Analysis</li>
                        <li>Brainstorming</li>
                        <li>User Journeys</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2 className='px-3 text-xl py-0.5 font-medium text-gray-600'>
                      Prototyping
                    </h2>
                    <div className='p-3 rounded-sm shadow-sm bg-gray-50'>
                      <ul>
                        <li>Information Architecture</li>
                        <li>Sketching</li>
                        <li>Wireframing</li>
                        <li>Prototyping</li>
                        <li>Usability Testing</li>
                        <li>{''}</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2 className='px-3 text-xl py-0.5 font-medium text-gray-600'>
                      Development
                    </h2>
                    <div className='p-3 rounded-sm shadow-sm bg-gray-50'>
                      <ul>
                        <li>TailwindCSS</li>
                        <li>Javascript</li>
                        <li>React/NextJs</li>
                        <li>GraphQL</li>
                        <li>Git</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='ProjectComponent'>
              <div>
                <h1 className='mt-6 mb-4 text-2xl font-semibold text-black'>
                  Featured Projects
                </h1>
                <p>
                  Here are some of the featured projects I've worked on in the
                  past.
                </p>
                <p>
                  I have some other projects in progress, others are concepts or
                  proposals while others are just experiments.
                </p>
              </div>
              <div className='my-4 space-y-8 FeaturedProjectWrapper'>
                <div className='p-4 transition duration-300 rounded-sm shadow-sm cursor-default FeaturedProjectComponent hover:bg-gray-100'>
                  <div>
                    <a
                      href=''
                      className='text-lg font-bold text-black no-underline hover:underline'
                    >
                      Safety Administrate
                    </a>
                  </div>
                  <p className='mt-1 text-base leading-normal text-grey-darkest'>
                    Safety Training is one of the leading Training institutions
                    which offers more than 100+ Health and Safety courses in the
                    UK.
                  </p>
                  <div className='mt-2 text-base leading-normal text-grey-darkest'>
                    <a
                      href='#'
                      className='text-sm no-underline text-grey-darker hover:text-black hover:underline'
                    >
                      {' '}
                      Visit the project →{' '}
                    </a>
                  </div>
                </div>

                <div className='p-4 transition duration-300 rounded-sm shadow-sm cursor-default FeaturedProjectComponent hover:bg-gray-100'>
                  <div>
                    <a
                      href=''
                      className='text-lg font-bold text-black no-underline hover:underline'
                    >
                      Sokoplace Group
                    </a>
                  </div>
                  <p className='mt-1 text-base leading-normal text-grey-darkest'>
                    Sokolace is a logistics, warehousing and fulfillment SAAS
                    solution for B2B and B2C business.
                  </p>
                  <div className='mt-2 text-base leading-normal text-grey-darkest'>
                    <a
                      href='#'
                      className='text-sm no-underline text-grey-darker hover:text-black hover:underline'
                    >
                      {' '}
                      Visit the project →{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
