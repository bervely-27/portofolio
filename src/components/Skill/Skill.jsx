import React from 'react'
import './Skill.css'
const Skill = ({source,text}) => {
  return (
    <div className='skill'>
      <div className='imgskill'><img src={source} alt=''/></div>
      <div className='name-skil'><p>{text}</p></div>
    </div>
  )
}

export default Skill
