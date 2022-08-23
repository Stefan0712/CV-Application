import './css/general.css'
import {useState, useRef, useEffect} from 'react'

const General = (props) => {

    const nameRef = useRef()
    const lastNameRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const streetRef = useRef()
    const nrRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const faxRef = useRef()


    const [generalInfo, setGeneralInfo] = useState()


    const handleSave = () =>{
        props.getGeneral({
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            country: countryRef.current.value,
            city: cityRef.current.value,
            street: streetRef.current.value,
            nr: nrRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            fax: faxRef.current.value,

        })

    }
    return ( 
    <div className="general-body">
        <div className="personal-details">
            <h2>General info</h2>
             <div className="name">
                <label>Name</label>
                <input ref={nameRef} type="text" placeholder="Name"></input>
            </div>
            <div className="last-name">
                <label>Last name</label>
                <input ref={lastNameRef} type="text" placeholder="Last name"></input>
            </div>
            <div className="adress">
                <div className='inputs'>
                    <div className='country'>
                        <label>Country</label>
                        <input ref={countryRef} id="country" type="text" placeholder="Country"></input>
                    </div>
                    <div className='city'>
                        <label>City</label>
                        <input ref={cityRef} id="city" type="text" placeholder="City"></input>
                    </div>
                    
                    <div className='streetName'>
                        <label>Street</label>
                        <input ref={streetRef} id="street-name" type="text" placeholder="Street"></input>
                    </div>

                    <div className='streetNr'>
                        <label>Nr</label>
                        <input ref={nrRef} id="street-nr" type="number" placeholder="nr"></input>
                    </div>

                </div>

            </div>
        </div>
        <div className="contact-info">
            <h2> Contact info</h2>
            <div className="email">
                <label>Email</label>
                <input ref={emailRef} type="email" placeholder="email@example.com"></input>
            </div>
            <div className="phone">
                <label>Phone</label>
                <input ref={phoneRef} type="number" placeholder="Phone number"></input>
            </div>
            <div className="fax">
                <label>Fax</label>
                <input ref={faxRef} type="number" placeholder="Fax"></input>
            </div>
        </div>


        <button className='save-btn' onClick={handleSave}>Save</button>
    </div>
    
    
    
    
    
    
    );
}
 
export default General;