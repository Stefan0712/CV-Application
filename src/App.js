import React from 'react'
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience';
import './app.css'

const App = () => {
  return ( 
  <div className='app-body'>
    <nav>
      <div className='nav-name'>CV Maker</div>
      <div className="links">
        
          <button>Saved CVs</button>
          <button>Settings</button>
        
      </div>
    </nav>
    <div className='cv-body'>
        <General />
        <Education />
        <Experience />
    </div> 
  </div>
  );
}
 
export default App;
