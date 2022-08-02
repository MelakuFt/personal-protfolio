import React from 'react';
import './features.css';
import jsdev from '../../assets/jsdev.png'
import web from '../../assets/web.png'
import design from '../../assets/design.png'
import { Feature } from '../../components'
//import { js } from '../../components/brand/import';


const Features = () => {
  return (
    <div className='mus__service section__padding' id='service' >
      <div className='mus__service-head'>
        <h1>My Services</h1>
        <p>Software that are user friendly, 
          powerful, modern in style and visually attractive.
        </p>
      </div>
      <div className='mus__service_com'>
        <img src={web} alt="webph" />
        <div className='mus__service_com-web'>
          <h2>Web App</h2>
          <p>Develop software applications with an efficient 
        and functional front-end web app, that rely on 
        proven technology and frameworks.</p>
        <p> Build future-proof web app products</p>
        </div>

      </div>
      <div className='mus__service_sep'>
        <img src={jsdev} alt="newjs" />
           <div className='mus__service_sep-componet'>
           <h2>Development</h2>
           <p> Using HTML, CSS, JavaScript and React.js to
            bring concepts to life by writing dedicated
            solutions from scratch.</p> 
          </div> 
      </div>
      <Feature 
        img={design}
        title=" Design "
        text="UI/UX"
        subbtext="Mobile"
        subtext=" Web"
      /> 
     
    </div>
  )
}

export default Features

