import Link from 'next/link'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

export default function Header() {
  return (
    <header>
      <div className='Header'>
        <a
          href='/'
          className='block text-2xl font-bold leading-none text-black no-underline lg:text-3xl lg:leading-tight'
        >
          Alex Cosmas
        </a>
        <div className='justify-between hidden mt-3 tracking-wide uppercase md:flex lg:mt-4'>
          <div className='flex items-center space-x-5 text-xs'>
            <Link href='/projects'>
              <a className='projects'>Projects</a>
            </Link>
            <Link href='/articles'>
              <a className='articles'>Articles</a>
            </Link>

            {/* <Link href='/library'>
              <a className='library'>Library</a>
            </Link> */}
          </div>
          <div className='flex items-center text-xs gap-x-4'>
            <a
              href='https://www.linkedin.com/in/alex-cosmas/'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div className='flex items-center text-black no-underline gap-x-1 hover:text-black'>
                <AiFillLinkedin className='w-4 h-4' />
                LinkedIn
              </div>
            </a>

            <a
              href='mailto:cosmasalex365@gmail.com'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div className='flex items-center text-black no-underline gap-x-1 hover:text-black'>
                <AiOutlineMail className='w-4 h-4' />
                Mail
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
