import React from 'react'
import '../App.css'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.png'


export const Projects = () => {
  return (
    <div className='container'>
        <center>
            <h1 className='h-p'>My Projects</h1>
        </center>
        <div className='col-p'>
            <img src={img1} alt="1" className='img img-delay-1'/>
            <img src={img2} alt="2" className='img img-delay-2'/>
            <img src={img3} alt="3" className='img img-delay-3'/>
        </div>
    </div>
  )
}
