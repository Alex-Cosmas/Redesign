import Link from 'next/link'

const Articles = () => {
  return (
    <div className='py-10'>
      <h1 className='mb-4 text-2xl font-extrabold text-black'>Coming soon. </h1>
      <div className='text-lg leading-normal text-grey-darkest spaced-y-6'>
        <p>
          Thank for taking the time to view my posts. There are no articles to
          show at the moment. Work in progress and coming soon.
          <Link href='/'>
            <a className='font-bold text-black'> Go back</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Articles
