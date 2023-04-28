import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
        <nav className='navbar'>
      <div className="container">
        <Link to="/"><h1>LOGO</h1></Link>
        <ul className='nav-links'>
          <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
          <li><NavLink to="/new" className='nav-link'>NewPost</NavLink></li>
          {/* <li><NavLink to="/post" className='nav-link'>Detailed</NavLink></li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar