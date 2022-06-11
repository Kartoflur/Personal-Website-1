import React from 'react'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className='nav'>
        <Link className='link' to='section-1' smooth={true} duration={800}>About</Link>
        <Link className='link' to='section-2' smooth={true} duration={800}>Projects</Link>
        <Link className='link' to='section-3' smooth={true} duration={800}>Contacts</Link>
      </div>
  )
}

export default Nav