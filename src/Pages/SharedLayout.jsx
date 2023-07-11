import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavPage/Navbar'
function SharedLayout() {
  return (
    <div>
      
 
    <Navbar/>
  <Outlet/>

    </div>
  )
}

export default SharedLayout
