import React from 'react'
import{Link} from 'react-router-dom'
import './Nav.css';

function Navbar() {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link>
      <Link to='/profile'>Profile</Link>
     

    </div>
  )
}

export default Navbar
