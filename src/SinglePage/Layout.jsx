import React from 'react'
import Navbar from '../SingleNav/Navbar'
import{Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div className='lay'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
