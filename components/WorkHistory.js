const Work = () => {
  return (
    <>
      <div className='inline-block w-full max-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg last:border-b-0'>
        <table className='w-full'>
          <tbody className='bg-white'>
            <tr className='bg-white hover:bg-gray-100 transform duration-150 border-b last:border-0'>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0 w-10'>
                    {/* <img
                      className='w-10 h-10'
                      src='/tobiaslins.svg'
                      alt='Tobias Lins logo'
                    /> */}
                  </div>
                  <div className='ml-4'>
                    <div className='text-sm leading-5 font-medium text-gray-900'>
                      Freelance Consultant, System Architect
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Tobias Lins
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 hidden lg:table-cell'>
                <div className='text-sm leading-5 text-gray-800'>
                  Helping clients develop React &amp; Node applications
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm'>
                <span className=''>June 2019</span> -
                <span className='font-bold'>Now</span>
              </td>
            </tr>
            <tr className='bg-white hover:bg-gray-100 transform duration-150 border-b last:border-0'>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0 w-10'>
                    {/* <img
                      className='w-10 h-10'
                      src='/dcodeit.png'
                      alt='d:code:it logo'
                    /> */}
                  </div>
                  <div className='ml-4'>
                    <div className='text-sm leading-5 font-medium text-gray-900'>
                      Fullstack Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      d:code:it
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 hidden lg:table-cell'>
                <div className='text-sm leading-5 text-gray-800'>
                  Building Axcept.io, a visual testing platform
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm'>
                <span className=''>Sept. 2018</span> -
                <span className=''>July 2019</span>
              </td>
            </tr>
            <tr className='bg-white hover:bg-gray-100 transform duration-150 border-b last:border-0'>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200'>
                <div className='flex items-center'>
                  <div classNameName='flex-shrink-0 w-10'>
                    {/* <img
                      className='w-10'
                      src='/mpay24.svg'
                      alt='d:code:it logo'
                    /> */}
                  </div>
                  <div className='ml-4'>
                    <div className='text-sm leading-5 font-medium text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      mPAY24
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 hidden lg:table-cell'>
                <div className='text-sm leading-5 text-gray-800'>
                  Working on the complete platform, website &amp; SDKs
                </div>
              </td>
              <td className='px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm'>
                <span className=''>Sept. 2014</span> -
                <span className=''>June 2018</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Work
