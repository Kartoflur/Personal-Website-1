import './App.css';
import React from 'react';
import icon_twitter from './icons/icons8-twitter-squared-48.svg';
import icon_facebook from './icons/icons8-facebook-48.svg';
import profile_image from './assets/1.jpg';
import placeholder from './assets/placeholder-1.png';

function App() {
  return (
    <React.Fragment>
    <div className='mainBody'>
      <img src={profile_image}></img>
      <div id='Name'>RENZ IVAN R. IRAG</div>
      <div id='Course'>Bachelor of Science in Information Technology</div>
      <div id='School'>Caraga State University</div>
      
      <div className='About'>
        <p id='Title-1'>About Me:</p>
        <p id='Text-1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. 
          Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. 
          Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. 
          Mauris eget neque at sem venenatis eleifend. Ut nonummy.
        </p>
      </div>
    
      <div className='Projects'>
        <p id='Title-2'>Projects:</p>
        <div className='projectBox'>
            <div id='proj-1'>
              <img src={placeholder} id='placeholder-img'></img>
              <p>Project 1: [Insert Project Name]</p>
            </div>
            <div id='proj-2'>
              <img src={placeholder} id='placeholder-img'></img>
              <p>Project 2: [Insert Project Name]</p>
            </div>
            <div id='proj-3'>
              <img src={placeholder} id='placeholder-img'></img>
              <p>Project 3: [Insert Project Name]</p>
            </div>
            <div id='proj-4'>
              <img src={placeholder} id='placeholder-img'></img>
              <p>Project 4: [Insert Project Name]</p>
            </div>
        </div>
      </div>
    </div>
    <div className='socialLinks'>
    <a href='https://twitter.com/plpoarp' target="_blank" id='social-link-1'>
        <img src={icon_twitter} id='icon-1'></img>
      </a>
      <a href='https://www.facebook.com/kttasgg' target="_blank" id='social-link-2'>
      <img src={icon_facebook} id='icon-2'></img>
      </a>
    </div>
    </React.Fragment>
  );
}

export default App;
