import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
      < NavLink to='/home'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/Product'>Product</NavLink>
    </div>
  )
}

export default Navbar
