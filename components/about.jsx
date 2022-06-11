import React from 'react'
import img from '../Assets/img.jfif'

const About = () => {
  return (
    <div className='section-1'>
    <div className='text-1' >
        <h1>About me</h1>
        <p className='p-1'>My Name is Renz Ivan R. Irag, A student of Bachelor of Science in Information Technology at Caraga State University</p>
        <p className='p-1'>A Digital Artist and currently learning Web Development</p>
        <img src={img} className='img-4'/>
    </div>
    </div>
  )
}

export default About