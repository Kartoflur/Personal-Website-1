import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Projects } from './Components/Projects'
import { About } from './Components/About'
import { Navigation } from './Components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
