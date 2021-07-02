import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='py-4 text-white bg-indigo-900'>
        <div className='container mx-auto md:px-24'>
          <div className='flex flex-col items-center justify-center md:flex-row md:mx-auto md:flex'>
            <div>
              <Link href='/' passHref>
                <h2 className='uppercase '>
                  Alex <span className='font-semibold'>Cosmas</span>
                </h2>
              </Link>
            </div>
            <div className='md:ml-auto'>
              <ul className='flex gap-5'>
                {/* <li>Who am i?</li>
                <li>What have I done?</li> */}
                {/* <li>Notes & Library</li> */}
                <li>Get in touch </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
