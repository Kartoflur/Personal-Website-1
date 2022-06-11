import React, { Fragment } from 'react';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contacts';

import './App.css';

import icon_twitter from './Assets/icons8-twitter-squared-48.png';
import icon_facebook from './Assets/icons8-facebook-48.svg';


function App() {
  return (
    <div className='container'>
      <Nav />
      <div className='sections'>
          <About />
          <Projects />
          <Contacts />
      </div>



    </div>
  );
}

export default App;
