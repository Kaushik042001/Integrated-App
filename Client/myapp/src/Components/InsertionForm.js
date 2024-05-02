import  React from 'react'
import axios from 'axios'
import { DisplayForm } from './DisplayForm'

export class InsertForm extends React.Component{
    constructor(){
        super()
        this.state={rollno:'',name:'',cl:''}
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=()=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/insert",d).then(res=>console.log('rec inserted'))
    }
    render()
    {
        return(
            <div className='data'>
            <form onSubmit={this.handleSubmit} >
                <input type='text' name='rollno' onChange={this.handleChange} />
                <input type='text' name='name' onChange={this.handleChange} />
                <input type='text' name='cl' onChange={this.handleChange} />
<button type='submit' >Submit</button>
            </form>
            <DisplayForm />
            </div>
        )
    }
}

