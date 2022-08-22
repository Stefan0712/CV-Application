import './css/experience.css'


const Experience = () => {
    return ( 
            
        <div className="experience-body">
            <button>Add a workplace</button>
        <div className="job-section">
            <div className="job-name">
                <label>Job name</label>
                <input type="text"></input>
            </div>
            <div className="company-name">
                <label>Company name</label>
                <input type="text"></input>
            </div>
            <div className="job-period">
                <label>From</label>
                <input type="number"></input>
          
                <label>To</label>
                <input type="number"></input>
            </div>
        </div>
        
        <div className="skills-section">
            <button>Add a skill</button>
            <div className="add-skill-body">

                    <input placeholder="Skill name"></input>
                    <input placeholder="Issuer (optional)"></input>
                    <input placeholder="Skill level"></input>


            </div>
        </div>



    </div>




     );
}
 
export default Experience;