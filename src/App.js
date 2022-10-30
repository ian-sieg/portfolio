import './App.css';
import AOS from 'aos'

import Topnav from './components/Topnav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import BottomNav from './components/BottomNav'

AOS.init()

function App() {
  return (
      <div>
        <Topnav />
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
