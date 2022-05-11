import { render } from '@testing-library/react';
import React from 'react'
import General from './components/general'
import Education from './components/education'
import Experience from './components/experience';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'edit',
      generalState: {
        name: "No name set",
        email: "No email address set",
        phone: "No phone number"
      },
      educationState: {
        schoolName: "No school name entered",
        titleOfStudy: "No title of study entered",
        dateOfStudy: "No date entered"
      },
      experienceState: {
        companyName: "No company name entered",
        positionTitle: "No title entered",
        dateFrom: "Not set",
        dateUntil: "Not set"
      }

    }
  
    this.handleClick = this.handleClick.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.handleGeneral = this.handleGeneral.bind(this)
    this.handleEducation = this.handleEducation.bind(this)
    this.handleExperience = this.handleExperience.bind(this)
  }
  handleClick(event){
    this.changeMode();
    console.log(this.state)
  }
  changeMode(){
    if(this.state.mode=='edit')
    {this.setState({mode: 'view'})}else if(this.state.mode=='view'){this.setState({mode:'edit'})}
  }
  handleGeneral = (childData) => {
    this.setState({generalState: childData})
  }
  handleEducation = (childData) => {
    this.setState({educationState: childData})
  }
  handleExperience = (childData) => {
    this.setState({experienceState: childData})
  }
  


render(){
  if(this.state.mode==="edit"){
  return(
    <div className='content'>
      <General parentCallback={this.handleGeneral} data={this.state.generalState}/>
      <Education parentCallback={this.handleEducation} data={this.state.educationState}/>
      <Experience parentCallback={this.handleExperience} data={this.state.experienceState}/>
      <button type='button' className='btn saveBtn' onClick={this.handleClick}>Save</button>
    </div>
  )}else if(this.state.mode==='view'){
    return (
        <div className="viewCV">
          <div className='viewSection'>
          <h1>General info</h1>
            <div>Name: {this.state.generalState.name}</div>
            <div>Email: {this.state.generalState.email}</div>
            <div>Phone: {this.state.generalState.phone}</div>
          </div>
          <div className='viewSection'>
          <h1>Education</h1>
            <div>School name: {this.state.educationState.schoolName}</div>
            <div>Title of study: {this.state.educationState.titleOfStudy}</div>
            <div>Date of study: {this.state.educationState.dateOfStudy}</div>
          </div>
          <div className='viewSection'>
          <h1>Experience</h1>
            <div>Company name: {this.state.experienceState.companyName}</div>
            <div>Position title: {this.state.experienceState.positionTitle}</div>
            <div>Date: {this.state.experienceState.dateFrom} - {this.state.experienceState.dateUntil}</div>
          </div>
          <button className="btn" type='button' onClick={this.changeMode}>Edit</button>
        </div>
    )
}
}
}

export default App;
