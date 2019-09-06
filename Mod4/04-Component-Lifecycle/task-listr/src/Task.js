import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)//how to initialize state based on initial props
    this.state = {
      color: "black"
    }
  }

  render(){
    return(
      <div>
        <b
          onClick={() => {}}
          style={{color: this.state.color}}
        >
          {this.props.task.text}
        </b>
        <button onClick={() => {}}>x</button>
      </div>
    )
  }
}

export default Task
