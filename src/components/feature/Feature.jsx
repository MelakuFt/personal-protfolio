import React from 'react';
import './feature.css';

const Feature = ({img, title, text, subtext, subbtext}) => {
  return (
      <div className='mus__service_component'>
        <img src={img} alt="" />
        <div className='mus__service_component-web'>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{subtext}</p>
            <p>{subbtext}</p>
        </div>
      </div>
    
  )
}

export default Feature