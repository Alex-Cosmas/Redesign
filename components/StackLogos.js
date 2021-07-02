const StackLogos = () => {
  return (
    <div>
      Experienced:
      <div className='w-full shadow-sm'>
        <div className='grid grid-cols-2 px-6 py-3 mt-2 mb-8 bg-white gap-y-8 md:gap-0 md:grid-cols-6'>
          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full'>
              <img
                src='/images/stack-logos/tailwindcss.svg'
                alt='TailwindCSS'
              />
            </div>
            <p>TailwindCSS</p>
          </div>
          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full'>
              <img src='/images/stack-logos/nextjs-logo.svg' alt='NextJs' />
            </div>
            <p>NextJs</p>
          </div>
          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full'>
              <img
                src='/images/stack-logos/javascript-js.svg'
                alt='Javascript'
              />
            </div>
            <p>Javascript</p>
          </div>

          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 overflow-hidden bg-white rounded-full'>
              <img src='/images/stack-logos/graphql.svg' alt='GraphQL' />
            </div>
            <p>GraphQL</p>
          </div>

          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 overflow-hidden bg-white rounded-full'>
              <img
                src='/images/stack-logos/git.svg'
                alt='Git Version Control'
              />
            </div>
            <p>Git</p>
          </div>
        </div>
      </div>
      Intermediate:
      <div className='w-full shadow-sm'>
        <div className='grid grid-cols-2 px-6 py-3 mt-2 mb-8 bg-white gap-y-8 md:gap-0 md:grid-cols-6'>
          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full'>
              <img src='/images/stack-logos/nuxt.svg' alt='NuxtJs' />
            </div>
            <p>NuxtJs</p>
          </div>
          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full'>
              <img src='/images/stack-logos/typescript.svg' alt='Typescript' />
            </div>
            <p>Typescript</p>
          </div>
          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full'>
              <img
                img
                src='/images/stack-logos/apollo-graphql.svg'
                alt='Apollo'
              />
              />
            </div>
            <p>Apollo</p>
          </div>

          <div className='flex flex-col items-center cardWrap'>
            <div className='flex items-center justify-center w-16 h-16 p-2 bg-white rounded-full'>
              <img
                src='/images/stack-logos/firebase.svg'
                alt='Git Version Control'
                className='object-contain p-2 '
              />
            </div>
            <p>Firebase</p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default StackLogos
