import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

export default function Capability() {
  return (
    <div className='w-full'>
      <div className='w-full mx-auto '>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                <span>Research</span>

                <HiChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                <div>
                  <p>Design Thinking</p>
                  <p>User Research</p>
                  <p>UX Audits</p>
                  <p>Competitive Analysis</p>
                  <p>Brainstorming</p>
                  <p>User Journeys</p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                <span>Prototyping</span>
                <HiChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                <div>
                  <ul>
                    <li>Information Architecture</li>
                    <li>Sketching</li>
                    <li>Wireframing</li>

                    <li>Usability Testing</li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-black rounded-sm bg-gray-50 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                <span>Front End Development</span>
                <HiChevronDown
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 '>
                <div>
                  <ul>
                    <li>TailwindCSS</li>
                    <li>Javascript</li>
                    <li>React/NextJs</li>
                    <li>GraphQL</li>
                    <li>Git</li>
                     <li>NodeJs</li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
