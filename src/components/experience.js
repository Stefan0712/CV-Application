import './css/experience.css'
import { useRef } from 'react';

const Experience = (props) => {

    const jobNameRef = useRef()
    const companyNameRef = useRef()
    const jobFromRef = useRef()
    const jobToRef = useRef()
    const skillNameRef = useRef()
    const skillIssuerName = useRef()
    const skillLvlRef = useRef()


    const handleSave = () => {
            props.getExperience({
                jobName: jobNameRef.current.value,
                companyName: companyNameRef.current.value,
                jobFrom: jobFromRef.current.value,
                jobTo: jobToRef.current.value,
                skillName: skillNameRef.current.value,
                skilIssuer: skillIssuerName.current.value,
                skillLvl: skillLvlRef.current.value,

            })
    }
    const toggleJob = () =>{
        document.querySelector(".job-section").classList.toggle("hiddenSection")
        document.querySelector("#add-job-btn").classList.toggle("hide")
    }
    const toggleSkill = () =>{
        document.querySelector(".add-skill-body").classList.toggle("hiddenSection")
        document.querySelector("#skill-add-btn").classList.toggle("hide")
    }

    return ( 
            
        <div className="experience-body">
            <button id="add-job-btn" className='experience-save-btn' onClick={toggleJob}>Add a workplace</button>
            <div className="job-section hiddenSection">
                <div className="job-name">
                    <label>Job name</label>
                    <input ref={jobNameRef} type="text"></input>
                </div>
                <div className="company-name">
                    <label>Company name</label>
                    <input ref={companyNameRef} type="text"></input>
                </div>
                <div className="job-period">
                    <label>From</label>
                    <input ref={jobFromRef} type="number"></input>
            
                    <label>To</label>
                    <input ref={jobToRef} type="number"></input>
                </div>
                <button id="save-job-btn" onClick={toggleJob}>Save</button>
            </div>
        
        <div className="skill-section">
            <button id="skill-add-btn" className='experience-save-btn' onClick={toggleSkill}>Add a skill</button>
            <div className="add-skill-body hiddenSection">

                    <input ref={skillNameRef} placeholder="Skill name"></input>
                    <input ref={skillIssuerName} placeholder="Issuer (optional)"></input>
                    <input ref={skillLvlRef} placeholder="Skill level"></input>

                    <button id="save-skill-btn" onClick={toggleSkill}>Save</button>
            </div>
        </div>


        <button className='save-btn' onClick={handleSave}>Save</button>
    </div>




     );
}
 
export default Experience;