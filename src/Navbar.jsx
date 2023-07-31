import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/register'}>register</Link>
    
    </div>
  )
}

export default Navbar
