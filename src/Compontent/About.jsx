import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../NavBar/Navbar'


function About() {
  return (
    <div className='about'>
     <Navbar/>
    
    <Outlet/>
    <h1>about</h1>
    </div>
  )
}

export default About
