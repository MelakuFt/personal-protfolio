import React from 'react'
import { Features, Footer, Project, Header } from './containers'; 
import {Brand, Navbar} from './components';
import './App.css';


const App = () => {
return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Project />
      <Footer />
    </div>
  )
}

export default App
