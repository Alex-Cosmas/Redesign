import Head from 'next/head'
import Projects from '~/components/ProjectComp'
import Capabilities from '~/components/Capabilities'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Cosmas</title>
      </Head>
      <div className=''>
        <div className=''>
          <div className='pt-6 Content'>
            <p>
              Welcome to my corner on the internet where I share my work, notes
              and experiences on building products, design, software development
              and product management.
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
            </div>

            <Capabilities
              title='Research & User Experience'
              // content={` <div className='p-3 rounded-sm shadow-sm bg-gray-50'>
              //     <ul>
              //       <li>Design Thinking</li>
              //       <li>User Research</li>
              //       <li>UX Audits</li>
              //       <li>Competitive Analysis</li>
              //       <li>Brainstorming</li>
              //       <li>User Journeys</li>
              //     </ul>
              //   </div>`}
            />
            <Capabilities
              title='Prototyping'
              // content={` <div className='p-3 rounded-sm shadow-sm bg-gray-50'>
              //         <ul>
              //           <li>Information Architecture</li>
              //           <li>Sketching</li>
              //           <li>Wireframing</li>

              //           <li>Usability Testing</li>

              //         </ul>
              //       </div>`}
            />
            <Capabilities
              title='Front End Development'
              // content={` <div className='p-3 rounded-sm shadow-sm bg-gray-50'>
              //         <ul>
              //           <li>TailwindCSS</li>
              //           <li>Javascript</li>
              //           <li>React/NextJs</li>
              //           <li>GraphQL</li>
              //           <li>Git</li>
              //         </ul>
              //       </div>`}
            />
            {/* Project Component */}

            <Projects />

            {/*  */}
          </div>
        </div>
      </div>
    </>
  )
}
