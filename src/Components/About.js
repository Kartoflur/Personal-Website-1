import React from 'react'
import '../App.css';
import fb from '../Assets/fb-logo.png'
import twt from '../Assets/twitter-logo.png'
import git from '../Assets/github-logo.png'

export const About = () => {
  return (
    <div className='container'>
        <center>
          <h1>Contact</h1>
        </center>
        <div className='col-a'>

         <a href="https://www.facebook.com/waowaowaow" target='__blank' className='a-1'>
         <img src={fb} alt="fb" className='logo-1'/>
          <hr/>
          <br/>
          @waowaowaow
         </a>


         <a href="https://twitter.com/plpoarp" target='__blank' className='a-2'>
         <img src={twt} alt="twitter" className='logo-2'/>
         <hr/>
         <br/>
          @plpoarp
         </a>

         <a href="https://github.com/Kartoflur" target='__blank' className='a-3'>
         <img src={git} alt="github" className='logo-3'/>
         <hr/>
         <br/>
        Kartoflur
         </a>   
          
        </div> 
    </div>
  )
}
