import logo from './logo.svg';
import './App.css';
// import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import AOS from 'aos'

import Nav from './components/Nav'

AOS.init()

function App() {
  return (
    <Nav />
  );
}

export default App;
