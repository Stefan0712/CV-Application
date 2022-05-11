import React from 'react';


class Education extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            schoolName: props.data.schoolName,
            titleOfStudy: props.data.titleOfStudy,
            dateOfStudy: props.data.dateOfStudy,
            isSaved: false

        }
        this.setName = this.setName.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setDate = this.setDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        this.setState({isSaved: true})
        setTimeout(()=>{
            this.setState({isSaved: false});
        },1500)
        event.preventDefault();
    }
    setTitle(event){
        this.setState({titleOfStudy: event.target.value})
    }
    setDate(event){
        this.setState({dateOfStudy: event.target.value})
    }
    setName(event){
        this.setState({schoolName: event.target.value})
    }
    onTrigger = () =>{
        this.props.parentCallback(this.state)
    }
    render(){
        return (
            <form className='section' onSubmit={this.handleSubmit}>
                <div className="saveStatus">
                    <Save saveStatus={this.state.isSaved}/>
                </div>
                <label>School name</label>
                <input id='schoolName' type='text' onChange={this.setName} placeholder={this.state.schoolName}/>
                <label>Title of study</label>
                <input id='schoolName' type='text' onChange={this.setTitle} placeholder={this.state.titleOfStudy}/>
                <label>Date of study</label>
                <input id='schoolName' type='text' onChange={this.setDate} placeholder={this.state.dateOfStudy}/>
                <button type='submit' className='btn' onClick={this.handleSubmit} onClick={this.onTrigger}>Submit</button>
                
            </form>
        )
    }
}
function Save(props){
    if (props.saveStatus===false) {
        return (<h2>Hit "Submit" to save</h2>)
    }else if(props.saveStatus===true){return (<h2>Saved!</h2>)}
    
} 
export default Education;