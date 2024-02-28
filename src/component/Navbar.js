import React from 'react'
import './navbarStyle.css'
export default function Navbar() {
  return (
    <>
        <nav className='navbar-container'>
            <div>
                <h1 className='nav-link'>
                    Home
                </h1>
            </div>
            <div>
                <h1 className='nav-link'>
                    About Me
                </h1>
            </div>
            <div>
                <h1 className='nav-link'>
                    Portfolio
                </h1>
            </div>
            <div>
                <h1 className='nav-link'>
                    Contact Me
                </h1>
            </div>
            
        </nav>
    </>
  )
}
