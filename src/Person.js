import React,{ Component } from 'react'

class Person extends Component {
    constructor(){
        super()
        this.state = {
            name: "Himanshu",
            age: 25,
            hobby: "coding",
            show: true
        }
    }

    clickHandler = ()=>{
        const name = this.state.name.slice().toUpperCase()
        this.setState({name : name})
    }

    visibilityHandler = ()=>{
        this.setState({show : !this.state.show})
    }

    render(){
        return(
            <div>
                <button onClick={this.visibilityHandler}>Toggle</button>
                {this.state.show?
                    <div onClick={this.clickHandler} style={{ border:"1px solid black", paddingLeft:"20px",boxShadow:"0px 1px 2px gray",width:'400px', margin:"30px auto"}}>
                    <h1>This is working too</h1>
                    <p>Name: {this.state.name}</p>
                    <p>Age: {this.state.age}</p>
                    <p>Hobby: {this.state.hobby}</p>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Person;