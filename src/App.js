import logo from './logo.svg';
import './App.css';
// import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import AOS from 'aos'

import Nav from './components/Nav'
import About from './components/About'

AOS.init()

function App() {
  return (
      <div className='container text-center'>
        <Nav />
        <About />
      </div>
  );
}

export default App;
