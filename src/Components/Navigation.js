import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export const Navigation = () => {
  return (
    <nav className='navbar'>
        <Link to='/' className='nav-links'>Home</Link>
        <Link to='/Projects' className='nav-links'>Projects</Link>
        <Link to='/About' className='nav-links'>About</Link>
    </nav>
  )
}
