import React from 'react'
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience';
import { useState, useRef } from 'react';
import './app.css'
import Cv from './components/Cv';

const App = () => {

  const [general, setGeneral] = useState()
  const [education, setEducation] = useState()
  const [experience, setExperience] = useState()
  const [saved, setSaved] = useState([])
  const [isSavedOn, setIsSavedOn] = useState(false)
  const [savedBtnName, setSavedBtnName] = useState("Show Saved CVs")
  const [showCv, setShowCv] = useState()


  const cvNameRef = useRef()

  const getGeneral = (generalInfo) =>{
    setGeneral(generalInfo)
  }
  const getEducation = (educationInfo) =>{
    setEducation(educationInfo)
  }
  const getExperience = (experienceInfo) =>{
    setExperience(experienceInfo)
  }
  const handleSaveCv = () =>{
    let tempName = cvNameRef.current.value;
    setSaved((saved)=>[...saved, {name: tempName, createdDate: getCurrentDate(), general: general, education: education, experience: experience}])
    console.log(saved)
  }
  const getCurrentDate = () =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }
  const toggleSaved = () =>{
    if(!isSavedOn){
      setIsSavedOn(true)
      document.querySelector(".savedCVs").classList.remove("hidden")
      setSavedBtnName("Hide Saved CVs")
    }else if(isSavedOn){
      setIsSavedOn(false)
      document.querySelector(".savedCVs").classList.add("hidden")
      setSavedBtnName("Show Saved CVs")
    }
  }
  return ( 
  <div className='app-body'>
    <nav>
      <div className='nav-name'>CV Maker</div>
      <div className="links">
          
          <button onClick={toggleSaved}>Saved CVs</button>
          <button>Settings</button>
        
      </div>
    </nav>
      <div className='show-cv'>
        {showCv}
      </div>
    <div className='cv-body '>
      <div className='cv-body-menu '>
        <input ref={cvNameRef} id="cv-name" type="text" placeholder='Enter CV name'></input>
        <button id="save-cv-btn" onClick={handleSaveCv}>Save</button>
      </div >
        <General getGeneral={getGeneral} />
        <Education getEducation={getEducation} />
        <Experience getExperience={getExperience} />
    </div> 
    <div className='savedCVs hidden'>

      {saved.map((item)=>{return <div className='cv-preview' onClick={()=>{setShowCv(<Cv cv={item} />)}}>

        <div className='name'>{item.name} </div>
        <div className='date'>{item.createdDate} </div>
        <button id="delete-cv-btn">Delete</button>
        
        </div>})}
        
    </div>
  </div>
  );
}
 
export default App;
