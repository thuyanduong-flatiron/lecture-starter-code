import React, { Component } from "react";
import pig from "../pig.png";
import "../App.css";
import {fetchingHogs} from '../redux/actions'
import {connect} from 'react-redux'
import Form from './Form'

import PigContainer from "./PigContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchingHogs()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pig} className="App-logo" alt="logo" />
          <h1>Welcome to hog.blog</h1>
          <Form />
          <PigContainer/>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingHogs: () => {dispatch(fetchingHogs())}
  }
}

export default connect(null, mapDispatchToProps)(App);
