import { useEffect } from "react";


const Cv = (props) => {
    useEffect(()=>{console.log(props)},[])
    return ( 
        <div className="cv-container">
             <div className="cv-body">
                <div className="personal-info">
                    <div className="image"></div>
                    <div className="general-info">
                        <div className="name">Name: {props.cv.general.name}</div>
                        <div className="lastName">Last Name: {props.cv.general.lastName}</div>
                        <div className="country">Country: {props.cv.general.country}</div>
                        <div className="city">City: {props.cv.general.city}</div>
                        <div className="adress">Adress: {props.cv.general.street} {props.cv.general.nr}</div>
                    </div>
                    <div className="contact-info">
                    <div className="email">City: {props.cv.general.email}</div>
                    <div className="phone">City: {props.cv.general.phone}</div>
                    <div className="fax">City: {props.cv.general.fax}</div>
                    </div>
                </div>
                <div className="education-info">
                    <div className="univName">City: {props.cv.education.univName}</div>
                    <div className="univPeriod"> {props.cv.education.univFrom} - {props.cv.education.univTo}</div>
                    <div className="hsName">City: {props.cv.education.hsName}</div>
                    <div className="hsPeriod">City: {props.cv.education.hsFrom} - {props.cv.education.hsTo}</div>
                    <div className="lang">City: {props.cv.education.lang}</div>
                </div>
            </div> 
            
        </div>

     );
}
 
export default Cv;