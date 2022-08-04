import React from 'react';
import './brand.css';
import {  html, css, github, nextjs, figma, react, js  } from './import';
const Brand = () => {
  return (
    <div className='mus__brand section__padding ' id="My">
     
      <h2>My Proficiency</h2>
        <div className='mus__brand-head'>
          <h3>Experience</h3>
          <p>These are the technologies I've worked with</p>
        </div>
        
        <div className='mus__brand_components'>
          <div className='mus__brand_component-html'>
              <img src={html} alt="html icon" />
              <p>HTML</p>
          </div>
          <div className='mus__brand_component-css'>
              <img src={css} alt="css icon" />
              <p>CSS</p>
          </div>
          <div className='mus__brand_component-js'>
              <img src={js} alt="js icon" />
              <p>JavaScript</p>
          </div>
          <div className='mus__brand_component-react'>
              <img src={react} alt="react icon" />
              <p>ReactJs</p>
          </div>
          <div className='mus__brand_component-next'>
              <img src={nextjs} alt="next icon" />
              <p>Next.js</p>
          </div>
          <div className='mus__brand_component-git'>
              <img src={github} alt="git icon" />
              <p>GitHub</p>
          </div>
          <div className='mus__brand_component-figma'>
              <img src={figma} alt="figma icon" />
              <p>Figma</p>
          </div>

        </div>
      
      
     
      
      
      
     
    
    </div>
  ) 
}

export default Brand
