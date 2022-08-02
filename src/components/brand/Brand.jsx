import React from 'react';
import './brand.css';
import { ngo1, ngo2, ngo3, ngo4, ngo5, ngo6, ngo7, css3, 
  html5, git, nextjs, figma, reactjs, js  } from './import';
const Brand = () => {
  return (
    <div className='mus__brand section__padding' id="My">
      <h1>My Proficiency</h1>
      <div className='mus__brand-first'>
      <img  src={ngo1} alt="ngo1" />
     <div className='mus__brand-second'>
       <img  src={js} alt="js" /> 
     </div>
      </div>
      <h3>JavaScript</h3>
      <div className='mus__brand-first'>
      <img src={ngo2} alt="ngo2" />
      <div className='mus__brand-second'>
      <img src={reactjs} alt="reactjs" />
      </div> 
      </div>
     <h3>React JS</h3>
      <div className='mus__brand-first'>
      <img src={ngo3} alt="ngo3" />
      <div className='mus__brand-second'>
      <img src={nextjs} alt="nextjs" />
      </div>
      </div>
      <h3>Next.js</h3>
      <div className='mus__brand-first'>
      <img src={ngo4} alt="ngo4" />
      <div className='mus__brand-second'>
      <img src={css3} alt="css3" />
      </div>
      </div>
      <h3>CSS3</h3>
      <div className='mus__brand-first'>
      <img src={ngo5} alt="ngo5" />
      <div className='mus__brand-second'>
      <img src={html5} alt="html5" />
      </div>
      </div>
      <h3>HTML5</h3>
      <div className='mus__brand-first'>
      <img src={ngo6} alt="ngo6" />
      <div className='mus__brand-second'>
      <img src={git} alt="git" />
      </div>
      </div>
      <h3>Git</h3> 
      <div className='mus__brand-first'>
      <img src={ngo7} alt="ngo7" />
      <div className='mus__brand-second'>
      <img src={figma} alt="figma" />
      </div>
      </div>
      <h3>Figma</h3>
     
      
      
      
     
    
    </div>
  ) 
}

export default Brand
