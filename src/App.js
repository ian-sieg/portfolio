import logo from './logo.svg';
import './App.css';
// import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import AOS from 'aos'

import Nav from './components/Nav'
import About from './components/About'
import BottomNav from './components/BottomNav'

AOS.init()

function App() {
  return (
    <div>
      <Nav />
      <div className='container text-center'>
        <About />
      </div>
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
