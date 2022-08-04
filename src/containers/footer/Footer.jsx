import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import me from '../../assets/me.JPG'

function Footer() {
  return (
    <footer>
     <a href='#me' className='footer__logo'>Melaku F.</a>
     <ul className='permalinks'>
         <li><a href='#about'>Home</a></li>
         <li><a href='#about'>About Me</a></li>
         <li><a href='#My'>My Proficiency</a></li>
         <li><a href='#service'>Services</a></li>
         <li><a href='#pro'>Projects</a></li>
         <li><a href='#blog'>Contact</a></li>
     </ul>
     <div className='footer__socials'>
         <a href='https://facebook.com'><FaFacebookF /></a>
         <a href='https://instagram.com'><FiInstagram /></a>
         <a href='https://twitter.com'><IoLogoTwitter /></a>
     </div>
     <div className='card'>
       <img src={me} alt="profile" />
     </div>
     <div className='card-p'>
     <p>"The distance between dreams and reality is called discipline" <br />--Paulo Coelho | Abraha Ftwi (Big brother, Mentor everything...)</p>
       <p>To all my friends Alexander B. Samuel M. Mewail G. <br /> thanku you!!!</p>
     </div>
     <div className='footer__copyright'>
         <small>
             &copy; 2022 Melaku personal protfolio. All right reserved
         </small>
     </div>

    </footer>
  )
}

export default Footer
