import React from 'react'
import './MyTestimony.css'
import Testimony from '../Testimony/Testimony'
import Title from "../Title/Title";
import photo1 from './Images/photo1.svg'
import photo2 from './Images/photo2.svg'
const MyTestimony = () => {
  const testimonies = [
    { photo: photo1, textitext: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",person:'Evren Shah'},
    { photo: photo2, textitext: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",person:'Flora sheen' },
    { photo: photo1, textitext: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",person:'Evren Shah' },
  ];

  return (
    <section className='testimonial'>
      <div className='testimony-wrapper'>
 <div className="title-position"><Title firstWord={"My"} secondWord={"Testimonial"}  /></div>
      <div className='testimonies'>
        {testimonies.map((testimony,idx)=>
          <Testimony key={idx}  photo={testimony.photo} testitext={testimony.textitext} person={testimony.person} />
        )}
      </div>
      </div>
     
    </section>
  )
}

export default MyTestimony
