import React,{ Component } from 'react'
import NewTask from './NewTask'
import './Task.css'
import { v4 as uuid } from 'uuid';

class Task extends Component{
    constructor(){
        super()
        this.state = {
            taskList:[
                {
                    task: "Sleep",
                    duration: 6,
                    id: uuid()
                },
                {
                    task: "Necessary Activities",
                    duration: 3,
                    id: uuid()
                }
            ]
        }
    }
    
    newTaskHandler = (item)=>{
        item = {
            ...item,
            id:uuid()
        }
        const newTaskList = [
            ...this.state.taskList,
            item
        ]
        this.setState({taskList : newTaskList})
        console.log(this.state.taskList)
    }

    deleteHandler = (id)=>{
        const newTaskList = this.state.taskList.filter((item)=> item.id !== id)
        this.setState({taskList:newTaskList})
    }

    render(){

        const listItems = this.state.taskList.map((item)=>{
            return <li onClick={()=>this.deleteHandler(item.id)} key={item.id}>{item.task} ---- {item.duration} hrs</li>
        })

        return(
            <div>
                <NewTask createTask={this.newTaskHandler}/>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default Task