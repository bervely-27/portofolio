import React from 'react'
import './Skill.css'
const Skill = ({source,text}) => {
  return (
    <div className='skill'>
      <div className='imgskill'><img src={source} alt=''/></div>
      <p>{text}</p>
    </div>
  )
}

export default Skill
