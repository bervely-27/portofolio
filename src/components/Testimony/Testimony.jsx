import React from 'react'
import './Testimony.css'
import Line from '../Line/Line'
const Testimony = ({photo,testitext,person}) => {
  return (
    <section className='testimony'>
      <div>
        <img src={photo} alt='pic'/>
      </div>
      <p>{testitext}</p>
      <Line/>
      <span className='person'>{person}</span>
      <span className='job'>Designer</span>
    </section>
  )
}

export default Testimony
