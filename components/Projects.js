const Project = [
  {
    title: 'Safety Administrate',
    brief:
      'Safety Training is one of the leading Training institutions which offers more than 100+ Health and Safety courses in the UK.',
    img: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a5c09da-7d10-418a-839d-92f397a73eec%2FSafety_Training_UK.png?table=block&id=76eb6106-c954-4b52-a10a-0c1f4a8b2416&spaceId=a443a850-4ca1-4757-b748-b60d2e84c5fa&width=2400&userId=&cache=v2',
  },
  {
    title: 'Sokoplace',
    brief:
      'Sokolace is a logistics, warehousing and fulfillment SAAS solution for B2B and B2C business.',
    img: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/557acf81-0417-4578-8f0a-17adbec610ee/Sokoplace.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210702T134023Z&X-Amz-Expires=86400&X-Amz-Signature=f4b05bd5a18af6aa03f4ecf4dbdc58e90d78284c2a77b5993456cc2710b21165&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sokoplace.png%22',
  },
]

const Projects = () => {
  return (
    <>
      <div>
        {Project.map(function (d, idx) {
          return (
            <div
              className='h-full bg-gray-100 shadow-md CaseStudyWrap'
              key={idx}
            >
              <div className='flex flex-col-reverse my-3 md:flex-row'>
                <div className='flex flex-col gap-2 p-4 pt-4 md:w-1/2 md:p-6 md:justify-center '>
                  <h1 className='text-2xl'>{d.title}</h1>
                  <p>{d.brief}</p>
                </div>
                <div className=' md:w-1/2 image'>
                  <img src={d.img} alt='' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects
