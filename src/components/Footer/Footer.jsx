import React from 'react'
import logowhite from "./image/logowhite.svg";
import './Footer.css'
const Footer = () => {
    const today= new Date()
  return (
    <footer>
        <div className='footer'>
<div className="logonav">
        <img src={logowhite} alt="logo" />
        <p>Personal</p>
      </div>
      <div className='copyright'>
        <p>copyright&copy; {today.getFullYear()}</p>
        <p>  Made By Beverly</p>
      </div>
        </div>
      
    </footer>
  )
}

export default Footer
