import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';

import React from 'react'

const Projects = () => {
  return (
    <div className='section-2'>
    <div className='text-2'>
    <h1>My Projects</h1>
    <div className='images'>
    <img src={img1} className='img-1'></img>
    <img src={img2} className='img-2'></img>
    <img src={img3} className='img-3'></img>
    </div>
  </div>
  </div>
)
}
export default Projects
