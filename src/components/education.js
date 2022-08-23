import './css/education.css'
import {useState, useRef, useEffect} from 'react'

const Education = (props) => {


    const univNameRef = useRef();
    const univFromRef = useRef()
    const univToRef = useRef()
    const hsNameRef = useRef();
    const hsFromRef = useRef()
    const hsToRef = useRef()
    const langNameRef = useRef()
    const writeLvlRef = useRef()
    const understandLvlRef = useRef()
    const speakLvlRef = useRef()
    const compDateRef = useRef()
    const compIssuerRef = useRef()
    const compNameRef = useRef()





    const handleSave = () =>{
        props.getEducation({
            univName: univNameRef.current.value,
            univFrom: univFromRef.current.value,
            univTo: univToRef.current.value,
            hsName: hsNameRef.current.value,
            hsFrom: hsFromRef.current.value,
            hsTo: hsToRef.current.value,
            langName: langNameRef.current.value,
            writeLvl: writeLvlRef.current.value,
            understandLvl: understandLvlRef.current.value,
            speakLvl: speakLvlRef.current.value,
            compDate: compDateRef.current.value,
            compIssuer: compIssuerRef.current.value,
            compName: compNameRef.current.value,
        })
    }
    const saveLang = () =>{
        //props.getInfo("lang")
        document.querySelector(".add-lang-body").classList.toggle("hiddenSection")
        document.querySelector("#add-lang-btn").classList.toggle("hide")
    }
    const saveComp = () =>{
        //props.getInfo("lang")
        document.querySelector(".add-comp-body").classList.toggle("hiddenSection")
        document.querySelector("#add-comp-btn").classList.toggle("hide")
    }
    const toggleLang = () =>{
        document.querySelector(".add-lang-body").classList.toggle("hiddenSection")
        document.querySelector("#add-lang-btn").classList.toggle("hide")
        
        }
    const toggleComp = () =>{
        document.querySelector(".add-comp-body").classList.toggle("hiddenSection")
        document.querySelector("#add-comp-btn").classList.toggle("hide")
            
        }   
    return ( 

        <div className="education-body">
            <div className="university-section">
                <div className="unviersity-name">
                    <label>University name</label>
                    <input ref={univNameRef} type="text"></input>
                </div>
                <div className="unviersity-period">
                    <label>From</label>
                    <input ref={univFromRef} type="number"></input>
              
                    <label>To</label>
                    <input ref={univToRef} type="number"></input>
                </div>
            </div>
            <div className="highschool-section">
                <div className="highschool-name">
                    <label>Highschool name</label>
                    <input ref={hsNameRef} type="text"></input>
                </div>
                <div className="highschool-period">
                    <label>From</label>
                    <input ref={hsFromRef} type="number"></input>
              
                    <label>To</label>
                    <input ref={hsToRef} type="number"></input>
                </div>
            </div>


            <div className="lang-section">
                <button className='add-section-btn' id="add-lang-btn" onClick={toggleLang}>Add a language</button>
                <div className="add-lang-body hiddenSection">
                    <input ref={langNameRef} type="text" placeholder="English"></input>
                    <div className="lang-lvl">
                        <div className="speak-lvl">
                            Speak level:
                            <select ref={speakLvlRef} defaultValue="A1">
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                            </select>

                        </div>
                        <div className="write-lvl">
                            Write level:
                            <select ref={writeLvlRef} defaultValue="A1">
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                            </select>

                        </div>
                        <div className="understand-lvl">
                            Understand level:
                            <select ref={understandLvlRef} defaultValue="A1">
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                            </select>

                        </div>
                    </div>
                       <button className='save-section-btn' onClick={saveLang}>Save</button>
                </div>
            </div>

            <div className="comp-section">
                <button className='add-section-btn' id="add-comp-btn" onClick={toggleComp}>Add a comp</button>
                <div className="add-comp-body hiddenSection">

                        <input ref={compNameRef} placeholder="Comp name"></input>
                        <input ref={compIssuerRef} placeholder="Issuer"></input>
                        <input ref={compDateRef} placeholder="Issue date"></input>
                    <button id="save-comp-btn" onClick={saveComp}>Save</button>

                </div>
            </div>


            <button className='save-btn' onClick={handleSave}>Save</button>
        </div>



     );
}
 
export default Education;