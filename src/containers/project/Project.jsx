import React from 'react';
import './project.css';
import {Recta1, Recta2, Recta3, Recta4, Recta5} from './import';
import Article from'../../components/article/Article';

const Project = () => {
  return (
    <div className='mus__blog section__padding' id="pro">
      <div className='mus__blog-heading'>
      <h1>Projects</h1>
      </div>
      <div className='mus__blog-container'>
        <div className='mus__blog-container_groupA'>
          <Article imgUrl={Recta1} date="Aug 30, 2022" text="Personal protfolio " />
        </div>
        <div className='mus__blog-container_groupB'>
          <Article imgUrl={Recta2} date="Aug 31, 2022" text="Car maintenance service in Addis Ababa" />
          <Article imgUrl={Recta3} date="Sep 30, 2022" text="Food-delivery" />
          <Article imgUrl={Recta4} date="Nov 4, 2022" text="H.M Supermarket" />
          <Article imgUrl={Recta5} date="Dec 30, 2022" text="Des. construction company " />

        </div>
      </div>
    </div>
  )
}

export default Project