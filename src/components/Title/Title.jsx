import React from 'react'
import './Title.css'
const Title = ({firstWord,secondWord}) => {
  return (
    <div className='titleskill'>
      <span className='firstword'>{firstWord}</span>
      <span className='bold'>{secondWord}</span>
    </div>
  )
}

export default Title
