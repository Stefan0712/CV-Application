import './css/general.css'

const General = () => {
    return ( 
    <div className="general-body">
        <div className="personal-details">
            <h2>General info</h2>
             <div className="name">
                <label>Name</label>
                <input type="text" placeholder="Name"></input>
            </div>
            <div className="last-name">
                <label>Last name</label>
                <input type="text" placeholder="Last name"></input>
            </div>
            <div className="adress">
                <div className='inputs'>
                    <div className='country'>
                        <label>Country</label>
                        <input id="country" type="text" placeholder="Country"></input>
                    </div>
                    <div className='city'>
                        <label>City</label>
                        <input id="city" type="text" placeholder="City"></input>
                    </div>
                    
                    <div className='streetName'>
                        <label>Street</label>
                        <input id="street-name" type="text" placeholder="Street"></input>
                    </div>

                    <div className='streetNr'>
                        <label>Nr</label>
                        <input id="street-nr" type="number" placeholder="nr"></input>
                    </div>

                </div>

            </div>
        </div>
        <div className="contact-info">
            <h2> Contact info</h2>
            <div className="email">
                <label>Email</label>
                <input type="email" placeholder="email@example.com"></input>
            </div>
            <div className="phone">
                <label>Phone</label>
                <input type="number" placeholder="Phone number"></input>
            </div>
            <div className="fax">
                <label>Fax</label>
                <input type="number" placeholder="Name"></input>
            </div>
        </div>



    </div>
    
    
    
    
    
    
    );
}
 
export default General;