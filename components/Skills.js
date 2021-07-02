import StackLogos from '../components/StackLogos'

const ResearchSkills = [
  { skill: 'User Research' },
  { skill: 'UX Audits' },
  { skill: 'Competitive Analysis' },
  { skill: 'Brainstorming' },
  { skill: 'User Journeys' },
]

const prototypingSkills = [
  { skill: 'Information Architecture' },
  { skill: 'Sketching' },
  { skill: 'Wireframing' },
  { skill: 'Prototyping' },
  { skill: 'Usability Testing' },
]

const Skills = () => {
  return (
    <>
      <div className='grid gap-5 my-10 md:h-full md:my-0 md:py-3 md:grid-cols-2 md:gap-5"'>
        <div>
          <h2 className='px-4 pb-2'> UX Design</h2>
          <div className='h-full p-4 bg-gray-100 '>
            <div className='ResearchWrapper '>
              <h1 className='px-4 pb-2'>Research</h1>
              <div className='grid-cols-3 gap-2 p-4 bg-white md:grid '>
                {ResearchSkills.map((d, idx) => {
                  return (
                    <div key={idx} className='gap-2'>
                      {d.skill}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='pt-8 prototyingWrapper'>
              <h1 className='px-4 pb-2'>Prototyping</h1>
              <div className='grid-cols-3 gap-2 p-4 bg-white md:grid '>
                {prototypingSkills.map((d, idx) => {
                  return (
                    <div key={idx} className='gap-2'>
                      {d.skill}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-0'>
          <h2 className='px-4 pb-2'> Development </h2>
          <div className='p-4 bg-gray-100 md:h-full'>
            <StackLogos />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
