import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div>
      <div className='mus__header section__padding ' id="about">
        <div className='mus__header-content'>
          <h1 className='gradient__text'>
          Hello, I’m Melaku F. 
          </h1>
          <p>Web developer / UI/UX Designer</p>
          <h2>I am a Web developer. <br />
             And I execl at what I do.</h2>
             <div className='mus__header-edu'>
                 <h1>Educations</h1>
                 <h3>Elementary School</h3>
                 <p>Saints Peter And Paul Elementary School (2003 -2011)</p>
                 <h3>High School</h3>
                 <p>Tsinseta Le Mariam S.S. High School (2011 -2014)</p>
                 <h3>University</h3>
                 <p>Addis Ababa Institute Of Technology(AAiT) (2014 -2019)</p>
             </div>
             <div className='mus__header-content_input'>
                <input  type="email" placeholder="Your Contact" /> 
                <button  type='button'>Hire Me</button>
             </div> 
                <div className='mus__header-image'>
                  <img src={ai} alt="ai" />
               </div>
        </div>
      </div>
          
    </div>
  )
}

export default Header