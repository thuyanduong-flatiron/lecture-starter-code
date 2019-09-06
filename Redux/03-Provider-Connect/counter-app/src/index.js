import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from 'redux'

const reducer = (oldState = {count: 0}, action) => {
  // if(oldState === undefined){
  //   let initialState = {count: 0}
  //   return initialState
  // }
  console.log(oldState, action)
  switch(action.type){
    case "INCREMENT":
      return {count: oldState.count + action.value}
    case "DECREMENT":
      return {count: oldState.count - action.value}
    default:
      return oldState
  }
}

const store = createStore(reducer)

console.log('the state is', store.getState())

class App extends Component {
  componentDidMount(){
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  increment = (value) => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    store.dispatch({type: "INCREMENT", value: value})
  };

  decrement = (value) => {
    // this.setState(prevState => ({ count: prevState.count - 1 }));
    store.dispatch({type: "DECREMENT", value})
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
