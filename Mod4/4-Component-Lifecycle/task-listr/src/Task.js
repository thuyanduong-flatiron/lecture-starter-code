import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
  }

  render(){
    return(
      <div>
        <button>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={() => {}}/>
      </div>
    )
  }
}

export default Task
