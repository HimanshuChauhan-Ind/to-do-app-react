import React,{ Component} from 'react'

class NewTask extends Component{
    constructor(){
    super()
        this.state={
            task: '',
            duration:'',
        }
    }

    changeHandler = (e)=>{
        this.setState({ [e.target.name] : e.target.value })
    }

    taskAddHandler = (e)=>{
        e.preventDefault()
        // console.log(this.state)
        this.props.createTask(this.state)
        this.setState({task:'',duration:''})
    }

    render(){
        return(
            <form onSubmit={this.taskAddHandler}>
                <input type="text" name="task" placeholder="Enter the task" onChange={this.changeHandler} value={this.state.task}/>
                <input type="number" name="duration" placeholder="Duration(in hrs)" onChange={this.changeHandler} value={this.state.duration}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default NewTask;