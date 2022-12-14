import React from 'react'
import { Features, Contact, Project, Header, Footer } from './containers'; 
import {Brand, Navbar, Nav} from './components';
import './App.css';


const App = () => {
return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Nav />
        <Header />
      </div>
      <Brand />
      <Features />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
