import Link from 'next/link'
const ProjectComponent = () => {
  return (
    <>
      <div className='ProjectComponent'>
        <div>
          <h1 className='mt-6 mb-4 text-2xl font-semibold text-black'>
            Featured Projects
          </h1>
          <p>
            Here are some of the featured projects I've worked on in the past.
          </p>
          {/* <p>
                  I have some other projects in progress, others are concepts or
                  proposals while others are just experiments.
                </p> */}
        </div>
        <div className='my-4 space-y-8 FeaturedProjectWrapper'>
          <div className='p-4 transition duration-300 rounded-sm shadow-sm cursor-default FeaturedProjectComponent hover:bg-gray-100'>
            <div>
              <h1 className='text-lg font-bold text-black no-underline '>
                Safety Administrate
              </h1>
            </div>
            <p className='mt-1 text-base leading-normal text-grey-darkest'>
              Safety Training is one of the leading Training institutions which
              offers more than 100+ Health and Safety courses in the UK.
            </p>
            <div className='mt-2 text-base leading-normal text-grey-darkest'>
              <a
                target='_blank'
                rel='noopener noreferrer nofollow'
                href='https://www.notion.so/Safety-Systems-Administrate-37be307390b544cf809b0871002909e0'
                className='text-sm no-underline text-grey-darker hover:text-black hover:underline'
              >
                View the Case Study →
              </a>
            </div>
          </div>

          <div className='p-4 transition duration-300 rounded-sm shadow-sm cursor-default FeaturedProjectComponent hover:bg-gray-100'>
            <div>
              <h1 className='text-lg font-bold text-black no-underline '>
                Sokoplace Group
              </h1>
            </div>
            <p className='mt-1 text-base leading-normal text-grey-darkest'>
              Sokoplace is a logistics, warehousing and fulfillment SAAS
              solution for B2B and B2C business.
            </p>
            <div className='mt-2 text-base leading-normal text-grey-darkest'>
              <a
                target='_blank'
                rel='noopener noreferrer nofollow'
                href='https://www.notion.so/Sokoplace-Group-fe9c1bb8be3b43cfad021fd7435e3131'
                className='text-sm no-underline text-grey-darker hover:text-black hover:underline'
              >
                View the Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectComponent
