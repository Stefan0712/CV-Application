import React from 'react'

class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companyName: props.data.companyName,
            positionTitle: props.data.positionTitle,
            dateFrom: props.data.dateFrom,
            dateUntil: props.data.dateUntil,
            isSaved: false

        }
        this.setName = this.setName.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setDateFrom = this.setDateFrom.bind(this)
        this.setDateUntil = this.setDateUntil.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    setName(event){
        this.setState({companyName:event.target.value})
    }
    setTitle(event){
        this.setState({positionTitle:event.target.value})
    }
    setDateFrom(event){
        this.setState({dateFrom:event.target.value})
    }
    setDateUntil(event){
        this.setState({dateUntil:event.target.value})
    }
    handleSubmit(event){
        this.setState({isSaved: true})
        setTimeout(()=>{
            this.setState({isSaved: false});
        },1500)
        event.preventDefault();
    }
    onTrigger = () =>{
        this.props.parentCallback(this.state)
    }

    render(){
        return(
            <form className="section" onSubmit={this.handleSubmit}>
                <div className="saveStatus">
                    <Save saveStatus={this.state.isSaved}/>
                </div>
                <label>Company name</label>
                <input type='text' id='companyName' onChange={this.setName} placeholder={this.state.companyName}/>
                <label>Position title</label>
                <input type='text' id='positionTitle' onChange={this.setTitle} placeholder={this.state.positionTitle}/>
                <div className="dates">
                <label id="Date">Date</label>
                <div className="from">
                <label>From</label>
                <input type='text' id='dateFrom' onChange={this.setDateFrom} placeholder={this.state.dateFrom}/>
                </div>
                <div className="until">
                <label>Until</label>
                <input type='text' id='dateUntil' onChange={this.setDateUntil} placeholder={this.state.dateUntil}/>
                </div>
                </div>
                <button type="submit" className='btn' onClick={this.handleSubmit} onClick={this.onTrigger}>Submit</button>
            </form>
        )
    }
}
function Save(props){
    if (props.saveStatus===false) {
        return (<h2>Hit "Submit" to save</h2>)
    }else if(props.saveStatus===true){return (<h2>Saved!</h2>)}
    
} 
export default Experience;