import { render } from '@testing-library/react'
import React from 'react'


class General extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            name: props.data.name,
            email: props.data.email,
            phone: props.data.phone,
            isSaved: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setName = this.setName.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setPhone = this.setPhone.bind(this)

    }
    
    handleSubmit(event){
        this.setState({isSaved: true})
        setTimeout(()=>{
            this.setState({isSaved: false});
        },1500)
        
        event.preventDefault();
    }

    setName(event){
        this.setState({name: event.target.value})
    }
    setEmail(event){
        this.setState({email: event.target.value})
    }
    setPhone(event){
        this.setState({phone: event.target.value})
    }
    onTrigger = () =>{
        this.props.parentCallback(this.state)

    }
  
    
    render(){
        
        return (
            <form className="section" onSubmit={this.handleSubmit}>
                <div className="saveStatus">
                <Save saveStatus={this.state.isSaved}/>
                </div>
                <label>Full name</label>
                <input id='name' type='text' onChange={this.setName} value={this.state.name} placeholder={this.state.name}/>
                <label>Email address</label>
                <input id='email' type='text' onChange={this.setEmail} value={this.state.email} placeholder={this.state.email}/>
                <label>Phone number</label>
                <input id='phone' type='text' onChange={this.setPhone} value={this.state.phone} placeholder={this.state.phone}/>

                <button type='submit' className='submitBtn btn' onClick={this.onTrigger}>Submit</button>
            </form>
        )
    }
}
function Save(props){
    if (props.saveStatus===false) {
        return (<h2>Hit "Submit" to save</h2>)
    }else if(props.saveStatus===true){return (<h2>Saved!</h2>)}
    
} 
export default General;