import React, { useState, useRef } from 'react'
import { CgChevronDown } from 'react-icons/cg'

function Capabilities(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  // const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`,
    )
    // setRotateState(
    //   setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate',
    // )
  }
  return (
    <div className='accordion__section w-ful'>
      <button
        className={` font-semibold text-left text-black no-underline flex justify-between px-4 py-3 hover:bg-gray-100 hover:transition hover:delay-300 ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className='accordion__title'>{props.title}</p>
        {/* Cheveon goes here */}
        <CgChevronDown />
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='accordion__content'
      >
        <div
          className='p-4 accordion__text'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export default Capabilities
