import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <a href='/'>Home</a>
        <Link to='/about'>About</Link>
        <button onClick={()=>{window.location.href="/contact"}}>Contact button</button>
    </div>
)
}

export default Header