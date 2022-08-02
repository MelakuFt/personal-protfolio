import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
const Navbar = () => {
  const [toggleMenue, setToggleMenue] = useState(false)
  return (
    <div className='mus__navbar'>
      <div className='mus__navbar-links'>
         <div className='mus__navbar-links_logo'>
            <h1><img src={logo} alt="logo" /> Melaku Ftwi </h1>          
         </div>
         <div className='mus__navbar-links_container'>
          <p><a href="#about">About Me</a></p>
          <p><a href="#My">My proficiency</a></p>
          <p><a href="#service">Services</a></p>
          <p><a href="#pro">Projects</a></p>
           <div className='mus__navbar-contact'>
            <p><a href="#blog">Contact</a></p>
           </div>
         </div>
         <div className='mus__navbar-menu'>
           { toggleMenue
           ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenue(false)} />
           : <RiMenuLine color="#fff" size={27} onClick={()=> setToggleMenue(true)} />
           }
           {toggleMenue && (
             <div className='mus__navbar-menu_container scale-up-center'>
               <div className='mus__navbar-menu_container-links'>
               <p><a href="#about">About Me</a></p>
               <p><a href="#My">Proficiency</a></p>
               <p><a href="#service">Services</a></p>
               <p><a href="#pro">Projects</a></p>
               <p className='mus__navbar-contact'><a href="#blog">Contact</a></p>
             </div>
            </div> 
           )}
         </div>
      </div>
      
    </div>
  )
}

export default Navbar