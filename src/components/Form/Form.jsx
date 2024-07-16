import React from 'react'
import './Form.css'
import Media from '../Media/Media'
import social1 from "./images/social1.svg"
import social2 from './images/Social2.svg'
import social3 from './images/Social3.svg'
import social4 from './images/Social4.svg'
const Form = () => {
  return (
    <form className='form'>
      <label>Name</label><input className='mail' id ='name' type='text' placeholder='Your name' required></input>
      <label>mail</label><input className='mail' id ='mail' type='text' placeholder='Email' required></input>
      <label>website</label><input className='mail' id ='website' type='text' placeholder='Your website' required></input>
      <label>message</label><textarea name="message" id="message" placeholder='How can I help you?*'></textarea>
      <div className='btn-media'>
        <button className='btn-form'>Get in touch</button>
        <div className="social-btn">
            <Media 
           image={social1}
          
            />
            <Media 
           
           image={social2}
            />
            <Media 
           
           image={social3}
            />
            <Media 
          
          image={social4}
            />
            </div>

      </div>
    </form>
  )
}

export default Form
