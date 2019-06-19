import React, {Component} from 'react'
import {addingHog} from '../redux/actions'
import {connect} from 'react-redux'

class Form extends Component {
  state = {
    name: ''
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return <form onSubmit={(e) => {
      this.props.addingHog(this.state.name)
      e.preventDefault()
    }}>
      <input placeholder='name' onChange={this.onChange}/>
      <button> Add Hog </button>
    </form>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addingHog: (name) => {dispatch(addingHog(name))}
  }
}

export default connect(null, mapDispatchToProps)(Form)
