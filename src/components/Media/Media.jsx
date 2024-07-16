import React from 'react'
import './Media.css'
const Media = ({image,icon}) => {
  return (
   <button className="boxmedia"
   aria-label='media'
   >
    
<img src={image} alt=''/>
   </button>
  )
}

export default Media
