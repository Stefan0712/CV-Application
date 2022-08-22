import './css/education.css'


const Education = () => {
    return ( 

        <div className="education-body">
            <div className="university-section">
                <div className="unviersity-name">
                    <label>University name</label>
                    <input type="text"></input>
                </div>
                <div className="unviersity-period">
                    <label>From</label>
                    <input type="number"></input>
              
                    <label>To</label>
                    <input type="number"></input>
                </div>
            </div>
            <div className="highschool-section">
                <div className="highschool-name">
                    <label>Highschool name</label>
                    <input type="text"></input>
                </div>
                <div className="highschool-period">
                    <label>From</label>
                    <input type="number"></input>
              
                    <label>To</label>
                    <input type="number"></input>
                </div>
            </div>


            <div className="lang-section">
                <button>Add a language</button>
                <div className="add-lang-body">
                    <input placeholder="English"></input>
                    <div className="lang-lvl">
                        <div className="speak-lvl">
                            Speak level:
                            <select defaultValue="A1">
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
                            <select defaultValue="A1">
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
                            <select defaultValue="A1">
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                        </select>

                        </div>
                       
                    </div>
                </div>
            </div>

            <div className="comp-section">
                <button>Add a comp</button>
                <div className="add-comp-body">

                        <input placeholder="Comp name"></input>
                        <input placeholder="Issuer"></input>
                        <input placeholder="Issue date"></input>


                </div>
            </div>



        </div>



     );
}
 
export default Education;