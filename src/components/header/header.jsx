import React from 'react'
import { useState } from 'react';
import './header.scss'
const Header = () => {
  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
    setMenu( !menu )
}

  
  return (
    <nav className="container">
    <div className="logo">
      <h2>loopstudios</h2>
      <p className='parr'>IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER</p>
    </div>
    <button 
     onClick={ toggleMenu }
    className='cabecera'>
    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

    </button>
    
    <ul className= { `navul ${ menu ? 'isActive' : '' }` }>
      <li href="#">About</li>
      <li href="#">Careers</li>
      <li href="#">Events</li>
      <li href="#">Support</li>
    </ul> 
    
    

    
  </nav>
  

  
  )
}

export default Header;