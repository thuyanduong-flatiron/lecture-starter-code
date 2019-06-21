import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

const sampleTasks = [
  {id:1, text: "wake up", done: true},
  {id:2, text: "eat lunch", done: false},
  {id:3, text: "go to sleep", done: false}
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: sampleTasks
    }
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    console.log(`adding new task`)
  }

  render() {
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList tasks={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
