import React from 'react'
import "./Footer.css"

import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
            <div className='social-links'>
              <a href="https://github.com/abratemmy" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><img src={Github} alt="" /></a>
              <a href="https://www.instagram.com/adeniyi6066/" target="_blank" rel="noopener noreferrer" className="footer-Navlink"><img src={Instagram} alt="" /></a>
              <a href="https://www.linkedin.com/in/temitope-adeniyi-olasode-863a30141/" target="_blank" rel="noopener noreferrer" className="footer-Navlink"> <img src={Linkedin} alt="" /></a>
            </div>

            <div className='logo-f'>
            <img src={Logo} alt=" " />
        </div>

        < div className='blur blur-f1'></div>
        < div className='blur blur-f2'></div>
            
        </div>

        
    </div>
  )
}
export default Footer