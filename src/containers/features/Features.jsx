import React from 'react';
import './features.css';
//import jsdev from '../../assets/jsdev.png'
//import web from '../../assets/web.png'
//import design from '../../assets/design.png'
//import { Feature } from '../../components'
import {BsCartCheckFill} from 'react-icons/bs'


const Features = () => {
  return (
     <section className='mus__service section__padding' id='service'>
       <h1>My Services</h1>
       <p>Software that are user friendly, 
          powerful, modern in style and visually attractive.</p>
      <div className='container services__container'>
         <article className='service'>
           <div className='service__head'>
             <h3>Web App / Development</h3>
           </div>
           <ul className='service__list'>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Develop software applications with an efficient 
                   and functional front-end web app, that rely on 
                   proven technology and frameworks.</p>
             </li>
            <li>
                <BsCartCheckFill className='service__icon' />
                <p>Adequate knowledge of Object-Oriented programming, and web applications.</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Write well-design, testable, efficient code by using software development practices.</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Maintain existing projects including updating content and adding new pages.</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Build future-proof web app products.</p>
             </li>
            
           </ul>
         </article>
         <article className='service'>
           <div className='service__head'>
             <h3>Content creation</h3>
           </div>
           <ul className='service__list'>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Using HTML, CSS, JavaScript and React.js to
                   bring concepts to life by writing dedicated
                   solutions from scratch.</p>
             </li>
             
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Be responsible for maintaining, expandinga and scaling the site.</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Cooperate with web designers to match visual design intent.</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Good understandng of business requirements and translate them into technical requirements.</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>A strong understandng of web performance in complex user interfaces.</p>
             </li>
           </ul>
         </article>
         <article className='service'>
           <div className='service__head'>
             <h3>Design</h3>
           </div>
           <ul className='service__list'>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>UI/UX</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Mobile</p>
             </li>
             <li>
                <BsCartCheckFill className='service__icon' />
                <p>Web</p>
             </li>
           </ul>
         </article>
      </div>     
     </section>    
  )
}

export default Features

