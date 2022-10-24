import './App.css';
import AOS from 'aos'

import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import BottomNav from './components/BottomNav'

AOS.init()

function App() {
  return (
      <div>
        <Nav />
        <div className='padding-wrapper'>
          <About />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
        <BottomNav />
      </div>
  );
}

export default App;
