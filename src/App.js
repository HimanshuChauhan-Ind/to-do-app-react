import React,{ Component } from 'react'
import Task from './Task'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
        <h1>ToDo</h1>
        <Task/>
      </div>
    )
  }
}

export default App